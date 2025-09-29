
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tourist
 * 
 */
export type Tourist = $Result.DefaultSelection<Prisma.$TouristPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model TourPlan
 * 
 */
export type TourPlan = $Result.DefaultSelection<Prisma.$TourPlanPayload>
/**
 * Model LocationPing
 * 
 */
export type LocationPing = $Result.DefaultSelection<Prisma.$LocationPingPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model Expenditure
 * 
 */
export type Expenditure = $Result.DefaultSelection<Prisma.$ExpenditurePayload>
/**
 * Model SafetyScore
 * 
 */
export type SafetyScore = $Result.DefaultSelection<Prisma.$SafetyScorePayload>
/**
 * Model LedgerBlock
 * 
 */
export type LedgerBlock = $Result.DefaultSelection<Prisma.$LedgerBlockPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tourists
 * const tourists = await prisma.tourist.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tourists
   * const tourists = await prisma.tourist.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tourist`: Exposes CRUD operations for the **Tourist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tourists
    * const tourists = await prisma.tourist.findMany()
    * ```
    */
  get tourist(): Prisma.TouristDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourPlan`: Exposes CRUD operations for the **TourPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourPlans
    * const tourPlans = await prisma.tourPlan.findMany()
    * ```
    */
  get tourPlan(): Prisma.TourPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locationPing`: Exposes CRUD operations for the **LocationPing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationPings
    * const locationPings = await prisma.locationPing.findMany()
    * ```
    */
  get locationPing(): Prisma.LocationPingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenditure`: Exposes CRUD operations for the **Expenditure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenditures
    * const expenditures = await prisma.expenditure.findMany()
    * ```
    */
  get expenditure(): Prisma.ExpenditureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.safetyScore`: Exposes CRUD operations for the **SafetyScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SafetyScores
    * const safetyScores = await prisma.safetyScore.findMany()
    * ```
    */
  get safetyScore(): Prisma.SafetyScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledgerBlock`: Exposes CRUD operations for the **LedgerBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerBlocks
    * const ledgerBlocks = await prisma.ledgerBlock.findMany()
    * ```
    */
  get ledgerBlock(): Prisma.LedgerBlockDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tourist: 'Tourist',
    Admin: 'Admin',
    TourPlan: 'TourPlan',
    LocationPing: 'LocationPing',
    Alert: 'Alert',
    Expenditure: 'Expenditure',
    SafetyScore: 'SafetyScore',
    LedgerBlock: 'LedgerBlock'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tourist" | "admin" | "tourPlan" | "locationPing" | "alert" | "expenditure" | "safetyScore" | "ledgerBlock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tourist: {
        payload: Prisma.$TouristPayload<ExtArgs>
        fields: Prisma.TouristFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TouristFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TouristFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload>
          }
          findFirst: {
            args: Prisma.TouristFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TouristFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload>
          }
          findMany: {
            args: Prisma.TouristFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload>[]
          }
          create: {
            args: Prisma.TouristCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload>
          }
          createMany: {
            args: Prisma.TouristCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TouristCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload>[]
          }
          delete: {
            args: Prisma.TouristDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload>
          }
          update: {
            args: Prisma.TouristUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload>
          }
          deleteMany: {
            args: Prisma.TouristDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TouristUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TouristUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload>[]
          }
          upsert: {
            args: Prisma.TouristUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TouristPayload>
          }
          aggregate: {
            args: Prisma.TouristAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourist>
          }
          groupBy: {
            args: Prisma.TouristGroupByArgs<ExtArgs>
            result: $Utils.Optional<TouristGroupByOutputType>[]
          }
          count: {
            args: Prisma.TouristCountArgs<ExtArgs>
            result: $Utils.Optional<TouristCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      TourPlan: {
        payload: Prisma.$TourPlanPayload<ExtArgs>
        fields: Prisma.TourPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload>
          }
          findFirst: {
            args: Prisma.TourPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload>
          }
          findMany: {
            args: Prisma.TourPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload>[]
          }
          create: {
            args: Prisma.TourPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload>
          }
          createMany: {
            args: Prisma.TourPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload>[]
          }
          delete: {
            args: Prisma.TourPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload>
          }
          update: {
            args: Prisma.TourPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload>
          }
          deleteMany: {
            args: Prisma.TourPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload>[]
          }
          upsert: {
            args: Prisma.TourPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPlanPayload>
          }
          aggregate: {
            args: Prisma.TourPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourPlan>
          }
          groupBy: {
            args: Prisma.TourPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourPlanCountArgs<ExtArgs>
            result: $Utils.Optional<TourPlanCountAggregateOutputType> | number
          }
        }
      }
      LocationPing: {
        payload: Prisma.$LocationPingPayload<ExtArgs>
        fields: Prisma.LocationPingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationPingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationPingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload>
          }
          findFirst: {
            args: Prisma.LocationPingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationPingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload>
          }
          findMany: {
            args: Prisma.LocationPingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload>[]
          }
          create: {
            args: Prisma.LocationPingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload>
          }
          createMany: {
            args: Prisma.LocationPingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationPingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload>[]
          }
          delete: {
            args: Prisma.LocationPingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload>
          }
          update: {
            args: Prisma.LocationPingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload>
          }
          deleteMany: {
            args: Prisma.LocationPingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationPingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationPingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload>[]
          }
          upsert: {
            args: Prisma.LocationPingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPingPayload>
          }
          aggregate: {
            args: Prisma.LocationPingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocationPing>
          }
          groupBy: {
            args: Prisma.LocationPingGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationPingGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationPingCountArgs<ExtArgs>
            result: $Utils.Optional<LocationPingCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      Expenditure: {
        payload: Prisma.$ExpenditurePayload<ExtArgs>
        fields: Prisma.ExpenditureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenditureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenditureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload>
          }
          findFirst: {
            args: Prisma.ExpenditureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenditureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload>
          }
          findMany: {
            args: Prisma.ExpenditureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload>[]
          }
          create: {
            args: Prisma.ExpenditureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload>
          }
          createMany: {
            args: Prisma.ExpenditureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenditureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload>[]
          }
          delete: {
            args: Prisma.ExpenditureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload>
          }
          update: {
            args: Prisma.ExpenditureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload>
          }
          deleteMany: {
            args: Prisma.ExpenditureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenditureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenditureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload>[]
          }
          upsert: {
            args: Prisma.ExpenditureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenditurePayload>
          }
          aggregate: {
            args: Prisma.ExpenditureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenditure>
          }
          groupBy: {
            args: Prisma.ExpenditureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenditureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenditureCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenditureCountAggregateOutputType> | number
          }
        }
      }
      SafetyScore: {
        payload: Prisma.$SafetyScorePayload<ExtArgs>
        fields: Prisma.SafetyScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SafetyScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SafetyScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload>
          }
          findFirst: {
            args: Prisma.SafetyScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SafetyScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload>
          }
          findMany: {
            args: Prisma.SafetyScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload>[]
          }
          create: {
            args: Prisma.SafetyScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload>
          }
          createMany: {
            args: Prisma.SafetyScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SafetyScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload>[]
          }
          delete: {
            args: Prisma.SafetyScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload>
          }
          update: {
            args: Prisma.SafetyScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload>
          }
          deleteMany: {
            args: Prisma.SafetyScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SafetyScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SafetyScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload>[]
          }
          upsert: {
            args: Prisma.SafetyScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafetyScorePayload>
          }
          aggregate: {
            args: Prisma.SafetyScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSafetyScore>
          }
          groupBy: {
            args: Prisma.SafetyScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<SafetyScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.SafetyScoreCountArgs<ExtArgs>
            result: $Utils.Optional<SafetyScoreCountAggregateOutputType> | number
          }
        }
      }
      LedgerBlock: {
        payload: Prisma.$LedgerBlockPayload<ExtArgs>
        fields: Prisma.LedgerBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload>
          }
          findFirst: {
            args: Prisma.LedgerBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload>
          }
          findMany: {
            args: Prisma.LedgerBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload>[]
          }
          create: {
            args: Prisma.LedgerBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload>
          }
          createMany: {
            args: Prisma.LedgerBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload>[]
          }
          delete: {
            args: Prisma.LedgerBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload>
          }
          update: {
            args: Prisma.LedgerBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload>
          }
          deleteMany: {
            args: Prisma.LedgerBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LedgerBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload>[]
          }
          upsert: {
            args: Prisma.LedgerBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerBlockPayload>
          }
          aggregate: {
            args: Prisma.LedgerBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerBlock>
          }
          groupBy: {
            args: Prisma.LedgerBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerBlockCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerBlockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tourist?: TouristOmit
    admin?: AdminOmit
    tourPlan?: TourPlanOmit
    locationPing?: LocationPingOmit
    alert?: AlertOmit
    expenditure?: ExpenditureOmit
    safetyScore?: SafetyScoreOmit
    ledgerBlock?: LedgerBlockOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TouristCountOutputType
   */

  export type TouristCountOutputType = {
    tourPlans: number
    pings: number
    alerts: number
    expenditures: number
    safetyScores: number
  }

  export type TouristCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourPlans?: boolean | TouristCountOutputTypeCountTourPlansArgs
    pings?: boolean | TouristCountOutputTypeCountPingsArgs
    alerts?: boolean | TouristCountOutputTypeCountAlertsArgs
    expenditures?: boolean | TouristCountOutputTypeCountExpendituresArgs
    safetyScores?: boolean | TouristCountOutputTypeCountSafetyScoresArgs
  }

  // Custom InputTypes
  /**
   * TouristCountOutputType without action
   */
  export type TouristCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TouristCountOutputType
     */
    select?: TouristCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TouristCountOutputType without action
   */
  export type TouristCountOutputTypeCountTourPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourPlanWhereInput
  }

  /**
   * TouristCountOutputType without action
   */
  export type TouristCountOutputTypeCountPingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationPingWhereInput
  }

  /**
   * TouristCountOutputType without action
   */
  export type TouristCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * TouristCountOutputType without action
   */
  export type TouristCountOutputTypeCountExpendituresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenditureWhereInput
  }

  /**
   * TouristCountOutputType without action
   */
  export type TouristCountOutputTypeCountSafetyScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SafetyScoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tourist
   */

  export type AggregateTourist = {
    _count: TouristCountAggregateOutputType | null
    _avg: TouristAvgAggregateOutputType | null
    _sum: TouristSumAggregateOutputType | null
    _min: TouristMinAggregateOutputType | null
    _max: TouristMaxAggregateOutputType | null
  }

  export type TouristAvgAggregateOutputType = {
    id: number | null
    companionsCount: number | null
  }

  export type TouristSumAggregateOutputType = {
    id: number | null
    companionsCount: number | null
  }

  export type TouristMinAggregateOutputType = {
    id: number | null
    uniqueId: string | null
    email: string | null
    mobile: string | null
    passwordHash: string | null
    fullName: string | null
    aadhaarNumber: string | null
    companionsCount: number | null
    gender: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TouristMaxAggregateOutputType = {
    id: number | null
    uniqueId: string | null
    email: string | null
    mobile: string | null
    passwordHash: string | null
    fullName: string | null
    aadhaarNumber: string | null
    companionsCount: number | null
    gender: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TouristCountAggregateOutputType = {
    id: number
    uniqueId: number
    email: number
    mobile: number
    passwordHash: number
    fullName: number
    aadhaarNumber: number
    emergencyDetails: number
    companionsCount: number
    gender: number
    language: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TouristAvgAggregateInputType = {
    id?: true
    companionsCount?: true
  }

  export type TouristSumAggregateInputType = {
    id?: true
    companionsCount?: true
  }

  export type TouristMinAggregateInputType = {
    id?: true
    uniqueId?: true
    email?: true
    mobile?: true
    passwordHash?: true
    fullName?: true
    aadhaarNumber?: true
    companionsCount?: true
    gender?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TouristMaxAggregateInputType = {
    id?: true
    uniqueId?: true
    email?: true
    mobile?: true
    passwordHash?: true
    fullName?: true
    aadhaarNumber?: true
    companionsCount?: true
    gender?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TouristCountAggregateInputType = {
    id?: true
    uniqueId?: true
    email?: true
    mobile?: true
    passwordHash?: true
    fullName?: true
    aadhaarNumber?: true
    emergencyDetails?: true
    companionsCount?: true
    gender?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TouristAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tourist to aggregate.
     */
    where?: TouristWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tourists to fetch.
     */
    orderBy?: TouristOrderByWithRelationInput | TouristOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TouristWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tourists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tourists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tourists
    **/
    _count?: true | TouristCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TouristAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TouristSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TouristMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TouristMaxAggregateInputType
  }

  export type GetTouristAggregateType<T extends TouristAggregateArgs> = {
        [P in keyof T & keyof AggregateTourist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourist[P]>
      : GetScalarType<T[P], AggregateTourist[P]>
  }




  export type TouristGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TouristWhereInput
    orderBy?: TouristOrderByWithAggregationInput | TouristOrderByWithAggregationInput[]
    by: TouristScalarFieldEnum[] | TouristScalarFieldEnum
    having?: TouristScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TouristCountAggregateInputType | true
    _avg?: TouristAvgAggregateInputType
    _sum?: TouristSumAggregateInputType
    _min?: TouristMinAggregateInputType
    _max?: TouristMaxAggregateInputType
  }

  export type TouristGroupByOutputType = {
    id: number
    uniqueId: string
    email: string
    mobile: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber: string | null
    emergencyDetails: JsonValue | null
    companionsCount: number
    gender: string | null
    language: string | null
    createdAt: Date
    updatedAt: Date
    _count: TouristCountAggregateOutputType | null
    _avg: TouristAvgAggregateOutputType | null
    _sum: TouristSumAggregateOutputType | null
    _min: TouristMinAggregateOutputType | null
    _max: TouristMaxAggregateOutputType | null
  }

  type GetTouristGroupByPayload<T extends TouristGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TouristGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TouristGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TouristGroupByOutputType[P]>
            : GetScalarType<T[P], TouristGroupByOutputType[P]>
        }
      >
    >


  export type TouristSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    email?: boolean
    mobile?: boolean
    passwordHash?: boolean
    fullName?: boolean
    aadhaarNumber?: boolean
    emergencyDetails?: boolean
    companionsCount?: boolean
    gender?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tourPlans?: boolean | Tourist$tourPlansArgs<ExtArgs>
    pings?: boolean | Tourist$pingsArgs<ExtArgs>
    alerts?: boolean | Tourist$alertsArgs<ExtArgs>
    expenditures?: boolean | Tourist$expendituresArgs<ExtArgs>
    safetyScores?: boolean | Tourist$safetyScoresArgs<ExtArgs>
    _count?: boolean | TouristCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourist"]>

  export type TouristSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    email?: boolean
    mobile?: boolean
    passwordHash?: boolean
    fullName?: boolean
    aadhaarNumber?: boolean
    emergencyDetails?: boolean
    companionsCount?: boolean
    gender?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tourist"]>

  export type TouristSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    email?: boolean
    mobile?: boolean
    passwordHash?: boolean
    fullName?: boolean
    aadhaarNumber?: boolean
    emergencyDetails?: boolean
    companionsCount?: boolean
    gender?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tourist"]>

  export type TouristSelectScalar = {
    id?: boolean
    uniqueId?: boolean
    email?: boolean
    mobile?: boolean
    passwordHash?: boolean
    fullName?: boolean
    aadhaarNumber?: boolean
    emergencyDetails?: boolean
    companionsCount?: boolean
    gender?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TouristOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueId" | "email" | "mobile" | "passwordHash" | "fullName" | "aadhaarNumber" | "emergencyDetails" | "companionsCount" | "gender" | "language" | "createdAt" | "updatedAt", ExtArgs["result"]["tourist"]>
  export type TouristInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourPlans?: boolean | Tourist$tourPlansArgs<ExtArgs>
    pings?: boolean | Tourist$pingsArgs<ExtArgs>
    alerts?: boolean | Tourist$alertsArgs<ExtArgs>
    expenditures?: boolean | Tourist$expendituresArgs<ExtArgs>
    safetyScores?: boolean | Tourist$safetyScoresArgs<ExtArgs>
    _count?: boolean | TouristCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TouristIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TouristIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TouristPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tourist"
    objects: {
      tourPlans: Prisma.$TourPlanPayload<ExtArgs>[]
      pings: Prisma.$LocationPingPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      expenditures: Prisma.$ExpenditurePayload<ExtArgs>[]
      safetyScores: Prisma.$SafetyScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uniqueId: string
      email: string
      mobile: string | null
      passwordHash: string
      fullName: string
      aadhaarNumber: string | null
      emergencyDetails: Prisma.JsonValue | null
      companionsCount: number
      gender: string | null
      language: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tourist"]>
    composites: {}
  }

  type TouristGetPayload<S extends boolean | null | undefined | TouristDefaultArgs> = $Result.GetResult<Prisma.$TouristPayload, S>

  type TouristCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TouristFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TouristCountAggregateInputType | true
    }

  export interface TouristDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tourist'], meta: { name: 'Tourist' } }
    /**
     * Find zero or one Tourist that matches the filter.
     * @param {TouristFindUniqueArgs} args - Arguments to find a Tourist
     * @example
     * // Get one Tourist
     * const tourist = await prisma.tourist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TouristFindUniqueArgs>(args: SelectSubset<T, TouristFindUniqueArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tourist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TouristFindUniqueOrThrowArgs} args - Arguments to find a Tourist
     * @example
     * // Get one Tourist
     * const tourist = await prisma.tourist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TouristFindUniqueOrThrowArgs>(args: SelectSubset<T, TouristFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tourist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristFindFirstArgs} args - Arguments to find a Tourist
     * @example
     * // Get one Tourist
     * const tourist = await prisma.tourist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TouristFindFirstArgs>(args?: SelectSubset<T, TouristFindFirstArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tourist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristFindFirstOrThrowArgs} args - Arguments to find a Tourist
     * @example
     * // Get one Tourist
     * const tourist = await prisma.tourist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TouristFindFirstOrThrowArgs>(args?: SelectSubset<T, TouristFindFirstOrThrowArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tourists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tourists
     * const tourists = await prisma.tourist.findMany()
     * 
     * // Get first 10 Tourists
     * const tourists = await prisma.tourist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const touristWithIdOnly = await prisma.tourist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TouristFindManyArgs>(args?: SelectSubset<T, TouristFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tourist.
     * @param {TouristCreateArgs} args - Arguments to create a Tourist.
     * @example
     * // Create one Tourist
     * const Tourist = await prisma.tourist.create({
     *   data: {
     *     // ... data to create a Tourist
     *   }
     * })
     * 
     */
    create<T extends TouristCreateArgs>(args: SelectSubset<T, TouristCreateArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tourists.
     * @param {TouristCreateManyArgs} args - Arguments to create many Tourists.
     * @example
     * // Create many Tourists
     * const tourist = await prisma.tourist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TouristCreateManyArgs>(args?: SelectSubset<T, TouristCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tourists and returns the data saved in the database.
     * @param {TouristCreateManyAndReturnArgs} args - Arguments to create many Tourists.
     * @example
     * // Create many Tourists
     * const tourist = await prisma.tourist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tourists and only return the `id`
     * const touristWithIdOnly = await prisma.tourist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TouristCreateManyAndReturnArgs>(args?: SelectSubset<T, TouristCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tourist.
     * @param {TouristDeleteArgs} args - Arguments to delete one Tourist.
     * @example
     * // Delete one Tourist
     * const Tourist = await prisma.tourist.delete({
     *   where: {
     *     // ... filter to delete one Tourist
     *   }
     * })
     * 
     */
    delete<T extends TouristDeleteArgs>(args: SelectSubset<T, TouristDeleteArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tourist.
     * @param {TouristUpdateArgs} args - Arguments to update one Tourist.
     * @example
     * // Update one Tourist
     * const tourist = await prisma.tourist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TouristUpdateArgs>(args: SelectSubset<T, TouristUpdateArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tourists.
     * @param {TouristDeleteManyArgs} args - Arguments to filter Tourists to delete.
     * @example
     * // Delete a few Tourists
     * const { count } = await prisma.tourist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TouristDeleteManyArgs>(args?: SelectSubset<T, TouristDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tourists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tourists
     * const tourist = await prisma.tourist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TouristUpdateManyArgs>(args: SelectSubset<T, TouristUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tourists and returns the data updated in the database.
     * @param {TouristUpdateManyAndReturnArgs} args - Arguments to update many Tourists.
     * @example
     * // Update many Tourists
     * const tourist = await prisma.tourist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tourists and only return the `id`
     * const touristWithIdOnly = await prisma.tourist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TouristUpdateManyAndReturnArgs>(args: SelectSubset<T, TouristUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tourist.
     * @param {TouristUpsertArgs} args - Arguments to update or create a Tourist.
     * @example
     * // Update or create a Tourist
     * const tourist = await prisma.tourist.upsert({
     *   create: {
     *     // ... data to create a Tourist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tourist we want to update
     *   }
     * })
     */
    upsert<T extends TouristUpsertArgs>(args: SelectSubset<T, TouristUpsertArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tourists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristCountArgs} args - Arguments to filter Tourists to count.
     * @example
     * // Count the number of Tourists
     * const count = await prisma.tourist.count({
     *   where: {
     *     // ... the filter for the Tourists we want to count
     *   }
     * })
    **/
    count<T extends TouristCountArgs>(
      args?: Subset<T, TouristCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TouristCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tourist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TouristAggregateArgs>(args: Subset<T, TouristAggregateArgs>): Prisma.PrismaPromise<GetTouristAggregateType<T>>

    /**
     * Group by Tourist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TouristGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TouristGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TouristGroupByArgs['orderBy'] }
        : { orderBy?: TouristGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TouristGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTouristGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tourist model
   */
  readonly fields: TouristFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tourist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TouristClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tourPlans<T extends Tourist$tourPlansArgs<ExtArgs> = {}>(args?: Subset<T, Tourist$tourPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pings<T extends Tourist$pingsArgs<ExtArgs> = {}>(args?: Subset<T, Tourist$pingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Tourist$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Tourist$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenditures<T extends Tourist$expendituresArgs<ExtArgs> = {}>(args?: Subset<T, Tourist$expendituresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    safetyScores<T extends Tourist$safetyScoresArgs<ExtArgs> = {}>(args?: Subset<T, Tourist$safetyScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tourist model
   */
  interface TouristFieldRefs {
    readonly id: FieldRef<"Tourist", 'Int'>
    readonly uniqueId: FieldRef<"Tourist", 'String'>
    readonly email: FieldRef<"Tourist", 'String'>
    readonly mobile: FieldRef<"Tourist", 'String'>
    readonly passwordHash: FieldRef<"Tourist", 'String'>
    readonly fullName: FieldRef<"Tourist", 'String'>
    readonly aadhaarNumber: FieldRef<"Tourist", 'String'>
    readonly emergencyDetails: FieldRef<"Tourist", 'Json'>
    readonly companionsCount: FieldRef<"Tourist", 'Int'>
    readonly gender: FieldRef<"Tourist", 'String'>
    readonly language: FieldRef<"Tourist", 'String'>
    readonly createdAt: FieldRef<"Tourist", 'DateTime'>
    readonly updatedAt: FieldRef<"Tourist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tourist findUnique
   */
  export type TouristFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouristInclude<ExtArgs> | null
    /**
     * Filter, which Tourist to fetch.
     */
    where: TouristWhereUniqueInput
  }

  /**
   * Tourist findUniqueOrThrow
   */
  export type TouristFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouristInclude<ExtArgs> | null
    /**
     * Filter, which Tourist to fetch.
     */
    where: TouristWhereUniqueInput
  }

  /**
   * Tourist findFirst
   */
  export type TouristFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouristInclude<ExtArgs> | null
    /**
     * Filter, which Tourist to fetch.
     */
    where?: TouristWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tourists to fetch.
     */
    orderBy?: TouristOrderByWithRelationInput | TouristOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tourists.
     */
    cursor?: TouristWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tourists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tourists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tourists.
     */
    distinct?: TouristScalarFieldEnum | TouristScalarFieldEnum[]
  }

  /**
   * Tourist findFirstOrThrow
   */
  export type TouristFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouristInclude<ExtArgs> | null
    /**
     * Filter, which Tourist to fetch.
     */
    where?: TouristWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tourists to fetch.
     */
    orderBy?: TouristOrderByWithRelationInput | TouristOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tourists.
     */
    cursor?: TouristWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tourists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tourists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tourists.
     */
    distinct?: TouristScalarFieldEnum | TouristScalarFieldEnum[]
  }

  /**
   * Tourist findMany
   */
  export type TouristFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouristInclude<ExtArgs> | null
    /**
     * Filter, which Tourists to fetch.
     */
    where?: TouristWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tourists to fetch.
     */
    orderBy?: TouristOrderByWithRelationInput | TouristOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tourists.
     */
    cursor?: TouristWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tourists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tourists.
     */
    skip?: number
    distinct?: TouristScalarFieldEnum | TouristScalarFieldEnum[]
  }

  /**
   * Tourist create
   */
  export type TouristCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouristInclude<ExtArgs> | null
    /**
     * The data needed to create a Tourist.
     */
    data: XOR<TouristCreateInput, TouristUncheckedCreateInput>
  }

  /**
   * Tourist createMany
   */
  export type TouristCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tourists.
     */
    data: TouristCreateManyInput | TouristCreateManyInput[]
  }

  /**
   * Tourist createManyAndReturn
   */
  export type TouristCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * The data used to create many Tourists.
     */
    data: TouristCreateManyInput | TouristCreateManyInput[]
  }

  /**
   * Tourist update
   */
  export type TouristUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouristInclude<ExtArgs> | null
    /**
     * The data needed to update a Tourist.
     */
    data: XOR<TouristUpdateInput, TouristUncheckedUpdateInput>
    /**
     * Choose, which Tourist to update.
     */
    where: TouristWhereUniqueInput
  }

  /**
   * Tourist updateMany
   */
  export type TouristUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tourists.
     */
    data: XOR<TouristUpdateManyMutationInput, TouristUncheckedUpdateManyInput>
    /**
     * Filter which Tourists to update
     */
    where?: TouristWhereInput
    /**
     * Limit how many Tourists to update.
     */
    limit?: number
  }

  /**
   * Tourist updateManyAndReturn
   */
  export type TouristUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * The data used to update Tourists.
     */
    data: XOR<TouristUpdateManyMutationInput, TouristUncheckedUpdateManyInput>
    /**
     * Filter which Tourists to update
     */
    where?: TouristWhereInput
    /**
     * Limit how many Tourists to update.
     */
    limit?: number
  }

  /**
   * Tourist upsert
   */
  export type TouristUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouristInclude<ExtArgs> | null
    /**
     * The filter to search for the Tourist to update in case it exists.
     */
    where: TouristWhereUniqueInput
    /**
     * In case the Tourist found by the `where` argument doesn't exist, create a new Tourist with this data.
     */
    create: XOR<TouristCreateInput, TouristUncheckedCreateInput>
    /**
     * In case the Tourist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TouristUpdateInput, TouristUncheckedUpdateInput>
  }

  /**
   * Tourist delete
   */
  export type TouristDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouristInclude<ExtArgs> | null
    /**
     * Filter which Tourist to delete.
     */
    where: TouristWhereUniqueInput
  }

  /**
   * Tourist deleteMany
   */
  export type TouristDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tourists to delete
     */
    where?: TouristWhereInput
    /**
     * Limit how many Tourists to delete.
     */
    limit?: number
  }

  /**
   * Tourist.tourPlans
   */
  export type Tourist$tourPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
    where?: TourPlanWhereInput
    orderBy?: TourPlanOrderByWithRelationInput | TourPlanOrderByWithRelationInput[]
    cursor?: TourPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourPlanScalarFieldEnum | TourPlanScalarFieldEnum[]
  }

  /**
   * Tourist.pings
   */
  export type Tourist$pingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
    where?: LocationPingWhereInput
    orderBy?: LocationPingOrderByWithRelationInput | LocationPingOrderByWithRelationInput[]
    cursor?: LocationPingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationPingScalarFieldEnum | LocationPingScalarFieldEnum[]
  }

  /**
   * Tourist.alerts
   */
  export type Tourist$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Tourist.expenditures
   */
  export type Tourist$expendituresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
    where?: ExpenditureWhereInput
    orderBy?: ExpenditureOrderByWithRelationInput | ExpenditureOrderByWithRelationInput[]
    cursor?: ExpenditureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenditureScalarFieldEnum | ExpenditureScalarFieldEnum[]
  }

  /**
   * Tourist.safetyScores
   */
  export type Tourist$safetyScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
    where?: SafetyScoreWhereInput
    orderBy?: SafetyScoreOrderByWithRelationInput | SafetyScoreOrderByWithRelationInput[]
    cursor?: SafetyScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SafetyScoreScalarFieldEnum | SafetyScoreScalarFieldEnum[]
  }

  /**
   * Tourist without action
   */
  export type TouristDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tourist
     */
    select?: TouristSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tourist
     */
    omit?: TouristOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TouristInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    role: number
    createdAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    name: string
    role: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "role" | "createdAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      name: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly passwordHash: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model TourPlan
   */

  export type AggregateTourPlan = {
    _count: TourPlanCountAggregateOutputType | null
    _avg: TourPlanAvgAggregateOutputType | null
    _sum: TourPlanSumAggregateOutputType | null
    _min: TourPlanMinAggregateOutputType | null
    _max: TourPlanMaxAggregateOutputType | null
  }

  export type TourPlanAvgAggregateOutputType = {
    id: number | null
    touristId: number | null
    latitude: number | null
    longitude: number | null
    geofenceRadiusMeters: number | null
  }

  export type TourPlanSumAggregateOutputType = {
    id: number | null
    touristId: number | null
    latitude: number | null
    longitude: number | null
    geofenceRadiusMeters: number | null
  }

  export type TourPlanMinAggregateOutputType = {
    id: number | null
    touristId: number | null
    startDate: Date | null
    endDate: Date | null
    locationName: string | null
    latitude: number | null
    longitude: number | null
    geofenceRadiusMeters: number | null
    createdAt: Date | null
  }

  export type TourPlanMaxAggregateOutputType = {
    id: number | null
    touristId: number | null
    startDate: Date | null
    endDate: Date | null
    locationName: string | null
    latitude: number | null
    longitude: number | null
    geofenceRadiusMeters: number | null
    createdAt: Date | null
  }

  export type TourPlanCountAggregateOutputType = {
    id: number
    touristId: number
    startDate: number
    endDate: number
    locationName: number
    latitude: number
    longitude: number
    geofenceRadiusMeters: number
    createdAt: number
    _all: number
  }


  export type TourPlanAvgAggregateInputType = {
    id?: true
    touristId?: true
    latitude?: true
    longitude?: true
    geofenceRadiusMeters?: true
  }

  export type TourPlanSumAggregateInputType = {
    id?: true
    touristId?: true
    latitude?: true
    longitude?: true
    geofenceRadiusMeters?: true
  }

  export type TourPlanMinAggregateInputType = {
    id?: true
    touristId?: true
    startDate?: true
    endDate?: true
    locationName?: true
    latitude?: true
    longitude?: true
    geofenceRadiusMeters?: true
    createdAt?: true
  }

  export type TourPlanMaxAggregateInputType = {
    id?: true
    touristId?: true
    startDate?: true
    endDate?: true
    locationName?: true
    latitude?: true
    longitude?: true
    geofenceRadiusMeters?: true
    createdAt?: true
  }

  export type TourPlanCountAggregateInputType = {
    id?: true
    touristId?: true
    startDate?: true
    endDate?: true
    locationName?: true
    latitude?: true
    longitude?: true
    geofenceRadiusMeters?: true
    createdAt?: true
    _all?: true
  }

  export type TourPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourPlan to aggregate.
     */
    where?: TourPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPlans to fetch.
     */
    orderBy?: TourPlanOrderByWithRelationInput | TourPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourPlans
    **/
    _count?: true | TourPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourPlanMaxAggregateInputType
  }

  export type GetTourPlanAggregateType<T extends TourPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateTourPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourPlan[P]>
      : GetScalarType<T[P], AggregateTourPlan[P]>
  }




  export type TourPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourPlanWhereInput
    orderBy?: TourPlanOrderByWithAggregationInput | TourPlanOrderByWithAggregationInput[]
    by: TourPlanScalarFieldEnum[] | TourPlanScalarFieldEnum
    having?: TourPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourPlanCountAggregateInputType | true
    _avg?: TourPlanAvgAggregateInputType
    _sum?: TourPlanSumAggregateInputType
    _min?: TourPlanMinAggregateInputType
    _max?: TourPlanMaxAggregateInputType
  }

  export type TourPlanGroupByOutputType = {
    id: number
    touristId: number
    startDate: Date
    endDate: Date
    locationName: string
    latitude: number
    longitude: number
    geofenceRadiusMeters: number
    createdAt: Date
    _count: TourPlanCountAggregateOutputType | null
    _avg: TourPlanAvgAggregateOutputType | null
    _sum: TourPlanSumAggregateOutputType | null
    _min: TourPlanMinAggregateOutputType | null
    _max: TourPlanMaxAggregateOutputType | null
  }

  type GetTourPlanGroupByPayload<T extends TourPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourPlanGroupByOutputType[P]>
            : GetScalarType<T[P], TourPlanGroupByOutputType[P]>
        }
      >
    >


  export type TourPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    startDate?: boolean
    endDate?: boolean
    locationName?: boolean
    latitude?: boolean
    longitude?: boolean
    geofenceRadiusMeters?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourPlan"]>

  export type TourPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    startDate?: boolean
    endDate?: boolean
    locationName?: boolean
    latitude?: boolean
    longitude?: boolean
    geofenceRadiusMeters?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourPlan"]>

  export type TourPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    startDate?: boolean
    endDate?: boolean
    locationName?: boolean
    latitude?: boolean
    longitude?: boolean
    geofenceRadiusMeters?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourPlan"]>

  export type TourPlanSelectScalar = {
    id?: boolean
    touristId?: boolean
    startDate?: boolean
    endDate?: boolean
    locationName?: boolean
    latitude?: boolean
    longitude?: boolean
    geofenceRadiusMeters?: boolean
    createdAt?: boolean
  }

  export type TourPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "touristId" | "startDate" | "endDate" | "locationName" | "latitude" | "longitude" | "geofenceRadiusMeters" | "createdAt", ExtArgs["result"]["tourPlan"]>
  export type TourPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }
  export type TourPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }
  export type TourPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }

  export type $TourPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourPlan"
    objects: {
      tourist: Prisma.$TouristPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      touristId: number
      startDate: Date
      endDate: Date
      locationName: string
      latitude: number
      longitude: number
      geofenceRadiusMeters: number
      createdAt: Date
    }, ExtArgs["result"]["tourPlan"]>
    composites: {}
  }

  type TourPlanGetPayload<S extends boolean | null | undefined | TourPlanDefaultArgs> = $Result.GetResult<Prisma.$TourPlanPayload, S>

  type TourPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourPlanCountAggregateInputType | true
    }

  export interface TourPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourPlan'], meta: { name: 'TourPlan' } }
    /**
     * Find zero or one TourPlan that matches the filter.
     * @param {TourPlanFindUniqueArgs} args - Arguments to find a TourPlan
     * @example
     * // Get one TourPlan
     * const tourPlan = await prisma.tourPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourPlanFindUniqueArgs>(args: SelectSubset<T, TourPlanFindUniqueArgs<ExtArgs>>): Prisma__TourPlanClient<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourPlanFindUniqueOrThrowArgs} args - Arguments to find a TourPlan
     * @example
     * // Get one TourPlan
     * const tourPlan = await prisma.tourPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, TourPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourPlanClient<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPlanFindFirstArgs} args - Arguments to find a TourPlan
     * @example
     * // Get one TourPlan
     * const tourPlan = await prisma.tourPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourPlanFindFirstArgs>(args?: SelectSubset<T, TourPlanFindFirstArgs<ExtArgs>>): Prisma__TourPlanClient<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPlanFindFirstOrThrowArgs} args - Arguments to find a TourPlan
     * @example
     * // Get one TourPlan
     * const tourPlan = await prisma.tourPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, TourPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourPlanClient<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourPlans
     * const tourPlans = await prisma.tourPlan.findMany()
     * 
     * // Get first 10 TourPlans
     * const tourPlans = await prisma.tourPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourPlanWithIdOnly = await prisma.tourPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourPlanFindManyArgs>(args?: SelectSubset<T, TourPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourPlan.
     * @param {TourPlanCreateArgs} args - Arguments to create a TourPlan.
     * @example
     * // Create one TourPlan
     * const TourPlan = await prisma.tourPlan.create({
     *   data: {
     *     // ... data to create a TourPlan
     *   }
     * })
     * 
     */
    create<T extends TourPlanCreateArgs>(args: SelectSubset<T, TourPlanCreateArgs<ExtArgs>>): Prisma__TourPlanClient<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourPlans.
     * @param {TourPlanCreateManyArgs} args - Arguments to create many TourPlans.
     * @example
     * // Create many TourPlans
     * const tourPlan = await prisma.tourPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourPlanCreateManyArgs>(args?: SelectSubset<T, TourPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourPlans and returns the data saved in the database.
     * @param {TourPlanCreateManyAndReturnArgs} args - Arguments to create many TourPlans.
     * @example
     * // Create many TourPlans
     * const tourPlan = await prisma.tourPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourPlans and only return the `id`
     * const tourPlanWithIdOnly = await prisma.tourPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, TourPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourPlan.
     * @param {TourPlanDeleteArgs} args - Arguments to delete one TourPlan.
     * @example
     * // Delete one TourPlan
     * const TourPlan = await prisma.tourPlan.delete({
     *   where: {
     *     // ... filter to delete one TourPlan
     *   }
     * })
     * 
     */
    delete<T extends TourPlanDeleteArgs>(args: SelectSubset<T, TourPlanDeleteArgs<ExtArgs>>): Prisma__TourPlanClient<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourPlan.
     * @param {TourPlanUpdateArgs} args - Arguments to update one TourPlan.
     * @example
     * // Update one TourPlan
     * const tourPlan = await prisma.tourPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourPlanUpdateArgs>(args: SelectSubset<T, TourPlanUpdateArgs<ExtArgs>>): Prisma__TourPlanClient<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourPlans.
     * @param {TourPlanDeleteManyArgs} args - Arguments to filter TourPlans to delete.
     * @example
     * // Delete a few TourPlans
     * const { count } = await prisma.tourPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourPlanDeleteManyArgs>(args?: SelectSubset<T, TourPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourPlans
     * const tourPlan = await prisma.tourPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourPlanUpdateManyArgs>(args: SelectSubset<T, TourPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourPlans and returns the data updated in the database.
     * @param {TourPlanUpdateManyAndReturnArgs} args - Arguments to update many TourPlans.
     * @example
     * // Update many TourPlans
     * const tourPlan = await prisma.tourPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourPlans and only return the `id`
     * const tourPlanWithIdOnly = await prisma.tourPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TourPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, TourPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourPlan.
     * @param {TourPlanUpsertArgs} args - Arguments to update or create a TourPlan.
     * @example
     * // Update or create a TourPlan
     * const tourPlan = await prisma.tourPlan.upsert({
     *   create: {
     *     // ... data to create a TourPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourPlan we want to update
     *   }
     * })
     */
    upsert<T extends TourPlanUpsertArgs>(args: SelectSubset<T, TourPlanUpsertArgs<ExtArgs>>): Prisma__TourPlanClient<$Result.GetResult<Prisma.$TourPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPlanCountArgs} args - Arguments to filter TourPlans to count.
     * @example
     * // Count the number of TourPlans
     * const count = await prisma.tourPlan.count({
     *   where: {
     *     // ... the filter for the TourPlans we want to count
     *   }
     * })
    **/
    count<T extends TourPlanCountArgs>(
      args?: Subset<T, TourPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TourPlanAggregateArgs>(args: Subset<T, TourPlanAggregateArgs>): Prisma.PrismaPromise<GetTourPlanAggregateType<T>>

    /**
     * Group by TourPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TourPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourPlanGroupByArgs['orderBy'] }
        : { orderBy?: TourPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TourPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourPlan model
   */
  readonly fields: TourPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tourist<T extends TouristDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TouristDefaultArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TourPlan model
   */
  interface TourPlanFieldRefs {
    readonly id: FieldRef<"TourPlan", 'Int'>
    readonly touristId: FieldRef<"TourPlan", 'Int'>
    readonly startDate: FieldRef<"TourPlan", 'DateTime'>
    readonly endDate: FieldRef<"TourPlan", 'DateTime'>
    readonly locationName: FieldRef<"TourPlan", 'String'>
    readonly latitude: FieldRef<"TourPlan", 'Float'>
    readonly longitude: FieldRef<"TourPlan", 'Float'>
    readonly geofenceRadiusMeters: FieldRef<"TourPlan", 'Int'>
    readonly createdAt: FieldRef<"TourPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TourPlan findUnique
   */
  export type TourPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
    /**
     * Filter, which TourPlan to fetch.
     */
    where: TourPlanWhereUniqueInput
  }

  /**
   * TourPlan findUniqueOrThrow
   */
  export type TourPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
    /**
     * Filter, which TourPlan to fetch.
     */
    where: TourPlanWhereUniqueInput
  }

  /**
   * TourPlan findFirst
   */
  export type TourPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
    /**
     * Filter, which TourPlan to fetch.
     */
    where?: TourPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPlans to fetch.
     */
    orderBy?: TourPlanOrderByWithRelationInput | TourPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourPlans.
     */
    cursor?: TourPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourPlans.
     */
    distinct?: TourPlanScalarFieldEnum | TourPlanScalarFieldEnum[]
  }

  /**
   * TourPlan findFirstOrThrow
   */
  export type TourPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
    /**
     * Filter, which TourPlan to fetch.
     */
    where?: TourPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPlans to fetch.
     */
    orderBy?: TourPlanOrderByWithRelationInput | TourPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourPlans.
     */
    cursor?: TourPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourPlans.
     */
    distinct?: TourPlanScalarFieldEnum | TourPlanScalarFieldEnum[]
  }

  /**
   * TourPlan findMany
   */
  export type TourPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
    /**
     * Filter, which TourPlans to fetch.
     */
    where?: TourPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourPlans to fetch.
     */
    orderBy?: TourPlanOrderByWithRelationInput | TourPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourPlans.
     */
    cursor?: TourPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourPlans.
     */
    skip?: number
    distinct?: TourPlanScalarFieldEnum | TourPlanScalarFieldEnum[]
  }

  /**
   * TourPlan create
   */
  export type TourPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a TourPlan.
     */
    data: XOR<TourPlanCreateInput, TourPlanUncheckedCreateInput>
  }

  /**
   * TourPlan createMany
   */
  export type TourPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourPlans.
     */
    data: TourPlanCreateManyInput | TourPlanCreateManyInput[]
  }

  /**
   * TourPlan createManyAndReturn
   */
  export type TourPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * The data used to create many TourPlans.
     */
    data: TourPlanCreateManyInput | TourPlanCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourPlan update
   */
  export type TourPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a TourPlan.
     */
    data: XOR<TourPlanUpdateInput, TourPlanUncheckedUpdateInput>
    /**
     * Choose, which TourPlan to update.
     */
    where: TourPlanWhereUniqueInput
  }

  /**
   * TourPlan updateMany
   */
  export type TourPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourPlans.
     */
    data: XOR<TourPlanUpdateManyMutationInput, TourPlanUncheckedUpdateManyInput>
    /**
     * Filter which TourPlans to update
     */
    where?: TourPlanWhereInput
    /**
     * Limit how many TourPlans to update.
     */
    limit?: number
  }

  /**
   * TourPlan updateManyAndReturn
   */
  export type TourPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * The data used to update TourPlans.
     */
    data: XOR<TourPlanUpdateManyMutationInput, TourPlanUncheckedUpdateManyInput>
    /**
     * Filter which TourPlans to update
     */
    where?: TourPlanWhereInput
    /**
     * Limit how many TourPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourPlan upsert
   */
  export type TourPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the TourPlan to update in case it exists.
     */
    where: TourPlanWhereUniqueInput
    /**
     * In case the TourPlan found by the `where` argument doesn't exist, create a new TourPlan with this data.
     */
    create: XOR<TourPlanCreateInput, TourPlanUncheckedCreateInput>
    /**
     * In case the TourPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourPlanUpdateInput, TourPlanUncheckedUpdateInput>
  }

  /**
   * TourPlan delete
   */
  export type TourPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
    /**
     * Filter which TourPlan to delete.
     */
    where: TourPlanWhereUniqueInput
  }

  /**
   * TourPlan deleteMany
   */
  export type TourPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourPlans to delete
     */
    where?: TourPlanWhereInput
    /**
     * Limit how many TourPlans to delete.
     */
    limit?: number
  }

  /**
   * TourPlan without action
   */
  export type TourPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourPlan
     */
    select?: TourPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourPlan
     */
    omit?: TourPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourPlanInclude<ExtArgs> | null
  }


  /**
   * Model LocationPing
   */

  export type AggregateLocationPing = {
    _count: LocationPingCountAggregateOutputType | null
    _avg: LocationPingAvgAggregateOutputType | null
    _sum: LocationPingSumAggregateOutputType | null
    _min: LocationPingMinAggregateOutputType | null
    _max: LocationPingMaxAggregateOutputType | null
  }

  export type LocationPingAvgAggregateOutputType = {
    id: number | null
    touristId: number | null
    latitude: number | null
    longitude: number | null
    speedKmh: number | null
  }

  export type LocationPingSumAggregateOutputType = {
    id: number | null
    touristId: number | null
    latitude: number | null
    longitude: number | null
    speedKmh: number | null
  }

  export type LocationPingMinAggregateOutputType = {
    id: number | null
    touristId: number | null
    latitude: number | null
    longitude: number | null
    speedKmh: number | null
    createdAt: Date | null
  }

  export type LocationPingMaxAggregateOutputType = {
    id: number | null
    touristId: number | null
    latitude: number | null
    longitude: number | null
    speedKmh: number | null
    createdAt: Date | null
  }

  export type LocationPingCountAggregateOutputType = {
    id: number
    touristId: number
    latitude: number
    longitude: number
    speedKmh: number
    createdAt: number
    _all: number
  }


  export type LocationPingAvgAggregateInputType = {
    id?: true
    touristId?: true
    latitude?: true
    longitude?: true
    speedKmh?: true
  }

  export type LocationPingSumAggregateInputType = {
    id?: true
    touristId?: true
    latitude?: true
    longitude?: true
    speedKmh?: true
  }

  export type LocationPingMinAggregateInputType = {
    id?: true
    touristId?: true
    latitude?: true
    longitude?: true
    speedKmh?: true
    createdAt?: true
  }

  export type LocationPingMaxAggregateInputType = {
    id?: true
    touristId?: true
    latitude?: true
    longitude?: true
    speedKmh?: true
    createdAt?: true
  }

  export type LocationPingCountAggregateInputType = {
    id?: true
    touristId?: true
    latitude?: true
    longitude?: true
    speedKmh?: true
    createdAt?: true
    _all?: true
  }

  export type LocationPingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationPing to aggregate.
     */
    where?: LocationPingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationPings to fetch.
     */
    orderBy?: LocationPingOrderByWithRelationInput | LocationPingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationPingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationPings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationPings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationPings
    **/
    _count?: true | LocationPingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationPingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationPingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationPingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationPingMaxAggregateInputType
  }

  export type GetLocationPingAggregateType<T extends LocationPingAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationPing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationPing[P]>
      : GetScalarType<T[P], AggregateLocationPing[P]>
  }




  export type LocationPingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationPingWhereInput
    orderBy?: LocationPingOrderByWithAggregationInput | LocationPingOrderByWithAggregationInput[]
    by: LocationPingScalarFieldEnum[] | LocationPingScalarFieldEnum
    having?: LocationPingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationPingCountAggregateInputType | true
    _avg?: LocationPingAvgAggregateInputType
    _sum?: LocationPingSumAggregateInputType
    _min?: LocationPingMinAggregateInputType
    _max?: LocationPingMaxAggregateInputType
  }

  export type LocationPingGroupByOutputType = {
    id: number
    touristId: number
    latitude: number
    longitude: number
    speedKmh: number | null
    createdAt: Date
    _count: LocationPingCountAggregateOutputType | null
    _avg: LocationPingAvgAggregateOutputType | null
    _sum: LocationPingSumAggregateOutputType | null
    _min: LocationPingMinAggregateOutputType | null
    _max: LocationPingMaxAggregateOutputType | null
  }

  type GetLocationPingGroupByPayload<T extends LocationPingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationPingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationPingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationPingGroupByOutputType[P]>
            : GetScalarType<T[P], LocationPingGroupByOutputType[P]>
        }
      >
    >


  export type LocationPingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    latitude?: boolean
    longitude?: boolean
    speedKmh?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationPing"]>

  export type LocationPingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    latitude?: boolean
    longitude?: boolean
    speedKmh?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationPing"]>

  export type LocationPingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    latitude?: boolean
    longitude?: boolean
    speedKmh?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationPing"]>

  export type LocationPingSelectScalar = {
    id?: boolean
    touristId?: boolean
    latitude?: boolean
    longitude?: boolean
    speedKmh?: boolean
    createdAt?: boolean
  }

  export type LocationPingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "touristId" | "latitude" | "longitude" | "speedKmh" | "createdAt", ExtArgs["result"]["locationPing"]>
  export type LocationPingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }
  export type LocationPingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }
  export type LocationPingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }

  export type $LocationPingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocationPing"
    objects: {
      tourist: Prisma.$TouristPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      touristId: number
      latitude: number
      longitude: number
      speedKmh: number | null
      createdAt: Date
    }, ExtArgs["result"]["locationPing"]>
    composites: {}
  }

  type LocationPingGetPayload<S extends boolean | null | undefined | LocationPingDefaultArgs> = $Result.GetResult<Prisma.$LocationPingPayload, S>

  type LocationPingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationPingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationPingCountAggregateInputType | true
    }

  export interface LocationPingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationPing'], meta: { name: 'LocationPing' } }
    /**
     * Find zero or one LocationPing that matches the filter.
     * @param {LocationPingFindUniqueArgs} args - Arguments to find a LocationPing
     * @example
     * // Get one LocationPing
     * const locationPing = await prisma.locationPing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationPingFindUniqueArgs>(args: SelectSubset<T, LocationPingFindUniqueArgs<ExtArgs>>): Prisma__LocationPingClient<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocationPing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationPingFindUniqueOrThrowArgs} args - Arguments to find a LocationPing
     * @example
     * // Get one LocationPing
     * const locationPing = await prisma.locationPing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationPingFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationPingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationPingClient<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationPing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationPingFindFirstArgs} args - Arguments to find a LocationPing
     * @example
     * // Get one LocationPing
     * const locationPing = await prisma.locationPing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationPingFindFirstArgs>(args?: SelectSubset<T, LocationPingFindFirstArgs<ExtArgs>>): Prisma__LocationPingClient<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationPing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationPingFindFirstOrThrowArgs} args - Arguments to find a LocationPing
     * @example
     * // Get one LocationPing
     * const locationPing = await prisma.locationPing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationPingFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationPingFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationPingClient<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocationPings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationPingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationPings
     * const locationPings = await prisma.locationPing.findMany()
     * 
     * // Get first 10 LocationPings
     * const locationPings = await prisma.locationPing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationPingWithIdOnly = await prisma.locationPing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationPingFindManyArgs>(args?: SelectSubset<T, LocationPingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocationPing.
     * @param {LocationPingCreateArgs} args - Arguments to create a LocationPing.
     * @example
     * // Create one LocationPing
     * const LocationPing = await prisma.locationPing.create({
     *   data: {
     *     // ... data to create a LocationPing
     *   }
     * })
     * 
     */
    create<T extends LocationPingCreateArgs>(args: SelectSubset<T, LocationPingCreateArgs<ExtArgs>>): Prisma__LocationPingClient<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocationPings.
     * @param {LocationPingCreateManyArgs} args - Arguments to create many LocationPings.
     * @example
     * // Create many LocationPings
     * const locationPing = await prisma.locationPing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationPingCreateManyArgs>(args?: SelectSubset<T, LocationPingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocationPings and returns the data saved in the database.
     * @param {LocationPingCreateManyAndReturnArgs} args - Arguments to create many LocationPings.
     * @example
     * // Create many LocationPings
     * const locationPing = await prisma.locationPing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocationPings and only return the `id`
     * const locationPingWithIdOnly = await prisma.locationPing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationPingCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationPingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocationPing.
     * @param {LocationPingDeleteArgs} args - Arguments to delete one LocationPing.
     * @example
     * // Delete one LocationPing
     * const LocationPing = await prisma.locationPing.delete({
     *   where: {
     *     // ... filter to delete one LocationPing
     *   }
     * })
     * 
     */
    delete<T extends LocationPingDeleteArgs>(args: SelectSubset<T, LocationPingDeleteArgs<ExtArgs>>): Prisma__LocationPingClient<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocationPing.
     * @param {LocationPingUpdateArgs} args - Arguments to update one LocationPing.
     * @example
     * // Update one LocationPing
     * const locationPing = await prisma.locationPing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationPingUpdateArgs>(args: SelectSubset<T, LocationPingUpdateArgs<ExtArgs>>): Prisma__LocationPingClient<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocationPings.
     * @param {LocationPingDeleteManyArgs} args - Arguments to filter LocationPings to delete.
     * @example
     * // Delete a few LocationPings
     * const { count } = await prisma.locationPing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationPingDeleteManyArgs>(args?: SelectSubset<T, LocationPingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationPings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationPingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationPings
     * const locationPing = await prisma.locationPing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationPingUpdateManyArgs>(args: SelectSubset<T, LocationPingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationPings and returns the data updated in the database.
     * @param {LocationPingUpdateManyAndReturnArgs} args - Arguments to update many LocationPings.
     * @example
     * // Update many LocationPings
     * const locationPing = await prisma.locationPing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocationPings and only return the `id`
     * const locationPingWithIdOnly = await prisma.locationPing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationPingUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationPingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocationPing.
     * @param {LocationPingUpsertArgs} args - Arguments to update or create a LocationPing.
     * @example
     * // Update or create a LocationPing
     * const locationPing = await prisma.locationPing.upsert({
     *   create: {
     *     // ... data to create a LocationPing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationPing we want to update
     *   }
     * })
     */
    upsert<T extends LocationPingUpsertArgs>(args: SelectSubset<T, LocationPingUpsertArgs<ExtArgs>>): Prisma__LocationPingClient<$Result.GetResult<Prisma.$LocationPingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocationPings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationPingCountArgs} args - Arguments to filter LocationPings to count.
     * @example
     * // Count the number of LocationPings
     * const count = await prisma.locationPing.count({
     *   where: {
     *     // ... the filter for the LocationPings we want to count
     *   }
     * })
    **/
    count<T extends LocationPingCountArgs>(
      args?: Subset<T, LocationPingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationPingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationPing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationPingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationPingAggregateArgs>(args: Subset<T, LocationPingAggregateArgs>): Prisma.PrismaPromise<GetLocationPingAggregateType<T>>

    /**
     * Group by LocationPing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationPingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationPingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationPingGroupByArgs['orderBy'] }
        : { orderBy?: LocationPingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationPingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationPingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocationPing model
   */
  readonly fields: LocationPingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationPing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationPingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tourist<T extends TouristDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TouristDefaultArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LocationPing model
   */
  interface LocationPingFieldRefs {
    readonly id: FieldRef<"LocationPing", 'Int'>
    readonly touristId: FieldRef<"LocationPing", 'Int'>
    readonly latitude: FieldRef<"LocationPing", 'Float'>
    readonly longitude: FieldRef<"LocationPing", 'Float'>
    readonly speedKmh: FieldRef<"LocationPing", 'Float'>
    readonly createdAt: FieldRef<"LocationPing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LocationPing findUnique
   */
  export type LocationPingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
    /**
     * Filter, which LocationPing to fetch.
     */
    where: LocationPingWhereUniqueInput
  }

  /**
   * LocationPing findUniqueOrThrow
   */
  export type LocationPingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
    /**
     * Filter, which LocationPing to fetch.
     */
    where: LocationPingWhereUniqueInput
  }

  /**
   * LocationPing findFirst
   */
  export type LocationPingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
    /**
     * Filter, which LocationPing to fetch.
     */
    where?: LocationPingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationPings to fetch.
     */
    orderBy?: LocationPingOrderByWithRelationInput | LocationPingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationPings.
     */
    cursor?: LocationPingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationPings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationPings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationPings.
     */
    distinct?: LocationPingScalarFieldEnum | LocationPingScalarFieldEnum[]
  }

  /**
   * LocationPing findFirstOrThrow
   */
  export type LocationPingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
    /**
     * Filter, which LocationPing to fetch.
     */
    where?: LocationPingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationPings to fetch.
     */
    orderBy?: LocationPingOrderByWithRelationInput | LocationPingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationPings.
     */
    cursor?: LocationPingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationPings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationPings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationPings.
     */
    distinct?: LocationPingScalarFieldEnum | LocationPingScalarFieldEnum[]
  }

  /**
   * LocationPing findMany
   */
  export type LocationPingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
    /**
     * Filter, which LocationPings to fetch.
     */
    where?: LocationPingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationPings to fetch.
     */
    orderBy?: LocationPingOrderByWithRelationInput | LocationPingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationPings.
     */
    cursor?: LocationPingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationPings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationPings.
     */
    skip?: number
    distinct?: LocationPingScalarFieldEnum | LocationPingScalarFieldEnum[]
  }

  /**
   * LocationPing create
   */
  export type LocationPingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
    /**
     * The data needed to create a LocationPing.
     */
    data: XOR<LocationPingCreateInput, LocationPingUncheckedCreateInput>
  }

  /**
   * LocationPing createMany
   */
  export type LocationPingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationPings.
     */
    data: LocationPingCreateManyInput | LocationPingCreateManyInput[]
  }

  /**
   * LocationPing createManyAndReturn
   */
  export type LocationPingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * The data used to create many LocationPings.
     */
    data: LocationPingCreateManyInput | LocationPingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationPing update
   */
  export type LocationPingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
    /**
     * The data needed to update a LocationPing.
     */
    data: XOR<LocationPingUpdateInput, LocationPingUncheckedUpdateInput>
    /**
     * Choose, which LocationPing to update.
     */
    where: LocationPingWhereUniqueInput
  }

  /**
   * LocationPing updateMany
   */
  export type LocationPingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationPings.
     */
    data: XOR<LocationPingUpdateManyMutationInput, LocationPingUncheckedUpdateManyInput>
    /**
     * Filter which LocationPings to update
     */
    where?: LocationPingWhereInput
    /**
     * Limit how many LocationPings to update.
     */
    limit?: number
  }

  /**
   * LocationPing updateManyAndReturn
   */
  export type LocationPingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * The data used to update LocationPings.
     */
    data: XOR<LocationPingUpdateManyMutationInput, LocationPingUncheckedUpdateManyInput>
    /**
     * Filter which LocationPings to update
     */
    where?: LocationPingWhereInput
    /**
     * Limit how many LocationPings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationPing upsert
   */
  export type LocationPingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
    /**
     * The filter to search for the LocationPing to update in case it exists.
     */
    where: LocationPingWhereUniqueInput
    /**
     * In case the LocationPing found by the `where` argument doesn't exist, create a new LocationPing with this data.
     */
    create: XOR<LocationPingCreateInput, LocationPingUncheckedCreateInput>
    /**
     * In case the LocationPing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationPingUpdateInput, LocationPingUncheckedUpdateInput>
  }

  /**
   * LocationPing delete
   */
  export type LocationPingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
    /**
     * Filter which LocationPing to delete.
     */
    where: LocationPingWhereUniqueInput
  }

  /**
   * LocationPing deleteMany
   */
  export type LocationPingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationPings to delete
     */
    where?: LocationPingWhereInput
    /**
     * Limit how many LocationPings to delete.
     */
    limit?: number
  }

  /**
   * LocationPing without action
   */
  export type LocationPingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationPing
     */
    select?: LocationPingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationPing
     */
    omit?: LocationPingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationPingInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    id: number | null
    touristId: number | null
  }

  export type AlertSumAggregateOutputType = {
    id: number | null
    touristId: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: number | null
    touristId: number | null
    type: string | null
    message: string | null
    resolved: boolean | null
    createdAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: number | null
    touristId: number | null
    type: string | null
    message: string | null
    resolved: boolean | null
    createdAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    touristId: number
    type: number
    message: number
    resolved: number
    createdAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    id?: true
    touristId?: true
  }

  export type AlertSumAggregateInputType = {
    id?: true
    touristId?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    touristId?: true
    type?: true
    message?: true
    resolved?: true
    createdAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    touristId?: true
    type?: true
    message?: true
    resolved?: true
    createdAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    touristId?: true
    type?: true
    message?: true
    resolved?: true
    createdAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: number
    touristId: number
    type: string
    message: string | null
    resolved: boolean
    createdAt: Date
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    type?: boolean
    message?: boolean
    resolved?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    type?: boolean
    message?: boolean
    resolved?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    type?: boolean
    message?: boolean
    resolved?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    touristId?: boolean
    type?: boolean
    message?: boolean
    resolved?: boolean
    createdAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "touristId" | "type" | "message" | "resolved" | "createdAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      tourist: Prisma.$TouristPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      touristId: number
      type: string
      message: string | null
      resolved: boolean
      createdAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tourist<T extends TouristDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TouristDefaultArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'Int'>
    readonly touristId: FieldRef<"Alert", 'Int'>
    readonly type: FieldRef<"Alert", 'String'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly resolved: FieldRef<"Alert", 'Boolean'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model Expenditure
   */

  export type AggregateExpenditure = {
    _count: ExpenditureCountAggregateOutputType | null
    _avg: ExpenditureAvgAggregateOutputType | null
    _sum: ExpenditureSumAggregateOutputType | null
    _min: ExpenditureMinAggregateOutputType | null
    _max: ExpenditureMaxAggregateOutputType | null
  }

  export type ExpenditureAvgAggregateOutputType = {
    id: number | null
    touristId: number | null
    amount: number | null
  }

  export type ExpenditureSumAggregateOutputType = {
    id: number | null
    touristId: number | null
    amount: number | null
  }

  export type ExpenditureMinAggregateOutputType = {
    id: number | null
    touristId: number | null
    item: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type ExpenditureMaxAggregateOutputType = {
    id: number | null
    touristId: number | null
    item: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type ExpenditureCountAggregateOutputType = {
    id: number
    touristId: number
    item: number
    amount: number
    createdAt: number
    _all: number
  }


  export type ExpenditureAvgAggregateInputType = {
    id?: true
    touristId?: true
    amount?: true
  }

  export type ExpenditureSumAggregateInputType = {
    id?: true
    touristId?: true
    amount?: true
  }

  export type ExpenditureMinAggregateInputType = {
    id?: true
    touristId?: true
    item?: true
    amount?: true
    createdAt?: true
  }

  export type ExpenditureMaxAggregateInputType = {
    id?: true
    touristId?: true
    item?: true
    amount?: true
    createdAt?: true
  }

  export type ExpenditureCountAggregateInputType = {
    id?: true
    touristId?: true
    item?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenditureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenditure to aggregate.
     */
    where?: ExpenditureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenditures to fetch.
     */
    orderBy?: ExpenditureOrderByWithRelationInput | ExpenditureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenditureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenditures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenditures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenditures
    **/
    _count?: true | ExpenditureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenditureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenditureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenditureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenditureMaxAggregateInputType
  }

  export type GetExpenditureAggregateType<T extends ExpenditureAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenditure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenditure[P]>
      : GetScalarType<T[P], AggregateExpenditure[P]>
  }




  export type ExpenditureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenditureWhereInput
    orderBy?: ExpenditureOrderByWithAggregationInput | ExpenditureOrderByWithAggregationInput[]
    by: ExpenditureScalarFieldEnum[] | ExpenditureScalarFieldEnum
    having?: ExpenditureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenditureCountAggregateInputType | true
    _avg?: ExpenditureAvgAggregateInputType
    _sum?: ExpenditureSumAggregateInputType
    _min?: ExpenditureMinAggregateInputType
    _max?: ExpenditureMaxAggregateInputType
  }

  export type ExpenditureGroupByOutputType = {
    id: number
    touristId: number
    item: string
    amount: number
    createdAt: Date
    _count: ExpenditureCountAggregateOutputType | null
    _avg: ExpenditureAvgAggregateOutputType | null
    _sum: ExpenditureSumAggregateOutputType | null
    _min: ExpenditureMinAggregateOutputType | null
    _max: ExpenditureMaxAggregateOutputType | null
  }

  type GetExpenditureGroupByPayload<T extends ExpenditureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenditureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenditureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenditureGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenditureGroupByOutputType[P]>
        }
      >
    >


  export type ExpenditureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    item?: boolean
    amount?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenditure"]>

  export type ExpenditureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    item?: boolean
    amount?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenditure"]>

  export type ExpenditureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    item?: boolean
    amount?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenditure"]>

  export type ExpenditureSelectScalar = {
    id?: boolean
    touristId?: boolean
    item?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type ExpenditureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "touristId" | "item" | "amount" | "createdAt", ExtArgs["result"]["expenditure"]>
  export type ExpenditureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }
  export type ExpenditureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }
  export type ExpenditureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }

  export type $ExpenditurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expenditure"
    objects: {
      tourist: Prisma.$TouristPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      touristId: number
      item: string
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["expenditure"]>
    composites: {}
  }

  type ExpenditureGetPayload<S extends boolean | null | undefined | ExpenditureDefaultArgs> = $Result.GetResult<Prisma.$ExpenditurePayload, S>

  type ExpenditureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenditureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenditureCountAggregateInputType | true
    }

  export interface ExpenditureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expenditure'], meta: { name: 'Expenditure' } }
    /**
     * Find zero or one Expenditure that matches the filter.
     * @param {ExpenditureFindUniqueArgs} args - Arguments to find a Expenditure
     * @example
     * // Get one Expenditure
     * const expenditure = await prisma.expenditure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenditureFindUniqueArgs>(args: SelectSubset<T, ExpenditureFindUniqueArgs<ExtArgs>>): Prisma__ExpenditureClient<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expenditure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenditureFindUniqueOrThrowArgs} args - Arguments to find a Expenditure
     * @example
     * // Get one Expenditure
     * const expenditure = await prisma.expenditure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenditureFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenditureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenditureClient<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenditure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenditureFindFirstArgs} args - Arguments to find a Expenditure
     * @example
     * // Get one Expenditure
     * const expenditure = await prisma.expenditure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenditureFindFirstArgs>(args?: SelectSubset<T, ExpenditureFindFirstArgs<ExtArgs>>): Prisma__ExpenditureClient<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenditure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenditureFindFirstOrThrowArgs} args - Arguments to find a Expenditure
     * @example
     * // Get one Expenditure
     * const expenditure = await prisma.expenditure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenditureFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenditureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenditureClient<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenditures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenditureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenditures
     * const expenditures = await prisma.expenditure.findMany()
     * 
     * // Get first 10 Expenditures
     * const expenditures = await prisma.expenditure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenditureWithIdOnly = await prisma.expenditure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenditureFindManyArgs>(args?: SelectSubset<T, ExpenditureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expenditure.
     * @param {ExpenditureCreateArgs} args - Arguments to create a Expenditure.
     * @example
     * // Create one Expenditure
     * const Expenditure = await prisma.expenditure.create({
     *   data: {
     *     // ... data to create a Expenditure
     *   }
     * })
     * 
     */
    create<T extends ExpenditureCreateArgs>(args: SelectSubset<T, ExpenditureCreateArgs<ExtArgs>>): Prisma__ExpenditureClient<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenditures.
     * @param {ExpenditureCreateManyArgs} args - Arguments to create many Expenditures.
     * @example
     * // Create many Expenditures
     * const expenditure = await prisma.expenditure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenditureCreateManyArgs>(args?: SelectSubset<T, ExpenditureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenditures and returns the data saved in the database.
     * @param {ExpenditureCreateManyAndReturnArgs} args - Arguments to create many Expenditures.
     * @example
     * // Create many Expenditures
     * const expenditure = await prisma.expenditure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenditures and only return the `id`
     * const expenditureWithIdOnly = await prisma.expenditure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenditureCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenditureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expenditure.
     * @param {ExpenditureDeleteArgs} args - Arguments to delete one Expenditure.
     * @example
     * // Delete one Expenditure
     * const Expenditure = await prisma.expenditure.delete({
     *   where: {
     *     // ... filter to delete one Expenditure
     *   }
     * })
     * 
     */
    delete<T extends ExpenditureDeleteArgs>(args: SelectSubset<T, ExpenditureDeleteArgs<ExtArgs>>): Prisma__ExpenditureClient<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expenditure.
     * @param {ExpenditureUpdateArgs} args - Arguments to update one Expenditure.
     * @example
     * // Update one Expenditure
     * const expenditure = await prisma.expenditure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenditureUpdateArgs>(args: SelectSubset<T, ExpenditureUpdateArgs<ExtArgs>>): Prisma__ExpenditureClient<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenditures.
     * @param {ExpenditureDeleteManyArgs} args - Arguments to filter Expenditures to delete.
     * @example
     * // Delete a few Expenditures
     * const { count } = await prisma.expenditure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenditureDeleteManyArgs>(args?: SelectSubset<T, ExpenditureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenditures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenditureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenditures
     * const expenditure = await prisma.expenditure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenditureUpdateManyArgs>(args: SelectSubset<T, ExpenditureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenditures and returns the data updated in the database.
     * @param {ExpenditureUpdateManyAndReturnArgs} args - Arguments to update many Expenditures.
     * @example
     * // Update many Expenditures
     * const expenditure = await prisma.expenditure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenditures and only return the `id`
     * const expenditureWithIdOnly = await prisma.expenditure.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenditureUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenditureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expenditure.
     * @param {ExpenditureUpsertArgs} args - Arguments to update or create a Expenditure.
     * @example
     * // Update or create a Expenditure
     * const expenditure = await prisma.expenditure.upsert({
     *   create: {
     *     // ... data to create a Expenditure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenditure we want to update
     *   }
     * })
     */
    upsert<T extends ExpenditureUpsertArgs>(args: SelectSubset<T, ExpenditureUpsertArgs<ExtArgs>>): Prisma__ExpenditureClient<$Result.GetResult<Prisma.$ExpenditurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenditures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenditureCountArgs} args - Arguments to filter Expenditures to count.
     * @example
     * // Count the number of Expenditures
     * const count = await prisma.expenditure.count({
     *   where: {
     *     // ... the filter for the Expenditures we want to count
     *   }
     * })
    **/
    count<T extends ExpenditureCountArgs>(
      args?: Subset<T, ExpenditureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenditureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenditure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenditureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenditureAggregateArgs>(args: Subset<T, ExpenditureAggregateArgs>): Prisma.PrismaPromise<GetExpenditureAggregateType<T>>

    /**
     * Group by Expenditure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenditureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenditureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenditureGroupByArgs['orderBy'] }
        : { orderBy?: ExpenditureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenditureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenditureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expenditure model
   */
  readonly fields: ExpenditureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expenditure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenditureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tourist<T extends TouristDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TouristDefaultArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expenditure model
   */
  interface ExpenditureFieldRefs {
    readonly id: FieldRef<"Expenditure", 'Int'>
    readonly touristId: FieldRef<"Expenditure", 'Int'>
    readonly item: FieldRef<"Expenditure", 'String'>
    readonly amount: FieldRef<"Expenditure", 'Float'>
    readonly createdAt: FieldRef<"Expenditure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expenditure findUnique
   */
  export type ExpenditureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
    /**
     * Filter, which Expenditure to fetch.
     */
    where: ExpenditureWhereUniqueInput
  }

  /**
   * Expenditure findUniqueOrThrow
   */
  export type ExpenditureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
    /**
     * Filter, which Expenditure to fetch.
     */
    where: ExpenditureWhereUniqueInput
  }

  /**
   * Expenditure findFirst
   */
  export type ExpenditureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
    /**
     * Filter, which Expenditure to fetch.
     */
    where?: ExpenditureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenditures to fetch.
     */
    orderBy?: ExpenditureOrderByWithRelationInput | ExpenditureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenditures.
     */
    cursor?: ExpenditureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenditures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenditures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenditures.
     */
    distinct?: ExpenditureScalarFieldEnum | ExpenditureScalarFieldEnum[]
  }

  /**
   * Expenditure findFirstOrThrow
   */
  export type ExpenditureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
    /**
     * Filter, which Expenditure to fetch.
     */
    where?: ExpenditureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenditures to fetch.
     */
    orderBy?: ExpenditureOrderByWithRelationInput | ExpenditureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenditures.
     */
    cursor?: ExpenditureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenditures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenditures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenditures.
     */
    distinct?: ExpenditureScalarFieldEnum | ExpenditureScalarFieldEnum[]
  }

  /**
   * Expenditure findMany
   */
  export type ExpenditureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
    /**
     * Filter, which Expenditures to fetch.
     */
    where?: ExpenditureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenditures to fetch.
     */
    orderBy?: ExpenditureOrderByWithRelationInput | ExpenditureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenditures.
     */
    cursor?: ExpenditureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenditures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenditures.
     */
    skip?: number
    distinct?: ExpenditureScalarFieldEnum | ExpenditureScalarFieldEnum[]
  }

  /**
   * Expenditure create
   */
  export type ExpenditureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
    /**
     * The data needed to create a Expenditure.
     */
    data: XOR<ExpenditureCreateInput, ExpenditureUncheckedCreateInput>
  }

  /**
   * Expenditure createMany
   */
  export type ExpenditureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenditures.
     */
    data: ExpenditureCreateManyInput | ExpenditureCreateManyInput[]
  }

  /**
   * Expenditure createManyAndReturn
   */
  export type ExpenditureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * The data used to create many Expenditures.
     */
    data: ExpenditureCreateManyInput | ExpenditureCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expenditure update
   */
  export type ExpenditureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
    /**
     * The data needed to update a Expenditure.
     */
    data: XOR<ExpenditureUpdateInput, ExpenditureUncheckedUpdateInput>
    /**
     * Choose, which Expenditure to update.
     */
    where: ExpenditureWhereUniqueInput
  }

  /**
   * Expenditure updateMany
   */
  export type ExpenditureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenditures.
     */
    data: XOR<ExpenditureUpdateManyMutationInput, ExpenditureUncheckedUpdateManyInput>
    /**
     * Filter which Expenditures to update
     */
    where?: ExpenditureWhereInput
    /**
     * Limit how many Expenditures to update.
     */
    limit?: number
  }

  /**
   * Expenditure updateManyAndReturn
   */
  export type ExpenditureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * The data used to update Expenditures.
     */
    data: XOR<ExpenditureUpdateManyMutationInput, ExpenditureUncheckedUpdateManyInput>
    /**
     * Filter which Expenditures to update
     */
    where?: ExpenditureWhereInput
    /**
     * Limit how many Expenditures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expenditure upsert
   */
  export type ExpenditureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
    /**
     * The filter to search for the Expenditure to update in case it exists.
     */
    where: ExpenditureWhereUniqueInput
    /**
     * In case the Expenditure found by the `where` argument doesn't exist, create a new Expenditure with this data.
     */
    create: XOR<ExpenditureCreateInput, ExpenditureUncheckedCreateInput>
    /**
     * In case the Expenditure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenditureUpdateInput, ExpenditureUncheckedUpdateInput>
  }

  /**
   * Expenditure delete
   */
  export type ExpenditureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
    /**
     * Filter which Expenditure to delete.
     */
    where: ExpenditureWhereUniqueInput
  }

  /**
   * Expenditure deleteMany
   */
  export type ExpenditureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenditures to delete
     */
    where?: ExpenditureWhereInput
    /**
     * Limit how many Expenditures to delete.
     */
    limit?: number
  }

  /**
   * Expenditure without action
   */
  export type ExpenditureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenditure
     */
    select?: ExpenditureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenditure
     */
    omit?: ExpenditureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenditureInclude<ExtArgs> | null
  }


  /**
   * Model SafetyScore
   */

  export type AggregateSafetyScore = {
    _count: SafetyScoreCountAggregateOutputType | null
    _avg: SafetyScoreAvgAggregateOutputType | null
    _sum: SafetyScoreSumAggregateOutputType | null
    _min: SafetyScoreMinAggregateOutputType | null
    _max: SafetyScoreMaxAggregateOutputType | null
  }

  export type SafetyScoreAvgAggregateOutputType = {
    id: number | null
    touristId: number | null
    score: number | null
  }

  export type SafetyScoreSumAggregateOutputType = {
    id: number | null
    touristId: number | null
    score: number | null
  }

  export type SafetyScoreMinAggregateOutputType = {
    id: number | null
    touristId: number | null
    score: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type SafetyScoreMaxAggregateOutputType = {
    id: number | null
    touristId: number | null
    score: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type SafetyScoreCountAggregateOutputType = {
    id: number
    touristId: number
    score: number
    reason: number
    createdAt: number
    _all: number
  }


  export type SafetyScoreAvgAggregateInputType = {
    id?: true
    touristId?: true
    score?: true
  }

  export type SafetyScoreSumAggregateInputType = {
    id?: true
    touristId?: true
    score?: true
  }

  export type SafetyScoreMinAggregateInputType = {
    id?: true
    touristId?: true
    score?: true
    reason?: true
    createdAt?: true
  }

  export type SafetyScoreMaxAggregateInputType = {
    id?: true
    touristId?: true
    score?: true
    reason?: true
    createdAt?: true
  }

  export type SafetyScoreCountAggregateInputType = {
    id?: true
    touristId?: true
    score?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type SafetyScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SafetyScore to aggregate.
     */
    where?: SafetyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafetyScores to fetch.
     */
    orderBy?: SafetyScoreOrderByWithRelationInput | SafetyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SafetyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafetyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafetyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SafetyScores
    **/
    _count?: true | SafetyScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SafetyScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SafetyScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SafetyScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SafetyScoreMaxAggregateInputType
  }

  export type GetSafetyScoreAggregateType<T extends SafetyScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateSafetyScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSafetyScore[P]>
      : GetScalarType<T[P], AggregateSafetyScore[P]>
  }




  export type SafetyScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SafetyScoreWhereInput
    orderBy?: SafetyScoreOrderByWithAggregationInput | SafetyScoreOrderByWithAggregationInput[]
    by: SafetyScoreScalarFieldEnum[] | SafetyScoreScalarFieldEnum
    having?: SafetyScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SafetyScoreCountAggregateInputType | true
    _avg?: SafetyScoreAvgAggregateInputType
    _sum?: SafetyScoreSumAggregateInputType
    _min?: SafetyScoreMinAggregateInputType
    _max?: SafetyScoreMaxAggregateInputType
  }

  export type SafetyScoreGroupByOutputType = {
    id: number
    touristId: number
    score: number
    reason: string | null
    createdAt: Date
    _count: SafetyScoreCountAggregateOutputType | null
    _avg: SafetyScoreAvgAggregateOutputType | null
    _sum: SafetyScoreSumAggregateOutputType | null
    _min: SafetyScoreMinAggregateOutputType | null
    _max: SafetyScoreMaxAggregateOutputType | null
  }

  type GetSafetyScoreGroupByPayload<T extends SafetyScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SafetyScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SafetyScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SafetyScoreGroupByOutputType[P]>
            : GetScalarType<T[P], SafetyScoreGroupByOutputType[P]>
        }
      >
    >


  export type SafetyScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    score?: boolean
    reason?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["safetyScore"]>

  export type SafetyScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    score?: boolean
    reason?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["safetyScore"]>

  export type SafetyScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    touristId?: boolean
    score?: boolean
    reason?: boolean
    createdAt?: boolean
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["safetyScore"]>

  export type SafetyScoreSelectScalar = {
    id?: boolean
    touristId?: boolean
    score?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type SafetyScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "touristId" | "score" | "reason" | "createdAt", ExtArgs["result"]["safetyScore"]>
  export type SafetyScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }
  export type SafetyScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }
  export type SafetyScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tourist?: boolean | TouristDefaultArgs<ExtArgs>
  }

  export type $SafetyScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SafetyScore"
    objects: {
      tourist: Prisma.$TouristPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      touristId: number
      score: number
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["safetyScore"]>
    composites: {}
  }

  type SafetyScoreGetPayload<S extends boolean | null | undefined | SafetyScoreDefaultArgs> = $Result.GetResult<Prisma.$SafetyScorePayload, S>

  type SafetyScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SafetyScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SafetyScoreCountAggregateInputType | true
    }

  export interface SafetyScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SafetyScore'], meta: { name: 'SafetyScore' } }
    /**
     * Find zero or one SafetyScore that matches the filter.
     * @param {SafetyScoreFindUniqueArgs} args - Arguments to find a SafetyScore
     * @example
     * // Get one SafetyScore
     * const safetyScore = await prisma.safetyScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SafetyScoreFindUniqueArgs>(args: SelectSubset<T, SafetyScoreFindUniqueArgs<ExtArgs>>): Prisma__SafetyScoreClient<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SafetyScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SafetyScoreFindUniqueOrThrowArgs} args - Arguments to find a SafetyScore
     * @example
     * // Get one SafetyScore
     * const safetyScore = await prisma.safetyScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SafetyScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, SafetyScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SafetyScoreClient<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SafetyScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyScoreFindFirstArgs} args - Arguments to find a SafetyScore
     * @example
     * // Get one SafetyScore
     * const safetyScore = await prisma.safetyScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SafetyScoreFindFirstArgs>(args?: SelectSubset<T, SafetyScoreFindFirstArgs<ExtArgs>>): Prisma__SafetyScoreClient<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SafetyScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyScoreFindFirstOrThrowArgs} args - Arguments to find a SafetyScore
     * @example
     * // Get one SafetyScore
     * const safetyScore = await prisma.safetyScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SafetyScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, SafetyScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__SafetyScoreClient<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SafetyScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SafetyScores
     * const safetyScores = await prisma.safetyScore.findMany()
     * 
     * // Get first 10 SafetyScores
     * const safetyScores = await prisma.safetyScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const safetyScoreWithIdOnly = await prisma.safetyScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SafetyScoreFindManyArgs>(args?: SelectSubset<T, SafetyScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SafetyScore.
     * @param {SafetyScoreCreateArgs} args - Arguments to create a SafetyScore.
     * @example
     * // Create one SafetyScore
     * const SafetyScore = await prisma.safetyScore.create({
     *   data: {
     *     // ... data to create a SafetyScore
     *   }
     * })
     * 
     */
    create<T extends SafetyScoreCreateArgs>(args: SelectSubset<T, SafetyScoreCreateArgs<ExtArgs>>): Prisma__SafetyScoreClient<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SafetyScores.
     * @param {SafetyScoreCreateManyArgs} args - Arguments to create many SafetyScores.
     * @example
     * // Create many SafetyScores
     * const safetyScore = await prisma.safetyScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SafetyScoreCreateManyArgs>(args?: SelectSubset<T, SafetyScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SafetyScores and returns the data saved in the database.
     * @param {SafetyScoreCreateManyAndReturnArgs} args - Arguments to create many SafetyScores.
     * @example
     * // Create many SafetyScores
     * const safetyScore = await prisma.safetyScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SafetyScores and only return the `id`
     * const safetyScoreWithIdOnly = await prisma.safetyScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SafetyScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, SafetyScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SafetyScore.
     * @param {SafetyScoreDeleteArgs} args - Arguments to delete one SafetyScore.
     * @example
     * // Delete one SafetyScore
     * const SafetyScore = await prisma.safetyScore.delete({
     *   where: {
     *     // ... filter to delete one SafetyScore
     *   }
     * })
     * 
     */
    delete<T extends SafetyScoreDeleteArgs>(args: SelectSubset<T, SafetyScoreDeleteArgs<ExtArgs>>): Prisma__SafetyScoreClient<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SafetyScore.
     * @param {SafetyScoreUpdateArgs} args - Arguments to update one SafetyScore.
     * @example
     * // Update one SafetyScore
     * const safetyScore = await prisma.safetyScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SafetyScoreUpdateArgs>(args: SelectSubset<T, SafetyScoreUpdateArgs<ExtArgs>>): Prisma__SafetyScoreClient<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SafetyScores.
     * @param {SafetyScoreDeleteManyArgs} args - Arguments to filter SafetyScores to delete.
     * @example
     * // Delete a few SafetyScores
     * const { count } = await prisma.safetyScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SafetyScoreDeleteManyArgs>(args?: SelectSubset<T, SafetyScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SafetyScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SafetyScores
     * const safetyScore = await prisma.safetyScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SafetyScoreUpdateManyArgs>(args: SelectSubset<T, SafetyScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SafetyScores and returns the data updated in the database.
     * @param {SafetyScoreUpdateManyAndReturnArgs} args - Arguments to update many SafetyScores.
     * @example
     * // Update many SafetyScores
     * const safetyScore = await prisma.safetyScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SafetyScores and only return the `id`
     * const safetyScoreWithIdOnly = await prisma.safetyScore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SafetyScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, SafetyScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SafetyScore.
     * @param {SafetyScoreUpsertArgs} args - Arguments to update or create a SafetyScore.
     * @example
     * // Update or create a SafetyScore
     * const safetyScore = await prisma.safetyScore.upsert({
     *   create: {
     *     // ... data to create a SafetyScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SafetyScore we want to update
     *   }
     * })
     */
    upsert<T extends SafetyScoreUpsertArgs>(args: SelectSubset<T, SafetyScoreUpsertArgs<ExtArgs>>): Prisma__SafetyScoreClient<$Result.GetResult<Prisma.$SafetyScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SafetyScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyScoreCountArgs} args - Arguments to filter SafetyScores to count.
     * @example
     * // Count the number of SafetyScores
     * const count = await prisma.safetyScore.count({
     *   where: {
     *     // ... the filter for the SafetyScores we want to count
     *   }
     * })
    **/
    count<T extends SafetyScoreCountArgs>(
      args?: Subset<T, SafetyScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SafetyScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SafetyScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SafetyScoreAggregateArgs>(args: Subset<T, SafetyScoreAggregateArgs>): Prisma.PrismaPromise<GetSafetyScoreAggregateType<T>>

    /**
     * Group by SafetyScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafetyScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SafetyScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SafetyScoreGroupByArgs['orderBy'] }
        : { orderBy?: SafetyScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SafetyScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSafetyScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SafetyScore model
   */
  readonly fields: SafetyScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SafetyScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SafetyScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tourist<T extends TouristDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TouristDefaultArgs<ExtArgs>>): Prisma__TouristClient<$Result.GetResult<Prisma.$TouristPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SafetyScore model
   */
  interface SafetyScoreFieldRefs {
    readonly id: FieldRef<"SafetyScore", 'Int'>
    readonly touristId: FieldRef<"SafetyScore", 'Int'>
    readonly score: FieldRef<"SafetyScore", 'Int'>
    readonly reason: FieldRef<"SafetyScore", 'String'>
    readonly createdAt: FieldRef<"SafetyScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SafetyScore findUnique
   */
  export type SafetyScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
    /**
     * Filter, which SafetyScore to fetch.
     */
    where: SafetyScoreWhereUniqueInput
  }

  /**
   * SafetyScore findUniqueOrThrow
   */
  export type SafetyScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
    /**
     * Filter, which SafetyScore to fetch.
     */
    where: SafetyScoreWhereUniqueInput
  }

  /**
   * SafetyScore findFirst
   */
  export type SafetyScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
    /**
     * Filter, which SafetyScore to fetch.
     */
    where?: SafetyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafetyScores to fetch.
     */
    orderBy?: SafetyScoreOrderByWithRelationInput | SafetyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SafetyScores.
     */
    cursor?: SafetyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafetyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafetyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SafetyScores.
     */
    distinct?: SafetyScoreScalarFieldEnum | SafetyScoreScalarFieldEnum[]
  }

  /**
   * SafetyScore findFirstOrThrow
   */
  export type SafetyScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
    /**
     * Filter, which SafetyScore to fetch.
     */
    where?: SafetyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafetyScores to fetch.
     */
    orderBy?: SafetyScoreOrderByWithRelationInput | SafetyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SafetyScores.
     */
    cursor?: SafetyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafetyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafetyScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SafetyScores.
     */
    distinct?: SafetyScoreScalarFieldEnum | SafetyScoreScalarFieldEnum[]
  }

  /**
   * SafetyScore findMany
   */
  export type SafetyScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
    /**
     * Filter, which SafetyScores to fetch.
     */
    where?: SafetyScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafetyScores to fetch.
     */
    orderBy?: SafetyScoreOrderByWithRelationInput | SafetyScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SafetyScores.
     */
    cursor?: SafetyScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafetyScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafetyScores.
     */
    skip?: number
    distinct?: SafetyScoreScalarFieldEnum | SafetyScoreScalarFieldEnum[]
  }

  /**
   * SafetyScore create
   */
  export type SafetyScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a SafetyScore.
     */
    data: XOR<SafetyScoreCreateInput, SafetyScoreUncheckedCreateInput>
  }

  /**
   * SafetyScore createMany
   */
  export type SafetyScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SafetyScores.
     */
    data: SafetyScoreCreateManyInput | SafetyScoreCreateManyInput[]
  }

  /**
   * SafetyScore createManyAndReturn
   */
  export type SafetyScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * The data used to create many SafetyScores.
     */
    data: SafetyScoreCreateManyInput | SafetyScoreCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SafetyScore update
   */
  export type SafetyScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a SafetyScore.
     */
    data: XOR<SafetyScoreUpdateInput, SafetyScoreUncheckedUpdateInput>
    /**
     * Choose, which SafetyScore to update.
     */
    where: SafetyScoreWhereUniqueInput
  }

  /**
   * SafetyScore updateMany
   */
  export type SafetyScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SafetyScores.
     */
    data: XOR<SafetyScoreUpdateManyMutationInput, SafetyScoreUncheckedUpdateManyInput>
    /**
     * Filter which SafetyScores to update
     */
    where?: SafetyScoreWhereInput
    /**
     * Limit how many SafetyScores to update.
     */
    limit?: number
  }

  /**
   * SafetyScore updateManyAndReturn
   */
  export type SafetyScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * The data used to update SafetyScores.
     */
    data: XOR<SafetyScoreUpdateManyMutationInput, SafetyScoreUncheckedUpdateManyInput>
    /**
     * Filter which SafetyScores to update
     */
    where?: SafetyScoreWhereInput
    /**
     * Limit how many SafetyScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SafetyScore upsert
   */
  export type SafetyScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the SafetyScore to update in case it exists.
     */
    where: SafetyScoreWhereUniqueInput
    /**
     * In case the SafetyScore found by the `where` argument doesn't exist, create a new SafetyScore with this data.
     */
    create: XOR<SafetyScoreCreateInput, SafetyScoreUncheckedCreateInput>
    /**
     * In case the SafetyScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SafetyScoreUpdateInput, SafetyScoreUncheckedUpdateInput>
  }

  /**
   * SafetyScore delete
   */
  export type SafetyScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
    /**
     * Filter which SafetyScore to delete.
     */
    where: SafetyScoreWhereUniqueInput
  }

  /**
   * SafetyScore deleteMany
   */
  export type SafetyScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SafetyScores to delete
     */
    where?: SafetyScoreWhereInput
    /**
     * Limit how many SafetyScores to delete.
     */
    limit?: number
  }

  /**
   * SafetyScore without action
   */
  export type SafetyScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafetyScore
     */
    select?: SafetyScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafetyScore
     */
    omit?: SafetyScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafetyScoreInclude<ExtArgs> | null
  }


  /**
   * Model LedgerBlock
   */

  export type AggregateLedgerBlock = {
    _count: LedgerBlockCountAggregateOutputType | null
    _avg: LedgerBlockAvgAggregateOutputType | null
    _sum: LedgerBlockSumAggregateOutputType | null
    _min: LedgerBlockMinAggregateOutputType | null
    _max: LedgerBlockMaxAggregateOutputType | null
  }

  export type LedgerBlockAvgAggregateOutputType = {
    id: number | null
    index: number | null
  }

  export type LedgerBlockSumAggregateOutputType = {
    id: number | null
    index: number | null
  }

  export type LedgerBlockMinAggregateOutputType = {
    id: number | null
    index: number | null
    prevHash: string | null
    dataJson: string | null
    dataHash: string | null
    timestamp: Date | null
  }

  export type LedgerBlockMaxAggregateOutputType = {
    id: number | null
    index: number | null
    prevHash: string | null
    dataJson: string | null
    dataHash: string | null
    timestamp: Date | null
  }

  export type LedgerBlockCountAggregateOutputType = {
    id: number
    index: number
    prevHash: number
    dataJson: number
    dataHash: number
    timestamp: number
    _all: number
  }


  export type LedgerBlockAvgAggregateInputType = {
    id?: true
    index?: true
  }

  export type LedgerBlockSumAggregateInputType = {
    id?: true
    index?: true
  }

  export type LedgerBlockMinAggregateInputType = {
    id?: true
    index?: true
    prevHash?: true
    dataJson?: true
    dataHash?: true
    timestamp?: true
  }

  export type LedgerBlockMaxAggregateInputType = {
    id?: true
    index?: true
    prevHash?: true
    dataJson?: true
    dataHash?: true
    timestamp?: true
  }

  export type LedgerBlockCountAggregateInputType = {
    id?: true
    index?: true
    prevHash?: true
    dataJson?: true
    dataHash?: true
    timestamp?: true
    _all?: true
  }

  export type LedgerBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerBlock to aggregate.
     */
    where?: LedgerBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerBlocks to fetch.
     */
    orderBy?: LedgerBlockOrderByWithRelationInput | LedgerBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerBlocks
    **/
    _count?: true | LedgerBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LedgerBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LedgerBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerBlockMaxAggregateInputType
  }

  export type GetLedgerBlockAggregateType<T extends LedgerBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerBlock[P]>
      : GetScalarType<T[P], AggregateLedgerBlock[P]>
  }




  export type LedgerBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerBlockWhereInput
    orderBy?: LedgerBlockOrderByWithAggregationInput | LedgerBlockOrderByWithAggregationInput[]
    by: LedgerBlockScalarFieldEnum[] | LedgerBlockScalarFieldEnum
    having?: LedgerBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerBlockCountAggregateInputType | true
    _avg?: LedgerBlockAvgAggregateInputType
    _sum?: LedgerBlockSumAggregateInputType
    _min?: LedgerBlockMinAggregateInputType
    _max?: LedgerBlockMaxAggregateInputType
  }

  export type LedgerBlockGroupByOutputType = {
    id: number
    index: number
    prevHash: string | null
    dataJson: string
    dataHash: string
    timestamp: Date
    _count: LedgerBlockCountAggregateOutputType | null
    _avg: LedgerBlockAvgAggregateOutputType | null
    _sum: LedgerBlockSumAggregateOutputType | null
    _min: LedgerBlockMinAggregateOutputType | null
    _max: LedgerBlockMaxAggregateOutputType | null
  }

  type GetLedgerBlockGroupByPayload<T extends LedgerBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerBlockGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerBlockGroupByOutputType[P]>
        }
      >
    >


  export type LedgerBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    prevHash?: boolean
    dataJson?: boolean
    dataHash?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["ledgerBlock"]>

  export type LedgerBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    prevHash?: boolean
    dataJson?: boolean
    dataHash?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["ledgerBlock"]>

  export type LedgerBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    index?: boolean
    prevHash?: boolean
    dataJson?: boolean
    dataHash?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["ledgerBlock"]>

  export type LedgerBlockSelectScalar = {
    id?: boolean
    index?: boolean
    prevHash?: boolean
    dataJson?: boolean
    dataHash?: boolean
    timestamp?: boolean
  }

  export type LedgerBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "index" | "prevHash" | "dataJson" | "dataHash" | "timestamp", ExtArgs["result"]["ledgerBlock"]>

  export type $LedgerBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerBlock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      index: number
      prevHash: string | null
      dataJson: string
      dataHash: string
      timestamp: Date
    }, ExtArgs["result"]["ledgerBlock"]>
    composites: {}
  }

  type LedgerBlockGetPayload<S extends boolean | null | undefined | LedgerBlockDefaultArgs> = $Result.GetResult<Prisma.$LedgerBlockPayload, S>

  type LedgerBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LedgerBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LedgerBlockCountAggregateInputType | true
    }

  export interface LedgerBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerBlock'], meta: { name: 'LedgerBlock' } }
    /**
     * Find zero or one LedgerBlock that matches the filter.
     * @param {LedgerBlockFindUniqueArgs} args - Arguments to find a LedgerBlock
     * @example
     * // Get one LedgerBlock
     * const ledgerBlock = await prisma.ledgerBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerBlockFindUniqueArgs>(args: SelectSubset<T, LedgerBlockFindUniqueArgs<ExtArgs>>): Prisma__LedgerBlockClient<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LedgerBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerBlockFindUniqueOrThrowArgs} args - Arguments to find a LedgerBlock
     * @example
     * // Get one LedgerBlock
     * const ledgerBlock = await prisma.ledgerBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerBlockClient<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerBlockFindFirstArgs} args - Arguments to find a LedgerBlock
     * @example
     * // Get one LedgerBlock
     * const ledgerBlock = await prisma.ledgerBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerBlockFindFirstArgs>(args?: SelectSubset<T, LedgerBlockFindFirstArgs<ExtArgs>>): Prisma__LedgerBlockClient<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerBlockFindFirstOrThrowArgs} args - Arguments to find a LedgerBlock
     * @example
     * // Get one LedgerBlock
     * const ledgerBlock = await prisma.ledgerBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerBlockClient<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LedgerBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerBlocks
     * const ledgerBlocks = await prisma.ledgerBlock.findMany()
     * 
     * // Get first 10 LedgerBlocks
     * const ledgerBlocks = await prisma.ledgerBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerBlockWithIdOnly = await prisma.ledgerBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerBlockFindManyArgs>(args?: SelectSubset<T, LedgerBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LedgerBlock.
     * @param {LedgerBlockCreateArgs} args - Arguments to create a LedgerBlock.
     * @example
     * // Create one LedgerBlock
     * const LedgerBlock = await prisma.ledgerBlock.create({
     *   data: {
     *     // ... data to create a LedgerBlock
     *   }
     * })
     * 
     */
    create<T extends LedgerBlockCreateArgs>(args: SelectSubset<T, LedgerBlockCreateArgs<ExtArgs>>): Prisma__LedgerBlockClient<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LedgerBlocks.
     * @param {LedgerBlockCreateManyArgs} args - Arguments to create many LedgerBlocks.
     * @example
     * // Create many LedgerBlocks
     * const ledgerBlock = await prisma.ledgerBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerBlockCreateManyArgs>(args?: SelectSubset<T, LedgerBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerBlocks and returns the data saved in the database.
     * @param {LedgerBlockCreateManyAndReturnArgs} args - Arguments to create many LedgerBlocks.
     * @example
     * // Create many LedgerBlocks
     * const ledgerBlock = await prisma.ledgerBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerBlocks and only return the `id`
     * const ledgerBlockWithIdOnly = await prisma.ledgerBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LedgerBlock.
     * @param {LedgerBlockDeleteArgs} args - Arguments to delete one LedgerBlock.
     * @example
     * // Delete one LedgerBlock
     * const LedgerBlock = await prisma.ledgerBlock.delete({
     *   where: {
     *     // ... filter to delete one LedgerBlock
     *   }
     * })
     * 
     */
    delete<T extends LedgerBlockDeleteArgs>(args: SelectSubset<T, LedgerBlockDeleteArgs<ExtArgs>>): Prisma__LedgerBlockClient<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LedgerBlock.
     * @param {LedgerBlockUpdateArgs} args - Arguments to update one LedgerBlock.
     * @example
     * // Update one LedgerBlock
     * const ledgerBlock = await prisma.ledgerBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerBlockUpdateArgs>(args: SelectSubset<T, LedgerBlockUpdateArgs<ExtArgs>>): Prisma__LedgerBlockClient<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LedgerBlocks.
     * @param {LedgerBlockDeleteManyArgs} args - Arguments to filter LedgerBlocks to delete.
     * @example
     * // Delete a few LedgerBlocks
     * const { count } = await prisma.ledgerBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerBlockDeleteManyArgs>(args?: SelectSubset<T, LedgerBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerBlocks
     * const ledgerBlock = await prisma.ledgerBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerBlockUpdateManyArgs>(args: SelectSubset<T, LedgerBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerBlocks and returns the data updated in the database.
     * @param {LedgerBlockUpdateManyAndReturnArgs} args - Arguments to update many LedgerBlocks.
     * @example
     * // Update many LedgerBlocks
     * const ledgerBlock = await prisma.ledgerBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LedgerBlocks and only return the `id`
     * const ledgerBlockWithIdOnly = await prisma.ledgerBlock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LedgerBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, LedgerBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LedgerBlock.
     * @param {LedgerBlockUpsertArgs} args - Arguments to update or create a LedgerBlock.
     * @example
     * // Update or create a LedgerBlock
     * const ledgerBlock = await prisma.ledgerBlock.upsert({
     *   create: {
     *     // ... data to create a LedgerBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerBlock we want to update
     *   }
     * })
     */
    upsert<T extends LedgerBlockUpsertArgs>(args: SelectSubset<T, LedgerBlockUpsertArgs<ExtArgs>>): Prisma__LedgerBlockClient<$Result.GetResult<Prisma.$LedgerBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LedgerBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerBlockCountArgs} args - Arguments to filter LedgerBlocks to count.
     * @example
     * // Count the number of LedgerBlocks
     * const count = await prisma.ledgerBlock.count({
     *   where: {
     *     // ... the filter for the LedgerBlocks we want to count
     *   }
     * })
    **/
    count<T extends LedgerBlockCountArgs>(
      args?: Subset<T, LedgerBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LedgerBlockAggregateArgs>(args: Subset<T, LedgerBlockAggregateArgs>): Prisma.PrismaPromise<GetLedgerBlockAggregateType<T>>

    /**
     * Group by LedgerBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LedgerBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerBlockGroupByArgs['orderBy'] }
        : { orderBy?: LedgerBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LedgerBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerBlock model
   */
  readonly fields: LedgerBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LedgerBlock model
   */
  interface LedgerBlockFieldRefs {
    readonly id: FieldRef<"LedgerBlock", 'Int'>
    readonly index: FieldRef<"LedgerBlock", 'Int'>
    readonly prevHash: FieldRef<"LedgerBlock", 'String'>
    readonly dataJson: FieldRef<"LedgerBlock", 'String'>
    readonly dataHash: FieldRef<"LedgerBlock", 'String'>
    readonly timestamp: FieldRef<"LedgerBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LedgerBlock findUnique
   */
  export type LedgerBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * Filter, which LedgerBlock to fetch.
     */
    where: LedgerBlockWhereUniqueInput
  }

  /**
   * LedgerBlock findUniqueOrThrow
   */
  export type LedgerBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * Filter, which LedgerBlock to fetch.
     */
    where: LedgerBlockWhereUniqueInput
  }

  /**
   * LedgerBlock findFirst
   */
  export type LedgerBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * Filter, which LedgerBlock to fetch.
     */
    where?: LedgerBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerBlocks to fetch.
     */
    orderBy?: LedgerBlockOrderByWithRelationInput | LedgerBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerBlocks.
     */
    cursor?: LedgerBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerBlocks.
     */
    distinct?: LedgerBlockScalarFieldEnum | LedgerBlockScalarFieldEnum[]
  }

  /**
   * LedgerBlock findFirstOrThrow
   */
  export type LedgerBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * Filter, which LedgerBlock to fetch.
     */
    where?: LedgerBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerBlocks to fetch.
     */
    orderBy?: LedgerBlockOrderByWithRelationInput | LedgerBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerBlocks.
     */
    cursor?: LedgerBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerBlocks.
     */
    distinct?: LedgerBlockScalarFieldEnum | LedgerBlockScalarFieldEnum[]
  }

  /**
   * LedgerBlock findMany
   */
  export type LedgerBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * Filter, which LedgerBlocks to fetch.
     */
    where?: LedgerBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerBlocks to fetch.
     */
    orderBy?: LedgerBlockOrderByWithRelationInput | LedgerBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerBlocks.
     */
    cursor?: LedgerBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerBlocks.
     */
    skip?: number
    distinct?: LedgerBlockScalarFieldEnum | LedgerBlockScalarFieldEnum[]
  }

  /**
   * LedgerBlock create
   */
  export type LedgerBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * The data needed to create a LedgerBlock.
     */
    data: XOR<LedgerBlockCreateInput, LedgerBlockUncheckedCreateInput>
  }

  /**
   * LedgerBlock createMany
   */
  export type LedgerBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerBlocks.
     */
    data: LedgerBlockCreateManyInput | LedgerBlockCreateManyInput[]
  }

  /**
   * LedgerBlock createManyAndReturn
   */
  export type LedgerBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * The data used to create many LedgerBlocks.
     */
    data: LedgerBlockCreateManyInput | LedgerBlockCreateManyInput[]
  }

  /**
   * LedgerBlock update
   */
  export type LedgerBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * The data needed to update a LedgerBlock.
     */
    data: XOR<LedgerBlockUpdateInput, LedgerBlockUncheckedUpdateInput>
    /**
     * Choose, which LedgerBlock to update.
     */
    where: LedgerBlockWhereUniqueInput
  }

  /**
   * LedgerBlock updateMany
   */
  export type LedgerBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerBlocks.
     */
    data: XOR<LedgerBlockUpdateManyMutationInput, LedgerBlockUncheckedUpdateManyInput>
    /**
     * Filter which LedgerBlocks to update
     */
    where?: LedgerBlockWhereInput
    /**
     * Limit how many LedgerBlocks to update.
     */
    limit?: number
  }

  /**
   * LedgerBlock updateManyAndReturn
   */
  export type LedgerBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * The data used to update LedgerBlocks.
     */
    data: XOR<LedgerBlockUpdateManyMutationInput, LedgerBlockUncheckedUpdateManyInput>
    /**
     * Filter which LedgerBlocks to update
     */
    where?: LedgerBlockWhereInput
    /**
     * Limit how many LedgerBlocks to update.
     */
    limit?: number
  }

  /**
   * LedgerBlock upsert
   */
  export type LedgerBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * The filter to search for the LedgerBlock to update in case it exists.
     */
    where: LedgerBlockWhereUniqueInput
    /**
     * In case the LedgerBlock found by the `where` argument doesn't exist, create a new LedgerBlock with this data.
     */
    create: XOR<LedgerBlockCreateInput, LedgerBlockUncheckedCreateInput>
    /**
     * In case the LedgerBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerBlockUpdateInput, LedgerBlockUncheckedUpdateInput>
  }

  /**
   * LedgerBlock delete
   */
  export type LedgerBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
    /**
     * Filter which LedgerBlock to delete.
     */
    where: LedgerBlockWhereUniqueInput
  }

  /**
   * LedgerBlock deleteMany
   */
  export type LedgerBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerBlocks to delete
     */
    where?: LedgerBlockWhereInput
    /**
     * Limit how many LedgerBlocks to delete.
     */
    limit?: number
  }

  /**
   * LedgerBlock without action
   */
  export type LedgerBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerBlock
     */
    select?: LedgerBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerBlock
     */
    omit?: LedgerBlockOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TouristScalarFieldEnum: {
    id: 'id',
    uniqueId: 'uniqueId',
    email: 'email',
    mobile: 'mobile',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    aadhaarNumber: 'aadhaarNumber',
    emergencyDetails: 'emergencyDetails',
    companionsCount: 'companionsCount',
    gender: 'gender',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TouristScalarFieldEnum = (typeof TouristScalarFieldEnum)[keyof typeof TouristScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const TourPlanScalarFieldEnum: {
    id: 'id',
    touristId: 'touristId',
    startDate: 'startDate',
    endDate: 'endDate',
    locationName: 'locationName',
    latitude: 'latitude',
    longitude: 'longitude',
    geofenceRadiusMeters: 'geofenceRadiusMeters',
    createdAt: 'createdAt'
  };

  export type TourPlanScalarFieldEnum = (typeof TourPlanScalarFieldEnum)[keyof typeof TourPlanScalarFieldEnum]


  export const LocationPingScalarFieldEnum: {
    id: 'id',
    touristId: 'touristId',
    latitude: 'latitude',
    longitude: 'longitude',
    speedKmh: 'speedKmh',
    createdAt: 'createdAt'
  };

  export type LocationPingScalarFieldEnum = (typeof LocationPingScalarFieldEnum)[keyof typeof LocationPingScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    touristId: 'touristId',
    type: 'type',
    message: 'message',
    resolved: 'resolved',
    createdAt: 'createdAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const ExpenditureScalarFieldEnum: {
    id: 'id',
    touristId: 'touristId',
    item: 'item',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type ExpenditureScalarFieldEnum = (typeof ExpenditureScalarFieldEnum)[keyof typeof ExpenditureScalarFieldEnum]


  export const SafetyScoreScalarFieldEnum: {
    id: 'id',
    touristId: 'touristId',
    score: 'score',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type SafetyScoreScalarFieldEnum = (typeof SafetyScoreScalarFieldEnum)[keyof typeof SafetyScoreScalarFieldEnum]


  export const LedgerBlockScalarFieldEnum: {
    id: 'id',
    index: 'index',
    prevHash: 'prevHash',
    dataJson: 'dataJson',
    dataHash: 'dataHash',
    timestamp: 'timestamp'
  };

  export type LedgerBlockScalarFieldEnum = (typeof LedgerBlockScalarFieldEnum)[keyof typeof LedgerBlockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TouristWhereInput = {
    AND?: TouristWhereInput | TouristWhereInput[]
    OR?: TouristWhereInput[]
    NOT?: TouristWhereInput | TouristWhereInput[]
    id?: IntFilter<"Tourist"> | number
    uniqueId?: StringFilter<"Tourist"> | string
    email?: StringFilter<"Tourist"> | string
    mobile?: StringNullableFilter<"Tourist"> | string | null
    passwordHash?: StringFilter<"Tourist"> | string
    fullName?: StringFilter<"Tourist"> | string
    aadhaarNumber?: StringNullableFilter<"Tourist"> | string | null
    emergencyDetails?: JsonNullableFilter<"Tourist">
    companionsCount?: IntFilter<"Tourist"> | number
    gender?: StringNullableFilter<"Tourist"> | string | null
    language?: StringNullableFilter<"Tourist"> | string | null
    createdAt?: DateTimeFilter<"Tourist"> | Date | string
    updatedAt?: DateTimeFilter<"Tourist"> | Date | string
    tourPlans?: TourPlanListRelationFilter
    pings?: LocationPingListRelationFilter
    alerts?: AlertListRelationFilter
    expenditures?: ExpenditureListRelationFilter
    safetyScores?: SafetyScoreListRelationFilter
  }

  export type TouristOrderByWithRelationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    email?: SortOrder
    mobile?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    aadhaarNumber?: SortOrderInput | SortOrder
    emergencyDetails?: SortOrderInput | SortOrder
    companionsCount?: SortOrder
    gender?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tourPlans?: TourPlanOrderByRelationAggregateInput
    pings?: LocationPingOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
    expenditures?: ExpenditureOrderByRelationAggregateInput
    safetyScores?: SafetyScoreOrderByRelationAggregateInput
  }

  export type TouristWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uniqueId?: string
    email?: string
    AND?: TouristWhereInput | TouristWhereInput[]
    OR?: TouristWhereInput[]
    NOT?: TouristWhereInput | TouristWhereInput[]
    mobile?: StringNullableFilter<"Tourist"> | string | null
    passwordHash?: StringFilter<"Tourist"> | string
    fullName?: StringFilter<"Tourist"> | string
    aadhaarNumber?: StringNullableFilter<"Tourist"> | string | null
    emergencyDetails?: JsonNullableFilter<"Tourist">
    companionsCount?: IntFilter<"Tourist"> | number
    gender?: StringNullableFilter<"Tourist"> | string | null
    language?: StringNullableFilter<"Tourist"> | string | null
    createdAt?: DateTimeFilter<"Tourist"> | Date | string
    updatedAt?: DateTimeFilter<"Tourist"> | Date | string
    tourPlans?: TourPlanListRelationFilter
    pings?: LocationPingListRelationFilter
    alerts?: AlertListRelationFilter
    expenditures?: ExpenditureListRelationFilter
    safetyScores?: SafetyScoreListRelationFilter
  }, "id" | "uniqueId" | "email">

  export type TouristOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    email?: SortOrder
    mobile?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    aadhaarNumber?: SortOrderInput | SortOrder
    emergencyDetails?: SortOrderInput | SortOrder
    companionsCount?: SortOrder
    gender?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TouristCountOrderByAggregateInput
    _avg?: TouristAvgOrderByAggregateInput
    _max?: TouristMaxOrderByAggregateInput
    _min?: TouristMinOrderByAggregateInput
    _sum?: TouristSumOrderByAggregateInput
  }

  export type TouristScalarWhereWithAggregatesInput = {
    AND?: TouristScalarWhereWithAggregatesInput | TouristScalarWhereWithAggregatesInput[]
    OR?: TouristScalarWhereWithAggregatesInput[]
    NOT?: TouristScalarWhereWithAggregatesInput | TouristScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tourist"> | number
    uniqueId?: StringWithAggregatesFilter<"Tourist"> | string
    email?: StringWithAggregatesFilter<"Tourist"> | string
    mobile?: StringNullableWithAggregatesFilter<"Tourist"> | string | null
    passwordHash?: StringWithAggregatesFilter<"Tourist"> | string
    fullName?: StringWithAggregatesFilter<"Tourist"> | string
    aadhaarNumber?: StringNullableWithAggregatesFilter<"Tourist"> | string | null
    emergencyDetails?: JsonNullableWithAggregatesFilter<"Tourist">
    companionsCount?: IntWithAggregatesFilter<"Tourist"> | number
    gender?: StringNullableWithAggregatesFilter<"Tourist"> | string | null
    language?: StringNullableWithAggregatesFilter<"Tourist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tourist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tourist"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    passwordHash?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    role?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    passwordHash?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    role?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type TourPlanWhereInput = {
    AND?: TourPlanWhereInput | TourPlanWhereInput[]
    OR?: TourPlanWhereInput[]
    NOT?: TourPlanWhereInput | TourPlanWhereInput[]
    id?: IntFilter<"TourPlan"> | number
    touristId?: IntFilter<"TourPlan"> | number
    startDate?: DateTimeFilter<"TourPlan"> | Date | string
    endDate?: DateTimeFilter<"TourPlan"> | Date | string
    locationName?: StringFilter<"TourPlan"> | string
    latitude?: FloatFilter<"TourPlan"> | number
    longitude?: FloatFilter<"TourPlan"> | number
    geofenceRadiusMeters?: IntFilter<"TourPlan"> | number
    createdAt?: DateTimeFilter<"TourPlan"> | Date | string
    tourist?: XOR<TouristScalarRelationFilter, TouristWhereInput>
  }

  export type TourPlanOrderByWithRelationInput = {
    id?: SortOrder
    touristId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geofenceRadiusMeters?: SortOrder
    createdAt?: SortOrder
    tourist?: TouristOrderByWithRelationInput
  }

  export type TourPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourPlanWhereInput | TourPlanWhereInput[]
    OR?: TourPlanWhereInput[]
    NOT?: TourPlanWhereInput | TourPlanWhereInput[]
    touristId?: IntFilter<"TourPlan"> | number
    startDate?: DateTimeFilter<"TourPlan"> | Date | string
    endDate?: DateTimeFilter<"TourPlan"> | Date | string
    locationName?: StringFilter<"TourPlan"> | string
    latitude?: FloatFilter<"TourPlan"> | number
    longitude?: FloatFilter<"TourPlan"> | number
    geofenceRadiusMeters?: IntFilter<"TourPlan"> | number
    createdAt?: DateTimeFilter<"TourPlan"> | Date | string
    tourist?: XOR<TouristScalarRelationFilter, TouristWhereInput>
  }, "id">

  export type TourPlanOrderByWithAggregationInput = {
    id?: SortOrder
    touristId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geofenceRadiusMeters?: SortOrder
    createdAt?: SortOrder
    _count?: TourPlanCountOrderByAggregateInput
    _avg?: TourPlanAvgOrderByAggregateInput
    _max?: TourPlanMaxOrderByAggregateInput
    _min?: TourPlanMinOrderByAggregateInput
    _sum?: TourPlanSumOrderByAggregateInput
  }

  export type TourPlanScalarWhereWithAggregatesInput = {
    AND?: TourPlanScalarWhereWithAggregatesInput | TourPlanScalarWhereWithAggregatesInput[]
    OR?: TourPlanScalarWhereWithAggregatesInput[]
    NOT?: TourPlanScalarWhereWithAggregatesInput | TourPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TourPlan"> | number
    touristId?: IntWithAggregatesFilter<"TourPlan"> | number
    startDate?: DateTimeWithAggregatesFilter<"TourPlan"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TourPlan"> | Date | string
    locationName?: StringWithAggregatesFilter<"TourPlan"> | string
    latitude?: FloatWithAggregatesFilter<"TourPlan"> | number
    longitude?: FloatWithAggregatesFilter<"TourPlan"> | number
    geofenceRadiusMeters?: IntWithAggregatesFilter<"TourPlan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TourPlan"> | Date | string
  }

  export type LocationPingWhereInput = {
    AND?: LocationPingWhereInput | LocationPingWhereInput[]
    OR?: LocationPingWhereInput[]
    NOT?: LocationPingWhereInput | LocationPingWhereInput[]
    id?: IntFilter<"LocationPing"> | number
    touristId?: IntFilter<"LocationPing"> | number
    latitude?: FloatFilter<"LocationPing"> | number
    longitude?: FloatFilter<"LocationPing"> | number
    speedKmh?: FloatNullableFilter<"LocationPing"> | number | null
    createdAt?: DateTimeFilter<"LocationPing"> | Date | string
    tourist?: XOR<TouristScalarRelationFilter, TouristWhereInput>
  }

  export type LocationPingOrderByWithRelationInput = {
    id?: SortOrder
    touristId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tourist?: TouristOrderByWithRelationInput
  }

  export type LocationPingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationPingWhereInput | LocationPingWhereInput[]
    OR?: LocationPingWhereInput[]
    NOT?: LocationPingWhereInput | LocationPingWhereInput[]
    touristId?: IntFilter<"LocationPing"> | number
    latitude?: FloatFilter<"LocationPing"> | number
    longitude?: FloatFilter<"LocationPing"> | number
    speedKmh?: FloatNullableFilter<"LocationPing"> | number | null
    createdAt?: DateTimeFilter<"LocationPing"> | Date | string
    tourist?: XOR<TouristScalarRelationFilter, TouristWhereInput>
  }, "id">

  export type LocationPingOrderByWithAggregationInput = {
    id?: SortOrder
    touristId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LocationPingCountOrderByAggregateInput
    _avg?: LocationPingAvgOrderByAggregateInput
    _max?: LocationPingMaxOrderByAggregateInput
    _min?: LocationPingMinOrderByAggregateInput
    _sum?: LocationPingSumOrderByAggregateInput
  }

  export type LocationPingScalarWhereWithAggregatesInput = {
    AND?: LocationPingScalarWhereWithAggregatesInput | LocationPingScalarWhereWithAggregatesInput[]
    OR?: LocationPingScalarWhereWithAggregatesInput[]
    NOT?: LocationPingScalarWhereWithAggregatesInput | LocationPingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LocationPing"> | number
    touristId?: IntWithAggregatesFilter<"LocationPing"> | number
    latitude?: FloatWithAggregatesFilter<"LocationPing"> | number
    longitude?: FloatWithAggregatesFilter<"LocationPing"> | number
    speedKmh?: FloatNullableWithAggregatesFilter<"LocationPing"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"LocationPing"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: IntFilter<"Alert"> | number
    touristId?: IntFilter<"Alert"> | number
    type?: StringFilter<"Alert"> | string
    message?: StringNullableFilter<"Alert"> | string | null
    resolved?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    tourist?: XOR<TouristScalarRelationFilter, TouristWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    touristId?: SortOrder
    type?: SortOrder
    message?: SortOrderInput | SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
    tourist?: TouristOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    touristId?: IntFilter<"Alert"> | number
    type?: StringFilter<"Alert"> | string
    message?: StringNullableFilter<"Alert"> | string | null
    resolved?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    tourist?: XOR<TouristScalarRelationFilter, TouristWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    touristId?: SortOrder
    type?: SortOrder
    message?: SortOrderInput | SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alert"> | number
    touristId?: IntWithAggregatesFilter<"Alert"> | number
    type?: StringWithAggregatesFilter<"Alert"> | string
    message?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    resolved?: BoolWithAggregatesFilter<"Alert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type ExpenditureWhereInput = {
    AND?: ExpenditureWhereInput | ExpenditureWhereInput[]
    OR?: ExpenditureWhereInput[]
    NOT?: ExpenditureWhereInput | ExpenditureWhereInput[]
    id?: IntFilter<"Expenditure"> | number
    touristId?: IntFilter<"Expenditure"> | number
    item?: StringFilter<"Expenditure"> | string
    amount?: FloatFilter<"Expenditure"> | number
    createdAt?: DateTimeFilter<"Expenditure"> | Date | string
    tourist?: XOR<TouristScalarRelationFilter, TouristWhereInput>
  }

  export type ExpenditureOrderByWithRelationInput = {
    id?: SortOrder
    touristId?: SortOrder
    item?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    tourist?: TouristOrderByWithRelationInput
  }

  export type ExpenditureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpenditureWhereInput | ExpenditureWhereInput[]
    OR?: ExpenditureWhereInput[]
    NOT?: ExpenditureWhereInput | ExpenditureWhereInput[]
    touristId?: IntFilter<"Expenditure"> | number
    item?: StringFilter<"Expenditure"> | string
    amount?: FloatFilter<"Expenditure"> | number
    createdAt?: DateTimeFilter<"Expenditure"> | Date | string
    tourist?: XOR<TouristScalarRelationFilter, TouristWhereInput>
  }, "id">

  export type ExpenditureOrderByWithAggregationInput = {
    id?: SortOrder
    touristId?: SortOrder
    item?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: ExpenditureCountOrderByAggregateInput
    _avg?: ExpenditureAvgOrderByAggregateInput
    _max?: ExpenditureMaxOrderByAggregateInput
    _min?: ExpenditureMinOrderByAggregateInput
    _sum?: ExpenditureSumOrderByAggregateInput
  }

  export type ExpenditureScalarWhereWithAggregatesInput = {
    AND?: ExpenditureScalarWhereWithAggregatesInput | ExpenditureScalarWhereWithAggregatesInput[]
    OR?: ExpenditureScalarWhereWithAggregatesInput[]
    NOT?: ExpenditureScalarWhereWithAggregatesInput | ExpenditureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expenditure"> | number
    touristId?: IntWithAggregatesFilter<"Expenditure"> | number
    item?: StringWithAggregatesFilter<"Expenditure"> | string
    amount?: FloatWithAggregatesFilter<"Expenditure"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Expenditure"> | Date | string
  }

  export type SafetyScoreWhereInput = {
    AND?: SafetyScoreWhereInput | SafetyScoreWhereInput[]
    OR?: SafetyScoreWhereInput[]
    NOT?: SafetyScoreWhereInput | SafetyScoreWhereInput[]
    id?: IntFilter<"SafetyScore"> | number
    touristId?: IntFilter<"SafetyScore"> | number
    score?: IntFilter<"SafetyScore"> | number
    reason?: StringNullableFilter<"SafetyScore"> | string | null
    createdAt?: DateTimeFilter<"SafetyScore"> | Date | string
    tourist?: XOR<TouristScalarRelationFilter, TouristWhereInput>
  }

  export type SafetyScoreOrderByWithRelationInput = {
    id?: SortOrder
    touristId?: SortOrder
    score?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tourist?: TouristOrderByWithRelationInput
  }

  export type SafetyScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SafetyScoreWhereInput | SafetyScoreWhereInput[]
    OR?: SafetyScoreWhereInput[]
    NOT?: SafetyScoreWhereInput | SafetyScoreWhereInput[]
    touristId?: IntFilter<"SafetyScore"> | number
    score?: IntFilter<"SafetyScore"> | number
    reason?: StringNullableFilter<"SafetyScore"> | string | null
    createdAt?: DateTimeFilter<"SafetyScore"> | Date | string
    tourist?: XOR<TouristScalarRelationFilter, TouristWhereInput>
  }, "id">

  export type SafetyScoreOrderByWithAggregationInput = {
    id?: SortOrder
    touristId?: SortOrder
    score?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SafetyScoreCountOrderByAggregateInput
    _avg?: SafetyScoreAvgOrderByAggregateInput
    _max?: SafetyScoreMaxOrderByAggregateInput
    _min?: SafetyScoreMinOrderByAggregateInput
    _sum?: SafetyScoreSumOrderByAggregateInput
  }

  export type SafetyScoreScalarWhereWithAggregatesInput = {
    AND?: SafetyScoreScalarWhereWithAggregatesInput | SafetyScoreScalarWhereWithAggregatesInput[]
    OR?: SafetyScoreScalarWhereWithAggregatesInput[]
    NOT?: SafetyScoreScalarWhereWithAggregatesInput | SafetyScoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SafetyScore"> | number
    touristId?: IntWithAggregatesFilter<"SafetyScore"> | number
    score?: IntWithAggregatesFilter<"SafetyScore"> | number
    reason?: StringNullableWithAggregatesFilter<"SafetyScore"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SafetyScore"> | Date | string
  }

  export type LedgerBlockWhereInput = {
    AND?: LedgerBlockWhereInput | LedgerBlockWhereInput[]
    OR?: LedgerBlockWhereInput[]
    NOT?: LedgerBlockWhereInput | LedgerBlockWhereInput[]
    id?: IntFilter<"LedgerBlock"> | number
    index?: IntFilter<"LedgerBlock"> | number
    prevHash?: StringNullableFilter<"LedgerBlock"> | string | null
    dataJson?: StringFilter<"LedgerBlock"> | string
    dataHash?: StringFilter<"LedgerBlock"> | string
    timestamp?: DateTimeFilter<"LedgerBlock"> | Date | string
  }

  export type LedgerBlockOrderByWithRelationInput = {
    id?: SortOrder
    index?: SortOrder
    prevHash?: SortOrderInput | SortOrder
    dataJson?: SortOrder
    dataHash?: SortOrder
    timestamp?: SortOrder
  }

  export type LedgerBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    index?: number
    AND?: LedgerBlockWhereInput | LedgerBlockWhereInput[]
    OR?: LedgerBlockWhereInput[]
    NOT?: LedgerBlockWhereInput | LedgerBlockWhereInput[]
    prevHash?: StringNullableFilter<"LedgerBlock"> | string | null
    dataJson?: StringFilter<"LedgerBlock"> | string
    dataHash?: StringFilter<"LedgerBlock"> | string
    timestamp?: DateTimeFilter<"LedgerBlock"> | Date | string
  }, "id" | "index">

  export type LedgerBlockOrderByWithAggregationInput = {
    id?: SortOrder
    index?: SortOrder
    prevHash?: SortOrderInput | SortOrder
    dataJson?: SortOrder
    dataHash?: SortOrder
    timestamp?: SortOrder
    _count?: LedgerBlockCountOrderByAggregateInput
    _avg?: LedgerBlockAvgOrderByAggregateInput
    _max?: LedgerBlockMaxOrderByAggregateInput
    _min?: LedgerBlockMinOrderByAggregateInput
    _sum?: LedgerBlockSumOrderByAggregateInput
  }

  export type LedgerBlockScalarWhereWithAggregatesInput = {
    AND?: LedgerBlockScalarWhereWithAggregatesInput | LedgerBlockScalarWhereWithAggregatesInput[]
    OR?: LedgerBlockScalarWhereWithAggregatesInput[]
    NOT?: LedgerBlockScalarWhereWithAggregatesInput | LedgerBlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LedgerBlock"> | number
    index?: IntWithAggregatesFilter<"LedgerBlock"> | number
    prevHash?: StringNullableWithAggregatesFilter<"LedgerBlock"> | string | null
    dataJson?: StringWithAggregatesFilter<"LedgerBlock"> | string
    dataHash?: StringWithAggregatesFilter<"LedgerBlock"> | string
    timestamp?: DateTimeWithAggregatesFilter<"LedgerBlock"> | Date | string
  }

  export type TouristCreateInput = {
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPlans?: TourPlanCreateNestedManyWithoutTouristInput
    pings?: LocationPingCreateNestedManyWithoutTouristInput
    alerts?: AlertCreateNestedManyWithoutTouristInput
    expenditures?: ExpenditureCreateNestedManyWithoutTouristInput
    safetyScores?: SafetyScoreCreateNestedManyWithoutTouristInput
  }

  export type TouristUncheckedCreateInput = {
    id?: number
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPlans?: TourPlanUncheckedCreateNestedManyWithoutTouristInput
    pings?: LocationPingUncheckedCreateNestedManyWithoutTouristInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTouristInput
    expenditures?: ExpenditureUncheckedCreateNestedManyWithoutTouristInput
    safetyScores?: SafetyScoreUncheckedCreateNestedManyWithoutTouristInput
  }

  export type TouristUpdateInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPlans?: TourPlanUpdateManyWithoutTouristNestedInput
    pings?: LocationPingUpdateManyWithoutTouristNestedInput
    alerts?: AlertUpdateManyWithoutTouristNestedInput
    expenditures?: ExpenditureUpdateManyWithoutTouristNestedInput
    safetyScores?: SafetyScoreUpdateManyWithoutTouristNestedInput
  }

  export type TouristUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPlans?: TourPlanUncheckedUpdateManyWithoutTouristNestedInput
    pings?: LocationPingUncheckedUpdateManyWithoutTouristNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTouristNestedInput
    expenditures?: ExpenditureUncheckedUpdateManyWithoutTouristNestedInput
    safetyScores?: SafetyScoreUncheckedUpdateManyWithoutTouristNestedInput
  }

  export type TouristCreateManyInput = {
    id?: number
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TouristUpdateManyMutationInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TouristUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    email: string
    passwordHash: string
    name: string
    role?: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    name: string
    role?: string
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    name: string
    role?: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourPlanCreateInput = {
    startDate: Date | string
    endDate: Date | string
    locationName: string
    latitude: number
    longitude: number
    geofenceRadiusMeters?: number
    createdAt?: Date | string
    tourist: TouristCreateNestedOneWithoutTourPlansInput
  }

  export type TourPlanUncheckedCreateInput = {
    id?: number
    touristId: number
    startDate: Date | string
    endDate: Date | string
    locationName: string
    latitude: number
    longitude: number
    geofenceRadiusMeters?: number
    createdAt?: Date | string
  }

  export type TourPlanUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geofenceRadiusMeters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourist?: TouristUpdateOneRequiredWithoutTourPlansNestedInput
  }

  export type TourPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    touristId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geofenceRadiusMeters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourPlanCreateManyInput = {
    id?: number
    touristId: number
    startDate: Date | string
    endDate: Date | string
    locationName: string
    latitude: number
    longitude: number
    geofenceRadiusMeters?: number
    createdAt?: Date | string
  }

  export type TourPlanUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geofenceRadiusMeters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    touristId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geofenceRadiusMeters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationPingCreateInput = {
    latitude: number
    longitude: number
    speedKmh?: number | null
    createdAt?: Date | string
    tourist: TouristCreateNestedOneWithoutPingsInput
  }

  export type LocationPingUncheckedCreateInput = {
    id?: number
    touristId: number
    latitude: number
    longitude: number
    speedKmh?: number | null
    createdAt?: Date | string
  }

  export type LocationPingUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speedKmh?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourist?: TouristUpdateOneRequiredWithoutPingsNestedInput
  }

  export type LocationPingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    touristId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speedKmh?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationPingCreateManyInput = {
    id?: number
    touristId: number
    latitude: number
    longitude: number
    speedKmh?: number | null
    createdAt?: Date | string
  }

  export type LocationPingUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speedKmh?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationPingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    touristId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speedKmh?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    type: string
    message?: string | null
    resolved?: boolean
    createdAt?: Date | string
    tourist: TouristCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: number
    touristId: number
    type: string
    message?: string | null
    resolved?: boolean
    createdAt?: Date | string
  }

  export type AlertUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourist?: TouristUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    touristId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManyInput = {
    id?: number
    touristId: number
    type: string
    message?: string | null
    resolved?: boolean
    createdAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    touristId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenditureCreateInput = {
    item: string
    amount: number
    createdAt?: Date | string
    tourist: TouristCreateNestedOneWithoutExpendituresInput
  }

  export type ExpenditureUncheckedCreateInput = {
    id?: number
    touristId: number
    item: string
    amount: number
    createdAt?: Date | string
  }

  export type ExpenditureUpdateInput = {
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourist?: TouristUpdateOneRequiredWithoutExpendituresNestedInput
  }

  export type ExpenditureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    touristId?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenditureCreateManyInput = {
    id?: number
    touristId: number
    item: string
    amount: number
    createdAt?: Date | string
  }

  export type ExpenditureUpdateManyMutationInput = {
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenditureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    touristId?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafetyScoreCreateInput = {
    score: number
    reason?: string | null
    createdAt?: Date | string
    tourist: TouristCreateNestedOneWithoutSafetyScoresInput
  }

  export type SafetyScoreUncheckedCreateInput = {
    id?: number
    touristId: number
    score: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type SafetyScoreUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourist?: TouristUpdateOneRequiredWithoutSafetyScoresNestedInput
  }

  export type SafetyScoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    touristId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafetyScoreCreateManyInput = {
    id?: number
    touristId: number
    score: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type SafetyScoreUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafetyScoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    touristId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerBlockCreateInput = {
    index: number
    prevHash?: string | null
    dataJson: string
    dataHash: string
    timestamp?: Date | string
  }

  export type LedgerBlockUncheckedCreateInput = {
    id?: number
    index: number
    prevHash?: string | null
    dataJson: string
    dataHash: string
    timestamp?: Date | string
  }

  export type LedgerBlockUpdateInput = {
    index?: IntFieldUpdateOperationsInput | number
    prevHash?: NullableStringFieldUpdateOperationsInput | string | null
    dataJson?: StringFieldUpdateOperationsInput | string
    dataHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerBlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    prevHash?: NullableStringFieldUpdateOperationsInput | string | null
    dataJson?: StringFieldUpdateOperationsInput | string
    dataHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerBlockCreateManyInput = {
    id?: number
    index: number
    prevHash?: string | null
    dataJson: string
    dataHash: string
    timestamp?: Date | string
  }

  export type LedgerBlockUpdateManyMutationInput = {
    index?: IntFieldUpdateOperationsInput | number
    prevHash?: NullableStringFieldUpdateOperationsInput | string | null
    dataJson?: StringFieldUpdateOperationsInput | string
    dataHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerBlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    index?: IntFieldUpdateOperationsInput | number
    prevHash?: NullableStringFieldUpdateOperationsInput | string | null
    dataJson?: StringFieldUpdateOperationsInput | string
    dataHash?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TourPlanListRelationFilter = {
    every?: TourPlanWhereInput
    some?: TourPlanWhereInput
    none?: TourPlanWhereInput
  }

  export type LocationPingListRelationFilter = {
    every?: LocationPingWhereInput
    some?: LocationPingWhereInput
    none?: LocationPingWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type ExpenditureListRelationFilter = {
    every?: ExpenditureWhereInput
    some?: ExpenditureWhereInput
    none?: ExpenditureWhereInput
  }

  export type SafetyScoreListRelationFilter = {
    every?: SafetyScoreWhereInput
    some?: SafetyScoreWhereInput
    none?: SafetyScoreWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TourPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationPingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenditureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SafetyScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TouristCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    aadhaarNumber?: SortOrder
    emergencyDetails?: SortOrder
    companionsCount?: SortOrder
    gender?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TouristAvgOrderByAggregateInput = {
    id?: SortOrder
    companionsCount?: SortOrder
  }

  export type TouristMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    aadhaarNumber?: SortOrder
    companionsCount?: SortOrder
    gender?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TouristMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    aadhaarNumber?: SortOrder
    companionsCount?: SortOrder
    gender?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TouristSumOrderByAggregateInput = {
    id?: SortOrder
    companionsCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TouristScalarRelationFilter = {
    is?: TouristWhereInput
    isNot?: TouristWhereInput
  }

  export type TourPlanCountOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geofenceRadiusMeters?: SortOrder
    createdAt?: SortOrder
  }

  export type TourPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geofenceRadiusMeters?: SortOrder
  }

  export type TourPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geofenceRadiusMeters?: SortOrder
    createdAt?: SortOrder
  }

  export type TourPlanMinOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    locationName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geofenceRadiusMeters?: SortOrder
    createdAt?: SortOrder
  }

  export type TourPlanSumOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    geofenceRadiusMeters?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LocationPingCountOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationPingAvgOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
  }

  export type LocationPingMaxOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationPingMinOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationPingSumOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speedKmh?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    resolved?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ExpenditureCountOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    item?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenditureAvgOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    amount?: SortOrder
  }

  export type ExpenditureMaxOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    item?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenditureMinOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    item?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenditureSumOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    amount?: SortOrder
  }

  export type SafetyScoreCountOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SafetyScoreAvgOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    score?: SortOrder
  }

  export type SafetyScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SafetyScoreMinOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    score?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SafetyScoreSumOrderByAggregateInput = {
    id?: SortOrder
    touristId?: SortOrder
    score?: SortOrder
  }

  export type LedgerBlockCountOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    prevHash?: SortOrder
    dataJson?: SortOrder
    dataHash?: SortOrder
    timestamp?: SortOrder
  }

  export type LedgerBlockAvgOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
  }

  export type LedgerBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    prevHash?: SortOrder
    dataJson?: SortOrder
    dataHash?: SortOrder
    timestamp?: SortOrder
  }

  export type LedgerBlockMinOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
    prevHash?: SortOrder
    dataJson?: SortOrder
    dataHash?: SortOrder
    timestamp?: SortOrder
  }

  export type LedgerBlockSumOrderByAggregateInput = {
    id?: SortOrder
    index?: SortOrder
  }

  export type TourPlanCreateNestedManyWithoutTouristInput = {
    create?: XOR<TourPlanCreateWithoutTouristInput, TourPlanUncheckedCreateWithoutTouristInput> | TourPlanCreateWithoutTouristInput[] | TourPlanUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: TourPlanCreateOrConnectWithoutTouristInput | TourPlanCreateOrConnectWithoutTouristInput[]
    createMany?: TourPlanCreateManyTouristInputEnvelope
    connect?: TourPlanWhereUniqueInput | TourPlanWhereUniqueInput[]
  }

  export type LocationPingCreateNestedManyWithoutTouristInput = {
    create?: XOR<LocationPingCreateWithoutTouristInput, LocationPingUncheckedCreateWithoutTouristInput> | LocationPingCreateWithoutTouristInput[] | LocationPingUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: LocationPingCreateOrConnectWithoutTouristInput | LocationPingCreateOrConnectWithoutTouristInput[]
    createMany?: LocationPingCreateManyTouristInputEnvelope
    connect?: LocationPingWhereUniqueInput | LocationPingWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutTouristInput = {
    create?: XOR<AlertCreateWithoutTouristInput, AlertUncheckedCreateWithoutTouristInput> | AlertCreateWithoutTouristInput[] | AlertUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTouristInput | AlertCreateOrConnectWithoutTouristInput[]
    createMany?: AlertCreateManyTouristInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type ExpenditureCreateNestedManyWithoutTouristInput = {
    create?: XOR<ExpenditureCreateWithoutTouristInput, ExpenditureUncheckedCreateWithoutTouristInput> | ExpenditureCreateWithoutTouristInput[] | ExpenditureUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: ExpenditureCreateOrConnectWithoutTouristInput | ExpenditureCreateOrConnectWithoutTouristInput[]
    createMany?: ExpenditureCreateManyTouristInputEnvelope
    connect?: ExpenditureWhereUniqueInput | ExpenditureWhereUniqueInput[]
  }

  export type SafetyScoreCreateNestedManyWithoutTouristInput = {
    create?: XOR<SafetyScoreCreateWithoutTouristInput, SafetyScoreUncheckedCreateWithoutTouristInput> | SafetyScoreCreateWithoutTouristInput[] | SafetyScoreUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: SafetyScoreCreateOrConnectWithoutTouristInput | SafetyScoreCreateOrConnectWithoutTouristInput[]
    createMany?: SafetyScoreCreateManyTouristInputEnvelope
    connect?: SafetyScoreWhereUniqueInput | SafetyScoreWhereUniqueInput[]
  }

  export type TourPlanUncheckedCreateNestedManyWithoutTouristInput = {
    create?: XOR<TourPlanCreateWithoutTouristInput, TourPlanUncheckedCreateWithoutTouristInput> | TourPlanCreateWithoutTouristInput[] | TourPlanUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: TourPlanCreateOrConnectWithoutTouristInput | TourPlanCreateOrConnectWithoutTouristInput[]
    createMany?: TourPlanCreateManyTouristInputEnvelope
    connect?: TourPlanWhereUniqueInput | TourPlanWhereUniqueInput[]
  }

  export type LocationPingUncheckedCreateNestedManyWithoutTouristInput = {
    create?: XOR<LocationPingCreateWithoutTouristInput, LocationPingUncheckedCreateWithoutTouristInput> | LocationPingCreateWithoutTouristInput[] | LocationPingUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: LocationPingCreateOrConnectWithoutTouristInput | LocationPingCreateOrConnectWithoutTouristInput[]
    createMany?: LocationPingCreateManyTouristInputEnvelope
    connect?: LocationPingWhereUniqueInput | LocationPingWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutTouristInput = {
    create?: XOR<AlertCreateWithoutTouristInput, AlertUncheckedCreateWithoutTouristInput> | AlertCreateWithoutTouristInput[] | AlertUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTouristInput | AlertCreateOrConnectWithoutTouristInput[]
    createMany?: AlertCreateManyTouristInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type ExpenditureUncheckedCreateNestedManyWithoutTouristInput = {
    create?: XOR<ExpenditureCreateWithoutTouristInput, ExpenditureUncheckedCreateWithoutTouristInput> | ExpenditureCreateWithoutTouristInput[] | ExpenditureUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: ExpenditureCreateOrConnectWithoutTouristInput | ExpenditureCreateOrConnectWithoutTouristInput[]
    createMany?: ExpenditureCreateManyTouristInputEnvelope
    connect?: ExpenditureWhereUniqueInput | ExpenditureWhereUniqueInput[]
  }

  export type SafetyScoreUncheckedCreateNestedManyWithoutTouristInput = {
    create?: XOR<SafetyScoreCreateWithoutTouristInput, SafetyScoreUncheckedCreateWithoutTouristInput> | SafetyScoreCreateWithoutTouristInput[] | SafetyScoreUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: SafetyScoreCreateOrConnectWithoutTouristInput | SafetyScoreCreateOrConnectWithoutTouristInput[]
    createMany?: SafetyScoreCreateManyTouristInputEnvelope
    connect?: SafetyScoreWhereUniqueInput | SafetyScoreWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TourPlanUpdateManyWithoutTouristNestedInput = {
    create?: XOR<TourPlanCreateWithoutTouristInput, TourPlanUncheckedCreateWithoutTouristInput> | TourPlanCreateWithoutTouristInput[] | TourPlanUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: TourPlanCreateOrConnectWithoutTouristInput | TourPlanCreateOrConnectWithoutTouristInput[]
    upsert?: TourPlanUpsertWithWhereUniqueWithoutTouristInput | TourPlanUpsertWithWhereUniqueWithoutTouristInput[]
    createMany?: TourPlanCreateManyTouristInputEnvelope
    set?: TourPlanWhereUniqueInput | TourPlanWhereUniqueInput[]
    disconnect?: TourPlanWhereUniqueInput | TourPlanWhereUniqueInput[]
    delete?: TourPlanWhereUniqueInput | TourPlanWhereUniqueInput[]
    connect?: TourPlanWhereUniqueInput | TourPlanWhereUniqueInput[]
    update?: TourPlanUpdateWithWhereUniqueWithoutTouristInput | TourPlanUpdateWithWhereUniqueWithoutTouristInput[]
    updateMany?: TourPlanUpdateManyWithWhereWithoutTouristInput | TourPlanUpdateManyWithWhereWithoutTouristInput[]
    deleteMany?: TourPlanScalarWhereInput | TourPlanScalarWhereInput[]
  }

  export type LocationPingUpdateManyWithoutTouristNestedInput = {
    create?: XOR<LocationPingCreateWithoutTouristInput, LocationPingUncheckedCreateWithoutTouristInput> | LocationPingCreateWithoutTouristInput[] | LocationPingUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: LocationPingCreateOrConnectWithoutTouristInput | LocationPingCreateOrConnectWithoutTouristInput[]
    upsert?: LocationPingUpsertWithWhereUniqueWithoutTouristInput | LocationPingUpsertWithWhereUniqueWithoutTouristInput[]
    createMany?: LocationPingCreateManyTouristInputEnvelope
    set?: LocationPingWhereUniqueInput | LocationPingWhereUniqueInput[]
    disconnect?: LocationPingWhereUniqueInput | LocationPingWhereUniqueInput[]
    delete?: LocationPingWhereUniqueInput | LocationPingWhereUniqueInput[]
    connect?: LocationPingWhereUniqueInput | LocationPingWhereUniqueInput[]
    update?: LocationPingUpdateWithWhereUniqueWithoutTouristInput | LocationPingUpdateWithWhereUniqueWithoutTouristInput[]
    updateMany?: LocationPingUpdateManyWithWhereWithoutTouristInput | LocationPingUpdateManyWithWhereWithoutTouristInput[]
    deleteMany?: LocationPingScalarWhereInput | LocationPingScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutTouristNestedInput = {
    create?: XOR<AlertCreateWithoutTouristInput, AlertUncheckedCreateWithoutTouristInput> | AlertCreateWithoutTouristInput[] | AlertUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTouristInput | AlertCreateOrConnectWithoutTouristInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutTouristInput | AlertUpsertWithWhereUniqueWithoutTouristInput[]
    createMany?: AlertCreateManyTouristInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutTouristInput | AlertUpdateWithWhereUniqueWithoutTouristInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutTouristInput | AlertUpdateManyWithWhereWithoutTouristInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type ExpenditureUpdateManyWithoutTouristNestedInput = {
    create?: XOR<ExpenditureCreateWithoutTouristInput, ExpenditureUncheckedCreateWithoutTouristInput> | ExpenditureCreateWithoutTouristInput[] | ExpenditureUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: ExpenditureCreateOrConnectWithoutTouristInput | ExpenditureCreateOrConnectWithoutTouristInput[]
    upsert?: ExpenditureUpsertWithWhereUniqueWithoutTouristInput | ExpenditureUpsertWithWhereUniqueWithoutTouristInput[]
    createMany?: ExpenditureCreateManyTouristInputEnvelope
    set?: ExpenditureWhereUniqueInput | ExpenditureWhereUniqueInput[]
    disconnect?: ExpenditureWhereUniqueInput | ExpenditureWhereUniqueInput[]
    delete?: ExpenditureWhereUniqueInput | ExpenditureWhereUniqueInput[]
    connect?: ExpenditureWhereUniqueInput | ExpenditureWhereUniqueInput[]
    update?: ExpenditureUpdateWithWhereUniqueWithoutTouristInput | ExpenditureUpdateWithWhereUniqueWithoutTouristInput[]
    updateMany?: ExpenditureUpdateManyWithWhereWithoutTouristInput | ExpenditureUpdateManyWithWhereWithoutTouristInput[]
    deleteMany?: ExpenditureScalarWhereInput | ExpenditureScalarWhereInput[]
  }

  export type SafetyScoreUpdateManyWithoutTouristNestedInput = {
    create?: XOR<SafetyScoreCreateWithoutTouristInput, SafetyScoreUncheckedCreateWithoutTouristInput> | SafetyScoreCreateWithoutTouristInput[] | SafetyScoreUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: SafetyScoreCreateOrConnectWithoutTouristInput | SafetyScoreCreateOrConnectWithoutTouristInput[]
    upsert?: SafetyScoreUpsertWithWhereUniqueWithoutTouristInput | SafetyScoreUpsertWithWhereUniqueWithoutTouristInput[]
    createMany?: SafetyScoreCreateManyTouristInputEnvelope
    set?: SafetyScoreWhereUniqueInput | SafetyScoreWhereUniqueInput[]
    disconnect?: SafetyScoreWhereUniqueInput | SafetyScoreWhereUniqueInput[]
    delete?: SafetyScoreWhereUniqueInput | SafetyScoreWhereUniqueInput[]
    connect?: SafetyScoreWhereUniqueInput | SafetyScoreWhereUniqueInput[]
    update?: SafetyScoreUpdateWithWhereUniqueWithoutTouristInput | SafetyScoreUpdateWithWhereUniqueWithoutTouristInput[]
    updateMany?: SafetyScoreUpdateManyWithWhereWithoutTouristInput | SafetyScoreUpdateManyWithWhereWithoutTouristInput[]
    deleteMany?: SafetyScoreScalarWhereInput | SafetyScoreScalarWhereInput[]
  }

  export type TourPlanUncheckedUpdateManyWithoutTouristNestedInput = {
    create?: XOR<TourPlanCreateWithoutTouristInput, TourPlanUncheckedCreateWithoutTouristInput> | TourPlanCreateWithoutTouristInput[] | TourPlanUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: TourPlanCreateOrConnectWithoutTouristInput | TourPlanCreateOrConnectWithoutTouristInput[]
    upsert?: TourPlanUpsertWithWhereUniqueWithoutTouristInput | TourPlanUpsertWithWhereUniqueWithoutTouristInput[]
    createMany?: TourPlanCreateManyTouristInputEnvelope
    set?: TourPlanWhereUniqueInput | TourPlanWhereUniqueInput[]
    disconnect?: TourPlanWhereUniqueInput | TourPlanWhereUniqueInput[]
    delete?: TourPlanWhereUniqueInput | TourPlanWhereUniqueInput[]
    connect?: TourPlanWhereUniqueInput | TourPlanWhereUniqueInput[]
    update?: TourPlanUpdateWithWhereUniqueWithoutTouristInput | TourPlanUpdateWithWhereUniqueWithoutTouristInput[]
    updateMany?: TourPlanUpdateManyWithWhereWithoutTouristInput | TourPlanUpdateManyWithWhereWithoutTouristInput[]
    deleteMany?: TourPlanScalarWhereInput | TourPlanScalarWhereInput[]
  }

  export type LocationPingUncheckedUpdateManyWithoutTouristNestedInput = {
    create?: XOR<LocationPingCreateWithoutTouristInput, LocationPingUncheckedCreateWithoutTouristInput> | LocationPingCreateWithoutTouristInput[] | LocationPingUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: LocationPingCreateOrConnectWithoutTouristInput | LocationPingCreateOrConnectWithoutTouristInput[]
    upsert?: LocationPingUpsertWithWhereUniqueWithoutTouristInput | LocationPingUpsertWithWhereUniqueWithoutTouristInput[]
    createMany?: LocationPingCreateManyTouristInputEnvelope
    set?: LocationPingWhereUniqueInput | LocationPingWhereUniqueInput[]
    disconnect?: LocationPingWhereUniqueInput | LocationPingWhereUniqueInput[]
    delete?: LocationPingWhereUniqueInput | LocationPingWhereUniqueInput[]
    connect?: LocationPingWhereUniqueInput | LocationPingWhereUniqueInput[]
    update?: LocationPingUpdateWithWhereUniqueWithoutTouristInput | LocationPingUpdateWithWhereUniqueWithoutTouristInput[]
    updateMany?: LocationPingUpdateManyWithWhereWithoutTouristInput | LocationPingUpdateManyWithWhereWithoutTouristInput[]
    deleteMany?: LocationPingScalarWhereInput | LocationPingScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutTouristNestedInput = {
    create?: XOR<AlertCreateWithoutTouristInput, AlertUncheckedCreateWithoutTouristInput> | AlertCreateWithoutTouristInput[] | AlertUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutTouristInput | AlertCreateOrConnectWithoutTouristInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutTouristInput | AlertUpsertWithWhereUniqueWithoutTouristInput[]
    createMany?: AlertCreateManyTouristInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutTouristInput | AlertUpdateWithWhereUniqueWithoutTouristInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutTouristInput | AlertUpdateManyWithWhereWithoutTouristInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type ExpenditureUncheckedUpdateManyWithoutTouristNestedInput = {
    create?: XOR<ExpenditureCreateWithoutTouristInput, ExpenditureUncheckedCreateWithoutTouristInput> | ExpenditureCreateWithoutTouristInput[] | ExpenditureUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: ExpenditureCreateOrConnectWithoutTouristInput | ExpenditureCreateOrConnectWithoutTouristInput[]
    upsert?: ExpenditureUpsertWithWhereUniqueWithoutTouristInput | ExpenditureUpsertWithWhereUniqueWithoutTouristInput[]
    createMany?: ExpenditureCreateManyTouristInputEnvelope
    set?: ExpenditureWhereUniqueInput | ExpenditureWhereUniqueInput[]
    disconnect?: ExpenditureWhereUniqueInput | ExpenditureWhereUniqueInput[]
    delete?: ExpenditureWhereUniqueInput | ExpenditureWhereUniqueInput[]
    connect?: ExpenditureWhereUniqueInput | ExpenditureWhereUniqueInput[]
    update?: ExpenditureUpdateWithWhereUniqueWithoutTouristInput | ExpenditureUpdateWithWhereUniqueWithoutTouristInput[]
    updateMany?: ExpenditureUpdateManyWithWhereWithoutTouristInput | ExpenditureUpdateManyWithWhereWithoutTouristInput[]
    deleteMany?: ExpenditureScalarWhereInput | ExpenditureScalarWhereInput[]
  }

  export type SafetyScoreUncheckedUpdateManyWithoutTouristNestedInput = {
    create?: XOR<SafetyScoreCreateWithoutTouristInput, SafetyScoreUncheckedCreateWithoutTouristInput> | SafetyScoreCreateWithoutTouristInput[] | SafetyScoreUncheckedCreateWithoutTouristInput[]
    connectOrCreate?: SafetyScoreCreateOrConnectWithoutTouristInput | SafetyScoreCreateOrConnectWithoutTouristInput[]
    upsert?: SafetyScoreUpsertWithWhereUniqueWithoutTouristInput | SafetyScoreUpsertWithWhereUniqueWithoutTouristInput[]
    createMany?: SafetyScoreCreateManyTouristInputEnvelope
    set?: SafetyScoreWhereUniqueInput | SafetyScoreWhereUniqueInput[]
    disconnect?: SafetyScoreWhereUniqueInput | SafetyScoreWhereUniqueInput[]
    delete?: SafetyScoreWhereUniqueInput | SafetyScoreWhereUniqueInput[]
    connect?: SafetyScoreWhereUniqueInput | SafetyScoreWhereUniqueInput[]
    update?: SafetyScoreUpdateWithWhereUniqueWithoutTouristInput | SafetyScoreUpdateWithWhereUniqueWithoutTouristInput[]
    updateMany?: SafetyScoreUpdateManyWithWhereWithoutTouristInput | SafetyScoreUpdateManyWithWhereWithoutTouristInput[]
    deleteMany?: SafetyScoreScalarWhereInput | SafetyScoreScalarWhereInput[]
  }

  export type TouristCreateNestedOneWithoutTourPlansInput = {
    create?: XOR<TouristCreateWithoutTourPlansInput, TouristUncheckedCreateWithoutTourPlansInput>
    connectOrCreate?: TouristCreateOrConnectWithoutTourPlansInput
    connect?: TouristWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TouristUpdateOneRequiredWithoutTourPlansNestedInput = {
    create?: XOR<TouristCreateWithoutTourPlansInput, TouristUncheckedCreateWithoutTourPlansInput>
    connectOrCreate?: TouristCreateOrConnectWithoutTourPlansInput
    upsert?: TouristUpsertWithoutTourPlansInput
    connect?: TouristWhereUniqueInput
    update?: XOR<XOR<TouristUpdateToOneWithWhereWithoutTourPlansInput, TouristUpdateWithoutTourPlansInput>, TouristUncheckedUpdateWithoutTourPlansInput>
  }

  export type TouristCreateNestedOneWithoutPingsInput = {
    create?: XOR<TouristCreateWithoutPingsInput, TouristUncheckedCreateWithoutPingsInput>
    connectOrCreate?: TouristCreateOrConnectWithoutPingsInput
    connect?: TouristWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TouristUpdateOneRequiredWithoutPingsNestedInput = {
    create?: XOR<TouristCreateWithoutPingsInput, TouristUncheckedCreateWithoutPingsInput>
    connectOrCreate?: TouristCreateOrConnectWithoutPingsInput
    upsert?: TouristUpsertWithoutPingsInput
    connect?: TouristWhereUniqueInput
    update?: XOR<XOR<TouristUpdateToOneWithWhereWithoutPingsInput, TouristUpdateWithoutPingsInput>, TouristUncheckedUpdateWithoutPingsInput>
  }

  export type TouristCreateNestedOneWithoutAlertsInput = {
    create?: XOR<TouristCreateWithoutAlertsInput, TouristUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: TouristCreateOrConnectWithoutAlertsInput
    connect?: TouristWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TouristUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<TouristCreateWithoutAlertsInput, TouristUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: TouristCreateOrConnectWithoutAlertsInput
    upsert?: TouristUpsertWithoutAlertsInput
    connect?: TouristWhereUniqueInput
    update?: XOR<XOR<TouristUpdateToOneWithWhereWithoutAlertsInput, TouristUpdateWithoutAlertsInput>, TouristUncheckedUpdateWithoutAlertsInput>
  }

  export type TouristCreateNestedOneWithoutExpendituresInput = {
    create?: XOR<TouristCreateWithoutExpendituresInput, TouristUncheckedCreateWithoutExpendituresInput>
    connectOrCreate?: TouristCreateOrConnectWithoutExpendituresInput
    connect?: TouristWhereUniqueInput
  }

  export type TouristUpdateOneRequiredWithoutExpendituresNestedInput = {
    create?: XOR<TouristCreateWithoutExpendituresInput, TouristUncheckedCreateWithoutExpendituresInput>
    connectOrCreate?: TouristCreateOrConnectWithoutExpendituresInput
    upsert?: TouristUpsertWithoutExpendituresInput
    connect?: TouristWhereUniqueInput
    update?: XOR<XOR<TouristUpdateToOneWithWhereWithoutExpendituresInput, TouristUpdateWithoutExpendituresInput>, TouristUncheckedUpdateWithoutExpendituresInput>
  }

  export type TouristCreateNestedOneWithoutSafetyScoresInput = {
    create?: XOR<TouristCreateWithoutSafetyScoresInput, TouristUncheckedCreateWithoutSafetyScoresInput>
    connectOrCreate?: TouristCreateOrConnectWithoutSafetyScoresInput
    connect?: TouristWhereUniqueInput
  }

  export type TouristUpdateOneRequiredWithoutSafetyScoresNestedInput = {
    create?: XOR<TouristCreateWithoutSafetyScoresInput, TouristUncheckedCreateWithoutSafetyScoresInput>
    connectOrCreate?: TouristCreateOrConnectWithoutSafetyScoresInput
    upsert?: TouristUpsertWithoutSafetyScoresInput
    connect?: TouristWhereUniqueInput
    update?: XOR<XOR<TouristUpdateToOneWithWhereWithoutSafetyScoresInput, TouristUpdateWithoutSafetyScoresInput>, TouristUncheckedUpdateWithoutSafetyScoresInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TourPlanCreateWithoutTouristInput = {
    startDate: Date | string
    endDate: Date | string
    locationName: string
    latitude: number
    longitude: number
    geofenceRadiusMeters?: number
    createdAt?: Date | string
  }

  export type TourPlanUncheckedCreateWithoutTouristInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    locationName: string
    latitude: number
    longitude: number
    geofenceRadiusMeters?: number
    createdAt?: Date | string
  }

  export type TourPlanCreateOrConnectWithoutTouristInput = {
    where: TourPlanWhereUniqueInput
    create: XOR<TourPlanCreateWithoutTouristInput, TourPlanUncheckedCreateWithoutTouristInput>
  }

  export type TourPlanCreateManyTouristInputEnvelope = {
    data: TourPlanCreateManyTouristInput | TourPlanCreateManyTouristInput[]
  }

  export type LocationPingCreateWithoutTouristInput = {
    latitude: number
    longitude: number
    speedKmh?: number | null
    createdAt?: Date | string
  }

  export type LocationPingUncheckedCreateWithoutTouristInput = {
    id?: number
    latitude: number
    longitude: number
    speedKmh?: number | null
    createdAt?: Date | string
  }

  export type LocationPingCreateOrConnectWithoutTouristInput = {
    where: LocationPingWhereUniqueInput
    create: XOR<LocationPingCreateWithoutTouristInput, LocationPingUncheckedCreateWithoutTouristInput>
  }

  export type LocationPingCreateManyTouristInputEnvelope = {
    data: LocationPingCreateManyTouristInput | LocationPingCreateManyTouristInput[]
  }

  export type AlertCreateWithoutTouristInput = {
    type: string
    message?: string | null
    resolved?: boolean
    createdAt?: Date | string
  }

  export type AlertUncheckedCreateWithoutTouristInput = {
    id?: number
    type: string
    message?: string | null
    resolved?: boolean
    createdAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutTouristInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutTouristInput, AlertUncheckedCreateWithoutTouristInput>
  }

  export type AlertCreateManyTouristInputEnvelope = {
    data: AlertCreateManyTouristInput | AlertCreateManyTouristInput[]
  }

  export type ExpenditureCreateWithoutTouristInput = {
    item: string
    amount: number
    createdAt?: Date | string
  }

  export type ExpenditureUncheckedCreateWithoutTouristInput = {
    id?: number
    item: string
    amount: number
    createdAt?: Date | string
  }

  export type ExpenditureCreateOrConnectWithoutTouristInput = {
    where: ExpenditureWhereUniqueInput
    create: XOR<ExpenditureCreateWithoutTouristInput, ExpenditureUncheckedCreateWithoutTouristInput>
  }

  export type ExpenditureCreateManyTouristInputEnvelope = {
    data: ExpenditureCreateManyTouristInput | ExpenditureCreateManyTouristInput[]
  }

  export type SafetyScoreCreateWithoutTouristInput = {
    score: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type SafetyScoreUncheckedCreateWithoutTouristInput = {
    id?: number
    score: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type SafetyScoreCreateOrConnectWithoutTouristInput = {
    where: SafetyScoreWhereUniqueInput
    create: XOR<SafetyScoreCreateWithoutTouristInput, SafetyScoreUncheckedCreateWithoutTouristInput>
  }

  export type SafetyScoreCreateManyTouristInputEnvelope = {
    data: SafetyScoreCreateManyTouristInput | SafetyScoreCreateManyTouristInput[]
  }

  export type TourPlanUpsertWithWhereUniqueWithoutTouristInput = {
    where: TourPlanWhereUniqueInput
    update: XOR<TourPlanUpdateWithoutTouristInput, TourPlanUncheckedUpdateWithoutTouristInput>
    create: XOR<TourPlanCreateWithoutTouristInput, TourPlanUncheckedCreateWithoutTouristInput>
  }

  export type TourPlanUpdateWithWhereUniqueWithoutTouristInput = {
    where: TourPlanWhereUniqueInput
    data: XOR<TourPlanUpdateWithoutTouristInput, TourPlanUncheckedUpdateWithoutTouristInput>
  }

  export type TourPlanUpdateManyWithWhereWithoutTouristInput = {
    where: TourPlanScalarWhereInput
    data: XOR<TourPlanUpdateManyMutationInput, TourPlanUncheckedUpdateManyWithoutTouristInput>
  }

  export type TourPlanScalarWhereInput = {
    AND?: TourPlanScalarWhereInput | TourPlanScalarWhereInput[]
    OR?: TourPlanScalarWhereInput[]
    NOT?: TourPlanScalarWhereInput | TourPlanScalarWhereInput[]
    id?: IntFilter<"TourPlan"> | number
    touristId?: IntFilter<"TourPlan"> | number
    startDate?: DateTimeFilter<"TourPlan"> | Date | string
    endDate?: DateTimeFilter<"TourPlan"> | Date | string
    locationName?: StringFilter<"TourPlan"> | string
    latitude?: FloatFilter<"TourPlan"> | number
    longitude?: FloatFilter<"TourPlan"> | number
    geofenceRadiusMeters?: IntFilter<"TourPlan"> | number
    createdAt?: DateTimeFilter<"TourPlan"> | Date | string
  }

  export type LocationPingUpsertWithWhereUniqueWithoutTouristInput = {
    where: LocationPingWhereUniqueInput
    update: XOR<LocationPingUpdateWithoutTouristInput, LocationPingUncheckedUpdateWithoutTouristInput>
    create: XOR<LocationPingCreateWithoutTouristInput, LocationPingUncheckedCreateWithoutTouristInput>
  }

  export type LocationPingUpdateWithWhereUniqueWithoutTouristInput = {
    where: LocationPingWhereUniqueInput
    data: XOR<LocationPingUpdateWithoutTouristInput, LocationPingUncheckedUpdateWithoutTouristInput>
  }

  export type LocationPingUpdateManyWithWhereWithoutTouristInput = {
    where: LocationPingScalarWhereInput
    data: XOR<LocationPingUpdateManyMutationInput, LocationPingUncheckedUpdateManyWithoutTouristInput>
  }

  export type LocationPingScalarWhereInput = {
    AND?: LocationPingScalarWhereInput | LocationPingScalarWhereInput[]
    OR?: LocationPingScalarWhereInput[]
    NOT?: LocationPingScalarWhereInput | LocationPingScalarWhereInput[]
    id?: IntFilter<"LocationPing"> | number
    touristId?: IntFilter<"LocationPing"> | number
    latitude?: FloatFilter<"LocationPing"> | number
    longitude?: FloatFilter<"LocationPing"> | number
    speedKmh?: FloatNullableFilter<"LocationPing"> | number | null
    createdAt?: DateTimeFilter<"LocationPing"> | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutTouristInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutTouristInput, AlertUncheckedUpdateWithoutTouristInput>
    create: XOR<AlertCreateWithoutTouristInput, AlertUncheckedCreateWithoutTouristInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutTouristInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutTouristInput, AlertUncheckedUpdateWithoutTouristInput>
  }

  export type AlertUpdateManyWithWhereWithoutTouristInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutTouristInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: IntFilter<"Alert"> | number
    touristId?: IntFilter<"Alert"> | number
    type?: StringFilter<"Alert"> | string
    message?: StringNullableFilter<"Alert"> | string | null
    resolved?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type ExpenditureUpsertWithWhereUniqueWithoutTouristInput = {
    where: ExpenditureWhereUniqueInput
    update: XOR<ExpenditureUpdateWithoutTouristInput, ExpenditureUncheckedUpdateWithoutTouristInput>
    create: XOR<ExpenditureCreateWithoutTouristInput, ExpenditureUncheckedCreateWithoutTouristInput>
  }

  export type ExpenditureUpdateWithWhereUniqueWithoutTouristInput = {
    where: ExpenditureWhereUniqueInput
    data: XOR<ExpenditureUpdateWithoutTouristInput, ExpenditureUncheckedUpdateWithoutTouristInput>
  }

  export type ExpenditureUpdateManyWithWhereWithoutTouristInput = {
    where: ExpenditureScalarWhereInput
    data: XOR<ExpenditureUpdateManyMutationInput, ExpenditureUncheckedUpdateManyWithoutTouristInput>
  }

  export type ExpenditureScalarWhereInput = {
    AND?: ExpenditureScalarWhereInput | ExpenditureScalarWhereInput[]
    OR?: ExpenditureScalarWhereInput[]
    NOT?: ExpenditureScalarWhereInput | ExpenditureScalarWhereInput[]
    id?: IntFilter<"Expenditure"> | number
    touristId?: IntFilter<"Expenditure"> | number
    item?: StringFilter<"Expenditure"> | string
    amount?: FloatFilter<"Expenditure"> | number
    createdAt?: DateTimeFilter<"Expenditure"> | Date | string
  }

  export type SafetyScoreUpsertWithWhereUniqueWithoutTouristInput = {
    where: SafetyScoreWhereUniqueInput
    update: XOR<SafetyScoreUpdateWithoutTouristInput, SafetyScoreUncheckedUpdateWithoutTouristInput>
    create: XOR<SafetyScoreCreateWithoutTouristInput, SafetyScoreUncheckedCreateWithoutTouristInput>
  }

  export type SafetyScoreUpdateWithWhereUniqueWithoutTouristInput = {
    where: SafetyScoreWhereUniqueInput
    data: XOR<SafetyScoreUpdateWithoutTouristInput, SafetyScoreUncheckedUpdateWithoutTouristInput>
  }

  export type SafetyScoreUpdateManyWithWhereWithoutTouristInput = {
    where: SafetyScoreScalarWhereInput
    data: XOR<SafetyScoreUpdateManyMutationInput, SafetyScoreUncheckedUpdateManyWithoutTouristInput>
  }

  export type SafetyScoreScalarWhereInput = {
    AND?: SafetyScoreScalarWhereInput | SafetyScoreScalarWhereInput[]
    OR?: SafetyScoreScalarWhereInput[]
    NOT?: SafetyScoreScalarWhereInput | SafetyScoreScalarWhereInput[]
    id?: IntFilter<"SafetyScore"> | number
    touristId?: IntFilter<"SafetyScore"> | number
    score?: IntFilter<"SafetyScore"> | number
    reason?: StringNullableFilter<"SafetyScore"> | string | null
    createdAt?: DateTimeFilter<"SafetyScore"> | Date | string
  }

  export type TouristCreateWithoutTourPlansInput = {
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pings?: LocationPingCreateNestedManyWithoutTouristInput
    alerts?: AlertCreateNestedManyWithoutTouristInput
    expenditures?: ExpenditureCreateNestedManyWithoutTouristInput
    safetyScores?: SafetyScoreCreateNestedManyWithoutTouristInput
  }

  export type TouristUncheckedCreateWithoutTourPlansInput = {
    id?: number
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pings?: LocationPingUncheckedCreateNestedManyWithoutTouristInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTouristInput
    expenditures?: ExpenditureUncheckedCreateNestedManyWithoutTouristInput
    safetyScores?: SafetyScoreUncheckedCreateNestedManyWithoutTouristInput
  }

  export type TouristCreateOrConnectWithoutTourPlansInput = {
    where: TouristWhereUniqueInput
    create: XOR<TouristCreateWithoutTourPlansInput, TouristUncheckedCreateWithoutTourPlansInput>
  }

  export type TouristUpsertWithoutTourPlansInput = {
    update: XOR<TouristUpdateWithoutTourPlansInput, TouristUncheckedUpdateWithoutTourPlansInput>
    create: XOR<TouristCreateWithoutTourPlansInput, TouristUncheckedCreateWithoutTourPlansInput>
    where?: TouristWhereInput
  }

  export type TouristUpdateToOneWithWhereWithoutTourPlansInput = {
    where?: TouristWhereInput
    data: XOR<TouristUpdateWithoutTourPlansInput, TouristUncheckedUpdateWithoutTourPlansInput>
  }

  export type TouristUpdateWithoutTourPlansInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pings?: LocationPingUpdateManyWithoutTouristNestedInput
    alerts?: AlertUpdateManyWithoutTouristNestedInput
    expenditures?: ExpenditureUpdateManyWithoutTouristNestedInput
    safetyScores?: SafetyScoreUpdateManyWithoutTouristNestedInput
  }

  export type TouristUncheckedUpdateWithoutTourPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pings?: LocationPingUncheckedUpdateManyWithoutTouristNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTouristNestedInput
    expenditures?: ExpenditureUncheckedUpdateManyWithoutTouristNestedInput
    safetyScores?: SafetyScoreUncheckedUpdateManyWithoutTouristNestedInput
  }

  export type TouristCreateWithoutPingsInput = {
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPlans?: TourPlanCreateNestedManyWithoutTouristInput
    alerts?: AlertCreateNestedManyWithoutTouristInput
    expenditures?: ExpenditureCreateNestedManyWithoutTouristInput
    safetyScores?: SafetyScoreCreateNestedManyWithoutTouristInput
  }

  export type TouristUncheckedCreateWithoutPingsInput = {
    id?: number
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPlans?: TourPlanUncheckedCreateNestedManyWithoutTouristInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTouristInput
    expenditures?: ExpenditureUncheckedCreateNestedManyWithoutTouristInput
    safetyScores?: SafetyScoreUncheckedCreateNestedManyWithoutTouristInput
  }

  export type TouristCreateOrConnectWithoutPingsInput = {
    where: TouristWhereUniqueInput
    create: XOR<TouristCreateWithoutPingsInput, TouristUncheckedCreateWithoutPingsInput>
  }

  export type TouristUpsertWithoutPingsInput = {
    update: XOR<TouristUpdateWithoutPingsInput, TouristUncheckedUpdateWithoutPingsInput>
    create: XOR<TouristCreateWithoutPingsInput, TouristUncheckedCreateWithoutPingsInput>
    where?: TouristWhereInput
  }

  export type TouristUpdateToOneWithWhereWithoutPingsInput = {
    where?: TouristWhereInput
    data: XOR<TouristUpdateWithoutPingsInput, TouristUncheckedUpdateWithoutPingsInput>
  }

  export type TouristUpdateWithoutPingsInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPlans?: TourPlanUpdateManyWithoutTouristNestedInput
    alerts?: AlertUpdateManyWithoutTouristNestedInput
    expenditures?: ExpenditureUpdateManyWithoutTouristNestedInput
    safetyScores?: SafetyScoreUpdateManyWithoutTouristNestedInput
  }

  export type TouristUncheckedUpdateWithoutPingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPlans?: TourPlanUncheckedUpdateManyWithoutTouristNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTouristNestedInput
    expenditures?: ExpenditureUncheckedUpdateManyWithoutTouristNestedInput
    safetyScores?: SafetyScoreUncheckedUpdateManyWithoutTouristNestedInput
  }

  export type TouristCreateWithoutAlertsInput = {
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPlans?: TourPlanCreateNestedManyWithoutTouristInput
    pings?: LocationPingCreateNestedManyWithoutTouristInput
    expenditures?: ExpenditureCreateNestedManyWithoutTouristInput
    safetyScores?: SafetyScoreCreateNestedManyWithoutTouristInput
  }

  export type TouristUncheckedCreateWithoutAlertsInput = {
    id?: number
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPlans?: TourPlanUncheckedCreateNestedManyWithoutTouristInput
    pings?: LocationPingUncheckedCreateNestedManyWithoutTouristInput
    expenditures?: ExpenditureUncheckedCreateNestedManyWithoutTouristInput
    safetyScores?: SafetyScoreUncheckedCreateNestedManyWithoutTouristInput
  }

  export type TouristCreateOrConnectWithoutAlertsInput = {
    where: TouristWhereUniqueInput
    create: XOR<TouristCreateWithoutAlertsInput, TouristUncheckedCreateWithoutAlertsInput>
  }

  export type TouristUpsertWithoutAlertsInput = {
    update: XOR<TouristUpdateWithoutAlertsInput, TouristUncheckedUpdateWithoutAlertsInput>
    create: XOR<TouristCreateWithoutAlertsInput, TouristUncheckedCreateWithoutAlertsInput>
    where?: TouristWhereInput
  }

  export type TouristUpdateToOneWithWhereWithoutAlertsInput = {
    where?: TouristWhereInput
    data: XOR<TouristUpdateWithoutAlertsInput, TouristUncheckedUpdateWithoutAlertsInput>
  }

  export type TouristUpdateWithoutAlertsInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPlans?: TourPlanUpdateManyWithoutTouristNestedInput
    pings?: LocationPingUpdateManyWithoutTouristNestedInput
    expenditures?: ExpenditureUpdateManyWithoutTouristNestedInput
    safetyScores?: SafetyScoreUpdateManyWithoutTouristNestedInput
  }

  export type TouristUncheckedUpdateWithoutAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPlans?: TourPlanUncheckedUpdateManyWithoutTouristNestedInput
    pings?: LocationPingUncheckedUpdateManyWithoutTouristNestedInput
    expenditures?: ExpenditureUncheckedUpdateManyWithoutTouristNestedInput
    safetyScores?: SafetyScoreUncheckedUpdateManyWithoutTouristNestedInput
  }

  export type TouristCreateWithoutExpendituresInput = {
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPlans?: TourPlanCreateNestedManyWithoutTouristInput
    pings?: LocationPingCreateNestedManyWithoutTouristInput
    alerts?: AlertCreateNestedManyWithoutTouristInput
    safetyScores?: SafetyScoreCreateNestedManyWithoutTouristInput
  }

  export type TouristUncheckedCreateWithoutExpendituresInput = {
    id?: number
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPlans?: TourPlanUncheckedCreateNestedManyWithoutTouristInput
    pings?: LocationPingUncheckedCreateNestedManyWithoutTouristInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTouristInput
    safetyScores?: SafetyScoreUncheckedCreateNestedManyWithoutTouristInput
  }

  export type TouristCreateOrConnectWithoutExpendituresInput = {
    where: TouristWhereUniqueInput
    create: XOR<TouristCreateWithoutExpendituresInput, TouristUncheckedCreateWithoutExpendituresInput>
  }

  export type TouristUpsertWithoutExpendituresInput = {
    update: XOR<TouristUpdateWithoutExpendituresInput, TouristUncheckedUpdateWithoutExpendituresInput>
    create: XOR<TouristCreateWithoutExpendituresInput, TouristUncheckedCreateWithoutExpendituresInput>
    where?: TouristWhereInput
  }

  export type TouristUpdateToOneWithWhereWithoutExpendituresInput = {
    where?: TouristWhereInput
    data: XOR<TouristUpdateWithoutExpendituresInput, TouristUncheckedUpdateWithoutExpendituresInput>
  }

  export type TouristUpdateWithoutExpendituresInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPlans?: TourPlanUpdateManyWithoutTouristNestedInput
    pings?: LocationPingUpdateManyWithoutTouristNestedInput
    alerts?: AlertUpdateManyWithoutTouristNestedInput
    safetyScores?: SafetyScoreUpdateManyWithoutTouristNestedInput
  }

  export type TouristUncheckedUpdateWithoutExpendituresInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPlans?: TourPlanUncheckedUpdateManyWithoutTouristNestedInput
    pings?: LocationPingUncheckedUpdateManyWithoutTouristNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTouristNestedInput
    safetyScores?: SafetyScoreUncheckedUpdateManyWithoutTouristNestedInput
  }

  export type TouristCreateWithoutSafetyScoresInput = {
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPlans?: TourPlanCreateNestedManyWithoutTouristInput
    pings?: LocationPingCreateNestedManyWithoutTouristInput
    alerts?: AlertCreateNestedManyWithoutTouristInput
    expenditures?: ExpenditureCreateNestedManyWithoutTouristInput
  }

  export type TouristUncheckedCreateWithoutSafetyScoresInput = {
    id?: number
    uniqueId: string
    email: string
    mobile?: string | null
    passwordHash: string
    fullName: string
    aadhaarNumber?: string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: number
    gender?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tourPlans?: TourPlanUncheckedCreateNestedManyWithoutTouristInput
    pings?: LocationPingUncheckedCreateNestedManyWithoutTouristInput
    alerts?: AlertUncheckedCreateNestedManyWithoutTouristInput
    expenditures?: ExpenditureUncheckedCreateNestedManyWithoutTouristInput
  }

  export type TouristCreateOrConnectWithoutSafetyScoresInput = {
    where: TouristWhereUniqueInput
    create: XOR<TouristCreateWithoutSafetyScoresInput, TouristUncheckedCreateWithoutSafetyScoresInput>
  }

  export type TouristUpsertWithoutSafetyScoresInput = {
    update: XOR<TouristUpdateWithoutSafetyScoresInput, TouristUncheckedUpdateWithoutSafetyScoresInput>
    create: XOR<TouristCreateWithoutSafetyScoresInput, TouristUncheckedCreateWithoutSafetyScoresInput>
    where?: TouristWhereInput
  }

  export type TouristUpdateToOneWithWhereWithoutSafetyScoresInput = {
    where?: TouristWhereInput
    data: XOR<TouristUpdateWithoutSafetyScoresInput, TouristUncheckedUpdateWithoutSafetyScoresInput>
  }

  export type TouristUpdateWithoutSafetyScoresInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPlans?: TourPlanUpdateManyWithoutTouristNestedInput
    pings?: LocationPingUpdateManyWithoutTouristNestedInput
    alerts?: AlertUpdateManyWithoutTouristNestedInput
    expenditures?: ExpenditureUpdateManyWithoutTouristNestedInput
  }

  export type TouristUncheckedUpdateWithoutSafetyScoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    aadhaarNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyDetails?: NullableJsonNullValueInput | InputJsonValue
    companionsCount?: IntFieldUpdateOperationsInput | number
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tourPlans?: TourPlanUncheckedUpdateManyWithoutTouristNestedInput
    pings?: LocationPingUncheckedUpdateManyWithoutTouristNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutTouristNestedInput
    expenditures?: ExpenditureUncheckedUpdateManyWithoutTouristNestedInput
  }

  export type TourPlanCreateManyTouristInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    locationName: string
    latitude: number
    longitude: number
    geofenceRadiusMeters?: number
    createdAt?: Date | string
  }

  export type LocationPingCreateManyTouristInput = {
    id?: number
    latitude: number
    longitude: number
    speedKmh?: number | null
    createdAt?: Date | string
  }

  export type AlertCreateManyTouristInput = {
    id?: number
    type: string
    message?: string | null
    resolved?: boolean
    createdAt?: Date | string
  }

  export type ExpenditureCreateManyTouristInput = {
    id?: number
    item: string
    amount: number
    createdAt?: Date | string
  }

  export type SafetyScoreCreateManyTouristInput = {
    id?: number
    score: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type TourPlanUpdateWithoutTouristInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geofenceRadiusMeters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourPlanUncheckedUpdateWithoutTouristInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geofenceRadiusMeters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourPlanUncheckedUpdateManyWithoutTouristInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    geofenceRadiusMeters?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationPingUpdateWithoutTouristInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speedKmh?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationPingUncheckedUpdateWithoutTouristInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speedKmh?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationPingUncheckedUpdateManyWithoutTouristInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speedKmh?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpdateWithoutTouristInput = {
    type?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateWithoutTouristInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutTouristInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenditureUpdateWithoutTouristInput = {
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenditureUncheckedUpdateWithoutTouristInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenditureUncheckedUpdateManyWithoutTouristInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafetyScoreUpdateWithoutTouristInput = {
    score?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafetyScoreUncheckedUpdateWithoutTouristInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafetyScoreUncheckedUpdateManyWithoutTouristInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}