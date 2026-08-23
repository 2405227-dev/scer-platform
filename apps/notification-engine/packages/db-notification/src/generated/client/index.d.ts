
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
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model NotificationTemplate
 * 
 */
export type NotificationTemplate = $Result.DefaultSelection<Prisma.$NotificationTemplatePayload>
/**
 * Model NotificationDeliveryLog
 * 
 */
export type NotificationDeliveryLog = $Result.DefaultSelection<Prisma.$NotificationDeliveryLogPayload>
/**
 * Model NotificationRule
 * 
 */
export type NotificationRule = $Result.DefaultSelection<Prisma.$NotificationRulePayload>
/**
 * Model NotificationRecipient
 * 
 */
export type NotificationRecipient = $Result.DefaultSelection<Prisma.$NotificationRecipientPayload>
/**
 * Model NotificationAttempt
 * 
 */
export type NotificationAttempt = $Result.DefaultSelection<Prisma.$NotificationAttemptPayload>
/**
 * Model EscalationPolicy
 * 
 */
export type EscalationPolicy = $Result.DefaultSelection<Prisma.$EscalationPolicyPayload>
/**
 * Model NotificationPreferences
 * 
 */
export type NotificationPreferences = $Result.DefaultSelection<Prisma.$NotificationPreferencesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notifications
 * const notifications = await prisma.notification.findMany()
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
   * // Fetch zero or more Notifications
   * const notifications = await prisma.notification.findMany()
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
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationTemplate`: Exposes CRUD operations for the **NotificationTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationTemplates
    * const notificationTemplates = await prisma.notificationTemplate.findMany()
    * ```
    */
  get notificationTemplate(): Prisma.NotificationTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationDeliveryLog`: Exposes CRUD operations for the **NotificationDeliveryLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationDeliveryLogs
    * const notificationDeliveryLogs = await prisma.notificationDeliveryLog.findMany()
    * ```
    */
  get notificationDeliveryLog(): Prisma.NotificationDeliveryLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationRule`: Exposes CRUD operations for the **NotificationRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationRules
    * const notificationRules = await prisma.notificationRule.findMany()
    * ```
    */
  get notificationRule(): Prisma.NotificationRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationRecipient`: Exposes CRUD operations for the **NotificationRecipient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationRecipients
    * const notificationRecipients = await prisma.notificationRecipient.findMany()
    * ```
    */
  get notificationRecipient(): Prisma.NotificationRecipientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationAttempt`: Exposes CRUD operations for the **NotificationAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationAttempts
    * const notificationAttempts = await prisma.notificationAttempt.findMany()
    * ```
    */
  get notificationAttempt(): Prisma.NotificationAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.escalationPolicy`: Exposes CRUD operations for the **EscalationPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EscalationPolicies
    * const escalationPolicies = await prisma.escalationPolicy.findMany()
    * ```
    */
  get escalationPolicy(): Prisma.EscalationPolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationPreferences`: Exposes CRUD operations for the **NotificationPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationPreferences
    * const notificationPreferences = await prisma.notificationPreferences.findMany()
    * ```
    */
  get notificationPreferences(): Prisma.NotificationPreferencesDelegate<ExtArgs, ClientOptions>;
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
    Notification: 'Notification',
    NotificationTemplate: 'NotificationTemplate',
    NotificationDeliveryLog: 'NotificationDeliveryLog',
    NotificationRule: 'NotificationRule',
    NotificationRecipient: 'NotificationRecipient',
    NotificationAttempt: 'NotificationAttempt',
    EscalationPolicy: 'EscalationPolicy',
    NotificationPreferences: 'NotificationPreferences'
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
      modelProps: "notification" | "notificationTemplate" | "notificationDeliveryLog" | "notificationRule" | "notificationRecipient" | "notificationAttempt" | "escalationPolicy" | "notificationPreferences"
      txIsolationLevel: never
    }
    model: {
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      NotificationTemplate: {
        payload: Prisma.$NotificationTemplatePayload<ExtArgs>
        fields: Prisma.NotificationTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          findFirst: {
            args: Prisma.NotificationTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          findMany: {
            args: Prisma.NotificationTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>[]
          }
          create: {
            args: Prisma.NotificationTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          createMany: {
            args: Prisma.NotificationTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          update: {
            args: Prisma.NotificationTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          deleteMany: {
            args: Prisma.NotificationTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationTemplatePayload>
          }
          aggregate: {
            args: Prisma.NotificationTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationTemplate>
          }
          groupBy: {
            args: Prisma.NotificationTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationTemplateGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationTemplateFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationTemplateAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationTemplateCountAggregateOutputType> | number
          }
        }
      }
      NotificationDeliveryLog: {
        payload: Prisma.$NotificationDeliveryLogPayload<ExtArgs>
        fields: Prisma.NotificationDeliveryLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationDeliveryLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationDeliveryLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryLogPayload>
          }
          findFirst: {
            args: Prisma.NotificationDeliveryLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationDeliveryLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryLogPayload>
          }
          findMany: {
            args: Prisma.NotificationDeliveryLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryLogPayload>[]
          }
          create: {
            args: Prisma.NotificationDeliveryLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryLogPayload>
          }
          createMany: {
            args: Prisma.NotificationDeliveryLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeliveryLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryLogPayload>
          }
          update: {
            args: Prisma.NotificationDeliveryLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryLogPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeliveryLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationDeliveryLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationDeliveryLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationDeliveryLogPayload>
          }
          aggregate: {
            args: Prisma.NotificationDeliveryLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationDeliveryLog>
          }
          groupBy: {
            args: Prisma.NotificationDeliveryLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationDeliveryLogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationDeliveryLogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationDeliveryLogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationDeliveryLogCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationDeliveryLogCountAggregateOutputType> | number
          }
        }
      }
      NotificationRule: {
        payload: Prisma.$NotificationRulePayload<ExtArgs>
        fields: Prisma.NotificationRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRulePayload>
          }
          findFirst: {
            args: Prisma.NotificationRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRulePayload>
          }
          findMany: {
            args: Prisma.NotificationRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRulePayload>[]
          }
          create: {
            args: Prisma.NotificationRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRulePayload>
          }
          createMany: {
            args: Prisma.NotificationRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRulePayload>
          }
          update: {
            args: Prisma.NotificationRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRulePayload>
          }
          deleteMany: {
            args: Prisma.NotificationRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRulePayload>
          }
          aggregate: {
            args: Prisma.NotificationRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationRule>
          }
          groupBy: {
            args: Prisma.NotificationRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationRuleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationRuleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationRuleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationRuleCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationRuleCountAggregateOutputType> | number
          }
        }
      }
      NotificationRecipient: {
        payload: Prisma.$NotificationRecipientPayload<ExtArgs>
        fields: Prisma.NotificationRecipientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationRecipientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRecipientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationRecipientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRecipientPayload>
          }
          findFirst: {
            args: Prisma.NotificationRecipientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRecipientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationRecipientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRecipientPayload>
          }
          findMany: {
            args: Prisma.NotificationRecipientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRecipientPayload>[]
          }
          create: {
            args: Prisma.NotificationRecipientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRecipientPayload>
          }
          createMany: {
            args: Prisma.NotificationRecipientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationRecipientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRecipientPayload>
          }
          update: {
            args: Prisma.NotificationRecipientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRecipientPayload>
          }
          deleteMany: {
            args: Prisma.NotificationRecipientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationRecipientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationRecipientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationRecipientPayload>
          }
          aggregate: {
            args: Prisma.NotificationRecipientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationRecipient>
          }
          groupBy: {
            args: Prisma.NotificationRecipientGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationRecipientGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationRecipientFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationRecipientAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationRecipientCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationRecipientCountAggregateOutputType> | number
          }
        }
      }
      NotificationAttempt: {
        payload: Prisma.$NotificationAttemptPayload<ExtArgs>
        fields: Prisma.NotificationAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationAttemptPayload>
          }
          findFirst: {
            args: Prisma.NotificationAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationAttemptPayload>
          }
          findMany: {
            args: Prisma.NotificationAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationAttemptPayload>[]
          }
          create: {
            args: Prisma.NotificationAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationAttemptPayload>
          }
          createMany: {
            args: Prisma.NotificationAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationAttemptPayload>
          }
          update: {
            args: Prisma.NotificationAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationAttemptPayload>
          }
          deleteMany: {
            args: Prisma.NotificationAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationAttemptPayload>
          }
          aggregate: {
            args: Prisma.NotificationAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationAttempt>
          }
          groupBy: {
            args: Prisma.NotificationAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationAttemptGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationAttemptFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationAttemptAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationAttemptCountAggregateOutputType> | number
          }
        }
      }
      EscalationPolicy: {
        payload: Prisma.$EscalationPolicyPayload<ExtArgs>
        fields: Prisma.EscalationPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EscalationPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EscalationPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPolicyPayload>
          }
          findFirst: {
            args: Prisma.EscalationPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EscalationPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPolicyPayload>
          }
          findMany: {
            args: Prisma.EscalationPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPolicyPayload>[]
          }
          create: {
            args: Prisma.EscalationPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPolicyPayload>
          }
          createMany: {
            args: Prisma.EscalationPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EscalationPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPolicyPayload>
          }
          update: {
            args: Prisma.EscalationPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPolicyPayload>
          }
          deleteMany: {
            args: Prisma.EscalationPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EscalationPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EscalationPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EscalationPolicyPayload>
          }
          aggregate: {
            args: Prisma.EscalationPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEscalationPolicy>
          }
          groupBy: {
            args: Prisma.EscalationPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<EscalationPolicyGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EscalationPolicyFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EscalationPolicyAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EscalationPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<EscalationPolicyCountAggregateOutputType> | number
          }
        }
      }
      NotificationPreferences: {
        payload: Prisma.$NotificationPreferencesPayload<ExtArgs>
        fields: Prisma.NotificationPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          findFirst: {
            args: Prisma.NotificationPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          findMany: {
            args: Prisma.NotificationPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>[]
          }
          create: {
            args: Prisma.NotificationPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          createMany: {
            args: Prisma.NotificationPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          update: {
            args: Prisma.NotificationPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.NotificationPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPreferencesPayload>
          }
          aggregate: {
            args: Prisma.NotificationPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationPreferences>
          }
          groupBy: {
            args: Prisma.NotificationPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationPreferencesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationPreferencesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationPreferencesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationPreferencesCountAggregateOutputType> | number
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
    notification?: NotificationOmit
    notificationTemplate?: NotificationTemplateOmit
    notificationDeliveryLog?: NotificationDeliveryLogOmit
    notificationRule?: NotificationRuleOmit
    notificationRecipient?: NotificationRecipientOmit
    notificationAttempt?: NotificationAttemptOmit
    escalationPolicy?: EscalationPolicyOmit
    notificationPreferences?: NotificationPreferencesOmit
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
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    deliveryLogs: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveryLogs?: boolean | NotificationCountOutputTypeCountDeliveryLogsArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountDeliveryLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationDeliveryLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
  }

  export type NotificationSumAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    recipientEmail: string | null
    recipientPhone: string | null
    incidentId: string | null
    severity: string | null
    channel: string | null
    attempts: number | null
    maxAttempts: number | null
    nextRetry: Date | null
    sentAt: Date | null
    readAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    recipientEmail: string | null
    recipientPhone: string | null
    incidentId: string | null
    severity: string | null
    channel: string | null
    attempts: number | null
    maxAttempts: number | null
    nextRetry: Date | null
    sentAt: Date | null
    readAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    message: number
    status: number
    createdAt: number
    recipientEmail: number
    recipientPhone: number
    incidentId: number
    severity: number
    channel: number
    attempts: number
    maxAttempts: number
    nextRetry: number
    sentAt: number
    readAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    attempts?: true
    maxAttempts?: true
  }

  export type NotificationSumAggregateInputType = {
    attempts?: true
    maxAttempts?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    message?: true
    status?: true
    createdAt?: true
    recipientEmail?: true
    recipientPhone?: true
    incidentId?: true
    severity?: true
    channel?: true
    attempts?: true
    maxAttempts?: true
    nextRetry?: true
    sentAt?: true
    readAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    message?: true
    status?: true
    createdAt?: true
    recipientEmail?: true
    recipientPhone?: true
    incidentId?: true
    severity?: true
    channel?: true
    attempts?: true
    maxAttempts?: true
    nextRetry?: true
    sentAt?: true
    readAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    message?: true
    status?: true
    createdAt?: true
    recipientEmail?: true
    recipientPhone?: true
    incidentId?: true
    severity?: true
    channel?: true
    attempts?: true
    maxAttempts?: true
    nextRetry?: true
    sentAt?: true
    readAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    message: string
    status: string
    createdAt: Date
    recipientEmail: string
    recipientPhone: string | null
    incidentId: string | null
    severity: string
    channel: string
    attempts: number
    maxAttempts: number
    nextRetry: Date | null
    sentAt: Date | null
    readAt: Date | null
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    incidentId?: boolean
    severity?: boolean
    channel?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    nextRetry?: boolean
    sentAt?: boolean
    readAt?: boolean
    updatedAt?: boolean
    deliveryLogs?: boolean | Notification$deliveryLogsArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    incidentId?: boolean
    severity?: boolean
    channel?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    nextRetry?: boolean
    sentAt?: boolean
    readAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "status" | "createdAt" | "recipientEmail" | "recipientPhone" | "incidentId" | "severity" | "channel" | "attempts" | "maxAttempts" | "nextRetry" | "sentAt" | "readAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveryLogs?: boolean | Notification$deliveryLogsArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      deliveryLogs: Prisma.$NotificationDeliveryLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      status: string
      createdAt: Date
      recipientEmail: string
      recipientPhone: string | null
      incidentId: string | null
      severity: string
      channel: string
      attempts: number
      maxAttempts: number
      nextRetry: Date | null
      sentAt: Date | null
      readAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * @param {NotificationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notification = await prisma.notification.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Notification.
     * @param {NotificationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notification = await prisma.notification.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveryLogs<T extends Notification$deliveryLogsArgs<ExtArgs> = {}>(args?: Subset<T, Notification$deliveryLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationDeliveryLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly status: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly recipientEmail: FieldRef<"Notification", 'String'>
    readonly recipientPhone: FieldRef<"Notification", 'String'>
    readonly incidentId: FieldRef<"Notification", 'String'>
    readonly severity: FieldRef<"Notification", 'String'>
    readonly channel: FieldRef<"Notification", 'String'>
    readonly attempts: FieldRef<"Notification", 'Int'>
    readonly maxAttempts: FieldRef<"Notification", 'Int'>
    readonly nextRetry: FieldRef<"Notification", 'DateTime'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification findRaw
   */
  export type NotificationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Notification aggregateRaw
   */
  export type NotificationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Notification.deliveryLogs
   */
  export type Notification$deliveryLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
    where?: NotificationDeliveryLogWhereInput
    orderBy?: NotificationDeliveryLogOrderByWithRelationInput | NotificationDeliveryLogOrderByWithRelationInput[]
    cursor?: NotificationDeliveryLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationDeliveryLogScalarFieldEnum | NotificationDeliveryLogScalarFieldEnum[]
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model NotificationTemplate
   */

  export type AggregateNotificationTemplate = {
    _count: NotificationTemplateCountAggregateOutputType | null
    _min: NotificationTemplateMinAggregateOutputType | null
    _max: NotificationTemplateMaxAggregateOutputType | null
  }

  export type NotificationTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    body: string | null
    type: string | null
  }

  export type NotificationTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    body: string | null
    type: string | null
  }

  export type NotificationTemplateCountAggregateOutputType = {
    id: number
    name: number
    subject: number
    body: number
    type: number
    _all: number
  }


  export type NotificationTemplateMinAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    body?: true
    type?: true
  }

  export type NotificationTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    body?: true
    type?: true
  }

  export type NotificationTemplateCountAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    body?: true
    type?: true
    _all?: true
  }

  export type NotificationTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTemplate to aggregate.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationTemplates
    **/
    _count?: true | NotificationTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationTemplateMaxAggregateInputType
  }

  export type GetNotificationTemplateAggregateType<T extends NotificationTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationTemplate[P]>
      : GetScalarType<T[P], AggregateNotificationTemplate[P]>
  }




  export type NotificationTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationTemplateWhereInput
    orderBy?: NotificationTemplateOrderByWithAggregationInput | NotificationTemplateOrderByWithAggregationInput[]
    by: NotificationTemplateScalarFieldEnum[] | NotificationTemplateScalarFieldEnum
    having?: NotificationTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationTemplateCountAggregateInputType | true
    _min?: NotificationTemplateMinAggregateInputType
    _max?: NotificationTemplateMaxAggregateInputType
  }

  export type NotificationTemplateGroupByOutputType = {
    id: string
    name: string
    subject: string
    body: string
    type: string
    _count: NotificationTemplateCountAggregateOutputType | null
    _min: NotificationTemplateMinAggregateOutputType | null
    _max: NotificationTemplateMaxAggregateOutputType | null
  }

  type GetNotificationTemplateGroupByPayload<T extends NotificationTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationTemplateGroupByOutputType[P]>
        }
      >
    >


  export type NotificationTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    body?: boolean
    type?: boolean
  }, ExtArgs["result"]["notificationTemplate"]>



  export type NotificationTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    subject?: boolean
    body?: boolean
    type?: boolean
  }

  export type NotificationTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subject" | "body" | "type", ExtArgs["result"]["notificationTemplate"]>

  export type $NotificationTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subject: string
      body: string
      type: string
    }, ExtArgs["result"]["notificationTemplate"]>
    composites: {}
  }

  type NotificationTemplateGetPayload<S extends boolean | null | undefined | NotificationTemplateDefaultArgs> = $Result.GetResult<Prisma.$NotificationTemplatePayload, S>

  type NotificationTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationTemplateCountAggregateInputType | true
    }

  export interface NotificationTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationTemplate'], meta: { name: 'NotificationTemplate' } }
    /**
     * Find zero or one NotificationTemplate that matches the filter.
     * @param {NotificationTemplateFindUniqueArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationTemplateFindUniqueArgs>(args: SelectSubset<T, NotificationTemplateFindUniqueArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationTemplateFindUniqueOrThrowArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindFirstArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationTemplateFindFirstArgs>(args?: SelectSubset<T, NotificationTemplateFindFirstArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindFirstOrThrowArgs} args - Arguments to find a NotificationTemplate
     * @example
     * // Get one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationTemplates
     * const notificationTemplates = await prisma.notificationTemplate.findMany()
     * 
     * // Get first 10 NotificationTemplates
     * const notificationTemplates = await prisma.notificationTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationTemplateWithIdOnly = await prisma.notificationTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationTemplateFindManyArgs>(args?: SelectSubset<T, NotificationTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationTemplate.
     * @param {NotificationTemplateCreateArgs} args - Arguments to create a NotificationTemplate.
     * @example
     * // Create one NotificationTemplate
     * const NotificationTemplate = await prisma.notificationTemplate.create({
     *   data: {
     *     // ... data to create a NotificationTemplate
     *   }
     * })
     * 
     */
    create<T extends NotificationTemplateCreateArgs>(args: SelectSubset<T, NotificationTemplateCreateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationTemplates.
     * @param {NotificationTemplateCreateManyArgs} args - Arguments to create many NotificationTemplates.
     * @example
     * // Create many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationTemplateCreateManyArgs>(args?: SelectSubset<T, NotificationTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationTemplate.
     * @param {NotificationTemplateDeleteArgs} args - Arguments to delete one NotificationTemplate.
     * @example
     * // Delete one NotificationTemplate
     * const NotificationTemplate = await prisma.notificationTemplate.delete({
     *   where: {
     *     // ... filter to delete one NotificationTemplate
     *   }
     * })
     * 
     */
    delete<T extends NotificationTemplateDeleteArgs>(args: SelectSubset<T, NotificationTemplateDeleteArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationTemplate.
     * @param {NotificationTemplateUpdateArgs} args - Arguments to update one NotificationTemplate.
     * @example
     * // Update one NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationTemplateUpdateArgs>(args: SelectSubset<T, NotificationTemplateUpdateArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationTemplates.
     * @param {NotificationTemplateDeleteManyArgs} args - Arguments to filter NotificationTemplates to delete.
     * @example
     * // Delete a few NotificationTemplates
     * const { count } = await prisma.notificationTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationTemplateDeleteManyArgs>(args?: SelectSubset<T, NotificationTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationTemplates
     * const notificationTemplate = await prisma.notificationTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationTemplateUpdateManyArgs>(args: SelectSubset<T, NotificationTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationTemplate.
     * @param {NotificationTemplateUpsertArgs} args - Arguments to update or create a NotificationTemplate.
     * @example
     * // Update or create a NotificationTemplate
     * const notificationTemplate = await prisma.notificationTemplate.upsert({
     *   create: {
     *     // ... data to create a NotificationTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationTemplate we want to update
     *   }
     * })
     */
    upsert<T extends NotificationTemplateUpsertArgs>(args: SelectSubset<T, NotificationTemplateUpsertArgs<ExtArgs>>): Prisma__NotificationTemplateClient<$Result.GetResult<Prisma.$NotificationTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationTemplates that matches the filter.
     * @param {NotificationTemplateFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notificationTemplate = await prisma.notificationTemplate.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationTemplateFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a NotificationTemplate.
     * @param {NotificationTemplateAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notificationTemplate = await prisma.notificationTemplate.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationTemplateAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of NotificationTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateCountArgs} args - Arguments to filter NotificationTemplates to count.
     * @example
     * // Count the number of NotificationTemplates
     * const count = await prisma.notificationTemplate.count({
     *   where: {
     *     // ... the filter for the NotificationTemplates we want to count
     *   }
     * })
    **/
    count<T extends NotificationTemplateCountArgs>(
      args?: Subset<T, NotificationTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationTemplateAggregateArgs>(args: Subset<T, NotificationTemplateAggregateArgs>): Prisma.PrismaPromise<GetNotificationTemplateAggregateType<T>>

    /**
     * Group by NotificationTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationTemplateGroupByArgs} args - Group by arguments.
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
      T extends NotificationTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationTemplateGroupByArgs['orderBy'] }
        : { orderBy?: NotificationTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationTemplate model
   */
  readonly fields: NotificationTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NotificationTemplate model
   */
  interface NotificationTemplateFieldRefs {
    readonly id: FieldRef<"NotificationTemplate", 'String'>
    readonly name: FieldRef<"NotificationTemplate", 'String'>
    readonly subject: FieldRef<"NotificationTemplate", 'String'>
    readonly body: FieldRef<"NotificationTemplate", 'String'>
    readonly type: FieldRef<"NotificationTemplate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NotificationTemplate findUnique
   */
  export type NotificationTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate findUniqueOrThrow
   */
  export type NotificationTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate findFirst
   */
  export type NotificationTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTemplates.
     */
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate findFirstOrThrow
   */
  export type NotificationTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Filter, which NotificationTemplate to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationTemplates.
     */
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate findMany
   */
  export type NotificationTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Filter, which NotificationTemplates to fetch.
     */
    where?: NotificationTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationTemplates to fetch.
     */
    orderBy?: NotificationTemplateOrderByWithRelationInput | NotificationTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationTemplates.
     */
    cursor?: NotificationTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationTemplates.
     */
    skip?: number
    distinct?: NotificationTemplateScalarFieldEnum | NotificationTemplateScalarFieldEnum[]
  }

  /**
   * NotificationTemplate create
   */
  export type NotificationTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a NotificationTemplate.
     */
    data: XOR<NotificationTemplateCreateInput, NotificationTemplateUncheckedCreateInput>
  }

  /**
   * NotificationTemplate createMany
   */
  export type NotificationTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationTemplates.
     */
    data: NotificationTemplateCreateManyInput | NotificationTemplateCreateManyInput[]
  }

  /**
   * NotificationTemplate update
   */
  export type NotificationTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a NotificationTemplate.
     */
    data: XOR<NotificationTemplateUpdateInput, NotificationTemplateUncheckedUpdateInput>
    /**
     * Choose, which NotificationTemplate to update.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate updateMany
   */
  export type NotificationTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationTemplates.
     */
    data: XOR<NotificationTemplateUpdateManyMutationInput, NotificationTemplateUncheckedUpdateManyInput>
    /**
     * Filter which NotificationTemplates to update
     */
    where?: NotificationTemplateWhereInput
    /**
     * Limit how many NotificationTemplates to update.
     */
    limit?: number
  }

  /**
   * NotificationTemplate upsert
   */
  export type NotificationTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the NotificationTemplate to update in case it exists.
     */
    where: NotificationTemplateWhereUniqueInput
    /**
     * In case the NotificationTemplate found by the `where` argument doesn't exist, create a new NotificationTemplate with this data.
     */
    create: XOR<NotificationTemplateCreateInput, NotificationTemplateUncheckedCreateInput>
    /**
     * In case the NotificationTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationTemplateUpdateInput, NotificationTemplateUncheckedUpdateInput>
  }

  /**
   * NotificationTemplate delete
   */
  export type NotificationTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
    /**
     * Filter which NotificationTemplate to delete.
     */
    where: NotificationTemplateWhereUniqueInput
  }

  /**
   * NotificationTemplate deleteMany
   */
  export type NotificationTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationTemplates to delete
     */
    where?: NotificationTemplateWhereInput
    /**
     * Limit how many NotificationTemplates to delete.
     */
    limit?: number
  }

  /**
   * NotificationTemplate findRaw
   */
  export type NotificationTemplateFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationTemplate aggregateRaw
   */
  export type NotificationTemplateAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationTemplate without action
   */
  export type NotificationTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationTemplate
     */
    select?: NotificationTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationTemplate
     */
    omit?: NotificationTemplateOmit<ExtArgs> | null
  }


  /**
   * Model NotificationDeliveryLog
   */

  export type AggregateNotificationDeliveryLog = {
    _count: NotificationDeliveryLogCountAggregateOutputType | null
    _min: NotificationDeliveryLogMinAggregateOutputType | null
    _max: NotificationDeliveryLogMaxAggregateOutputType | null
  }

  export type NotificationDeliveryLogMinAggregateOutputType = {
    id: string | null
    notificationId: string | null
    channel: string | null
    status: string | null
    response: string | null
    createdAt: Date | null
  }

  export type NotificationDeliveryLogMaxAggregateOutputType = {
    id: string | null
    notificationId: string | null
    channel: string | null
    status: string | null
    response: string | null
    createdAt: Date | null
  }

  export type NotificationDeliveryLogCountAggregateOutputType = {
    id: number
    notificationId: number
    channel: number
    status: number
    response: number
    createdAt: number
    _all: number
  }


  export type NotificationDeliveryLogMinAggregateInputType = {
    id?: true
    notificationId?: true
    channel?: true
    status?: true
    response?: true
    createdAt?: true
  }

  export type NotificationDeliveryLogMaxAggregateInputType = {
    id?: true
    notificationId?: true
    channel?: true
    status?: true
    response?: true
    createdAt?: true
  }

  export type NotificationDeliveryLogCountAggregateInputType = {
    id?: true
    notificationId?: true
    channel?: true
    status?: true
    response?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationDeliveryLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationDeliveryLog to aggregate.
     */
    where?: NotificationDeliveryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationDeliveryLogs to fetch.
     */
    orderBy?: NotificationDeliveryLogOrderByWithRelationInput | NotificationDeliveryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationDeliveryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationDeliveryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationDeliveryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationDeliveryLogs
    **/
    _count?: true | NotificationDeliveryLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationDeliveryLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationDeliveryLogMaxAggregateInputType
  }

  export type GetNotificationDeliveryLogAggregateType<T extends NotificationDeliveryLogAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationDeliveryLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationDeliveryLog[P]>
      : GetScalarType<T[P], AggregateNotificationDeliveryLog[P]>
  }




  export type NotificationDeliveryLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationDeliveryLogWhereInput
    orderBy?: NotificationDeliveryLogOrderByWithAggregationInput | NotificationDeliveryLogOrderByWithAggregationInput[]
    by: NotificationDeliveryLogScalarFieldEnum[] | NotificationDeliveryLogScalarFieldEnum
    having?: NotificationDeliveryLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationDeliveryLogCountAggregateInputType | true
    _min?: NotificationDeliveryLogMinAggregateInputType
    _max?: NotificationDeliveryLogMaxAggregateInputType
  }

  export type NotificationDeliveryLogGroupByOutputType = {
    id: string
    notificationId: string
    channel: string
    status: string
    response: string | null
    createdAt: Date
    _count: NotificationDeliveryLogCountAggregateOutputType | null
    _min: NotificationDeliveryLogMinAggregateOutputType | null
    _max: NotificationDeliveryLogMaxAggregateOutputType | null
  }

  type GetNotificationDeliveryLogGroupByPayload<T extends NotificationDeliveryLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationDeliveryLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationDeliveryLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationDeliveryLogGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationDeliveryLogGroupByOutputType[P]>
        }
      >
    >


  export type NotificationDeliveryLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    channel?: boolean
    status?: boolean
    response?: boolean
    createdAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationDeliveryLog"]>



  export type NotificationDeliveryLogSelectScalar = {
    id?: boolean
    notificationId?: boolean
    channel?: boolean
    status?: boolean
    response?: boolean
    createdAt?: boolean
  }

  export type NotificationDeliveryLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notificationId" | "channel" | "status" | "response" | "createdAt", ExtArgs["result"]["notificationDeliveryLog"]>
  export type NotificationDeliveryLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
  }

  export type $NotificationDeliveryLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationDeliveryLog"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notificationId: string
      channel: string
      status: string
      response: string | null
      createdAt: Date
    }, ExtArgs["result"]["notificationDeliveryLog"]>
    composites: {}
  }

  type NotificationDeliveryLogGetPayload<S extends boolean | null | undefined | NotificationDeliveryLogDefaultArgs> = $Result.GetResult<Prisma.$NotificationDeliveryLogPayload, S>

  type NotificationDeliveryLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationDeliveryLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationDeliveryLogCountAggregateInputType | true
    }

  export interface NotificationDeliveryLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationDeliveryLog'], meta: { name: 'NotificationDeliveryLog' } }
    /**
     * Find zero or one NotificationDeliveryLog that matches the filter.
     * @param {NotificationDeliveryLogFindUniqueArgs} args - Arguments to find a NotificationDeliveryLog
     * @example
     * // Get one NotificationDeliveryLog
     * const notificationDeliveryLog = await prisma.notificationDeliveryLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationDeliveryLogFindUniqueArgs>(args: SelectSubset<T, NotificationDeliveryLogFindUniqueArgs<ExtArgs>>): Prisma__NotificationDeliveryLogClient<$Result.GetResult<Prisma.$NotificationDeliveryLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationDeliveryLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationDeliveryLogFindUniqueOrThrowArgs} args - Arguments to find a NotificationDeliveryLog
     * @example
     * // Get one NotificationDeliveryLog
     * const notificationDeliveryLog = await prisma.notificationDeliveryLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationDeliveryLogFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationDeliveryLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationDeliveryLogClient<$Result.GetResult<Prisma.$NotificationDeliveryLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationDeliveryLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryLogFindFirstArgs} args - Arguments to find a NotificationDeliveryLog
     * @example
     * // Get one NotificationDeliveryLog
     * const notificationDeliveryLog = await prisma.notificationDeliveryLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationDeliveryLogFindFirstArgs>(args?: SelectSubset<T, NotificationDeliveryLogFindFirstArgs<ExtArgs>>): Prisma__NotificationDeliveryLogClient<$Result.GetResult<Prisma.$NotificationDeliveryLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationDeliveryLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryLogFindFirstOrThrowArgs} args - Arguments to find a NotificationDeliveryLog
     * @example
     * // Get one NotificationDeliveryLog
     * const notificationDeliveryLog = await prisma.notificationDeliveryLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationDeliveryLogFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationDeliveryLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationDeliveryLogClient<$Result.GetResult<Prisma.$NotificationDeliveryLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationDeliveryLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationDeliveryLogs
     * const notificationDeliveryLogs = await prisma.notificationDeliveryLog.findMany()
     * 
     * // Get first 10 NotificationDeliveryLogs
     * const notificationDeliveryLogs = await prisma.notificationDeliveryLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationDeliveryLogWithIdOnly = await prisma.notificationDeliveryLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationDeliveryLogFindManyArgs>(args?: SelectSubset<T, NotificationDeliveryLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationDeliveryLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationDeliveryLog.
     * @param {NotificationDeliveryLogCreateArgs} args - Arguments to create a NotificationDeliveryLog.
     * @example
     * // Create one NotificationDeliveryLog
     * const NotificationDeliveryLog = await prisma.notificationDeliveryLog.create({
     *   data: {
     *     // ... data to create a NotificationDeliveryLog
     *   }
     * })
     * 
     */
    create<T extends NotificationDeliveryLogCreateArgs>(args: SelectSubset<T, NotificationDeliveryLogCreateArgs<ExtArgs>>): Prisma__NotificationDeliveryLogClient<$Result.GetResult<Prisma.$NotificationDeliveryLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationDeliveryLogs.
     * @param {NotificationDeliveryLogCreateManyArgs} args - Arguments to create many NotificationDeliveryLogs.
     * @example
     * // Create many NotificationDeliveryLogs
     * const notificationDeliveryLog = await prisma.notificationDeliveryLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationDeliveryLogCreateManyArgs>(args?: SelectSubset<T, NotificationDeliveryLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationDeliveryLog.
     * @param {NotificationDeliveryLogDeleteArgs} args - Arguments to delete one NotificationDeliveryLog.
     * @example
     * // Delete one NotificationDeliveryLog
     * const NotificationDeliveryLog = await prisma.notificationDeliveryLog.delete({
     *   where: {
     *     // ... filter to delete one NotificationDeliveryLog
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeliveryLogDeleteArgs>(args: SelectSubset<T, NotificationDeliveryLogDeleteArgs<ExtArgs>>): Prisma__NotificationDeliveryLogClient<$Result.GetResult<Prisma.$NotificationDeliveryLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationDeliveryLog.
     * @param {NotificationDeliveryLogUpdateArgs} args - Arguments to update one NotificationDeliveryLog.
     * @example
     * // Update one NotificationDeliveryLog
     * const notificationDeliveryLog = await prisma.notificationDeliveryLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationDeliveryLogUpdateArgs>(args: SelectSubset<T, NotificationDeliveryLogUpdateArgs<ExtArgs>>): Prisma__NotificationDeliveryLogClient<$Result.GetResult<Prisma.$NotificationDeliveryLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationDeliveryLogs.
     * @param {NotificationDeliveryLogDeleteManyArgs} args - Arguments to filter NotificationDeliveryLogs to delete.
     * @example
     * // Delete a few NotificationDeliveryLogs
     * const { count } = await prisma.notificationDeliveryLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeliveryLogDeleteManyArgs>(args?: SelectSubset<T, NotificationDeliveryLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationDeliveryLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationDeliveryLogs
     * const notificationDeliveryLog = await prisma.notificationDeliveryLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationDeliveryLogUpdateManyArgs>(args: SelectSubset<T, NotificationDeliveryLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationDeliveryLog.
     * @param {NotificationDeliveryLogUpsertArgs} args - Arguments to update or create a NotificationDeliveryLog.
     * @example
     * // Update or create a NotificationDeliveryLog
     * const notificationDeliveryLog = await prisma.notificationDeliveryLog.upsert({
     *   create: {
     *     // ... data to create a NotificationDeliveryLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationDeliveryLog we want to update
     *   }
     * })
     */
    upsert<T extends NotificationDeliveryLogUpsertArgs>(args: SelectSubset<T, NotificationDeliveryLogUpsertArgs<ExtArgs>>): Prisma__NotificationDeliveryLogClient<$Result.GetResult<Prisma.$NotificationDeliveryLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationDeliveryLogs that matches the filter.
     * @param {NotificationDeliveryLogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notificationDeliveryLog = await prisma.notificationDeliveryLog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationDeliveryLogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a NotificationDeliveryLog.
     * @param {NotificationDeliveryLogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notificationDeliveryLog = await prisma.notificationDeliveryLog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationDeliveryLogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of NotificationDeliveryLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryLogCountArgs} args - Arguments to filter NotificationDeliveryLogs to count.
     * @example
     * // Count the number of NotificationDeliveryLogs
     * const count = await prisma.notificationDeliveryLog.count({
     *   where: {
     *     // ... the filter for the NotificationDeliveryLogs we want to count
     *   }
     * })
    **/
    count<T extends NotificationDeliveryLogCountArgs>(
      args?: Subset<T, NotificationDeliveryLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationDeliveryLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationDeliveryLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationDeliveryLogAggregateArgs>(args: Subset<T, NotificationDeliveryLogAggregateArgs>): Prisma.PrismaPromise<GetNotificationDeliveryLogAggregateType<T>>

    /**
     * Group by NotificationDeliveryLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationDeliveryLogGroupByArgs} args - Group by arguments.
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
      T extends NotificationDeliveryLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationDeliveryLogGroupByArgs['orderBy'] }
        : { orderBy?: NotificationDeliveryLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationDeliveryLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationDeliveryLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationDeliveryLog model
   */
  readonly fields: NotificationDeliveryLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationDeliveryLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationDeliveryLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationDefaultArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationDeliveryLog model
   */
  interface NotificationDeliveryLogFieldRefs {
    readonly id: FieldRef<"NotificationDeliveryLog", 'String'>
    readonly notificationId: FieldRef<"NotificationDeliveryLog", 'String'>
    readonly channel: FieldRef<"NotificationDeliveryLog", 'String'>
    readonly status: FieldRef<"NotificationDeliveryLog", 'String'>
    readonly response: FieldRef<"NotificationDeliveryLog", 'String'>
    readonly createdAt: FieldRef<"NotificationDeliveryLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationDeliveryLog findUnique
   */
  export type NotificationDeliveryLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationDeliveryLog to fetch.
     */
    where: NotificationDeliveryLogWhereUniqueInput
  }

  /**
   * NotificationDeliveryLog findUniqueOrThrow
   */
  export type NotificationDeliveryLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationDeliveryLog to fetch.
     */
    where: NotificationDeliveryLogWhereUniqueInput
  }

  /**
   * NotificationDeliveryLog findFirst
   */
  export type NotificationDeliveryLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationDeliveryLog to fetch.
     */
    where?: NotificationDeliveryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationDeliveryLogs to fetch.
     */
    orderBy?: NotificationDeliveryLogOrderByWithRelationInput | NotificationDeliveryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationDeliveryLogs.
     */
    cursor?: NotificationDeliveryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationDeliveryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationDeliveryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationDeliveryLogs.
     */
    distinct?: NotificationDeliveryLogScalarFieldEnum | NotificationDeliveryLogScalarFieldEnum[]
  }

  /**
   * NotificationDeliveryLog findFirstOrThrow
   */
  export type NotificationDeliveryLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationDeliveryLog to fetch.
     */
    where?: NotificationDeliveryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationDeliveryLogs to fetch.
     */
    orderBy?: NotificationDeliveryLogOrderByWithRelationInput | NotificationDeliveryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationDeliveryLogs.
     */
    cursor?: NotificationDeliveryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationDeliveryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationDeliveryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationDeliveryLogs.
     */
    distinct?: NotificationDeliveryLogScalarFieldEnum | NotificationDeliveryLogScalarFieldEnum[]
  }

  /**
   * NotificationDeliveryLog findMany
   */
  export type NotificationDeliveryLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
    /**
     * Filter, which NotificationDeliveryLogs to fetch.
     */
    where?: NotificationDeliveryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationDeliveryLogs to fetch.
     */
    orderBy?: NotificationDeliveryLogOrderByWithRelationInput | NotificationDeliveryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationDeliveryLogs.
     */
    cursor?: NotificationDeliveryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationDeliveryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationDeliveryLogs.
     */
    skip?: number
    distinct?: NotificationDeliveryLogScalarFieldEnum | NotificationDeliveryLogScalarFieldEnum[]
  }

  /**
   * NotificationDeliveryLog create
   */
  export type NotificationDeliveryLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationDeliveryLog.
     */
    data: XOR<NotificationDeliveryLogCreateInput, NotificationDeliveryLogUncheckedCreateInput>
  }

  /**
   * NotificationDeliveryLog createMany
   */
  export type NotificationDeliveryLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationDeliveryLogs.
     */
    data: NotificationDeliveryLogCreateManyInput | NotificationDeliveryLogCreateManyInput[]
  }

  /**
   * NotificationDeliveryLog update
   */
  export type NotificationDeliveryLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationDeliveryLog.
     */
    data: XOR<NotificationDeliveryLogUpdateInput, NotificationDeliveryLogUncheckedUpdateInput>
    /**
     * Choose, which NotificationDeliveryLog to update.
     */
    where: NotificationDeliveryLogWhereUniqueInput
  }

  /**
   * NotificationDeliveryLog updateMany
   */
  export type NotificationDeliveryLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationDeliveryLogs.
     */
    data: XOR<NotificationDeliveryLogUpdateManyMutationInput, NotificationDeliveryLogUncheckedUpdateManyInput>
    /**
     * Filter which NotificationDeliveryLogs to update
     */
    where?: NotificationDeliveryLogWhereInput
    /**
     * Limit how many NotificationDeliveryLogs to update.
     */
    limit?: number
  }

  /**
   * NotificationDeliveryLog upsert
   */
  export type NotificationDeliveryLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationDeliveryLog to update in case it exists.
     */
    where: NotificationDeliveryLogWhereUniqueInput
    /**
     * In case the NotificationDeliveryLog found by the `where` argument doesn't exist, create a new NotificationDeliveryLog with this data.
     */
    create: XOR<NotificationDeliveryLogCreateInput, NotificationDeliveryLogUncheckedCreateInput>
    /**
     * In case the NotificationDeliveryLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationDeliveryLogUpdateInput, NotificationDeliveryLogUncheckedUpdateInput>
  }

  /**
   * NotificationDeliveryLog delete
   */
  export type NotificationDeliveryLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
    /**
     * Filter which NotificationDeliveryLog to delete.
     */
    where: NotificationDeliveryLogWhereUniqueInput
  }

  /**
   * NotificationDeliveryLog deleteMany
   */
  export type NotificationDeliveryLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationDeliveryLogs to delete
     */
    where?: NotificationDeliveryLogWhereInput
    /**
     * Limit how many NotificationDeliveryLogs to delete.
     */
    limit?: number
  }

  /**
   * NotificationDeliveryLog findRaw
   */
  export type NotificationDeliveryLogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationDeliveryLog aggregateRaw
   */
  export type NotificationDeliveryLogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationDeliveryLog without action
   */
  export type NotificationDeliveryLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationDeliveryLog
     */
    select?: NotificationDeliveryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationDeliveryLog
     */
    omit?: NotificationDeliveryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationDeliveryLogInclude<ExtArgs> | null
  }


  /**
   * Model NotificationRule
   */

  export type AggregateNotificationRule = {
    _count: NotificationRuleCountAggregateOutputType | null
    _min: NotificationRuleMinAggregateOutputType | null
    _max: NotificationRuleMaxAggregateOutputType | null
  }

  export type NotificationRuleMinAggregateOutputType = {
    id: string | null
    condition: string | null
    action: string | null
  }

  export type NotificationRuleMaxAggregateOutputType = {
    id: string | null
    condition: string | null
    action: string | null
  }

  export type NotificationRuleCountAggregateOutputType = {
    id: number
    condition: number
    action: number
    _all: number
  }


  export type NotificationRuleMinAggregateInputType = {
    id?: true
    condition?: true
    action?: true
  }

  export type NotificationRuleMaxAggregateInputType = {
    id?: true
    condition?: true
    action?: true
  }

  export type NotificationRuleCountAggregateInputType = {
    id?: true
    condition?: true
    action?: true
    _all?: true
  }

  export type NotificationRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationRule to aggregate.
     */
    where?: NotificationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationRules to fetch.
     */
    orderBy?: NotificationRuleOrderByWithRelationInput | NotificationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationRules
    **/
    _count?: true | NotificationRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationRuleMaxAggregateInputType
  }

  export type GetNotificationRuleAggregateType<T extends NotificationRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationRule[P]>
      : GetScalarType<T[P], AggregateNotificationRule[P]>
  }




  export type NotificationRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationRuleWhereInput
    orderBy?: NotificationRuleOrderByWithAggregationInput | NotificationRuleOrderByWithAggregationInput[]
    by: NotificationRuleScalarFieldEnum[] | NotificationRuleScalarFieldEnum
    having?: NotificationRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationRuleCountAggregateInputType | true
    _min?: NotificationRuleMinAggregateInputType
    _max?: NotificationRuleMaxAggregateInputType
  }

  export type NotificationRuleGroupByOutputType = {
    id: string
    condition: string
    action: string
    _count: NotificationRuleCountAggregateOutputType | null
    _min: NotificationRuleMinAggregateOutputType | null
    _max: NotificationRuleMaxAggregateOutputType | null
  }

  type GetNotificationRuleGroupByPayload<T extends NotificationRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationRuleGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationRuleGroupByOutputType[P]>
        }
      >
    >


  export type NotificationRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    condition?: boolean
    action?: boolean
  }, ExtArgs["result"]["notificationRule"]>



  export type NotificationRuleSelectScalar = {
    id?: boolean
    condition?: boolean
    action?: boolean
  }

  export type NotificationRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "condition" | "action", ExtArgs["result"]["notificationRule"]>

  export type $NotificationRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationRule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      condition: string
      action: string
    }, ExtArgs["result"]["notificationRule"]>
    composites: {}
  }

  type NotificationRuleGetPayload<S extends boolean | null | undefined | NotificationRuleDefaultArgs> = $Result.GetResult<Prisma.$NotificationRulePayload, S>

  type NotificationRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationRuleCountAggregateInputType | true
    }

  export interface NotificationRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationRule'], meta: { name: 'NotificationRule' } }
    /**
     * Find zero or one NotificationRule that matches the filter.
     * @param {NotificationRuleFindUniqueArgs} args - Arguments to find a NotificationRule
     * @example
     * // Get one NotificationRule
     * const notificationRule = await prisma.notificationRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationRuleFindUniqueArgs>(args: SelectSubset<T, NotificationRuleFindUniqueArgs<ExtArgs>>): Prisma__NotificationRuleClient<$Result.GetResult<Prisma.$NotificationRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationRuleFindUniqueOrThrowArgs} args - Arguments to find a NotificationRule
     * @example
     * // Get one NotificationRule
     * const notificationRule = await prisma.notificationRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationRuleClient<$Result.GetResult<Prisma.$NotificationRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRuleFindFirstArgs} args - Arguments to find a NotificationRule
     * @example
     * // Get one NotificationRule
     * const notificationRule = await prisma.notificationRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationRuleFindFirstArgs>(args?: SelectSubset<T, NotificationRuleFindFirstArgs<ExtArgs>>): Prisma__NotificationRuleClient<$Result.GetResult<Prisma.$NotificationRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRuleFindFirstOrThrowArgs} args - Arguments to find a NotificationRule
     * @example
     * // Get one NotificationRule
     * const notificationRule = await prisma.notificationRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationRuleClient<$Result.GetResult<Prisma.$NotificationRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationRules
     * const notificationRules = await prisma.notificationRule.findMany()
     * 
     * // Get first 10 NotificationRules
     * const notificationRules = await prisma.notificationRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationRuleWithIdOnly = await prisma.notificationRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationRuleFindManyArgs>(args?: SelectSubset<T, NotificationRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationRule.
     * @param {NotificationRuleCreateArgs} args - Arguments to create a NotificationRule.
     * @example
     * // Create one NotificationRule
     * const NotificationRule = await prisma.notificationRule.create({
     *   data: {
     *     // ... data to create a NotificationRule
     *   }
     * })
     * 
     */
    create<T extends NotificationRuleCreateArgs>(args: SelectSubset<T, NotificationRuleCreateArgs<ExtArgs>>): Prisma__NotificationRuleClient<$Result.GetResult<Prisma.$NotificationRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationRules.
     * @param {NotificationRuleCreateManyArgs} args - Arguments to create many NotificationRules.
     * @example
     * // Create many NotificationRules
     * const notificationRule = await prisma.notificationRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationRuleCreateManyArgs>(args?: SelectSubset<T, NotificationRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationRule.
     * @param {NotificationRuleDeleteArgs} args - Arguments to delete one NotificationRule.
     * @example
     * // Delete one NotificationRule
     * const NotificationRule = await prisma.notificationRule.delete({
     *   where: {
     *     // ... filter to delete one NotificationRule
     *   }
     * })
     * 
     */
    delete<T extends NotificationRuleDeleteArgs>(args: SelectSubset<T, NotificationRuleDeleteArgs<ExtArgs>>): Prisma__NotificationRuleClient<$Result.GetResult<Prisma.$NotificationRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationRule.
     * @param {NotificationRuleUpdateArgs} args - Arguments to update one NotificationRule.
     * @example
     * // Update one NotificationRule
     * const notificationRule = await prisma.notificationRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationRuleUpdateArgs>(args: SelectSubset<T, NotificationRuleUpdateArgs<ExtArgs>>): Prisma__NotificationRuleClient<$Result.GetResult<Prisma.$NotificationRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationRules.
     * @param {NotificationRuleDeleteManyArgs} args - Arguments to filter NotificationRules to delete.
     * @example
     * // Delete a few NotificationRules
     * const { count } = await prisma.notificationRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationRuleDeleteManyArgs>(args?: SelectSubset<T, NotificationRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationRules
     * const notificationRule = await prisma.notificationRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationRuleUpdateManyArgs>(args: SelectSubset<T, NotificationRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationRule.
     * @param {NotificationRuleUpsertArgs} args - Arguments to update or create a NotificationRule.
     * @example
     * // Update or create a NotificationRule
     * const notificationRule = await prisma.notificationRule.upsert({
     *   create: {
     *     // ... data to create a NotificationRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationRule we want to update
     *   }
     * })
     */
    upsert<T extends NotificationRuleUpsertArgs>(args: SelectSubset<T, NotificationRuleUpsertArgs<ExtArgs>>): Prisma__NotificationRuleClient<$Result.GetResult<Prisma.$NotificationRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationRules that matches the filter.
     * @param {NotificationRuleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notificationRule = await prisma.notificationRule.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationRuleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a NotificationRule.
     * @param {NotificationRuleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notificationRule = await prisma.notificationRule.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationRuleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of NotificationRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRuleCountArgs} args - Arguments to filter NotificationRules to count.
     * @example
     * // Count the number of NotificationRules
     * const count = await prisma.notificationRule.count({
     *   where: {
     *     // ... the filter for the NotificationRules we want to count
     *   }
     * })
    **/
    count<T extends NotificationRuleCountArgs>(
      args?: Subset<T, NotificationRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationRuleAggregateArgs>(args: Subset<T, NotificationRuleAggregateArgs>): Prisma.PrismaPromise<GetNotificationRuleAggregateType<T>>

    /**
     * Group by NotificationRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRuleGroupByArgs} args - Group by arguments.
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
      T extends NotificationRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationRuleGroupByArgs['orderBy'] }
        : { orderBy?: NotificationRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationRule model
   */
  readonly fields: NotificationRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NotificationRule model
   */
  interface NotificationRuleFieldRefs {
    readonly id: FieldRef<"NotificationRule", 'String'>
    readonly condition: FieldRef<"NotificationRule", 'String'>
    readonly action: FieldRef<"NotificationRule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NotificationRule findUnique
   */
  export type NotificationRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRule
     */
    select?: NotificationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRule
     */
    omit?: NotificationRuleOmit<ExtArgs> | null
    /**
     * Filter, which NotificationRule to fetch.
     */
    where: NotificationRuleWhereUniqueInput
  }

  /**
   * NotificationRule findUniqueOrThrow
   */
  export type NotificationRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRule
     */
    select?: NotificationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRule
     */
    omit?: NotificationRuleOmit<ExtArgs> | null
    /**
     * Filter, which NotificationRule to fetch.
     */
    where: NotificationRuleWhereUniqueInput
  }

  /**
   * NotificationRule findFirst
   */
  export type NotificationRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRule
     */
    select?: NotificationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRule
     */
    omit?: NotificationRuleOmit<ExtArgs> | null
    /**
     * Filter, which NotificationRule to fetch.
     */
    where?: NotificationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationRules to fetch.
     */
    orderBy?: NotificationRuleOrderByWithRelationInput | NotificationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationRules.
     */
    cursor?: NotificationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationRules.
     */
    distinct?: NotificationRuleScalarFieldEnum | NotificationRuleScalarFieldEnum[]
  }

  /**
   * NotificationRule findFirstOrThrow
   */
  export type NotificationRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRule
     */
    select?: NotificationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRule
     */
    omit?: NotificationRuleOmit<ExtArgs> | null
    /**
     * Filter, which NotificationRule to fetch.
     */
    where?: NotificationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationRules to fetch.
     */
    orderBy?: NotificationRuleOrderByWithRelationInput | NotificationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationRules.
     */
    cursor?: NotificationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationRules.
     */
    distinct?: NotificationRuleScalarFieldEnum | NotificationRuleScalarFieldEnum[]
  }

  /**
   * NotificationRule findMany
   */
  export type NotificationRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRule
     */
    select?: NotificationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRule
     */
    omit?: NotificationRuleOmit<ExtArgs> | null
    /**
     * Filter, which NotificationRules to fetch.
     */
    where?: NotificationRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationRules to fetch.
     */
    orderBy?: NotificationRuleOrderByWithRelationInput | NotificationRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationRules.
     */
    cursor?: NotificationRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationRules.
     */
    skip?: number
    distinct?: NotificationRuleScalarFieldEnum | NotificationRuleScalarFieldEnum[]
  }

  /**
   * NotificationRule create
   */
  export type NotificationRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRule
     */
    select?: NotificationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRule
     */
    omit?: NotificationRuleOmit<ExtArgs> | null
    /**
     * The data needed to create a NotificationRule.
     */
    data: XOR<NotificationRuleCreateInput, NotificationRuleUncheckedCreateInput>
  }

  /**
   * NotificationRule createMany
   */
  export type NotificationRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationRules.
     */
    data: NotificationRuleCreateManyInput | NotificationRuleCreateManyInput[]
  }

  /**
   * NotificationRule update
   */
  export type NotificationRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRule
     */
    select?: NotificationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRule
     */
    omit?: NotificationRuleOmit<ExtArgs> | null
    /**
     * The data needed to update a NotificationRule.
     */
    data: XOR<NotificationRuleUpdateInput, NotificationRuleUncheckedUpdateInput>
    /**
     * Choose, which NotificationRule to update.
     */
    where: NotificationRuleWhereUniqueInput
  }

  /**
   * NotificationRule updateMany
   */
  export type NotificationRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationRules.
     */
    data: XOR<NotificationRuleUpdateManyMutationInput, NotificationRuleUncheckedUpdateManyInput>
    /**
     * Filter which NotificationRules to update
     */
    where?: NotificationRuleWhereInput
    /**
     * Limit how many NotificationRules to update.
     */
    limit?: number
  }

  /**
   * NotificationRule upsert
   */
  export type NotificationRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRule
     */
    select?: NotificationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRule
     */
    omit?: NotificationRuleOmit<ExtArgs> | null
    /**
     * The filter to search for the NotificationRule to update in case it exists.
     */
    where: NotificationRuleWhereUniqueInput
    /**
     * In case the NotificationRule found by the `where` argument doesn't exist, create a new NotificationRule with this data.
     */
    create: XOR<NotificationRuleCreateInput, NotificationRuleUncheckedCreateInput>
    /**
     * In case the NotificationRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationRuleUpdateInput, NotificationRuleUncheckedUpdateInput>
  }

  /**
   * NotificationRule delete
   */
  export type NotificationRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRule
     */
    select?: NotificationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRule
     */
    omit?: NotificationRuleOmit<ExtArgs> | null
    /**
     * Filter which NotificationRule to delete.
     */
    where: NotificationRuleWhereUniqueInput
  }

  /**
   * NotificationRule deleteMany
   */
  export type NotificationRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationRules to delete
     */
    where?: NotificationRuleWhereInput
    /**
     * Limit how many NotificationRules to delete.
     */
    limit?: number
  }

  /**
   * NotificationRule findRaw
   */
  export type NotificationRuleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationRule aggregateRaw
   */
  export type NotificationRuleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationRule without action
   */
  export type NotificationRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRule
     */
    select?: NotificationRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRule
     */
    omit?: NotificationRuleOmit<ExtArgs> | null
  }


  /**
   * Model NotificationRecipient
   */

  export type AggregateNotificationRecipient = {
    _count: NotificationRecipientCountAggregateOutputType | null
    _min: NotificationRecipientMinAggregateOutputType | null
    _max: NotificationRecipientMaxAggregateOutputType | null
  }

  export type NotificationRecipientMinAggregateOutputType = {
    id: string | null
    email: string | null
  }

  export type NotificationRecipientMaxAggregateOutputType = {
    id: string | null
    email: string | null
  }

  export type NotificationRecipientCountAggregateOutputType = {
    id: number
    email: number
    _all: number
  }


  export type NotificationRecipientMinAggregateInputType = {
    id?: true
    email?: true
  }

  export type NotificationRecipientMaxAggregateInputType = {
    id?: true
    email?: true
  }

  export type NotificationRecipientCountAggregateInputType = {
    id?: true
    email?: true
    _all?: true
  }

  export type NotificationRecipientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationRecipient to aggregate.
     */
    where?: NotificationRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationRecipients to fetch.
     */
    orderBy?: NotificationRecipientOrderByWithRelationInput | NotificationRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationRecipients
    **/
    _count?: true | NotificationRecipientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationRecipientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationRecipientMaxAggregateInputType
  }

  export type GetNotificationRecipientAggregateType<T extends NotificationRecipientAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationRecipient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationRecipient[P]>
      : GetScalarType<T[P], AggregateNotificationRecipient[P]>
  }




  export type NotificationRecipientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationRecipientWhereInput
    orderBy?: NotificationRecipientOrderByWithAggregationInput | NotificationRecipientOrderByWithAggregationInput[]
    by: NotificationRecipientScalarFieldEnum[] | NotificationRecipientScalarFieldEnum
    having?: NotificationRecipientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationRecipientCountAggregateInputType | true
    _min?: NotificationRecipientMinAggregateInputType
    _max?: NotificationRecipientMaxAggregateInputType
  }

  export type NotificationRecipientGroupByOutputType = {
    id: string
    email: string
    _count: NotificationRecipientCountAggregateOutputType | null
    _min: NotificationRecipientMinAggregateOutputType | null
    _max: NotificationRecipientMaxAggregateOutputType | null
  }

  type GetNotificationRecipientGroupByPayload<T extends NotificationRecipientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationRecipientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationRecipientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationRecipientGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationRecipientGroupByOutputType[P]>
        }
      >
    >


  export type NotificationRecipientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["notificationRecipient"]>



  export type NotificationRecipientSelectScalar = {
    id?: boolean
    email?: boolean
  }

  export type NotificationRecipientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email", ExtArgs["result"]["notificationRecipient"]>

  export type $NotificationRecipientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationRecipient"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
    }, ExtArgs["result"]["notificationRecipient"]>
    composites: {}
  }

  type NotificationRecipientGetPayload<S extends boolean | null | undefined | NotificationRecipientDefaultArgs> = $Result.GetResult<Prisma.$NotificationRecipientPayload, S>

  type NotificationRecipientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationRecipientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationRecipientCountAggregateInputType | true
    }

  export interface NotificationRecipientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationRecipient'], meta: { name: 'NotificationRecipient' } }
    /**
     * Find zero or one NotificationRecipient that matches the filter.
     * @param {NotificationRecipientFindUniqueArgs} args - Arguments to find a NotificationRecipient
     * @example
     * // Get one NotificationRecipient
     * const notificationRecipient = await prisma.notificationRecipient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationRecipientFindUniqueArgs>(args: SelectSubset<T, NotificationRecipientFindUniqueArgs<ExtArgs>>): Prisma__NotificationRecipientClient<$Result.GetResult<Prisma.$NotificationRecipientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationRecipient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationRecipientFindUniqueOrThrowArgs} args - Arguments to find a NotificationRecipient
     * @example
     * // Get one NotificationRecipient
     * const notificationRecipient = await prisma.notificationRecipient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationRecipientFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationRecipientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationRecipientClient<$Result.GetResult<Prisma.$NotificationRecipientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationRecipient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRecipientFindFirstArgs} args - Arguments to find a NotificationRecipient
     * @example
     * // Get one NotificationRecipient
     * const notificationRecipient = await prisma.notificationRecipient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationRecipientFindFirstArgs>(args?: SelectSubset<T, NotificationRecipientFindFirstArgs<ExtArgs>>): Prisma__NotificationRecipientClient<$Result.GetResult<Prisma.$NotificationRecipientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationRecipient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRecipientFindFirstOrThrowArgs} args - Arguments to find a NotificationRecipient
     * @example
     * // Get one NotificationRecipient
     * const notificationRecipient = await prisma.notificationRecipient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationRecipientFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationRecipientFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationRecipientClient<$Result.GetResult<Prisma.$NotificationRecipientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationRecipients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRecipientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationRecipients
     * const notificationRecipients = await prisma.notificationRecipient.findMany()
     * 
     * // Get first 10 NotificationRecipients
     * const notificationRecipients = await prisma.notificationRecipient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationRecipientWithIdOnly = await prisma.notificationRecipient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationRecipientFindManyArgs>(args?: SelectSubset<T, NotificationRecipientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationRecipientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationRecipient.
     * @param {NotificationRecipientCreateArgs} args - Arguments to create a NotificationRecipient.
     * @example
     * // Create one NotificationRecipient
     * const NotificationRecipient = await prisma.notificationRecipient.create({
     *   data: {
     *     // ... data to create a NotificationRecipient
     *   }
     * })
     * 
     */
    create<T extends NotificationRecipientCreateArgs>(args: SelectSubset<T, NotificationRecipientCreateArgs<ExtArgs>>): Prisma__NotificationRecipientClient<$Result.GetResult<Prisma.$NotificationRecipientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationRecipients.
     * @param {NotificationRecipientCreateManyArgs} args - Arguments to create many NotificationRecipients.
     * @example
     * // Create many NotificationRecipients
     * const notificationRecipient = await prisma.notificationRecipient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationRecipientCreateManyArgs>(args?: SelectSubset<T, NotificationRecipientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationRecipient.
     * @param {NotificationRecipientDeleteArgs} args - Arguments to delete one NotificationRecipient.
     * @example
     * // Delete one NotificationRecipient
     * const NotificationRecipient = await prisma.notificationRecipient.delete({
     *   where: {
     *     // ... filter to delete one NotificationRecipient
     *   }
     * })
     * 
     */
    delete<T extends NotificationRecipientDeleteArgs>(args: SelectSubset<T, NotificationRecipientDeleteArgs<ExtArgs>>): Prisma__NotificationRecipientClient<$Result.GetResult<Prisma.$NotificationRecipientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationRecipient.
     * @param {NotificationRecipientUpdateArgs} args - Arguments to update one NotificationRecipient.
     * @example
     * // Update one NotificationRecipient
     * const notificationRecipient = await prisma.notificationRecipient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationRecipientUpdateArgs>(args: SelectSubset<T, NotificationRecipientUpdateArgs<ExtArgs>>): Prisma__NotificationRecipientClient<$Result.GetResult<Prisma.$NotificationRecipientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationRecipients.
     * @param {NotificationRecipientDeleteManyArgs} args - Arguments to filter NotificationRecipients to delete.
     * @example
     * // Delete a few NotificationRecipients
     * const { count } = await prisma.notificationRecipient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationRecipientDeleteManyArgs>(args?: SelectSubset<T, NotificationRecipientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRecipientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationRecipients
     * const notificationRecipient = await prisma.notificationRecipient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationRecipientUpdateManyArgs>(args: SelectSubset<T, NotificationRecipientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationRecipient.
     * @param {NotificationRecipientUpsertArgs} args - Arguments to update or create a NotificationRecipient.
     * @example
     * // Update or create a NotificationRecipient
     * const notificationRecipient = await prisma.notificationRecipient.upsert({
     *   create: {
     *     // ... data to create a NotificationRecipient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationRecipient we want to update
     *   }
     * })
     */
    upsert<T extends NotificationRecipientUpsertArgs>(args: SelectSubset<T, NotificationRecipientUpsertArgs<ExtArgs>>): Prisma__NotificationRecipientClient<$Result.GetResult<Prisma.$NotificationRecipientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationRecipients that matches the filter.
     * @param {NotificationRecipientFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notificationRecipient = await prisma.notificationRecipient.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationRecipientFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a NotificationRecipient.
     * @param {NotificationRecipientAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notificationRecipient = await prisma.notificationRecipient.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationRecipientAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of NotificationRecipients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRecipientCountArgs} args - Arguments to filter NotificationRecipients to count.
     * @example
     * // Count the number of NotificationRecipients
     * const count = await prisma.notificationRecipient.count({
     *   where: {
     *     // ... the filter for the NotificationRecipients we want to count
     *   }
     * })
    **/
    count<T extends NotificationRecipientCountArgs>(
      args?: Subset<T, NotificationRecipientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationRecipientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRecipientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationRecipientAggregateArgs>(args: Subset<T, NotificationRecipientAggregateArgs>): Prisma.PrismaPromise<GetNotificationRecipientAggregateType<T>>

    /**
     * Group by NotificationRecipient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationRecipientGroupByArgs} args - Group by arguments.
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
      T extends NotificationRecipientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationRecipientGroupByArgs['orderBy'] }
        : { orderBy?: NotificationRecipientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationRecipientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationRecipientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationRecipient model
   */
  readonly fields: NotificationRecipientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationRecipient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationRecipientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NotificationRecipient model
   */
  interface NotificationRecipientFieldRefs {
    readonly id: FieldRef<"NotificationRecipient", 'String'>
    readonly email: FieldRef<"NotificationRecipient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NotificationRecipient findUnique
   */
  export type NotificationRecipientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRecipient
     */
    select?: NotificationRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRecipient
     */
    omit?: NotificationRecipientOmit<ExtArgs> | null
    /**
     * Filter, which NotificationRecipient to fetch.
     */
    where: NotificationRecipientWhereUniqueInput
  }

  /**
   * NotificationRecipient findUniqueOrThrow
   */
  export type NotificationRecipientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRecipient
     */
    select?: NotificationRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRecipient
     */
    omit?: NotificationRecipientOmit<ExtArgs> | null
    /**
     * Filter, which NotificationRecipient to fetch.
     */
    where: NotificationRecipientWhereUniqueInput
  }

  /**
   * NotificationRecipient findFirst
   */
  export type NotificationRecipientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRecipient
     */
    select?: NotificationRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRecipient
     */
    omit?: NotificationRecipientOmit<ExtArgs> | null
    /**
     * Filter, which NotificationRecipient to fetch.
     */
    where?: NotificationRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationRecipients to fetch.
     */
    orderBy?: NotificationRecipientOrderByWithRelationInput | NotificationRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationRecipients.
     */
    cursor?: NotificationRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationRecipients.
     */
    distinct?: NotificationRecipientScalarFieldEnum | NotificationRecipientScalarFieldEnum[]
  }

  /**
   * NotificationRecipient findFirstOrThrow
   */
  export type NotificationRecipientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRecipient
     */
    select?: NotificationRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRecipient
     */
    omit?: NotificationRecipientOmit<ExtArgs> | null
    /**
     * Filter, which NotificationRecipient to fetch.
     */
    where?: NotificationRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationRecipients to fetch.
     */
    orderBy?: NotificationRecipientOrderByWithRelationInput | NotificationRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationRecipients.
     */
    cursor?: NotificationRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationRecipients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationRecipients.
     */
    distinct?: NotificationRecipientScalarFieldEnum | NotificationRecipientScalarFieldEnum[]
  }

  /**
   * NotificationRecipient findMany
   */
  export type NotificationRecipientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRecipient
     */
    select?: NotificationRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRecipient
     */
    omit?: NotificationRecipientOmit<ExtArgs> | null
    /**
     * Filter, which NotificationRecipients to fetch.
     */
    where?: NotificationRecipientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationRecipients to fetch.
     */
    orderBy?: NotificationRecipientOrderByWithRelationInput | NotificationRecipientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationRecipients.
     */
    cursor?: NotificationRecipientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationRecipients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationRecipients.
     */
    skip?: number
    distinct?: NotificationRecipientScalarFieldEnum | NotificationRecipientScalarFieldEnum[]
  }

  /**
   * NotificationRecipient create
   */
  export type NotificationRecipientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRecipient
     */
    select?: NotificationRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRecipient
     */
    omit?: NotificationRecipientOmit<ExtArgs> | null
    /**
     * The data needed to create a NotificationRecipient.
     */
    data: XOR<NotificationRecipientCreateInput, NotificationRecipientUncheckedCreateInput>
  }

  /**
   * NotificationRecipient createMany
   */
  export type NotificationRecipientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationRecipients.
     */
    data: NotificationRecipientCreateManyInput | NotificationRecipientCreateManyInput[]
  }

  /**
   * NotificationRecipient update
   */
  export type NotificationRecipientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRecipient
     */
    select?: NotificationRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRecipient
     */
    omit?: NotificationRecipientOmit<ExtArgs> | null
    /**
     * The data needed to update a NotificationRecipient.
     */
    data: XOR<NotificationRecipientUpdateInput, NotificationRecipientUncheckedUpdateInput>
    /**
     * Choose, which NotificationRecipient to update.
     */
    where: NotificationRecipientWhereUniqueInput
  }

  /**
   * NotificationRecipient updateMany
   */
  export type NotificationRecipientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationRecipients.
     */
    data: XOR<NotificationRecipientUpdateManyMutationInput, NotificationRecipientUncheckedUpdateManyInput>
    /**
     * Filter which NotificationRecipients to update
     */
    where?: NotificationRecipientWhereInput
    /**
     * Limit how many NotificationRecipients to update.
     */
    limit?: number
  }

  /**
   * NotificationRecipient upsert
   */
  export type NotificationRecipientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRecipient
     */
    select?: NotificationRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRecipient
     */
    omit?: NotificationRecipientOmit<ExtArgs> | null
    /**
     * The filter to search for the NotificationRecipient to update in case it exists.
     */
    where: NotificationRecipientWhereUniqueInput
    /**
     * In case the NotificationRecipient found by the `where` argument doesn't exist, create a new NotificationRecipient with this data.
     */
    create: XOR<NotificationRecipientCreateInput, NotificationRecipientUncheckedCreateInput>
    /**
     * In case the NotificationRecipient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationRecipientUpdateInput, NotificationRecipientUncheckedUpdateInput>
  }

  /**
   * NotificationRecipient delete
   */
  export type NotificationRecipientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRecipient
     */
    select?: NotificationRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRecipient
     */
    omit?: NotificationRecipientOmit<ExtArgs> | null
    /**
     * Filter which NotificationRecipient to delete.
     */
    where: NotificationRecipientWhereUniqueInput
  }

  /**
   * NotificationRecipient deleteMany
   */
  export type NotificationRecipientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationRecipients to delete
     */
    where?: NotificationRecipientWhereInput
    /**
     * Limit how many NotificationRecipients to delete.
     */
    limit?: number
  }

  /**
   * NotificationRecipient findRaw
   */
  export type NotificationRecipientFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationRecipient aggregateRaw
   */
  export type NotificationRecipientAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationRecipient without action
   */
  export type NotificationRecipientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationRecipient
     */
    select?: NotificationRecipientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationRecipient
     */
    omit?: NotificationRecipientOmit<ExtArgs> | null
  }


  /**
   * Model NotificationAttempt
   */

  export type AggregateNotificationAttempt = {
    _count: NotificationAttemptCountAggregateOutputType | null
    _min: NotificationAttemptMinAggregateOutputType | null
    _max: NotificationAttemptMaxAggregateOutputType | null
  }

  export type NotificationAttemptMinAggregateOutputType = {
    id: string | null
    status: string | null
    createdAt: Date | null
  }

  export type NotificationAttemptMaxAggregateOutputType = {
    id: string | null
    status: string | null
    createdAt: Date | null
  }

  export type NotificationAttemptCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    _all: number
  }


  export type NotificationAttemptMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
  }

  export type NotificationAttemptMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
  }

  export type NotificationAttemptCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationAttempt to aggregate.
     */
    where?: NotificationAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationAttempts to fetch.
     */
    orderBy?: NotificationAttemptOrderByWithRelationInput | NotificationAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationAttempts
    **/
    _count?: true | NotificationAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationAttemptMaxAggregateInputType
  }

  export type GetNotificationAttemptAggregateType<T extends NotificationAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationAttempt[P]>
      : GetScalarType<T[P], AggregateNotificationAttempt[P]>
  }




  export type NotificationAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationAttemptWhereInput
    orderBy?: NotificationAttemptOrderByWithAggregationInput | NotificationAttemptOrderByWithAggregationInput[]
    by: NotificationAttemptScalarFieldEnum[] | NotificationAttemptScalarFieldEnum
    having?: NotificationAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationAttemptCountAggregateInputType | true
    _min?: NotificationAttemptMinAggregateInputType
    _max?: NotificationAttemptMaxAggregateInputType
  }

  export type NotificationAttemptGroupByOutputType = {
    id: string
    status: string
    createdAt: Date
    _count: NotificationAttemptCountAggregateOutputType | null
    _min: NotificationAttemptMinAggregateOutputType | null
    _max: NotificationAttemptMaxAggregateOutputType | null
  }

  type GetNotificationAttemptGroupByPayload<T extends NotificationAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationAttemptGroupByOutputType[P]>
        }
      >
    >


  export type NotificationAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notificationAttempt"]>



  export type NotificationAttemptSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type NotificationAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "createdAt", ExtArgs["result"]["notificationAttempt"]>

  export type $NotificationAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationAttempt"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["notificationAttempt"]>
    composites: {}
  }

  type NotificationAttemptGetPayload<S extends boolean | null | undefined | NotificationAttemptDefaultArgs> = $Result.GetResult<Prisma.$NotificationAttemptPayload, S>

  type NotificationAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationAttemptCountAggregateInputType | true
    }

  export interface NotificationAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationAttempt'], meta: { name: 'NotificationAttempt' } }
    /**
     * Find zero or one NotificationAttempt that matches the filter.
     * @param {NotificationAttemptFindUniqueArgs} args - Arguments to find a NotificationAttempt
     * @example
     * // Get one NotificationAttempt
     * const notificationAttempt = await prisma.notificationAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationAttemptFindUniqueArgs>(args: SelectSubset<T, NotificationAttemptFindUniqueArgs<ExtArgs>>): Prisma__NotificationAttemptClient<$Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationAttemptFindUniqueOrThrowArgs} args - Arguments to find a NotificationAttempt
     * @example
     * // Get one NotificationAttempt
     * const notificationAttempt = await prisma.notificationAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationAttemptClient<$Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAttemptFindFirstArgs} args - Arguments to find a NotificationAttempt
     * @example
     * // Get one NotificationAttempt
     * const notificationAttempt = await prisma.notificationAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationAttemptFindFirstArgs>(args?: SelectSubset<T, NotificationAttemptFindFirstArgs<ExtArgs>>): Prisma__NotificationAttemptClient<$Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAttemptFindFirstOrThrowArgs} args - Arguments to find a NotificationAttempt
     * @example
     * // Get one NotificationAttempt
     * const notificationAttempt = await prisma.notificationAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationAttemptClient<$Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationAttempts
     * const notificationAttempts = await prisma.notificationAttempt.findMany()
     * 
     * // Get first 10 NotificationAttempts
     * const notificationAttempts = await prisma.notificationAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationAttemptWithIdOnly = await prisma.notificationAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationAttemptFindManyArgs>(args?: SelectSubset<T, NotificationAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationAttempt.
     * @param {NotificationAttemptCreateArgs} args - Arguments to create a NotificationAttempt.
     * @example
     * // Create one NotificationAttempt
     * const NotificationAttempt = await prisma.notificationAttempt.create({
     *   data: {
     *     // ... data to create a NotificationAttempt
     *   }
     * })
     * 
     */
    create<T extends NotificationAttemptCreateArgs>(args: SelectSubset<T, NotificationAttemptCreateArgs<ExtArgs>>): Prisma__NotificationAttemptClient<$Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationAttempts.
     * @param {NotificationAttemptCreateManyArgs} args - Arguments to create many NotificationAttempts.
     * @example
     * // Create many NotificationAttempts
     * const notificationAttempt = await prisma.notificationAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationAttemptCreateManyArgs>(args?: SelectSubset<T, NotificationAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationAttempt.
     * @param {NotificationAttemptDeleteArgs} args - Arguments to delete one NotificationAttempt.
     * @example
     * // Delete one NotificationAttempt
     * const NotificationAttempt = await prisma.notificationAttempt.delete({
     *   where: {
     *     // ... filter to delete one NotificationAttempt
     *   }
     * })
     * 
     */
    delete<T extends NotificationAttemptDeleteArgs>(args: SelectSubset<T, NotificationAttemptDeleteArgs<ExtArgs>>): Prisma__NotificationAttemptClient<$Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationAttempt.
     * @param {NotificationAttemptUpdateArgs} args - Arguments to update one NotificationAttempt.
     * @example
     * // Update one NotificationAttempt
     * const notificationAttempt = await prisma.notificationAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationAttemptUpdateArgs>(args: SelectSubset<T, NotificationAttemptUpdateArgs<ExtArgs>>): Prisma__NotificationAttemptClient<$Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationAttempts.
     * @param {NotificationAttemptDeleteManyArgs} args - Arguments to filter NotificationAttempts to delete.
     * @example
     * // Delete a few NotificationAttempts
     * const { count } = await prisma.notificationAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationAttemptDeleteManyArgs>(args?: SelectSubset<T, NotificationAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationAttempts
     * const notificationAttempt = await prisma.notificationAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationAttemptUpdateManyArgs>(args: SelectSubset<T, NotificationAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationAttempt.
     * @param {NotificationAttemptUpsertArgs} args - Arguments to update or create a NotificationAttempt.
     * @example
     * // Update or create a NotificationAttempt
     * const notificationAttempt = await prisma.notificationAttempt.upsert({
     *   create: {
     *     // ... data to create a NotificationAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationAttempt we want to update
     *   }
     * })
     */
    upsert<T extends NotificationAttemptUpsertArgs>(args: SelectSubset<T, NotificationAttemptUpsertArgs<ExtArgs>>): Prisma__NotificationAttemptClient<$Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationAttempts that matches the filter.
     * @param {NotificationAttemptFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notificationAttempt = await prisma.notificationAttempt.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationAttemptFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a NotificationAttempt.
     * @param {NotificationAttemptAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notificationAttempt = await prisma.notificationAttempt.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationAttemptAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of NotificationAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAttemptCountArgs} args - Arguments to filter NotificationAttempts to count.
     * @example
     * // Count the number of NotificationAttempts
     * const count = await prisma.notificationAttempt.count({
     *   where: {
     *     // ... the filter for the NotificationAttempts we want to count
     *   }
     * })
    **/
    count<T extends NotificationAttemptCountArgs>(
      args?: Subset<T, NotificationAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAttemptAggregateArgs>(args: Subset<T, NotificationAttemptAggregateArgs>): Prisma.PrismaPromise<GetNotificationAttemptAggregateType<T>>

    /**
     * Group by NotificationAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAttemptGroupByArgs} args - Group by arguments.
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
      T extends NotificationAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationAttemptGroupByArgs['orderBy'] }
        : { orderBy?: NotificationAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationAttempt model
   */
  readonly fields: NotificationAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NotificationAttempt model
   */
  interface NotificationAttemptFieldRefs {
    readonly id: FieldRef<"NotificationAttempt", 'String'>
    readonly status: FieldRef<"NotificationAttempt", 'String'>
    readonly createdAt: FieldRef<"NotificationAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationAttempt findUnique
   */
  export type NotificationAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationAttempt
     */
    select?: NotificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationAttempt
     */
    omit?: NotificationAttemptOmit<ExtArgs> | null
    /**
     * Filter, which NotificationAttempt to fetch.
     */
    where: NotificationAttemptWhereUniqueInput
  }

  /**
   * NotificationAttempt findUniqueOrThrow
   */
  export type NotificationAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationAttempt
     */
    select?: NotificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationAttempt
     */
    omit?: NotificationAttemptOmit<ExtArgs> | null
    /**
     * Filter, which NotificationAttempt to fetch.
     */
    where: NotificationAttemptWhereUniqueInput
  }

  /**
   * NotificationAttempt findFirst
   */
  export type NotificationAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationAttempt
     */
    select?: NotificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationAttempt
     */
    omit?: NotificationAttemptOmit<ExtArgs> | null
    /**
     * Filter, which NotificationAttempt to fetch.
     */
    where?: NotificationAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationAttempts to fetch.
     */
    orderBy?: NotificationAttemptOrderByWithRelationInput | NotificationAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationAttempts.
     */
    cursor?: NotificationAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationAttempts.
     */
    distinct?: NotificationAttemptScalarFieldEnum | NotificationAttemptScalarFieldEnum[]
  }

  /**
   * NotificationAttempt findFirstOrThrow
   */
  export type NotificationAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationAttempt
     */
    select?: NotificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationAttempt
     */
    omit?: NotificationAttemptOmit<ExtArgs> | null
    /**
     * Filter, which NotificationAttempt to fetch.
     */
    where?: NotificationAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationAttempts to fetch.
     */
    orderBy?: NotificationAttemptOrderByWithRelationInput | NotificationAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationAttempts.
     */
    cursor?: NotificationAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationAttempts.
     */
    distinct?: NotificationAttemptScalarFieldEnum | NotificationAttemptScalarFieldEnum[]
  }

  /**
   * NotificationAttempt findMany
   */
  export type NotificationAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationAttempt
     */
    select?: NotificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationAttempt
     */
    omit?: NotificationAttemptOmit<ExtArgs> | null
    /**
     * Filter, which NotificationAttempts to fetch.
     */
    where?: NotificationAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationAttempts to fetch.
     */
    orderBy?: NotificationAttemptOrderByWithRelationInput | NotificationAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationAttempts.
     */
    cursor?: NotificationAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationAttempts.
     */
    skip?: number
    distinct?: NotificationAttemptScalarFieldEnum | NotificationAttemptScalarFieldEnum[]
  }

  /**
   * NotificationAttempt create
   */
  export type NotificationAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationAttempt
     */
    select?: NotificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationAttempt
     */
    omit?: NotificationAttemptOmit<ExtArgs> | null
    /**
     * The data needed to create a NotificationAttempt.
     */
    data: XOR<NotificationAttemptCreateInput, NotificationAttemptUncheckedCreateInput>
  }

  /**
   * NotificationAttempt createMany
   */
  export type NotificationAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationAttempts.
     */
    data: NotificationAttemptCreateManyInput | NotificationAttemptCreateManyInput[]
  }

  /**
   * NotificationAttempt update
   */
  export type NotificationAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationAttempt
     */
    select?: NotificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationAttempt
     */
    omit?: NotificationAttemptOmit<ExtArgs> | null
    /**
     * The data needed to update a NotificationAttempt.
     */
    data: XOR<NotificationAttemptUpdateInput, NotificationAttemptUncheckedUpdateInput>
    /**
     * Choose, which NotificationAttempt to update.
     */
    where: NotificationAttemptWhereUniqueInput
  }

  /**
   * NotificationAttempt updateMany
   */
  export type NotificationAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationAttempts.
     */
    data: XOR<NotificationAttemptUpdateManyMutationInput, NotificationAttemptUncheckedUpdateManyInput>
    /**
     * Filter which NotificationAttempts to update
     */
    where?: NotificationAttemptWhereInput
    /**
     * Limit how many NotificationAttempts to update.
     */
    limit?: number
  }

  /**
   * NotificationAttempt upsert
   */
  export type NotificationAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationAttempt
     */
    select?: NotificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationAttempt
     */
    omit?: NotificationAttemptOmit<ExtArgs> | null
    /**
     * The filter to search for the NotificationAttempt to update in case it exists.
     */
    where: NotificationAttemptWhereUniqueInput
    /**
     * In case the NotificationAttempt found by the `where` argument doesn't exist, create a new NotificationAttempt with this data.
     */
    create: XOR<NotificationAttemptCreateInput, NotificationAttemptUncheckedCreateInput>
    /**
     * In case the NotificationAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationAttemptUpdateInput, NotificationAttemptUncheckedUpdateInput>
  }

  /**
   * NotificationAttempt delete
   */
  export type NotificationAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationAttempt
     */
    select?: NotificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationAttempt
     */
    omit?: NotificationAttemptOmit<ExtArgs> | null
    /**
     * Filter which NotificationAttempt to delete.
     */
    where: NotificationAttemptWhereUniqueInput
  }

  /**
   * NotificationAttempt deleteMany
   */
  export type NotificationAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationAttempts to delete
     */
    where?: NotificationAttemptWhereInput
    /**
     * Limit how many NotificationAttempts to delete.
     */
    limit?: number
  }

  /**
   * NotificationAttempt findRaw
   */
  export type NotificationAttemptFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationAttempt aggregateRaw
   */
  export type NotificationAttemptAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationAttempt without action
   */
  export type NotificationAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationAttempt
     */
    select?: NotificationAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationAttempt
     */
    omit?: NotificationAttemptOmit<ExtArgs> | null
  }


  /**
   * Model EscalationPolicy
   */

  export type AggregateEscalationPolicy = {
    _count: EscalationPolicyCountAggregateOutputType | null
    _avg: EscalationPolicyAvgAggregateOutputType | null
    _sum: EscalationPolicySumAggregateOutputType | null
    _min: EscalationPolicyMinAggregateOutputType | null
    _max: EscalationPolicyMaxAggregateOutputType | null
  }

  export type EscalationPolicyAvgAggregateOutputType = {
    maxEscalations: number | null
  }

  export type EscalationPolicySumAggregateOutputType = {
    maxEscalations: number | null
  }

  export type EscalationPolicyMinAggregateOutputType = {
    id: string | null
    name: string | null
    rules: string | null
    maxEscalations: number | null
    enabled: boolean | null
    createdAt: Date | null
  }

  export type EscalationPolicyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    rules: string | null
    maxEscalations: number | null
    enabled: boolean | null
    createdAt: Date | null
  }

  export type EscalationPolicyCountAggregateOutputType = {
    id: number
    name: number
    rules: number
    maxEscalations: number
    enabled: number
    createdAt: number
    _all: number
  }


  export type EscalationPolicyAvgAggregateInputType = {
    maxEscalations?: true
  }

  export type EscalationPolicySumAggregateInputType = {
    maxEscalations?: true
  }

  export type EscalationPolicyMinAggregateInputType = {
    id?: true
    name?: true
    rules?: true
    maxEscalations?: true
    enabled?: true
    createdAt?: true
  }

  export type EscalationPolicyMaxAggregateInputType = {
    id?: true
    name?: true
    rules?: true
    maxEscalations?: true
    enabled?: true
    createdAt?: true
  }

  export type EscalationPolicyCountAggregateInputType = {
    id?: true
    name?: true
    rules?: true
    maxEscalations?: true
    enabled?: true
    createdAt?: true
    _all?: true
  }

  export type EscalationPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EscalationPolicy to aggregate.
     */
    where?: EscalationPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscalationPolicies to fetch.
     */
    orderBy?: EscalationPolicyOrderByWithRelationInput | EscalationPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EscalationPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscalationPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscalationPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EscalationPolicies
    **/
    _count?: true | EscalationPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EscalationPolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EscalationPolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EscalationPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EscalationPolicyMaxAggregateInputType
  }

  export type GetEscalationPolicyAggregateType<T extends EscalationPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateEscalationPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEscalationPolicy[P]>
      : GetScalarType<T[P], AggregateEscalationPolicy[P]>
  }




  export type EscalationPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EscalationPolicyWhereInput
    orderBy?: EscalationPolicyOrderByWithAggregationInput | EscalationPolicyOrderByWithAggregationInput[]
    by: EscalationPolicyScalarFieldEnum[] | EscalationPolicyScalarFieldEnum
    having?: EscalationPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EscalationPolicyCountAggregateInputType | true
    _avg?: EscalationPolicyAvgAggregateInputType
    _sum?: EscalationPolicySumAggregateInputType
    _min?: EscalationPolicyMinAggregateInputType
    _max?: EscalationPolicyMaxAggregateInputType
  }

  export type EscalationPolicyGroupByOutputType = {
    id: string
    name: string
    rules: string
    maxEscalations: number
    enabled: boolean
    createdAt: Date
    _count: EscalationPolicyCountAggregateOutputType | null
    _avg: EscalationPolicyAvgAggregateOutputType | null
    _sum: EscalationPolicySumAggregateOutputType | null
    _min: EscalationPolicyMinAggregateOutputType | null
    _max: EscalationPolicyMaxAggregateOutputType | null
  }

  type GetEscalationPolicyGroupByPayload<T extends EscalationPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EscalationPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EscalationPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EscalationPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], EscalationPolicyGroupByOutputType[P]>
        }
      >
    >


  export type EscalationPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rules?: boolean
    maxEscalations?: boolean
    enabled?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["escalationPolicy"]>



  export type EscalationPolicySelectScalar = {
    id?: boolean
    name?: boolean
    rules?: boolean
    maxEscalations?: boolean
    enabled?: boolean
    createdAt?: boolean
  }

  export type EscalationPolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rules" | "maxEscalations" | "enabled" | "createdAt", ExtArgs["result"]["escalationPolicy"]>

  export type $EscalationPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EscalationPolicy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      rules: string
      maxEscalations: number
      enabled: boolean
      createdAt: Date
    }, ExtArgs["result"]["escalationPolicy"]>
    composites: {}
  }

  type EscalationPolicyGetPayload<S extends boolean | null | undefined | EscalationPolicyDefaultArgs> = $Result.GetResult<Prisma.$EscalationPolicyPayload, S>

  type EscalationPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EscalationPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EscalationPolicyCountAggregateInputType | true
    }

  export interface EscalationPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EscalationPolicy'], meta: { name: 'EscalationPolicy' } }
    /**
     * Find zero or one EscalationPolicy that matches the filter.
     * @param {EscalationPolicyFindUniqueArgs} args - Arguments to find a EscalationPolicy
     * @example
     * // Get one EscalationPolicy
     * const escalationPolicy = await prisma.escalationPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EscalationPolicyFindUniqueArgs>(args: SelectSubset<T, EscalationPolicyFindUniqueArgs<ExtArgs>>): Prisma__EscalationPolicyClient<$Result.GetResult<Prisma.$EscalationPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EscalationPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EscalationPolicyFindUniqueOrThrowArgs} args - Arguments to find a EscalationPolicy
     * @example
     * // Get one EscalationPolicy
     * const escalationPolicy = await prisma.escalationPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EscalationPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, EscalationPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EscalationPolicyClient<$Result.GetResult<Prisma.$EscalationPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EscalationPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationPolicyFindFirstArgs} args - Arguments to find a EscalationPolicy
     * @example
     * // Get one EscalationPolicy
     * const escalationPolicy = await prisma.escalationPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EscalationPolicyFindFirstArgs>(args?: SelectSubset<T, EscalationPolicyFindFirstArgs<ExtArgs>>): Prisma__EscalationPolicyClient<$Result.GetResult<Prisma.$EscalationPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EscalationPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationPolicyFindFirstOrThrowArgs} args - Arguments to find a EscalationPolicy
     * @example
     * // Get one EscalationPolicy
     * const escalationPolicy = await prisma.escalationPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EscalationPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, EscalationPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__EscalationPolicyClient<$Result.GetResult<Prisma.$EscalationPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EscalationPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EscalationPolicies
     * const escalationPolicies = await prisma.escalationPolicy.findMany()
     * 
     * // Get first 10 EscalationPolicies
     * const escalationPolicies = await prisma.escalationPolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const escalationPolicyWithIdOnly = await prisma.escalationPolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EscalationPolicyFindManyArgs>(args?: SelectSubset<T, EscalationPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EscalationPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EscalationPolicy.
     * @param {EscalationPolicyCreateArgs} args - Arguments to create a EscalationPolicy.
     * @example
     * // Create one EscalationPolicy
     * const EscalationPolicy = await prisma.escalationPolicy.create({
     *   data: {
     *     // ... data to create a EscalationPolicy
     *   }
     * })
     * 
     */
    create<T extends EscalationPolicyCreateArgs>(args: SelectSubset<T, EscalationPolicyCreateArgs<ExtArgs>>): Prisma__EscalationPolicyClient<$Result.GetResult<Prisma.$EscalationPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EscalationPolicies.
     * @param {EscalationPolicyCreateManyArgs} args - Arguments to create many EscalationPolicies.
     * @example
     * // Create many EscalationPolicies
     * const escalationPolicy = await prisma.escalationPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EscalationPolicyCreateManyArgs>(args?: SelectSubset<T, EscalationPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EscalationPolicy.
     * @param {EscalationPolicyDeleteArgs} args - Arguments to delete one EscalationPolicy.
     * @example
     * // Delete one EscalationPolicy
     * const EscalationPolicy = await prisma.escalationPolicy.delete({
     *   where: {
     *     // ... filter to delete one EscalationPolicy
     *   }
     * })
     * 
     */
    delete<T extends EscalationPolicyDeleteArgs>(args: SelectSubset<T, EscalationPolicyDeleteArgs<ExtArgs>>): Prisma__EscalationPolicyClient<$Result.GetResult<Prisma.$EscalationPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EscalationPolicy.
     * @param {EscalationPolicyUpdateArgs} args - Arguments to update one EscalationPolicy.
     * @example
     * // Update one EscalationPolicy
     * const escalationPolicy = await prisma.escalationPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EscalationPolicyUpdateArgs>(args: SelectSubset<T, EscalationPolicyUpdateArgs<ExtArgs>>): Prisma__EscalationPolicyClient<$Result.GetResult<Prisma.$EscalationPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EscalationPolicies.
     * @param {EscalationPolicyDeleteManyArgs} args - Arguments to filter EscalationPolicies to delete.
     * @example
     * // Delete a few EscalationPolicies
     * const { count } = await prisma.escalationPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EscalationPolicyDeleteManyArgs>(args?: SelectSubset<T, EscalationPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EscalationPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EscalationPolicies
     * const escalationPolicy = await prisma.escalationPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EscalationPolicyUpdateManyArgs>(args: SelectSubset<T, EscalationPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EscalationPolicy.
     * @param {EscalationPolicyUpsertArgs} args - Arguments to update or create a EscalationPolicy.
     * @example
     * // Update or create a EscalationPolicy
     * const escalationPolicy = await prisma.escalationPolicy.upsert({
     *   create: {
     *     // ... data to create a EscalationPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EscalationPolicy we want to update
     *   }
     * })
     */
    upsert<T extends EscalationPolicyUpsertArgs>(args: SelectSubset<T, EscalationPolicyUpsertArgs<ExtArgs>>): Prisma__EscalationPolicyClient<$Result.GetResult<Prisma.$EscalationPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EscalationPolicies that matches the filter.
     * @param {EscalationPolicyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const escalationPolicy = await prisma.escalationPolicy.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EscalationPolicyFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EscalationPolicy.
     * @param {EscalationPolicyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const escalationPolicy = await prisma.escalationPolicy.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EscalationPolicyAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EscalationPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationPolicyCountArgs} args - Arguments to filter EscalationPolicies to count.
     * @example
     * // Count the number of EscalationPolicies
     * const count = await prisma.escalationPolicy.count({
     *   where: {
     *     // ... the filter for the EscalationPolicies we want to count
     *   }
     * })
    **/
    count<T extends EscalationPolicyCountArgs>(
      args?: Subset<T, EscalationPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EscalationPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EscalationPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EscalationPolicyAggregateArgs>(args: Subset<T, EscalationPolicyAggregateArgs>): Prisma.PrismaPromise<GetEscalationPolicyAggregateType<T>>

    /**
     * Group by EscalationPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EscalationPolicyGroupByArgs} args - Group by arguments.
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
      T extends EscalationPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EscalationPolicyGroupByArgs['orderBy'] }
        : { orderBy?: EscalationPolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EscalationPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEscalationPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EscalationPolicy model
   */
  readonly fields: EscalationPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EscalationPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EscalationPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the EscalationPolicy model
   */
  interface EscalationPolicyFieldRefs {
    readonly id: FieldRef<"EscalationPolicy", 'String'>
    readonly name: FieldRef<"EscalationPolicy", 'String'>
    readonly rules: FieldRef<"EscalationPolicy", 'String'>
    readonly maxEscalations: FieldRef<"EscalationPolicy", 'Int'>
    readonly enabled: FieldRef<"EscalationPolicy", 'Boolean'>
    readonly createdAt: FieldRef<"EscalationPolicy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EscalationPolicy findUnique
   */
  export type EscalationPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationPolicy
     */
    select?: EscalationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationPolicy
     */
    omit?: EscalationPolicyOmit<ExtArgs> | null
    /**
     * Filter, which EscalationPolicy to fetch.
     */
    where: EscalationPolicyWhereUniqueInput
  }

  /**
   * EscalationPolicy findUniqueOrThrow
   */
  export type EscalationPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationPolicy
     */
    select?: EscalationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationPolicy
     */
    omit?: EscalationPolicyOmit<ExtArgs> | null
    /**
     * Filter, which EscalationPolicy to fetch.
     */
    where: EscalationPolicyWhereUniqueInput
  }

  /**
   * EscalationPolicy findFirst
   */
  export type EscalationPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationPolicy
     */
    select?: EscalationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationPolicy
     */
    omit?: EscalationPolicyOmit<ExtArgs> | null
    /**
     * Filter, which EscalationPolicy to fetch.
     */
    where?: EscalationPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscalationPolicies to fetch.
     */
    orderBy?: EscalationPolicyOrderByWithRelationInput | EscalationPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EscalationPolicies.
     */
    cursor?: EscalationPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscalationPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscalationPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscalationPolicies.
     */
    distinct?: EscalationPolicyScalarFieldEnum | EscalationPolicyScalarFieldEnum[]
  }

  /**
   * EscalationPolicy findFirstOrThrow
   */
  export type EscalationPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationPolicy
     */
    select?: EscalationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationPolicy
     */
    omit?: EscalationPolicyOmit<ExtArgs> | null
    /**
     * Filter, which EscalationPolicy to fetch.
     */
    where?: EscalationPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscalationPolicies to fetch.
     */
    orderBy?: EscalationPolicyOrderByWithRelationInput | EscalationPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EscalationPolicies.
     */
    cursor?: EscalationPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscalationPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscalationPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EscalationPolicies.
     */
    distinct?: EscalationPolicyScalarFieldEnum | EscalationPolicyScalarFieldEnum[]
  }

  /**
   * EscalationPolicy findMany
   */
  export type EscalationPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationPolicy
     */
    select?: EscalationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationPolicy
     */
    omit?: EscalationPolicyOmit<ExtArgs> | null
    /**
     * Filter, which EscalationPolicies to fetch.
     */
    where?: EscalationPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EscalationPolicies to fetch.
     */
    orderBy?: EscalationPolicyOrderByWithRelationInput | EscalationPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EscalationPolicies.
     */
    cursor?: EscalationPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EscalationPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EscalationPolicies.
     */
    skip?: number
    distinct?: EscalationPolicyScalarFieldEnum | EscalationPolicyScalarFieldEnum[]
  }

  /**
   * EscalationPolicy create
   */
  export type EscalationPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationPolicy
     */
    select?: EscalationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationPolicy
     */
    omit?: EscalationPolicyOmit<ExtArgs> | null
    /**
     * The data needed to create a EscalationPolicy.
     */
    data: XOR<EscalationPolicyCreateInput, EscalationPolicyUncheckedCreateInput>
  }

  /**
   * EscalationPolicy createMany
   */
  export type EscalationPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EscalationPolicies.
     */
    data: EscalationPolicyCreateManyInput | EscalationPolicyCreateManyInput[]
  }

  /**
   * EscalationPolicy update
   */
  export type EscalationPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationPolicy
     */
    select?: EscalationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationPolicy
     */
    omit?: EscalationPolicyOmit<ExtArgs> | null
    /**
     * The data needed to update a EscalationPolicy.
     */
    data: XOR<EscalationPolicyUpdateInput, EscalationPolicyUncheckedUpdateInput>
    /**
     * Choose, which EscalationPolicy to update.
     */
    where: EscalationPolicyWhereUniqueInput
  }

  /**
   * EscalationPolicy updateMany
   */
  export type EscalationPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EscalationPolicies.
     */
    data: XOR<EscalationPolicyUpdateManyMutationInput, EscalationPolicyUncheckedUpdateManyInput>
    /**
     * Filter which EscalationPolicies to update
     */
    where?: EscalationPolicyWhereInput
    /**
     * Limit how many EscalationPolicies to update.
     */
    limit?: number
  }

  /**
   * EscalationPolicy upsert
   */
  export type EscalationPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationPolicy
     */
    select?: EscalationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationPolicy
     */
    omit?: EscalationPolicyOmit<ExtArgs> | null
    /**
     * The filter to search for the EscalationPolicy to update in case it exists.
     */
    where: EscalationPolicyWhereUniqueInput
    /**
     * In case the EscalationPolicy found by the `where` argument doesn't exist, create a new EscalationPolicy with this data.
     */
    create: XOR<EscalationPolicyCreateInput, EscalationPolicyUncheckedCreateInput>
    /**
     * In case the EscalationPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EscalationPolicyUpdateInput, EscalationPolicyUncheckedUpdateInput>
  }

  /**
   * EscalationPolicy delete
   */
  export type EscalationPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationPolicy
     */
    select?: EscalationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationPolicy
     */
    omit?: EscalationPolicyOmit<ExtArgs> | null
    /**
     * Filter which EscalationPolicy to delete.
     */
    where: EscalationPolicyWhereUniqueInput
  }

  /**
   * EscalationPolicy deleteMany
   */
  export type EscalationPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EscalationPolicies to delete
     */
    where?: EscalationPolicyWhereInput
    /**
     * Limit how many EscalationPolicies to delete.
     */
    limit?: number
  }

  /**
   * EscalationPolicy findRaw
   */
  export type EscalationPolicyFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * EscalationPolicy aggregateRaw
   */
  export type EscalationPolicyAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * EscalationPolicy without action
   */
  export type EscalationPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EscalationPolicy
     */
    select?: EscalationPolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EscalationPolicy
     */
    omit?: EscalationPolicyOmit<ExtArgs> | null
  }


  /**
   * Model NotificationPreferences
   */

  export type AggregateNotificationPreferences = {
    _count: NotificationPreferencesCountAggregateOutputType | null
    _min: NotificationPreferencesMinAggregateOutputType | null
    _max: NotificationPreferencesMaxAggregateOutputType | null
  }

  export type NotificationPreferencesMinAggregateOutputType = {
    id: string | null
    responderId: string | null
    channels: string | null
    quietHours: string | null
    createdAt: Date | null
  }

  export type NotificationPreferencesMaxAggregateOutputType = {
    id: string | null
    responderId: string | null
    channels: string | null
    quietHours: string | null
    createdAt: Date | null
  }

  export type NotificationPreferencesCountAggregateOutputType = {
    id: number
    responderId: number
    channels: number
    quietHours: number
    createdAt: number
    _all: number
  }


  export type NotificationPreferencesMinAggregateInputType = {
    id?: true
    responderId?: true
    channels?: true
    quietHours?: true
    createdAt?: true
  }

  export type NotificationPreferencesMaxAggregateInputType = {
    id?: true
    responderId?: true
    channels?: true
    quietHours?: true
    createdAt?: true
  }

  export type NotificationPreferencesCountAggregateInputType = {
    id?: true
    responderId?: true
    channels?: true
    quietHours?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationPreferences to aggregate.
     */
    where?: NotificationPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferencesOrderByWithRelationInput | NotificationPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationPreferences
    **/
    _count?: true | NotificationPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationPreferencesMaxAggregateInputType
  }

  export type GetNotificationPreferencesAggregateType<T extends NotificationPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationPreferences[P]>
      : GetScalarType<T[P], AggregateNotificationPreferences[P]>
  }




  export type NotificationPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationPreferencesWhereInput
    orderBy?: NotificationPreferencesOrderByWithAggregationInput | NotificationPreferencesOrderByWithAggregationInput[]
    by: NotificationPreferencesScalarFieldEnum[] | NotificationPreferencesScalarFieldEnum
    having?: NotificationPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationPreferencesCountAggregateInputType | true
    _min?: NotificationPreferencesMinAggregateInputType
    _max?: NotificationPreferencesMaxAggregateInputType
  }

  export type NotificationPreferencesGroupByOutputType = {
    id: string
    responderId: string
    channels: string
    quietHours: string | null
    createdAt: Date
    _count: NotificationPreferencesCountAggregateOutputType | null
    _min: NotificationPreferencesMinAggregateOutputType | null
    _max: NotificationPreferencesMaxAggregateOutputType | null
  }

  type GetNotificationPreferencesGroupByPayload<T extends NotificationPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type NotificationPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responderId?: boolean
    channels?: boolean
    quietHours?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notificationPreferences"]>



  export type NotificationPreferencesSelectScalar = {
    id?: boolean
    responderId?: boolean
    channels?: boolean
    quietHours?: boolean
    createdAt?: boolean
  }

  export type NotificationPreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "responderId" | "channels" | "quietHours" | "createdAt", ExtArgs["result"]["notificationPreferences"]>

  export type $NotificationPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationPreferences"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      responderId: string
      channels: string
      quietHours: string | null
      createdAt: Date
    }, ExtArgs["result"]["notificationPreferences"]>
    composites: {}
  }

  type NotificationPreferencesGetPayload<S extends boolean | null | undefined | NotificationPreferencesDefaultArgs> = $Result.GetResult<Prisma.$NotificationPreferencesPayload, S>

  type NotificationPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationPreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationPreferencesCountAggregateInputType | true
    }

  export interface NotificationPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationPreferences'], meta: { name: 'NotificationPreferences' } }
    /**
     * Find zero or one NotificationPreferences that matches the filter.
     * @param {NotificationPreferencesFindUniqueArgs} args - Arguments to find a NotificationPreferences
     * @example
     * // Get one NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationPreferencesFindUniqueArgs>(args: SelectSubset<T, NotificationPreferencesFindUniqueArgs<ExtArgs>>): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationPreferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationPreferencesFindUniqueOrThrowArgs} args - Arguments to find a NotificationPreferences
     * @example
     * // Get one NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesFindFirstArgs} args - Arguments to find a NotificationPreferences
     * @example
     * // Get one NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationPreferencesFindFirstArgs>(args?: SelectSubset<T, NotificationPreferencesFindFirstArgs<ExtArgs>>): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesFindFirstOrThrowArgs} args - Arguments to find a NotificationPreferences
     * @example
     * // Get one NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findMany()
     * 
     * // Get first 10 NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationPreferencesWithIdOnly = await prisma.notificationPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationPreferencesFindManyArgs>(args?: SelectSubset<T, NotificationPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationPreferences.
     * @param {NotificationPreferencesCreateArgs} args - Arguments to create a NotificationPreferences.
     * @example
     * // Create one NotificationPreferences
     * const NotificationPreferences = await prisma.notificationPreferences.create({
     *   data: {
     *     // ... data to create a NotificationPreferences
     *   }
     * })
     * 
     */
    create<T extends NotificationPreferencesCreateArgs>(args: SelectSubset<T, NotificationPreferencesCreateArgs<ExtArgs>>): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationPreferences.
     * @param {NotificationPreferencesCreateManyArgs} args - Arguments to create many NotificationPreferences.
     * @example
     * // Create many NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationPreferencesCreateManyArgs>(args?: SelectSubset<T, NotificationPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotificationPreferences.
     * @param {NotificationPreferencesDeleteArgs} args - Arguments to delete one NotificationPreferences.
     * @example
     * // Delete one NotificationPreferences
     * const NotificationPreferences = await prisma.notificationPreferences.delete({
     *   where: {
     *     // ... filter to delete one NotificationPreferences
     *   }
     * })
     * 
     */
    delete<T extends NotificationPreferencesDeleteArgs>(args: SelectSubset<T, NotificationPreferencesDeleteArgs<ExtArgs>>): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationPreferences.
     * @param {NotificationPreferencesUpdateArgs} args - Arguments to update one NotificationPreferences.
     * @example
     * // Update one NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationPreferencesUpdateArgs>(args: SelectSubset<T, NotificationPreferencesUpdateArgs<ExtArgs>>): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationPreferences.
     * @param {NotificationPreferencesDeleteManyArgs} args - Arguments to filter NotificationPreferences to delete.
     * @example
     * // Delete a few NotificationPreferences
     * const { count } = await prisma.notificationPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationPreferencesDeleteManyArgs>(args?: SelectSubset<T, NotificationPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationPreferencesUpdateManyArgs>(args: SelectSubset<T, NotificationPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotificationPreferences.
     * @param {NotificationPreferencesUpsertArgs} args - Arguments to update or create a NotificationPreferences.
     * @example
     * // Update or create a NotificationPreferences
     * const notificationPreferences = await prisma.notificationPreferences.upsert({
     *   create: {
     *     // ... data to create a NotificationPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationPreferences we want to update
     *   }
     * })
     */
    upsert<T extends NotificationPreferencesUpsertArgs>(args: SelectSubset<T, NotificationPreferencesUpsertArgs<ExtArgs>>): Prisma__NotificationPreferencesClient<$Result.GetResult<Prisma.$NotificationPreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationPreferences that matches the filter.
     * @param {NotificationPreferencesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notificationPreferences = await prisma.notificationPreferences.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationPreferencesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a NotificationPreferences.
     * @param {NotificationPreferencesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notificationPreferences = await prisma.notificationPreferences.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationPreferencesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesCountArgs} args - Arguments to filter NotificationPreferences to count.
     * @example
     * // Count the number of NotificationPreferences
     * const count = await prisma.notificationPreferences.count({
     *   where: {
     *     // ... the filter for the NotificationPreferences we want to count
     *   }
     * })
    **/
    count<T extends NotificationPreferencesCountArgs>(
      args?: Subset<T, NotificationPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationPreferencesAggregateArgs>(args: Subset<T, NotificationPreferencesAggregateArgs>): Prisma.PrismaPromise<GetNotificationPreferencesAggregateType<T>>

    /**
     * Group by NotificationPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationPreferencesGroupByArgs} args - Group by arguments.
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
      T extends NotificationPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: NotificationPreferencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationPreferences model
   */
  readonly fields: NotificationPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NotificationPreferences model
   */
  interface NotificationPreferencesFieldRefs {
    readonly id: FieldRef<"NotificationPreferences", 'String'>
    readonly responderId: FieldRef<"NotificationPreferences", 'String'>
    readonly channels: FieldRef<"NotificationPreferences", 'String'>
    readonly quietHours: FieldRef<"NotificationPreferences", 'String'>
    readonly createdAt: FieldRef<"NotificationPreferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NotificationPreferences findUnique
   */
  export type NotificationPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreferences
     */
    omit?: NotificationPreferencesOmit<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where: NotificationPreferencesWhereUniqueInput
  }

  /**
   * NotificationPreferences findUniqueOrThrow
   */
  export type NotificationPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreferences
     */
    omit?: NotificationPreferencesOmit<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where: NotificationPreferencesWhereUniqueInput
  }

  /**
   * NotificationPreferences findFirst
   */
  export type NotificationPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreferences
     */
    omit?: NotificationPreferencesOmit<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where?: NotificationPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferencesOrderByWithRelationInput | NotificationPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationPreferences.
     */
    cursor?: NotificationPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationPreferences.
     */
    distinct?: NotificationPreferencesScalarFieldEnum | NotificationPreferencesScalarFieldEnum[]
  }

  /**
   * NotificationPreferences findFirstOrThrow
   */
  export type NotificationPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreferences
     */
    omit?: NotificationPreferencesOmit<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where?: NotificationPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferencesOrderByWithRelationInput | NotificationPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationPreferences.
     */
    cursor?: NotificationPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationPreferences.
     */
    distinct?: NotificationPreferencesScalarFieldEnum | NotificationPreferencesScalarFieldEnum[]
  }

  /**
   * NotificationPreferences findMany
   */
  export type NotificationPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreferences
     */
    omit?: NotificationPreferencesOmit<ExtArgs> | null
    /**
     * Filter, which NotificationPreferences to fetch.
     */
    where?: NotificationPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationPreferences to fetch.
     */
    orderBy?: NotificationPreferencesOrderByWithRelationInput | NotificationPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationPreferences.
     */
    cursor?: NotificationPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationPreferences.
     */
    skip?: number
    distinct?: NotificationPreferencesScalarFieldEnum | NotificationPreferencesScalarFieldEnum[]
  }

  /**
   * NotificationPreferences create
   */
  export type NotificationPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreferences
     */
    omit?: NotificationPreferencesOmit<ExtArgs> | null
    /**
     * The data needed to create a NotificationPreferences.
     */
    data: XOR<NotificationPreferencesCreateInput, NotificationPreferencesUncheckedCreateInput>
  }

  /**
   * NotificationPreferences createMany
   */
  export type NotificationPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationPreferences.
     */
    data: NotificationPreferencesCreateManyInput | NotificationPreferencesCreateManyInput[]
  }

  /**
   * NotificationPreferences update
   */
  export type NotificationPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreferences
     */
    omit?: NotificationPreferencesOmit<ExtArgs> | null
    /**
     * The data needed to update a NotificationPreferences.
     */
    data: XOR<NotificationPreferencesUpdateInput, NotificationPreferencesUncheckedUpdateInput>
    /**
     * Choose, which NotificationPreferences to update.
     */
    where: NotificationPreferencesWhereUniqueInput
  }

  /**
   * NotificationPreferences updateMany
   */
  export type NotificationPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationPreferences.
     */
    data: XOR<NotificationPreferencesUpdateManyMutationInput, NotificationPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which NotificationPreferences to update
     */
    where?: NotificationPreferencesWhereInput
    /**
     * Limit how many NotificationPreferences to update.
     */
    limit?: number
  }

  /**
   * NotificationPreferences upsert
   */
  export type NotificationPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreferences
     */
    omit?: NotificationPreferencesOmit<ExtArgs> | null
    /**
     * The filter to search for the NotificationPreferences to update in case it exists.
     */
    where: NotificationPreferencesWhereUniqueInput
    /**
     * In case the NotificationPreferences found by the `where` argument doesn't exist, create a new NotificationPreferences with this data.
     */
    create: XOR<NotificationPreferencesCreateInput, NotificationPreferencesUncheckedCreateInput>
    /**
     * In case the NotificationPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationPreferencesUpdateInput, NotificationPreferencesUncheckedUpdateInput>
  }

  /**
   * NotificationPreferences delete
   */
  export type NotificationPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreferences
     */
    omit?: NotificationPreferencesOmit<ExtArgs> | null
    /**
     * Filter which NotificationPreferences to delete.
     */
    where: NotificationPreferencesWhereUniqueInput
  }

  /**
   * NotificationPreferences deleteMany
   */
  export type NotificationPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationPreferences to delete
     */
    where?: NotificationPreferencesWhereInput
    /**
     * Limit how many NotificationPreferences to delete.
     */
    limit?: number
  }

  /**
   * NotificationPreferences findRaw
   */
  export type NotificationPreferencesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationPreferences aggregateRaw
   */
  export type NotificationPreferencesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NotificationPreferences without action
   */
  export type NotificationPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationPreferences
     */
    select?: NotificationPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationPreferences
     */
    omit?: NotificationPreferencesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const NotificationScalarFieldEnum: {
    id: 'id',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    recipientEmail: 'recipientEmail',
    recipientPhone: 'recipientPhone',
    incidentId: 'incidentId',
    severity: 'severity',
    channel: 'channel',
    attempts: 'attempts',
    maxAttempts: 'maxAttempts',
    nextRetry: 'nextRetry',
    sentAt: 'sentAt',
    readAt: 'readAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NotificationTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject: 'subject',
    body: 'body',
    type: 'type'
  };

  export type NotificationTemplateScalarFieldEnum = (typeof NotificationTemplateScalarFieldEnum)[keyof typeof NotificationTemplateScalarFieldEnum]


  export const NotificationDeliveryLogScalarFieldEnum: {
    id: 'id',
    notificationId: 'notificationId',
    channel: 'channel',
    status: 'status',
    response: 'response',
    createdAt: 'createdAt'
  };

  export type NotificationDeliveryLogScalarFieldEnum = (typeof NotificationDeliveryLogScalarFieldEnum)[keyof typeof NotificationDeliveryLogScalarFieldEnum]


  export const NotificationRuleScalarFieldEnum: {
    id: 'id',
    condition: 'condition',
    action: 'action'
  };

  export type NotificationRuleScalarFieldEnum = (typeof NotificationRuleScalarFieldEnum)[keyof typeof NotificationRuleScalarFieldEnum]


  export const NotificationRecipientScalarFieldEnum: {
    id: 'id',
    email: 'email'
  };

  export type NotificationRecipientScalarFieldEnum = (typeof NotificationRecipientScalarFieldEnum)[keyof typeof NotificationRecipientScalarFieldEnum]


  export const NotificationAttemptScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type NotificationAttemptScalarFieldEnum = (typeof NotificationAttemptScalarFieldEnum)[keyof typeof NotificationAttemptScalarFieldEnum]


  export const EscalationPolicyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rules: 'rules',
    maxEscalations: 'maxEscalations',
    enabled: 'enabled',
    createdAt: 'createdAt'
  };

  export type EscalationPolicyScalarFieldEnum = (typeof EscalationPolicyScalarFieldEnum)[keyof typeof EscalationPolicyScalarFieldEnum]


  export const NotificationPreferencesScalarFieldEnum: {
    id: 'id',
    responderId: 'responderId',
    channels: 'channels',
    quietHours: 'quietHours',
    createdAt: 'createdAt'
  };

  export type NotificationPreferencesScalarFieldEnum = (typeof NotificationPreferencesScalarFieldEnum)[keyof typeof NotificationPreferencesScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    status?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    recipientEmail?: StringFilter<"Notification"> | string
    recipientPhone?: StringNullableFilter<"Notification"> | string | null
    incidentId?: StringNullableFilter<"Notification"> | string | null
    severity?: StringFilter<"Notification"> | string
    channel?: StringFilter<"Notification"> | string
    attempts?: IntFilter<"Notification"> | number
    maxAttempts?: IntFilter<"Notification"> | number
    nextRetry?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    deliveryLogs?: NotificationDeliveryLogListRelationFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    incidentId?: SortOrder
    severity?: SortOrder
    channel?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    nextRetry?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
    updatedAt?: SortOrder
    deliveryLogs?: NotificationDeliveryLogOrderByRelationAggregateInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    message?: StringFilter<"Notification"> | string
    status?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    recipientEmail?: StringFilter<"Notification"> | string
    recipientPhone?: StringNullableFilter<"Notification"> | string | null
    incidentId?: StringNullableFilter<"Notification"> | string | null
    severity?: StringFilter<"Notification"> | string
    channel?: StringFilter<"Notification"> | string
    attempts?: IntFilter<"Notification"> | number
    maxAttempts?: IntFilter<"Notification"> | number
    nextRetry?: DateTimeNullableFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    deliveryLogs?: NotificationDeliveryLogListRelationFilter
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    incidentId?: SortOrder
    severity?: SortOrder
    channel?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    nextRetry?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    status?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    recipientEmail?: StringWithAggregatesFilter<"Notification"> | string
    recipientPhone?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    incidentId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    severity?: StringWithAggregatesFilter<"Notification"> | string
    channel?: StringWithAggregatesFilter<"Notification"> | string
    attempts?: IntWithAggregatesFilter<"Notification"> | number
    maxAttempts?: IntWithAggregatesFilter<"Notification"> | number
    nextRetry?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type NotificationTemplateWhereInput = {
    AND?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    OR?: NotificationTemplateWhereInput[]
    NOT?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    id?: StringFilter<"NotificationTemplate"> | string
    name?: StringFilter<"NotificationTemplate"> | string
    subject?: StringFilter<"NotificationTemplate"> | string
    body?: StringFilter<"NotificationTemplate"> | string
    type?: StringFilter<"NotificationTemplate"> | string
  }

  export type NotificationTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    type?: SortOrder
  }

  export type NotificationTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    OR?: NotificationTemplateWhereInput[]
    NOT?: NotificationTemplateWhereInput | NotificationTemplateWhereInput[]
    name?: StringFilter<"NotificationTemplate"> | string
    subject?: StringFilter<"NotificationTemplate"> | string
    body?: StringFilter<"NotificationTemplate"> | string
    type?: StringFilter<"NotificationTemplate"> | string
  }, "id">

  export type NotificationTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    type?: SortOrder
    _count?: NotificationTemplateCountOrderByAggregateInput
    _max?: NotificationTemplateMaxOrderByAggregateInput
    _min?: NotificationTemplateMinOrderByAggregateInput
  }

  export type NotificationTemplateScalarWhereWithAggregatesInput = {
    AND?: NotificationTemplateScalarWhereWithAggregatesInput | NotificationTemplateScalarWhereWithAggregatesInput[]
    OR?: NotificationTemplateScalarWhereWithAggregatesInput[]
    NOT?: NotificationTemplateScalarWhereWithAggregatesInput | NotificationTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    name?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    subject?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    body?: StringWithAggregatesFilter<"NotificationTemplate"> | string
    type?: StringWithAggregatesFilter<"NotificationTemplate"> | string
  }

  export type NotificationDeliveryLogWhereInput = {
    AND?: NotificationDeliveryLogWhereInput | NotificationDeliveryLogWhereInput[]
    OR?: NotificationDeliveryLogWhereInput[]
    NOT?: NotificationDeliveryLogWhereInput | NotificationDeliveryLogWhereInput[]
    id?: StringFilter<"NotificationDeliveryLog"> | string
    notificationId?: StringFilter<"NotificationDeliveryLog"> | string
    channel?: StringFilter<"NotificationDeliveryLog"> | string
    status?: StringFilter<"NotificationDeliveryLog"> | string
    response?: StringNullableFilter<"NotificationDeliveryLog"> | string | null
    createdAt?: DateTimeFilter<"NotificationDeliveryLog"> | Date | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
  }

  export type NotificationDeliveryLogOrderByWithRelationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    notification?: NotificationOrderByWithRelationInput
  }

  export type NotificationDeliveryLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationDeliveryLogWhereInput | NotificationDeliveryLogWhereInput[]
    OR?: NotificationDeliveryLogWhereInput[]
    NOT?: NotificationDeliveryLogWhereInput | NotificationDeliveryLogWhereInput[]
    notificationId?: StringFilter<"NotificationDeliveryLog"> | string
    channel?: StringFilter<"NotificationDeliveryLog"> | string
    status?: StringFilter<"NotificationDeliveryLog"> | string
    response?: StringNullableFilter<"NotificationDeliveryLog"> | string | null
    createdAt?: DateTimeFilter<"NotificationDeliveryLog"> | Date | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
  }, "id">

  export type NotificationDeliveryLogOrderByWithAggregationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationDeliveryLogCountOrderByAggregateInput
    _max?: NotificationDeliveryLogMaxOrderByAggregateInput
    _min?: NotificationDeliveryLogMinOrderByAggregateInput
  }

  export type NotificationDeliveryLogScalarWhereWithAggregatesInput = {
    AND?: NotificationDeliveryLogScalarWhereWithAggregatesInput | NotificationDeliveryLogScalarWhereWithAggregatesInput[]
    OR?: NotificationDeliveryLogScalarWhereWithAggregatesInput[]
    NOT?: NotificationDeliveryLogScalarWhereWithAggregatesInput | NotificationDeliveryLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationDeliveryLog"> | string
    notificationId?: StringWithAggregatesFilter<"NotificationDeliveryLog"> | string
    channel?: StringWithAggregatesFilter<"NotificationDeliveryLog"> | string
    status?: StringWithAggregatesFilter<"NotificationDeliveryLog"> | string
    response?: StringNullableWithAggregatesFilter<"NotificationDeliveryLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationDeliveryLog"> | Date | string
  }

  export type NotificationRuleWhereInput = {
    AND?: NotificationRuleWhereInput | NotificationRuleWhereInput[]
    OR?: NotificationRuleWhereInput[]
    NOT?: NotificationRuleWhereInput | NotificationRuleWhereInput[]
    id?: StringFilter<"NotificationRule"> | string
    condition?: StringFilter<"NotificationRule"> | string
    action?: StringFilter<"NotificationRule"> | string
  }

  export type NotificationRuleOrderByWithRelationInput = {
    id?: SortOrder
    condition?: SortOrder
    action?: SortOrder
  }

  export type NotificationRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationRuleWhereInput | NotificationRuleWhereInput[]
    OR?: NotificationRuleWhereInput[]
    NOT?: NotificationRuleWhereInput | NotificationRuleWhereInput[]
    condition?: StringFilter<"NotificationRule"> | string
    action?: StringFilter<"NotificationRule"> | string
  }, "id">

  export type NotificationRuleOrderByWithAggregationInput = {
    id?: SortOrder
    condition?: SortOrder
    action?: SortOrder
    _count?: NotificationRuleCountOrderByAggregateInput
    _max?: NotificationRuleMaxOrderByAggregateInput
    _min?: NotificationRuleMinOrderByAggregateInput
  }

  export type NotificationRuleScalarWhereWithAggregatesInput = {
    AND?: NotificationRuleScalarWhereWithAggregatesInput | NotificationRuleScalarWhereWithAggregatesInput[]
    OR?: NotificationRuleScalarWhereWithAggregatesInput[]
    NOT?: NotificationRuleScalarWhereWithAggregatesInput | NotificationRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationRule"> | string
    condition?: StringWithAggregatesFilter<"NotificationRule"> | string
    action?: StringWithAggregatesFilter<"NotificationRule"> | string
  }

  export type NotificationRecipientWhereInput = {
    AND?: NotificationRecipientWhereInput | NotificationRecipientWhereInput[]
    OR?: NotificationRecipientWhereInput[]
    NOT?: NotificationRecipientWhereInput | NotificationRecipientWhereInput[]
    id?: StringFilter<"NotificationRecipient"> | string
    email?: StringFilter<"NotificationRecipient"> | string
  }

  export type NotificationRecipientOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type NotificationRecipientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationRecipientWhereInput | NotificationRecipientWhereInput[]
    OR?: NotificationRecipientWhereInput[]
    NOT?: NotificationRecipientWhereInput | NotificationRecipientWhereInput[]
    email?: StringFilter<"NotificationRecipient"> | string
  }, "id">

  export type NotificationRecipientOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    _count?: NotificationRecipientCountOrderByAggregateInput
    _max?: NotificationRecipientMaxOrderByAggregateInput
    _min?: NotificationRecipientMinOrderByAggregateInput
  }

  export type NotificationRecipientScalarWhereWithAggregatesInput = {
    AND?: NotificationRecipientScalarWhereWithAggregatesInput | NotificationRecipientScalarWhereWithAggregatesInput[]
    OR?: NotificationRecipientScalarWhereWithAggregatesInput[]
    NOT?: NotificationRecipientScalarWhereWithAggregatesInput | NotificationRecipientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationRecipient"> | string
    email?: StringWithAggregatesFilter<"NotificationRecipient"> | string
  }

  export type NotificationAttemptWhereInput = {
    AND?: NotificationAttemptWhereInput | NotificationAttemptWhereInput[]
    OR?: NotificationAttemptWhereInput[]
    NOT?: NotificationAttemptWhereInput | NotificationAttemptWhereInput[]
    id?: StringFilter<"NotificationAttempt"> | string
    status?: StringFilter<"NotificationAttempt"> | string
    createdAt?: DateTimeFilter<"NotificationAttempt"> | Date | string
  }

  export type NotificationAttemptOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationAttemptWhereInput | NotificationAttemptWhereInput[]
    OR?: NotificationAttemptWhereInput[]
    NOT?: NotificationAttemptWhereInput | NotificationAttemptWhereInput[]
    status?: StringFilter<"NotificationAttempt"> | string
    createdAt?: DateTimeFilter<"NotificationAttempt"> | Date | string
  }, "id">

  export type NotificationAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationAttemptCountOrderByAggregateInput
    _max?: NotificationAttemptMaxOrderByAggregateInput
    _min?: NotificationAttemptMinOrderByAggregateInput
  }

  export type NotificationAttemptScalarWhereWithAggregatesInput = {
    AND?: NotificationAttemptScalarWhereWithAggregatesInput | NotificationAttemptScalarWhereWithAggregatesInput[]
    OR?: NotificationAttemptScalarWhereWithAggregatesInput[]
    NOT?: NotificationAttemptScalarWhereWithAggregatesInput | NotificationAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationAttempt"> | string
    status?: StringWithAggregatesFilter<"NotificationAttempt"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NotificationAttempt"> | Date | string
  }

  export type EscalationPolicyWhereInput = {
    AND?: EscalationPolicyWhereInput | EscalationPolicyWhereInput[]
    OR?: EscalationPolicyWhereInput[]
    NOT?: EscalationPolicyWhereInput | EscalationPolicyWhereInput[]
    id?: StringFilter<"EscalationPolicy"> | string
    name?: StringFilter<"EscalationPolicy"> | string
    rules?: StringFilter<"EscalationPolicy"> | string
    maxEscalations?: IntFilter<"EscalationPolicy"> | number
    enabled?: BoolFilter<"EscalationPolicy"> | boolean
    createdAt?: DateTimeFilter<"EscalationPolicy"> | Date | string
  }

  export type EscalationPolicyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    maxEscalations?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type EscalationPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EscalationPolicyWhereInput | EscalationPolicyWhereInput[]
    OR?: EscalationPolicyWhereInput[]
    NOT?: EscalationPolicyWhereInput | EscalationPolicyWhereInput[]
    name?: StringFilter<"EscalationPolicy"> | string
    rules?: StringFilter<"EscalationPolicy"> | string
    maxEscalations?: IntFilter<"EscalationPolicy"> | number
    enabled?: BoolFilter<"EscalationPolicy"> | boolean
    createdAt?: DateTimeFilter<"EscalationPolicy"> | Date | string
  }, "id">

  export type EscalationPolicyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    maxEscalations?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    _count?: EscalationPolicyCountOrderByAggregateInput
    _avg?: EscalationPolicyAvgOrderByAggregateInput
    _max?: EscalationPolicyMaxOrderByAggregateInput
    _min?: EscalationPolicyMinOrderByAggregateInput
    _sum?: EscalationPolicySumOrderByAggregateInput
  }

  export type EscalationPolicyScalarWhereWithAggregatesInput = {
    AND?: EscalationPolicyScalarWhereWithAggregatesInput | EscalationPolicyScalarWhereWithAggregatesInput[]
    OR?: EscalationPolicyScalarWhereWithAggregatesInput[]
    NOT?: EscalationPolicyScalarWhereWithAggregatesInput | EscalationPolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EscalationPolicy"> | string
    name?: StringWithAggregatesFilter<"EscalationPolicy"> | string
    rules?: StringWithAggregatesFilter<"EscalationPolicy"> | string
    maxEscalations?: IntWithAggregatesFilter<"EscalationPolicy"> | number
    enabled?: BoolWithAggregatesFilter<"EscalationPolicy"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EscalationPolicy"> | Date | string
  }

  export type NotificationPreferencesWhereInput = {
    AND?: NotificationPreferencesWhereInput | NotificationPreferencesWhereInput[]
    OR?: NotificationPreferencesWhereInput[]
    NOT?: NotificationPreferencesWhereInput | NotificationPreferencesWhereInput[]
    id?: StringFilter<"NotificationPreferences"> | string
    responderId?: StringFilter<"NotificationPreferences"> | string
    channels?: StringFilter<"NotificationPreferences"> | string
    quietHours?: StringNullableFilter<"NotificationPreferences"> | string | null
    createdAt?: DateTimeFilter<"NotificationPreferences"> | Date | string
  }

  export type NotificationPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    responderId?: SortOrder
    channels?: SortOrder
    quietHours?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationPreferencesWhereInput | NotificationPreferencesWhereInput[]
    OR?: NotificationPreferencesWhereInput[]
    NOT?: NotificationPreferencesWhereInput | NotificationPreferencesWhereInput[]
    responderId?: StringFilter<"NotificationPreferences"> | string
    channels?: StringFilter<"NotificationPreferences"> | string
    quietHours?: StringNullableFilter<"NotificationPreferences"> | string | null
    createdAt?: DateTimeFilter<"NotificationPreferences"> | Date | string
  }, "id">

  export type NotificationPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    responderId?: SortOrder
    channels?: SortOrder
    quietHours?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationPreferencesCountOrderByAggregateInput
    _max?: NotificationPreferencesMaxOrderByAggregateInput
    _min?: NotificationPreferencesMinOrderByAggregateInput
  }

  export type NotificationPreferencesScalarWhereWithAggregatesInput = {
    AND?: NotificationPreferencesScalarWhereWithAggregatesInput | NotificationPreferencesScalarWhereWithAggregatesInput[]
    OR?: NotificationPreferencesScalarWhereWithAggregatesInput[]
    NOT?: NotificationPreferencesScalarWhereWithAggregatesInput | NotificationPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationPreferences"> | string
    responderId?: StringWithAggregatesFilter<"NotificationPreferences"> | string
    channels?: StringWithAggregatesFilter<"NotificationPreferences"> | string
    quietHours?: StringNullableWithAggregatesFilter<"NotificationPreferences"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NotificationPreferences"> | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    status: string
    createdAt?: Date | string
    recipientEmail: string
    recipientPhone?: string | null
    incidentId?: string | null
    severity: string
    channel?: string
    attempts?: number
    maxAttempts?: number
    nextRetry?: Date | string | null
    sentAt?: Date | string | null
    readAt?: Date | string | null
    updatedAt?: Date | string
    deliveryLogs?: NotificationDeliveryLogCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    message: string
    status: string
    createdAt?: Date | string
    recipientEmail: string
    recipientPhone?: string | null
    incidentId?: string | null
    severity: string
    channel?: string
    attempts?: number
    maxAttempts?: number
    nextRetry?: Date | string | null
    sentAt?: Date | string | null
    readAt?: Date | string | null
    updatedAt?: Date | string
    deliveryLogs?: NotificationDeliveryLogUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    incidentId?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextRetry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryLogs?: NotificationDeliveryLogUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    incidentId?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextRetry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryLogs?: NotificationDeliveryLogUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateManyInput = {
    id?: string
    message: string
    status: string
    createdAt?: Date | string
    recipientEmail: string
    recipientPhone?: string | null
    incidentId?: string | null
    severity: string
    channel?: string
    attempts?: number
    maxAttempts?: number
    nextRetry?: Date | string | null
    sentAt?: Date | string | null
    readAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    incidentId?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextRetry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    incidentId?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextRetry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationTemplateCreateInput = {
    id?: string
    name: string
    subject: string
    body: string
    type: string
  }

  export type NotificationTemplateUncheckedCreateInput = {
    id?: string
    name: string
    subject: string
    body: string
    type: string
  }

  export type NotificationTemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationTemplateUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationTemplateCreateManyInput = {
    id?: string
    name: string
    subject: string
    body: string
    type: string
  }

  export type NotificationTemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationTemplateUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationDeliveryLogCreateInput = {
    id?: string
    channel: string
    status: string
    response?: string | null
    createdAt?: Date | string
    notification: NotificationCreateNestedOneWithoutDeliveryLogsInput
  }

  export type NotificationDeliveryLogUncheckedCreateInput = {
    id?: string
    notificationId: string
    channel: string
    status: string
    response?: string | null
    createdAt?: Date | string
  }

  export type NotificationDeliveryLogUpdateInput = {
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: NotificationUpdateOneRequiredWithoutDeliveryLogsNestedInput
  }

  export type NotificationDeliveryLogUncheckedUpdateInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationDeliveryLogCreateManyInput = {
    id?: string
    notificationId: string
    channel: string
    status: string
    response?: string | null
    createdAt?: Date | string
  }

  export type NotificationDeliveryLogUpdateManyMutationInput = {
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationDeliveryLogUncheckedUpdateManyInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationRuleCreateInput = {
    id?: string
    condition: string
    action: string
  }

  export type NotificationRuleUncheckedCreateInput = {
    id?: string
    condition: string
    action: string
  }

  export type NotificationRuleUpdateInput = {
    condition?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationRuleUncheckedUpdateInput = {
    condition?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationRuleCreateManyInput = {
    id?: string
    condition: string
    action: string
  }

  export type NotificationRuleUpdateManyMutationInput = {
    condition?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationRuleUncheckedUpdateManyInput = {
    condition?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationRecipientCreateInput = {
    id?: string
    email: string
  }

  export type NotificationRecipientUncheckedCreateInput = {
    id?: string
    email: string
  }

  export type NotificationRecipientUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationRecipientUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationRecipientCreateManyInput = {
    id?: string
    email: string
  }

  export type NotificationRecipientUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationRecipientUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationAttemptCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
  }

  export type NotificationAttemptUncheckedCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
  }

  export type NotificationAttemptUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationAttemptUncheckedUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationAttemptCreateManyInput = {
    id?: string
    status: string
    createdAt?: Date | string
  }

  export type NotificationAttemptUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationAttemptUncheckedUpdateManyInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscalationPolicyCreateInput = {
    id?: string
    name: string
    rules?: string
    maxEscalations?: number
    enabled?: boolean
    createdAt?: Date | string
  }

  export type EscalationPolicyUncheckedCreateInput = {
    id?: string
    name: string
    rules?: string
    maxEscalations?: number
    enabled?: boolean
    createdAt?: Date | string
  }

  export type EscalationPolicyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    maxEscalations?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscalationPolicyUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    maxEscalations?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscalationPolicyCreateManyInput = {
    id?: string
    name: string
    rules?: string
    maxEscalations?: number
    enabled?: boolean
    createdAt?: Date | string
  }

  export type EscalationPolicyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    maxEscalations?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EscalationPolicyUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    maxEscalations?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferencesCreateInput = {
    id?: string
    responderId: string
    channels?: string
    quietHours?: string | null
    createdAt?: Date | string
  }

  export type NotificationPreferencesUncheckedCreateInput = {
    id?: string
    responderId: string
    channels?: string
    quietHours?: string | null
    createdAt?: Date | string
  }

  export type NotificationPreferencesUpdateInput = {
    responderId?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    quietHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferencesUncheckedUpdateInput = {
    responderId?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    quietHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferencesCreateManyInput = {
    id?: string
    responderId: string
    channels?: string
    quietHours?: string | null
    createdAt?: Date | string
  }

  export type NotificationPreferencesUpdateManyMutationInput = {
    responderId?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    quietHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationPreferencesUncheckedUpdateManyInput = {
    responderId?: StringFieldUpdateOperationsInput | string
    channels?: StringFieldUpdateOperationsInput | string
    quietHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type NotificationDeliveryLogListRelationFilter = {
    every?: NotificationDeliveryLogWhereInput
    some?: NotificationDeliveryLogWhereInput
    none?: NotificationDeliveryLogWhereInput
  }

  export type NotificationDeliveryLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    incidentId?: SortOrder
    severity?: SortOrder
    channel?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    nextRetry?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    incidentId?: SortOrder
    severity?: SortOrder
    channel?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    nextRetry?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    incidentId?: SortOrder
    severity?: SortOrder
    channel?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    nextRetry?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
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

  export type NotificationTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    type?: SortOrder
  }

  export type NotificationTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    type?: SortOrder
  }

  export type NotificationTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    type?: SortOrder
  }

  export type NotificationScalarRelationFilter = {
    is?: NotificationWhereInput
    isNot?: NotificationWhereInput
  }

  export type NotificationDeliveryLogCountOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationDeliveryLogMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationDeliveryLogMinOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationRuleCountOrderByAggregateInput = {
    id?: SortOrder
    condition?: SortOrder
    action?: SortOrder
  }

  export type NotificationRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    condition?: SortOrder
    action?: SortOrder
  }

  export type NotificationRuleMinOrderByAggregateInput = {
    id?: SortOrder
    condition?: SortOrder
    action?: SortOrder
  }

  export type NotificationRecipientCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type NotificationRecipientMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type NotificationRecipientMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type NotificationAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EscalationPolicyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    maxEscalations?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type EscalationPolicyAvgOrderByAggregateInput = {
    maxEscalations?: SortOrder
  }

  export type EscalationPolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    maxEscalations?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type EscalationPolicyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rules?: SortOrder
    maxEscalations?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
  }

  export type EscalationPolicySumOrderByAggregateInput = {
    maxEscalations?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NotificationPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    responderId?: SortOrder
    channels?: SortOrder
    quietHours?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    responderId?: SortOrder
    channels?: SortOrder
    quietHours?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    responderId?: SortOrder
    channels?: SortOrder
    quietHours?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationDeliveryLogCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationDeliveryLogCreateWithoutNotificationInput, NotificationDeliveryLogUncheckedCreateWithoutNotificationInput> | NotificationDeliveryLogCreateWithoutNotificationInput[] | NotificationDeliveryLogUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationDeliveryLogCreateOrConnectWithoutNotificationInput | NotificationDeliveryLogCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationDeliveryLogCreateManyNotificationInputEnvelope
    connect?: NotificationDeliveryLogWhereUniqueInput | NotificationDeliveryLogWhereUniqueInput[]
  }

  export type NotificationDeliveryLogUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationDeliveryLogCreateWithoutNotificationInput, NotificationDeliveryLogUncheckedCreateWithoutNotificationInput> | NotificationDeliveryLogCreateWithoutNotificationInput[] | NotificationDeliveryLogUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationDeliveryLogCreateOrConnectWithoutNotificationInput | NotificationDeliveryLogCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationDeliveryLogCreateManyNotificationInputEnvelope
    connect?: NotificationDeliveryLogWhereUniqueInput | NotificationDeliveryLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type NotificationDeliveryLogUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationDeliveryLogCreateWithoutNotificationInput, NotificationDeliveryLogUncheckedCreateWithoutNotificationInput> | NotificationDeliveryLogCreateWithoutNotificationInput[] | NotificationDeliveryLogUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationDeliveryLogCreateOrConnectWithoutNotificationInput | NotificationDeliveryLogCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationDeliveryLogUpsertWithWhereUniqueWithoutNotificationInput | NotificationDeliveryLogUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationDeliveryLogCreateManyNotificationInputEnvelope
    set?: NotificationDeliveryLogWhereUniqueInput | NotificationDeliveryLogWhereUniqueInput[]
    disconnect?: NotificationDeliveryLogWhereUniqueInput | NotificationDeliveryLogWhereUniqueInput[]
    delete?: NotificationDeliveryLogWhereUniqueInput | NotificationDeliveryLogWhereUniqueInput[]
    connect?: NotificationDeliveryLogWhereUniqueInput | NotificationDeliveryLogWhereUniqueInput[]
    update?: NotificationDeliveryLogUpdateWithWhereUniqueWithoutNotificationInput | NotificationDeliveryLogUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationDeliveryLogUpdateManyWithWhereWithoutNotificationInput | NotificationDeliveryLogUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationDeliveryLogScalarWhereInput | NotificationDeliveryLogScalarWhereInput[]
  }

  export type NotificationDeliveryLogUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationDeliveryLogCreateWithoutNotificationInput, NotificationDeliveryLogUncheckedCreateWithoutNotificationInput> | NotificationDeliveryLogCreateWithoutNotificationInput[] | NotificationDeliveryLogUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationDeliveryLogCreateOrConnectWithoutNotificationInput | NotificationDeliveryLogCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationDeliveryLogUpsertWithWhereUniqueWithoutNotificationInput | NotificationDeliveryLogUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationDeliveryLogCreateManyNotificationInputEnvelope
    set?: NotificationDeliveryLogWhereUniqueInput | NotificationDeliveryLogWhereUniqueInput[]
    disconnect?: NotificationDeliveryLogWhereUniqueInput | NotificationDeliveryLogWhereUniqueInput[]
    delete?: NotificationDeliveryLogWhereUniqueInput | NotificationDeliveryLogWhereUniqueInput[]
    connect?: NotificationDeliveryLogWhereUniqueInput | NotificationDeliveryLogWhereUniqueInput[]
    update?: NotificationDeliveryLogUpdateWithWhereUniqueWithoutNotificationInput | NotificationDeliveryLogUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationDeliveryLogUpdateManyWithWhereWithoutNotificationInput | NotificationDeliveryLogUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationDeliveryLogScalarWhereInput | NotificationDeliveryLogScalarWhereInput[]
  }

  export type NotificationCreateNestedOneWithoutDeliveryLogsInput = {
    create?: XOR<NotificationCreateWithoutDeliveryLogsInput, NotificationUncheckedCreateWithoutDeliveryLogsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutDeliveryLogsInput
    connect?: NotificationWhereUniqueInput
  }

  export type NotificationUpdateOneRequiredWithoutDeliveryLogsNestedInput = {
    create?: XOR<NotificationCreateWithoutDeliveryLogsInput, NotificationUncheckedCreateWithoutDeliveryLogsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutDeliveryLogsInput
    upsert?: NotificationUpsertWithoutDeliveryLogsInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutDeliveryLogsInput, NotificationUpdateWithoutDeliveryLogsInput>, NotificationUncheckedUpdateWithoutDeliveryLogsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NotificationDeliveryLogCreateWithoutNotificationInput = {
    id?: string
    channel: string
    status: string
    response?: string | null
    createdAt?: Date | string
  }

  export type NotificationDeliveryLogUncheckedCreateWithoutNotificationInput = {
    id?: string
    channel: string
    status: string
    response?: string | null
    createdAt?: Date | string
  }

  export type NotificationDeliveryLogCreateOrConnectWithoutNotificationInput = {
    where: NotificationDeliveryLogWhereUniqueInput
    create: XOR<NotificationDeliveryLogCreateWithoutNotificationInput, NotificationDeliveryLogUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationDeliveryLogCreateManyNotificationInputEnvelope = {
    data: NotificationDeliveryLogCreateManyNotificationInput | NotificationDeliveryLogCreateManyNotificationInput[]
  }

  export type NotificationDeliveryLogUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationDeliveryLogWhereUniqueInput
    update: XOR<NotificationDeliveryLogUpdateWithoutNotificationInput, NotificationDeliveryLogUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationDeliveryLogCreateWithoutNotificationInput, NotificationDeliveryLogUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationDeliveryLogUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationDeliveryLogWhereUniqueInput
    data: XOR<NotificationDeliveryLogUpdateWithoutNotificationInput, NotificationDeliveryLogUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationDeliveryLogUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationDeliveryLogScalarWhereInput
    data: XOR<NotificationDeliveryLogUpdateManyMutationInput, NotificationDeliveryLogUncheckedUpdateManyWithoutNotificationInput>
  }

  export type NotificationDeliveryLogScalarWhereInput = {
    AND?: NotificationDeliveryLogScalarWhereInput | NotificationDeliveryLogScalarWhereInput[]
    OR?: NotificationDeliveryLogScalarWhereInput[]
    NOT?: NotificationDeliveryLogScalarWhereInput | NotificationDeliveryLogScalarWhereInput[]
    id?: StringFilter<"NotificationDeliveryLog"> | string
    notificationId?: StringFilter<"NotificationDeliveryLog"> | string
    channel?: StringFilter<"NotificationDeliveryLog"> | string
    status?: StringFilter<"NotificationDeliveryLog"> | string
    response?: StringNullableFilter<"NotificationDeliveryLog"> | string | null
    createdAt?: DateTimeFilter<"NotificationDeliveryLog"> | Date | string
  }

  export type NotificationCreateWithoutDeliveryLogsInput = {
    id?: string
    message: string
    status: string
    createdAt?: Date | string
    recipientEmail: string
    recipientPhone?: string | null
    incidentId?: string | null
    severity: string
    channel?: string
    attempts?: number
    maxAttempts?: number
    nextRetry?: Date | string | null
    sentAt?: Date | string | null
    readAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutDeliveryLogsInput = {
    id?: string
    message: string
    status: string
    createdAt?: Date | string
    recipientEmail: string
    recipientPhone?: string | null
    incidentId?: string | null
    severity: string
    channel?: string
    attempts?: number
    maxAttempts?: number
    nextRetry?: Date | string | null
    sentAt?: Date | string | null
    readAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutDeliveryLogsInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutDeliveryLogsInput, NotificationUncheckedCreateWithoutDeliveryLogsInput>
  }

  export type NotificationUpsertWithoutDeliveryLogsInput = {
    update: XOR<NotificationUpdateWithoutDeliveryLogsInput, NotificationUncheckedUpdateWithoutDeliveryLogsInput>
    create: XOR<NotificationCreateWithoutDeliveryLogsInput, NotificationUncheckedCreateWithoutDeliveryLogsInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutDeliveryLogsInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutDeliveryLogsInput, NotificationUncheckedUpdateWithoutDeliveryLogsInput>
  }

  export type NotificationUpdateWithoutDeliveryLogsInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    incidentId?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextRetry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutDeliveryLogsInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    incidentId?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextRetry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationDeliveryLogCreateManyNotificationInput = {
    id?: string
    channel: string
    status: string
    response?: string | null
    createdAt?: Date | string
  }

  export type NotificationDeliveryLogUpdateWithoutNotificationInput = {
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationDeliveryLogUncheckedUpdateWithoutNotificationInput = {
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationDeliveryLogUncheckedUpdateManyWithoutNotificationInput = {
    channel?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    response?: NullableStringFieldUpdateOperationsInput | string | null
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