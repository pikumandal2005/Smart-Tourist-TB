FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (leverage Docker layer caching)
COPY package*.json ./
# Copy prisma schema so postinstall can run prisma generate during install
COPY prisma ./prisma
RUN npm ci --omit=dev

# Copy application source
COPY . .

# Environment
ENV NODE_ENV=production
ENV PORT=4000

# Expose the port the app runs on
EXPOSE 4000

# Start the app (npm runs prestart automatically -> prisma migrate deploy)
CMD ["npm", "start"]