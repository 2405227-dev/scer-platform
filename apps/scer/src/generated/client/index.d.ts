
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
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model IncidentMessage
 * 
 */
export type IncidentMessage = $Result.DefaultSelection<Prisma.$IncidentMessagePayload>
/**
 * Model IncidentEvent
 * 
 */
export type IncidentEvent = $Result.DefaultSelection<Prisma.$IncidentEventPayload>
/**
 * Model IncidentTimeline
 * 
 */
export type IncidentTimeline = $Result.DefaultSelection<Prisma.$IncidentTimelinePayload>
/**
 * Model Responder
 * 
 */
export type Responder = $Result.DefaultSelection<Prisma.$ResponderPayload>
/**
 * Model ResponderCapability
 * 
 */
export type ResponderCapability = $Result.DefaultSelection<Prisma.$ResponderCapabilityPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model SystemMetrics
 * 
 */
export type SystemMetrics = $Result.DefaultSelection<Prisma.$SystemMetricsPayload>
/**
 * Model ServiceConnection
 * 
 */
export type ServiceConnection = $Result.DefaultSelection<Prisma.$ServiceConnectionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
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
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
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
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentMessage`: Exposes CRUD operations for the **IncidentMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentMessages
    * const incidentMessages = await prisma.incidentMessage.findMany()
    * ```
    */
  get incidentMessage(): Prisma.IncidentMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentEvent`: Exposes CRUD operations for the **IncidentEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentEvents
    * const incidentEvents = await prisma.incidentEvent.findMany()
    * ```
    */
  get incidentEvent(): Prisma.IncidentEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentTimeline`: Exposes CRUD operations for the **IncidentTimeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentTimelines
    * const incidentTimelines = await prisma.incidentTimeline.findMany()
    * ```
    */
  get incidentTimeline(): Prisma.IncidentTimelineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.responder`: Exposes CRUD operations for the **Responder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responders
    * const responders = await prisma.responder.findMany()
    * ```
    */
  get responder(): Prisma.ResponderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.responderCapability`: Exposes CRUD operations for the **ResponderCapability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResponderCapabilities
    * const responderCapabilities = await prisma.responderCapability.findMany()
    * ```
    */
  get responderCapability(): Prisma.ResponderCapabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemMetrics`: Exposes CRUD operations for the **SystemMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemMetrics
    * const systemMetrics = await prisma.systemMetrics.findMany()
    * ```
    */
  get systemMetrics(): Prisma.SystemMetricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceConnection`: Exposes CRUD operations for the **ServiceConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceConnections
    * const serviceConnections = await prisma.serviceConnection.findMany()
    * ```
    */
  get serviceConnection(): Prisma.ServiceConnectionDelegate<ExtArgs, ClientOptions>;
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
    Organization: 'Organization',
    User: 'User',
    Incident: 'Incident',
    IncidentMessage: 'IncidentMessage',
    IncidentEvent: 'IncidentEvent',
    IncidentTimeline: 'IncidentTimeline',
    Responder: 'Responder',
    ResponderCapability: 'ResponderCapability',
    AuditLog: 'AuditLog',
    SystemMetrics: 'SystemMetrics',
    ServiceConnection: 'ServiceConnection'
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
      modelProps: "organization" | "user" | "incident" | "incidentMessage" | "incidentEvent" | "incidentTimeline" | "responder" | "responderCapability" | "auditLog" | "systemMetrics" | "serviceConnection"
      txIsolationLevel: never
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OrganizationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OrganizationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.IncidentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.IncidentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      IncidentMessage: {
        payload: Prisma.$IncidentMessagePayload<ExtArgs>
        fields: Prisma.IncidentMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          findFirst: {
            args: Prisma.IncidentMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          findMany: {
            args: Prisma.IncidentMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>[]
          }
          create: {
            args: Prisma.IncidentMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          createMany: {
            args: Prisma.IncidentMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IncidentMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          update: {
            args: Prisma.IncidentMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          deleteMany: {
            args: Prisma.IncidentMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IncidentMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentMessagePayload>
          }
          aggregate: {
            args: Prisma.IncidentMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentMessage>
          }
          groupBy: {
            args: Prisma.IncidentMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentMessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.IncidentMessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.IncidentMessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.IncidentMessageCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentMessageCountAggregateOutputType> | number
          }
        }
      }
      IncidentEvent: {
        payload: Prisma.$IncidentEventPayload<ExtArgs>
        fields: Prisma.IncidentEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          findFirst: {
            args: Prisma.IncidentEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          findMany: {
            args: Prisma.IncidentEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>[]
          }
          create: {
            args: Prisma.IncidentEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          createMany: {
            args: Prisma.IncidentEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IncidentEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          update: {
            args: Prisma.IncidentEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          deleteMany: {
            args: Prisma.IncidentEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IncidentEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentEventPayload>
          }
          aggregate: {
            args: Prisma.IncidentEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentEvent>
          }
          groupBy: {
            args: Prisma.IncidentEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentEventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.IncidentEventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.IncidentEventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.IncidentEventCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentEventCountAggregateOutputType> | number
          }
        }
      }
      IncidentTimeline: {
        payload: Prisma.$IncidentTimelinePayload<ExtArgs>
        fields: Prisma.IncidentTimelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentTimelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentTimelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentTimelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentTimelinePayload>
          }
          findFirst: {
            args: Prisma.IncidentTimelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentTimelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentTimelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentTimelinePayload>
          }
          findMany: {
            args: Prisma.IncidentTimelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentTimelinePayload>[]
          }
          create: {
            args: Prisma.IncidentTimelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentTimelinePayload>
          }
          createMany: {
            args: Prisma.IncidentTimelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IncidentTimelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentTimelinePayload>
          }
          update: {
            args: Prisma.IncidentTimelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentTimelinePayload>
          }
          deleteMany: {
            args: Prisma.IncidentTimelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentTimelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IncidentTimelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentTimelinePayload>
          }
          aggregate: {
            args: Prisma.IncidentTimelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentTimeline>
          }
          groupBy: {
            args: Prisma.IncidentTimelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentTimelineGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.IncidentTimelineFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.IncidentTimelineAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.IncidentTimelineCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentTimelineCountAggregateOutputType> | number
          }
        }
      }
      Responder: {
        payload: Prisma.$ResponderPayload<ExtArgs>
        fields: Prisma.ResponderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderPayload>
          }
          findFirst: {
            args: Prisma.ResponderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderPayload>
          }
          findMany: {
            args: Prisma.ResponderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderPayload>[]
          }
          create: {
            args: Prisma.ResponderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderPayload>
          }
          createMany: {
            args: Prisma.ResponderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResponderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderPayload>
          }
          update: {
            args: Prisma.ResponderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderPayload>
          }
          deleteMany: {
            args: Prisma.ResponderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResponderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderPayload>
          }
          aggregate: {
            args: Prisma.ResponderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponder>
          }
          groupBy: {
            args: Prisma.ResponderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponderGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ResponderFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ResponderAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ResponderCountArgs<ExtArgs>
            result: $Utils.Optional<ResponderCountAggregateOutputType> | number
          }
        }
      }
      ResponderCapability: {
        payload: Prisma.$ResponderCapabilityPayload<ExtArgs>
        fields: Prisma.ResponderCapabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponderCapabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderCapabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponderCapabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderCapabilityPayload>
          }
          findFirst: {
            args: Prisma.ResponderCapabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderCapabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponderCapabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderCapabilityPayload>
          }
          findMany: {
            args: Prisma.ResponderCapabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderCapabilityPayload>[]
          }
          create: {
            args: Prisma.ResponderCapabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderCapabilityPayload>
          }
          createMany: {
            args: Prisma.ResponderCapabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResponderCapabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderCapabilityPayload>
          }
          update: {
            args: Prisma.ResponderCapabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderCapabilityPayload>
          }
          deleteMany: {
            args: Prisma.ResponderCapabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponderCapabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResponderCapabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponderCapabilityPayload>
          }
          aggregate: {
            args: Prisma.ResponderCapabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponderCapability>
          }
          groupBy: {
            args: Prisma.ResponderCapabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponderCapabilityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ResponderCapabilityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ResponderCapabilityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ResponderCapabilityCountArgs<ExtArgs>
            result: $Utils.Optional<ResponderCapabilityCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AuditLogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AuditLogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      SystemMetrics: {
        payload: Prisma.$SystemMetricsPayload<ExtArgs>
        fields: Prisma.SystemMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricsPayload>
          }
          findFirst: {
            args: Prisma.SystemMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricsPayload>
          }
          findMany: {
            args: Prisma.SystemMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricsPayload>[]
          }
          create: {
            args: Prisma.SystemMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricsPayload>
          }
          createMany: {
            args: Prisma.SystemMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SystemMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricsPayload>
          }
          update: {
            args: Prisma.SystemMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricsPayload>
          }
          deleteMany: {
            args: Prisma.SystemMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMetricsPayload>
          }
          aggregate: {
            args: Prisma.SystemMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemMetrics>
          }
          groupBy: {
            args: Prisma.SystemMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemMetricsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SystemMetricsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SystemMetricsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SystemMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemMetricsCountAggregateOutputType> | number
          }
        }
      }
      ServiceConnection: {
        payload: Prisma.$ServiceConnectionPayload<ExtArgs>
        fields: Prisma.ServiceConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceConnectionPayload>
          }
          findFirst: {
            args: Prisma.ServiceConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceConnectionPayload>
          }
          findMany: {
            args: Prisma.ServiceConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceConnectionPayload>[]
          }
          create: {
            args: Prisma.ServiceConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceConnectionPayload>
          }
          createMany: {
            args: Prisma.ServiceConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceConnectionPayload>
          }
          update: {
            args: Prisma.ServiceConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceConnectionPayload>
          }
          deleteMany: {
            args: Prisma.ServiceConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceConnectionPayload>
          }
          aggregate: {
            args: Prisma.ServiceConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceConnection>
          }
          groupBy: {
            args: Prisma.ServiceConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceConnectionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ServiceConnectionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ServiceConnectionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ServiceConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceConnectionCountAggregateOutputType> | number
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
    organization?: OrganizationOmit
    user?: UserOmit
    incident?: IncidentOmit
    incidentMessage?: IncidentMessageOmit
    incidentEvent?: IncidentEventOmit
    incidentTimeline?: IncidentTimelineOmit
    responder?: ResponderOmit
    responderCapability?: ResponderCapabilityOmit
    auditLog?: AuditLogOmit
    systemMetrics?: SystemMetricsOmit
    serviceConnection?: ServiceConnectionOmit
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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    incidents: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    incidents?: boolean | OrganizationCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Count Type IncidentCountOutputType
   */

  export type IncidentCountOutputType = {
    events: number
    timeline: number
    messages: number
  }

  export type IncidentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | IncidentCountOutputTypeCountEventsArgs
    timeline?: boolean | IncidentCountOutputTypeCountTimelineArgs
    messages?: boolean | IncidentCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentCountOutputType
     */
    select?: IncidentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentEventWhereInput
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentTimelineWhereInput
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentMessageWhereInput
  }


  /**
   * Count Type ResponderCountOutputType
   */

  export type ResponderCountOutputType = {
    assignedIncidents: number
    capabilities: number
  }

  export type ResponderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedIncidents?: boolean | ResponderCountOutputTypeCountAssignedIncidentsArgs
    capabilities?: boolean | ResponderCountOutputTypeCountCapabilitiesArgs
  }

  // Custom InputTypes
  /**
   * ResponderCountOutputType without action
   */
  export type ResponderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCountOutputType
     */
    select?: ResponderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResponderCountOutputType without action
   */
  export type ResponderCountOutputTypeCountAssignedIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * ResponderCountOutputType without action
   */
  export type ResponderCountOutputTypeCountCapabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponderCapabilityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    createdAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    createdAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    type: number
    createdAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    type: string
    createdAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
    users?: boolean | Organization$usersArgs<ExtArgs>
    incidents?: boolean | Organization$incidentsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>



  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "createdAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Organization$usersArgs<ExtArgs>
    incidents?: boolean | Organization$incidentsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      createdAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * @param {OrganizationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const organization = await prisma.organization.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OrganizationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Organization.
     * @param {OrganizationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const organization = await prisma.organization.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OrganizationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends Organization$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly type: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization findRaw
   */
  export type OrganizationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Organization aggregateRaw
   */
  export type OrganizationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.incidents
   */
  export type Organization$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    isRootController: boolean | null
    isActive: boolean | null
    isTempPassword: boolean | null
    mustChangePassword: boolean | null
    phone: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    isRootController: boolean | null
    isActive: boolean | null
    isTempPassword: boolean | null
    mustChangePassword: boolean | null
    phone: string | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    organizationId: number
    name: number
    email: number
    passwordHash: number
    role: number
    isRootController: number
    isActive: number
    isTempPassword: number
    mustChangePassword: number
    phone: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isRootController?: true
    isActive?: true
    isTempPassword?: true
    mustChangePassword?: true
    phone?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isRootController?: true
    isActive?: true
    isTempPassword?: true
    mustChangePassword?: true
    phone?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    isRootController?: true
    isActive?: true
    isTempPassword?: true
    mustChangePassword?: true
    phone?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    organizationId: string
    name: string
    email: string
    passwordHash: string
    role: string
    isRootController: boolean
    isActive: boolean
    isTempPassword: boolean
    mustChangePassword: boolean
    phone: string | null
    department: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isRootController?: boolean
    isActive?: boolean
    isTempPassword?: boolean
    mustChangePassword?: boolean
    phone?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    organizationId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isRootController?: boolean
    isActive?: boolean
    isTempPassword?: boolean
    mustChangePassword?: boolean
    phone?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "name" | "email" | "passwordHash" | "role" | "isRootController" | "isActive" | "isTempPassword" | "mustChangePassword" | "phone" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      name: string
      email: string
      passwordHash: string
      role: string
      isRootController: boolean
      isActive: boolean
      isTempPassword: boolean
      mustChangePassword: boolean
      phone: string | null
      department: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isRootController: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isTempPassword: FieldRef<"User", 'Boolean'>
    readonly mustChangePassword: FieldRef<"User", 'Boolean'>
    readonly phone: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentAvgAggregateOutputType = {
    priority: number | null
    location_lat: number | null
    location_lon: number | null
  }

  export type IncidentSumAggregateOutputType = {
    priority: number | null
    location_lat: number | null
    location_lon: number | null
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    type: string | null
    severity: string | null
    status: string | null
    location: string | null
    description: string | null
    reporterId: string | null
    reporterName: string | null
    reporterTelegramChatId: string | null
    reporterTelegramMessageId: string | null
    telegramChatId: string | null
    telegramMessageId: string | null
    assignedTo: string | null
    assignedToName: string | null
    assignedAt: Date | null
    responderId: string | null
    estimatedArrival: Date | null
    acknowledgedAt: Date | null
    resolvedAt: Date | null
    resolvedBy: string | null
    priority: number | null
    tags: string | null
    location_lat: number | null
    location_lon: number | null
    attachments: string | null
    aiAnalysisStatus: string | null
    aiAnalysisSummary: string | null
    aiActionPlan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    type: string | null
    severity: string | null
    status: string | null
    location: string | null
    description: string | null
    reporterId: string | null
    reporterName: string | null
    reporterTelegramChatId: string | null
    reporterTelegramMessageId: string | null
    telegramChatId: string | null
    telegramMessageId: string | null
    assignedTo: string | null
    assignedToName: string | null
    assignedAt: Date | null
    responderId: string | null
    estimatedArrival: Date | null
    acknowledgedAt: Date | null
    resolvedAt: Date | null
    resolvedBy: string | null
    priority: number | null
    tags: string | null
    location_lat: number | null
    location_lon: number | null
    attachments: string | null
    aiAnalysisStatus: string | null
    aiAnalysisSummary: string | null
    aiActionPlan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    organizationId: number
    type: number
    severity: number
    status: number
    location: number
    description: number
    reporterId: number
    reporterName: number
    reporterTelegramChatId: number
    reporterTelegramMessageId: number
    telegramChatId: number
    telegramMessageId: number
    assignedTo: number
    assignedToName: number
    assignedAt: number
    responderId: number
    estimatedArrival: number
    acknowledgedAt: number
    resolvedAt: number
    resolvedBy: number
    priority: number
    tags: number
    location_lat: number
    location_lon: number
    attachments: number
    aiAnalysisStatus: number
    aiAnalysisSummary: number
    aiActionPlan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncidentAvgAggregateInputType = {
    priority?: true
    location_lat?: true
    location_lon?: true
  }

  export type IncidentSumAggregateInputType = {
    priority?: true
    location_lat?: true
    location_lon?: true
  }

  export type IncidentMinAggregateInputType = {
    id?: true
    organizationId?: true
    type?: true
    severity?: true
    status?: true
    location?: true
    description?: true
    reporterId?: true
    reporterName?: true
    reporterTelegramChatId?: true
    reporterTelegramMessageId?: true
    telegramChatId?: true
    telegramMessageId?: true
    assignedTo?: true
    assignedToName?: true
    assignedAt?: true
    responderId?: true
    estimatedArrival?: true
    acknowledgedAt?: true
    resolvedAt?: true
    resolvedBy?: true
    priority?: true
    tags?: true
    location_lat?: true
    location_lon?: true
    attachments?: true
    aiAnalysisStatus?: true
    aiAnalysisSummary?: true
    aiActionPlan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    organizationId?: true
    type?: true
    severity?: true
    status?: true
    location?: true
    description?: true
    reporterId?: true
    reporterName?: true
    reporterTelegramChatId?: true
    reporterTelegramMessageId?: true
    telegramChatId?: true
    telegramMessageId?: true
    assignedTo?: true
    assignedToName?: true
    assignedAt?: true
    responderId?: true
    estimatedArrival?: true
    acknowledgedAt?: true
    resolvedAt?: true
    resolvedBy?: true
    priority?: true
    tags?: true
    location_lat?: true
    location_lon?: true
    attachments?: true
    aiAnalysisStatus?: true
    aiAnalysisSummary?: true
    aiActionPlan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    organizationId?: true
    type?: true
    severity?: true
    status?: true
    location?: true
    description?: true
    reporterId?: true
    reporterName?: true
    reporterTelegramChatId?: true
    reporterTelegramMessageId?: true
    telegramChatId?: true
    telegramMessageId?: true
    assignedTo?: true
    assignedToName?: true
    assignedAt?: true
    responderId?: true
    estimatedArrival?: true
    acknowledgedAt?: true
    resolvedAt?: true
    resolvedBy?: true
    priority?: true
    tags?: true
    location_lat?: true
    location_lon?: true
    attachments?: true
    aiAnalysisStatus?: true
    aiAnalysisSummary?: true
    aiActionPlan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _avg?: IncidentAvgAggregateInputType
    _sum?: IncidentSumAggregateInputType
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    organizationId: string
    type: string
    severity: string
    status: string
    location: string
    description: string | null
    reporterId: string | null
    reporterName: string | null
    reporterTelegramChatId: string | null
    reporterTelegramMessageId: string | null
    telegramChatId: string | null
    telegramMessageId: string | null
    assignedTo: string | null
    assignedToName: string | null
    assignedAt: Date | null
    responderId: string | null
    estimatedArrival: Date | null
    acknowledgedAt: Date | null
    resolvedAt: Date | null
    resolvedBy: string | null
    priority: number
    tags: string
    location_lat: number | null
    location_lon: number | null
    attachments: string
    aiAnalysisStatus: string | null
    aiAnalysisSummary: string | null
    aiActionPlan: string | null
    createdAt: Date
    updatedAt: Date
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    type?: boolean
    severity?: boolean
    status?: boolean
    location?: boolean
    description?: boolean
    reporterId?: boolean
    reporterName?: boolean
    reporterTelegramChatId?: boolean
    reporterTelegramMessageId?: boolean
    telegramChatId?: boolean
    telegramMessageId?: boolean
    assignedTo?: boolean
    assignedToName?: boolean
    assignedAt?: boolean
    responderId?: boolean
    estimatedArrival?: boolean
    acknowledgedAt?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    priority?: boolean
    tags?: boolean
    location_lat?: boolean
    location_lon?: boolean
    attachments?: boolean
    aiAnalysisStatus?: boolean
    aiAnalysisSummary?: boolean
    aiActionPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    events?: boolean | Incident$eventsArgs<ExtArgs>
    timeline?: boolean | Incident$timelineArgs<ExtArgs>
    messages?: boolean | Incident$messagesArgs<ExtArgs>
    responder?: boolean | Incident$responderArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>



  export type IncidentSelectScalar = {
    id?: boolean
    organizationId?: boolean
    type?: boolean
    severity?: boolean
    status?: boolean
    location?: boolean
    description?: boolean
    reporterId?: boolean
    reporterName?: boolean
    reporterTelegramChatId?: boolean
    reporterTelegramMessageId?: boolean
    telegramChatId?: boolean
    telegramMessageId?: boolean
    assignedTo?: boolean
    assignedToName?: boolean
    assignedAt?: boolean
    responderId?: boolean
    estimatedArrival?: boolean
    acknowledgedAt?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    priority?: boolean
    tags?: boolean
    location_lat?: boolean
    location_lon?: boolean
    attachments?: boolean
    aiAnalysisStatus?: boolean
    aiAnalysisSummary?: boolean
    aiActionPlan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "type" | "severity" | "status" | "location" | "description" | "reporterId" | "reporterName" | "reporterTelegramChatId" | "reporterTelegramMessageId" | "telegramChatId" | "telegramMessageId" | "assignedTo" | "assignedToName" | "assignedAt" | "responderId" | "estimatedArrival" | "acknowledgedAt" | "resolvedAt" | "resolvedBy" | "priority" | "tags" | "location_lat" | "location_lon" | "attachments" | "aiAnalysisStatus" | "aiAnalysisSummary" | "aiActionPlan" | "createdAt" | "updatedAt", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    events?: boolean | Incident$eventsArgs<ExtArgs>
    timeline?: boolean | Incident$timelineArgs<ExtArgs>
    messages?: boolean | Incident$messagesArgs<ExtArgs>
    responder?: boolean | Incident$responderArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      events: Prisma.$IncidentEventPayload<ExtArgs>[]
      timeline: Prisma.$IncidentTimelinePayload<ExtArgs>[]
      messages: Prisma.$IncidentMessagePayload<ExtArgs>[]
      responder: Prisma.$ResponderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      type: string
      severity: string
      status: string
      location: string
      description: string | null
      reporterId: string | null
      reporterName: string | null
      reporterTelegramChatId: string | null
      reporterTelegramMessageId: string | null
      telegramChatId: string | null
      telegramMessageId: string | null
      assignedTo: string | null
      assignedToName: string | null
      assignedAt: Date | null
      responderId: string | null
      estimatedArrival: Date | null
      acknowledgedAt: Date | null
      resolvedAt: Date | null
      resolvedBy: string | null
      priority: number
      tags: string
      location_lat: number | null
      location_lon: number | null
      attachments: string
      aiAnalysisStatus: string | null
      aiAnalysisSummary: string | null
      aiActionPlan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * @param {IncidentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const incident = await prisma.incident.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: IncidentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Incident.
     * @param {IncidentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const incident = await prisma.incident.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: IncidentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
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
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends Incident$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Incident$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    timeline<T extends Incident$timelineArgs<ExtArgs> = {}>(args?: Subset<T, Incident$timelineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentTimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Incident$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Incident$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responder<T extends Incident$responderArgs<ExtArgs> = {}>(args?: Subset<T, Incident$responderArgs<ExtArgs>>): Prisma__ResponderClient<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly organizationId: FieldRef<"Incident", 'String'>
    readonly type: FieldRef<"Incident", 'String'>
    readonly severity: FieldRef<"Incident", 'String'>
    readonly status: FieldRef<"Incident", 'String'>
    readonly location: FieldRef<"Incident", 'String'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly reporterId: FieldRef<"Incident", 'String'>
    readonly reporterName: FieldRef<"Incident", 'String'>
    readonly reporterTelegramChatId: FieldRef<"Incident", 'String'>
    readonly reporterTelegramMessageId: FieldRef<"Incident", 'String'>
    readonly telegramChatId: FieldRef<"Incident", 'String'>
    readonly telegramMessageId: FieldRef<"Incident", 'String'>
    readonly assignedTo: FieldRef<"Incident", 'String'>
    readonly assignedToName: FieldRef<"Incident", 'String'>
    readonly assignedAt: FieldRef<"Incident", 'DateTime'>
    readonly responderId: FieldRef<"Incident", 'String'>
    readonly estimatedArrival: FieldRef<"Incident", 'DateTime'>
    readonly acknowledgedAt: FieldRef<"Incident", 'DateTime'>
    readonly resolvedAt: FieldRef<"Incident", 'DateTime'>
    readonly resolvedBy: FieldRef<"Incident", 'String'>
    readonly priority: FieldRef<"Incident", 'Int'>
    readonly tags: FieldRef<"Incident", 'String'>
    readonly location_lat: FieldRef<"Incident", 'Float'>
    readonly location_lon: FieldRef<"Incident", 'Float'>
    readonly attachments: FieldRef<"Incident", 'String'>
    readonly aiAnalysisStatus: FieldRef<"Incident", 'String'>
    readonly aiAnalysisSummary: FieldRef<"Incident", 'String'>
    readonly aiActionPlan: FieldRef<"Incident", 'String'>
    readonly createdAt: FieldRef<"Incident", 'DateTime'>
    readonly updatedAt: FieldRef<"Incident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident findRaw
   */
  export type IncidentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Incident aggregateRaw
   */
  export type IncidentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Incident.events
   */
  export type Incident$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    where?: IncidentEventWhereInput
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    cursor?: IncidentEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentEventScalarFieldEnum | IncidentEventScalarFieldEnum[]
  }

  /**
   * Incident.timeline
   */
  export type Incident$timelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
    where?: IncidentTimelineWhereInput
    orderBy?: IncidentTimelineOrderByWithRelationInput | IncidentTimelineOrderByWithRelationInput[]
    cursor?: IncidentTimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentTimelineScalarFieldEnum | IncidentTimelineScalarFieldEnum[]
  }

  /**
   * Incident.messages
   */
  export type Incident$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    where?: IncidentMessageWhereInput
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    cursor?: IncidentMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentMessageScalarFieldEnum | IncidentMessageScalarFieldEnum[]
  }

  /**
   * Incident.responder
   */
  export type Incident$responderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
    where?: ResponderWhereInput
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model IncidentMessage
   */

  export type AggregateIncidentMessage = {
    _count: IncidentMessageCountAggregateOutputType | null
    _min: IncidentMessageMinAggregateOutputType | null
    _max: IncidentMessageMaxAggregateOutputType | null
  }

  export type IncidentMessageMinAggregateOutputType = {
    id: string | null
    incidentId: string | null
    senderType: string | null
    senderName: string | null
    senderId: string | null
    content: string | null
    telegramMessageId: string | null
    createdAt: Date | null
  }

  export type IncidentMessageMaxAggregateOutputType = {
    id: string | null
    incidentId: string | null
    senderType: string | null
    senderName: string | null
    senderId: string | null
    content: string | null
    telegramMessageId: string | null
    createdAt: Date | null
  }

  export type IncidentMessageCountAggregateOutputType = {
    id: number
    incidentId: number
    senderType: number
    senderName: number
    senderId: number
    content: number
    telegramMessageId: number
    createdAt: number
    _all: number
  }


  export type IncidentMessageMinAggregateInputType = {
    id?: true
    incidentId?: true
    senderType?: true
    senderName?: true
    senderId?: true
    content?: true
    telegramMessageId?: true
    createdAt?: true
  }

  export type IncidentMessageMaxAggregateInputType = {
    id?: true
    incidentId?: true
    senderType?: true
    senderName?: true
    senderId?: true
    content?: true
    telegramMessageId?: true
    createdAt?: true
  }

  export type IncidentMessageCountAggregateInputType = {
    id?: true
    incidentId?: true
    senderType?: true
    senderName?: true
    senderId?: true
    content?: true
    telegramMessageId?: true
    createdAt?: true
    _all?: true
  }

  export type IncidentMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentMessage to aggregate.
     */
    where?: IncidentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentMessages to fetch.
     */
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentMessages
    **/
    _count?: true | IncidentMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMessageMaxAggregateInputType
  }

  export type GetIncidentMessageAggregateType<T extends IncidentMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentMessage[P]>
      : GetScalarType<T[P], AggregateIncidentMessage[P]>
  }




  export type IncidentMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentMessageWhereInput
    orderBy?: IncidentMessageOrderByWithAggregationInput | IncidentMessageOrderByWithAggregationInput[]
    by: IncidentMessageScalarFieldEnum[] | IncidentMessageScalarFieldEnum
    having?: IncidentMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentMessageCountAggregateInputType | true
    _min?: IncidentMessageMinAggregateInputType
    _max?: IncidentMessageMaxAggregateInputType
  }

  export type IncidentMessageGroupByOutputType = {
    id: string
    incidentId: string
    senderType: string
    senderName: string
    senderId: string | null
    content: string
    telegramMessageId: string | null
    createdAt: Date
    _count: IncidentMessageCountAggregateOutputType | null
    _min: IncidentMessageMinAggregateOutputType | null
    _max: IncidentMessageMaxAggregateOutputType | null
  }

  type GetIncidentMessageGroupByPayload<T extends IncidentMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentMessageGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentMessageGroupByOutputType[P]>
        }
      >
    >


  export type IncidentMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    senderType?: boolean
    senderName?: boolean
    senderId?: boolean
    content?: boolean
    telegramMessageId?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentMessage"]>



  export type IncidentMessageSelectScalar = {
    id?: boolean
    incidentId?: boolean
    senderType?: boolean
    senderName?: boolean
    senderId?: boolean
    content?: boolean
    telegramMessageId?: boolean
    createdAt?: boolean
  }

  export type IncidentMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "senderType" | "senderName" | "senderId" | "content" | "telegramMessageId" | "createdAt", ExtArgs["result"]["incidentMessage"]>
  export type IncidentMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }

  export type $IncidentMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentMessage"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentId: string
      senderType: string
      senderName: string
      senderId: string | null
      content: string
      telegramMessageId: string | null
      createdAt: Date
    }, ExtArgs["result"]["incidentMessage"]>
    composites: {}
  }

  type IncidentMessageGetPayload<S extends boolean | null | undefined | IncidentMessageDefaultArgs> = $Result.GetResult<Prisma.$IncidentMessagePayload, S>

  type IncidentMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentMessageCountAggregateInputType | true
    }

  export interface IncidentMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentMessage'], meta: { name: 'IncidentMessage' } }
    /**
     * Find zero or one IncidentMessage that matches the filter.
     * @param {IncidentMessageFindUniqueArgs} args - Arguments to find a IncidentMessage
     * @example
     * // Get one IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentMessageFindUniqueArgs>(args: SelectSubset<T, IncidentMessageFindUniqueArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentMessageFindUniqueOrThrowArgs} args - Arguments to find a IncidentMessage
     * @example
     * // Get one IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageFindFirstArgs} args - Arguments to find a IncidentMessage
     * @example
     * // Get one IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentMessageFindFirstArgs>(args?: SelectSubset<T, IncidentMessageFindFirstArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageFindFirstOrThrowArgs} args - Arguments to find a IncidentMessage
     * @example
     * // Get one IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentMessages
     * const incidentMessages = await prisma.incidentMessage.findMany()
     * 
     * // Get first 10 IncidentMessages
     * const incidentMessages = await prisma.incidentMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentMessageWithIdOnly = await prisma.incidentMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentMessageFindManyArgs>(args?: SelectSubset<T, IncidentMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentMessage.
     * @param {IncidentMessageCreateArgs} args - Arguments to create a IncidentMessage.
     * @example
     * // Create one IncidentMessage
     * const IncidentMessage = await prisma.incidentMessage.create({
     *   data: {
     *     // ... data to create a IncidentMessage
     *   }
     * })
     * 
     */
    create<T extends IncidentMessageCreateArgs>(args: SelectSubset<T, IncidentMessageCreateArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentMessages.
     * @param {IncidentMessageCreateManyArgs} args - Arguments to create many IncidentMessages.
     * @example
     * // Create many IncidentMessages
     * const incidentMessage = await prisma.incidentMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentMessageCreateManyArgs>(args?: SelectSubset<T, IncidentMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IncidentMessage.
     * @param {IncidentMessageDeleteArgs} args - Arguments to delete one IncidentMessage.
     * @example
     * // Delete one IncidentMessage
     * const IncidentMessage = await prisma.incidentMessage.delete({
     *   where: {
     *     // ... filter to delete one IncidentMessage
     *   }
     * })
     * 
     */
    delete<T extends IncidentMessageDeleteArgs>(args: SelectSubset<T, IncidentMessageDeleteArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentMessage.
     * @param {IncidentMessageUpdateArgs} args - Arguments to update one IncidentMessage.
     * @example
     * // Update one IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentMessageUpdateArgs>(args: SelectSubset<T, IncidentMessageUpdateArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentMessages.
     * @param {IncidentMessageDeleteManyArgs} args - Arguments to filter IncidentMessages to delete.
     * @example
     * // Delete a few IncidentMessages
     * const { count } = await prisma.incidentMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentMessageDeleteManyArgs>(args?: SelectSubset<T, IncidentMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentMessages
     * const incidentMessage = await prisma.incidentMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentMessageUpdateManyArgs>(args: SelectSubset<T, IncidentMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IncidentMessage.
     * @param {IncidentMessageUpsertArgs} args - Arguments to update or create a IncidentMessage.
     * @example
     * // Update or create a IncidentMessage
     * const incidentMessage = await prisma.incidentMessage.upsert({
     *   create: {
     *     // ... data to create a IncidentMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentMessage we want to update
     *   }
     * })
     */
    upsert<T extends IncidentMessageUpsertArgs>(args: SelectSubset<T, IncidentMessageUpsertArgs<ExtArgs>>): Prisma__IncidentMessageClient<$Result.GetResult<Prisma.$IncidentMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentMessages that matches the filter.
     * @param {IncidentMessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const incidentMessage = await prisma.incidentMessage.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: IncidentMessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a IncidentMessage.
     * @param {IncidentMessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const incidentMessage = await prisma.incidentMessage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: IncidentMessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of IncidentMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageCountArgs} args - Arguments to filter IncidentMessages to count.
     * @example
     * // Count the number of IncidentMessages
     * const count = await prisma.incidentMessage.count({
     *   where: {
     *     // ... the filter for the IncidentMessages we want to count
     *   }
     * })
    **/
    count<T extends IncidentMessageCountArgs>(
      args?: Subset<T, IncidentMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentMessageAggregateArgs>(args: Subset<T, IncidentMessageAggregateArgs>): Prisma.PrismaPromise<GetIncidentMessageAggregateType<T>>

    /**
     * Group by IncidentMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentMessageGroupByArgs} args - Group by arguments.
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
      T extends IncidentMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentMessageGroupByArgs['orderBy'] }
        : { orderBy?: IncidentMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentMessage model
   */
  readonly fields: IncidentMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IncidentMessage model
   */
  interface IncidentMessageFieldRefs {
    readonly id: FieldRef<"IncidentMessage", 'String'>
    readonly incidentId: FieldRef<"IncidentMessage", 'String'>
    readonly senderType: FieldRef<"IncidentMessage", 'String'>
    readonly senderName: FieldRef<"IncidentMessage", 'String'>
    readonly senderId: FieldRef<"IncidentMessage", 'String'>
    readonly content: FieldRef<"IncidentMessage", 'String'>
    readonly telegramMessageId: FieldRef<"IncidentMessage", 'String'>
    readonly createdAt: FieldRef<"IncidentMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentMessage findUnique
   */
  export type IncidentMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter, which IncidentMessage to fetch.
     */
    where: IncidentMessageWhereUniqueInput
  }

  /**
   * IncidentMessage findUniqueOrThrow
   */
  export type IncidentMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter, which IncidentMessage to fetch.
     */
    where: IncidentMessageWhereUniqueInput
  }

  /**
   * IncidentMessage findFirst
   */
  export type IncidentMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter, which IncidentMessage to fetch.
     */
    where?: IncidentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentMessages to fetch.
     */
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentMessages.
     */
    cursor?: IncidentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentMessages.
     */
    distinct?: IncidentMessageScalarFieldEnum | IncidentMessageScalarFieldEnum[]
  }

  /**
   * IncidentMessage findFirstOrThrow
   */
  export type IncidentMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter, which IncidentMessage to fetch.
     */
    where?: IncidentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentMessages to fetch.
     */
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentMessages.
     */
    cursor?: IncidentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentMessages.
     */
    distinct?: IncidentMessageScalarFieldEnum | IncidentMessageScalarFieldEnum[]
  }

  /**
   * IncidentMessage findMany
   */
  export type IncidentMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter, which IncidentMessages to fetch.
     */
    where?: IncidentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentMessages to fetch.
     */
    orderBy?: IncidentMessageOrderByWithRelationInput | IncidentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentMessages.
     */
    cursor?: IncidentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentMessages.
     */
    skip?: number
    distinct?: IncidentMessageScalarFieldEnum | IncidentMessageScalarFieldEnum[]
  }

  /**
   * IncidentMessage create
   */
  export type IncidentMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentMessage.
     */
    data: XOR<IncidentMessageCreateInput, IncidentMessageUncheckedCreateInput>
  }

  /**
   * IncidentMessage createMany
   */
  export type IncidentMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentMessages.
     */
    data: IncidentMessageCreateManyInput | IncidentMessageCreateManyInput[]
  }

  /**
   * IncidentMessage update
   */
  export type IncidentMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentMessage.
     */
    data: XOR<IncidentMessageUpdateInput, IncidentMessageUncheckedUpdateInput>
    /**
     * Choose, which IncidentMessage to update.
     */
    where: IncidentMessageWhereUniqueInput
  }

  /**
   * IncidentMessage updateMany
   */
  export type IncidentMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentMessages.
     */
    data: XOR<IncidentMessageUpdateManyMutationInput, IncidentMessageUncheckedUpdateManyInput>
    /**
     * Filter which IncidentMessages to update
     */
    where?: IncidentMessageWhereInput
    /**
     * Limit how many IncidentMessages to update.
     */
    limit?: number
  }

  /**
   * IncidentMessage upsert
   */
  export type IncidentMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentMessage to update in case it exists.
     */
    where: IncidentMessageWhereUniqueInput
    /**
     * In case the IncidentMessage found by the `where` argument doesn't exist, create a new IncidentMessage with this data.
     */
    create: XOR<IncidentMessageCreateInput, IncidentMessageUncheckedCreateInput>
    /**
     * In case the IncidentMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentMessageUpdateInput, IncidentMessageUncheckedUpdateInput>
  }

  /**
   * IncidentMessage delete
   */
  export type IncidentMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
    /**
     * Filter which IncidentMessage to delete.
     */
    where: IncidentMessageWhereUniqueInput
  }

  /**
   * IncidentMessage deleteMany
   */
  export type IncidentMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentMessages to delete
     */
    where?: IncidentMessageWhereInput
    /**
     * Limit how many IncidentMessages to delete.
     */
    limit?: number
  }

  /**
   * IncidentMessage findRaw
   */
  export type IncidentMessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * IncidentMessage aggregateRaw
   */
  export type IncidentMessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * IncidentMessage without action
   */
  export type IncidentMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentMessage
     */
    select?: IncidentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentMessage
     */
    omit?: IncidentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentMessageInclude<ExtArgs> | null
  }


  /**
   * Model IncidentEvent
   */

  export type AggregateIncidentEvent = {
    _count: IncidentEventCountAggregateOutputType | null
    _min: IncidentEventMinAggregateOutputType | null
    _max: IncidentEventMaxAggregateOutputType | null
  }

  export type IncidentEventMinAggregateOutputType = {
    id: string | null
    incidentId: string | null
    type: string | null
    data: string | null
    createdAt: Date | null
  }

  export type IncidentEventMaxAggregateOutputType = {
    id: string | null
    incidentId: string | null
    type: string | null
    data: string | null
    createdAt: Date | null
  }

  export type IncidentEventCountAggregateOutputType = {
    id: number
    incidentId: number
    type: number
    data: number
    createdAt: number
    _all: number
  }


  export type IncidentEventMinAggregateInputType = {
    id?: true
    incidentId?: true
    type?: true
    data?: true
    createdAt?: true
  }

  export type IncidentEventMaxAggregateInputType = {
    id?: true
    incidentId?: true
    type?: true
    data?: true
    createdAt?: true
  }

  export type IncidentEventCountAggregateInputType = {
    id?: true
    incidentId?: true
    type?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type IncidentEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentEvent to aggregate.
     */
    where?: IncidentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvents to fetch.
     */
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentEvents
    **/
    _count?: true | IncidentEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentEventMaxAggregateInputType
  }

  export type GetIncidentEventAggregateType<T extends IncidentEventAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentEvent[P]>
      : GetScalarType<T[P], AggregateIncidentEvent[P]>
  }




  export type IncidentEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentEventWhereInput
    orderBy?: IncidentEventOrderByWithAggregationInput | IncidentEventOrderByWithAggregationInput[]
    by: IncidentEventScalarFieldEnum[] | IncidentEventScalarFieldEnum
    having?: IncidentEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentEventCountAggregateInputType | true
    _min?: IncidentEventMinAggregateInputType
    _max?: IncidentEventMaxAggregateInputType
  }

  export type IncidentEventGroupByOutputType = {
    id: string
    incidentId: string
    type: string
    data: string | null
    createdAt: Date
    _count: IncidentEventCountAggregateOutputType | null
    _min: IncidentEventMinAggregateOutputType | null
    _max: IncidentEventMaxAggregateOutputType | null
  }

  type GetIncidentEventGroupByPayload<T extends IncidentEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentEventGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentEventGroupByOutputType[P]>
        }
      >
    >


  export type IncidentEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentEvent"]>



  export type IncidentEventSelectScalar = {
    id?: boolean
    incidentId?: boolean
    type?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type IncidentEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "type" | "data" | "createdAt", ExtArgs["result"]["incidentEvent"]>
  export type IncidentEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }

  export type $IncidentEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentEvent"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentId: string
      type: string
      data: string | null
      createdAt: Date
    }, ExtArgs["result"]["incidentEvent"]>
    composites: {}
  }

  type IncidentEventGetPayload<S extends boolean | null | undefined | IncidentEventDefaultArgs> = $Result.GetResult<Prisma.$IncidentEventPayload, S>

  type IncidentEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentEventCountAggregateInputType | true
    }

  export interface IncidentEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentEvent'], meta: { name: 'IncidentEvent' } }
    /**
     * Find zero or one IncidentEvent that matches the filter.
     * @param {IncidentEventFindUniqueArgs} args - Arguments to find a IncidentEvent
     * @example
     * // Get one IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentEventFindUniqueArgs>(args: SelectSubset<T, IncidentEventFindUniqueArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentEventFindUniqueOrThrowArgs} args - Arguments to find a IncidentEvent
     * @example
     * // Get one IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentEventFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventFindFirstArgs} args - Arguments to find a IncidentEvent
     * @example
     * // Get one IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentEventFindFirstArgs>(args?: SelectSubset<T, IncidentEventFindFirstArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventFindFirstOrThrowArgs} args - Arguments to find a IncidentEvent
     * @example
     * // Get one IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentEventFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentEvents
     * const incidentEvents = await prisma.incidentEvent.findMany()
     * 
     * // Get first 10 IncidentEvents
     * const incidentEvents = await prisma.incidentEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentEventWithIdOnly = await prisma.incidentEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentEventFindManyArgs>(args?: SelectSubset<T, IncidentEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentEvent.
     * @param {IncidentEventCreateArgs} args - Arguments to create a IncidentEvent.
     * @example
     * // Create one IncidentEvent
     * const IncidentEvent = await prisma.incidentEvent.create({
     *   data: {
     *     // ... data to create a IncidentEvent
     *   }
     * })
     * 
     */
    create<T extends IncidentEventCreateArgs>(args: SelectSubset<T, IncidentEventCreateArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentEvents.
     * @param {IncidentEventCreateManyArgs} args - Arguments to create many IncidentEvents.
     * @example
     * // Create many IncidentEvents
     * const incidentEvent = await prisma.incidentEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentEventCreateManyArgs>(args?: SelectSubset<T, IncidentEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IncidentEvent.
     * @param {IncidentEventDeleteArgs} args - Arguments to delete one IncidentEvent.
     * @example
     * // Delete one IncidentEvent
     * const IncidentEvent = await prisma.incidentEvent.delete({
     *   where: {
     *     // ... filter to delete one IncidentEvent
     *   }
     * })
     * 
     */
    delete<T extends IncidentEventDeleteArgs>(args: SelectSubset<T, IncidentEventDeleteArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentEvent.
     * @param {IncidentEventUpdateArgs} args - Arguments to update one IncidentEvent.
     * @example
     * // Update one IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentEventUpdateArgs>(args: SelectSubset<T, IncidentEventUpdateArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentEvents.
     * @param {IncidentEventDeleteManyArgs} args - Arguments to filter IncidentEvents to delete.
     * @example
     * // Delete a few IncidentEvents
     * const { count } = await prisma.incidentEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentEventDeleteManyArgs>(args?: SelectSubset<T, IncidentEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentEvents
     * const incidentEvent = await prisma.incidentEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentEventUpdateManyArgs>(args: SelectSubset<T, IncidentEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IncidentEvent.
     * @param {IncidentEventUpsertArgs} args - Arguments to update or create a IncidentEvent.
     * @example
     * // Update or create a IncidentEvent
     * const incidentEvent = await prisma.incidentEvent.upsert({
     *   create: {
     *     // ... data to create a IncidentEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentEvent we want to update
     *   }
     * })
     */
    upsert<T extends IncidentEventUpsertArgs>(args: SelectSubset<T, IncidentEventUpsertArgs<ExtArgs>>): Prisma__IncidentEventClient<$Result.GetResult<Prisma.$IncidentEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentEvents that matches the filter.
     * @param {IncidentEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const incidentEvent = await prisma.incidentEvent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: IncidentEventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a IncidentEvent.
     * @param {IncidentEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const incidentEvent = await prisma.incidentEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: IncidentEventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of IncidentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventCountArgs} args - Arguments to filter IncidentEvents to count.
     * @example
     * // Count the number of IncidentEvents
     * const count = await prisma.incidentEvent.count({
     *   where: {
     *     // ... the filter for the IncidentEvents we want to count
     *   }
     * })
    **/
    count<T extends IncidentEventCountArgs>(
      args?: Subset<T, IncidentEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentEventAggregateArgs>(args: Subset<T, IncidentEventAggregateArgs>): Prisma.PrismaPromise<GetIncidentEventAggregateType<T>>

    /**
     * Group by IncidentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentEventGroupByArgs} args - Group by arguments.
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
      T extends IncidentEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentEventGroupByArgs['orderBy'] }
        : { orderBy?: IncidentEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentEvent model
   */
  readonly fields: IncidentEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IncidentEvent model
   */
  interface IncidentEventFieldRefs {
    readonly id: FieldRef<"IncidentEvent", 'String'>
    readonly incidentId: FieldRef<"IncidentEvent", 'String'>
    readonly type: FieldRef<"IncidentEvent", 'String'>
    readonly data: FieldRef<"IncidentEvent", 'String'>
    readonly createdAt: FieldRef<"IncidentEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentEvent findUnique
   */
  export type IncidentEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvent to fetch.
     */
    where: IncidentEventWhereUniqueInput
  }

  /**
   * IncidentEvent findUniqueOrThrow
   */
  export type IncidentEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvent to fetch.
     */
    where: IncidentEventWhereUniqueInput
  }

  /**
   * IncidentEvent findFirst
   */
  export type IncidentEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvent to fetch.
     */
    where?: IncidentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvents to fetch.
     */
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentEvents.
     */
    cursor?: IncidentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentEvents.
     */
    distinct?: IncidentEventScalarFieldEnum | IncidentEventScalarFieldEnum[]
  }

  /**
   * IncidentEvent findFirstOrThrow
   */
  export type IncidentEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvent to fetch.
     */
    where?: IncidentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvents to fetch.
     */
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentEvents.
     */
    cursor?: IncidentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentEvents.
     */
    distinct?: IncidentEventScalarFieldEnum | IncidentEventScalarFieldEnum[]
  }

  /**
   * IncidentEvent findMany
   */
  export type IncidentEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter, which IncidentEvents to fetch.
     */
    where?: IncidentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentEvents to fetch.
     */
    orderBy?: IncidentEventOrderByWithRelationInput | IncidentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentEvents.
     */
    cursor?: IncidentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentEvents.
     */
    skip?: number
    distinct?: IncidentEventScalarFieldEnum | IncidentEventScalarFieldEnum[]
  }

  /**
   * IncidentEvent create
   */
  export type IncidentEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentEvent.
     */
    data: XOR<IncidentEventCreateInput, IncidentEventUncheckedCreateInput>
  }

  /**
   * IncidentEvent createMany
   */
  export type IncidentEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentEvents.
     */
    data: IncidentEventCreateManyInput | IncidentEventCreateManyInput[]
  }

  /**
   * IncidentEvent update
   */
  export type IncidentEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentEvent.
     */
    data: XOR<IncidentEventUpdateInput, IncidentEventUncheckedUpdateInput>
    /**
     * Choose, which IncidentEvent to update.
     */
    where: IncidentEventWhereUniqueInput
  }

  /**
   * IncidentEvent updateMany
   */
  export type IncidentEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentEvents.
     */
    data: XOR<IncidentEventUpdateManyMutationInput, IncidentEventUncheckedUpdateManyInput>
    /**
     * Filter which IncidentEvents to update
     */
    where?: IncidentEventWhereInput
    /**
     * Limit how many IncidentEvents to update.
     */
    limit?: number
  }

  /**
   * IncidentEvent upsert
   */
  export type IncidentEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentEvent to update in case it exists.
     */
    where: IncidentEventWhereUniqueInput
    /**
     * In case the IncidentEvent found by the `where` argument doesn't exist, create a new IncidentEvent with this data.
     */
    create: XOR<IncidentEventCreateInput, IncidentEventUncheckedCreateInput>
    /**
     * In case the IncidentEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentEventUpdateInput, IncidentEventUncheckedUpdateInput>
  }

  /**
   * IncidentEvent delete
   */
  export type IncidentEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
    /**
     * Filter which IncidentEvent to delete.
     */
    where: IncidentEventWhereUniqueInput
  }

  /**
   * IncidentEvent deleteMany
   */
  export type IncidentEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentEvents to delete
     */
    where?: IncidentEventWhereInput
    /**
     * Limit how many IncidentEvents to delete.
     */
    limit?: number
  }

  /**
   * IncidentEvent findRaw
   */
  export type IncidentEventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * IncidentEvent aggregateRaw
   */
  export type IncidentEventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * IncidentEvent without action
   */
  export type IncidentEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentEvent
     */
    select?: IncidentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentEvent
     */
    omit?: IncidentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentEventInclude<ExtArgs> | null
  }


  /**
   * Model IncidentTimeline
   */

  export type AggregateIncidentTimeline = {
    _count: IncidentTimelineCountAggregateOutputType | null
    _min: IncidentTimelineMinAggregateOutputType | null
    _max: IncidentTimelineMaxAggregateOutputType | null
  }

  export type IncidentTimelineMinAggregateOutputType = {
    id: string | null
    incidentId: string | null
    action: string | null
    actor: string | null
    details: string | null
    createdAt: Date | null
  }

  export type IncidentTimelineMaxAggregateOutputType = {
    id: string | null
    incidentId: string | null
    action: string | null
    actor: string | null
    details: string | null
    createdAt: Date | null
  }

  export type IncidentTimelineCountAggregateOutputType = {
    id: number
    incidentId: number
    action: number
    actor: number
    details: number
    createdAt: number
    _all: number
  }


  export type IncidentTimelineMinAggregateInputType = {
    id?: true
    incidentId?: true
    action?: true
    actor?: true
    details?: true
    createdAt?: true
  }

  export type IncidentTimelineMaxAggregateInputType = {
    id?: true
    incidentId?: true
    action?: true
    actor?: true
    details?: true
    createdAt?: true
  }

  export type IncidentTimelineCountAggregateInputType = {
    id?: true
    incidentId?: true
    action?: true
    actor?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type IncidentTimelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentTimeline to aggregate.
     */
    where?: IncidentTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentTimelines to fetch.
     */
    orderBy?: IncidentTimelineOrderByWithRelationInput | IncidentTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentTimelines
    **/
    _count?: true | IncidentTimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentTimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentTimelineMaxAggregateInputType
  }

  export type GetIncidentTimelineAggregateType<T extends IncidentTimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentTimeline[P]>
      : GetScalarType<T[P], AggregateIncidentTimeline[P]>
  }




  export type IncidentTimelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentTimelineWhereInput
    orderBy?: IncidentTimelineOrderByWithAggregationInput | IncidentTimelineOrderByWithAggregationInput[]
    by: IncidentTimelineScalarFieldEnum[] | IncidentTimelineScalarFieldEnum
    having?: IncidentTimelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentTimelineCountAggregateInputType | true
    _min?: IncidentTimelineMinAggregateInputType
    _max?: IncidentTimelineMaxAggregateInputType
  }

  export type IncidentTimelineGroupByOutputType = {
    id: string
    incidentId: string
    action: string
    actor: string
    details: string | null
    createdAt: Date
    _count: IncidentTimelineCountAggregateOutputType | null
    _min: IncidentTimelineMinAggregateOutputType | null
    _max: IncidentTimelineMaxAggregateOutputType | null
  }

  type GetIncidentTimelineGroupByPayload<T extends IncidentTimelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentTimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentTimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentTimelineGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentTimelineGroupByOutputType[P]>
        }
      >
    >


  export type IncidentTimelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    action?: boolean
    actor?: boolean
    details?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentTimeline"]>



  export type IncidentTimelineSelectScalar = {
    id?: boolean
    incidentId?: boolean
    action?: boolean
    actor?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type IncidentTimelineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "action" | "actor" | "details" | "createdAt", ExtArgs["result"]["incidentTimeline"]>
  export type IncidentTimelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }

  export type $IncidentTimelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentTimeline"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentId: string
      action: string
      actor: string
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["incidentTimeline"]>
    composites: {}
  }

  type IncidentTimelineGetPayload<S extends boolean | null | undefined | IncidentTimelineDefaultArgs> = $Result.GetResult<Prisma.$IncidentTimelinePayload, S>

  type IncidentTimelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentTimelineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentTimelineCountAggregateInputType | true
    }

  export interface IncidentTimelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentTimeline'], meta: { name: 'IncidentTimeline' } }
    /**
     * Find zero or one IncidentTimeline that matches the filter.
     * @param {IncidentTimelineFindUniqueArgs} args - Arguments to find a IncidentTimeline
     * @example
     * // Get one IncidentTimeline
     * const incidentTimeline = await prisma.incidentTimeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentTimelineFindUniqueArgs>(args: SelectSubset<T, IncidentTimelineFindUniqueArgs<ExtArgs>>): Prisma__IncidentTimelineClient<$Result.GetResult<Prisma.$IncidentTimelinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentTimeline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentTimelineFindUniqueOrThrowArgs} args - Arguments to find a IncidentTimeline
     * @example
     * // Get one IncidentTimeline
     * const incidentTimeline = await prisma.incidentTimeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentTimelineFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentTimelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentTimelineClient<$Result.GetResult<Prisma.$IncidentTimelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentTimeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentTimelineFindFirstArgs} args - Arguments to find a IncidentTimeline
     * @example
     * // Get one IncidentTimeline
     * const incidentTimeline = await prisma.incidentTimeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentTimelineFindFirstArgs>(args?: SelectSubset<T, IncidentTimelineFindFirstArgs<ExtArgs>>): Prisma__IncidentTimelineClient<$Result.GetResult<Prisma.$IncidentTimelinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentTimeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentTimelineFindFirstOrThrowArgs} args - Arguments to find a IncidentTimeline
     * @example
     * // Get one IncidentTimeline
     * const incidentTimeline = await prisma.incidentTimeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentTimelineFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentTimelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentTimelineClient<$Result.GetResult<Prisma.$IncidentTimelinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentTimelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentTimelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentTimelines
     * const incidentTimelines = await prisma.incidentTimeline.findMany()
     * 
     * // Get first 10 IncidentTimelines
     * const incidentTimelines = await prisma.incidentTimeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentTimelineWithIdOnly = await prisma.incidentTimeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentTimelineFindManyArgs>(args?: SelectSubset<T, IncidentTimelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentTimelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentTimeline.
     * @param {IncidentTimelineCreateArgs} args - Arguments to create a IncidentTimeline.
     * @example
     * // Create one IncidentTimeline
     * const IncidentTimeline = await prisma.incidentTimeline.create({
     *   data: {
     *     // ... data to create a IncidentTimeline
     *   }
     * })
     * 
     */
    create<T extends IncidentTimelineCreateArgs>(args: SelectSubset<T, IncidentTimelineCreateArgs<ExtArgs>>): Prisma__IncidentTimelineClient<$Result.GetResult<Prisma.$IncidentTimelinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentTimelines.
     * @param {IncidentTimelineCreateManyArgs} args - Arguments to create many IncidentTimelines.
     * @example
     * // Create many IncidentTimelines
     * const incidentTimeline = await prisma.incidentTimeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentTimelineCreateManyArgs>(args?: SelectSubset<T, IncidentTimelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IncidentTimeline.
     * @param {IncidentTimelineDeleteArgs} args - Arguments to delete one IncidentTimeline.
     * @example
     * // Delete one IncidentTimeline
     * const IncidentTimeline = await prisma.incidentTimeline.delete({
     *   where: {
     *     // ... filter to delete one IncidentTimeline
     *   }
     * })
     * 
     */
    delete<T extends IncidentTimelineDeleteArgs>(args: SelectSubset<T, IncidentTimelineDeleteArgs<ExtArgs>>): Prisma__IncidentTimelineClient<$Result.GetResult<Prisma.$IncidentTimelinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentTimeline.
     * @param {IncidentTimelineUpdateArgs} args - Arguments to update one IncidentTimeline.
     * @example
     * // Update one IncidentTimeline
     * const incidentTimeline = await prisma.incidentTimeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentTimelineUpdateArgs>(args: SelectSubset<T, IncidentTimelineUpdateArgs<ExtArgs>>): Prisma__IncidentTimelineClient<$Result.GetResult<Prisma.$IncidentTimelinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentTimelines.
     * @param {IncidentTimelineDeleteManyArgs} args - Arguments to filter IncidentTimelines to delete.
     * @example
     * // Delete a few IncidentTimelines
     * const { count } = await prisma.incidentTimeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentTimelineDeleteManyArgs>(args?: SelectSubset<T, IncidentTimelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentTimelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentTimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentTimelines
     * const incidentTimeline = await prisma.incidentTimeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentTimelineUpdateManyArgs>(args: SelectSubset<T, IncidentTimelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IncidentTimeline.
     * @param {IncidentTimelineUpsertArgs} args - Arguments to update or create a IncidentTimeline.
     * @example
     * // Update or create a IncidentTimeline
     * const incidentTimeline = await prisma.incidentTimeline.upsert({
     *   create: {
     *     // ... data to create a IncidentTimeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentTimeline we want to update
     *   }
     * })
     */
    upsert<T extends IncidentTimelineUpsertArgs>(args: SelectSubset<T, IncidentTimelineUpsertArgs<ExtArgs>>): Prisma__IncidentTimelineClient<$Result.GetResult<Prisma.$IncidentTimelinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentTimelines that matches the filter.
     * @param {IncidentTimelineFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const incidentTimeline = await prisma.incidentTimeline.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: IncidentTimelineFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a IncidentTimeline.
     * @param {IncidentTimelineAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const incidentTimeline = await prisma.incidentTimeline.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: IncidentTimelineAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of IncidentTimelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentTimelineCountArgs} args - Arguments to filter IncidentTimelines to count.
     * @example
     * // Count the number of IncidentTimelines
     * const count = await prisma.incidentTimeline.count({
     *   where: {
     *     // ... the filter for the IncidentTimelines we want to count
     *   }
     * })
    **/
    count<T extends IncidentTimelineCountArgs>(
      args?: Subset<T, IncidentTimelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentTimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentTimeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentTimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IncidentTimelineAggregateArgs>(args: Subset<T, IncidentTimelineAggregateArgs>): Prisma.PrismaPromise<GetIncidentTimelineAggregateType<T>>

    /**
     * Group by IncidentTimeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentTimelineGroupByArgs} args - Group by arguments.
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
      T extends IncidentTimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentTimelineGroupByArgs['orderBy'] }
        : { orderBy?: IncidentTimelineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IncidentTimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentTimeline model
   */
  readonly fields: IncidentTimelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentTimeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentTimelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IncidentTimeline model
   */
  interface IncidentTimelineFieldRefs {
    readonly id: FieldRef<"IncidentTimeline", 'String'>
    readonly incidentId: FieldRef<"IncidentTimeline", 'String'>
    readonly action: FieldRef<"IncidentTimeline", 'String'>
    readonly actor: FieldRef<"IncidentTimeline", 'String'>
    readonly details: FieldRef<"IncidentTimeline", 'String'>
    readonly createdAt: FieldRef<"IncidentTimeline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentTimeline findUnique
   */
  export type IncidentTimelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
    /**
     * Filter, which IncidentTimeline to fetch.
     */
    where: IncidentTimelineWhereUniqueInput
  }

  /**
   * IncidentTimeline findUniqueOrThrow
   */
  export type IncidentTimelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
    /**
     * Filter, which IncidentTimeline to fetch.
     */
    where: IncidentTimelineWhereUniqueInput
  }

  /**
   * IncidentTimeline findFirst
   */
  export type IncidentTimelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
    /**
     * Filter, which IncidentTimeline to fetch.
     */
    where?: IncidentTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentTimelines to fetch.
     */
    orderBy?: IncidentTimelineOrderByWithRelationInput | IncidentTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentTimelines.
     */
    cursor?: IncidentTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentTimelines.
     */
    distinct?: IncidentTimelineScalarFieldEnum | IncidentTimelineScalarFieldEnum[]
  }

  /**
   * IncidentTimeline findFirstOrThrow
   */
  export type IncidentTimelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
    /**
     * Filter, which IncidentTimeline to fetch.
     */
    where?: IncidentTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentTimelines to fetch.
     */
    orderBy?: IncidentTimelineOrderByWithRelationInput | IncidentTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentTimelines.
     */
    cursor?: IncidentTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentTimelines.
     */
    distinct?: IncidentTimelineScalarFieldEnum | IncidentTimelineScalarFieldEnum[]
  }

  /**
   * IncidentTimeline findMany
   */
  export type IncidentTimelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
    /**
     * Filter, which IncidentTimelines to fetch.
     */
    where?: IncidentTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentTimelines to fetch.
     */
    orderBy?: IncidentTimelineOrderByWithRelationInput | IncidentTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentTimelines.
     */
    cursor?: IncidentTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentTimelines.
     */
    skip?: number
    distinct?: IncidentTimelineScalarFieldEnum | IncidentTimelineScalarFieldEnum[]
  }

  /**
   * IncidentTimeline create
   */
  export type IncidentTimelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentTimeline.
     */
    data: XOR<IncidentTimelineCreateInput, IncidentTimelineUncheckedCreateInput>
  }

  /**
   * IncidentTimeline createMany
   */
  export type IncidentTimelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentTimelines.
     */
    data: IncidentTimelineCreateManyInput | IncidentTimelineCreateManyInput[]
  }

  /**
   * IncidentTimeline update
   */
  export type IncidentTimelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentTimeline.
     */
    data: XOR<IncidentTimelineUpdateInput, IncidentTimelineUncheckedUpdateInput>
    /**
     * Choose, which IncidentTimeline to update.
     */
    where: IncidentTimelineWhereUniqueInput
  }

  /**
   * IncidentTimeline updateMany
   */
  export type IncidentTimelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentTimelines.
     */
    data: XOR<IncidentTimelineUpdateManyMutationInput, IncidentTimelineUncheckedUpdateManyInput>
    /**
     * Filter which IncidentTimelines to update
     */
    where?: IncidentTimelineWhereInput
    /**
     * Limit how many IncidentTimelines to update.
     */
    limit?: number
  }

  /**
   * IncidentTimeline upsert
   */
  export type IncidentTimelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentTimeline to update in case it exists.
     */
    where: IncidentTimelineWhereUniqueInput
    /**
     * In case the IncidentTimeline found by the `where` argument doesn't exist, create a new IncidentTimeline with this data.
     */
    create: XOR<IncidentTimelineCreateInput, IncidentTimelineUncheckedCreateInput>
    /**
     * In case the IncidentTimeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentTimelineUpdateInput, IncidentTimelineUncheckedUpdateInput>
  }

  /**
   * IncidentTimeline delete
   */
  export type IncidentTimelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
    /**
     * Filter which IncidentTimeline to delete.
     */
    where: IncidentTimelineWhereUniqueInput
  }

  /**
   * IncidentTimeline deleteMany
   */
  export type IncidentTimelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentTimelines to delete
     */
    where?: IncidentTimelineWhereInput
    /**
     * Limit how many IncidentTimelines to delete.
     */
    limit?: number
  }

  /**
   * IncidentTimeline findRaw
   */
  export type IncidentTimelineFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * IncidentTimeline aggregateRaw
   */
  export type IncidentTimelineAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * IncidentTimeline without action
   */
  export type IncidentTimelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentTimeline
     */
    select?: IncidentTimelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentTimeline
     */
    omit?: IncidentTimelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentTimelineInclude<ExtArgs> | null
  }


  /**
   * Model Responder
   */

  export type AggregateResponder = {
    _count: ResponderCountAggregateOutputType | null
    _avg: ResponderAvgAggregateOutputType | null
    _sum: ResponderSumAggregateOutputType | null
    _min: ResponderMinAggregateOutputType | null
    _max: ResponderMaxAggregateOutputType | null
  }

  export type ResponderAvgAggregateOutputType = {
    location_lat: number | null
    location_lon: number | null
  }

  export type ResponderSumAggregateOutputType = {
    location_lat: number | null
    location_lon: number | null
  }

  export type ResponderMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: string | null
    email: string | null
    phone: string | null
    skills: string | null
    location_lat: number | null
    location_lon: number | null
    availability: boolean | null
    telegramChatId: string | null
    telegramUsername: string | null
    telegramLinkToken: string | null
    telegramConnectedAt: Date | null
    lastHeartbeat: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResponderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: string | null
    email: string | null
    phone: string | null
    skills: string | null
    location_lat: number | null
    location_lon: number | null
    availability: boolean | null
    telegramChatId: string | null
    telegramUsername: string | null
    telegramLinkToken: string | null
    telegramConnectedAt: Date | null
    lastHeartbeat: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResponderCountAggregateOutputType = {
    id: number
    name: number
    status: number
    email: number
    phone: number
    skills: number
    location_lat: number
    location_lon: number
    availability: number
    telegramChatId: number
    telegramUsername: number
    telegramLinkToken: number
    telegramConnectedAt: number
    lastHeartbeat: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResponderAvgAggregateInputType = {
    location_lat?: true
    location_lon?: true
  }

  export type ResponderSumAggregateInputType = {
    location_lat?: true
    location_lon?: true
  }

  export type ResponderMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    email?: true
    phone?: true
    skills?: true
    location_lat?: true
    location_lon?: true
    availability?: true
    telegramChatId?: true
    telegramUsername?: true
    telegramLinkToken?: true
    telegramConnectedAt?: true
    lastHeartbeat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResponderMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    email?: true
    phone?: true
    skills?: true
    location_lat?: true
    location_lon?: true
    availability?: true
    telegramChatId?: true
    telegramUsername?: true
    telegramLinkToken?: true
    telegramConnectedAt?: true
    lastHeartbeat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResponderCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    email?: true
    phone?: true
    skills?: true
    location_lat?: true
    location_lon?: true
    availability?: true
    telegramChatId?: true
    telegramUsername?: true
    telegramLinkToken?: true
    telegramConnectedAt?: true
    lastHeartbeat?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResponderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responder to aggregate.
     */
    where?: ResponderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responders to fetch.
     */
    orderBy?: ResponderOrderByWithRelationInput | ResponderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responders
    **/
    _count?: true | ResponderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponderMaxAggregateInputType
  }

  export type GetResponderAggregateType<T extends ResponderAggregateArgs> = {
        [P in keyof T & keyof AggregateResponder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponder[P]>
      : GetScalarType<T[P], AggregateResponder[P]>
  }




  export type ResponderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponderWhereInput
    orderBy?: ResponderOrderByWithAggregationInput | ResponderOrderByWithAggregationInput[]
    by: ResponderScalarFieldEnum[] | ResponderScalarFieldEnum
    having?: ResponderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponderCountAggregateInputType | true
    _avg?: ResponderAvgAggregateInputType
    _sum?: ResponderSumAggregateInputType
    _min?: ResponderMinAggregateInputType
    _max?: ResponderMaxAggregateInputType
  }

  export type ResponderGroupByOutputType = {
    id: string
    name: string
    status: string
    email: string
    phone: string | null
    skills: string
    location_lat: number | null
    location_lon: number | null
    availability: boolean
    telegramChatId: string | null
    telegramUsername: string | null
    telegramLinkToken: string | null
    telegramConnectedAt: Date | null
    lastHeartbeat: Date
    createdAt: Date
    updatedAt: Date
    _count: ResponderCountAggregateOutputType | null
    _avg: ResponderAvgAggregateOutputType | null
    _sum: ResponderSumAggregateOutputType | null
    _min: ResponderMinAggregateOutputType | null
    _max: ResponderMaxAggregateOutputType | null
  }

  type GetResponderGroupByPayload<T extends ResponderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponderGroupByOutputType[P]>
            : GetScalarType<T[P], ResponderGroupByOutputType[P]>
        }
      >
    >


  export type ResponderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    email?: boolean
    phone?: boolean
    skills?: boolean
    location_lat?: boolean
    location_lon?: boolean
    availability?: boolean
    telegramChatId?: boolean
    telegramUsername?: boolean
    telegramLinkToken?: boolean
    telegramConnectedAt?: boolean
    lastHeartbeat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedIncidents?: boolean | Responder$assignedIncidentsArgs<ExtArgs>
    capabilities?: boolean | Responder$capabilitiesArgs<ExtArgs>
    _count?: boolean | ResponderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responder"]>



  export type ResponderSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    email?: boolean
    phone?: boolean
    skills?: boolean
    location_lat?: boolean
    location_lon?: boolean
    availability?: boolean
    telegramChatId?: boolean
    telegramUsername?: boolean
    telegramLinkToken?: boolean
    telegramConnectedAt?: boolean
    lastHeartbeat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResponderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "email" | "phone" | "skills" | "location_lat" | "location_lon" | "availability" | "telegramChatId" | "telegramUsername" | "telegramLinkToken" | "telegramConnectedAt" | "lastHeartbeat" | "createdAt" | "updatedAt", ExtArgs["result"]["responder"]>
  export type ResponderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedIncidents?: boolean | Responder$assignedIncidentsArgs<ExtArgs>
    capabilities?: boolean | Responder$capabilitiesArgs<ExtArgs>
    _count?: boolean | ResponderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ResponderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Responder"
    objects: {
      assignedIncidents: Prisma.$IncidentPayload<ExtArgs>[]
      capabilities: Prisma.$ResponderCapabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: string
      email: string
      phone: string | null
      skills: string
      location_lat: number | null
      location_lon: number | null
      availability: boolean
      telegramChatId: string | null
      telegramUsername: string | null
      telegramLinkToken: string | null
      telegramConnectedAt: Date | null
      lastHeartbeat: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["responder"]>
    composites: {}
  }

  type ResponderGetPayload<S extends boolean | null | undefined | ResponderDefaultArgs> = $Result.GetResult<Prisma.$ResponderPayload, S>

  type ResponderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResponderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponderCountAggregateInputType | true
    }

  export interface ResponderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Responder'], meta: { name: 'Responder' } }
    /**
     * Find zero or one Responder that matches the filter.
     * @param {ResponderFindUniqueArgs} args - Arguments to find a Responder
     * @example
     * // Get one Responder
     * const responder = await prisma.responder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponderFindUniqueArgs>(args: SelectSubset<T, ResponderFindUniqueArgs<ExtArgs>>): Prisma__ResponderClient<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Responder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponderFindUniqueOrThrowArgs} args - Arguments to find a Responder
     * @example
     * // Get one Responder
     * const responder = await prisma.responder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponderFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponderClient<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Responder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderFindFirstArgs} args - Arguments to find a Responder
     * @example
     * // Get one Responder
     * const responder = await prisma.responder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponderFindFirstArgs>(args?: SelectSubset<T, ResponderFindFirstArgs<ExtArgs>>): Prisma__ResponderClient<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Responder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderFindFirstOrThrowArgs} args - Arguments to find a Responder
     * @example
     * // Get one Responder
     * const responder = await prisma.responder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponderFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponderClient<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Responders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responders
     * const responders = await prisma.responder.findMany()
     * 
     * // Get first 10 Responders
     * const responders = await prisma.responder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responderWithIdOnly = await prisma.responder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponderFindManyArgs>(args?: SelectSubset<T, ResponderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Responder.
     * @param {ResponderCreateArgs} args - Arguments to create a Responder.
     * @example
     * // Create one Responder
     * const Responder = await prisma.responder.create({
     *   data: {
     *     // ... data to create a Responder
     *   }
     * })
     * 
     */
    create<T extends ResponderCreateArgs>(args: SelectSubset<T, ResponderCreateArgs<ExtArgs>>): Prisma__ResponderClient<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Responders.
     * @param {ResponderCreateManyArgs} args - Arguments to create many Responders.
     * @example
     * // Create many Responders
     * const responder = await prisma.responder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponderCreateManyArgs>(args?: SelectSubset<T, ResponderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Responder.
     * @param {ResponderDeleteArgs} args - Arguments to delete one Responder.
     * @example
     * // Delete one Responder
     * const Responder = await prisma.responder.delete({
     *   where: {
     *     // ... filter to delete one Responder
     *   }
     * })
     * 
     */
    delete<T extends ResponderDeleteArgs>(args: SelectSubset<T, ResponderDeleteArgs<ExtArgs>>): Prisma__ResponderClient<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Responder.
     * @param {ResponderUpdateArgs} args - Arguments to update one Responder.
     * @example
     * // Update one Responder
     * const responder = await prisma.responder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponderUpdateArgs>(args: SelectSubset<T, ResponderUpdateArgs<ExtArgs>>): Prisma__ResponderClient<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Responders.
     * @param {ResponderDeleteManyArgs} args - Arguments to filter Responders to delete.
     * @example
     * // Delete a few Responders
     * const { count } = await prisma.responder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponderDeleteManyArgs>(args?: SelectSubset<T, ResponderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responders
     * const responder = await prisma.responder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponderUpdateManyArgs>(args: SelectSubset<T, ResponderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Responder.
     * @param {ResponderUpsertArgs} args - Arguments to update or create a Responder.
     * @example
     * // Update or create a Responder
     * const responder = await prisma.responder.upsert({
     *   create: {
     *     // ... data to create a Responder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Responder we want to update
     *   }
     * })
     */
    upsert<T extends ResponderUpsertArgs>(args: SelectSubset<T, ResponderUpsertArgs<ExtArgs>>): Prisma__ResponderClient<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Responders that matches the filter.
     * @param {ResponderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const responder = await prisma.responder.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ResponderFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Responder.
     * @param {ResponderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const responder = await prisma.responder.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ResponderAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Responders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderCountArgs} args - Arguments to filter Responders to count.
     * @example
     * // Count the number of Responders
     * const count = await prisma.responder.count({
     *   where: {
     *     // ... the filter for the Responders we want to count
     *   }
     * })
    **/
    count<T extends ResponderCountArgs>(
      args?: Subset<T, ResponderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Responder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponderAggregateArgs>(args: Subset<T, ResponderAggregateArgs>): Prisma.PrismaPromise<GetResponderAggregateType<T>>

    /**
     * Group by Responder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderGroupByArgs} args - Group by arguments.
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
      T extends ResponderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponderGroupByArgs['orderBy'] }
        : { orderBy?: ResponderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResponderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Responder model
   */
  readonly fields: ResponderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Responder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedIncidents<T extends Responder$assignedIncidentsArgs<ExtArgs> = {}>(args?: Subset<T, Responder$assignedIncidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    capabilities<T extends Responder$capabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Responder$capabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponderCapabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Responder model
   */
  interface ResponderFieldRefs {
    readonly id: FieldRef<"Responder", 'String'>
    readonly name: FieldRef<"Responder", 'String'>
    readonly status: FieldRef<"Responder", 'String'>
    readonly email: FieldRef<"Responder", 'String'>
    readonly phone: FieldRef<"Responder", 'String'>
    readonly skills: FieldRef<"Responder", 'String'>
    readonly location_lat: FieldRef<"Responder", 'Float'>
    readonly location_lon: FieldRef<"Responder", 'Float'>
    readonly availability: FieldRef<"Responder", 'Boolean'>
    readonly telegramChatId: FieldRef<"Responder", 'String'>
    readonly telegramUsername: FieldRef<"Responder", 'String'>
    readonly telegramLinkToken: FieldRef<"Responder", 'String'>
    readonly telegramConnectedAt: FieldRef<"Responder", 'DateTime'>
    readonly lastHeartbeat: FieldRef<"Responder", 'DateTime'>
    readonly createdAt: FieldRef<"Responder", 'DateTime'>
    readonly updatedAt: FieldRef<"Responder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Responder findUnique
   */
  export type ResponderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
    /**
     * Filter, which Responder to fetch.
     */
    where: ResponderWhereUniqueInput
  }

  /**
   * Responder findUniqueOrThrow
   */
  export type ResponderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
    /**
     * Filter, which Responder to fetch.
     */
    where: ResponderWhereUniqueInput
  }

  /**
   * Responder findFirst
   */
  export type ResponderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
    /**
     * Filter, which Responder to fetch.
     */
    where?: ResponderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responders to fetch.
     */
    orderBy?: ResponderOrderByWithRelationInput | ResponderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responders.
     */
    cursor?: ResponderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responders.
     */
    distinct?: ResponderScalarFieldEnum | ResponderScalarFieldEnum[]
  }

  /**
   * Responder findFirstOrThrow
   */
  export type ResponderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
    /**
     * Filter, which Responder to fetch.
     */
    where?: ResponderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responders to fetch.
     */
    orderBy?: ResponderOrderByWithRelationInput | ResponderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responders.
     */
    cursor?: ResponderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responders.
     */
    distinct?: ResponderScalarFieldEnum | ResponderScalarFieldEnum[]
  }

  /**
   * Responder findMany
   */
  export type ResponderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
    /**
     * Filter, which Responders to fetch.
     */
    where?: ResponderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responders to fetch.
     */
    orderBy?: ResponderOrderByWithRelationInput | ResponderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responders.
     */
    cursor?: ResponderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responders.
     */
    skip?: number
    distinct?: ResponderScalarFieldEnum | ResponderScalarFieldEnum[]
  }

  /**
   * Responder create
   */
  export type ResponderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
    /**
     * The data needed to create a Responder.
     */
    data: XOR<ResponderCreateInput, ResponderUncheckedCreateInput>
  }

  /**
   * Responder createMany
   */
  export type ResponderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responders.
     */
    data: ResponderCreateManyInput | ResponderCreateManyInput[]
  }

  /**
   * Responder update
   */
  export type ResponderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
    /**
     * The data needed to update a Responder.
     */
    data: XOR<ResponderUpdateInput, ResponderUncheckedUpdateInput>
    /**
     * Choose, which Responder to update.
     */
    where: ResponderWhereUniqueInput
  }

  /**
   * Responder updateMany
   */
  export type ResponderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responders.
     */
    data: XOR<ResponderUpdateManyMutationInput, ResponderUncheckedUpdateManyInput>
    /**
     * Filter which Responders to update
     */
    where?: ResponderWhereInput
    /**
     * Limit how many Responders to update.
     */
    limit?: number
  }

  /**
   * Responder upsert
   */
  export type ResponderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
    /**
     * The filter to search for the Responder to update in case it exists.
     */
    where: ResponderWhereUniqueInput
    /**
     * In case the Responder found by the `where` argument doesn't exist, create a new Responder with this data.
     */
    create: XOR<ResponderCreateInput, ResponderUncheckedCreateInput>
    /**
     * In case the Responder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponderUpdateInput, ResponderUncheckedUpdateInput>
  }

  /**
   * Responder delete
   */
  export type ResponderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
    /**
     * Filter which Responder to delete.
     */
    where: ResponderWhereUniqueInput
  }

  /**
   * Responder deleteMany
   */
  export type ResponderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responders to delete
     */
    where?: ResponderWhereInput
    /**
     * Limit how many Responders to delete.
     */
    limit?: number
  }

  /**
   * Responder findRaw
   */
  export type ResponderFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Responder aggregateRaw
   */
  export type ResponderAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Responder.assignedIncidents
   */
  export type Responder$assignedIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Responder.capabilities
   */
  export type Responder$capabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
    where?: ResponderCapabilityWhereInput
    orderBy?: ResponderCapabilityOrderByWithRelationInput | ResponderCapabilityOrderByWithRelationInput[]
    cursor?: ResponderCapabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponderCapabilityScalarFieldEnum | ResponderCapabilityScalarFieldEnum[]
  }

  /**
   * Responder without action
   */
  export type ResponderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responder
     */
    select?: ResponderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responder
     */
    omit?: ResponderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderInclude<ExtArgs> | null
  }


  /**
   * Model ResponderCapability
   */

  export type AggregateResponderCapability = {
    _count: ResponderCapabilityCountAggregateOutputType | null
    _min: ResponderCapabilityMinAggregateOutputType | null
    _max: ResponderCapabilityMaxAggregateOutputType | null
  }

  export type ResponderCapabilityMinAggregateOutputType = {
    id: string | null
    responderId: string | null
    capability: string | null
    level: string | null
    certified: boolean | null
    createdAt: Date | null
  }

  export type ResponderCapabilityMaxAggregateOutputType = {
    id: string | null
    responderId: string | null
    capability: string | null
    level: string | null
    certified: boolean | null
    createdAt: Date | null
  }

  export type ResponderCapabilityCountAggregateOutputType = {
    id: number
    responderId: number
    capability: number
    level: number
    certified: number
    createdAt: number
    _all: number
  }


  export type ResponderCapabilityMinAggregateInputType = {
    id?: true
    responderId?: true
    capability?: true
    level?: true
    certified?: true
    createdAt?: true
  }

  export type ResponderCapabilityMaxAggregateInputType = {
    id?: true
    responderId?: true
    capability?: true
    level?: true
    certified?: true
    createdAt?: true
  }

  export type ResponderCapabilityCountAggregateInputType = {
    id?: true
    responderId?: true
    capability?: true
    level?: true
    certified?: true
    createdAt?: true
    _all?: true
  }

  export type ResponderCapabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResponderCapability to aggregate.
     */
    where?: ResponderCapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponderCapabilities to fetch.
     */
    orderBy?: ResponderCapabilityOrderByWithRelationInput | ResponderCapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponderCapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponderCapabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponderCapabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResponderCapabilities
    **/
    _count?: true | ResponderCapabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponderCapabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponderCapabilityMaxAggregateInputType
  }

  export type GetResponderCapabilityAggregateType<T extends ResponderCapabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateResponderCapability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponderCapability[P]>
      : GetScalarType<T[P], AggregateResponderCapability[P]>
  }




  export type ResponderCapabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponderCapabilityWhereInput
    orderBy?: ResponderCapabilityOrderByWithAggregationInput | ResponderCapabilityOrderByWithAggregationInput[]
    by: ResponderCapabilityScalarFieldEnum[] | ResponderCapabilityScalarFieldEnum
    having?: ResponderCapabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponderCapabilityCountAggregateInputType | true
    _min?: ResponderCapabilityMinAggregateInputType
    _max?: ResponderCapabilityMaxAggregateInputType
  }

  export type ResponderCapabilityGroupByOutputType = {
    id: string
    responderId: string
    capability: string
    level: string
    certified: boolean
    createdAt: Date
    _count: ResponderCapabilityCountAggregateOutputType | null
    _min: ResponderCapabilityMinAggregateOutputType | null
    _max: ResponderCapabilityMaxAggregateOutputType | null
  }

  type GetResponderCapabilityGroupByPayload<T extends ResponderCapabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponderCapabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponderCapabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponderCapabilityGroupByOutputType[P]>
            : GetScalarType<T[P], ResponderCapabilityGroupByOutputType[P]>
        }
      >
    >


  export type ResponderCapabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responderId?: boolean
    capability?: boolean
    level?: boolean
    certified?: boolean
    createdAt?: boolean
    responder?: boolean | ResponderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responderCapability"]>



  export type ResponderCapabilitySelectScalar = {
    id?: boolean
    responderId?: boolean
    capability?: boolean
    level?: boolean
    certified?: boolean
    createdAt?: boolean
  }

  export type ResponderCapabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "responderId" | "capability" | "level" | "certified" | "createdAt", ExtArgs["result"]["responderCapability"]>
  export type ResponderCapabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responder?: boolean | ResponderDefaultArgs<ExtArgs>
  }

  export type $ResponderCapabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResponderCapability"
    objects: {
      responder: Prisma.$ResponderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      responderId: string
      capability: string
      level: string
      certified: boolean
      createdAt: Date
    }, ExtArgs["result"]["responderCapability"]>
    composites: {}
  }

  type ResponderCapabilityGetPayload<S extends boolean | null | undefined | ResponderCapabilityDefaultArgs> = $Result.GetResult<Prisma.$ResponderCapabilityPayload, S>

  type ResponderCapabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResponderCapabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponderCapabilityCountAggregateInputType | true
    }

  export interface ResponderCapabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResponderCapability'], meta: { name: 'ResponderCapability' } }
    /**
     * Find zero or one ResponderCapability that matches the filter.
     * @param {ResponderCapabilityFindUniqueArgs} args - Arguments to find a ResponderCapability
     * @example
     * // Get one ResponderCapability
     * const responderCapability = await prisma.responderCapability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponderCapabilityFindUniqueArgs>(args: SelectSubset<T, ResponderCapabilityFindUniqueArgs<ExtArgs>>): Prisma__ResponderCapabilityClient<$Result.GetResult<Prisma.$ResponderCapabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResponderCapability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponderCapabilityFindUniqueOrThrowArgs} args - Arguments to find a ResponderCapability
     * @example
     * // Get one ResponderCapability
     * const responderCapability = await prisma.responderCapability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponderCapabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponderCapabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponderCapabilityClient<$Result.GetResult<Prisma.$ResponderCapabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResponderCapability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderCapabilityFindFirstArgs} args - Arguments to find a ResponderCapability
     * @example
     * // Get one ResponderCapability
     * const responderCapability = await prisma.responderCapability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponderCapabilityFindFirstArgs>(args?: SelectSubset<T, ResponderCapabilityFindFirstArgs<ExtArgs>>): Prisma__ResponderCapabilityClient<$Result.GetResult<Prisma.$ResponderCapabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResponderCapability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderCapabilityFindFirstOrThrowArgs} args - Arguments to find a ResponderCapability
     * @example
     * // Get one ResponderCapability
     * const responderCapability = await prisma.responderCapability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponderCapabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponderCapabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponderCapabilityClient<$Result.GetResult<Prisma.$ResponderCapabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResponderCapabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderCapabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResponderCapabilities
     * const responderCapabilities = await prisma.responderCapability.findMany()
     * 
     * // Get first 10 ResponderCapabilities
     * const responderCapabilities = await prisma.responderCapability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responderCapabilityWithIdOnly = await prisma.responderCapability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponderCapabilityFindManyArgs>(args?: SelectSubset<T, ResponderCapabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponderCapabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResponderCapability.
     * @param {ResponderCapabilityCreateArgs} args - Arguments to create a ResponderCapability.
     * @example
     * // Create one ResponderCapability
     * const ResponderCapability = await prisma.responderCapability.create({
     *   data: {
     *     // ... data to create a ResponderCapability
     *   }
     * })
     * 
     */
    create<T extends ResponderCapabilityCreateArgs>(args: SelectSubset<T, ResponderCapabilityCreateArgs<ExtArgs>>): Prisma__ResponderCapabilityClient<$Result.GetResult<Prisma.$ResponderCapabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResponderCapabilities.
     * @param {ResponderCapabilityCreateManyArgs} args - Arguments to create many ResponderCapabilities.
     * @example
     * // Create many ResponderCapabilities
     * const responderCapability = await prisma.responderCapability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponderCapabilityCreateManyArgs>(args?: SelectSubset<T, ResponderCapabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResponderCapability.
     * @param {ResponderCapabilityDeleteArgs} args - Arguments to delete one ResponderCapability.
     * @example
     * // Delete one ResponderCapability
     * const ResponderCapability = await prisma.responderCapability.delete({
     *   where: {
     *     // ... filter to delete one ResponderCapability
     *   }
     * })
     * 
     */
    delete<T extends ResponderCapabilityDeleteArgs>(args: SelectSubset<T, ResponderCapabilityDeleteArgs<ExtArgs>>): Prisma__ResponderCapabilityClient<$Result.GetResult<Prisma.$ResponderCapabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResponderCapability.
     * @param {ResponderCapabilityUpdateArgs} args - Arguments to update one ResponderCapability.
     * @example
     * // Update one ResponderCapability
     * const responderCapability = await prisma.responderCapability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponderCapabilityUpdateArgs>(args: SelectSubset<T, ResponderCapabilityUpdateArgs<ExtArgs>>): Prisma__ResponderCapabilityClient<$Result.GetResult<Prisma.$ResponderCapabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResponderCapabilities.
     * @param {ResponderCapabilityDeleteManyArgs} args - Arguments to filter ResponderCapabilities to delete.
     * @example
     * // Delete a few ResponderCapabilities
     * const { count } = await prisma.responderCapability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponderCapabilityDeleteManyArgs>(args?: SelectSubset<T, ResponderCapabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResponderCapabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderCapabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResponderCapabilities
     * const responderCapability = await prisma.responderCapability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponderCapabilityUpdateManyArgs>(args: SelectSubset<T, ResponderCapabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResponderCapability.
     * @param {ResponderCapabilityUpsertArgs} args - Arguments to update or create a ResponderCapability.
     * @example
     * // Update or create a ResponderCapability
     * const responderCapability = await prisma.responderCapability.upsert({
     *   create: {
     *     // ... data to create a ResponderCapability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResponderCapability we want to update
     *   }
     * })
     */
    upsert<T extends ResponderCapabilityUpsertArgs>(args: SelectSubset<T, ResponderCapabilityUpsertArgs<ExtArgs>>): Prisma__ResponderCapabilityClient<$Result.GetResult<Prisma.$ResponderCapabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResponderCapabilities that matches the filter.
     * @param {ResponderCapabilityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const responderCapability = await prisma.responderCapability.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ResponderCapabilityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ResponderCapability.
     * @param {ResponderCapabilityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const responderCapability = await prisma.responderCapability.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ResponderCapabilityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ResponderCapabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderCapabilityCountArgs} args - Arguments to filter ResponderCapabilities to count.
     * @example
     * // Count the number of ResponderCapabilities
     * const count = await prisma.responderCapability.count({
     *   where: {
     *     // ... the filter for the ResponderCapabilities we want to count
     *   }
     * })
    **/
    count<T extends ResponderCapabilityCountArgs>(
      args?: Subset<T, ResponderCapabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponderCapabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResponderCapability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderCapabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponderCapabilityAggregateArgs>(args: Subset<T, ResponderCapabilityAggregateArgs>): Prisma.PrismaPromise<GetResponderCapabilityAggregateType<T>>

    /**
     * Group by ResponderCapability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponderCapabilityGroupByArgs} args - Group by arguments.
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
      T extends ResponderCapabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponderCapabilityGroupByArgs['orderBy'] }
        : { orderBy?: ResponderCapabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResponderCapabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponderCapabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResponderCapability model
   */
  readonly fields: ResponderCapabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResponderCapability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponderCapabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responder<T extends ResponderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResponderDefaultArgs<ExtArgs>>): Prisma__ResponderClient<$Result.GetResult<Prisma.$ResponderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResponderCapability model
   */
  interface ResponderCapabilityFieldRefs {
    readonly id: FieldRef<"ResponderCapability", 'String'>
    readonly responderId: FieldRef<"ResponderCapability", 'String'>
    readonly capability: FieldRef<"ResponderCapability", 'String'>
    readonly level: FieldRef<"ResponderCapability", 'String'>
    readonly certified: FieldRef<"ResponderCapability", 'Boolean'>
    readonly createdAt: FieldRef<"ResponderCapability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResponderCapability findUnique
   */
  export type ResponderCapabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
    /**
     * Filter, which ResponderCapability to fetch.
     */
    where: ResponderCapabilityWhereUniqueInput
  }

  /**
   * ResponderCapability findUniqueOrThrow
   */
  export type ResponderCapabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
    /**
     * Filter, which ResponderCapability to fetch.
     */
    where: ResponderCapabilityWhereUniqueInput
  }

  /**
   * ResponderCapability findFirst
   */
  export type ResponderCapabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
    /**
     * Filter, which ResponderCapability to fetch.
     */
    where?: ResponderCapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponderCapabilities to fetch.
     */
    orderBy?: ResponderCapabilityOrderByWithRelationInput | ResponderCapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResponderCapabilities.
     */
    cursor?: ResponderCapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponderCapabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponderCapabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResponderCapabilities.
     */
    distinct?: ResponderCapabilityScalarFieldEnum | ResponderCapabilityScalarFieldEnum[]
  }

  /**
   * ResponderCapability findFirstOrThrow
   */
  export type ResponderCapabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
    /**
     * Filter, which ResponderCapability to fetch.
     */
    where?: ResponderCapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponderCapabilities to fetch.
     */
    orderBy?: ResponderCapabilityOrderByWithRelationInput | ResponderCapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResponderCapabilities.
     */
    cursor?: ResponderCapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponderCapabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponderCapabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResponderCapabilities.
     */
    distinct?: ResponderCapabilityScalarFieldEnum | ResponderCapabilityScalarFieldEnum[]
  }

  /**
   * ResponderCapability findMany
   */
  export type ResponderCapabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
    /**
     * Filter, which ResponderCapabilities to fetch.
     */
    where?: ResponderCapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResponderCapabilities to fetch.
     */
    orderBy?: ResponderCapabilityOrderByWithRelationInput | ResponderCapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResponderCapabilities.
     */
    cursor?: ResponderCapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResponderCapabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResponderCapabilities.
     */
    skip?: number
    distinct?: ResponderCapabilityScalarFieldEnum | ResponderCapabilityScalarFieldEnum[]
  }

  /**
   * ResponderCapability create
   */
  export type ResponderCapabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a ResponderCapability.
     */
    data: XOR<ResponderCapabilityCreateInput, ResponderCapabilityUncheckedCreateInput>
  }

  /**
   * ResponderCapability createMany
   */
  export type ResponderCapabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResponderCapabilities.
     */
    data: ResponderCapabilityCreateManyInput | ResponderCapabilityCreateManyInput[]
  }

  /**
   * ResponderCapability update
   */
  export type ResponderCapabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a ResponderCapability.
     */
    data: XOR<ResponderCapabilityUpdateInput, ResponderCapabilityUncheckedUpdateInput>
    /**
     * Choose, which ResponderCapability to update.
     */
    where: ResponderCapabilityWhereUniqueInput
  }

  /**
   * ResponderCapability updateMany
   */
  export type ResponderCapabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResponderCapabilities.
     */
    data: XOR<ResponderCapabilityUpdateManyMutationInput, ResponderCapabilityUncheckedUpdateManyInput>
    /**
     * Filter which ResponderCapabilities to update
     */
    where?: ResponderCapabilityWhereInput
    /**
     * Limit how many ResponderCapabilities to update.
     */
    limit?: number
  }

  /**
   * ResponderCapability upsert
   */
  export type ResponderCapabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the ResponderCapability to update in case it exists.
     */
    where: ResponderCapabilityWhereUniqueInput
    /**
     * In case the ResponderCapability found by the `where` argument doesn't exist, create a new ResponderCapability with this data.
     */
    create: XOR<ResponderCapabilityCreateInput, ResponderCapabilityUncheckedCreateInput>
    /**
     * In case the ResponderCapability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponderCapabilityUpdateInput, ResponderCapabilityUncheckedUpdateInput>
  }

  /**
   * ResponderCapability delete
   */
  export type ResponderCapabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
    /**
     * Filter which ResponderCapability to delete.
     */
    where: ResponderCapabilityWhereUniqueInput
  }

  /**
   * ResponderCapability deleteMany
   */
  export type ResponderCapabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResponderCapabilities to delete
     */
    where?: ResponderCapabilityWhereInput
    /**
     * Limit how many ResponderCapabilities to delete.
     */
    limit?: number
  }

  /**
   * ResponderCapability findRaw
   */
  export type ResponderCapabilityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ResponderCapability aggregateRaw
   */
  export type ResponderCapabilityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ResponderCapability without action
   */
  export type ResponderCapabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponderCapability
     */
    select?: ResponderCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResponderCapability
     */
    omit?: ResponderCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponderCapabilityInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    actor: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    actor: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    timestamp: number
    actor: number
    action: number
    description: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    timestamp?: true
    actor?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    timestamp?: true
    actor?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    timestamp?: true
    actor?: true
    action?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    timestamp: Date
    actor: string
    action: string
    description: string
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    actor?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>



  export type AuditLogSelectScalar = {
    id?: boolean
    timestamp?: boolean
    actor?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "actor" | "action" | "description" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      actor: string
      action: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * @param {AuditLogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const auditLog = await prisma.auditLog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AuditLogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AuditLog.
     * @param {AuditLogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const auditLog = await prisma.auditLog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AuditLogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
    readonly actor: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly description: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog findRaw
   */
  export type AuditLogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AuditLog aggregateRaw
   */
  export type AuditLogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model SystemMetrics
   */

  export type AggregateSystemMetrics = {
    _count: SystemMetricsCountAggregateOutputType | null
    _avg: SystemMetricsAvgAggregateOutputType | null
    _sum: SystemMetricsSumAggregateOutputType | null
    _min: SystemMetricsMinAggregateOutputType | null
    _max: SystemMetricsMaxAggregateOutputType | null
  }

  export type SystemMetricsAvgAggregateOutputType = {
    activeIncidents: number | null
    responseTime: number | null
    successRate: number | null
    uptime: number | null
  }

  export type SystemMetricsSumAggregateOutputType = {
    activeIncidents: number | null
    responseTime: number | null
    successRate: number | null
    uptime: number | null
  }

  export type SystemMetricsMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    activeIncidents: number | null
    responseTime: number | null
    successRate: number | null
    systemHealth: string | null
    uptime: number | null
  }

  export type SystemMetricsMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    activeIncidents: number | null
    responseTime: number | null
    successRate: number | null
    systemHealth: string | null
    uptime: number | null
  }

  export type SystemMetricsCountAggregateOutputType = {
    id: number
    timestamp: number
    activeIncidents: number
    responseTime: number
    successRate: number
    systemHealth: number
    uptime: number
    _all: number
  }


  export type SystemMetricsAvgAggregateInputType = {
    activeIncidents?: true
    responseTime?: true
    successRate?: true
    uptime?: true
  }

  export type SystemMetricsSumAggregateInputType = {
    activeIncidents?: true
    responseTime?: true
    successRate?: true
    uptime?: true
  }

  export type SystemMetricsMinAggregateInputType = {
    id?: true
    timestamp?: true
    activeIncidents?: true
    responseTime?: true
    successRate?: true
    systemHealth?: true
    uptime?: true
  }

  export type SystemMetricsMaxAggregateInputType = {
    id?: true
    timestamp?: true
    activeIncidents?: true
    responseTime?: true
    successRate?: true
    systemHealth?: true
    uptime?: true
  }

  export type SystemMetricsCountAggregateInputType = {
    id?: true
    timestamp?: true
    activeIncidents?: true
    responseTime?: true
    successRate?: true
    systemHealth?: true
    uptime?: true
    _all?: true
  }

  export type SystemMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemMetrics to aggregate.
     */
    where?: SystemMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMetrics to fetch.
     */
    orderBy?: SystemMetricsOrderByWithRelationInput | SystemMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemMetrics
    **/
    _count?: true | SystemMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemMetricsMaxAggregateInputType
  }

  export type GetSystemMetricsAggregateType<T extends SystemMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemMetrics[P]>
      : GetScalarType<T[P], AggregateSystemMetrics[P]>
  }




  export type SystemMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemMetricsWhereInput
    orderBy?: SystemMetricsOrderByWithAggregationInput | SystemMetricsOrderByWithAggregationInput[]
    by: SystemMetricsScalarFieldEnum[] | SystemMetricsScalarFieldEnum
    having?: SystemMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemMetricsCountAggregateInputType | true
    _avg?: SystemMetricsAvgAggregateInputType
    _sum?: SystemMetricsSumAggregateInputType
    _min?: SystemMetricsMinAggregateInputType
    _max?: SystemMetricsMaxAggregateInputType
  }

  export type SystemMetricsGroupByOutputType = {
    id: string
    timestamp: Date
    activeIncidents: number
    responseTime: number
    successRate: number
    systemHealth: string
    uptime: number
    _count: SystemMetricsCountAggregateOutputType | null
    _avg: SystemMetricsAvgAggregateOutputType | null
    _sum: SystemMetricsSumAggregateOutputType | null
    _min: SystemMetricsMinAggregateOutputType | null
    _max: SystemMetricsMaxAggregateOutputType | null
  }

  type GetSystemMetricsGroupByPayload<T extends SystemMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemMetricsGroupByOutputType[P]>
        }
      >
    >


  export type SystemMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    activeIncidents?: boolean
    responseTime?: boolean
    successRate?: boolean
    systemHealth?: boolean
    uptime?: boolean
  }, ExtArgs["result"]["systemMetrics"]>



  export type SystemMetricsSelectScalar = {
    id?: boolean
    timestamp?: boolean
    activeIncidents?: boolean
    responseTime?: boolean
    successRate?: boolean
    systemHealth?: boolean
    uptime?: boolean
  }

  export type SystemMetricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "activeIncidents" | "responseTime" | "successRate" | "systemHealth" | "uptime", ExtArgs["result"]["systemMetrics"]>

  export type $SystemMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemMetrics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      activeIncidents: number
      responseTime: number
      successRate: number
      systemHealth: string
      uptime: number
    }, ExtArgs["result"]["systemMetrics"]>
    composites: {}
  }

  type SystemMetricsGetPayload<S extends boolean | null | undefined | SystemMetricsDefaultArgs> = $Result.GetResult<Prisma.$SystemMetricsPayload, S>

  type SystemMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemMetricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemMetricsCountAggregateInputType | true
    }

  export interface SystemMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemMetrics'], meta: { name: 'SystemMetrics' } }
    /**
     * Find zero or one SystemMetrics that matches the filter.
     * @param {SystemMetricsFindUniqueArgs} args - Arguments to find a SystemMetrics
     * @example
     * // Get one SystemMetrics
     * const systemMetrics = await prisma.systemMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemMetricsFindUniqueArgs>(args: SelectSubset<T, SystemMetricsFindUniqueArgs<ExtArgs>>): Prisma__SystemMetricsClient<$Result.GetResult<Prisma.$SystemMetricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemMetrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemMetricsFindUniqueOrThrowArgs} args - Arguments to find a SystemMetrics
     * @example
     * // Get one SystemMetrics
     * const systemMetrics = await prisma.systemMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemMetricsClient<$Result.GetResult<Prisma.$SystemMetricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricsFindFirstArgs} args - Arguments to find a SystemMetrics
     * @example
     * // Get one SystemMetrics
     * const systemMetrics = await prisma.systemMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemMetricsFindFirstArgs>(args?: SelectSubset<T, SystemMetricsFindFirstArgs<ExtArgs>>): Prisma__SystemMetricsClient<$Result.GetResult<Prisma.$SystemMetricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricsFindFirstOrThrowArgs} args - Arguments to find a SystemMetrics
     * @example
     * // Get one SystemMetrics
     * const systemMetrics = await prisma.systemMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemMetricsClient<$Result.GetResult<Prisma.$SystemMetricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemMetrics
     * const systemMetrics = await prisma.systemMetrics.findMany()
     * 
     * // Get first 10 SystemMetrics
     * const systemMetrics = await prisma.systemMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemMetricsWithIdOnly = await prisma.systemMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemMetricsFindManyArgs>(args?: SelectSubset<T, SystemMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemMetricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemMetrics.
     * @param {SystemMetricsCreateArgs} args - Arguments to create a SystemMetrics.
     * @example
     * // Create one SystemMetrics
     * const SystemMetrics = await prisma.systemMetrics.create({
     *   data: {
     *     // ... data to create a SystemMetrics
     *   }
     * })
     * 
     */
    create<T extends SystemMetricsCreateArgs>(args: SelectSubset<T, SystemMetricsCreateArgs<ExtArgs>>): Prisma__SystemMetricsClient<$Result.GetResult<Prisma.$SystemMetricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemMetrics.
     * @param {SystemMetricsCreateManyArgs} args - Arguments to create many SystemMetrics.
     * @example
     * // Create many SystemMetrics
     * const systemMetrics = await prisma.systemMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemMetricsCreateManyArgs>(args?: SelectSubset<T, SystemMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemMetrics.
     * @param {SystemMetricsDeleteArgs} args - Arguments to delete one SystemMetrics.
     * @example
     * // Delete one SystemMetrics
     * const SystemMetrics = await prisma.systemMetrics.delete({
     *   where: {
     *     // ... filter to delete one SystemMetrics
     *   }
     * })
     * 
     */
    delete<T extends SystemMetricsDeleteArgs>(args: SelectSubset<T, SystemMetricsDeleteArgs<ExtArgs>>): Prisma__SystemMetricsClient<$Result.GetResult<Prisma.$SystemMetricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemMetrics.
     * @param {SystemMetricsUpdateArgs} args - Arguments to update one SystemMetrics.
     * @example
     * // Update one SystemMetrics
     * const systemMetrics = await prisma.systemMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemMetricsUpdateArgs>(args: SelectSubset<T, SystemMetricsUpdateArgs<ExtArgs>>): Prisma__SystemMetricsClient<$Result.GetResult<Prisma.$SystemMetricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemMetrics.
     * @param {SystemMetricsDeleteManyArgs} args - Arguments to filter SystemMetrics to delete.
     * @example
     * // Delete a few SystemMetrics
     * const { count } = await prisma.systemMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemMetricsDeleteManyArgs>(args?: SelectSubset<T, SystemMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemMetrics
     * const systemMetrics = await prisma.systemMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemMetricsUpdateManyArgs>(args: SelectSubset<T, SystemMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemMetrics.
     * @param {SystemMetricsUpsertArgs} args - Arguments to update or create a SystemMetrics.
     * @example
     * // Update or create a SystemMetrics
     * const systemMetrics = await prisma.systemMetrics.upsert({
     *   create: {
     *     // ... data to create a SystemMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemMetrics we want to update
     *   }
     * })
     */
    upsert<T extends SystemMetricsUpsertArgs>(args: SelectSubset<T, SystemMetricsUpsertArgs<ExtArgs>>): Prisma__SystemMetricsClient<$Result.GetResult<Prisma.$SystemMetricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemMetrics that matches the filter.
     * @param {SystemMetricsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const systemMetrics = await prisma.systemMetrics.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SystemMetricsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SystemMetrics.
     * @param {SystemMetricsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const systemMetrics = await prisma.systemMetrics.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SystemMetricsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SystemMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricsCountArgs} args - Arguments to filter SystemMetrics to count.
     * @example
     * // Count the number of SystemMetrics
     * const count = await prisma.systemMetrics.count({
     *   where: {
     *     // ... the filter for the SystemMetrics we want to count
     *   }
     * })
    **/
    count<T extends SystemMetricsCountArgs>(
      args?: Subset<T, SystemMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemMetricsAggregateArgs>(args: Subset<T, SystemMetricsAggregateArgs>): Prisma.PrismaPromise<GetSystemMetricsAggregateType<T>>

    /**
     * Group by SystemMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMetricsGroupByArgs} args - Group by arguments.
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
      T extends SystemMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemMetricsGroupByArgs['orderBy'] }
        : { orderBy?: SystemMetricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemMetrics model
   */
  readonly fields: SystemMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SystemMetrics model
   */
  interface SystemMetricsFieldRefs {
    readonly id: FieldRef<"SystemMetrics", 'String'>
    readonly timestamp: FieldRef<"SystemMetrics", 'DateTime'>
    readonly activeIncidents: FieldRef<"SystemMetrics", 'Int'>
    readonly responseTime: FieldRef<"SystemMetrics", 'Float'>
    readonly successRate: FieldRef<"SystemMetrics", 'Float'>
    readonly systemHealth: FieldRef<"SystemMetrics", 'String'>
    readonly uptime: FieldRef<"SystemMetrics", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SystemMetrics findUnique
   */
  export type SystemMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetrics
     */
    select?: SystemMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetrics
     */
    omit?: SystemMetricsOmit<ExtArgs> | null
    /**
     * Filter, which SystemMetrics to fetch.
     */
    where: SystemMetricsWhereUniqueInput
  }

  /**
   * SystemMetrics findUniqueOrThrow
   */
  export type SystemMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetrics
     */
    select?: SystemMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetrics
     */
    omit?: SystemMetricsOmit<ExtArgs> | null
    /**
     * Filter, which SystemMetrics to fetch.
     */
    where: SystemMetricsWhereUniqueInput
  }

  /**
   * SystemMetrics findFirst
   */
  export type SystemMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetrics
     */
    select?: SystemMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetrics
     */
    omit?: SystemMetricsOmit<ExtArgs> | null
    /**
     * Filter, which SystemMetrics to fetch.
     */
    where?: SystemMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMetrics to fetch.
     */
    orderBy?: SystemMetricsOrderByWithRelationInput | SystemMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemMetrics.
     */
    cursor?: SystemMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemMetrics.
     */
    distinct?: SystemMetricsScalarFieldEnum | SystemMetricsScalarFieldEnum[]
  }

  /**
   * SystemMetrics findFirstOrThrow
   */
  export type SystemMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetrics
     */
    select?: SystemMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetrics
     */
    omit?: SystemMetricsOmit<ExtArgs> | null
    /**
     * Filter, which SystemMetrics to fetch.
     */
    where?: SystemMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMetrics to fetch.
     */
    orderBy?: SystemMetricsOrderByWithRelationInput | SystemMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemMetrics.
     */
    cursor?: SystemMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemMetrics.
     */
    distinct?: SystemMetricsScalarFieldEnum | SystemMetricsScalarFieldEnum[]
  }

  /**
   * SystemMetrics findMany
   */
  export type SystemMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetrics
     */
    select?: SystemMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetrics
     */
    omit?: SystemMetricsOmit<ExtArgs> | null
    /**
     * Filter, which SystemMetrics to fetch.
     */
    where?: SystemMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMetrics to fetch.
     */
    orderBy?: SystemMetricsOrderByWithRelationInput | SystemMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemMetrics.
     */
    cursor?: SystemMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMetrics.
     */
    skip?: number
    distinct?: SystemMetricsScalarFieldEnum | SystemMetricsScalarFieldEnum[]
  }

  /**
   * SystemMetrics create
   */
  export type SystemMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetrics
     */
    select?: SystemMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetrics
     */
    omit?: SystemMetricsOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemMetrics.
     */
    data: XOR<SystemMetricsCreateInput, SystemMetricsUncheckedCreateInput>
  }

  /**
   * SystemMetrics createMany
   */
  export type SystemMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemMetrics.
     */
    data: SystemMetricsCreateManyInput | SystemMetricsCreateManyInput[]
  }

  /**
   * SystemMetrics update
   */
  export type SystemMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetrics
     */
    select?: SystemMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetrics
     */
    omit?: SystemMetricsOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemMetrics.
     */
    data: XOR<SystemMetricsUpdateInput, SystemMetricsUncheckedUpdateInput>
    /**
     * Choose, which SystemMetrics to update.
     */
    where: SystemMetricsWhereUniqueInput
  }

  /**
   * SystemMetrics updateMany
   */
  export type SystemMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemMetrics.
     */
    data: XOR<SystemMetricsUpdateManyMutationInput, SystemMetricsUncheckedUpdateManyInput>
    /**
     * Filter which SystemMetrics to update
     */
    where?: SystemMetricsWhereInput
    /**
     * Limit how many SystemMetrics to update.
     */
    limit?: number
  }

  /**
   * SystemMetrics upsert
   */
  export type SystemMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetrics
     */
    select?: SystemMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetrics
     */
    omit?: SystemMetricsOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemMetrics to update in case it exists.
     */
    where: SystemMetricsWhereUniqueInput
    /**
     * In case the SystemMetrics found by the `where` argument doesn't exist, create a new SystemMetrics with this data.
     */
    create: XOR<SystemMetricsCreateInput, SystemMetricsUncheckedCreateInput>
    /**
     * In case the SystemMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemMetricsUpdateInput, SystemMetricsUncheckedUpdateInput>
  }

  /**
   * SystemMetrics delete
   */
  export type SystemMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetrics
     */
    select?: SystemMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetrics
     */
    omit?: SystemMetricsOmit<ExtArgs> | null
    /**
     * Filter which SystemMetrics to delete.
     */
    where: SystemMetricsWhereUniqueInput
  }

  /**
   * SystemMetrics deleteMany
   */
  export type SystemMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemMetrics to delete
     */
    where?: SystemMetricsWhereInput
    /**
     * Limit how many SystemMetrics to delete.
     */
    limit?: number
  }

  /**
   * SystemMetrics findRaw
   */
  export type SystemMetricsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * SystemMetrics aggregateRaw
   */
  export type SystemMetricsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * SystemMetrics without action
   */
  export type SystemMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMetrics
     */
    select?: SystemMetricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMetrics
     */
    omit?: SystemMetricsOmit<ExtArgs> | null
  }


  /**
   * Model ServiceConnection
   */

  export type AggregateServiceConnection = {
    _count: ServiceConnectionCountAggregateOutputType | null
    _min: ServiceConnectionMinAggregateOutputType | null
    _max: ServiceConnectionMaxAggregateOutputType | null
  }

  export type ServiceConnectionMinAggregateOutputType = {
    id: string | null
    service: string | null
    status: string | null
    lastCheck: Date | null
    health: string | null
    updatedAt: Date | null
  }

  export type ServiceConnectionMaxAggregateOutputType = {
    id: string | null
    service: string | null
    status: string | null
    lastCheck: Date | null
    health: string | null
    updatedAt: Date | null
  }

  export type ServiceConnectionCountAggregateOutputType = {
    id: number
    service: number
    status: number
    lastCheck: number
    health: number
    updatedAt: number
    _all: number
  }


  export type ServiceConnectionMinAggregateInputType = {
    id?: true
    service?: true
    status?: true
    lastCheck?: true
    health?: true
    updatedAt?: true
  }

  export type ServiceConnectionMaxAggregateInputType = {
    id?: true
    service?: true
    status?: true
    lastCheck?: true
    health?: true
    updatedAt?: true
  }

  export type ServiceConnectionCountAggregateInputType = {
    id?: true
    service?: true
    status?: true
    lastCheck?: true
    health?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceConnection to aggregate.
     */
    where?: ServiceConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceConnections to fetch.
     */
    orderBy?: ServiceConnectionOrderByWithRelationInput | ServiceConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceConnections
    **/
    _count?: true | ServiceConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceConnectionMaxAggregateInputType
  }

  export type GetServiceConnectionAggregateType<T extends ServiceConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceConnection[P]>
      : GetScalarType<T[P], AggregateServiceConnection[P]>
  }




  export type ServiceConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceConnectionWhereInput
    orderBy?: ServiceConnectionOrderByWithAggregationInput | ServiceConnectionOrderByWithAggregationInput[]
    by: ServiceConnectionScalarFieldEnum[] | ServiceConnectionScalarFieldEnum
    having?: ServiceConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceConnectionCountAggregateInputType | true
    _min?: ServiceConnectionMinAggregateInputType
    _max?: ServiceConnectionMaxAggregateInputType
  }

  export type ServiceConnectionGroupByOutputType = {
    id: string
    service: string
    status: string
    lastCheck: Date
    health: string
    updatedAt: Date
    _count: ServiceConnectionCountAggregateOutputType | null
    _min: ServiceConnectionMinAggregateOutputType | null
    _max: ServiceConnectionMaxAggregateOutputType | null
  }

  type GetServiceConnectionGroupByPayload<T extends ServiceConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceConnectionGroupByOutputType[P]>
        }
      >
    >


  export type ServiceConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service?: boolean
    status?: boolean
    lastCheck?: boolean
    health?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceConnection"]>



  export type ServiceConnectionSelectScalar = {
    id?: boolean
    service?: boolean
    status?: boolean
    lastCheck?: boolean
    health?: boolean
    updatedAt?: boolean
  }

  export type ServiceConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service" | "status" | "lastCheck" | "health" | "updatedAt", ExtArgs["result"]["serviceConnection"]>

  export type $ServiceConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceConnection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      service: string
      status: string
      lastCheck: Date
      health: string
      updatedAt: Date
    }, ExtArgs["result"]["serviceConnection"]>
    composites: {}
  }

  type ServiceConnectionGetPayload<S extends boolean | null | undefined | ServiceConnectionDefaultArgs> = $Result.GetResult<Prisma.$ServiceConnectionPayload, S>

  type ServiceConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceConnectionCountAggregateInputType | true
    }

  export interface ServiceConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceConnection'], meta: { name: 'ServiceConnection' } }
    /**
     * Find zero or one ServiceConnection that matches the filter.
     * @param {ServiceConnectionFindUniqueArgs} args - Arguments to find a ServiceConnection
     * @example
     * // Get one ServiceConnection
     * const serviceConnection = await prisma.serviceConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceConnectionFindUniqueArgs>(args: SelectSubset<T, ServiceConnectionFindUniqueArgs<ExtArgs>>): Prisma__ServiceConnectionClient<$Result.GetResult<Prisma.$ServiceConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceConnectionFindUniqueOrThrowArgs} args - Arguments to find a ServiceConnection
     * @example
     * // Get one ServiceConnection
     * const serviceConnection = await prisma.serviceConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceConnectionClient<$Result.GetResult<Prisma.$ServiceConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceConnectionFindFirstArgs} args - Arguments to find a ServiceConnection
     * @example
     * // Get one ServiceConnection
     * const serviceConnection = await prisma.serviceConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceConnectionFindFirstArgs>(args?: SelectSubset<T, ServiceConnectionFindFirstArgs<ExtArgs>>): Prisma__ServiceConnectionClient<$Result.GetResult<Prisma.$ServiceConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceConnectionFindFirstOrThrowArgs} args - Arguments to find a ServiceConnection
     * @example
     * // Get one ServiceConnection
     * const serviceConnection = await prisma.serviceConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceConnectionClient<$Result.GetResult<Prisma.$ServiceConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceConnections
     * const serviceConnections = await prisma.serviceConnection.findMany()
     * 
     * // Get first 10 ServiceConnections
     * const serviceConnections = await prisma.serviceConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceConnectionWithIdOnly = await prisma.serviceConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceConnectionFindManyArgs>(args?: SelectSubset<T, ServiceConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceConnection.
     * @param {ServiceConnectionCreateArgs} args - Arguments to create a ServiceConnection.
     * @example
     * // Create one ServiceConnection
     * const ServiceConnection = await prisma.serviceConnection.create({
     *   data: {
     *     // ... data to create a ServiceConnection
     *   }
     * })
     * 
     */
    create<T extends ServiceConnectionCreateArgs>(args: SelectSubset<T, ServiceConnectionCreateArgs<ExtArgs>>): Prisma__ServiceConnectionClient<$Result.GetResult<Prisma.$ServiceConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceConnections.
     * @param {ServiceConnectionCreateManyArgs} args - Arguments to create many ServiceConnections.
     * @example
     * // Create many ServiceConnections
     * const serviceConnection = await prisma.serviceConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceConnectionCreateManyArgs>(args?: SelectSubset<T, ServiceConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ServiceConnection.
     * @param {ServiceConnectionDeleteArgs} args - Arguments to delete one ServiceConnection.
     * @example
     * // Delete one ServiceConnection
     * const ServiceConnection = await prisma.serviceConnection.delete({
     *   where: {
     *     // ... filter to delete one ServiceConnection
     *   }
     * })
     * 
     */
    delete<T extends ServiceConnectionDeleteArgs>(args: SelectSubset<T, ServiceConnectionDeleteArgs<ExtArgs>>): Prisma__ServiceConnectionClient<$Result.GetResult<Prisma.$ServiceConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceConnection.
     * @param {ServiceConnectionUpdateArgs} args - Arguments to update one ServiceConnection.
     * @example
     * // Update one ServiceConnection
     * const serviceConnection = await prisma.serviceConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceConnectionUpdateArgs>(args: SelectSubset<T, ServiceConnectionUpdateArgs<ExtArgs>>): Prisma__ServiceConnectionClient<$Result.GetResult<Prisma.$ServiceConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceConnections.
     * @param {ServiceConnectionDeleteManyArgs} args - Arguments to filter ServiceConnections to delete.
     * @example
     * // Delete a few ServiceConnections
     * const { count } = await prisma.serviceConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceConnectionDeleteManyArgs>(args?: SelectSubset<T, ServiceConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceConnections
     * const serviceConnection = await prisma.serviceConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceConnectionUpdateManyArgs>(args: SelectSubset<T, ServiceConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceConnection.
     * @param {ServiceConnectionUpsertArgs} args - Arguments to update or create a ServiceConnection.
     * @example
     * // Update or create a ServiceConnection
     * const serviceConnection = await prisma.serviceConnection.upsert({
     *   create: {
     *     // ... data to create a ServiceConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceConnection we want to update
     *   }
     * })
     */
    upsert<T extends ServiceConnectionUpsertArgs>(args: SelectSubset<T, ServiceConnectionUpsertArgs<ExtArgs>>): Prisma__ServiceConnectionClient<$Result.GetResult<Prisma.$ServiceConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceConnections that matches the filter.
     * @param {ServiceConnectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const serviceConnection = await prisma.serviceConnection.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ServiceConnectionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ServiceConnection.
     * @param {ServiceConnectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const serviceConnection = await prisma.serviceConnection.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ServiceConnectionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ServiceConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceConnectionCountArgs} args - Arguments to filter ServiceConnections to count.
     * @example
     * // Count the number of ServiceConnections
     * const count = await prisma.serviceConnection.count({
     *   where: {
     *     // ... the filter for the ServiceConnections we want to count
     *   }
     * })
    **/
    count<T extends ServiceConnectionCountArgs>(
      args?: Subset<T, ServiceConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceConnectionAggregateArgs>(args: Subset<T, ServiceConnectionAggregateArgs>): Prisma.PrismaPromise<GetServiceConnectionAggregateType<T>>

    /**
     * Group by ServiceConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceConnectionGroupByArgs} args - Group by arguments.
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
      T extends ServiceConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceConnectionGroupByArgs['orderBy'] }
        : { orderBy?: ServiceConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceConnection model
   */
  readonly fields: ServiceConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ServiceConnection model
   */
  interface ServiceConnectionFieldRefs {
    readonly id: FieldRef<"ServiceConnection", 'String'>
    readonly service: FieldRef<"ServiceConnection", 'String'>
    readonly status: FieldRef<"ServiceConnection", 'String'>
    readonly lastCheck: FieldRef<"ServiceConnection", 'DateTime'>
    readonly health: FieldRef<"ServiceConnection", 'String'>
    readonly updatedAt: FieldRef<"ServiceConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceConnection findUnique
   */
  export type ServiceConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceConnection
     */
    select?: ServiceConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceConnection
     */
    omit?: ServiceConnectionOmit<ExtArgs> | null
    /**
     * Filter, which ServiceConnection to fetch.
     */
    where: ServiceConnectionWhereUniqueInput
  }

  /**
   * ServiceConnection findUniqueOrThrow
   */
  export type ServiceConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceConnection
     */
    select?: ServiceConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceConnection
     */
    omit?: ServiceConnectionOmit<ExtArgs> | null
    /**
     * Filter, which ServiceConnection to fetch.
     */
    where: ServiceConnectionWhereUniqueInput
  }

  /**
   * ServiceConnection findFirst
   */
  export type ServiceConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceConnection
     */
    select?: ServiceConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceConnection
     */
    omit?: ServiceConnectionOmit<ExtArgs> | null
    /**
     * Filter, which ServiceConnection to fetch.
     */
    where?: ServiceConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceConnections to fetch.
     */
    orderBy?: ServiceConnectionOrderByWithRelationInput | ServiceConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceConnections.
     */
    cursor?: ServiceConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceConnections.
     */
    distinct?: ServiceConnectionScalarFieldEnum | ServiceConnectionScalarFieldEnum[]
  }

  /**
   * ServiceConnection findFirstOrThrow
   */
  export type ServiceConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceConnection
     */
    select?: ServiceConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceConnection
     */
    omit?: ServiceConnectionOmit<ExtArgs> | null
    /**
     * Filter, which ServiceConnection to fetch.
     */
    where?: ServiceConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceConnections to fetch.
     */
    orderBy?: ServiceConnectionOrderByWithRelationInput | ServiceConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceConnections.
     */
    cursor?: ServiceConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceConnections.
     */
    distinct?: ServiceConnectionScalarFieldEnum | ServiceConnectionScalarFieldEnum[]
  }

  /**
   * ServiceConnection findMany
   */
  export type ServiceConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceConnection
     */
    select?: ServiceConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceConnection
     */
    omit?: ServiceConnectionOmit<ExtArgs> | null
    /**
     * Filter, which ServiceConnections to fetch.
     */
    where?: ServiceConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceConnections to fetch.
     */
    orderBy?: ServiceConnectionOrderByWithRelationInput | ServiceConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceConnections.
     */
    cursor?: ServiceConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceConnections.
     */
    skip?: number
    distinct?: ServiceConnectionScalarFieldEnum | ServiceConnectionScalarFieldEnum[]
  }

  /**
   * ServiceConnection create
   */
  export type ServiceConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceConnection
     */
    select?: ServiceConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceConnection
     */
    omit?: ServiceConnectionOmit<ExtArgs> | null
    /**
     * The data needed to create a ServiceConnection.
     */
    data: XOR<ServiceConnectionCreateInput, ServiceConnectionUncheckedCreateInput>
  }

  /**
   * ServiceConnection createMany
   */
  export type ServiceConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceConnections.
     */
    data: ServiceConnectionCreateManyInput | ServiceConnectionCreateManyInput[]
  }

  /**
   * ServiceConnection update
   */
  export type ServiceConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceConnection
     */
    select?: ServiceConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceConnection
     */
    omit?: ServiceConnectionOmit<ExtArgs> | null
    /**
     * The data needed to update a ServiceConnection.
     */
    data: XOR<ServiceConnectionUpdateInput, ServiceConnectionUncheckedUpdateInput>
    /**
     * Choose, which ServiceConnection to update.
     */
    where: ServiceConnectionWhereUniqueInput
  }

  /**
   * ServiceConnection updateMany
   */
  export type ServiceConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceConnections.
     */
    data: XOR<ServiceConnectionUpdateManyMutationInput, ServiceConnectionUncheckedUpdateManyInput>
    /**
     * Filter which ServiceConnections to update
     */
    where?: ServiceConnectionWhereInput
    /**
     * Limit how many ServiceConnections to update.
     */
    limit?: number
  }

  /**
   * ServiceConnection upsert
   */
  export type ServiceConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceConnection
     */
    select?: ServiceConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceConnection
     */
    omit?: ServiceConnectionOmit<ExtArgs> | null
    /**
     * The filter to search for the ServiceConnection to update in case it exists.
     */
    where: ServiceConnectionWhereUniqueInput
    /**
     * In case the ServiceConnection found by the `where` argument doesn't exist, create a new ServiceConnection with this data.
     */
    create: XOR<ServiceConnectionCreateInput, ServiceConnectionUncheckedCreateInput>
    /**
     * In case the ServiceConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceConnectionUpdateInput, ServiceConnectionUncheckedUpdateInput>
  }

  /**
   * ServiceConnection delete
   */
  export type ServiceConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceConnection
     */
    select?: ServiceConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceConnection
     */
    omit?: ServiceConnectionOmit<ExtArgs> | null
    /**
     * Filter which ServiceConnection to delete.
     */
    where: ServiceConnectionWhereUniqueInput
  }

  /**
   * ServiceConnection deleteMany
   */
  export type ServiceConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceConnections to delete
     */
    where?: ServiceConnectionWhereInput
    /**
     * Limit how many ServiceConnections to delete.
     */
    limit?: number
  }

  /**
   * ServiceConnection findRaw
   */
  export type ServiceConnectionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ServiceConnection aggregateRaw
   */
  export type ServiceConnectionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ServiceConnection without action
   */
  export type ServiceConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceConnection
     */
    select?: ServiceConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceConnection
     */
    omit?: ServiceConnectionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isRootController: 'isRootController',
    isActive: 'isActive',
    isTempPassword: 'isTempPassword',
    mustChangePassword: 'mustChangePassword',
    phone: 'phone',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    type: 'type',
    severity: 'severity',
    status: 'status',
    location: 'location',
    description: 'description',
    reporterId: 'reporterId',
    reporterName: 'reporterName',
    reporterTelegramChatId: 'reporterTelegramChatId',
    reporterTelegramMessageId: 'reporterTelegramMessageId',
    telegramChatId: 'telegramChatId',
    telegramMessageId: 'telegramMessageId',
    assignedTo: 'assignedTo',
    assignedToName: 'assignedToName',
    assignedAt: 'assignedAt',
    responderId: 'responderId',
    estimatedArrival: 'estimatedArrival',
    acknowledgedAt: 'acknowledgedAt',
    resolvedAt: 'resolvedAt',
    resolvedBy: 'resolvedBy',
    priority: 'priority',
    tags: 'tags',
    location_lat: 'location_lat',
    location_lon: 'location_lon',
    attachments: 'attachments',
    aiAnalysisStatus: 'aiAnalysisStatus',
    aiAnalysisSummary: 'aiAnalysisSummary',
    aiActionPlan: 'aiActionPlan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const IncidentMessageScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    senderType: 'senderType',
    senderName: 'senderName',
    senderId: 'senderId',
    content: 'content',
    telegramMessageId: 'telegramMessageId',
    createdAt: 'createdAt'
  };

  export type IncidentMessageScalarFieldEnum = (typeof IncidentMessageScalarFieldEnum)[keyof typeof IncidentMessageScalarFieldEnum]


  export const IncidentEventScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    type: 'type',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type IncidentEventScalarFieldEnum = (typeof IncidentEventScalarFieldEnum)[keyof typeof IncidentEventScalarFieldEnum]


  export const IncidentTimelineScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    action: 'action',
    actor: 'actor',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type IncidentTimelineScalarFieldEnum = (typeof IncidentTimelineScalarFieldEnum)[keyof typeof IncidentTimelineScalarFieldEnum]


  export const ResponderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    email: 'email',
    phone: 'phone',
    skills: 'skills',
    location_lat: 'location_lat',
    location_lon: 'location_lon',
    availability: 'availability',
    telegramChatId: 'telegramChatId',
    telegramUsername: 'telegramUsername',
    telegramLinkToken: 'telegramLinkToken',
    telegramConnectedAt: 'telegramConnectedAt',
    lastHeartbeat: 'lastHeartbeat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResponderScalarFieldEnum = (typeof ResponderScalarFieldEnum)[keyof typeof ResponderScalarFieldEnum]


  export const ResponderCapabilityScalarFieldEnum: {
    id: 'id',
    responderId: 'responderId',
    capability: 'capability',
    level: 'level',
    certified: 'certified',
    createdAt: 'createdAt'
  };

  export type ResponderCapabilityScalarFieldEnum = (typeof ResponderCapabilityScalarFieldEnum)[keyof typeof ResponderCapabilityScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    actor: 'actor',
    action: 'action',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SystemMetricsScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    activeIncidents: 'activeIncidents',
    responseTime: 'responseTime',
    successRate: 'successRate',
    systemHealth: 'systemHealth',
    uptime: 'uptime'
  };

  export type SystemMetricsScalarFieldEnum = (typeof SystemMetricsScalarFieldEnum)[keyof typeof SystemMetricsScalarFieldEnum]


  export const ServiceConnectionScalarFieldEnum: {
    id: 'id',
    service: 'service',
    status: 'status',
    lastCheck: 'lastCheck',
    health: 'health',
    updatedAt: 'updatedAt'
  };

  export type ServiceConnectionScalarFieldEnum = (typeof ServiceConnectionScalarFieldEnum)[keyof typeof ServiceConnectionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    type?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    incidents?: IncidentListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    type?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    users?: UserListRelationFilter
    incidents?: IncidentListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    type?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    organizationId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isRootController?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    isTempPassword?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isRootController?: SortOrder
    isActive?: SortOrder
    isTempPassword?: SortOrder
    mustChangePassword?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    organizationId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isRootController?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    isTempPassword?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isRootController?: SortOrder
    isActive?: SortOrder
    isTempPassword?: SortOrder
    mustChangePassword?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    organizationId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    isRootController?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isTempPassword?: BoolWithAggregatesFilter<"User"> | boolean
    mustChangePassword?: BoolWithAggregatesFilter<"User"> | boolean
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    organizationId?: StringFilter<"Incident"> | string
    type?: StringFilter<"Incident"> | string
    severity?: StringFilter<"Incident"> | string
    status?: StringFilter<"Incident"> | string
    location?: StringFilter<"Incident"> | string
    description?: StringNullableFilter<"Incident"> | string | null
    reporterId?: StringNullableFilter<"Incident"> | string | null
    reporterName?: StringNullableFilter<"Incident"> | string | null
    reporterTelegramChatId?: StringNullableFilter<"Incident"> | string | null
    reporterTelegramMessageId?: StringNullableFilter<"Incident"> | string | null
    telegramChatId?: StringNullableFilter<"Incident"> | string | null
    telegramMessageId?: StringNullableFilter<"Incident"> | string | null
    assignedTo?: StringNullableFilter<"Incident"> | string | null
    assignedToName?: StringNullableFilter<"Incident"> | string | null
    assignedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    responderId?: StringNullableFilter<"Incident"> | string | null
    estimatedArrival?: DateTimeNullableFilter<"Incident"> | Date | string | null
    acknowledgedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolvedBy?: StringNullableFilter<"Incident"> | string | null
    priority?: IntFilter<"Incident"> | number
    tags?: StringFilter<"Incident"> | string
    location_lat?: FloatNullableFilter<"Incident"> | number | null
    location_lon?: FloatNullableFilter<"Incident"> | number | null
    attachments?: StringFilter<"Incident"> | string
    aiAnalysisStatus?: StringNullableFilter<"Incident"> | string | null
    aiAnalysisSummary?: StringNullableFilter<"Incident"> | string | null
    aiActionPlan?: StringNullableFilter<"Incident"> | string | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    events?: IncidentEventListRelationFilter
    timeline?: IncidentTimelineListRelationFilter
    messages?: IncidentMessageListRelationFilter
    responder?: XOR<ResponderNullableScalarRelationFilter, ResponderWhereInput> | null
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    location?: SortOrder
    description?: SortOrder
    reporterId?: SortOrder
    reporterName?: SortOrder
    reporterTelegramChatId?: SortOrder
    reporterTelegramMessageId?: SortOrder
    telegramChatId?: SortOrder
    telegramMessageId?: SortOrder
    assignedTo?: SortOrder
    assignedToName?: SortOrder
    assignedAt?: SortOrder
    responderId?: SortOrder
    estimatedArrival?: SortOrder
    acknowledgedAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    priority?: SortOrder
    tags?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    attachments?: SortOrder
    aiAnalysisStatus?: SortOrder
    aiAnalysisSummary?: SortOrder
    aiActionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    events?: IncidentEventOrderByRelationAggregateInput
    timeline?: IncidentTimelineOrderByRelationAggregateInput
    messages?: IncidentMessageOrderByRelationAggregateInput
    responder?: ResponderOrderByWithRelationInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    organizationId?: StringFilter<"Incident"> | string
    type?: StringFilter<"Incident"> | string
    severity?: StringFilter<"Incident"> | string
    status?: StringFilter<"Incident"> | string
    location?: StringFilter<"Incident"> | string
    description?: StringNullableFilter<"Incident"> | string | null
    reporterId?: StringNullableFilter<"Incident"> | string | null
    reporterName?: StringNullableFilter<"Incident"> | string | null
    reporterTelegramChatId?: StringNullableFilter<"Incident"> | string | null
    reporterTelegramMessageId?: StringNullableFilter<"Incident"> | string | null
    telegramChatId?: StringNullableFilter<"Incident"> | string | null
    telegramMessageId?: StringNullableFilter<"Incident"> | string | null
    assignedTo?: StringNullableFilter<"Incident"> | string | null
    assignedToName?: StringNullableFilter<"Incident"> | string | null
    assignedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    responderId?: StringNullableFilter<"Incident"> | string | null
    estimatedArrival?: DateTimeNullableFilter<"Incident"> | Date | string | null
    acknowledgedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolvedBy?: StringNullableFilter<"Incident"> | string | null
    priority?: IntFilter<"Incident"> | number
    tags?: StringFilter<"Incident"> | string
    location_lat?: FloatNullableFilter<"Incident"> | number | null
    location_lon?: FloatNullableFilter<"Incident"> | number | null
    attachments?: StringFilter<"Incident"> | string
    aiAnalysisStatus?: StringNullableFilter<"Incident"> | string | null
    aiAnalysisSummary?: StringNullableFilter<"Incident"> | string | null
    aiActionPlan?: StringNullableFilter<"Incident"> | string | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    events?: IncidentEventListRelationFilter
    timeline?: IncidentTimelineListRelationFilter
    messages?: IncidentMessageListRelationFilter
    responder?: XOR<ResponderNullableScalarRelationFilter, ResponderWhereInput> | null
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    location?: SortOrder
    description?: SortOrder
    reporterId?: SortOrder
    reporterName?: SortOrder
    reporterTelegramChatId?: SortOrder
    reporterTelegramMessageId?: SortOrder
    telegramChatId?: SortOrder
    telegramMessageId?: SortOrder
    assignedTo?: SortOrder
    assignedToName?: SortOrder
    assignedAt?: SortOrder
    responderId?: SortOrder
    estimatedArrival?: SortOrder
    acknowledgedAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    priority?: SortOrder
    tags?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    attachments?: SortOrder
    aiAnalysisStatus?: SortOrder
    aiAnalysisSummary?: SortOrder
    aiActionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _avg?: IncidentAvgOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
    _sum?: IncidentSumOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    organizationId?: StringWithAggregatesFilter<"Incident"> | string
    type?: StringWithAggregatesFilter<"Incident"> | string
    severity?: StringWithAggregatesFilter<"Incident"> | string
    status?: StringWithAggregatesFilter<"Incident"> | string
    location?: StringWithAggregatesFilter<"Incident"> | string
    description?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    reporterId?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    reporterName?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    reporterTelegramChatId?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    reporterTelegramMessageId?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    telegramChatId?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    telegramMessageId?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    assignedTo?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    assignedToName?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    assignedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    responderId?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    estimatedArrival?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    acknowledgedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    resolvedBy?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    priority?: IntWithAggregatesFilter<"Incident"> | number
    tags?: StringWithAggregatesFilter<"Incident"> | string
    location_lat?: FloatNullableWithAggregatesFilter<"Incident"> | number | null
    location_lon?: FloatNullableWithAggregatesFilter<"Incident"> | number | null
    attachments?: StringWithAggregatesFilter<"Incident"> | string
    aiAnalysisStatus?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    aiAnalysisSummary?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    aiActionPlan?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
  }

  export type IncidentMessageWhereInput = {
    AND?: IncidentMessageWhereInput | IncidentMessageWhereInput[]
    OR?: IncidentMessageWhereInput[]
    NOT?: IncidentMessageWhereInput | IncidentMessageWhereInput[]
    id?: StringFilter<"IncidentMessage"> | string
    incidentId?: StringFilter<"IncidentMessage"> | string
    senderType?: StringFilter<"IncidentMessage"> | string
    senderName?: StringFilter<"IncidentMessage"> | string
    senderId?: StringNullableFilter<"IncidentMessage"> | string | null
    content?: StringFilter<"IncidentMessage"> | string
    telegramMessageId?: StringNullableFilter<"IncidentMessage"> | string | null
    createdAt?: DateTimeFilter<"IncidentMessage"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }

  export type IncidentMessageOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    telegramMessageId?: SortOrder
    createdAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
  }

  export type IncidentMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentMessageWhereInput | IncidentMessageWhereInput[]
    OR?: IncidentMessageWhereInput[]
    NOT?: IncidentMessageWhereInput | IncidentMessageWhereInput[]
    incidentId?: StringFilter<"IncidentMessage"> | string
    senderType?: StringFilter<"IncidentMessage"> | string
    senderName?: StringFilter<"IncidentMessage"> | string
    senderId?: StringNullableFilter<"IncidentMessage"> | string | null
    content?: StringFilter<"IncidentMessage"> | string
    telegramMessageId?: StringNullableFilter<"IncidentMessage"> | string | null
    createdAt?: DateTimeFilter<"IncidentMessage"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }, "id">

  export type IncidentMessageOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    telegramMessageId?: SortOrder
    createdAt?: SortOrder
    _count?: IncidentMessageCountOrderByAggregateInput
    _max?: IncidentMessageMaxOrderByAggregateInput
    _min?: IncidentMessageMinOrderByAggregateInput
  }

  export type IncidentMessageScalarWhereWithAggregatesInput = {
    AND?: IncidentMessageScalarWhereWithAggregatesInput | IncidentMessageScalarWhereWithAggregatesInput[]
    OR?: IncidentMessageScalarWhereWithAggregatesInput[]
    NOT?: IncidentMessageScalarWhereWithAggregatesInput | IncidentMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IncidentMessage"> | string
    incidentId?: StringWithAggregatesFilter<"IncidentMessage"> | string
    senderType?: StringWithAggregatesFilter<"IncidentMessage"> | string
    senderName?: StringWithAggregatesFilter<"IncidentMessage"> | string
    senderId?: StringNullableWithAggregatesFilter<"IncidentMessage"> | string | null
    content?: StringWithAggregatesFilter<"IncidentMessage"> | string
    telegramMessageId?: StringNullableWithAggregatesFilter<"IncidentMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IncidentMessage"> | Date | string
  }

  export type IncidentEventWhereInput = {
    AND?: IncidentEventWhereInput | IncidentEventWhereInput[]
    OR?: IncidentEventWhereInput[]
    NOT?: IncidentEventWhereInput | IncidentEventWhereInput[]
    id?: StringFilter<"IncidentEvent"> | string
    incidentId?: StringFilter<"IncidentEvent"> | string
    type?: StringFilter<"IncidentEvent"> | string
    data?: StringNullableFilter<"IncidentEvent"> | string | null
    createdAt?: DateTimeFilter<"IncidentEvent"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }

  export type IncidentEventOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
  }

  export type IncidentEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentEventWhereInput | IncidentEventWhereInput[]
    OR?: IncidentEventWhereInput[]
    NOT?: IncidentEventWhereInput | IncidentEventWhereInput[]
    incidentId?: StringFilter<"IncidentEvent"> | string
    type?: StringFilter<"IncidentEvent"> | string
    data?: StringNullableFilter<"IncidentEvent"> | string | null
    createdAt?: DateTimeFilter<"IncidentEvent"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }, "id">

  export type IncidentEventOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: IncidentEventCountOrderByAggregateInput
    _max?: IncidentEventMaxOrderByAggregateInput
    _min?: IncidentEventMinOrderByAggregateInput
  }

  export type IncidentEventScalarWhereWithAggregatesInput = {
    AND?: IncidentEventScalarWhereWithAggregatesInput | IncidentEventScalarWhereWithAggregatesInput[]
    OR?: IncidentEventScalarWhereWithAggregatesInput[]
    NOT?: IncidentEventScalarWhereWithAggregatesInput | IncidentEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IncidentEvent"> | string
    incidentId?: StringWithAggregatesFilter<"IncidentEvent"> | string
    type?: StringWithAggregatesFilter<"IncidentEvent"> | string
    data?: StringNullableWithAggregatesFilter<"IncidentEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IncidentEvent"> | Date | string
  }

  export type IncidentTimelineWhereInput = {
    AND?: IncidentTimelineWhereInput | IncidentTimelineWhereInput[]
    OR?: IncidentTimelineWhereInput[]
    NOT?: IncidentTimelineWhereInput | IncidentTimelineWhereInput[]
    id?: StringFilter<"IncidentTimeline"> | string
    incidentId?: StringFilter<"IncidentTimeline"> | string
    action?: StringFilter<"IncidentTimeline"> | string
    actor?: StringFilter<"IncidentTimeline"> | string
    details?: StringNullableFilter<"IncidentTimeline"> | string | null
    createdAt?: DateTimeFilter<"IncidentTimeline"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }

  export type IncidentTimelineOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    action?: SortOrder
    actor?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
  }

  export type IncidentTimelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentTimelineWhereInput | IncidentTimelineWhereInput[]
    OR?: IncidentTimelineWhereInput[]
    NOT?: IncidentTimelineWhereInput | IncidentTimelineWhereInput[]
    incidentId?: StringFilter<"IncidentTimeline"> | string
    action?: StringFilter<"IncidentTimeline"> | string
    actor?: StringFilter<"IncidentTimeline"> | string
    details?: StringNullableFilter<"IncidentTimeline"> | string | null
    createdAt?: DateTimeFilter<"IncidentTimeline"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }, "id">

  export type IncidentTimelineOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    action?: SortOrder
    actor?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    _count?: IncidentTimelineCountOrderByAggregateInput
    _max?: IncidentTimelineMaxOrderByAggregateInput
    _min?: IncidentTimelineMinOrderByAggregateInput
  }

  export type IncidentTimelineScalarWhereWithAggregatesInput = {
    AND?: IncidentTimelineScalarWhereWithAggregatesInput | IncidentTimelineScalarWhereWithAggregatesInput[]
    OR?: IncidentTimelineScalarWhereWithAggregatesInput[]
    NOT?: IncidentTimelineScalarWhereWithAggregatesInput | IncidentTimelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IncidentTimeline"> | string
    incidentId?: StringWithAggregatesFilter<"IncidentTimeline"> | string
    action?: StringWithAggregatesFilter<"IncidentTimeline"> | string
    actor?: StringWithAggregatesFilter<"IncidentTimeline"> | string
    details?: StringNullableWithAggregatesFilter<"IncidentTimeline"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IncidentTimeline"> | Date | string
  }

  export type ResponderWhereInput = {
    AND?: ResponderWhereInput | ResponderWhereInput[]
    OR?: ResponderWhereInput[]
    NOT?: ResponderWhereInput | ResponderWhereInput[]
    id?: StringFilter<"Responder"> | string
    name?: StringFilter<"Responder"> | string
    status?: StringFilter<"Responder"> | string
    email?: StringFilter<"Responder"> | string
    phone?: StringNullableFilter<"Responder"> | string | null
    skills?: StringFilter<"Responder"> | string
    location_lat?: FloatNullableFilter<"Responder"> | number | null
    location_lon?: FloatNullableFilter<"Responder"> | number | null
    availability?: BoolFilter<"Responder"> | boolean
    telegramChatId?: StringNullableFilter<"Responder"> | string | null
    telegramUsername?: StringNullableFilter<"Responder"> | string | null
    telegramLinkToken?: StringNullableFilter<"Responder"> | string | null
    telegramConnectedAt?: DateTimeNullableFilter<"Responder"> | Date | string | null
    lastHeartbeat?: DateTimeFilter<"Responder"> | Date | string
    createdAt?: DateTimeFilter<"Responder"> | Date | string
    updatedAt?: DateTimeFilter<"Responder"> | Date | string
    assignedIncidents?: IncidentListRelationFilter
    capabilities?: ResponderCapabilityListRelationFilter
  }

  export type ResponderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    skills?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    availability?: SortOrder
    telegramChatId?: SortOrder
    telegramUsername?: SortOrder
    telegramLinkToken?: SortOrder
    telegramConnectedAt?: SortOrder
    lastHeartbeat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedIncidents?: IncidentOrderByRelationAggregateInput
    capabilities?: ResponderCapabilityOrderByRelationAggregateInput
  }

  export type ResponderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ResponderWhereInput | ResponderWhereInput[]
    OR?: ResponderWhereInput[]
    NOT?: ResponderWhereInput | ResponderWhereInput[]
    name?: StringFilter<"Responder"> | string
    status?: StringFilter<"Responder"> | string
    phone?: StringNullableFilter<"Responder"> | string | null
    skills?: StringFilter<"Responder"> | string
    location_lat?: FloatNullableFilter<"Responder"> | number | null
    location_lon?: FloatNullableFilter<"Responder"> | number | null
    availability?: BoolFilter<"Responder"> | boolean
    telegramChatId?: StringNullableFilter<"Responder"> | string | null
    telegramUsername?: StringNullableFilter<"Responder"> | string | null
    telegramLinkToken?: StringNullableFilter<"Responder"> | string | null
    telegramConnectedAt?: DateTimeNullableFilter<"Responder"> | Date | string | null
    lastHeartbeat?: DateTimeFilter<"Responder"> | Date | string
    createdAt?: DateTimeFilter<"Responder"> | Date | string
    updatedAt?: DateTimeFilter<"Responder"> | Date | string
    assignedIncidents?: IncidentListRelationFilter
    capabilities?: ResponderCapabilityListRelationFilter
  }, "id" | "email">

  export type ResponderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    skills?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    availability?: SortOrder
    telegramChatId?: SortOrder
    telegramUsername?: SortOrder
    telegramLinkToken?: SortOrder
    telegramConnectedAt?: SortOrder
    lastHeartbeat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResponderCountOrderByAggregateInput
    _avg?: ResponderAvgOrderByAggregateInput
    _max?: ResponderMaxOrderByAggregateInput
    _min?: ResponderMinOrderByAggregateInput
    _sum?: ResponderSumOrderByAggregateInput
  }

  export type ResponderScalarWhereWithAggregatesInput = {
    AND?: ResponderScalarWhereWithAggregatesInput | ResponderScalarWhereWithAggregatesInput[]
    OR?: ResponderScalarWhereWithAggregatesInput[]
    NOT?: ResponderScalarWhereWithAggregatesInput | ResponderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Responder"> | string
    name?: StringWithAggregatesFilter<"Responder"> | string
    status?: StringWithAggregatesFilter<"Responder"> | string
    email?: StringWithAggregatesFilter<"Responder"> | string
    phone?: StringNullableWithAggregatesFilter<"Responder"> | string | null
    skills?: StringWithAggregatesFilter<"Responder"> | string
    location_lat?: FloatNullableWithAggregatesFilter<"Responder"> | number | null
    location_lon?: FloatNullableWithAggregatesFilter<"Responder"> | number | null
    availability?: BoolWithAggregatesFilter<"Responder"> | boolean
    telegramChatId?: StringNullableWithAggregatesFilter<"Responder"> | string | null
    telegramUsername?: StringNullableWithAggregatesFilter<"Responder"> | string | null
    telegramLinkToken?: StringNullableWithAggregatesFilter<"Responder"> | string | null
    telegramConnectedAt?: DateTimeNullableWithAggregatesFilter<"Responder"> | Date | string | null
    lastHeartbeat?: DateTimeWithAggregatesFilter<"Responder"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Responder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Responder"> | Date | string
  }

  export type ResponderCapabilityWhereInput = {
    AND?: ResponderCapabilityWhereInput | ResponderCapabilityWhereInput[]
    OR?: ResponderCapabilityWhereInput[]
    NOT?: ResponderCapabilityWhereInput | ResponderCapabilityWhereInput[]
    id?: StringFilter<"ResponderCapability"> | string
    responderId?: StringFilter<"ResponderCapability"> | string
    capability?: StringFilter<"ResponderCapability"> | string
    level?: StringFilter<"ResponderCapability"> | string
    certified?: BoolFilter<"ResponderCapability"> | boolean
    createdAt?: DateTimeFilter<"ResponderCapability"> | Date | string
    responder?: XOR<ResponderScalarRelationFilter, ResponderWhereInput>
  }

  export type ResponderCapabilityOrderByWithRelationInput = {
    id?: SortOrder
    responderId?: SortOrder
    capability?: SortOrder
    level?: SortOrder
    certified?: SortOrder
    createdAt?: SortOrder
    responder?: ResponderOrderByWithRelationInput
  }

  export type ResponderCapabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResponderCapabilityWhereInput | ResponderCapabilityWhereInput[]
    OR?: ResponderCapabilityWhereInput[]
    NOT?: ResponderCapabilityWhereInput | ResponderCapabilityWhereInput[]
    responderId?: StringFilter<"ResponderCapability"> | string
    capability?: StringFilter<"ResponderCapability"> | string
    level?: StringFilter<"ResponderCapability"> | string
    certified?: BoolFilter<"ResponderCapability"> | boolean
    createdAt?: DateTimeFilter<"ResponderCapability"> | Date | string
    responder?: XOR<ResponderScalarRelationFilter, ResponderWhereInput>
  }, "id">

  export type ResponderCapabilityOrderByWithAggregationInput = {
    id?: SortOrder
    responderId?: SortOrder
    capability?: SortOrder
    level?: SortOrder
    certified?: SortOrder
    createdAt?: SortOrder
    _count?: ResponderCapabilityCountOrderByAggregateInput
    _max?: ResponderCapabilityMaxOrderByAggregateInput
    _min?: ResponderCapabilityMinOrderByAggregateInput
  }

  export type ResponderCapabilityScalarWhereWithAggregatesInput = {
    AND?: ResponderCapabilityScalarWhereWithAggregatesInput | ResponderCapabilityScalarWhereWithAggregatesInput[]
    OR?: ResponderCapabilityScalarWhereWithAggregatesInput[]
    NOT?: ResponderCapabilityScalarWhereWithAggregatesInput | ResponderCapabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResponderCapability"> | string
    responderId?: StringWithAggregatesFilter<"ResponderCapability"> | string
    capability?: StringWithAggregatesFilter<"ResponderCapability"> | string
    level?: StringWithAggregatesFilter<"ResponderCapability"> | string
    certified?: BoolWithAggregatesFilter<"ResponderCapability"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ResponderCapability"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    description?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    description?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    actor?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    description?: StringWithAggregatesFilter<"AuditLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type SystemMetricsWhereInput = {
    AND?: SystemMetricsWhereInput | SystemMetricsWhereInput[]
    OR?: SystemMetricsWhereInput[]
    NOT?: SystemMetricsWhereInput | SystemMetricsWhereInput[]
    id?: StringFilter<"SystemMetrics"> | string
    timestamp?: DateTimeFilter<"SystemMetrics"> | Date | string
    activeIncidents?: IntFilter<"SystemMetrics"> | number
    responseTime?: FloatFilter<"SystemMetrics"> | number
    successRate?: FloatFilter<"SystemMetrics"> | number
    systemHealth?: StringFilter<"SystemMetrics"> | string
    uptime?: IntFilter<"SystemMetrics"> | number
  }

  export type SystemMetricsOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    activeIncidents?: SortOrder
    responseTime?: SortOrder
    successRate?: SortOrder
    systemHealth?: SortOrder
    uptime?: SortOrder
  }

  export type SystemMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemMetricsWhereInput | SystemMetricsWhereInput[]
    OR?: SystemMetricsWhereInput[]
    NOT?: SystemMetricsWhereInput | SystemMetricsWhereInput[]
    timestamp?: DateTimeFilter<"SystemMetrics"> | Date | string
    activeIncidents?: IntFilter<"SystemMetrics"> | number
    responseTime?: FloatFilter<"SystemMetrics"> | number
    successRate?: FloatFilter<"SystemMetrics"> | number
    systemHealth?: StringFilter<"SystemMetrics"> | string
    uptime?: IntFilter<"SystemMetrics"> | number
  }, "id">

  export type SystemMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    activeIncidents?: SortOrder
    responseTime?: SortOrder
    successRate?: SortOrder
    systemHealth?: SortOrder
    uptime?: SortOrder
    _count?: SystemMetricsCountOrderByAggregateInput
    _avg?: SystemMetricsAvgOrderByAggregateInput
    _max?: SystemMetricsMaxOrderByAggregateInput
    _min?: SystemMetricsMinOrderByAggregateInput
    _sum?: SystemMetricsSumOrderByAggregateInput
  }

  export type SystemMetricsScalarWhereWithAggregatesInput = {
    AND?: SystemMetricsScalarWhereWithAggregatesInput | SystemMetricsScalarWhereWithAggregatesInput[]
    OR?: SystemMetricsScalarWhereWithAggregatesInput[]
    NOT?: SystemMetricsScalarWhereWithAggregatesInput | SystemMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemMetrics"> | string
    timestamp?: DateTimeWithAggregatesFilter<"SystemMetrics"> | Date | string
    activeIncidents?: IntWithAggregatesFilter<"SystemMetrics"> | number
    responseTime?: FloatWithAggregatesFilter<"SystemMetrics"> | number
    successRate?: FloatWithAggregatesFilter<"SystemMetrics"> | number
    systemHealth?: StringWithAggregatesFilter<"SystemMetrics"> | string
    uptime?: IntWithAggregatesFilter<"SystemMetrics"> | number
  }

  export type ServiceConnectionWhereInput = {
    AND?: ServiceConnectionWhereInput | ServiceConnectionWhereInput[]
    OR?: ServiceConnectionWhereInput[]
    NOT?: ServiceConnectionWhereInput | ServiceConnectionWhereInput[]
    id?: StringFilter<"ServiceConnection"> | string
    service?: StringFilter<"ServiceConnection"> | string
    status?: StringFilter<"ServiceConnection"> | string
    lastCheck?: DateTimeFilter<"ServiceConnection"> | Date | string
    health?: StringFilter<"ServiceConnection"> | string
    updatedAt?: DateTimeFilter<"ServiceConnection"> | Date | string
  }

  export type ServiceConnectionOrderByWithRelationInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    lastCheck?: SortOrder
    health?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    service?: string
    AND?: ServiceConnectionWhereInput | ServiceConnectionWhereInput[]
    OR?: ServiceConnectionWhereInput[]
    NOT?: ServiceConnectionWhereInput | ServiceConnectionWhereInput[]
    status?: StringFilter<"ServiceConnection"> | string
    lastCheck?: DateTimeFilter<"ServiceConnection"> | Date | string
    health?: StringFilter<"ServiceConnection"> | string
    updatedAt?: DateTimeFilter<"ServiceConnection"> | Date | string
  }, "id" | "service">

  export type ServiceConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    lastCheck?: SortOrder
    health?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceConnectionCountOrderByAggregateInput
    _max?: ServiceConnectionMaxOrderByAggregateInput
    _min?: ServiceConnectionMinOrderByAggregateInput
  }

  export type ServiceConnectionScalarWhereWithAggregatesInput = {
    AND?: ServiceConnectionScalarWhereWithAggregatesInput | ServiceConnectionScalarWhereWithAggregatesInput[]
    OR?: ServiceConnectionScalarWhereWithAggregatesInput[]
    NOT?: ServiceConnectionScalarWhereWithAggregatesInput | ServiceConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceConnection"> | string
    service?: StringWithAggregatesFilter<"ServiceConnection"> | string
    status?: StringWithAggregatesFilter<"ServiceConnection"> | string
    lastCheck?: DateTimeWithAggregatesFilter<"ServiceConnection"> | Date | string
    health?: StringWithAggregatesFilter<"ServiceConnection"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceConnection"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string
    role?: string
    isRootController?: boolean
    isActive?: boolean
    isTempPassword?: boolean
    mustChangePassword?: boolean
    phone?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    organizationId: string
    name: string
    email: string
    passwordHash?: string
    role?: string
    isRootController?: boolean
    isActive?: boolean
    isTempPassword?: boolean
    mustChangePassword?: boolean
    phone?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isRootController?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isTempPassword?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isRootController?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isTempPassword?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    organizationId: string
    name: string
    email: string
    passwordHash?: string
    role?: string
    isRootController?: boolean
    isActive?: boolean
    isTempPassword?: boolean
    mustChangePassword?: boolean
    phone?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isRootController?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isTempPassword?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isRootController?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isTempPassword?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateInput = {
    id?: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutIncidentsInput
    events?: IncidentEventCreateNestedManyWithoutIncidentInput
    timeline?: IncidentTimelineCreateNestedManyWithoutIncidentInput
    messages?: IncidentMessageCreateNestedManyWithoutIncidentInput
    responder?: ResponderCreateNestedOneWithoutAssignedIncidentsInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    organizationId: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    responderId?: string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: IncidentEventUncheckedCreateNestedManyWithoutIncidentInput
    timeline?: IncidentTimelineUncheckedCreateNestedManyWithoutIncidentInput
    messages?: IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutIncidentsNestedInput
    events?: IncidentEventUpdateManyWithoutIncidentNestedInput
    timeline?: IncidentTimelineUpdateManyWithoutIncidentNestedInput
    messages?: IncidentMessageUpdateManyWithoutIncidentNestedInput
    responder?: ResponderUpdateOneWithoutAssignedIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responderId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput
    timeline?: IncidentTimelineUncheckedUpdateManyWithoutIncidentNestedInput
    messages?: IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateManyInput = {
    id?: string
    organizationId: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    responderId?: string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responderId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentMessageCreateInput = {
    id?: string
    senderType: string
    senderName: string
    senderId?: string | null
    content: string
    telegramMessageId?: string | null
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutMessagesInput
  }

  export type IncidentMessageUncheckedCreateInput = {
    id?: string
    incidentId: string
    senderType: string
    senderName: string
    senderId?: string | null
    content: string
    telegramMessageId?: string | null
    createdAt?: Date | string
  }

  export type IncidentMessageUpdateInput = {
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type IncidentMessageUncheckedUpdateInput = {
    incidentId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentMessageCreateManyInput = {
    id?: string
    incidentId: string
    senderType: string
    senderName: string
    senderId?: string | null
    content: string
    telegramMessageId?: string | null
    createdAt?: Date | string
  }

  export type IncidentMessageUpdateManyMutationInput = {
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentMessageUncheckedUpdateManyInput = {
    incidentId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventCreateInput = {
    id?: string
    type: string
    data?: string | null
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutEventsInput
  }

  export type IncidentEventUncheckedCreateInput = {
    id?: string
    incidentId: string
    type: string
    data?: string | null
    createdAt?: Date | string
  }

  export type IncidentEventUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutEventsNestedInput
  }

  export type IncidentEventUncheckedUpdateInput = {
    incidentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventCreateManyInput = {
    id?: string
    incidentId: string
    type: string
    data?: string | null
    createdAt?: Date | string
  }

  export type IncidentEventUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventUncheckedUpdateManyInput = {
    incidentId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentTimelineCreateInput = {
    id?: string
    action: string
    actor: string
    details?: string | null
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutTimelineInput
  }

  export type IncidentTimelineUncheckedCreateInput = {
    id?: string
    incidentId: string
    action: string
    actor: string
    details?: string | null
    createdAt?: Date | string
  }

  export type IncidentTimelineUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutTimelineNestedInput
  }

  export type IncidentTimelineUncheckedUpdateInput = {
    incidentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentTimelineCreateManyInput = {
    id?: string
    incidentId: string
    action: string
    actor: string
    details?: string | null
    createdAt?: Date | string
  }

  export type IncidentTimelineUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentTimelineUncheckedUpdateManyInput = {
    incidentId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponderCreateInput = {
    id?: string
    name: string
    status: string
    email: string
    phone?: string | null
    skills?: string
    location_lat?: number | null
    location_lon?: number | null
    availability?: boolean
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkToken?: string | null
    telegramConnectedAt?: Date | string | null
    lastHeartbeat?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedIncidents?: IncidentCreateNestedManyWithoutResponderInput
    capabilities?: ResponderCapabilityCreateNestedManyWithoutResponderInput
  }

  export type ResponderUncheckedCreateInput = {
    id?: string
    name: string
    status: string
    email: string
    phone?: string | null
    skills?: string
    location_lat?: number | null
    location_lon?: number | null
    availability?: boolean
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkToken?: string | null
    telegramConnectedAt?: Date | string | null
    lastHeartbeat?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedIncidents?: IncidentUncheckedCreateNestedManyWithoutResponderInput
    capabilities?: ResponderCapabilityUncheckedCreateNestedManyWithoutResponderInput
  }

  export type ResponderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedIncidents?: IncidentUpdateManyWithoutResponderNestedInput
    capabilities?: ResponderCapabilityUpdateManyWithoutResponderNestedInput
  }

  export type ResponderUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedIncidents?: IncidentUncheckedUpdateManyWithoutResponderNestedInput
    capabilities?: ResponderCapabilityUncheckedUpdateManyWithoutResponderNestedInput
  }

  export type ResponderCreateManyInput = {
    id?: string
    name: string
    status: string
    email: string
    phone?: string | null
    skills?: string
    location_lat?: number | null
    location_lon?: number | null
    availability?: boolean
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkToken?: string | null
    telegramConnectedAt?: Date | string | null
    lastHeartbeat?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResponderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponderUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponderCapabilityCreateInput = {
    id?: string
    capability: string
    level: string
    certified?: boolean
    createdAt?: Date | string
    responder: ResponderCreateNestedOneWithoutCapabilitiesInput
  }

  export type ResponderCapabilityUncheckedCreateInput = {
    id?: string
    responderId: string
    capability: string
    level: string
    certified?: boolean
    createdAt?: Date | string
  }

  export type ResponderCapabilityUpdateInput = {
    capability?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responder?: ResponderUpdateOneRequiredWithoutCapabilitiesNestedInput
  }

  export type ResponderCapabilityUncheckedUpdateInput = {
    responderId?: StringFieldUpdateOperationsInput | string
    capability?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponderCapabilityCreateManyInput = {
    id?: string
    responderId: string
    capability: string
    level: string
    certified?: boolean
    createdAt?: Date | string
  }

  export type ResponderCapabilityUpdateManyMutationInput = {
    capability?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponderCapabilityUncheckedUpdateManyInput = {
    responderId?: StringFieldUpdateOperationsInput | string
    capability?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    timestamp?: Date | string
    actor: string
    action: string
    description: string
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    actor: string
    action: string
    description: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    timestamp?: Date | string
    actor: string
    action: string
    description: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMetricsCreateInput = {
    id?: string
    timestamp?: Date | string
    activeIncidents: number
    responseTime: number
    successRate: number
    systemHealth: string
    uptime: number
  }

  export type SystemMetricsUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    activeIncidents: number
    responseTime: number
    successRate: number
    systemHealth: string
    uptime: number
  }

  export type SystemMetricsUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activeIncidents?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    systemHealth?: StringFieldUpdateOperationsInput | string
    uptime?: IntFieldUpdateOperationsInput | number
  }

  export type SystemMetricsUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activeIncidents?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    systemHealth?: StringFieldUpdateOperationsInput | string
    uptime?: IntFieldUpdateOperationsInput | number
  }

  export type SystemMetricsCreateManyInput = {
    id?: string
    timestamp?: Date | string
    activeIncidents: number
    responseTime: number
    successRate: number
    systemHealth: string
    uptime: number
  }

  export type SystemMetricsUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activeIncidents?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    systemHealth?: StringFieldUpdateOperationsInput | string
    uptime?: IntFieldUpdateOperationsInput | number
  }

  export type SystemMetricsUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activeIncidents?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    successRate?: FloatFieldUpdateOperationsInput | number
    systemHealth?: StringFieldUpdateOperationsInput | string
    uptime?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceConnectionCreateInput = {
    id?: string
    service: string
    status?: string
    lastCheck?: Date | string
    health?: string
    updatedAt?: Date | string
  }

  export type ServiceConnectionUncheckedCreateInput = {
    id?: string
    service: string
    status?: string
    lastCheck?: Date | string
    health?: string
    updatedAt?: Date | string
  }

  export type ServiceConnectionUpdateInput = {
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastCheck?: DateTimeFieldUpdateOperationsInput | Date | string
    health?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceConnectionUncheckedUpdateInput = {
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastCheck?: DateTimeFieldUpdateOperationsInput | Date | string
    health?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceConnectionCreateManyInput = {
    id?: string
    service: string
    status?: string
    lastCheck?: Date | string
    health?: string
    updatedAt?: Date | string
  }

  export type ServiceConnectionUpdateManyMutationInput = {
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastCheck?: DateTimeFieldUpdateOperationsInput | Date | string
    health?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceConnectionUncheckedUpdateManyInput = {
    service?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastCheck?: DateTimeFieldUpdateOperationsInput | Date | string
    health?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isRootController?: SortOrder
    isActive?: SortOrder
    isTempPassword?: SortOrder
    mustChangePassword?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isRootController?: SortOrder
    isActive?: SortOrder
    isTempPassword?: SortOrder
    mustChangePassword?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isRootController?: SortOrder
    isActive?: SortOrder
    isTempPassword?: SortOrder
    mustChangePassword?: SortOrder
    phone?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type IncidentEventListRelationFilter = {
    every?: IncidentEventWhereInput
    some?: IncidentEventWhereInput
    none?: IncidentEventWhereInput
  }

  export type IncidentTimelineListRelationFilter = {
    every?: IncidentTimelineWhereInput
    some?: IncidentTimelineWhereInput
    none?: IncidentTimelineWhereInput
  }

  export type IncidentMessageListRelationFilter = {
    every?: IncidentMessageWhereInput
    some?: IncidentMessageWhereInput
    none?: IncidentMessageWhereInput
  }

  export type ResponderNullableScalarRelationFilter = {
    is?: ResponderWhereInput | null
    isNot?: ResponderWhereInput | null
  }

  export type IncidentEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentTimelineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    location?: SortOrder
    description?: SortOrder
    reporterId?: SortOrder
    reporterName?: SortOrder
    reporterTelegramChatId?: SortOrder
    reporterTelegramMessageId?: SortOrder
    telegramChatId?: SortOrder
    telegramMessageId?: SortOrder
    assignedTo?: SortOrder
    assignedToName?: SortOrder
    assignedAt?: SortOrder
    responderId?: SortOrder
    estimatedArrival?: SortOrder
    acknowledgedAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    priority?: SortOrder
    tags?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    attachments?: SortOrder
    aiAnalysisStatus?: SortOrder
    aiAnalysisSummary?: SortOrder
    aiActionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentAvgOrderByAggregateInput = {
    priority?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    location?: SortOrder
    description?: SortOrder
    reporterId?: SortOrder
    reporterName?: SortOrder
    reporterTelegramChatId?: SortOrder
    reporterTelegramMessageId?: SortOrder
    telegramChatId?: SortOrder
    telegramMessageId?: SortOrder
    assignedTo?: SortOrder
    assignedToName?: SortOrder
    assignedAt?: SortOrder
    responderId?: SortOrder
    estimatedArrival?: SortOrder
    acknowledgedAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    priority?: SortOrder
    tags?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    attachments?: SortOrder
    aiAnalysisStatus?: SortOrder
    aiAnalysisSummary?: SortOrder
    aiActionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    location?: SortOrder
    description?: SortOrder
    reporterId?: SortOrder
    reporterName?: SortOrder
    reporterTelegramChatId?: SortOrder
    reporterTelegramMessageId?: SortOrder
    telegramChatId?: SortOrder
    telegramMessageId?: SortOrder
    assignedTo?: SortOrder
    assignedToName?: SortOrder
    assignedAt?: SortOrder
    responderId?: SortOrder
    estimatedArrival?: SortOrder
    acknowledgedAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    priority?: SortOrder
    tags?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    attachments?: SortOrder
    aiAnalysisStatus?: SortOrder
    aiAnalysisSummary?: SortOrder
    aiActionPlan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentSumOrderByAggregateInput = {
    priority?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type IncidentScalarRelationFilter = {
    is?: IncidentWhereInput
    isNot?: IncidentWhereInput
  }

  export type IncidentMessageCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    telegramMessageId?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    telegramMessageId?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentMessageMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    senderType?: SortOrder
    senderName?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    telegramMessageId?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentEventCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentEventMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentEventMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentTimelineCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    action?: SortOrder
    actor?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentTimelineMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    action?: SortOrder
    actor?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentTimelineMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    action?: SortOrder
    actor?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ResponderCapabilityListRelationFilter = {
    every?: ResponderCapabilityWhereInput
    some?: ResponderCapabilityWhereInput
    none?: ResponderCapabilityWhereInput
  }

  export type ResponderCapabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResponderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    skills?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    availability?: SortOrder
    telegramChatId?: SortOrder
    telegramUsername?: SortOrder
    telegramLinkToken?: SortOrder
    telegramConnectedAt?: SortOrder
    lastHeartbeat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResponderAvgOrderByAggregateInput = {
    location_lat?: SortOrder
    location_lon?: SortOrder
  }

  export type ResponderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    skills?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    availability?: SortOrder
    telegramChatId?: SortOrder
    telegramUsername?: SortOrder
    telegramLinkToken?: SortOrder
    telegramConnectedAt?: SortOrder
    lastHeartbeat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResponderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    skills?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    availability?: SortOrder
    telegramChatId?: SortOrder
    telegramUsername?: SortOrder
    telegramLinkToken?: SortOrder
    telegramConnectedAt?: SortOrder
    lastHeartbeat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResponderSumOrderByAggregateInput = {
    location_lat?: SortOrder
    location_lon?: SortOrder
  }

  export type ResponderScalarRelationFilter = {
    is?: ResponderWhereInput
    isNot?: ResponderWhereInput
  }

  export type ResponderCapabilityCountOrderByAggregateInput = {
    id?: SortOrder
    responderId?: SortOrder
    capability?: SortOrder
    level?: SortOrder
    certified?: SortOrder
    createdAt?: SortOrder
  }

  export type ResponderCapabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    responderId?: SortOrder
    capability?: SortOrder
    level?: SortOrder
    certified?: SortOrder
    createdAt?: SortOrder
  }

  export type ResponderCapabilityMinOrderByAggregateInput = {
    id?: SortOrder
    responderId?: SortOrder
    capability?: SortOrder
    level?: SortOrder
    certified?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    actor?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
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

  export type SystemMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    activeIncidents?: SortOrder
    responseTime?: SortOrder
    successRate?: SortOrder
    systemHealth?: SortOrder
    uptime?: SortOrder
  }

  export type SystemMetricsAvgOrderByAggregateInput = {
    activeIncidents?: SortOrder
    responseTime?: SortOrder
    successRate?: SortOrder
    uptime?: SortOrder
  }

  export type SystemMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    activeIncidents?: SortOrder
    responseTime?: SortOrder
    successRate?: SortOrder
    systemHealth?: SortOrder
    uptime?: SortOrder
  }

  export type SystemMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    activeIncidents?: SortOrder
    responseTime?: SortOrder
    successRate?: SortOrder
    systemHealth?: SortOrder
    uptime?: SortOrder
  }

  export type SystemMetricsSumOrderByAggregateInput = {
    activeIncidents?: SortOrder
    responseTime?: SortOrder
    successRate?: SortOrder
    uptime?: SortOrder
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

  export type ServiceConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    lastCheck?: SortOrder
    health?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    lastCheck?: SortOrder
    health?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    service?: SortOrder
    status?: SortOrder
    lastCheck?: SortOrder
    health?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput> | IncidentCreateWithoutOrganizationInput[] | IncidentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOrganizationInput | IncidentCreateOrConnectWithoutOrganizationInput[]
    createMany?: IncidentCreateManyOrganizationInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput> | IncidentCreateWithoutOrganizationInput[] | IncidentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOrganizationInput | IncidentCreateOrConnectWithoutOrganizationInput[]
    createMany?: IncidentCreateManyOrganizationInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput> | IncidentCreateWithoutOrganizationInput[] | IncidentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOrganizationInput | IncidentCreateOrConnectWithoutOrganizationInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutOrganizationInput | IncidentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: IncidentCreateManyOrganizationInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutOrganizationInput | IncidentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutOrganizationInput | IncidentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput> | IncidentCreateWithoutOrganizationInput[] | IncidentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOrganizationInput | IncidentCreateOrConnectWithoutOrganizationInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutOrganizationInput | IncidentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: IncidentCreateManyOrganizationInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutOrganizationInput | IncidentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutOrganizationInput | IncidentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<OrganizationCreateWithoutIncidentsInput, OrganizationUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutIncidentsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type IncidentEventCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput> | IncidentEventCreateWithoutIncidentInput[] | IncidentEventUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutIncidentInput | IncidentEventCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentEventCreateManyIncidentInputEnvelope
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
  }

  export type IncidentTimelineCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentTimelineCreateWithoutIncidentInput, IncidentTimelineUncheckedCreateWithoutIncidentInput> | IncidentTimelineCreateWithoutIncidentInput[] | IncidentTimelineUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentTimelineCreateOrConnectWithoutIncidentInput | IncidentTimelineCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentTimelineCreateManyIncidentInputEnvelope
    connect?: IncidentTimelineWhereUniqueInput | IncidentTimelineWhereUniqueInput[]
  }

  export type IncidentMessageCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput> | IncidentMessageCreateWithoutIncidentInput[] | IncidentMessageUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutIncidentInput | IncidentMessageCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentMessageCreateManyIncidentInputEnvelope
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
  }

  export type ResponderCreateNestedOneWithoutAssignedIncidentsInput = {
    create?: XOR<ResponderCreateWithoutAssignedIncidentsInput, ResponderUncheckedCreateWithoutAssignedIncidentsInput>
    connectOrCreate?: ResponderCreateOrConnectWithoutAssignedIncidentsInput
    connect?: ResponderWhereUniqueInput
  }

  export type IncidentEventUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput> | IncidentEventCreateWithoutIncidentInput[] | IncidentEventUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutIncidentInput | IncidentEventCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentEventCreateManyIncidentInputEnvelope
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
  }

  export type IncidentTimelineUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentTimelineCreateWithoutIncidentInput, IncidentTimelineUncheckedCreateWithoutIncidentInput> | IncidentTimelineCreateWithoutIncidentInput[] | IncidentTimelineUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentTimelineCreateOrConnectWithoutIncidentInput | IncidentTimelineCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentTimelineCreateManyIncidentInputEnvelope
    connect?: IncidentTimelineWhereUniqueInput | IncidentTimelineWhereUniqueInput[]
  }

  export type IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput> | IncidentMessageCreateWithoutIncidentInput[] | IncidentMessageUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutIncidentInput | IncidentMessageCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentMessageCreateManyIncidentInputEnvelope
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type OrganizationUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<OrganizationCreateWithoutIncidentsInput, OrganizationUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutIncidentsInput
    upsert?: OrganizationUpsertWithoutIncidentsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutIncidentsInput, OrganizationUpdateWithoutIncidentsInput>, OrganizationUncheckedUpdateWithoutIncidentsInput>
  }

  export type IncidentEventUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput> | IncidentEventCreateWithoutIncidentInput[] | IncidentEventUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutIncidentInput | IncidentEventCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentEventUpsertWithWhereUniqueWithoutIncidentInput | IncidentEventUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentEventCreateManyIncidentInputEnvelope
    set?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    disconnect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    delete?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    update?: IncidentEventUpdateWithWhereUniqueWithoutIncidentInput | IncidentEventUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentEventUpdateManyWithWhereWithoutIncidentInput | IncidentEventUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentEventScalarWhereInput | IncidentEventScalarWhereInput[]
  }

  export type IncidentTimelineUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentTimelineCreateWithoutIncidentInput, IncidentTimelineUncheckedCreateWithoutIncidentInput> | IncidentTimelineCreateWithoutIncidentInput[] | IncidentTimelineUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentTimelineCreateOrConnectWithoutIncidentInput | IncidentTimelineCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentTimelineUpsertWithWhereUniqueWithoutIncidentInput | IncidentTimelineUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentTimelineCreateManyIncidentInputEnvelope
    set?: IncidentTimelineWhereUniqueInput | IncidentTimelineWhereUniqueInput[]
    disconnect?: IncidentTimelineWhereUniqueInput | IncidentTimelineWhereUniqueInput[]
    delete?: IncidentTimelineWhereUniqueInput | IncidentTimelineWhereUniqueInput[]
    connect?: IncidentTimelineWhereUniqueInput | IncidentTimelineWhereUniqueInput[]
    update?: IncidentTimelineUpdateWithWhereUniqueWithoutIncidentInput | IncidentTimelineUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentTimelineUpdateManyWithWhereWithoutIncidentInput | IncidentTimelineUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentTimelineScalarWhereInput | IncidentTimelineScalarWhereInput[]
  }

  export type IncidentMessageUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput> | IncidentMessageCreateWithoutIncidentInput[] | IncidentMessageUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutIncidentInput | IncidentMessageCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentMessageUpsertWithWhereUniqueWithoutIncidentInput | IncidentMessageUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentMessageCreateManyIncidentInputEnvelope
    set?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    disconnect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    delete?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    update?: IncidentMessageUpdateWithWhereUniqueWithoutIncidentInput | IncidentMessageUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentMessageUpdateManyWithWhereWithoutIncidentInput | IncidentMessageUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentMessageScalarWhereInput | IncidentMessageScalarWhereInput[]
  }

  export type ResponderUpdateOneWithoutAssignedIncidentsNestedInput = {
    create?: XOR<ResponderCreateWithoutAssignedIncidentsInput, ResponderUncheckedCreateWithoutAssignedIncidentsInput>
    connectOrCreate?: ResponderCreateOrConnectWithoutAssignedIncidentsInput
    upsert?: ResponderUpsertWithoutAssignedIncidentsInput
    disconnect?: boolean
    delete?: ResponderWhereInput | boolean
    connect?: ResponderWhereUniqueInput
    update?: XOR<XOR<ResponderUpdateToOneWithWhereWithoutAssignedIncidentsInput, ResponderUpdateWithoutAssignedIncidentsInput>, ResponderUncheckedUpdateWithoutAssignedIncidentsInput>
  }

  export type IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput> | IncidentEventCreateWithoutIncidentInput[] | IncidentEventUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentEventCreateOrConnectWithoutIncidentInput | IncidentEventCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentEventUpsertWithWhereUniqueWithoutIncidentInput | IncidentEventUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentEventCreateManyIncidentInputEnvelope
    set?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    disconnect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    delete?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    connect?: IncidentEventWhereUniqueInput | IncidentEventWhereUniqueInput[]
    update?: IncidentEventUpdateWithWhereUniqueWithoutIncidentInput | IncidentEventUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentEventUpdateManyWithWhereWithoutIncidentInput | IncidentEventUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentEventScalarWhereInput | IncidentEventScalarWhereInput[]
  }

  export type IncidentTimelineUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentTimelineCreateWithoutIncidentInput, IncidentTimelineUncheckedCreateWithoutIncidentInput> | IncidentTimelineCreateWithoutIncidentInput[] | IncidentTimelineUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentTimelineCreateOrConnectWithoutIncidentInput | IncidentTimelineCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentTimelineUpsertWithWhereUniqueWithoutIncidentInput | IncidentTimelineUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentTimelineCreateManyIncidentInputEnvelope
    set?: IncidentTimelineWhereUniqueInput | IncidentTimelineWhereUniqueInput[]
    disconnect?: IncidentTimelineWhereUniqueInput | IncidentTimelineWhereUniqueInput[]
    delete?: IncidentTimelineWhereUniqueInput | IncidentTimelineWhereUniqueInput[]
    connect?: IncidentTimelineWhereUniqueInput | IncidentTimelineWhereUniqueInput[]
    update?: IncidentTimelineUpdateWithWhereUniqueWithoutIncidentInput | IncidentTimelineUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentTimelineUpdateManyWithWhereWithoutIncidentInput | IncidentTimelineUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentTimelineScalarWhereInput | IncidentTimelineScalarWhereInput[]
  }

  export type IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput> | IncidentMessageCreateWithoutIncidentInput[] | IncidentMessageUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentMessageCreateOrConnectWithoutIncidentInput | IncidentMessageCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentMessageUpsertWithWhereUniqueWithoutIncidentInput | IncidentMessageUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentMessageCreateManyIncidentInputEnvelope
    set?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    disconnect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    delete?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    connect?: IncidentMessageWhereUniqueInput | IncidentMessageWhereUniqueInput[]
    update?: IncidentMessageUpdateWithWhereUniqueWithoutIncidentInput | IncidentMessageUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentMessageUpdateManyWithWhereWithoutIncidentInput | IncidentMessageUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentMessageScalarWhereInput | IncidentMessageScalarWhereInput[]
  }

  export type IncidentCreateNestedOneWithoutMessagesInput = {
    create?: XOR<IncidentCreateWithoutMessagesInput, IncidentUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutMessagesInput
    connect?: IncidentWhereUniqueInput
  }

  export type IncidentUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<IncidentCreateWithoutMessagesInput, IncidentUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutMessagesInput
    upsert?: IncidentUpsertWithoutMessagesInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutMessagesInput, IncidentUpdateWithoutMessagesInput>, IncidentUncheckedUpdateWithoutMessagesInput>
  }

  export type IncidentCreateNestedOneWithoutEventsInput = {
    create?: XOR<IncidentCreateWithoutEventsInput, IncidentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutEventsInput
    connect?: IncidentWhereUniqueInput
  }

  export type IncidentUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<IncidentCreateWithoutEventsInput, IncidentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutEventsInput
    upsert?: IncidentUpsertWithoutEventsInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutEventsInput, IncidentUpdateWithoutEventsInput>, IncidentUncheckedUpdateWithoutEventsInput>
  }

  export type IncidentCreateNestedOneWithoutTimelineInput = {
    create?: XOR<IncidentCreateWithoutTimelineInput, IncidentUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutTimelineInput
    connect?: IncidentWhereUniqueInput
  }

  export type IncidentUpdateOneRequiredWithoutTimelineNestedInput = {
    create?: XOR<IncidentCreateWithoutTimelineInput, IncidentUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutTimelineInput
    upsert?: IncidentUpsertWithoutTimelineInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutTimelineInput, IncidentUpdateWithoutTimelineInput>, IncidentUncheckedUpdateWithoutTimelineInput>
  }

  export type IncidentCreateNestedManyWithoutResponderInput = {
    create?: XOR<IncidentCreateWithoutResponderInput, IncidentUncheckedCreateWithoutResponderInput> | IncidentCreateWithoutResponderInput[] | IncidentUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutResponderInput | IncidentCreateOrConnectWithoutResponderInput[]
    createMany?: IncidentCreateManyResponderInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ResponderCapabilityCreateNestedManyWithoutResponderInput = {
    create?: XOR<ResponderCapabilityCreateWithoutResponderInput, ResponderCapabilityUncheckedCreateWithoutResponderInput> | ResponderCapabilityCreateWithoutResponderInput[] | ResponderCapabilityUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: ResponderCapabilityCreateOrConnectWithoutResponderInput | ResponderCapabilityCreateOrConnectWithoutResponderInput[]
    createMany?: ResponderCapabilityCreateManyResponderInputEnvelope
    connect?: ResponderCapabilityWhereUniqueInput | ResponderCapabilityWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutResponderInput = {
    create?: XOR<IncidentCreateWithoutResponderInput, IncidentUncheckedCreateWithoutResponderInput> | IncidentCreateWithoutResponderInput[] | IncidentUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutResponderInput | IncidentCreateOrConnectWithoutResponderInput[]
    createMany?: IncidentCreateManyResponderInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type ResponderCapabilityUncheckedCreateNestedManyWithoutResponderInput = {
    create?: XOR<ResponderCapabilityCreateWithoutResponderInput, ResponderCapabilityUncheckedCreateWithoutResponderInput> | ResponderCapabilityCreateWithoutResponderInput[] | ResponderCapabilityUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: ResponderCapabilityCreateOrConnectWithoutResponderInput | ResponderCapabilityCreateOrConnectWithoutResponderInput[]
    createMany?: ResponderCapabilityCreateManyResponderInputEnvelope
    connect?: ResponderCapabilityWhereUniqueInput | ResponderCapabilityWhereUniqueInput[]
  }

  export type IncidentUpdateManyWithoutResponderNestedInput = {
    create?: XOR<IncidentCreateWithoutResponderInput, IncidentUncheckedCreateWithoutResponderInput> | IncidentCreateWithoutResponderInput[] | IncidentUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutResponderInput | IncidentCreateOrConnectWithoutResponderInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutResponderInput | IncidentUpsertWithWhereUniqueWithoutResponderInput[]
    createMany?: IncidentCreateManyResponderInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutResponderInput | IncidentUpdateWithWhereUniqueWithoutResponderInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutResponderInput | IncidentUpdateManyWithWhereWithoutResponderInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ResponderCapabilityUpdateManyWithoutResponderNestedInput = {
    create?: XOR<ResponderCapabilityCreateWithoutResponderInput, ResponderCapabilityUncheckedCreateWithoutResponderInput> | ResponderCapabilityCreateWithoutResponderInput[] | ResponderCapabilityUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: ResponderCapabilityCreateOrConnectWithoutResponderInput | ResponderCapabilityCreateOrConnectWithoutResponderInput[]
    upsert?: ResponderCapabilityUpsertWithWhereUniqueWithoutResponderInput | ResponderCapabilityUpsertWithWhereUniqueWithoutResponderInput[]
    createMany?: ResponderCapabilityCreateManyResponderInputEnvelope
    set?: ResponderCapabilityWhereUniqueInput | ResponderCapabilityWhereUniqueInput[]
    disconnect?: ResponderCapabilityWhereUniqueInput | ResponderCapabilityWhereUniqueInput[]
    delete?: ResponderCapabilityWhereUniqueInput | ResponderCapabilityWhereUniqueInput[]
    connect?: ResponderCapabilityWhereUniqueInput | ResponderCapabilityWhereUniqueInput[]
    update?: ResponderCapabilityUpdateWithWhereUniqueWithoutResponderInput | ResponderCapabilityUpdateWithWhereUniqueWithoutResponderInput[]
    updateMany?: ResponderCapabilityUpdateManyWithWhereWithoutResponderInput | ResponderCapabilityUpdateManyWithWhereWithoutResponderInput[]
    deleteMany?: ResponderCapabilityScalarWhereInput | ResponderCapabilityScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutResponderNestedInput = {
    create?: XOR<IncidentCreateWithoutResponderInput, IncidentUncheckedCreateWithoutResponderInput> | IncidentCreateWithoutResponderInput[] | IncidentUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutResponderInput | IncidentCreateOrConnectWithoutResponderInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutResponderInput | IncidentUpsertWithWhereUniqueWithoutResponderInput[]
    createMany?: IncidentCreateManyResponderInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutResponderInput | IncidentUpdateWithWhereUniqueWithoutResponderInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutResponderInput | IncidentUpdateManyWithWhereWithoutResponderInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type ResponderCapabilityUncheckedUpdateManyWithoutResponderNestedInput = {
    create?: XOR<ResponderCapabilityCreateWithoutResponderInput, ResponderCapabilityUncheckedCreateWithoutResponderInput> | ResponderCapabilityCreateWithoutResponderInput[] | ResponderCapabilityUncheckedCreateWithoutResponderInput[]
    connectOrCreate?: ResponderCapabilityCreateOrConnectWithoutResponderInput | ResponderCapabilityCreateOrConnectWithoutResponderInput[]
    upsert?: ResponderCapabilityUpsertWithWhereUniqueWithoutResponderInput | ResponderCapabilityUpsertWithWhereUniqueWithoutResponderInput[]
    createMany?: ResponderCapabilityCreateManyResponderInputEnvelope
    set?: ResponderCapabilityWhereUniqueInput | ResponderCapabilityWhereUniqueInput[]
    disconnect?: ResponderCapabilityWhereUniqueInput | ResponderCapabilityWhereUniqueInput[]
    delete?: ResponderCapabilityWhereUniqueInput | ResponderCapabilityWhereUniqueInput[]
    connect?: ResponderCapabilityWhereUniqueInput | ResponderCapabilityWhereUniqueInput[]
    update?: ResponderCapabilityUpdateWithWhereUniqueWithoutResponderInput | ResponderCapabilityUpdateWithWhereUniqueWithoutResponderInput[]
    updateMany?: ResponderCapabilityUpdateManyWithWhereWithoutResponderInput | ResponderCapabilityUpdateManyWithWhereWithoutResponderInput[]
    deleteMany?: ResponderCapabilityScalarWhereInput | ResponderCapabilityScalarWhereInput[]
  }

  export type ResponderCreateNestedOneWithoutCapabilitiesInput = {
    create?: XOR<ResponderCreateWithoutCapabilitiesInput, ResponderUncheckedCreateWithoutCapabilitiesInput>
    connectOrCreate?: ResponderCreateOrConnectWithoutCapabilitiesInput
    connect?: ResponderWhereUniqueInput
  }

  export type ResponderUpdateOneRequiredWithoutCapabilitiesNestedInput = {
    create?: XOR<ResponderCreateWithoutCapabilitiesInput, ResponderUncheckedCreateWithoutCapabilitiesInput>
    connectOrCreate?: ResponderCreateOrConnectWithoutCapabilitiesInput
    upsert?: ResponderUpsertWithoutCapabilitiesInput
    connect?: ResponderWhereUniqueInput
    update?: XOR<XOR<ResponderUpdateToOneWithWhereWithoutCapabilitiesInput, ResponderUpdateWithoutCapabilitiesInput>, ResponderUncheckedUpdateWithoutCapabilitiesInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
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

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string
    role?: string
    isRootController?: boolean
    isActive?: boolean
    isTempPassword?: boolean
    mustChangePassword?: boolean
    phone?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string
    role?: string
    isRootController?: boolean
    isActive?: boolean
    isTempPassword?: boolean
    mustChangePassword?: boolean
    phone?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
  }

  export type IncidentCreateWithoutOrganizationInput = {
    id?: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: IncidentEventCreateNestedManyWithoutIncidentInput
    timeline?: IncidentTimelineCreateNestedManyWithoutIncidentInput
    messages?: IncidentMessageCreateNestedManyWithoutIncidentInput
    responder?: ResponderCreateNestedOneWithoutAssignedIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutOrganizationInput = {
    id?: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    responderId?: string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: IncidentEventUncheckedCreateNestedManyWithoutIncidentInput
    timeline?: IncidentTimelineUncheckedCreateNestedManyWithoutIncidentInput
    messages?: IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutOrganizationInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput>
  }

  export type IncidentCreateManyOrganizationInputEnvelope = {
    data: IncidentCreateManyOrganizationInput | IncidentCreateManyOrganizationInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    organizationId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    isRootController?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    isTempPassword?: BoolFilter<"User"> | boolean
    mustChangePassword?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutOrganizationInput, IncidentUncheckedUpdateWithoutOrganizationInput>
    create: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutOrganizationInput, IncidentUncheckedUpdateWithoutOrganizationInput>
  }

  export type IncidentUpdateManyWithWhereWithoutOrganizationInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    organizationId?: StringFilter<"Incident"> | string
    type?: StringFilter<"Incident"> | string
    severity?: StringFilter<"Incident"> | string
    status?: StringFilter<"Incident"> | string
    location?: StringFilter<"Incident"> | string
    description?: StringNullableFilter<"Incident"> | string | null
    reporterId?: StringNullableFilter<"Incident"> | string | null
    reporterName?: StringNullableFilter<"Incident"> | string | null
    reporterTelegramChatId?: StringNullableFilter<"Incident"> | string | null
    reporterTelegramMessageId?: StringNullableFilter<"Incident"> | string | null
    telegramChatId?: StringNullableFilter<"Incident"> | string | null
    telegramMessageId?: StringNullableFilter<"Incident"> | string | null
    assignedTo?: StringNullableFilter<"Incident"> | string | null
    assignedToName?: StringNullableFilter<"Incident"> | string | null
    assignedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    responderId?: StringNullableFilter<"Incident"> | string | null
    estimatedArrival?: DateTimeNullableFilter<"Incident"> | Date | string | null
    acknowledgedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    resolvedBy?: StringNullableFilter<"Incident"> | string | null
    priority?: IntFilter<"Incident"> | number
    tags?: StringFilter<"Incident"> | string
    location_lat?: FloatNullableFilter<"Incident"> | number | null
    location_lon?: FloatNullableFilter<"Incident"> | number | null
    attachments?: StringFilter<"Incident"> | string
    aiAnalysisStatus?: StringNullableFilter<"Incident"> | string | null
    aiAnalysisSummary?: StringNullableFilter<"Incident"> | string | null
    aiActionPlan?: StringNullableFilter<"Incident"> | string | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    incidents?: IncidentCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutIncidentsInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutIncidentsInput = {
    id?: string
    name: string
    type: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutIncidentsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutIncidentsInput, OrganizationUncheckedCreateWithoutIncidentsInput>
  }

  export type IncidentEventCreateWithoutIncidentInput = {
    id?: string
    type: string
    data?: string | null
    createdAt?: Date | string
  }

  export type IncidentEventUncheckedCreateWithoutIncidentInput = {
    id?: string
    type: string
    data?: string | null
    createdAt?: Date | string
  }

  export type IncidentEventCreateOrConnectWithoutIncidentInput = {
    where: IncidentEventWhereUniqueInput
    create: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentEventCreateManyIncidentInputEnvelope = {
    data: IncidentEventCreateManyIncidentInput | IncidentEventCreateManyIncidentInput[]
  }

  export type IncidentTimelineCreateWithoutIncidentInput = {
    id?: string
    action: string
    actor: string
    details?: string | null
    createdAt?: Date | string
  }

  export type IncidentTimelineUncheckedCreateWithoutIncidentInput = {
    id?: string
    action: string
    actor: string
    details?: string | null
    createdAt?: Date | string
  }

  export type IncidentTimelineCreateOrConnectWithoutIncidentInput = {
    where: IncidentTimelineWhereUniqueInput
    create: XOR<IncidentTimelineCreateWithoutIncidentInput, IncidentTimelineUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentTimelineCreateManyIncidentInputEnvelope = {
    data: IncidentTimelineCreateManyIncidentInput | IncidentTimelineCreateManyIncidentInput[]
  }

  export type IncidentMessageCreateWithoutIncidentInput = {
    id?: string
    senderType: string
    senderName: string
    senderId?: string | null
    content: string
    telegramMessageId?: string | null
    createdAt?: Date | string
  }

  export type IncidentMessageUncheckedCreateWithoutIncidentInput = {
    id?: string
    senderType: string
    senderName: string
    senderId?: string | null
    content: string
    telegramMessageId?: string | null
    createdAt?: Date | string
  }

  export type IncidentMessageCreateOrConnectWithoutIncidentInput = {
    where: IncidentMessageWhereUniqueInput
    create: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentMessageCreateManyIncidentInputEnvelope = {
    data: IncidentMessageCreateManyIncidentInput | IncidentMessageCreateManyIncidentInput[]
  }

  export type ResponderCreateWithoutAssignedIncidentsInput = {
    id?: string
    name: string
    status: string
    email: string
    phone?: string | null
    skills?: string
    location_lat?: number | null
    location_lon?: number | null
    availability?: boolean
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkToken?: string | null
    telegramConnectedAt?: Date | string | null
    lastHeartbeat?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    capabilities?: ResponderCapabilityCreateNestedManyWithoutResponderInput
  }

  export type ResponderUncheckedCreateWithoutAssignedIncidentsInput = {
    id?: string
    name: string
    status: string
    email: string
    phone?: string | null
    skills?: string
    location_lat?: number | null
    location_lon?: number | null
    availability?: boolean
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkToken?: string | null
    telegramConnectedAt?: Date | string | null
    lastHeartbeat?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    capabilities?: ResponderCapabilityUncheckedCreateNestedManyWithoutResponderInput
  }

  export type ResponderCreateOrConnectWithoutAssignedIncidentsInput = {
    where: ResponderWhereUniqueInput
    create: XOR<ResponderCreateWithoutAssignedIncidentsInput, ResponderUncheckedCreateWithoutAssignedIncidentsInput>
  }

  export type OrganizationUpsertWithoutIncidentsInput = {
    update: XOR<OrganizationUpdateWithoutIncidentsInput, OrganizationUncheckedUpdateWithoutIncidentsInput>
    create: XOR<OrganizationCreateWithoutIncidentsInput, OrganizationUncheckedCreateWithoutIncidentsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutIncidentsInput, OrganizationUncheckedUpdateWithoutIncidentsInput>
  }

  export type OrganizationUpdateWithoutIncidentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutIncidentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type IncidentEventUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentEventWhereUniqueInput
    update: XOR<IncidentEventUpdateWithoutIncidentInput, IncidentEventUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentEventCreateWithoutIncidentInput, IncidentEventUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentEventUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentEventWhereUniqueInput
    data: XOR<IncidentEventUpdateWithoutIncidentInput, IncidentEventUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentEventUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentEventScalarWhereInput
    data: XOR<IncidentEventUpdateManyMutationInput, IncidentEventUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentEventScalarWhereInput = {
    AND?: IncidentEventScalarWhereInput | IncidentEventScalarWhereInput[]
    OR?: IncidentEventScalarWhereInput[]
    NOT?: IncidentEventScalarWhereInput | IncidentEventScalarWhereInput[]
    id?: StringFilter<"IncidentEvent"> | string
    incidentId?: StringFilter<"IncidentEvent"> | string
    type?: StringFilter<"IncidentEvent"> | string
    data?: StringNullableFilter<"IncidentEvent"> | string | null
    createdAt?: DateTimeFilter<"IncidentEvent"> | Date | string
  }

  export type IncidentTimelineUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentTimelineWhereUniqueInput
    update: XOR<IncidentTimelineUpdateWithoutIncidentInput, IncidentTimelineUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentTimelineCreateWithoutIncidentInput, IncidentTimelineUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentTimelineUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentTimelineWhereUniqueInput
    data: XOR<IncidentTimelineUpdateWithoutIncidentInput, IncidentTimelineUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentTimelineUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentTimelineScalarWhereInput
    data: XOR<IncidentTimelineUpdateManyMutationInput, IncidentTimelineUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentTimelineScalarWhereInput = {
    AND?: IncidentTimelineScalarWhereInput | IncidentTimelineScalarWhereInput[]
    OR?: IncidentTimelineScalarWhereInput[]
    NOT?: IncidentTimelineScalarWhereInput | IncidentTimelineScalarWhereInput[]
    id?: StringFilter<"IncidentTimeline"> | string
    incidentId?: StringFilter<"IncidentTimeline"> | string
    action?: StringFilter<"IncidentTimeline"> | string
    actor?: StringFilter<"IncidentTimeline"> | string
    details?: StringNullableFilter<"IncidentTimeline"> | string | null
    createdAt?: DateTimeFilter<"IncidentTimeline"> | Date | string
  }

  export type IncidentMessageUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentMessageWhereUniqueInput
    update: XOR<IncidentMessageUpdateWithoutIncidentInput, IncidentMessageUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentMessageCreateWithoutIncidentInput, IncidentMessageUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentMessageUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentMessageWhereUniqueInput
    data: XOR<IncidentMessageUpdateWithoutIncidentInput, IncidentMessageUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentMessageUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentMessageScalarWhereInput
    data: XOR<IncidentMessageUpdateManyMutationInput, IncidentMessageUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentMessageScalarWhereInput = {
    AND?: IncidentMessageScalarWhereInput | IncidentMessageScalarWhereInput[]
    OR?: IncidentMessageScalarWhereInput[]
    NOT?: IncidentMessageScalarWhereInput | IncidentMessageScalarWhereInput[]
    id?: StringFilter<"IncidentMessage"> | string
    incidentId?: StringFilter<"IncidentMessage"> | string
    senderType?: StringFilter<"IncidentMessage"> | string
    senderName?: StringFilter<"IncidentMessage"> | string
    senderId?: StringNullableFilter<"IncidentMessage"> | string | null
    content?: StringFilter<"IncidentMessage"> | string
    telegramMessageId?: StringNullableFilter<"IncidentMessage"> | string | null
    createdAt?: DateTimeFilter<"IncidentMessage"> | Date | string
  }

  export type ResponderUpsertWithoutAssignedIncidentsInput = {
    update: XOR<ResponderUpdateWithoutAssignedIncidentsInput, ResponderUncheckedUpdateWithoutAssignedIncidentsInput>
    create: XOR<ResponderCreateWithoutAssignedIncidentsInput, ResponderUncheckedCreateWithoutAssignedIncidentsInput>
    where?: ResponderWhereInput
  }

  export type ResponderUpdateToOneWithWhereWithoutAssignedIncidentsInput = {
    where?: ResponderWhereInput
    data: XOR<ResponderUpdateWithoutAssignedIncidentsInput, ResponderUncheckedUpdateWithoutAssignedIncidentsInput>
  }

  export type ResponderUpdateWithoutAssignedIncidentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capabilities?: ResponderCapabilityUpdateManyWithoutResponderNestedInput
  }

  export type ResponderUncheckedUpdateWithoutAssignedIncidentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capabilities?: ResponderCapabilityUncheckedUpdateManyWithoutResponderNestedInput
  }

  export type IncidentCreateWithoutMessagesInput = {
    id?: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutIncidentsInput
    events?: IncidentEventCreateNestedManyWithoutIncidentInput
    timeline?: IncidentTimelineCreateNestedManyWithoutIncidentInput
    responder?: ResponderCreateNestedOneWithoutAssignedIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutMessagesInput = {
    id?: string
    organizationId: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    responderId?: string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: IncidentEventUncheckedCreateNestedManyWithoutIncidentInput
    timeline?: IncidentTimelineUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutMessagesInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutMessagesInput, IncidentUncheckedCreateWithoutMessagesInput>
  }

  export type IncidentUpsertWithoutMessagesInput = {
    update: XOR<IncidentUpdateWithoutMessagesInput, IncidentUncheckedUpdateWithoutMessagesInput>
    create: XOR<IncidentCreateWithoutMessagesInput, IncidentUncheckedCreateWithoutMessagesInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutMessagesInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutMessagesInput, IncidentUncheckedUpdateWithoutMessagesInput>
  }

  export type IncidentUpdateWithoutMessagesInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutIncidentsNestedInput
    events?: IncidentEventUpdateManyWithoutIncidentNestedInput
    timeline?: IncidentTimelineUpdateManyWithoutIncidentNestedInput
    responder?: ResponderUpdateOneWithoutAssignedIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutMessagesInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responderId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput
    timeline?: IncidentTimelineUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateWithoutEventsInput = {
    id?: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutIncidentsInput
    timeline?: IncidentTimelineCreateNestedManyWithoutIncidentInput
    messages?: IncidentMessageCreateNestedManyWithoutIncidentInput
    responder?: ResponderCreateNestedOneWithoutAssignedIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutEventsInput = {
    id?: string
    organizationId: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    responderId?: string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    timeline?: IncidentTimelineUncheckedCreateNestedManyWithoutIncidentInput
    messages?: IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutEventsInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutEventsInput, IncidentUncheckedCreateWithoutEventsInput>
  }

  export type IncidentUpsertWithoutEventsInput = {
    update: XOR<IncidentUpdateWithoutEventsInput, IncidentUncheckedUpdateWithoutEventsInput>
    create: XOR<IncidentCreateWithoutEventsInput, IncidentUncheckedCreateWithoutEventsInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutEventsInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutEventsInput, IncidentUncheckedUpdateWithoutEventsInput>
  }

  export type IncidentUpdateWithoutEventsInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutIncidentsNestedInput
    timeline?: IncidentTimelineUpdateManyWithoutIncidentNestedInput
    messages?: IncidentMessageUpdateManyWithoutIncidentNestedInput
    responder?: ResponderUpdateOneWithoutAssignedIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutEventsInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responderId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: IncidentTimelineUncheckedUpdateManyWithoutIncidentNestedInput
    messages?: IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateWithoutTimelineInput = {
    id?: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutIncidentsInput
    events?: IncidentEventCreateNestedManyWithoutIncidentInput
    messages?: IncidentMessageCreateNestedManyWithoutIncidentInput
    responder?: ResponderCreateNestedOneWithoutAssignedIncidentsInput
  }

  export type IncidentUncheckedCreateWithoutTimelineInput = {
    id?: string
    organizationId: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    responderId?: string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: IncidentEventUncheckedCreateNestedManyWithoutIncidentInput
    messages?: IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutTimelineInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutTimelineInput, IncidentUncheckedCreateWithoutTimelineInput>
  }

  export type IncidentUpsertWithoutTimelineInput = {
    update: XOR<IncidentUpdateWithoutTimelineInput, IncidentUncheckedUpdateWithoutTimelineInput>
    create: XOR<IncidentCreateWithoutTimelineInput, IncidentUncheckedCreateWithoutTimelineInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutTimelineInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutTimelineInput, IncidentUncheckedUpdateWithoutTimelineInput>
  }

  export type IncidentUpdateWithoutTimelineInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutIncidentsNestedInput
    events?: IncidentEventUpdateManyWithoutIncidentNestedInput
    messages?: IncidentMessageUpdateManyWithoutIncidentNestedInput
    responder?: ResponderUpdateOneWithoutAssignedIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutTimelineInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responderId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput
    messages?: IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateWithoutResponderInput = {
    id?: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutIncidentsInput
    events?: IncidentEventCreateNestedManyWithoutIncidentInput
    timeline?: IncidentTimelineCreateNestedManyWithoutIncidentInput
    messages?: IncidentMessageCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutResponderInput = {
    id?: string
    organizationId: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: IncidentEventUncheckedCreateNestedManyWithoutIncidentInput
    timeline?: IncidentTimelineUncheckedCreateNestedManyWithoutIncidentInput
    messages?: IncidentMessageUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutResponderInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutResponderInput, IncidentUncheckedCreateWithoutResponderInput>
  }

  export type IncidentCreateManyResponderInputEnvelope = {
    data: IncidentCreateManyResponderInput | IncidentCreateManyResponderInput[]
  }

  export type ResponderCapabilityCreateWithoutResponderInput = {
    id?: string
    capability: string
    level: string
    certified?: boolean
    createdAt?: Date | string
  }

  export type ResponderCapabilityUncheckedCreateWithoutResponderInput = {
    id?: string
    capability: string
    level: string
    certified?: boolean
    createdAt?: Date | string
  }

  export type ResponderCapabilityCreateOrConnectWithoutResponderInput = {
    where: ResponderCapabilityWhereUniqueInput
    create: XOR<ResponderCapabilityCreateWithoutResponderInput, ResponderCapabilityUncheckedCreateWithoutResponderInput>
  }

  export type ResponderCapabilityCreateManyResponderInputEnvelope = {
    data: ResponderCapabilityCreateManyResponderInput | ResponderCapabilityCreateManyResponderInput[]
  }

  export type IncidentUpsertWithWhereUniqueWithoutResponderInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutResponderInput, IncidentUncheckedUpdateWithoutResponderInput>
    create: XOR<IncidentCreateWithoutResponderInput, IncidentUncheckedCreateWithoutResponderInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutResponderInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutResponderInput, IncidentUncheckedUpdateWithoutResponderInput>
  }

  export type IncidentUpdateManyWithWhereWithoutResponderInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutResponderInput>
  }

  export type ResponderCapabilityUpsertWithWhereUniqueWithoutResponderInput = {
    where: ResponderCapabilityWhereUniqueInput
    update: XOR<ResponderCapabilityUpdateWithoutResponderInput, ResponderCapabilityUncheckedUpdateWithoutResponderInput>
    create: XOR<ResponderCapabilityCreateWithoutResponderInput, ResponderCapabilityUncheckedCreateWithoutResponderInput>
  }

  export type ResponderCapabilityUpdateWithWhereUniqueWithoutResponderInput = {
    where: ResponderCapabilityWhereUniqueInput
    data: XOR<ResponderCapabilityUpdateWithoutResponderInput, ResponderCapabilityUncheckedUpdateWithoutResponderInput>
  }

  export type ResponderCapabilityUpdateManyWithWhereWithoutResponderInput = {
    where: ResponderCapabilityScalarWhereInput
    data: XOR<ResponderCapabilityUpdateManyMutationInput, ResponderCapabilityUncheckedUpdateManyWithoutResponderInput>
  }

  export type ResponderCapabilityScalarWhereInput = {
    AND?: ResponderCapabilityScalarWhereInput | ResponderCapabilityScalarWhereInput[]
    OR?: ResponderCapabilityScalarWhereInput[]
    NOT?: ResponderCapabilityScalarWhereInput | ResponderCapabilityScalarWhereInput[]
    id?: StringFilter<"ResponderCapability"> | string
    responderId?: StringFilter<"ResponderCapability"> | string
    capability?: StringFilter<"ResponderCapability"> | string
    level?: StringFilter<"ResponderCapability"> | string
    certified?: BoolFilter<"ResponderCapability"> | boolean
    createdAt?: DateTimeFilter<"ResponderCapability"> | Date | string
  }

  export type ResponderCreateWithoutCapabilitiesInput = {
    id?: string
    name: string
    status: string
    email: string
    phone?: string | null
    skills?: string
    location_lat?: number | null
    location_lon?: number | null
    availability?: boolean
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkToken?: string | null
    telegramConnectedAt?: Date | string | null
    lastHeartbeat?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedIncidents?: IncidentCreateNestedManyWithoutResponderInput
  }

  export type ResponderUncheckedCreateWithoutCapabilitiesInput = {
    id?: string
    name: string
    status: string
    email: string
    phone?: string | null
    skills?: string
    location_lat?: number | null
    location_lon?: number | null
    availability?: boolean
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkToken?: string | null
    telegramConnectedAt?: Date | string | null
    lastHeartbeat?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedIncidents?: IncidentUncheckedCreateNestedManyWithoutResponderInput
  }

  export type ResponderCreateOrConnectWithoutCapabilitiesInput = {
    where: ResponderWhereUniqueInput
    create: XOR<ResponderCreateWithoutCapabilitiesInput, ResponderUncheckedCreateWithoutCapabilitiesInput>
  }

  export type ResponderUpsertWithoutCapabilitiesInput = {
    update: XOR<ResponderUpdateWithoutCapabilitiesInput, ResponderUncheckedUpdateWithoutCapabilitiesInput>
    create: XOR<ResponderCreateWithoutCapabilitiesInput, ResponderUncheckedCreateWithoutCapabilitiesInput>
    where?: ResponderWhereInput
  }

  export type ResponderUpdateToOneWithWhereWithoutCapabilitiesInput = {
    where?: ResponderWhereInput
    data: XOR<ResponderUpdateWithoutCapabilitiesInput, ResponderUncheckedUpdateWithoutCapabilitiesInput>
  }

  export type ResponderUpdateWithoutCapabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedIncidents?: IncidentUpdateManyWithoutResponderNestedInput
  }

  export type ResponderUncheckedUpdateWithoutCapabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    availability?: BoolFieldUpdateOperationsInput | boolean
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkToken?: NullableStringFieldUpdateOperationsInput | string | null
    telegramConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastHeartbeat?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedIncidents?: IncidentUncheckedUpdateManyWithoutResponderNestedInput
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string
    role?: string
    isRootController?: boolean
    isActive?: boolean
    isTempPassword?: boolean
    mustChangePassword?: boolean
    phone?: string | null
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateManyOrganizationInput = {
    id?: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    responderId?: string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isRootController?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isTempPassword?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isRootController?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isTempPassword?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    isRootController?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isTempPassword?: BoolFieldUpdateOperationsInput | boolean
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutOrganizationInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: IncidentEventUpdateManyWithoutIncidentNestedInput
    timeline?: IncidentTimelineUpdateManyWithoutIncidentNestedInput
    messages?: IncidentMessageUpdateManyWithoutIncidentNestedInput
    responder?: ResponderUpdateOneWithoutAssignedIncidentsNestedInput
  }

  export type IncidentUncheckedUpdateWithoutOrganizationInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responderId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput
    timeline?: IncidentTimelineUncheckedUpdateManyWithoutIncidentNestedInput
    messages?: IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutOrganizationInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responderId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventCreateManyIncidentInput = {
    id?: string
    type: string
    data?: string | null
    createdAt?: Date | string
  }

  export type IncidentTimelineCreateManyIncidentInput = {
    id?: string
    action: string
    actor: string
    details?: string | null
    createdAt?: Date | string
  }

  export type IncidentMessageCreateManyIncidentInput = {
    id?: string
    senderType: string
    senderName: string
    senderId?: string | null
    content: string
    telegramMessageId?: string | null
    createdAt?: Date | string
  }

  export type IncidentEventUpdateWithoutIncidentInput = {
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventUncheckedUpdateWithoutIncidentInput = {
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentEventUncheckedUpdateManyWithoutIncidentInput = {
    type?: StringFieldUpdateOperationsInput | string
    data?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentTimelineUpdateWithoutIncidentInput = {
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentTimelineUncheckedUpdateWithoutIncidentInput = {
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentTimelineUncheckedUpdateManyWithoutIncidentInput = {
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentMessageUpdateWithoutIncidentInput = {
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentMessageUncheckedUpdateWithoutIncidentInput = {
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentMessageUncheckedUpdateManyWithoutIncidentInput = {
    senderType?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyResponderInput = {
    id?: string
    organizationId: string
    type: string
    severity: string
    status: string
    location: string
    description?: string | null
    reporterId?: string | null
    reporterName?: string | null
    reporterTelegramChatId?: string | null
    reporterTelegramMessageId?: string | null
    telegramChatId?: string | null
    telegramMessageId?: string | null
    assignedTo?: string | null
    assignedToName?: string | null
    assignedAt?: Date | string | null
    estimatedArrival?: Date | string | null
    acknowledgedAt?: Date | string | null
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    priority?: number
    tags?: string
    location_lat?: number | null
    location_lon?: number | null
    attachments?: string
    aiAnalysisStatus?: string | null
    aiAnalysisSummary?: string | null
    aiActionPlan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResponderCapabilityCreateManyResponderInput = {
    id?: string
    capability: string
    level: string
    certified?: boolean
    createdAt?: Date | string
  }

  export type IncidentUpdateWithoutResponderInput = {
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutIncidentsNestedInput
    events?: IncidentEventUpdateManyWithoutIncidentNestedInput
    timeline?: IncidentTimelineUpdateManyWithoutIncidentNestedInput
    messages?: IncidentMessageUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutResponderInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: IncidentEventUncheckedUpdateManyWithoutIncidentNestedInput
    timeline?: IncidentTimelineUncheckedUpdateManyWithoutIncidentNestedInput
    messages?: IncidentMessageUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutResponderInput = {
    organizationId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterTelegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    assignedToName?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedArrival?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    acknowledgedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    attachments?: StringFieldUpdateOperationsInput | string
    aiAnalysisStatus?: NullableStringFieldUpdateOperationsInput | string | null
    aiAnalysisSummary?: NullableStringFieldUpdateOperationsInput | string | null
    aiActionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponderCapabilityUpdateWithoutResponderInput = {
    capability?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponderCapabilityUncheckedUpdateWithoutResponderInput = {
    capability?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResponderCapabilityUncheckedUpdateManyWithoutResponderInput = {
    capability?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    certified?: BoolFieldUpdateOperationsInput | boolean
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