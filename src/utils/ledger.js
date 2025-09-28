const crypto = require('crypto');
const { prisma } = require('../prisma');

async function getLastBlock() {
  return prisma.ledgerBlock.findFirst({ orderBy: { index: 'desc' } });
}

function hashData(dataJson, prevHash) {
  return crypto
    .createHash('sha256')
    .update((prevHash || '') + dataJson)
    .digest('hex');
}

async function addBlock(payload) {
  const last = await getLastBlock();
  const index = last ? last.index + 1 : 0;
  const dataJson = JSON.stringify(payload);
  const dataHash = hashData(dataJson, last?.prevHash || last?.dataHash || null);
  return prisma.ledgerBlock.create({
    data: {
      index,
      prevHash: last ? last.dataHash : null,
      dataJson,
      dataHash,
    },
  });
}

module.exports = { addBlock };