
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
 * Model ResponderUnit
 * 
 */
export type ResponderUnit = $Result.DefaultSelection<Prisma.$ResponderUnitPayload>
/**
 * Model DispatchRoute
 * 
 */
export type DispatchRoute = $Result.DefaultSelection<Prisma.$DispatchRoutePayload>
/**
 * Model Capability
 * 
 */
export type Capability = $Result.DefaultSelection<Prisma.$CapabilityPayload>
/**
 * Model GeoRecommendation
 * 
 */
export type GeoRecommendation = $Result.DefaultSelection<Prisma.$GeoRecommendationPayload>
/**
 * Model GeoZone
 * 
 */
export type GeoZone = $Result.DefaultSelection<Prisma.$GeoZonePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ResponderUnits
 * const responderUnits = await prisma.responderUnit.findMany()
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
   * // Fetch zero or more ResponderUnits
   * const responderUnits = await prisma.responderUnit.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.responderUnit`: Exposes CRUD operations for the **ResponderUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResponderUnits
    * const responderUnits = await prisma.responderUnit.findMany()
    * ```
    */
  get responderUnit(): Prisma.ResponderUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispatchRoute`: Exposes CRUD operations for the **DispatchRoute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DispatchRoutes
    * const dispatchRoutes = await prisma.dispatchRoute.findMany()
    * ```
    */
  get dispatchRoute(): Prisma.DispatchRouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.capability`: Exposes CRUD operations for the **Capability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Capabilities
    * const capabilities = await prisma.capability.findMany()
    * ```
    */
  get capability(): Prisma.CapabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.geoRecommendation`: Exposes CRUD operations for the **GeoRecommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeoRecommendations
    * const geoRecommendations = await prisma.geoRecommendation.findMany()
    * ```
    */
  get geoRecommendation(): Prisma.GeoRecommendationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.geoZone`: Exposes CRUD operations for the **GeoZone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeoZones
    * const geoZones = await prisma.geoZone.findMany()
    * ```
    */
  get geoZone(): Prisma.GeoZoneDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    ResponderUnit: 'ResponderUnit',
    DispatchRoute: 'DispatchRoute',
    Capability: 'Capability',
    GeoRecommendation: 'GeoRecommendation',
    GeoZone: 'GeoZone'
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
      modelProps: "responderUnit" | "dispatchRoute" | "capability" | "geoRecommendation" | "geoZone"
      txIsolationLevel: never
    }
    model: {
      ResponderUnit: {
        payload: Prisma.$ResponderUnitPayload<ExtArgs>
        fields: Prisma.ResponderUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponderUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponderUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderUnitPayload>
          }
          findFirst: {
            args: Prisma.ResponderUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponderUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderUnitPayload>
          }
          findMany: {
            args: Prisma.ResponderUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderUnitPayload>[]
          }
          create: {
            args: Prisma.ResponderUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderUnitPayload>
          }
          createMany: {
            args: Prisma.ResponderUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResponderUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderUnitPayload>
          }
          update: {
            args: Prisma.ResponderUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderUnitPayload>
          }
          deleteMany: {
            args: Prisma.ResponderUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponderUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResponderUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderUnitPayload>
          }
          aggregate: {
            args: Prisma.ResponderUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponderUnit>
          }
          groupBy: {
            args: Prisma.ResponderUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponderUnitGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ResponderUnitFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ResponderUnitAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ResponderUnitCountArgs<ExtArgs>
            result: $Utils.Optional<ResponderUnitCountAggregateOutputType> | number
          }
        }
      }
      DispatchRoute: {
        payload: Prisma.$DispatchRoutePayload<ExtArgs>
        fields: Prisma.DispatchRouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispatchRouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchRoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispatchRouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchRoutePayload>
          }
          findFirst: {
            args: Prisma.DispatchRouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchRoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispatchRouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchRoutePayload>
          }
          findMany: {
            args: Prisma.DispatchRouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchRoutePayload>[]
          }
          create: {
            args: Prisma.DispatchRouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchRoutePayload>
          }
          createMany: {
            args: Prisma.DispatchRouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DispatchRouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchRoutePayload>
          }
          update: {
            args: Prisma.DispatchRouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchRoutePayload>
          }
          deleteMany: {
            args: Prisma.DispatchRouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DispatchRouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DispatchRouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchRoutePayload>
          }
          aggregate: {
            args: Prisma.DispatchRouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispatchRoute>
          }
          groupBy: {
            args: Prisma.DispatchRouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispatchRouteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DispatchRouteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DispatchRouteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DispatchRouteCountArgs<ExtArgs>
            result: $Utils.Optional<DispatchRouteCountAggregateOutputType> | number
          }
        }
      }
      Capability: {
        payload: Prisma.$CapabilityPayload<ExtArgs>
        fields: Prisma.CapabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          findFirst: {
            args: Prisma.CapabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          findMany: {
            args: Prisma.CapabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>[]
          }
          create: {
            args: Prisma.CapabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          createMany: {
            args: Prisma.CapabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CapabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          update: {
            args: Prisma.CapabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          deleteMany: {
            args: Prisma.CapabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CapabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CapabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CapabilityPayload>
          }
          aggregate: {
            args: Prisma.CapabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCapability>
          }
          groupBy: {
            args: Prisma.CapabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CapabilityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CapabilityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CapabilityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CapabilityCountArgs<ExtArgs>
            result: $Utils.Optional<CapabilityCountAggregateOutputType> | number
          }
        }
      }
      GeoRecommendation: {
        payload: Prisma.$GeoRecommendationPayload<ExtArgs>
        fields: Prisma.GeoRecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeoRecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoRecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeoRecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoRecommendationPayload>
          }
          findFirst: {
            args: Prisma.GeoRecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoRecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeoRecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoRecommendationPayload>
          }
          findMany: {
            args: Prisma.GeoRecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoRecommendationPayload>[]
          }
          create: {
            args: Prisma.GeoRecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoRecommendationPayload>
          }
          createMany: {
            args: Prisma.GeoRecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeoRecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoRecommendationPayload>
          }
          update: {
            args: Prisma.GeoRecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoRecommendationPayload>
          }
          deleteMany: {
            args: Prisma.GeoRecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeoRecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeoRecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoRecommendationPayload>
          }
          aggregate: {
            args: Prisma.GeoRecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeoRecommendation>
          }
          groupBy: {
            args: Prisma.GeoRecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeoRecommendationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GeoRecommendationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GeoRecommendationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GeoRecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<GeoRecommendationCountAggregateOutputType> | number
          }
        }
      }
      GeoZone: {
        payload: Prisma.$GeoZonePayload<ExtArgs>
        fields: Prisma.GeoZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeoZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeoZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoZonePayload>
          }
          findFirst: {
            args: Prisma.GeoZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeoZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoZonePayload>
          }
          findMany: {
            args: Prisma.GeoZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoZonePayload>[]
          }
          create: {
            args: Prisma.GeoZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoZonePayload>
          }
          createMany: {
            args: Prisma.GeoZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GeoZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoZonePayload>
          }
          update: {
            args: Prisma.GeoZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoZonePayload>
          }
          deleteMany: {
            args: Prisma.GeoZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeoZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GeoZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeoZonePayload>
          }
          aggregate: {
            args: Prisma.GeoZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeoZone>
          }
          groupBy: {
            args: Prisma.GeoZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeoZoneGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GeoZoneFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GeoZoneAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GeoZoneCountArgs<ExtArgs>
            result: $Utils.Optional<GeoZoneCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
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
    responderUnit?: ResponderUnitOmit
    dispatchRoute?: DispatchRouteOmit
    capability?: CapabilityOmit
    geoRecommendation?: GeoRecommendationOmit
    geoZone?: GeoZoneOmit
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
   * Count Type ResponderUnitCountOutputType
   */

  export type ResponderUnitCountOutputType = {
    capabilities: number
    dispatchRoutes: number
  }

  export type ResponderUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capabilities?: boolean | ResponderUnitCountOutputTypeCountCapabilitiesArgs
    dispatchRoutes?: boolean | ResponderUnitCountOutputTypeCountDispatchRoutesArgs
  }

  // Custom InputTypes
  /**
   * ResponderUnitCountOutputType without action
   */
  export type ResponderUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnitCountOutputType
     */
    select?: ResponderUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResponderUnitCountOutputType without action
   */
  export type ResponderUnitCountOutputTypeCountCapabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapabilityWhereInput
  }

  /**
   * ResponderUnitCountOutputType without action
   */
  export type ResponderUnitCountOutputTypeCountDispatchRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispatchRouteWhereInput
  }


  /**
   * Count Type GeoZoneCountOutputType
   */

  export type GeoZoneCountOutputType = {
    responderUnits: number
  }

  export type GeoZoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responderUnits?: boolean | GeoZoneCountOutputTypeCountResponderUnitsArgs
  }

  // Custom InputTypes
  /**
   * GeoZoneCountOutputType without action
   */
  export type GeoZoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZoneCountOutputType
     */
    select?: GeoZoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeoZoneCountOutputType without action
   */
  export type GeoZoneCountOutputTypeCountResponderUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponderUnitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ResponderUnit
   */

  export type AggregateResponderUnit = {
    _count: ResponderUnitCountAggregateOutputType | null
    _avg: ResponderUnitAvgAggregateOutputType | null
    _sum: ResponderUnitSumAggregateOutputType | null
    _min: ResponderUnitMinAggregateOutputType | null
    _max: ResponderUnitMaxAggregateOutputType | null
  }

  export type ResponderUnitAvgAggregateOutputType = {
    location_lat: number | null
    location_lon: number | null
  }

  export type ResponderUnitSumAggregateOutputType = {
    location_lat: number | null
    location_lon: number | null
  }

  export type ResponderUnitMinAggregateOutputType = {
    id: string | null
    name: string | null
    location_lat: number | null
    location_lon: number | null
    zone: string | null
    status: string | null
    type: string | null
    activeIncidentId: string | null
    geoZoneId: string | null
  }

  export type ResponderUnitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location_lat: number | null
    location_lon: number | null
    zone: string | null
    status: string | null
    type: string | null
    activeIncidentId: string | null
    geoZoneId: string | null
  }

  export type ResponderUnitCountAggregateOutputType = {
    id: number
    name: number
    location_lat: number
    location_lon: number
    zone: number
    status: number
    type: number
    activeIncidentId: number
    geoZoneId: number
    _all: number
  }


  export type ResponderUnitAvgAggregateInputType = {
    location_lat?: true
    location_lon?: true
  }

  export type ResponderUnitSumAggregateInputType = {
    location_lat?: true
    location_lon?: true
  }

  export type ResponderUnitMinAggregateInputType = {
    id?: true
    name?: true
    location_lat?: true
    location_lon?: true
    zone?: true
    status?: true
    type?: true
    activeIncidentId?: true
    geoZoneId?: true
  }

  export type ResponderUnitMaxAggregateInputType = {
    id?: true
    name?: true
    location_lat?: true
    location_lon?: true
    zone?: true
    status?: true
    type?: true
    activeIncidentId?: true
    geoZoneId?: true
  }

  export type ResponderUnitCountAggregateInputType = {
    id?: true
    name?: true
    location_lat?: true
    location_lon?: true
    zone?: true
    status?: true
    type?: true
    activeIncidentId?: true
    geoZoneId?: true
    _all?: true
  }

  export type ResponderUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResponderUnit to aggregate.
     */
    where?: ResponderUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponderUnits to fetch.
     */
    orderBy?: ResponderUnitOrderByWithRelationInput | ResponderUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponderUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponderUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponderUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResponderUnits
    **/
    _count?: true | ResponderUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponderUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponderUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponderUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponderUnitMaxAggregateInputType
  }

  export type GetResponderUnitAggregateType<T extends ResponderUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateResponderUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponderUnit[P]>
      : GetScalarType<T[P], AggregateResponderUnit[P]>
  }




  export type ResponderUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponderUnitWhereInput
    orderBy?: ResponderUnitOrderByWithAggregationInput | ResponderUnitOrderByWithAggregationInput[]
    by: ResponderUnitScalarFieldEnum[] | ResponderUnitScalarFieldEnum
    having?: ResponderUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponderUnitCountAggregateInputType | true
    _avg?: ResponderUnitAvgAggregateInputType
    _sum?: ResponderUnitSumAggregateInputType
    _min?: ResponderUnitMinAggregateInputType
    _max?: ResponderUnitMaxAggregateInputType
  }

  export type ResponderUnitGroupByOutputType = {
    id: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status: string
    type: string
    activeIncidentId: string | null
    geoZoneId: string | null
    _count: ResponderUnitCountAggregateOutputType | null
    _avg: ResponderUnitAvgAggregateOutputType | null
    _sum: ResponderUnitSumAggregateOutputType | null
    _min: ResponderUnitMinAggregateOutputType | null
    _max: ResponderUnitMaxAggregateOutputType | null
  }

  type GetResponderUnitGroupByPayload<T extends ResponderUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponderUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponderUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponderUnitGroupByOutputType[P]>
            : GetScalarType<T[P], ResponderUnitGroupByOutputType[P]>
        }
      >
    >


  export type ResponderUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location_lat?: boolean
    location_lon?: boolean
    zone?: boolean
    status?: boolean
    type?: boolean
    activeIncidentId?: boolean
    geoZoneId?: boolean
    capabilities?: boolean | ResponderUnit$capabilitiesArgs<ExtArgs>
    dispatchRoutes?: boolean | ResponderUnit$dispatchRoutesArgs<ExtArgs>
    geoZone?: boolean | ResponderUnit$geoZoneArgs<ExtArgs>
    _count?: boolean | ResponderUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responderUnit"]>



  export type ResponderUnitSelectScalar = {
    id?: boolean
    name?: boolean
    location_lat?: boolean
    location_lon?: boolean
    zone?: boolean
    status?: boolean
    type?: boolean
    activeIncidentId?: boolean
    geoZoneId?: boolean
  }

  export type ResponderUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location_lat" | "location_lon" | "zone" | "status" | "type" | "activeIncidentId" | "geoZoneId", ExtArgs["result"]["responderUnit"]>
  export type ResponderUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capabilities?: boolean | ResponderUnit$capabilitiesArgs<ExtArgs>
    dispatchRoutes?: boolean | ResponderUnit$dispatchRoutesArgs<ExtArgs>
    geoZone?: boolean | ResponderUnit$geoZoneArgs<ExtArgs>
    _count?: boolean | ResponderUnitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ResponderUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResponderUnit"
    objects: {
      capabilities: Prisma.$CapabilityPayload<ExtArgs>[]
      dispatchRoutes: Prisma.$DispatchRoutePayload<ExtArgs>[]
      geoZone: Prisma.$GeoZonePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location_lat: number
      location_lon: number
      zone: string
      status: string
      type: string
      activeIncidentId: string | null
      geoZoneId: string | null
    }, ExtArgs["result"]["responderUnit"]>
    composites: {}
  }

  type ResponderUnitGetPayload<S extends boolean | null | undefined | ResponderUnitDefaultArgs> = $Result.GetResult<Prisma.$ResponderUnitPayload, S>

  type ResponderUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResponderUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponderUnitCountAggregateInputType | true
    }

  export interface ResponderUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResponderUnit'], meta: { name: 'ResponderUnit' } }
    /**
     * Find zero or one ResponderUnit that matches the filter.
     * @param {ResponderUnitFindUniqueArgs} args - Arguments to find a ResponderUnit
     * @example
     * // Get one ResponderUnit
     * const responderUnit = await prisma.responderUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponderUnitFindUniqueArgs>(args: SelectSubset<T, ResponderUnitFindUniqueArgs<ExtArgs>>): Prisma__ResponderUnitClient<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResponderUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponderUnitFindUniqueOrThrowArgs} args - Arguments to find a ResponderUnit
     * @example
     * // Get one ResponderUnit
     * const responderUnit = await prisma.responderUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponderUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponderUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponderUnitClient<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResponderUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderUnitFindFirstArgs} args - Arguments to find a ResponderUnit
     * @example
     * // Get one ResponderUnit
     * const responderUnit = await prisma.responderUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponderUnitFindFirstArgs>(args?: SelectSubset<T, ResponderUnitFindFirstArgs<ExtArgs>>): Prisma__ResponderUnitClient<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResponderUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderUnitFindFirstOrThrowArgs} args - Arguments to find a ResponderUnit
     * @example
     * // Get one ResponderUnit
     * const responderUnit = await prisma.responderUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponderUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponderUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponderUnitClient<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResponderUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResponderUnits
     * const responderUnits = await prisma.responderUnit.findMany()
     * 
     * // Get first 10 ResponderUnits
     * const responderUnits = await prisma.responderUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responderUnitWithIdOnly = await prisma.responderUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponderUnitFindManyArgs>(args?: SelectSubset<T, ResponderUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResponderUnit.
     * @param {ResponderUnitCreateArgs} args - Arguments to create a ResponderUnit.
     * @example
     * // Create one ResponderUnit
     * const ResponderUnit = await prisma.responderUnit.create({
     *   data: {
     *     // ... data to create a ResponderUnit
     *   }
     * })
     * 
     */
    create<T extends ResponderUnitCreateArgs>(args: SelectSubset<T, ResponderUnitCreateArgs<ExtArgs>>): Prisma__ResponderUnitClient<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResponderUnits.
     * @param {ResponderUnitCreateManyArgs} args - Arguments to create many ResponderUnits.
     * @example
     * // Create many ResponderUnits
     * const responderUnit = await prisma.responderUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponderUnitCreateManyArgs>(args?: SelectSubset<T, ResponderUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResponderUnit.
     * @param {ResponderUnitDeleteArgs} args - Arguments to delete one ResponderUnit.
     * @example
     * // Delete one ResponderUnit
     * const ResponderUnit = await prisma.responderUnit.delete({
     *   where: {
     *     // ... filter to delete one ResponderUnit
     *   }
     * })
     * 
     */
    delete<T extends ResponderUnitDeleteArgs>(args: SelectSubset<T, ResponderUnitDeleteArgs<ExtArgs>>): Prisma__ResponderUnitClient<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResponderUnit.
     * @param {ResponderUnitUpdateArgs} args - Arguments to update one ResponderUnit.
     * @example
     * // Update one ResponderUnit
     * const responderUnit = await prisma.responderUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponderUnitUpdateArgs>(args: SelectSubset<T, ResponderUnitUpdateArgs<ExtArgs>>): Prisma__ResponderUnitClient<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResponderUnits.
     * @param {ResponderUnitDeleteManyArgs} args - Arguments to filter ResponderUnits to delete.
     * @example
     * // Delete a few ResponderUnits
     * const { count } = await prisma.responderUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponderUnitDeleteManyArgs>(args?: SelectSubset<T, ResponderUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResponderUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResponderUnits
     * const responderUnit = await prisma.responderUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponderUnitUpdateManyArgs>(args: SelectSubset<T, ResponderUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResponderUnit.
     * @param {ResponderUnitUpsertArgs} args - Arguments to update or create a ResponderUnit.
     * @example
     * // Update or create a ResponderUnit
     * const responderUnit = await prisma.responderUnit.upsert({
     *   create: {
     *     // ... data to create a ResponderUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResponderUnit we want to update
     *   }
     * })
     */
    upsert<T extends ResponderUnitUpsertArgs>(args: SelectSubset<T, ResponderUnitUpsertArgs<ExtArgs>>): Prisma__ResponderUnitClient<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResponderUnits that matches the filter.
     * @param {ResponderUnitFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const responderUnit = await prisma.responderUnit.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ResponderUnitFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ResponderUnit.
     * @param {ResponderUnitAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const responderUnit = await prisma.responderUnit.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ResponderUnitAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ResponderUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderUnitCountArgs} args - Arguments to filter ResponderUnits to count.
     * @example
     * // Count the number of ResponderUnits
     * const count = await prisma.responderUnit.count({
     *   where: {
     *     // ... the filter for the ResponderUnits we want to count
     *   }
     * })
    **/
    count<T extends ResponderUnitCountArgs>(
      args?: Subset<T, ResponderUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponderUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResponderUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponderUnitAggregateArgs>(args: Subset<T, ResponderUnitAggregateArgs>): Prisma.PrismaPromise<GetResponderUnitAggregateType<T>>

    /**
     * Group by ResponderUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderUnitGroupByArgs} args - Group by arguments.
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
      T extends ResponderUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponderUnitGroupByArgs['orderBy'] }
        : { orderBy?: ResponderUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResponderUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponderUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResponderUnit model
   */
  readonly fields: ResponderUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResponderUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponderUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    capabilities<T extends ResponderUnit$capabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, ResponderUnit$capabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dispatchRoutes<T extends ResponderUnit$dispatchRoutesArgs<ExtArgs> = {}>(args?: Subset<T, ResponderUnit$dispatchRoutesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    geoZone<T extends ResponderUnit$geoZoneArgs<ExtArgs> = {}>(args?: Subset<T, ResponderUnit$geoZoneArgs<ExtArgs>>): Prisma__GeoZoneClient<$Result.GetResult<Prisma.$GeoZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResponderUnit model
   */
  interface ResponderUnitFieldRefs {
    readonly id: FieldRef<"ResponderUnit", 'String'>
    readonly name: FieldRef<"ResponderUnit", 'String'>
    readonly location_lat: FieldRef<"ResponderUnit", 'Float'>
    readonly location_lon: FieldRef<"ResponderUnit", 'Float'>
    readonly zone: FieldRef<"ResponderUnit", 'String'>
    readonly status: FieldRef<"ResponderUnit", 'String'>
    readonly type: FieldRef<"ResponderUnit", 'String'>
    readonly activeIncidentId: FieldRef<"ResponderUnit", 'String'>
    readonly geoZoneId: FieldRef<"ResponderUnit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResponderUnit findUnique
   */
  export type ResponderUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
    /**
     * Filter, which ResponderUnit to fetch.
     */
    where: ResponderUnitWhereUniqueInput
  }

  /**
   * ResponderUnit findUniqueOrThrow
   */
  export type ResponderUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
    /**
     * Filter, which ResponderUnit to fetch.
     */
    where: ResponderUnitWhereUniqueInput
  }

  /**
   * ResponderUnit findFirst
   */
  export type ResponderUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
    /**
     * Filter, which ResponderUnit to fetch.
     */
    where?: ResponderUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponderUnits to fetch.
     */
    orderBy?: ResponderUnitOrderByWithRelationInput | ResponderUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResponderUnits.
     */
    cursor?: ResponderUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponderUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponderUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResponderUnits.
     */
    distinct?: ResponderUnitScalarFieldEnum | ResponderUnitScalarFieldEnum[]
  }

  /**
   * ResponderUnit findFirstOrThrow
   */
  export type ResponderUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
    /**
     * Filter, which ResponderUnit to fetch.
     */
    where?: ResponderUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponderUnits to fetch.
     */
    orderBy?: ResponderUnitOrderByWithRelationInput | ResponderUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResponderUnits.
     */
    cursor?: ResponderUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponderUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponderUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResponderUnits.
     */
    distinct?: ResponderUnitScalarFieldEnum | ResponderUnitScalarFieldEnum[]
  }

  /**
   * ResponderUnit findMany
   */
  export type ResponderUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
    /**
     * Filter, which ResponderUnits to fetch.
     */
    where?: ResponderUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponderUnits to fetch.
     */
    orderBy?: ResponderUnitOrderByWithRelationInput | ResponderUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResponderUnits.
     */
    cursor?: ResponderUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponderUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponderUnits.
     */
    skip?: number
    distinct?: ResponderUnitScalarFieldEnum | ResponderUnitScalarFieldEnum[]
  }

  /**
   * ResponderUnit create
   */
  export type ResponderUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a ResponderUnit.
     */
    data: XOR<ResponderUnitCreateInput, ResponderUnitUncheckedCreateInput>
  }

  /**
   * ResponderUnit createMany
   */
  export type ResponderUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResponderUnits.
     */
    data: ResponderUnitCreateManyInput | ResponderUnitCreateManyInput[]
  }

  /**
   * ResponderUnit update
   */
  export type ResponderUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a ResponderUnit.
     */
    data: XOR<ResponderUnitUpdateInput, ResponderUnitUncheckedUpdateInput>
    /**
     * Choose, which ResponderUnit to update.
     */
    where: ResponderUnitWhereUniqueInput
  }

  /**
   * ResponderUnit updateMany
   */
  export type ResponderUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResponderUnits.
     */
    data: XOR<ResponderUnitUpdateManyMutationInput, ResponderUnitUncheckedUpdateManyInput>
    /**
     * Filter which ResponderUnits to update
     */
    where?: ResponderUnitWhereInput
    /**
     * Limit how many ResponderUnits to update.
     */
    limit?: number
  }

  /**
   * ResponderUnit upsert
   */
  export type ResponderUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the ResponderUnit to update in case it exists.
     */
    where: ResponderUnitWhereUniqueInput
    /**
     * In case the ResponderUnit found by the `where` argument doesn't exist, create a new ResponderUnit with this data.
     */
    create: XOR<ResponderUnitCreateInput, ResponderUnitUncheckedCreateInput>
    /**
     * In case the ResponderUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponderUnitUpdateInput, ResponderUnitUncheckedUpdateInput>
  }

  /**
   * ResponderUnit delete
   */
  export type ResponderUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
    /**
     * Filter which ResponderUnit to delete.
     */
    where: ResponderUnitWhereUniqueInput
  }

  /**
   * ResponderUnit deleteMany
   */
  export type ResponderUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResponderUnits to delete
     */
    where?: ResponderUnitWhereInput
    /**
     * Limit how many ResponderUnits to delete.
     */
    limit?: number
  }

  /**
   * ResponderUnit findRaw
   */
  export type ResponderUnitFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ResponderUnit aggregateRaw
   */
  export type ResponderUnitAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ResponderUnit.capabilities
   */
  export type ResponderUnit$capabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
    where?: CapabilityWhereInput
    orderBy?: CapabilityOrderByWithRelationInput | CapabilityOrderByWithRelationInput[]
    cursor?: CapabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapabilityScalarFieldEnum | CapabilityScalarFieldEnum[]
  }

  /**
   * ResponderUnit.dispatchRoutes
   */
  export type ResponderUnit$dispatchRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
    where?: DispatchRouteWhereInput
    orderBy?: DispatchRouteOrderByWithRelationInput | DispatchRouteOrderByWithRelationInput[]
    cursor?: DispatchRouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DispatchRouteScalarFieldEnum | DispatchRouteScalarFieldEnum[]
  }

  /**
   * ResponderUnit.geoZone
   */
  export type ResponderUnit$geoZoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
    where?: GeoZoneWhereInput
  }

  /**
   * ResponderUnit without action
   */
  export type ResponderUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
  }


  /**
   * Model DispatchRoute
   */

  export type AggregateDispatchRoute = {
    _count: DispatchRouteCountAggregateOutputType | null
    _avg: DispatchRouteAvgAggregateOutputType | null
    _sum: DispatchRouteSumAggregateOutputType | null
    _min: DispatchRouteMinAggregateOutputType | null
    _max: DispatchRouteMaxAggregateOutputType | null
  }

  export type DispatchRouteAvgAggregateOutputType = {
    destLat: number | null
    destLon: number | null
    distance: number | null
    eta: number | null
  }

  export type DispatchRouteSumAggregateOutputType = {
    destLat: number | null
    destLon: number | null
    distance: number | null
    eta: number | null
  }

  export type DispatchRouteMinAggregateOutputType = {
    id: string | null
    responderUnitId: string | null
    destLat: number | null
    destLon: number | null
    distance: number | null
    eta: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DispatchRouteMaxAggregateOutputType = {
    id: string | null
    responderUnitId: string | null
    destLat: number | null
    destLon: number | null
    distance: number | null
    eta: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DispatchRouteCountAggregateOutputType = {
    id: number
    responderUnitId: number
    destLat: number
    destLon: number
    distance: number
    eta: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DispatchRouteAvgAggregateInputType = {
    destLat?: true
    destLon?: true
    distance?: true
    eta?: true
  }

  export type DispatchRouteSumAggregateInputType = {
    destLat?: true
    destLon?: true
    distance?: true
    eta?: true
  }

  export type DispatchRouteMinAggregateInputType = {
    id?: true
    responderUnitId?: true
    destLat?: true
    destLon?: true
    distance?: true
    eta?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DispatchRouteMaxAggregateInputType = {
    id?: true
    responderUnitId?: true
    destLat?: true
    destLon?: true
    distance?: true
    eta?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DispatchRouteCountAggregateInputType = {
    id?: true
    responderUnitId?: true
    destLat?: true
    destLon?: true
    distance?: true
    eta?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DispatchRouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DispatchRoute to aggregate.
     */
    where?: DispatchRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispatchRoutes to fetch.
     */
    orderBy?: DispatchRouteOrderByWithRelationInput | DispatchRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispatchRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispatchRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispatchRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DispatchRoutes
    **/
    _count?: true | DispatchRouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DispatchRouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DispatchRouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispatchRouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispatchRouteMaxAggregateInputType
  }

  export type GetDispatchRouteAggregateType<T extends DispatchRouteAggregateArgs> = {
        [P in keyof T & keyof AggregateDispatchRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispatchRoute[P]>
      : GetScalarType<T[P], AggregateDispatchRoute[P]>
  }




  export type DispatchRouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispatchRouteWhereInput
    orderBy?: DispatchRouteOrderByWithAggregationInput | DispatchRouteOrderByWithAggregationInput[]
    by: DispatchRouteScalarFieldEnum[] | DispatchRouteScalarFieldEnum
    having?: DispatchRouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispatchRouteCountAggregateInputType | true
    _avg?: DispatchRouteAvgAggregateInputType
    _sum?: DispatchRouteSumAggregateInputType
    _min?: DispatchRouteMinAggregateInputType
    _max?: DispatchRouteMaxAggregateInputType
  }

  export type DispatchRouteGroupByOutputType = {
    id: string
    responderUnitId: string
    destLat: number
    destLon: number
    distance: number
    eta: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: DispatchRouteCountAggregateOutputType | null
    _avg: DispatchRouteAvgAggregateOutputType | null
    _sum: DispatchRouteSumAggregateOutputType | null
    _min: DispatchRouteMinAggregateOutputType | null
    _max: DispatchRouteMaxAggregateOutputType | null
  }

  type GetDispatchRouteGroupByPayload<T extends DispatchRouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispatchRouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispatchRouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispatchRouteGroupByOutputType[P]>
            : GetScalarType<T[P], DispatchRouteGroupByOutputType[P]>
        }
      >
    >


  export type DispatchRouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responderUnitId?: boolean
    destLat?: boolean
    destLon?: boolean
    distance?: boolean
    eta?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    responderUnit?: boolean | ResponderUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dispatchRoute"]>



  export type DispatchRouteSelectScalar = {
    id?: boolean
    responderUnitId?: boolean
    destLat?: boolean
    destLon?: boolean
    distance?: boolean
    eta?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DispatchRouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "responderUnitId" | "destLat" | "destLon" | "distance" | "eta" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["dispatchRoute"]>
  export type DispatchRouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responderUnit?: boolean | ResponderUnitDefaultArgs<ExtArgs>
  }

  export type $DispatchRoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DispatchRoute"
    objects: {
      responderUnit: Prisma.$ResponderUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      responderUnitId: string
      destLat: number
      destLon: number
      distance: number
      eta: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dispatchRoute"]>
    composites: {}
  }

  type DispatchRouteGetPayload<S extends boolean | null | undefined | DispatchRouteDefaultArgs> = $Result.GetResult<Prisma.$DispatchRoutePayload, S>

  type DispatchRouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DispatchRouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DispatchRouteCountAggregateInputType | true
    }

  export interface DispatchRouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DispatchRoute'], meta: { name: 'DispatchRoute' } }
    /**
     * Find zero or one DispatchRoute that matches the filter.
     * @param {DispatchRouteFindUniqueArgs} args - Arguments to find a DispatchRoute
     * @example
     * // Get one DispatchRoute
     * const dispatchRoute = await prisma.dispatchRoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DispatchRouteFindUniqueArgs>(args: SelectSubset<T, DispatchRouteFindUniqueArgs<ExtArgs>>): Prisma__DispatchRouteClient<$Result.GetResult<Prisma.$DispatchRoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DispatchRoute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DispatchRouteFindUniqueOrThrowArgs} args - Arguments to find a DispatchRoute
     * @example
     * // Get one DispatchRoute
     * const dispatchRoute = await prisma.dispatchRoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DispatchRouteFindUniqueOrThrowArgs>(args: SelectSubset<T, DispatchRouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DispatchRouteClient<$Result.GetResult<Prisma.$DispatchRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DispatchRoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchRouteFindFirstArgs} args - Arguments to find a DispatchRoute
     * @example
     * // Get one DispatchRoute
     * const dispatchRoute = await prisma.dispatchRoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DispatchRouteFindFirstArgs>(args?: SelectSubset<T, DispatchRouteFindFirstArgs<ExtArgs>>): Prisma__DispatchRouteClient<$Result.GetResult<Prisma.$DispatchRoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DispatchRoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchRouteFindFirstOrThrowArgs} args - Arguments to find a DispatchRoute
     * @example
     * // Get one DispatchRoute
     * const dispatchRoute = await prisma.dispatchRoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DispatchRouteFindFirstOrThrowArgs>(args?: SelectSubset<T, DispatchRouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DispatchRouteClient<$Result.GetResult<Prisma.$DispatchRoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DispatchRoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchRouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DispatchRoutes
     * const dispatchRoutes = await prisma.dispatchRoute.findMany()
     * 
     * // Get first 10 DispatchRoutes
     * const dispatchRoutes = await prisma.dispatchRoute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispatchRouteWithIdOnly = await prisma.dispatchRoute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DispatchRouteFindManyArgs>(args?: SelectSubset<T, DispatchRouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DispatchRoute.
     * @param {DispatchRouteCreateArgs} args - Arguments to create a DispatchRoute.
     * @example
     * // Create one DispatchRoute
     * const DispatchRoute = await prisma.dispatchRoute.create({
     *   data: {
     *     // ... data to create a DispatchRoute
     *   }
     * })
     * 
     */
    create<T extends DispatchRouteCreateArgs>(args: SelectSubset<T, DispatchRouteCreateArgs<ExtArgs>>): Prisma__DispatchRouteClient<$Result.GetResult<Prisma.$DispatchRoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DispatchRoutes.
     * @param {DispatchRouteCreateManyArgs} args - Arguments to create many DispatchRoutes.
     * @example
     * // Create many DispatchRoutes
     * const dispatchRoute = await prisma.dispatchRoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DispatchRouteCreateManyArgs>(args?: SelectSubset<T, DispatchRouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DispatchRoute.
     * @param {DispatchRouteDeleteArgs} args - Arguments to delete one DispatchRoute.
     * @example
     * // Delete one DispatchRoute
     * const DispatchRoute = await prisma.dispatchRoute.delete({
     *   where: {
     *     // ... filter to delete one DispatchRoute
     *   }
     * })
     * 
     */
    delete<T extends DispatchRouteDeleteArgs>(args: SelectSubset<T, DispatchRouteDeleteArgs<ExtArgs>>): Prisma__DispatchRouteClient<$Result.GetResult<Prisma.$DispatchRoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DispatchRoute.
     * @param {DispatchRouteUpdateArgs} args - Arguments to update one DispatchRoute.
     * @example
     * // Update one DispatchRoute
     * const dispatchRoute = await prisma.dispatchRoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DispatchRouteUpdateArgs>(args: SelectSubset<T, DispatchRouteUpdateArgs<ExtArgs>>): Prisma__DispatchRouteClient<$Result.GetResult<Prisma.$DispatchRoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DispatchRoutes.
     * @param {DispatchRouteDeleteManyArgs} args - Arguments to filter DispatchRoutes to delete.
     * @example
     * // Delete a few DispatchRoutes
     * const { count } = await prisma.dispatchRoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DispatchRouteDeleteManyArgs>(args?: SelectSubset<T, DispatchRouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DispatchRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchRouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DispatchRoutes
     * const dispatchRoute = await prisma.dispatchRoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DispatchRouteUpdateManyArgs>(args: SelectSubset<T, DispatchRouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DispatchRoute.
     * @param {DispatchRouteUpsertArgs} args - Arguments to update or create a DispatchRoute.
     * @example
     * // Update or create a DispatchRoute
     * const dispatchRoute = await prisma.dispatchRoute.upsert({
     *   create: {
     *     // ... data to create a DispatchRoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DispatchRoute we want to update
     *   }
     * })
     */
    upsert<T extends DispatchRouteUpsertArgs>(args: SelectSubset<T, DispatchRouteUpsertArgs<ExtArgs>>): Prisma__DispatchRouteClient<$Result.GetResult<Prisma.$DispatchRoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DispatchRoutes that matches the filter.
     * @param {DispatchRouteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const dispatchRoute = await prisma.dispatchRoute.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DispatchRouteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DispatchRoute.
     * @param {DispatchRouteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const dispatchRoute = await prisma.dispatchRoute.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DispatchRouteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DispatchRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchRouteCountArgs} args - Arguments to filter DispatchRoutes to count.
     * @example
     * // Count the number of DispatchRoutes
     * const count = await prisma.dispatchRoute.count({
     *   where: {
     *     // ... the filter for the DispatchRoutes we want to count
     *   }
     * })
    **/
    count<T extends DispatchRouteCountArgs>(
      args?: Subset<T, DispatchRouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispatchRouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DispatchRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchRouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DispatchRouteAggregateArgs>(args: Subset<T, DispatchRouteAggregateArgs>): Prisma.PrismaPromise<GetDispatchRouteAggregateType<T>>

    /**
     * Group by DispatchRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchRouteGroupByArgs} args - Group by arguments.
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
      T extends DispatchRouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispatchRouteGroupByArgs['orderBy'] }
        : { orderBy?: DispatchRouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DispatchRouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispatchRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DispatchRoute model
   */
  readonly fields: DispatchRouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DispatchRoute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispatchRouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responderUnit<T extends ResponderUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResponderUnitDefaultArgs<ExtArgs>>): Prisma__ResponderUnitClient<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DispatchRoute model
   */
  interface DispatchRouteFieldRefs {
    readonly id: FieldRef<"DispatchRoute", 'String'>
    readonly responderUnitId: FieldRef<"DispatchRoute", 'String'>
    readonly destLat: FieldRef<"DispatchRoute", 'Float'>
    readonly destLon: FieldRef<"DispatchRoute", 'Float'>
    readonly distance: FieldRef<"DispatchRoute", 'Float'>
    readonly eta: FieldRef<"DispatchRoute", 'Int'>
    readonly status: FieldRef<"DispatchRoute", 'String'>
    readonly createdAt: FieldRef<"DispatchRoute", 'DateTime'>
    readonly updatedAt: FieldRef<"DispatchRoute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DispatchRoute findUnique
   */
  export type DispatchRouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
    /**
     * Filter, which DispatchRoute to fetch.
     */
    where: DispatchRouteWhereUniqueInput
  }

  /**
   * DispatchRoute findUniqueOrThrow
   */
  export type DispatchRouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
    /**
     * Filter, which DispatchRoute to fetch.
     */
    where: DispatchRouteWhereUniqueInput
  }

  /**
   * DispatchRoute findFirst
   */
  export type DispatchRouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
    /**
     * Filter, which DispatchRoute to fetch.
     */
    where?: DispatchRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispatchRoutes to fetch.
     */
    orderBy?: DispatchRouteOrderByWithRelationInput | DispatchRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DispatchRoutes.
     */
    cursor?: DispatchRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispatchRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispatchRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DispatchRoutes.
     */
    distinct?: DispatchRouteScalarFieldEnum | DispatchRouteScalarFieldEnum[]
  }

  /**
   * DispatchRoute findFirstOrThrow
   */
  export type DispatchRouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
    /**
     * Filter, which DispatchRoute to fetch.
     */
    where?: DispatchRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispatchRoutes to fetch.
     */
    orderBy?: DispatchRouteOrderByWithRelationInput | DispatchRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DispatchRoutes.
     */
    cursor?: DispatchRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispatchRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispatchRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DispatchRoutes.
     */
    distinct?: DispatchRouteScalarFieldEnum | DispatchRouteScalarFieldEnum[]
  }

  /**
   * DispatchRoute findMany
   */
  export type DispatchRouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
    /**
     * Filter, which DispatchRoutes to fetch.
     */
    where?: DispatchRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispatchRoutes to fetch.
     */
    orderBy?: DispatchRouteOrderByWithRelationInput | DispatchRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DispatchRoutes.
     */
    cursor?: DispatchRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispatchRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispatchRoutes.
     */
    skip?: number
    distinct?: DispatchRouteScalarFieldEnum | DispatchRouteScalarFieldEnum[]
  }

  /**
   * DispatchRoute create
   */
  export type DispatchRouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
    /**
     * The data needed to create a DispatchRoute.
     */
    data: XOR<DispatchRouteCreateInput, DispatchRouteUncheckedCreateInput>
  }

  /**
   * DispatchRoute createMany
   */
  export type DispatchRouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DispatchRoutes.
     */
    data: DispatchRouteCreateManyInput | DispatchRouteCreateManyInput[]
  }

  /**
   * DispatchRoute update
   */
  export type DispatchRouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
    /**
     * The data needed to update a DispatchRoute.
     */
    data: XOR<DispatchRouteUpdateInput, DispatchRouteUncheckedUpdateInput>
    /**
     * Choose, which DispatchRoute to update.
     */
    where: DispatchRouteWhereUniqueInput
  }

  /**
   * DispatchRoute updateMany
   */
  export type DispatchRouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DispatchRoutes.
     */
    data: XOR<DispatchRouteUpdateManyMutationInput, DispatchRouteUncheckedUpdateManyInput>
    /**
     * Filter which DispatchRoutes to update
     */
    where?: DispatchRouteWhereInput
    /**
     * Limit how many DispatchRoutes to update.
     */
    limit?: number
  }

  /**
   * DispatchRoute upsert
   */
  export type DispatchRouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
    /**
     * The filter to search for the DispatchRoute to update in case it exists.
     */
    where: DispatchRouteWhereUniqueInput
    /**
     * In case the DispatchRoute found by the `where` argument doesn't exist, create a new DispatchRoute with this data.
     */
    create: XOR<DispatchRouteCreateInput, DispatchRouteUncheckedCreateInput>
    /**
     * In case the DispatchRoute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispatchRouteUpdateInput, DispatchRouteUncheckedUpdateInput>
  }

  /**
   * DispatchRoute delete
   */
  export type DispatchRouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
    /**
     * Filter which DispatchRoute to delete.
     */
    where: DispatchRouteWhereUniqueInput
  }

  /**
   * DispatchRoute deleteMany
   */
  export type DispatchRouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DispatchRoutes to delete
     */
    where?: DispatchRouteWhereInput
    /**
     * Limit how many DispatchRoutes to delete.
     */
    limit?: number
  }

  /**
   * DispatchRoute findRaw
   */
  export type DispatchRouteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DispatchRoute aggregateRaw
   */
  export type DispatchRouteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DispatchRoute without action
   */
  export type DispatchRouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchRoute
     */
    select?: DispatchRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchRoute
     */
    omit?: DispatchRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DispatchRouteInclude<ExtArgs> | null
  }


  /**
   * Model Capability
   */

  export type AggregateCapability = {
    _count: CapabilityCountAggregateOutputType | null
    _min: CapabilityMinAggregateOutputType | null
    _max: CapabilityMaxAggregateOutputType | null
  }

  export type CapabilityMinAggregateOutputType = {
    id: string | null
    name: string | null
    responderUnitId: string | null
  }

  export type CapabilityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    responderUnitId: string | null
  }

  export type CapabilityCountAggregateOutputType = {
    id: number
    name: number
    responderUnitId: number
    _all: number
  }


  export type CapabilityMinAggregateInputType = {
    id?: true
    name?: true
    responderUnitId?: true
  }

  export type CapabilityMaxAggregateInputType = {
    id?: true
    name?: true
    responderUnitId?: true
  }

  export type CapabilityCountAggregateInputType = {
    id?: true
    name?: true
    responderUnitId?: true
    _all?: true
  }

  export type CapabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capability to aggregate.
     */
    where?: CapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capabilities to fetch.
     */
    orderBy?: CapabilityOrderByWithRelationInput | CapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Capabilities
    **/
    _count?: true | CapabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapabilityMaxAggregateInputType
  }

  export type GetCapabilityAggregateType<T extends CapabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateCapability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapability[P]>
      : GetScalarType<T[P], AggregateCapability[P]>
  }




  export type CapabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapabilityWhereInput
    orderBy?: CapabilityOrderByWithAggregationInput | CapabilityOrderByWithAggregationInput[]
    by: CapabilityScalarFieldEnum[] | CapabilityScalarFieldEnum
    having?: CapabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapabilityCountAggregateInputType | true
    _min?: CapabilityMinAggregateInputType
    _max?: CapabilityMaxAggregateInputType
  }

  export type CapabilityGroupByOutputType = {
    id: string
    name: string
    responderUnitId: string
    _count: CapabilityCountAggregateOutputType | null
    _min: CapabilityMinAggregateOutputType | null
    _max: CapabilityMaxAggregateOutputType | null
  }

  type GetCapabilityGroupByPayload<T extends CapabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapabilityGroupByOutputType[P]>
            : GetScalarType<T[P], CapabilityGroupByOutputType[P]>
        }
      >
    >


  export type CapabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    responderUnitId?: boolean
    responderUnit?: boolean | ResponderUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capability"]>



  export type CapabilitySelectScalar = {
    id?: boolean
    name?: boolean
    responderUnitId?: boolean
  }

  export type CapabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "responderUnitId", ExtArgs["result"]["capability"]>
  export type CapabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responderUnit?: boolean | ResponderUnitDefaultArgs<ExtArgs>
  }

  export type $CapabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Capability"
    objects: {
      responderUnit: Prisma.$ResponderUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      responderUnitId: string
    }, ExtArgs["result"]["capability"]>
    composites: {}
  }

  type CapabilityGetPayload<S extends boolean | null | undefined | CapabilityDefaultArgs> = $Result.GetResult<Prisma.$CapabilityPayload, S>

  type CapabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CapabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CapabilityCountAggregateInputType | true
    }

  export interface CapabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Capability'], meta: { name: 'Capability' } }
    /**
     * Find zero or one Capability that matches the filter.
     * @param {CapabilityFindUniqueArgs} args - Arguments to find a Capability
     * @example
     * // Get one Capability
     * const capability = await prisma.capability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CapabilityFindUniqueArgs>(args: SelectSubset<T, CapabilityFindUniqueArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Capability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CapabilityFindUniqueOrThrowArgs} args - Arguments to find a Capability
     * @example
     * // Get one Capability
     * const capability = await prisma.capability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CapabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, CapabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Capability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityFindFirstArgs} args - Arguments to find a Capability
     * @example
     * // Get one Capability
     * const capability = await prisma.capability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CapabilityFindFirstArgs>(args?: SelectSubset<T, CapabilityFindFirstArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Capability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityFindFirstOrThrowArgs} args - Arguments to find a Capability
     * @example
     * // Get one Capability
     * const capability = await prisma.capability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CapabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, CapabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Capabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Capabilities
     * const capabilities = await prisma.capability.findMany()
     * 
     * // Get first 10 Capabilities
     * const capabilities = await prisma.capability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const capabilityWithIdOnly = await prisma.capability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CapabilityFindManyArgs>(args?: SelectSubset<T, CapabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Capability.
     * @param {CapabilityCreateArgs} args - Arguments to create a Capability.
     * @example
     * // Create one Capability
     * const Capability = await prisma.capability.create({
     *   data: {
     *     // ... data to create a Capability
     *   }
     * })
     * 
     */
    create<T extends CapabilityCreateArgs>(args: SelectSubset<T, CapabilityCreateArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Capabilities.
     * @param {CapabilityCreateManyArgs} args - Arguments to create many Capabilities.
     * @example
     * // Create many Capabilities
     * const capability = await prisma.capability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CapabilityCreateManyArgs>(args?: SelectSubset<T, CapabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Capability.
     * @param {CapabilityDeleteArgs} args - Arguments to delete one Capability.
     * @example
     * // Delete one Capability
     * const Capability = await prisma.capability.delete({
     *   where: {
     *     // ... filter to delete one Capability
     *   }
     * })
     * 
     */
    delete<T extends CapabilityDeleteArgs>(args: SelectSubset<T, CapabilityDeleteArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Capability.
     * @param {CapabilityUpdateArgs} args - Arguments to update one Capability.
     * @example
     * // Update one Capability
     * const capability = await prisma.capability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CapabilityUpdateArgs>(args: SelectSubset<T, CapabilityUpdateArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Capabilities.
     * @param {CapabilityDeleteManyArgs} args - Arguments to filter Capabilities to delete.
     * @example
     * // Delete a few Capabilities
     * const { count } = await prisma.capability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CapabilityDeleteManyArgs>(args?: SelectSubset<T, CapabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Capabilities
     * const capability = await prisma.capability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CapabilityUpdateManyArgs>(args: SelectSubset<T, CapabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Capability.
     * @param {CapabilityUpsertArgs} args - Arguments to update or create a Capability.
     * @example
     * // Update or create a Capability
     * const capability = await prisma.capability.upsert({
     *   create: {
     *     // ... data to create a Capability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Capability we want to update
     *   }
     * })
     */
    upsert<T extends CapabilityUpsertArgs>(args: SelectSubset<T, CapabilityUpsertArgs<ExtArgs>>): Prisma__CapabilityClient<$Result.GetResult<Prisma.$CapabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Capabilities that matches the filter.
     * @param {CapabilityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const capability = await prisma.capability.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CapabilityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Capability.
     * @param {CapabilityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const capability = await prisma.capability.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CapabilityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Capabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityCountArgs} args - Arguments to filter Capabilities to count.
     * @example
     * // Count the number of Capabilities
     * const count = await prisma.capability.count({
     *   where: {
     *     // ... the filter for the Capabilities we want to count
     *   }
     * })
    **/
    count<T extends CapabilityCountArgs>(
      args?: Subset<T, CapabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Capability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CapabilityAggregateArgs>(args: Subset<T, CapabilityAggregateArgs>): Prisma.PrismaPromise<GetCapabilityAggregateType<T>>

    /**
     * Group by Capability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapabilityGroupByArgs} args - Group by arguments.
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
      T extends CapabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapabilityGroupByArgs['orderBy'] }
        : { orderBy?: CapabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CapabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Capability model
   */
  readonly fields: CapabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Capability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responderUnit<T extends ResponderUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResponderUnitDefaultArgs<ExtArgs>>): Prisma__ResponderUnitClient<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Capability model
   */
  interface CapabilityFieldRefs {
    readonly id: FieldRef<"Capability", 'String'>
    readonly name: FieldRef<"Capability", 'String'>
    readonly responderUnitId: FieldRef<"Capability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Capability findUnique
   */
  export type CapabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
    /**
     * Filter, which Capability to fetch.
     */
    where: CapabilityWhereUniqueInput
  }

  /**
   * Capability findUniqueOrThrow
   */
  export type CapabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
    /**
     * Filter, which Capability to fetch.
     */
    where: CapabilityWhereUniqueInput
  }

  /**
   * Capability findFirst
   */
  export type CapabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
    /**
     * Filter, which Capability to fetch.
     */
    where?: CapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capabilities to fetch.
     */
    orderBy?: CapabilityOrderByWithRelationInput | CapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capabilities.
     */
    cursor?: CapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capabilities.
     */
    distinct?: CapabilityScalarFieldEnum | CapabilityScalarFieldEnum[]
  }

  /**
   * Capability findFirstOrThrow
   */
  export type CapabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
    /**
     * Filter, which Capability to fetch.
     */
    where?: CapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capabilities to fetch.
     */
    orderBy?: CapabilityOrderByWithRelationInput | CapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capabilities.
     */
    cursor?: CapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capabilities.
     */
    distinct?: CapabilityScalarFieldEnum | CapabilityScalarFieldEnum[]
  }

  /**
   * Capability findMany
   */
  export type CapabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
    /**
     * Filter, which Capabilities to fetch.
     */
    where?: CapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capabilities to fetch.
     */
    orderBy?: CapabilityOrderByWithRelationInput | CapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Capabilities.
     */
    cursor?: CapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capabilities.
     */
    skip?: number
    distinct?: CapabilityScalarFieldEnum | CapabilityScalarFieldEnum[]
  }

  /**
   * Capability create
   */
  export type CapabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Capability.
     */
    data: XOR<CapabilityCreateInput, CapabilityUncheckedCreateInput>
  }

  /**
   * Capability createMany
   */
  export type CapabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Capabilities.
     */
    data: CapabilityCreateManyInput | CapabilityCreateManyInput[]
  }

  /**
   * Capability update
   */
  export type CapabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Capability.
     */
    data: XOR<CapabilityUpdateInput, CapabilityUncheckedUpdateInput>
    /**
     * Choose, which Capability to update.
     */
    where: CapabilityWhereUniqueInput
  }

  /**
   * Capability updateMany
   */
  export type CapabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Capabilities.
     */
    data: XOR<CapabilityUpdateManyMutationInput, CapabilityUncheckedUpdateManyInput>
    /**
     * Filter which Capabilities to update
     */
    where?: CapabilityWhereInput
    /**
     * Limit how many Capabilities to update.
     */
    limit?: number
  }

  /**
   * Capability upsert
   */
  export type CapabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Capability to update in case it exists.
     */
    where: CapabilityWhereUniqueInput
    /**
     * In case the Capability found by the `where` argument doesn't exist, create a new Capability with this data.
     */
    create: XOR<CapabilityCreateInput, CapabilityUncheckedCreateInput>
    /**
     * In case the Capability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapabilityUpdateInput, CapabilityUncheckedUpdateInput>
  }

  /**
   * Capability delete
   */
  export type CapabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
    /**
     * Filter which Capability to delete.
     */
    where: CapabilityWhereUniqueInput
  }

  /**
   * Capability deleteMany
   */
  export type CapabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capabilities to delete
     */
    where?: CapabilityWhereInput
    /**
     * Limit how many Capabilities to delete.
     */
    limit?: number
  }

  /**
   * Capability findRaw
   */
  export type CapabilityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Capability aggregateRaw
   */
  export type CapabilityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Capability without action
   */
  export type CapabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capability
     */
    select?: CapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Capability
     */
    omit?: CapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CapabilityInclude<ExtArgs> | null
  }


  /**
   * Model GeoRecommendation
   */

  export type AggregateGeoRecommendation = {
    _count: GeoRecommendationCountAggregateOutputType | null
    _avg: GeoRecommendationAvgAggregateOutputType | null
    _sum: GeoRecommendationSumAggregateOutputType | null
    _min: GeoRecommendationMinAggregateOutputType | null
    _max: GeoRecommendationMaxAggregateOutputType | null
  }

  export type GeoRecommendationAvgAggregateOutputType = {
    score: number | null
  }

  export type GeoRecommendationSumAggregateOutputType = {
    score: number | null
  }

  export type GeoRecommendationMinAggregateOutputType = {
    id: string | null
    score: number | null
    createdAt: Date | null
  }

  export type GeoRecommendationMaxAggregateOutputType = {
    id: string | null
    score: number | null
    createdAt: Date | null
  }

  export type GeoRecommendationCountAggregateOutputType = {
    id: number
    score: number
    createdAt: number
    _all: number
  }


  export type GeoRecommendationAvgAggregateInputType = {
    score?: true
  }

  export type GeoRecommendationSumAggregateInputType = {
    score?: true
  }

  export type GeoRecommendationMinAggregateInputType = {
    id?: true
    score?: true
    createdAt?: true
  }

  export type GeoRecommendationMaxAggregateInputType = {
    id?: true
    score?: true
    createdAt?: true
  }

  export type GeoRecommendationCountAggregateInputType = {
    id?: true
    score?: true
    createdAt?: true
    _all?: true
  }

  export type GeoRecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeoRecommendation to aggregate.
     */
    where?: GeoRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeoRecommendations to fetch.
     */
    orderBy?: GeoRecommendationOrderByWithRelationInput | GeoRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeoRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeoRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeoRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeoRecommendations
    **/
    _count?: true | GeoRecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeoRecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeoRecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeoRecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeoRecommendationMaxAggregateInputType
  }

  export type GetGeoRecommendationAggregateType<T extends GeoRecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateGeoRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeoRecommendation[P]>
      : GetScalarType<T[P], AggregateGeoRecommendation[P]>
  }




  export type GeoRecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeoRecommendationWhereInput
    orderBy?: GeoRecommendationOrderByWithAggregationInput | GeoRecommendationOrderByWithAggregationInput[]
    by: GeoRecommendationScalarFieldEnum[] | GeoRecommendationScalarFieldEnum
    having?: GeoRecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeoRecommendationCountAggregateInputType | true
    _avg?: GeoRecommendationAvgAggregateInputType
    _sum?: GeoRecommendationSumAggregateInputType
    _min?: GeoRecommendationMinAggregateInputType
    _max?: GeoRecommendationMaxAggregateInputType
  }

  export type GeoRecommendationGroupByOutputType = {
    id: string
    score: number
    createdAt: Date
    _count: GeoRecommendationCountAggregateOutputType | null
    _avg: GeoRecommendationAvgAggregateOutputType | null
    _sum: GeoRecommendationSumAggregateOutputType | null
    _min: GeoRecommendationMinAggregateOutputType | null
    _max: GeoRecommendationMaxAggregateOutputType | null
  }

  type GetGeoRecommendationGroupByPayload<T extends GeoRecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeoRecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeoRecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeoRecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], GeoRecommendationGroupByOutputType[P]>
        }
      >
    >


  export type GeoRecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["geoRecommendation"]>



  export type GeoRecommendationSelectScalar = {
    id?: boolean
    score?: boolean
    createdAt?: boolean
  }

  export type GeoRecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "createdAt", ExtArgs["result"]["geoRecommendation"]>

  export type $GeoRecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeoRecommendation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number
      createdAt: Date
    }, ExtArgs["result"]["geoRecommendation"]>
    composites: {}
  }

  type GeoRecommendationGetPayload<S extends boolean | null | undefined | GeoRecommendationDefaultArgs> = $Result.GetResult<Prisma.$GeoRecommendationPayload, S>

  type GeoRecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeoRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeoRecommendationCountAggregateInputType | true
    }

  export interface GeoRecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeoRecommendation'], meta: { name: 'GeoRecommendation' } }
    /**
     * Find zero or one GeoRecommendation that matches the filter.
     * @param {GeoRecommendationFindUniqueArgs} args - Arguments to find a GeoRecommendation
     * @example
     * // Get one GeoRecommendation
     * const geoRecommendation = await prisma.geoRecommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeoRecommendationFindUniqueArgs>(args: SelectSubset<T, GeoRecommendationFindUniqueArgs<ExtArgs>>): Prisma__GeoRecommendationClient<$Result.GetResult<Prisma.$GeoRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeoRecommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeoRecommendationFindUniqueOrThrowArgs} args - Arguments to find a GeoRecommendation
     * @example
     * // Get one GeoRecommendation
     * const geoRecommendation = await prisma.geoRecommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeoRecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, GeoRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeoRecommendationClient<$Result.GetResult<Prisma.$GeoRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeoRecommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoRecommendationFindFirstArgs} args - Arguments to find a GeoRecommendation
     * @example
     * // Get one GeoRecommendation
     * const geoRecommendation = await prisma.geoRecommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeoRecommendationFindFirstArgs>(args?: SelectSubset<T, GeoRecommendationFindFirstArgs<ExtArgs>>): Prisma__GeoRecommendationClient<$Result.GetResult<Prisma.$GeoRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeoRecommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoRecommendationFindFirstOrThrowArgs} args - Arguments to find a GeoRecommendation
     * @example
     * // Get one GeoRecommendation
     * const geoRecommendation = await prisma.geoRecommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeoRecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, GeoRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeoRecommendationClient<$Result.GetResult<Prisma.$GeoRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeoRecommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoRecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeoRecommendations
     * const geoRecommendations = await prisma.geoRecommendation.findMany()
     * 
     * // Get first 10 GeoRecommendations
     * const geoRecommendations = await prisma.geoRecommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const geoRecommendationWithIdOnly = await prisma.geoRecommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeoRecommendationFindManyArgs>(args?: SelectSubset<T, GeoRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeoRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeoRecommendation.
     * @param {GeoRecommendationCreateArgs} args - Arguments to create a GeoRecommendation.
     * @example
     * // Create one GeoRecommendation
     * const GeoRecommendation = await prisma.geoRecommendation.create({
     *   data: {
     *     // ... data to create a GeoRecommendation
     *   }
     * })
     * 
     */
    create<T extends GeoRecommendationCreateArgs>(args: SelectSubset<T, GeoRecommendationCreateArgs<ExtArgs>>): Prisma__GeoRecommendationClient<$Result.GetResult<Prisma.$GeoRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeoRecommendations.
     * @param {GeoRecommendationCreateManyArgs} args - Arguments to create many GeoRecommendations.
     * @example
     * // Create many GeoRecommendations
     * const geoRecommendation = await prisma.geoRecommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeoRecommendationCreateManyArgs>(args?: SelectSubset<T, GeoRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeoRecommendation.
     * @param {GeoRecommendationDeleteArgs} args - Arguments to delete one GeoRecommendation.
     * @example
     * // Delete one GeoRecommendation
     * const GeoRecommendation = await prisma.geoRecommendation.delete({
     *   where: {
     *     // ... filter to delete one GeoRecommendation
     *   }
     * })
     * 
     */
    delete<T extends GeoRecommendationDeleteArgs>(args: SelectSubset<T, GeoRecommendationDeleteArgs<ExtArgs>>): Prisma__GeoRecommendationClient<$Result.GetResult<Prisma.$GeoRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeoRecommendation.
     * @param {GeoRecommendationUpdateArgs} args - Arguments to update one GeoRecommendation.
     * @example
     * // Update one GeoRecommendation
     * const geoRecommendation = await prisma.geoRecommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeoRecommendationUpdateArgs>(args: SelectSubset<T, GeoRecommendationUpdateArgs<ExtArgs>>): Prisma__GeoRecommendationClient<$Result.GetResult<Prisma.$GeoRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeoRecommendations.
     * @param {GeoRecommendationDeleteManyArgs} args - Arguments to filter GeoRecommendations to delete.
     * @example
     * // Delete a few GeoRecommendations
     * const { count } = await prisma.geoRecommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeoRecommendationDeleteManyArgs>(args?: SelectSubset<T, GeoRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeoRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoRecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeoRecommendations
     * const geoRecommendation = await prisma.geoRecommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeoRecommendationUpdateManyArgs>(args: SelectSubset<T, GeoRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeoRecommendation.
     * @param {GeoRecommendationUpsertArgs} args - Arguments to update or create a GeoRecommendation.
     * @example
     * // Update or create a GeoRecommendation
     * const geoRecommendation = await prisma.geoRecommendation.upsert({
     *   create: {
     *     // ... data to create a GeoRecommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeoRecommendation we want to update
     *   }
     * })
     */
    upsert<T extends GeoRecommendationUpsertArgs>(args: SelectSubset<T, GeoRecommendationUpsertArgs<ExtArgs>>): Prisma__GeoRecommendationClient<$Result.GetResult<Prisma.$GeoRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeoRecommendations that matches the filter.
     * @param {GeoRecommendationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const geoRecommendation = await prisma.geoRecommendation.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GeoRecommendationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GeoRecommendation.
     * @param {GeoRecommendationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const geoRecommendation = await prisma.geoRecommendation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GeoRecommendationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GeoRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoRecommendationCountArgs} args - Arguments to filter GeoRecommendations to count.
     * @example
     * // Count the number of GeoRecommendations
     * const count = await prisma.geoRecommendation.count({
     *   where: {
     *     // ... the filter for the GeoRecommendations we want to count
     *   }
     * })
    **/
    count<T extends GeoRecommendationCountArgs>(
      args?: Subset<T, GeoRecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeoRecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeoRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoRecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeoRecommendationAggregateArgs>(args: Subset<T, GeoRecommendationAggregateArgs>): Prisma.PrismaPromise<GetGeoRecommendationAggregateType<T>>

    /**
     * Group by GeoRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoRecommendationGroupByArgs} args - Group by arguments.
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
      T extends GeoRecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeoRecommendationGroupByArgs['orderBy'] }
        : { orderBy?: GeoRecommendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeoRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeoRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeoRecommendation model
   */
  readonly fields: GeoRecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeoRecommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeoRecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GeoRecommendation model
   */
  interface GeoRecommendationFieldRefs {
    readonly id: FieldRef<"GeoRecommendation", 'String'>
    readonly score: FieldRef<"GeoRecommendation", 'Float'>
    readonly createdAt: FieldRef<"GeoRecommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GeoRecommendation findUnique
   */
  export type GeoRecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoRecommendation
     */
    select?: GeoRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoRecommendation
     */
    omit?: GeoRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which GeoRecommendation to fetch.
     */
    where: GeoRecommendationWhereUniqueInput
  }

  /**
   * GeoRecommendation findUniqueOrThrow
   */
  export type GeoRecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoRecommendation
     */
    select?: GeoRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoRecommendation
     */
    omit?: GeoRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which GeoRecommendation to fetch.
     */
    where: GeoRecommendationWhereUniqueInput
  }

  /**
   * GeoRecommendation findFirst
   */
  export type GeoRecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoRecommendation
     */
    select?: GeoRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoRecommendation
     */
    omit?: GeoRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which GeoRecommendation to fetch.
     */
    where?: GeoRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeoRecommendations to fetch.
     */
    orderBy?: GeoRecommendationOrderByWithRelationInput | GeoRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeoRecommendations.
     */
    cursor?: GeoRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeoRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeoRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeoRecommendations.
     */
    distinct?: GeoRecommendationScalarFieldEnum | GeoRecommendationScalarFieldEnum[]
  }

  /**
   * GeoRecommendation findFirstOrThrow
   */
  export type GeoRecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoRecommendation
     */
    select?: GeoRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoRecommendation
     */
    omit?: GeoRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which GeoRecommendation to fetch.
     */
    where?: GeoRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeoRecommendations to fetch.
     */
    orderBy?: GeoRecommendationOrderByWithRelationInput | GeoRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeoRecommendations.
     */
    cursor?: GeoRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeoRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeoRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeoRecommendations.
     */
    distinct?: GeoRecommendationScalarFieldEnum | GeoRecommendationScalarFieldEnum[]
  }

  /**
   * GeoRecommendation findMany
   */
  export type GeoRecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoRecommendation
     */
    select?: GeoRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoRecommendation
     */
    omit?: GeoRecommendationOmit<ExtArgs> | null
    /**
     * Filter, which GeoRecommendations to fetch.
     */
    where?: GeoRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeoRecommendations to fetch.
     */
    orderBy?: GeoRecommendationOrderByWithRelationInput | GeoRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeoRecommendations.
     */
    cursor?: GeoRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeoRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeoRecommendations.
     */
    skip?: number
    distinct?: GeoRecommendationScalarFieldEnum | GeoRecommendationScalarFieldEnum[]
  }

  /**
   * GeoRecommendation create
   */
  export type GeoRecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoRecommendation
     */
    select?: GeoRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoRecommendation
     */
    omit?: GeoRecommendationOmit<ExtArgs> | null
    /**
     * The data needed to create a GeoRecommendation.
     */
    data: XOR<GeoRecommendationCreateInput, GeoRecommendationUncheckedCreateInput>
  }

  /**
   * GeoRecommendation createMany
   */
  export type GeoRecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeoRecommendations.
     */
    data: GeoRecommendationCreateManyInput | GeoRecommendationCreateManyInput[]
  }

  /**
   * GeoRecommendation update
   */
  export type GeoRecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoRecommendation
     */
    select?: GeoRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoRecommendation
     */
    omit?: GeoRecommendationOmit<ExtArgs> | null
    /**
     * The data needed to update a GeoRecommendation.
     */
    data: XOR<GeoRecommendationUpdateInput, GeoRecommendationUncheckedUpdateInput>
    /**
     * Choose, which GeoRecommendation to update.
     */
    where: GeoRecommendationWhereUniqueInput
  }

  /**
   * GeoRecommendation updateMany
   */
  export type GeoRecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeoRecommendations.
     */
    data: XOR<GeoRecommendationUpdateManyMutationInput, GeoRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which GeoRecommendations to update
     */
    where?: GeoRecommendationWhereInput
    /**
     * Limit how many GeoRecommendations to update.
     */
    limit?: number
  }

  /**
   * GeoRecommendation upsert
   */
  export type GeoRecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoRecommendation
     */
    select?: GeoRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoRecommendation
     */
    omit?: GeoRecommendationOmit<ExtArgs> | null
    /**
     * The filter to search for the GeoRecommendation to update in case it exists.
     */
    where: GeoRecommendationWhereUniqueInput
    /**
     * In case the GeoRecommendation found by the `where` argument doesn't exist, create a new GeoRecommendation with this data.
     */
    create: XOR<GeoRecommendationCreateInput, GeoRecommendationUncheckedCreateInput>
    /**
     * In case the GeoRecommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeoRecommendationUpdateInput, GeoRecommendationUncheckedUpdateInput>
  }

  /**
   * GeoRecommendation delete
   */
  export type GeoRecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoRecommendation
     */
    select?: GeoRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoRecommendation
     */
    omit?: GeoRecommendationOmit<ExtArgs> | null
    /**
     * Filter which GeoRecommendation to delete.
     */
    where: GeoRecommendationWhereUniqueInput
  }

  /**
   * GeoRecommendation deleteMany
   */
  export type GeoRecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeoRecommendations to delete
     */
    where?: GeoRecommendationWhereInput
    /**
     * Limit how many GeoRecommendations to delete.
     */
    limit?: number
  }

  /**
   * GeoRecommendation findRaw
   */
  export type GeoRecommendationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GeoRecommendation aggregateRaw
   */
  export type GeoRecommendationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GeoRecommendation without action
   */
  export type GeoRecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoRecommendation
     */
    select?: GeoRecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoRecommendation
     */
    omit?: GeoRecommendationOmit<ExtArgs> | null
  }


  /**
   * Model GeoZone
   */

  export type AggregateGeoZone = {
    _count: GeoZoneCountAggregateOutputType | null
    _avg: GeoZoneAvgAggregateOutputType | null
    _sum: GeoZoneSumAggregateOutputType | null
    _min: GeoZoneMinAggregateOutputType | null
    _max: GeoZoneMaxAggregateOutputType | null
  }

  export type GeoZoneAvgAggregateOutputType = {
    coverage: number | null
  }

  export type GeoZoneSumAggregateOutputType = {
    coverage: number | null
  }

  export type GeoZoneMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    polygon: string | null
    coverage: number | null
  }

  export type GeoZoneMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    polygon: string | null
    coverage: number | null
  }

  export type GeoZoneCountAggregateOutputType = {
    id: number
    name: number
    type: number
    polygon: number
    coverage: number
    _all: number
  }


  export type GeoZoneAvgAggregateInputType = {
    coverage?: true
  }

  export type GeoZoneSumAggregateInputType = {
    coverage?: true
  }

  export type GeoZoneMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    polygon?: true
    coverage?: true
  }

  export type GeoZoneMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    polygon?: true
    coverage?: true
  }

  export type GeoZoneCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    polygon?: true
    coverage?: true
    _all?: true
  }

  export type GeoZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeoZone to aggregate.
     */
    where?: GeoZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeoZones to fetch.
     */
    orderBy?: GeoZoneOrderByWithRelationInput | GeoZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeoZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeoZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeoZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeoZones
    **/
    _count?: true | GeoZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeoZoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeoZoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeoZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeoZoneMaxAggregateInputType
  }

  export type GetGeoZoneAggregateType<T extends GeoZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateGeoZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeoZone[P]>
      : GetScalarType<T[P], AggregateGeoZone[P]>
  }




  export type GeoZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeoZoneWhereInput
    orderBy?: GeoZoneOrderByWithAggregationInput | GeoZoneOrderByWithAggregationInput[]
    by: GeoZoneScalarFieldEnum[] | GeoZoneScalarFieldEnum
    having?: GeoZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeoZoneCountAggregateInputType | true
    _avg?: GeoZoneAvgAggregateInputType
    _sum?: GeoZoneSumAggregateInputType
    _min?: GeoZoneMinAggregateInputType
    _max?: GeoZoneMaxAggregateInputType
  }

  export type GeoZoneGroupByOutputType = {
    id: string
    name: string
    type: string
    polygon: string
    coverage: number
    _count: GeoZoneCountAggregateOutputType | null
    _avg: GeoZoneAvgAggregateOutputType | null
    _sum: GeoZoneSumAggregateOutputType | null
    _min: GeoZoneMinAggregateOutputType | null
    _max: GeoZoneMaxAggregateOutputType | null
  }

  type GetGeoZoneGroupByPayload<T extends GeoZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeoZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeoZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeoZoneGroupByOutputType[P]>
            : GetScalarType<T[P], GeoZoneGroupByOutputType[P]>
        }
      >
    >


  export type GeoZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    polygon?: boolean
    coverage?: boolean
    responderUnits?: boolean | GeoZone$responderUnitsArgs<ExtArgs>
    _count?: boolean | GeoZoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["geoZone"]>



  export type GeoZoneSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    polygon?: boolean
    coverage?: boolean
  }

  export type GeoZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "polygon" | "coverage", ExtArgs["result"]["geoZone"]>
  export type GeoZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responderUnits?: boolean | GeoZone$responderUnitsArgs<ExtArgs>
    _count?: boolean | GeoZoneCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GeoZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeoZone"
    objects: {
      responderUnits: Prisma.$ResponderUnitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      polygon: string
      coverage: number
    }, ExtArgs["result"]["geoZone"]>
    composites: {}
  }

  type GeoZoneGetPayload<S extends boolean | null | undefined | GeoZoneDefaultArgs> = $Result.GetResult<Prisma.$GeoZonePayload, S>

  type GeoZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeoZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeoZoneCountAggregateInputType | true
    }

  export interface GeoZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeoZone'], meta: { name: 'GeoZone' } }
    /**
     * Find zero or one GeoZone that matches the filter.
     * @param {GeoZoneFindUniqueArgs} args - Arguments to find a GeoZone
     * @example
     * // Get one GeoZone
     * const geoZone = await prisma.geoZone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeoZoneFindUniqueArgs>(args: SelectSubset<T, GeoZoneFindUniqueArgs<ExtArgs>>): Prisma__GeoZoneClient<$Result.GetResult<Prisma.$GeoZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeoZone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeoZoneFindUniqueOrThrowArgs} args - Arguments to find a GeoZone
     * @example
     * // Get one GeoZone
     * const geoZone = await prisma.geoZone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeoZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, GeoZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeoZoneClient<$Result.GetResult<Prisma.$GeoZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeoZone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoZoneFindFirstArgs} args - Arguments to find a GeoZone
     * @example
     * // Get one GeoZone
     * const geoZone = await prisma.geoZone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeoZoneFindFirstArgs>(args?: SelectSubset<T, GeoZoneFindFirstArgs<ExtArgs>>): Prisma__GeoZoneClient<$Result.GetResult<Prisma.$GeoZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeoZone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoZoneFindFirstOrThrowArgs} args - Arguments to find a GeoZone
     * @example
     * // Get one GeoZone
     * const geoZone = await prisma.geoZone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeoZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, GeoZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeoZoneClient<$Result.GetResult<Prisma.$GeoZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeoZones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeoZones
     * const geoZones = await prisma.geoZone.findMany()
     * 
     * // Get first 10 GeoZones
     * const geoZones = await prisma.geoZone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const geoZoneWithIdOnly = await prisma.geoZone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeoZoneFindManyArgs>(args?: SelectSubset<T, GeoZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeoZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeoZone.
     * @param {GeoZoneCreateArgs} args - Arguments to create a GeoZone.
     * @example
     * // Create one GeoZone
     * const GeoZone = await prisma.geoZone.create({
     *   data: {
     *     // ... data to create a GeoZone
     *   }
     * })
     * 
     */
    create<T extends GeoZoneCreateArgs>(args: SelectSubset<T, GeoZoneCreateArgs<ExtArgs>>): Prisma__GeoZoneClient<$Result.GetResult<Prisma.$GeoZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeoZones.
     * @param {GeoZoneCreateManyArgs} args - Arguments to create many GeoZones.
     * @example
     * // Create many GeoZones
     * const geoZone = await prisma.geoZone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeoZoneCreateManyArgs>(args?: SelectSubset<T, GeoZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GeoZone.
     * @param {GeoZoneDeleteArgs} args - Arguments to delete one GeoZone.
     * @example
     * // Delete one GeoZone
     * const GeoZone = await prisma.geoZone.delete({
     *   where: {
     *     // ... filter to delete one GeoZone
     *   }
     * })
     * 
     */
    delete<T extends GeoZoneDeleteArgs>(args: SelectSubset<T, GeoZoneDeleteArgs<ExtArgs>>): Prisma__GeoZoneClient<$Result.GetResult<Prisma.$GeoZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeoZone.
     * @param {GeoZoneUpdateArgs} args - Arguments to update one GeoZone.
     * @example
     * // Update one GeoZone
     * const geoZone = await prisma.geoZone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeoZoneUpdateArgs>(args: SelectSubset<T, GeoZoneUpdateArgs<ExtArgs>>): Prisma__GeoZoneClient<$Result.GetResult<Prisma.$GeoZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeoZones.
     * @param {GeoZoneDeleteManyArgs} args - Arguments to filter GeoZones to delete.
     * @example
     * // Delete a few GeoZones
     * const { count } = await prisma.geoZone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeoZoneDeleteManyArgs>(args?: SelectSubset<T, GeoZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeoZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeoZones
     * const geoZone = await prisma.geoZone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeoZoneUpdateManyArgs>(args: SelectSubset<T, GeoZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GeoZone.
     * @param {GeoZoneUpsertArgs} args - Arguments to update or create a GeoZone.
     * @example
     * // Update or create a GeoZone
     * const geoZone = await prisma.geoZone.upsert({
     *   create: {
     *     // ... data to create a GeoZone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeoZone we want to update
     *   }
     * })
     */
    upsert<T extends GeoZoneUpsertArgs>(args: SelectSubset<T, GeoZoneUpsertArgs<ExtArgs>>): Prisma__GeoZoneClient<$Result.GetResult<Prisma.$GeoZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeoZones that matches the filter.
     * @param {GeoZoneFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const geoZone = await prisma.geoZone.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GeoZoneFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GeoZone.
     * @param {GeoZoneAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const geoZone = await prisma.geoZone.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GeoZoneAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GeoZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoZoneCountArgs} args - Arguments to filter GeoZones to count.
     * @example
     * // Count the number of GeoZones
     * const count = await prisma.geoZone.count({
     *   where: {
     *     // ... the filter for the GeoZones we want to count
     *   }
     * })
    **/
    count<T extends GeoZoneCountArgs>(
      args?: Subset<T, GeoZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeoZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeoZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeoZoneAggregateArgs>(args: Subset<T, GeoZoneAggregateArgs>): Prisma.PrismaPromise<GetGeoZoneAggregateType<T>>

    /**
     * Group by GeoZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeoZoneGroupByArgs} args - Group by arguments.
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
      T extends GeoZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeoZoneGroupByArgs['orderBy'] }
        : { orderBy?: GeoZoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeoZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeoZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeoZone model
   */
  readonly fields: GeoZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeoZone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeoZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responderUnits<T extends GeoZone$responderUnitsArgs<ExtArgs> = {}>(args?: Subset<T, GeoZone$responderUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponderUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GeoZone model
   */
  interface GeoZoneFieldRefs {
    readonly id: FieldRef<"GeoZone", 'String'>
    readonly name: FieldRef<"GeoZone", 'String'>
    readonly type: FieldRef<"GeoZone", 'String'>
    readonly polygon: FieldRef<"GeoZone", 'String'>
    readonly coverage: FieldRef<"GeoZone", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * GeoZone findUnique
   */
  export type GeoZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
    /**
     * Filter, which GeoZone to fetch.
     */
    where: GeoZoneWhereUniqueInput
  }

  /**
   * GeoZone findUniqueOrThrow
   */
  export type GeoZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
    /**
     * Filter, which GeoZone to fetch.
     */
    where: GeoZoneWhereUniqueInput
  }

  /**
   * GeoZone findFirst
   */
  export type GeoZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
    /**
     * Filter, which GeoZone to fetch.
     */
    where?: GeoZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeoZones to fetch.
     */
    orderBy?: GeoZoneOrderByWithRelationInput | GeoZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeoZones.
     */
    cursor?: GeoZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeoZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeoZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeoZones.
     */
    distinct?: GeoZoneScalarFieldEnum | GeoZoneScalarFieldEnum[]
  }

  /**
   * GeoZone findFirstOrThrow
   */
  export type GeoZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
    /**
     * Filter, which GeoZone to fetch.
     */
    where?: GeoZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeoZones to fetch.
     */
    orderBy?: GeoZoneOrderByWithRelationInput | GeoZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeoZones.
     */
    cursor?: GeoZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeoZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeoZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeoZones.
     */
    distinct?: GeoZoneScalarFieldEnum | GeoZoneScalarFieldEnum[]
  }

  /**
   * GeoZone findMany
   */
  export type GeoZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
    /**
     * Filter, which GeoZones to fetch.
     */
    where?: GeoZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeoZones to fetch.
     */
    orderBy?: GeoZoneOrderByWithRelationInput | GeoZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeoZones.
     */
    cursor?: GeoZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeoZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeoZones.
     */
    skip?: number
    distinct?: GeoZoneScalarFieldEnum | GeoZoneScalarFieldEnum[]
  }

  /**
   * GeoZone create
   */
  export type GeoZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a GeoZone.
     */
    data: XOR<GeoZoneCreateInput, GeoZoneUncheckedCreateInput>
  }

  /**
   * GeoZone createMany
   */
  export type GeoZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeoZones.
     */
    data: GeoZoneCreateManyInput | GeoZoneCreateManyInput[]
  }

  /**
   * GeoZone update
   */
  export type GeoZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a GeoZone.
     */
    data: XOR<GeoZoneUpdateInput, GeoZoneUncheckedUpdateInput>
    /**
     * Choose, which GeoZone to update.
     */
    where: GeoZoneWhereUniqueInput
  }

  /**
   * GeoZone updateMany
   */
  export type GeoZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeoZones.
     */
    data: XOR<GeoZoneUpdateManyMutationInput, GeoZoneUncheckedUpdateManyInput>
    /**
     * Filter which GeoZones to update
     */
    where?: GeoZoneWhereInput
    /**
     * Limit how many GeoZones to update.
     */
    limit?: number
  }

  /**
   * GeoZone upsert
   */
  export type GeoZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the GeoZone to update in case it exists.
     */
    where: GeoZoneWhereUniqueInput
    /**
     * In case the GeoZone found by the `where` argument doesn't exist, create a new GeoZone with this data.
     */
    create: XOR<GeoZoneCreateInput, GeoZoneUncheckedCreateInput>
    /**
     * In case the GeoZone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeoZoneUpdateInput, GeoZoneUncheckedUpdateInput>
  }

  /**
   * GeoZone delete
   */
  export type GeoZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
    /**
     * Filter which GeoZone to delete.
     */
    where: GeoZoneWhereUniqueInput
  }

  /**
   * GeoZone deleteMany
   */
  export type GeoZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeoZones to delete
     */
    where?: GeoZoneWhereInput
    /**
     * Limit how many GeoZones to delete.
     */
    limit?: number
  }

  /**
   * GeoZone findRaw
   */
  export type GeoZoneFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GeoZone aggregateRaw
   */
  export type GeoZoneAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GeoZone.responderUnits
   */
  export type GeoZone$responderUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderUnit
     */
    select?: ResponderUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderUnit
     */
    omit?: ResponderUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderUnitInclude<ExtArgs> | null
    where?: ResponderUnitWhereInput
    orderBy?: ResponderUnitOrderByWithRelationInput | ResponderUnitOrderByWithRelationInput[]
    cursor?: ResponderUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponderUnitScalarFieldEnum | ResponderUnitScalarFieldEnum[]
  }

  /**
   * GeoZone without action
   */
  export type GeoZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeoZone
     */
    select?: GeoZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeoZone
     */
    omit?: GeoZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeoZoneInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ResponderUnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location_lat: 'location_lat',
    location_lon: 'location_lon',
    zone: 'zone',
    status: 'status',
    type: 'type',
    activeIncidentId: 'activeIncidentId',
    geoZoneId: 'geoZoneId'
  };

  export type ResponderUnitScalarFieldEnum = (typeof ResponderUnitScalarFieldEnum)[keyof typeof ResponderUnitScalarFieldEnum]


  export const DispatchRouteScalarFieldEnum: {
    id: 'id',
    responderUnitId: 'responderUnitId',
    destLat: 'destLat',
    destLon: 'destLon',
    distance: 'distance',
    eta: 'eta',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DispatchRouteScalarFieldEnum = (typeof DispatchRouteScalarFieldEnum)[keyof typeof DispatchRouteScalarFieldEnum]


  export const CapabilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    responderUnitId: 'responderUnitId'
  };

  export type CapabilityScalarFieldEnum = (typeof CapabilityScalarFieldEnum)[keyof typeof CapabilityScalarFieldEnum]


  export const GeoRecommendationScalarFieldEnum: {
    id: 'id',
    score: 'score',
    createdAt: 'createdAt'
  };

  export type GeoRecommendationScalarFieldEnum = (typeof GeoRecommendationScalarFieldEnum)[keyof typeof GeoRecommendationScalarFieldEnum]


  export const GeoZoneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    polygon: 'polygon',
    coverage: 'coverage'
  };

  export type GeoZoneScalarFieldEnum = (typeof GeoZoneScalarFieldEnum)[keyof typeof GeoZoneScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ResponderUnitWhereInput = {
    AND?: ResponderUnitWhereInput | ResponderUnitWhereInput[]
    OR?: ResponderUnitWhereInput[]
    NOT?: ResponderUnitWhereInput | ResponderUnitWhereInput[]
    id?: StringFilter<"ResponderUnit"> | string
    name?: StringFilter<"ResponderUnit"> | string
    location_lat?: FloatFilter<"ResponderUnit"> | number
    location_lon?: FloatFilter<"ResponderUnit"> | number
    zone?: StringFilter<"ResponderUnit"> | string
    status?: StringFilter<"ResponderUnit"> | string
    type?: StringFilter<"ResponderUnit"> | string
    activeIncidentId?: StringNullableFilter<"ResponderUnit"> | string | null
    geoZoneId?: StringNullableFilter<"ResponderUnit"> | string | null
    capabilities?: CapabilityListRelationFilter
    dispatchRoutes?: DispatchRouteListRelationFilter
    geoZone?: XOR<GeoZoneNullableScalarRelationFilter, GeoZoneWhereInput> | null
  }

  export type ResponderUnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    zone?: SortOrder
    status?: SortOrder
    type?: SortOrder
    activeIncidentId?: SortOrder
    geoZoneId?: SortOrder
    capabilities?: CapabilityOrderByRelationAggregateInput
    dispatchRoutes?: DispatchRouteOrderByRelationAggregateInput
    geoZone?: GeoZoneOrderByWithRelationInput
  }

  export type ResponderUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResponderUnitWhereInput | ResponderUnitWhereInput[]
    OR?: ResponderUnitWhereInput[]
    NOT?: ResponderUnitWhereInput | ResponderUnitWhereInput[]
    name?: StringFilter<"ResponderUnit"> | string
    location_lat?: FloatFilter<"ResponderUnit"> | number
    location_lon?: FloatFilter<"ResponderUnit"> | number
    zone?: StringFilter<"ResponderUnit"> | string
    status?: StringFilter<"ResponderUnit"> | string
    type?: StringFilter<"ResponderUnit"> | string
    activeIncidentId?: StringNullableFilter<"ResponderUnit"> | string | null
    geoZoneId?: StringNullableFilter<"ResponderUnit"> | string | null
    capabilities?: CapabilityListRelationFilter
    dispatchRoutes?: DispatchRouteListRelationFilter
    geoZone?: XOR<GeoZoneNullableScalarRelationFilter, GeoZoneWhereInput> | null
  }, "id">

  export type ResponderUnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    zone?: SortOrder
    status?: SortOrder
    type?: SortOrder
    activeIncidentId?: SortOrder
    geoZoneId?: SortOrder
    _count?: ResponderUnitCountOrderByAggregateInput
    _avg?: ResponderUnitAvgOrderByAggregateInput
    _max?: ResponderUnitMaxOrderByAggregateInput
    _min?: ResponderUnitMinOrderByAggregateInput
    _sum?: ResponderUnitSumOrderByAggregateInput
  }

  export type ResponderUnitScalarWhereWithAggregatesInput = {
    AND?: ResponderUnitScalarWhereWithAggregatesInput | ResponderUnitScalarWhereWithAggregatesInput[]
    OR?: ResponderUnitScalarWhereWithAggregatesInput[]
    NOT?: ResponderUnitScalarWhereWithAggregatesInput | ResponderUnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResponderUnit"> | string
    name?: StringWithAggregatesFilter<"ResponderUnit"> | string
    location_lat?: FloatWithAggregatesFilter<"ResponderUnit"> | number
    location_lon?: FloatWithAggregatesFilter<"ResponderUnit"> | number
    zone?: StringWithAggregatesFilter<"ResponderUnit"> | string
    status?: StringWithAggregatesFilter<"ResponderUnit"> | string
    type?: StringWithAggregatesFilter<"ResponderUnit"> | string
    activeIncidentId?: StringNullableWithAggregatesFilter<"ResponderUnit"> | string | null
    geoZoneId?: StringNullableWithAggregatesFilter<"ResponderUnit"> | string | null
  }

  export type DispatchRouteWhereInput = {
    AND?: DispatchRouteWhereInput | DispatchRouteWhereInput[]
    OR?: DispatchRouteWhereInput[]
    NOT?: DispatchRouteWhereInput | DispatchRouteWhereInput[]
    id?: StringFilter<"DispatchRoute"> | string
    responderUnitId?: StringFilter<"DispatchRoute"> | string
    destLat?: FloatFilter<"DispatchRoute"> | number
    destLon?: FloatFilter<"DispatchRoute"> | number
    distance?: FloatFilter<"DispatchRoute"> | number
    eta?: IntFilter<"DispatchRoute"> | number
    status?: StringFilter<"DispatchRoute"> | string
    createdAt?: DateTimeFilter<"DispatchRoute"> | Date | string
    updatedAt?: DateTimeFilter<"DispatchRoute"> | Date | string
    responderUnit?: XOR<ResponderUnitScalarRelationFilter, ResponderUnitWhereInput>
  }

  export type DispatchRouteOrderByWithRelationInput = {
    id?: SortOrder
    responderUnitId?: SortOrder
    destLat?: SortOrder
    destLon?: SortOrder
    distance?: SortOrder
    eta?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    responderUnit?: ResponderUnitOrderByWithRelationInput
  }

  export type DispatchRouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DispatchRouteWhereInput | DispatchRouteWhereInput[]
    OR?: DispatchRouteWhereInput[]
    NOT?: DispatchRouteWhereInput | DispatchRouteWhereInput[]
    responderUnitId?: StringFilter<"DispatchRoute"> | string
    destLat?: FloatFilter<"DispatchRoute"> | number
    destLon?: FloatFilter<"DispatchRoute"> | number
    distance?: FloatFilter<"DispatchRoute"> | number
    eta?: IntFilter<"DispatchRoute"> | number
    status?: StringFilter<"DispatchRoute"> | string
    createdAt?: DateTimeFilter<"DispatchRoute"> | Date | string
    updatedAt?: DateTimeFilter<"DispatchRoute"> | Date | string
    responderUnit?: XOR<ResponderUnitScalarRelationFilter, ResponderUnitWhereInput>
  }, "id">

  export type DispatchRouteOrderByWithAggregationInput = {
    id?: SortOrder
    responderUnitId?: SortOrder
    destLat?: SortOrder
    destLon?: SortOrder
    distance?: SortOrder
    eta?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DispatchRouteCountOrderByAggregateInput
    _avg?: DispatchRouteAvgOrderByAggregateInput
    _max?: DispatchRouteMaxOrderByAggregateInput
    _min?: DispatchRouteMinOrderByAggregateInput
    _sum?: DispatchRouteSumOrderByAggregateInput
  }

  export type DispatchRouteScalarWhereWithAggregatesInput = {
    AND?: DispatchRouteScalarWhereWithAggregatesInput | DispatchRouteScalarWhereWithAggregatesInput[]
    OR?: DispatchRouteScalarWhereWithAggregatesInput[]
    NOT?: DispatchRouteScalarWhereWithAggregatesInput | DispatchRouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DispatchRoute"> | string
    responderUnitId?: StringWithAggregatesFilter<"DispatchRoute"> | string
    destLat?: FloatWithAggregatesFilter<"DispatchRoute"> | number
    destLon?: FloatWithAggregatesFilter<"DispatchRoute"> | number
    distance?: FloatWithAggregatesFilter<"DispatchRoute"> | number
    eta?: IntWithAggregatesFilter<"DispatchRoute"> | number
    status?: StringWithAggregatesFilter<"DispatchRoute"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DispatchRoute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DispatchRoute"> | Date | string
  }

  export type CapabilityWhereInput = {
    AND?: CapabilityWhereInput | CapabilityWhereInput[]
    OR?: CapabilityWhereInput[]
    NOT?: CapabilityWhereInput | CapabilityWhereInput[]
    id?: StringFilter<"Capability"> | string
    name?: StringFilter<"Capability"> | string
    responderUnitId?: StringFilter<"Capability"> | string
    responderUnit?: XOR<ResponderUnitScalarRelationFilter, ResponderUnitWhereInput>
  }

  export type CapabilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    responderUnitId?: SortOrder
    responderUnit?: ResponderUnitOrderByWithRelationInput
  }

  export type CapabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CapabilityWhereInput | CapabilityWhereInput[]
    OR?: CapabilityWhereInput[]
    NOT?: CapabilityWhereInput | CapabilityWhereInput[]
    name?: StringFilter<"Capability"> | string
    responderUnitId?: StringFilter<"Capability"> | string
    responderUnit?: XOR<ResponderUnitScalarRelationFilter, ResponderUnitWhereInput>
  }, "id">

  export type CapabilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    responderUnitId?: SortOrder
    _count?: CapabilityCountOrderByAggregateInput
    _max?: CapabilityMaxOrderByAggregateInput
    _min?: CapabilityMinOrderByAggregateInput
  }

  export type CapabilityScalarWhereWithAggregatesInput = {
    AND?: CapabilityScalarWhereWithAggregatesInput | CapabilityScalarWhereWithAggregatesInput[]
    OR?: CapabilityScalarWhereWithAggregatesInput[]
    NOT?: CapabilityScalarWhereWithAggregatesInput | CapabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Capability"> | string
    name?: StringWithAggregatesFilter<"Capability"> | string
    responderUnitId?: StringWithAggregatesFilter<"Capability"> | string
  }

  export type GeoRecommendationWhereInput = {
    AND?: GeoRecommendationWhereInput | GeoRecommendationWhereInput[]
    OR?: GeoRecommendationWhereInput[]
    NOT?: GeoRecommendationWhereInput | GeoRecommendationWhereInput[]
    id?: StringFilter<"GeoRecommendation"> | string
    score?: FloatFilter<"GeoRecommendation"> | number
    createdAt?: DateTimeFilter<"GeoRecommendation"> | Date | string
  }

  export type GeoRecommendationOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type GeoRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeoRecommendationWhereInput | GeoRecommendationWhereInput[]
    OR?: GeoRecommendationWhereInput[]
    NOT?: GeoRecommendationWhereInput | GeoRecommendationWhereInput[]
    score?: FloatFilter<"GeoRecommendation"> | number
    createdAt?: DateTimeFilter<"GeoRecommendation"> | Date | string
  }, "id">

  export type GeoRecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    _count?: GeoRecommendationCountOrderByAggregateInput
    _avg?: GeoRecommendationAvgOrderByAggregateInput
    _max?: GeoRecommendationMaxOrderByAggregateInput
    _min?: GeoRecommendationMinOrderByAggregateInput
    _sum?: GeoRecommendationSumOrderByAggregateInput
  }

  export type GeoRecommendationScalarWhereWithAggregatesInput = {
    AND?: GeoRecommendationScalarWhereWithAggregatesInput | GeoRecommendationScalarWhereWithAggregatesInput[]
    OR?: GeoRecommendationScalarWhereWithAggregatesInput[]
    NOT?: GeoRecommendationScalarWhereWithAggregatesInput | GeoRecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeoRecommendation"> | string
    score?: FloatWithAggregatesFilter<"GeoRecommendation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GeoRecommendation"> | Date | string
  }

  export type GeoZoneWhereInput = {
    AND?: GeoZoneWhereInput | GeoZoneWhereInput[]
    OR?: GeoZoneWhereInput[]
    NOT?: GeoZoneWhereInput | GeoZoneWhereInput[]
    id?: StringFilter<"GeoZone"> | string
    name?: StringFilter<"GeoZone"> | string
    type?: StringFilter<"GeoZone"> | string
    polygon?: StringFilter<"GeoZone"> | string
    coverage?: FloatFilter<"GeoZone"> | number
    responderUnits?: ResponderUnitListRelationFilter
  }

  export type GeoZoneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    polygon?: SortOrder
    coverage?: SortOrder
    responderUnits?: ResponderUnitOrderByRelationAggregateInput
  }

  export type GeoZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeoZoneWhereInput | GeoZoneWhereInput[]
    OR?: GeoZoneWhereInput[]
    NOT?: GeoZoneWhereInput | GeoZoneWhereInput[]
    name?: StringFilter<"GeoZone"> | string
    type?: StringFilter<"GeoZone"> | string
    polygon?: StringFilter<"GeoZone"> | string
    coverage?: FloatFilter<"GeoZone"> | number
    responderUnits?: ResponderUnitListRelationFilter
  }, "id">

  export type GeoZoneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    polygon?: SortOrder
    coverage?: SortOrder
    _count?: GeoZoneCountOrderByAggregateInput
    _avg?: GeoZoneAvgOrderByAggregateInput
    _max?: GeoZoneMaxOrderByAggregateInput
    _min?: GeoZoneMinOrderByAggregateInput
    _sum?: GeoZoneSumOrderByAggregateInput
  }

  export type GeoZoneScalarWhereWithAggregatesInput = {
    AND?: GeoZoneScalarWhereWithAggregatesInput | GeoZoneScalarWhereWithAggregatesInput[]
    OR?: GeoZoneScalarWhereWithAggregatesInput[]
    NOT?: GeoZoneScalarWhereWithAggregatesInput | GeoZoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeoZone"> | string
    name?: StringWithAggregatesFilter<"GeoZone"> | string
    type?: StringWithAggregatesFilter<"GeoZone"> | string
    polygon?: StringWithAggregatesFilter<"GeoZone"> | string
    coverage?: FloatWithAggregatesFilter<"GeoZone"> | number
  }

  export type ResponderUnitCreateInput = {
    id?: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status?: string
    type?: string
    activeIncidentId?: string | null
    capabilities?: CapabilityCreateNestedManyWithoutResponderUnitInput
    dispatchRoutes?: DispatchRouteCreateNestedManyWithoutResponderUnitInput
    geoZone?: GeoZoneCreateNestedOneWithoutResponderUnitsInput
  }

  export type ResponderUnitUncheckedCreateInput = {
    id?: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status?: string
    type?: string
    activeIncidentId?: string | null
    geoZoneId?: string | null
    capabilities?: CapabilityUncheckedCreateNestedManyWithoutResponderUnitInput
    dispatchRoutes?: DispatchRouteUncheckedCreateNestedManyWithoutResponderUnitInput
  }

  export type ResponderUnitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
    capabilities?: CapabilityUpdateManyWithoutResponderUnitNestedInput
    dispatchRoutes?: DispatchRouteUpdateManyWithoutResponderUnitNestedInput
    geoZone?: GeoZoneUpdateOneWithoutResponderUnitsNestedInput
  }

  export type ResponderUnitUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
    geoZoneId?: NullableStringFieldUpdateOperationsInput | string | null
    capabilities?: CapabilityUncheckedUpdateManyWithoutResponderUnitNestedInput
    dispatchRoutes?: DispatchRouteUncheckedUpdateManyWithoutResponderUnitNestedInput
  }

  export type ResponderUnitCreateManyInput = {
    id?: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status?: string
    type?: string
    activeIncidentId?: string | null
    geoZoneId?: string | null
  }

  export type ResponderUnitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResponderUnitUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
    geoZoneId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DispatchRouteCreateInput = {
    id?: string
    destLat: number
    destLon: number
    distance: number
    eta: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    responderUnit: ResponderUnitCreateNestedOneWithoutDispatchRoutesInput
  }

  export type DispatchRouteUncheckedCreateInput = {
    id?: string
    responderUnitId: string
    destLat: number
    destLon: number
    distance: number
    eta: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DispatchRouteUpdateInput = {
    destLat?: FloatFieldUpdateOperationsInput | number
    destLon?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    eta?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responderUnit?: ResponderUnitUpdateOneRequiredWithoutDispatchRoutesNestedInput
  }

  export type DispatchRouteUncheckedUpdateInput = {
    responderUnitId?: StringFieldUpdateOperationsInput | string
    destLat?: FloatFieldUpdateOperationsInput | number
    destLon?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    eta?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispatchRouteCreateManyInput = {
    id?: string
    responderUnitId: string
    destLat: number
    destLon: number
    distance: number
    eta: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DispatchRouteUpdateManyMutationInput = {
    destLat?: FloatFieldUpdateOperationsInput | number
    destLon?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    eta?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispatchRouteUncheckedUpdateManyInput = {
    responderUnitId?: StringFieldUpdateOperationsInput | string
    destLat?: FloatFieldUpdateOperationsInput | number
    destLon?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    eta?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CapabilityCreateInput = {
    id?: string
    name: string
    responderUnit: ResponderUnitCreateNestedOneWithoutCapabilitiesInput
  }

  export type CapabilityUncheckedCreateInput = {
    id?: string
    name: string
    responderUnitId: string
  }

  export type CapabilityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    responderUnit?: ResponderUnitUpdateOneRequiredWithoutCapabilitiesNestedInput
  }

  export type CapabilityUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    responderUnitId?: StringFieldUpdateOperationsInput | string
  }

  export type CapabilityCreateManyInput = {
    id?: string
    name: string
    responderUnitId: string
  }

  export type CapabilityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CapabilityUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    responderUnitId?: StringFieldUpdateOperationsInput | string
  }

  export type GeoRecommendationCreateInput = {
    id?: string
    score: number
    createdAt?: Date | string
  }

  export type GeoRecommendationUncheckedCreateInput = {
    id?: string
    score: number
    createdAt?: Date | string
  }

  export type GeoRecommendationUpdateInput = {
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeoRecommendationUncheckedUpdateInput = {
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeoRecommendationCreateManyInput = {
    id?: string
    score: number
    createdAt?: Date | string
  }

  export type GeoRecommendationUpdateManyMutationInput = {
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeoRecommendationUncheckedUpdateManyInput = {
    score?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeoZoneCreateInput = {
    id?: string
    name: string
    type: string
    polygon: string
    coverage: number
    responderUnits?: ResponderUnitCreateNestedManyWithoutGeoZoneInput
  }

  export type GeoZoneUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    polygon: string
    coverage: number
    responderUnits?: ResponderUnitUncheckedCreateNestedManyWithoutGeoZoneInput
  }

  export type GeoZoneUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    polygon?: StringFieldUpdateOperationsInput | string
    coverage?: FloatFieldUpdateOperationsInput | number
    responderUnits?: ResponderUnitUpdateManyWithoutGeoZoneNestedInput
  }

  export type GeoZoneUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    polygon?: StringFieldUpdateOperationsInput | string
    coverage?: FloatFieldUpdateOperationsInput | number
    responderUnits?: ResponderUnitUncheckedUpdateManyWithoutGeoZoneNestedInput
  }

  export type GeoZoneCreateManyInput = {
    id?: string
    name: string
    type: string
    polygon: string
    coverage: number
  }

  export type GeoZoneUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    polygon?: StringFieldUpdateOperationsInput | string
    coverage?: FloatFieldUpdateOperationsInput | number
  }

  export type GeoZoneUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    polygon?: StringFieldUpdateOperationsInput | string
    coverage?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type CapabilityListRelationFilter = {
    every?: CapabilityWhereInput
    some?: CapabilityWhereInput
    none?: CapabilityWhereInput
  }

  export type DispatchRouteListRelationFilter = {
    every?: DispatchRouteWhereInput
    some?: DispatchRouteWhereInput
    none?: DispatchRouteWhereInput
  }

  export type GeoZoneNullableScalarRelationFilter = {
    is?: GeoZoneWhereInput | null
    isNot?: GeoZoneWhereInput | null
  }

  export type CapabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DispatchRouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResponderUnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    zone?: SortOrder
    status?: SortOrder
    type?: SortOrder
    activeIncidentId?: SortOrder
    geoZoneId?: SortOrder
  }

  export type ResponderUnitAvgOrderByAggregateInput = {
    location_lat?: SortOrder
    location_lon?: SortOrder
  }

  export type ResponderUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    zone?: SortOrder
    status?: SortOrder
    type?: SortOrder
    activeIncidentId?: SortOrder
    geoZoneId?: SortOrder
  }

  export type ResponderUnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    zone?: SortOrder
    status?: SortOrder
    type?: SortOrder
    activeIncidentId?: SortOrder
    geoZoneId?: SortOrder
  }

  export type ResponderUnitSumOrderByAggregateInput = {
    location_lat?: SortOrder
    location_lon?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResponderUnitScalarRelationFilter = {
    is?: ResponderUnitWhereInput
    isNot?: ResponderUnitWhereInput
  }

  export type DispatchRouteCountOrderByAggregateInput = {
    id?: SortOrder
    responderUnitId?: SortOrder
    destLat?: SortOrder
    destLon?: SortOrder
    distance?: SortOrder
    eta?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DispatchRouteAvgOrderByAggregateInput = {
    destLat?: SortOrder
    destLon?: SortOrder
    distance?: SortOrder
    eta?: SortOrder
  }

  export type DispatchRouteMaxOrderByAggregateInput = {
    id?: SortOrder
    responderUnitId?: SortOrder
    destLat?: SortOrder
    destLon?: SortOrder
    distance?: SortOrder
    eta?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DispatchRouteMinOrderByAggregateInput = {
    id?: SortOrder
    responderUnitId?: SortOrder
    destLat?: SortOrder
    destLon?: SortOrder
    distance?: SortOrder
    eta?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DispatchRouteSumOrderByAggregateInput = {
    destLat?: SortOrder
    destLon?: SortOrder
    distance?: SortOrder
    eta?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CapabilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    responderUnitId?: SortOrder
  }

  export type CapabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    responderUnitId?: SortOrder
  }

  export type CapabilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    responderUnitId?: SortOrder
  }

  export type GeoRecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type GeoRecommendationAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type GeoRecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type GeoRecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type GeoRecommendationSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type ResponderUnitListRelationFilter = {
    every?: ResponderUnitWhereInput
    some?: ResponderUnitWhereInput
    none?: ResponderUnitWhereInput
  }

  export type ResponderUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GeoZoneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    polygon?: SortOrder
    coverage?: SortOrder
  }

  export type GeoZoneAvgOrderByAggregateInput = {
    coverage?: SortOrder
  }

  export type GeoZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    polygon?: SortOrder
    coverage?: SortOrder
  }

  export type GeoZoneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    polygon?: SortOrder
    coverage?: SortOrder
  }

  export type GeoZoneSumOrderByAggregateInput = {
    coverage?: SortOrder
  }

  export type CapabilityCreateNestedManyWithoutResponderUnitInput = {
    create?: XOR<CapabilityCreateWithoutResponderUnitInput, CapabilityUncheckedCreateWithoutResponderUnitInput> | CapabilityCreateWithoutResponderUnitInput[] | CapabilityUncheckedCreateWithoutResponderUnitInput[]
    connectOrCreate?: CapabilityCreateOrConnectWithoutResponderUnitInput | CapabilityCreateOrConnectWithoutResponderUnitInput[]
    createMany?: CapabilityCreateManyResponderUnitInputEnvelope
    connect?: CapabilityWhereUniqueInput | CapabilityWhereUniqueInput[]
  }

  export type DispatchRouteCreateNestedManyWithoutResponderUnitInput = {
    create?: XOR<DispatchRouteCreateWithoutResponderUnitInput, DispatchRouteUncheckedCreateWithoutResponderUnitInput> | DispatchRouteCreateWithoutResponderUnitInput[] | DispatchRouteUncheckedCreateWithoutResponderUnitInput[]
    connectOrCreate?: DispatchRouteCreateOrConnectWithoutResponderUnitInput | DispatchRouteCreateOrConnectWithoutResponderUnitInput[]
    createMany?: DispatchRouteCreateManyResponderUnitInputEnvelope
    connect?: DispatchRouteWhereUniqueInput | DispatchRouteWhereUniqueInput[]
  }

  export type GeoZoneCreateNestedOneWithoutResponderUnitsInput = {
    create?: XOR<GeoZoneCreateWithoutResponderUnitsInput, GeoZoneUncheckedCreateWithoutResponderUnitsInput>
    connectOrCreate?: GeoZoneCreateOrConnectWithoutResponderUnitsInput
    connect?: GeoZoneWhereUniqueInput
  }

  export type CapabilityUncheckedCreateNestedManyWithoutResponderUnitInput = {
    create?: XOR<CapabilityCreateWithoutResponderUnitInput, CapabilityUncheckedCreateWithoutResponderUnitInput> | CapabilityCreateWithoutResponderUnitInput[] | CapabilityUncheckedCreateWithoutResponderUnitInput[]
    connectOrCreate?: CapabilityCreateOrConnectWithoutResponderUnitInput | CapabilityCreateOrConnectWithoutResponderUnitInput[]
    createMany?: CapabilityCreateManyResponderUnitInputEnvelope
    connect?: CapabilityWhereUniqueInput | CapabilityWhereUniqueInput[]
  }

  export type DispatchRouteUncheckedCreateNestedManyWithoutResponderUnitInput = {
    create?: XOR<DispatchRouteCreateWithoutResponderUnitInput, DispatchRouteUncheckedCreateWithoutResponderUnitInput> | DispatchRouteCreateWithoutResponderUnitInput[] | DispatchRouteUncheckedCreateWithoutResponderUnitInput[]
    connectOrCreate?: DispatchRouteCreateOrConnectWithoutResponderUnitInput | DispatchRouteCreateOrConnectWithoutResponderUnitInput[]
    createMany?: DispatchRouteCreateManyResponderUnitInputEnvelope
    connect?: DispatchRouteWhereUniqueInput | DispatchRouteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type CapabilityUpdateManyWithoutResponderUnitNestedInput = {
    create?: XOR<CapabilityCreateWithoutResponderUnitInput, CapabilityUncheckedCreateWithoutResponderUnitInput> | CapabilityCreateWithoutResponderUnitInput[] | CapabilityUncheckedCreateWithoutResponderUnitInput[]
    connectOrCreate?: CapabilityCreateOrConnectWithoutResponderUnitInput | CapabilityCreateOrConnectWithoutResponderUnitInput[]
    upsert?: CapabilityUpsertWithWhereUniqueWithoutResponderUnitInput | CapabilityUpsertWithWhereUniqueWithoutResponderUnitInput[]
    createMany?: CapabilityCreateManyResponderUnitInputEnvelope
    set?: CapabilityWhereUniqueInput | CapabilityWhereUniqueInput[]
    disconnect?: CapabilityWhereUniqueInput | CapabilityWhereUniqueInput[]
    delete?: CapabilityWhereUniqueInput | CapabilityWhereUniqueInput[]
    connect?: CapabilityWhereUniqueInput | CapabilityWhereUniqueInput[]
    update?: CapabilityUpdateWithWhereUniqueWithoutResponderUnitInput | CapabilityUpdateWithWhereUniqueWithoutResponderUnitInput[]
    updateMany?: CapabilityUpdateManyWithWhereWithoutResponderUnitInput | CapabilityUpdateManyWithWhereWithoutResponderUnitInput[]
    deleteMany?: CapabilityScalarWhereInput | CapabilityScalarWhereInput[]
  }

  export type DispatchRouteUpdateManyWithoutResponderUnitNestedInput = {
    create?: XOR<DispatchRouteCreateWithoutResponderUnitInput, DispatchRouteUncheckedCreateWithoutResponderUnitInput> | DispatchRouteCreateWithoutResponderUnitInput[] | DispatchRouteUncheckedCreateWithoutResponderUnitInput[]
    connectOrCreate?: DispatchRouteCreateOrConnectWithoutResponderUnitInput | DispatchRouteCreateOrConnectWithoutResponderUnitInput[]
    upsert?: DispatchRouteUpsertWithWhereUniqueWithoutResponderUnitInput | DispatchRouteUpsertWithWhereUniqueWithoutResponderUnitInput[]
    createMany?: DispatchRouteCreateManyResponderUnitInputEnvelope
    set?: DispatchRouteWhereUniqueInput | DispatchRouteWhereUniqueInput[]
    disconnect?: DispatchRouteWhereUniqueInput | DispatchRouteWhereUniqueInput[]
    delete?: DispatchRouteWhereUniqueInput | DispatchRouteWhereUniqueInput[]
    connect?: DispatchRouteWhereUniqueInput | DispatchRouteWhereUniqueInput[]
    update?: DispatchRouteUpdateWithWhereUniqueWithoutResponderUnitInput | DispatchRouteUpdateWithWhereUniqueWithoutResponderUnitInput[]
    updateMany?: DispatchRouteUpdateManyWithWhereWithoutResponderUnitInput | DispatchRouteUpdateManyWithWhereWithoutResponderUnitInput[]
    deleteMany?: DispatchRouteScalarWhereInput | DispatchRouteScalarWhereInput[]
  }

  export type GeoZoneUpdateOneWithoutResponderUnitsNestedInput = {
    create?: XOR<GeoZoneCreateWithoutResponderUnitsInput, GeoZoneUncheckedCreateWithoutResponderUnitsInput>
    connectOrCreate?: GeoZoneCreateOrConnectWithoutResponderUnitsInput
    upsert?: GeoZoneUpsertWithoutResponderUnitsInput
    disconnect?: boolean
    delete?: GeoZoneWhereInput | boolean
    connect?: GeoZoneWhereUniqueInput
    update?: XOR<XOR<GeoZoneUpdateToOneWithWhereWithoutResponderUnitsInput, GeoZoneUpdateWithoutResponderUnitsInput>, GeoZoneUncheckedUpdateWithoutResponderUnitsInput>
  }

  export type CapabilityUncheckedUpdateManyWithoutResponderUnitNestedInput = {
    create?: XOR<CapabilityCreateWithoutResponderUnitInput, CapabilityUncheckedCreateWithoutResponderUnitInput> | CapabilityCreateWithoutResponderUnitInput[] | CapabilityUncheckedCreateWithoutResponderUnitInput[]
    connectOrCreate?: CapabilityCreateOrConnectWithoutResponderUnitInput | CapabilityCreateOrConnectWithoutResponderUnitInput[]
    upsert?: CapabilityUpsertWithWhereUniqueWithoutResponderUnitInput | CapabilityUpsertWithWhereUniqueWithoutResponderUnitInput[]
    createMany?: CapabilityCreateManyResponderUnitInputEnvelope
    set?: CapabilityWhereUniqueInput | CapabilityWhereUniqueInput[]
    disconnect?: CapabilityWhereUniqueInput | CapabilityWhereUniqueInput[]
    delete?: CapabilityWhereUniqueInput | CapabilityWhereUniqueInput[]
    connect?: CapabilityWhereUniqueInput | CapabilityWhereUniqueInput[]
    update?: CapabilityUpdateWithWhereUniqueWithoutResponderUnitInput | CapabilityUpdateWithWhereUniqueWithoutResponderUnitInput[]
    updateMany?: CapabilityUpdateManyWithWhereWithoutResponderUnitInput | CapabilityUpdateManyWithWhereWithoutResponderUnitInput[]
    deleteMany?: CapabilityScalarWhereInput | CapabilityScalarWhereInput[]
  }

  export type DispatchRouteUncheckedUpdateManyWithoutResponderUnitNestedInput = {
    create?: XOR<DispatchRouteCreateWithoutResponderUnitInput, DispatchRouteUncheckedCreateWithoutResponderUnitInput> | DispatchRouteCreateWithoutResponderUnitInput[] | DispatchRouteUncheckedCreateWithoutResponderUnitInput[]
    connectOrCreate?: DispatchRouteCreateOrConnectWithoutResponderUnitInput | DispatchRouteCreateOrConnectWithoutResponderUnitInput[]
    upsert?: DispatchRouteUpsertWithWhereUniqueWithoutResponderUnitInput | DispatchRouteUpsertWithWhereUniqueWithoutResponderUnitInput[]
    createMany?: DispatchRouteCreateManyResponderUnitInputEnvelope
    set?: DispatchRouteWhereUniqueInput | DispatchRouteWhereUniqueInput[]
    disconnect?: DispatchRouteWhereUniqueInput | DispatchRouteWhereUniqueInput[]
    delete?: DispatchRouteWhereUniqueInput | DispatchRouteWhereUniqueInput[]
    connect?: DispatchRouteWhereUniqueInput | DispatchRouteWhereUniqueInput[]
    update?: DispatchRouteUpdateWithWhereUniqueWithoutResponderUnitInput | DispatchRouteUpdateWithWhereUniqueWithoutResponderUnitInput[]
    updateMany?: DispatchRouteUpdateManyWithWhereWithoutResponderUnitInput | DispatchRouteUpdateManyWithWhereWithoutResponderUnitInput[]
    deleteMany?: DispatchRouteScalarWhereInput | DispatchRouteScalarWhereInput[]
  }

  export type ResponderUnitCreateNestedOneWithoutDispatchRoutesInput = {
    create?: XOR<ResponderUnitCreateWithoutDispatchRoutesInput, ResponderUnitUncheckedCreateWithoutDispatchRoutesInput>
    connectOrCreate?: ResponderUnitCreateOrConnectWithoutDispatchRoutesInput
    connect?: ResponderUnitWhereUniqueInput
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

  export type ResponderUnitUpdateOneRequiredWithoutDispatchRoutesNestedInput = {
    create?: XOR<ResponderUnitCreateWithoutDispatchRoutesInput, ResponderUnitUncheckedCreateWithoutDispatchRoutesInput>
    connectOrCreate?: ResponderUnitCreateOrConnectWithoutDispatchRoutesInput
    upsert?: ResponderUnitUpsertWithoutDispatchRoutesInput
    connect?: ResponderUnitWhereUniqueInput
    update?: XOR<XOR<ResponderUnitUpdateToOneWithWhereWithoutDispatchRoutesInput, ResponderUnitUpdateWithoutDispatchRoutesInput>, ResponderUnitUncheckedUpdateWithoutDispatchRoutesInput>
  }

  export type ResponderUnitCreateNestedOneWithoutCapabilitiesInput = {
    create?: XOR<ResponderUnitCreateWithoutCapabilitiesInput, ResponderUnitUncheckedCreateWithoutCapabilitiesInput>
    connectOrCreate?: ResponderUnitCreateOrConnectWithoutCapabilitiesInput
    connect?: ResponderUnitWhereUniqueInput
  }

  export type ResponderUnitUpdateOneRequiredWithoutCapabilitiesNestedInput = {
    create?: XOR<ResponderUnitCreateWithoutCapabilitiesInput, ResponderUnitUncheckedCreateWithoutCapabilitiesInput>
    connectOrCreate?: ResponderUnitCreateOrConnectWithoutCapabilitiesInput
    upsert?: ResponderUnitUpsertWithoutCapabilitiesInput
    connect?: ResponderUnitWhereUniqueInput
    update?: XOR<XOR<ResponderUnitUpdateToOneWithWhereWithoutCapabilitiesInput, ResponderUnitUpdateWithoutCapabilitiesInput>, ResponderUnitUncheckedUpdateWithoutCapabilitiesInput>
  }

  export type ResponderUnitCreateNestedManyWithoutGeoZoneInput = {
    create?: XOR<ResponderUnitCreateWithoutGeoZoneInput, ResponderUnitUncheckedCreateWithoutGeoZoneInput> | ResponderUnitCreateWithoutGeoZoneInput[] | ResponderUnitUncheckedCreateWithoutGeoZoneInput[]
    connectOrCreate?: ResponderUnitCreateOrConnectWithoutGeoZoneInput | ResponderUnitCreateOrConnectWithoutGeoZoneInput[]
    createMany?: ResponderUnitCreateManyGeoZoneInputEnvelope
    connect?: ResponderUnitWhereUniqueInput | ResponderUnitWhereUniqueInput[]
  }

  export type ResponderUnitUncheckedCreateNestedManyWithoutGeoZoneInput = {
    create?: XOR<ResponderUnitCreateWithoutGeoZoneInput, ResponderUnitUncheckedCreateWithoutGeoZoneInput> | ResponderUnitCreateWithoutGeoZoneInput[] | ResponderUnitUncheckedCreateWithoutGeoZoneInput[]
    connectOrCreate?: ResponderUnitCreateOrConnectWithoutGeoZoneInput | ResponderUnitCreateOrConnectWithoutGeoZoneInput[]
    createMany?: ResponderUnitCreateManyGeoZoneInputEnvelope
    connect?: ResponderUnitWhereUniqueInput | ResponderUnitWhereUniqueInput[]
  }

  export type ResponderUnitUpdateManyWithoutGeoZoneNestedInput = {
    create?: XOR<ResponderUnitCreateWithoutGeoZoneInput, ResponderUnitUncheckedCreateWithoutGeoZoneInput> | ResponderUnitCreateWithoutGeoZoneInput[] | ResponderUnitUncheckedCreateWithoutGeoZoneInput[]
    connectOrCreate?: ResponderUnitCreateOrConnectWithoutGeoZoneInput | ResponderUnitCreateOrConnectWithoutGeoZoneInput[]
    upsert?: ResponderUnitUpsertWithWhereUniqueWithoutGeoZoneInput | ResponderUnitUpsertWithWhereUniqueWithoutGeoZoneInput[]
    createMany?: ResponderUnitCreateManyGeoZoneInputEnvelope
    set?: ResponderUnitWhereUniqueInput | ResponderUnitWhereUniqueInput[]
    disconnect?: ResponderUnitWhereUniqueInput | ResponderUnitWhereUniqueInput[]
    delete?: ResponderUnitWhereUniqueInput | ResponderUnitWhereUniqueInput[]
    connect?: ResponderUnitWhereUniqueInput | ResponderUnitWhereUniqueInput[]
    update?: ResponderUnitUpdateWithWhereUniqueWithoutGeoZoneInput | ResponderUnitUpdateWithWhereUniqueWithoutGeoZoneInput[]
    updateMany?: ResponderUnitUpdateManyWithWhereWithoutGeoZoneInput | ResponderUnitUpdateManyWithWhereWithoutGeoZoneInput[]
    deleteMany?: ResponderUnitScalarWhereInput | ResponderUnitScalarWhereInput[]
  }

  export type ResponderUnitUncheckedUpdateManyWithoutGeoZoneNestedInput = {
    create?: XOR<ResponderUnitCreateWithoutGeoZoneInput, ResponderUnitUncheckedCreateWithoutGeoZoneInput> | ResponderUnitCreateWithoutGeoZoneInput[] | ResponderUnitUncheckedCreateWithoutGeoZoneInput[]
    connectOrCreate?: ResponderUnitCreateOrConnectWithoutGeoZoneInput | ResponderUnitCreateOrConnectWithoutGeoZoneInput[]
    upsert?: ResponderUnitUpsertWithWhereUniqueWithoutGeoZoneInput | ResponderUnitUpsertWithWhereUniqueWithoutGeoZoneInput[]
    createMany?: ResponderUnitCreateManyGeoZoneInputEnvelope
    set?: ResponderUnitWhereUniqueInput | ResponderUnitWhereUniqueInput[]
    disconnect?: ResponderUnitWhereUniqueInput | ResponderUnitWhereUniqueInput[]
    delete?: ResponderUnitWhereUniqueInput | ResponderUnitWhereUniqueInput[]
    connect?: ResponderUnitWhereUniqueInput | ResponderUnitWhereUniqueInput[]
    update?: ResponderUnitUpdateWithWhereUniqueWithoutGeoZoneInput | ResponderUnitUpdateWithWhereUniqueWithoutGeoZoneInput[]
    updateMany?: ResponderUnitUpdateManyWithWhereWithoutGeoZoneInput | ResponderUnitUpdateManyWithWhereWithoutGeoZoneInput[]
    deleteMany?: ResponderUnitScalarWhereInput | ResponderUnitScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CapabilityCreateWithoutResponderUnitInput = {
    id?: string
    name: string
  }

  export type CapabilityUncheckedCreateWithoutResponderUnitInput = {
    id?: string
    name: string
  }

  export type CapabilityCreateOrConnectWithoutResponderUnitInput = {
    where: CapabilityWhereUniqueInput
    create: XOR<CapabilityCreateWithoutResponderUnitInput, CapabilityUncheckedCreateWithoutResponderUnitInput>
  }

  export type CapabilityCreateManyResponderUnitInputEnvelope = {
    data: CapabilityCreateManyResponderUnitInput | CapabilityCreateManyResponderUnitInput[]
  }

  export type DispatchRouteCreateWithoutResponderUnitInput = {
    id?: string
    destLat: number
    destLon: number
    distance: number
    eta: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DispatchRouteUncheckedCreateWithoutResponderUnitInput = {
    id?: string
    destLat: number
    destLon: number
    distance: number
    eta: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DispatchRouteCreateOrConnectWithoutResponderUnitInput = {
    where: DispatchRouteWhereUniqueInput
    create: XOR<DispatchRouteCreateWithoutResponderUnitInput, DispatchRouteUncheckedCreateWithoutResponderUnitInput>
  }

  export type DispatchRouteCreateManyResponderUnitInputEnvelope = {
    data: DispatchRouteCreateManyResponderUnitInput | DispatchRouteCreateManyResponderUnitInput[]
  }

  export type GeoZoneCreateWithoutResponderUnitsInput = {
    id?: string
    name: string
    type: string
    polygon: string
    coverage: number
  }

  export type GeoZoneUncheckedCreateWithoutResponderUnitsInput = {
    id?: string
    name: string
    type: string
    polygon: string
    coverage: number
  }

  export type GeoZoneCreateOrConnectWithoutResponderUnitsInput = {
    where: GeoZoneWhereUniqueInput
    create: XOR<GeoZoneCreateWithoutResponderUnitsInput, GeoZoneUncheckedCreateWithoutResponderUnitsInput>
  }

  export type CapabilityUpsertWithWhereUniqueWithoutResponderUnitInput = {
    where: CapabilityWhereUniqueInput
    update: XOR<CapabilityUpdateWithoutResponderUnitInput, CapabilityUncheckedUpdateWithoutResponderUnitInput>
    create: XOR<CapabilityCreateWithoutResponderUnitInput, CapabilityUncheckedCreateWithoutResponderUnitInput>
  }

  export type CapabilityUpdateWithWhereUniqueWithoutResponderUnitInput = {
    where: CapabilityWhereUniqueInput
    data: XOR<CapabilityUpdateWithoutResponderUnitInput, CapabilityUncheckedUpdateWithoutResponderUnitInput>
  }

  export type CapabilityUpdateManyWithWhereWithoutResponderUnitInput = {
    where: CapabilityScalarWhereInput
    data: XOR<CapabilityUpdateManyMutationInput, CapabilityUncheckedUpdateManyWithoutResponderUnitInput>
  }

  export type CapabilityScalarWhereInput = {
    AND?: CapabilityScalarWhereInput | CapabilityScalarWhereInput[]
    OR?: CapabilityScalarWhereInput[]
    NOT?: CapabilityScalarWhereInput | CapabilityScalarWhereInput[]
    id?: StringFilter<"Capability"> | string
    name?: StringFilter<"Capability"> | string
    responderUnitId?: StringFilter<"Capability"> | string
  }

  export type DispatchRouteUpsertWithWhereUniqueWithoutResponderUnitInput = {
    where: DispatchRouteWhereUniqueInput
    update: XOR<DispatchRouteUpdateWithoutResponderUnitInput, DispatchRouteUncheckedUpdateWithoutResponderUnitInput>
    create: XOR<DispatchRouteCreateWithoutResponderUnitInput, DispatchRouteUncheckedCreateWithoutResponderUnitInput>
  }

  export type DispatchRouteUpdateWithWhereUniqueWithoutResponderUnitInput = {
    where: DispatchRouteWhereUniqueInput
    data: XOR<DispatchRouteUpdateWithoutResponderUnitInput, DispatchRouteUncheckedUpdateWithoutResponderUnitInput>
  }

  export type DispatchRouteUpdateManyWithWhereWithoutResponderUnitInput = {
    where: DispatchRouteScalarWhereInput
    data: XOR<DispatchRouteUpdateManyMutationInput, DispatchRouteUncheckedUpdateManyWithoutResponderUnitInput>
  }

  export type DispatchRouteScalarWhereInput = {
    AND?: DispatchRouteScalarWhereInput | DispatchRouteScalarWhereInput[]
    OR?: DispatchRouteScalarWhereInput[]
    NOT?: DispatchRouteScalarWhereInput | DispatchRouteScalarWhereInput[]
    id?: StringFilter<"DispatchRoute"> | string
    responderUnitId?: StringFilter<"DispatchRoute"> | string
    destLat?: FloatFilter<"DispatchRoute"> | number
    destLon?: FloatFilter<"DispatchRoute"> | number
    distance?: FloatFilter<"DispatchRoute"> | number
    eta?: IntFilter<"DispatchRoute"> | number
    status?: StringFilter<"DispatchRoute"> | string
    createdAt?: DateTimeFilter<"DispatchRoute"> | Date | string
    updatedAt?: DateTimeFilter<"DispatchRoute"> | Date | string
  }

  export type GeoZoneUpsertWithoutResponderUnitsInput = {
    update: XOR<GeoZoneUpdateWithoutResponderUnitsInput, GeoZoneUncheckedUpdateWithoutResponderUnitsInput>
    create: XOR<GeoZoneCreateWithoutResponderUnitsInput, GeoZoneUncheckedCreateWithoutResponderUnitsInput>
    where?: GeoZoneWhereInput
  }

  export type GeoZoneUpdateToOneWithWhereWithoutResponderUnitsInput = {
    where?: GeoZoneWhereInput
    data: XOR<GeoZoneUpdateWithoutResponderUnitsInput, GeoZoneUncheckedUpdateWithoutResponderUnitsInput>
  }

  export type GeoZoneUpdateWithoutResponderUnitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    polygon?: StringFieldUpdateOperationsInput | string
    coverage?: FloatFieldUpdateOperationsInput | number
  }

  export type GeoZoneUncheckedUpdateWithoutResponderUnitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    polygon?: StringFieldUpdateOperationsInput | string
    coverage?: FloatFieldUpdateOperationsInput | number
  }

  export type ResponderUnitCreateWithoutDispatchRoutesInput = {
    id?: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status?: string
    type?: string
    activeIncidentId?: string | null
    capabilities?: CapabilityCreateNestedManyWithoutResponderUnitInput
    geoZone?: GeoZoneCreateNestedOneWithoutResponderUnitsInput
  }

  export type ResponderUnitUncheckedCreateWithoutDispatchRoutesInput = {
    id?: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status?: string
    type?: string
    activeIncidentId?: string | null
    geoZoneId?: string | null
    capabilities?: CapabilityUncheckedCreateNestedManyWithoutResponderUnitInput
  }

  export type ResponderUnitCreateOrConnectWithoutDispatchRoutesInput = {
    where: ResponderUnitWhereUniqueInput
    create: XOR<ResponderUnitCreateWithoutDispatchRoutesInput, ResponderUnitUncheckedCreateWithoutDispatchRoutesInput>
  }

  export type ResponderUnitUpsertWithoutDispatchRoutesInput = {
    update: XOR<ResponderUnitUpdateWithoutDispatchRoutesInput, ResponderUnitUncheckedUpdateWithoutDispatchRoutesInput>
    create: XOR<ResponderUnitCreateWithoutDispatchRoutesInput, ResponderUnitUncheckedCreateWithoutDispatchRoutesInput>
    where?: ResponderUnitWhereInput
  }

  export type ResponderUnitUpdateToOneWithWhereWithoutDispatchRoutesInput = {
    where?: ResponderUnitWhereInput
    data: XOR<ResponderUnitUpdateWithoutDispatchRoutesInput, ResponderUnitUncheckedUpdateWithoutDispatchRoutesInput>
  }

  export type ResponderUnitUpdateWithoutDispatchRoutesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
    capabilities?: CapabilityUpdateManyWithoutResponderUnitNestedInput
    geoZone?: GeoZoneUpdateOneWithoutResponderUnitsNestedInput
  }

  export type ResponderUnitUncheckedUpdateWithoutDispatchRoutesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
    geoZoneId?: NullableStringFieldUpdateOperationsInput | string | null
    capabilities?: CapabilityUncheckedUpdateManyWithoutResponderUnitNestedInput
  }

  export type ResponderUnitCreateWithoutCapabilitiesInput = {
    id?: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status?: string
    type?: string
    activeIncidentId?: string | null
    dispatchRoutes?: DispatchRouteCreateNestedManyWithoutResponderUnitInput
    geoZone?: GeoZoneCreateNestedOneWithoutResponderUnitsInput
  }

  export type ResponderUnitUncheckedCreateWithoutCapabilitiesInput = {
    id?: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status?: string
    type?: string
    activeIncidentId?: string | null
    geoZoneId?: string | null
    dispatchRoutes?: DispatchRouteUncheckedCreateNestedManyWithoutResponderUnitInput
  }

  export type ResponderUnitCreateOrConnectWithoutCapabilitiesInput = {
    where: ResponderUnitWhereUniqueInput
    create: XOR<ResponderUnitCreateWithoutCapabilitiesInput, ResponderUnitUncheckedCreateWithoutCapabilitiesInput>
  }

  export type ResponderUnitUpsertWithoutCapabilitiesInput = {
    update: XOR<ResponderUnitUpdateWithoutCapabilitiesInput, ResponderUnitUncheckedUpdateWithoutCapabilitiesInput>
    create: XOR<ResponderUnitCreateWithoutCapabilitiesInput, ResponderUnitUncheckedCreateWithoutCapabilitiesInput>
    where?: ResponderUnitWhereInput
  }

  export type ResponderUnitUpdateToOneWithWhereWithoutCapabilitiesInput = {
    where?: ResponderUnitWhereInput
    data: XOR<ResponderUnitUpdateWithoutCapabilitiesInput, ResponderUnitUncheckedUpdateWithoutCapabilitiesInput>
  }

  export type ResponderUnitUpdateWithoutCapabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchRoutes?: DispatchRouteUpdateManyWithoutResponderUnitNestedInput
    geoZone?: GeoZoneUpdateOneWithoutResponderUnitsNestedInput
  }

  export type ResponderUnitUncheckedUpdateWithoutCapabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
    geoZoneId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchRoutes?: DispatchRouteUncheckedUpdateManyWithoutResponderUnitNestedInput
  }

  export type ResponderUnitCreateWithoutGeoZoneInput = {
    id?: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status?: string
    type?: string
    activeIncidentId?: string | null
    capabilities?: CapabilityCreateNestedManyWithoutResponderUnitInput
    dispatchRoutes?: DispatchRouteCreateNestedManyWithoutResponderUnitInput
  }

  export type ResponderUnitUncheckedCreateWithoutGeoZoneInput = {
    id?: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status?: string
    type?: string
    activeIncidentId?: string | null
    capabilities?: CapabilityUncheckedCreateNestedManyWithoutResponderUnitInput
    dispatchRoutes?: DispatchRouteUncheckedCreateNestedManyWithoutResponderUnitInput
  }

  export type ResponderUnitCreateOrConnectWithoutGeoZoneInput = {
    where: ResponderUnitWhereUniqueInput
    create: XOR<ResponderUnitCreateWithoutGeoZoneInput, ResponderUnitUncheckedCreateWithoutGeoZoneInput>
  }

  export type ResponderUnitCreateManyGeoZoneInputEnvelope = {
    data: ResponderUnitCreateManyGeoZoneInput | ResponderUnitCreateManyGeoZoneInput[]
  }

  export type ResponderUnitUpsertWithWhereUniqueWithoutGeoZoneInput = {
    where: ResponderUnitWhereUniqueInput
    update: XOR<ResponderUnitUpdateWithoutGeoZoneInput, ResponderUnitUncheckedUpdateWithoutGeoZoneInput>
    create: XOR<ResponderUnitCreateWithoutGeoZoneInput, ResponderUnitUncheckedCreateWithoutGeoZoneInput>
  }

  export type ResponderUnitUpdateWithWhereUniqueWithoutGeoZoneInput = {
    where: ResponderUnitWhereUniqueInput
    data: XOR<ResponderUnitUpdateWithoutGeoZoneInput, ResponderUnitUncheckedUpdateWithoutGeoZoneInput>
  }

  export type ResponderUnitUpdateManyWithWhereWithoutGeoZoneInput = {
    where: ResponderUnitScalarWhereInput
    data: XOR<ResponderUnitUpdateManyMutationInput, ResponderUnitUncheckedUpdateManyWithoutGeoZoneInput>
  }

  export type ResponderUnitScalarWhereInput = {
    AND?: ResponderUnitScalarWhereInput | ResponderUnitScalarWhereInput[]
    OR?: ResponderUnitScalarWhereInput[]
    NOT?: ResponderUnitScalarWhereInput | ResponderUnitScalarWhereInput[]
    id?: StringFilter<"ResponderUnit"> | string
    name?: StringFilter<"ResponderUnit"> | string
    location_lat?: FloatFilter<"ResponderUnit"> | number
    location_lon?: FloatFilter<"ResponderUnit"> | number
    zone?: StringFilter<"ResponderUnit"> | string
    status?: StringFilter<"ResponderUnit"> | string
    type?: StringFilter<"ResponderUnit"> | string
    activeIncidentId?: StringNullableFilter<"ResponderUnit"> | string | null
    geoZoneId?: StringNullableFilter<"ResponderUnit"> | string | null
  }

  export type CapabilityCreateManyResponderUnitInput = {
    id?: string
    name: string
  }

  export type DispatchRouteCreateManyResponderUnitInput = {
    id?: string
    destLat: number
    destLon: number
    distance: number
    eta: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CapabilityUpdateWithoutResponderUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CapabilityUncheckedUpdateWithoutResponderUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CapabilityUncheckedUpdateManyWithoutResponderUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DispatchRouteUpdateWithoutResponderUnitInput = {
    destLat?: FloatFieldUpdateOperationsInput | number
    destLon?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    eta?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispatchRouteUncheckedUpdateWithoutResponderUnitInput = {
    destLat?: FloatFieldUpdateOperationsInput | number
    destLon?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    eta?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispatchRouteUncheckedUpdateManyWithoutResponderUnitInput = {
    destLat?: FloatFieldUpdateOperationsInput | number
    destLon?: FloatFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    eta?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponderUnitCreateManyGeoZoneInput = {
    id?: string
    name: string
    location_lat: number
    location_lon: number
    zone: string
    status?: string
    type?: string
    activeIncidentId?: string | null
  }

  export type ResponderUnitUpdateWithoutGeoZoneInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
    capabilities?: CapabilityUpdateManyWithoutResponderUnitNestedInput
    dispatchRoutes?: DispatchRouteUpdateManyWithoutResponderUnitNestedInput
  }

  export type ResponderUnitUncheckedUpdateWithoutGeoZoneInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
    capabilities?: CapabilityUncheckedUpdateManyWithoutResponderUnitNestedInput
    dispatchRoutes?: DispatchRouteUncheckedUpdateManyWithoutResponderUnitNestedInput
  }

  export type ResponderUnitUncheckedUpdateManyWithoutGeoZoneInput = {
    name?: StringFieldUpdateOperationsInput | string
    location_lat?: FloatFieldUpdateOperationsInput | number
    location_lon?: FloatFieldUpdateOperationsInput | number
    zone?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activeIncidentId?: NullableStringFieldUpdateOperationsInput | string | null
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