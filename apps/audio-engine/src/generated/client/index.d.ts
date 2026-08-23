
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
 * Model AudioConfiguration
 * 
 */
export type AudioConfiguration = $Result.DefaultSelection<Prisma.$AudioConfigurationPayload>
/**
 * Model AudioKeyword
 * 
 */
export type AudioKeyword = $Result.DefaultSelection<Prisma.$AudioKeywordPayload>
/**
 * Model AudioDetectionEvent
 * 
 */
export type AudioDetectionEvent = $Result.DefaultSelection<Prisma.$AudioDetectionEventPayload>
/**
 * Model AudioProcessingLog
 * 
 */
export type AudioProcessingLog = $Result.DefaultSelection<Prisma.$AudioProcessingLogPayload>
/**
 * Model DetectionRule
 * 
 */
export type DetectionRule = $Result.DefaultSelection<Prisma.$DetectionRulePayload>
/**
 * Model AudioWebhook
 * 
 */
export type AudioWebhook = $Result.DefaultSelection<Prisma.$AudioWebhookPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AudioConfigurations
 * const audioConfigurations = await prisma.audioConfiguration.findMany()
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
   * // Fetch zero or more AudioConfigurations
   * const audioConfigurations = await prisma.audioConfiguration.findMany()
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
   * `prisma.audioConfiguration`: Exposes CRUD operations for the **AudioConfiguration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioConfigurations
    * const audioConfigurations = await prisma.audioConfiguration.findMany()
    * ```
    */
  get audioConfiguration(): Prisma.AudioConfigurationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audioKeyword`: Exposes CRUD operations for the **AudioKeyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioKeywords
    * const audioKeywords = await prisma.audioKeyword.findMany()
    * ```
    */
  get audioKeyword(): Prisma.AudioKeywordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audioDetectionEvent`: Exposes CRUD operations for the **AudioDetectionEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioDetectionEvents
    * const audioDetectionEvents = await prisma.audioDetectionEvent.findMany()
    * ```
    */
  get audioDetectionEvent(): Prisma.AudioDetectionEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audioProcessingLog`: Exposes CRUD operations for the **AudioProcessingLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioProcessingLogs
    * const audioProcessingLogs = await prisma.audioProcessingLog.findMany()
    * ```
    */
  get audioProcessingLog(): Prisma.AudioProcessingLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detectionRule`: Exposes CRUD operations for the **DetectionRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetectionRules
    * const detectionRules = await prisma.detectionRule.findMany()
    * ```
    */
  get detectionRule(): Prisma.DetectionRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audioWebhook`: Exposes CRUD operations for the **AudioWebhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AudioWebhooks
    * const audioWebhooks = await prisma.audioWebhook.findMany()
    * ```
    */
  get audioWebhook(): Prisma.AudioWebhookDelegate<ExtArgs, ClientOptions>;
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
    AudioConfiguration: 'AudioConfiguration',
    AudioKeyword: 'AudioKeyword',
    AudioDetectionEvent: 'AudioDetectionEvent',
    AudioProcessingLog: 'AudioProcessingLog',
    DetectionRule: 'DetectionRule',
    AudioWebhook: 'AudioWebhook'
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
      modelProps: "audioConfiguration" | "audioKeyword" | "audioDetectionEvent" | "audioProcessingLog" | "detectionRule" | "audioWebhook"
      txIsolationLevel: never
    }
    model: {
      AudioConfiguration: {
        payload: Prisma.$AudioConfigurationPayload<ExtArgs>
        fields: Prisma.AudioConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioConfigurationPayload>
          }
          findFirst: {
            args: Prisma.AudioConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioConfigurationPayload>
          }
          findMany: {
            args: Prisma.AudioConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioConfigurationPayload>[]
          }
          create: {
            args: Prisma.AudioConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioConfigurationPayload>
          }
          createMany: {
            args: Prisma.AudioConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AudioConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioConfigurationPayload>
          }
          update: {
            args: Prisma.AudioConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.AudioConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudioConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioConfigurationPayload>
          }
          aggregate: {
            args: Prisma.AudioConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioConfiguration>
          }
          groupBy: {
            args: Prisma.AudioConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioConfigurationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AudioConfigurationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AudioConfigurationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AudioConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<AudioConfigurationCountAggregateOutputType> | number
          }
        }
      }
      AudioKeyword: {
        payload: Prisma.$AudioKeywordPayload<ExtArgs>
        fields: Prisma.AudioKeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioKeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioKeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioKeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioKeywordPayload>
          }
          findFirst: {
            args: Prisma.AudioKeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioKeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioKeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioKeywordPayload>
          }
          findMany: {
            args: Prisma.AudioKeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioKeywordPayload>[]
          }
          create: {
            args: Prisma.AudioKeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioKeywordPayload>
          }
          createMany: {
            args: Prisma.AudioKeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AudioKeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioKeywordPayload>
          }
          update: {
            args: Prisma.AudioKeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioKeywordPayload>
          }
          deleteMany: {
            args: Prisma.AudioKeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioKeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudioKeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioKeywordPayload>
          }
          aggregate: {
            args: Prisma.AudioKeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioKeyword>
          }
          groupBy: {
            args: Prisma.AudioKeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioKeywordGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AudioKeywordFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AudioKeywordAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AudioKeywordCountArgs<ExtArgs>
            result: $Utils.Optional<AudioKeywordCountAggregateOutputType> | number
          }
        }
      }
      AudioDetectionEvent: {
        payload: Prisma.$AudioDetectionEventPayload<ExtArgs>
        fields: Prisma.AudioDetectionEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioDetectionEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioDetectionEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioDetectionEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioDetectionEventPayload>
          }
          findFirst: {
            args: Prisma.AudioDetectionEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioDetectionEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioDetectionEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioDetectionEventPayload>
          }
          findMany: {
            args: Prisma.AudioDetectionEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioDetectionEventPayload>[]
          }
          create: {
            args: Prisma.AudioDetectionEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioDetectionEventPayload>
          }
          createMany: {
            args: Prisma.AudioDetectionEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AudioDetectionEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioDetectionEventPayload>
          }
          update: {
            args: Prisma.AudioDetectionEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioDetectionEventPayload>
          }
          deleteMany: {
            args: Prisma.AudioDetectionEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioDetectionEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudioDetectionEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioDetectionEventPayload>
          }
          aggregate: {
            args: Prisma.AudioDetectionEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioDetectionEvent>
          }
          groupBy: {
            args: Prisma.AudioDetectionEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioDetectionEventGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AudioDetectionEventFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AudioDetectionEventAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AudioDetectionEventCountArgs<ExtArgs>
            result: $Utils.Optional<AudioDetectionEventCountAggregateOutputType> | number
          }
        }
      }
      AudioProcessingLog: {
        payload: Prisma.$AudioProcessingLogPayload<ExtArgs>
        fields: Prisma.AudioProcessingLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioProcessingLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioProcessingLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioProcessingLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioProcessingLogPayload>
          }
          findFirst: {
            args: Prisma.AudioProcessingLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioProcessingLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioProcessingLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioProcessingLogPayload>
          }
          findMany: {
            args: Prisma.AudioProcessingLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioProcessingLogPayload>[]
          }
          create: {
            args: Prisma.AudioProcessingLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioProcessingLogPayload>
          }
          createMany: {
            args: Prisma.AudioProcessingLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AudioProcessingLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioProcessingLogPayload>
          }
          update: {
            args: Prisma.AudioProcessingLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioProcessingLogPayload>
          }
          deleteMany: {
            args: Prisma.AudioProcessingLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioProcessingLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudioProcessingLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioProcessingLogPayload>
          }
          aggregate: {
            args: Prisma.AudioProcessingLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioProcessingLog>
          }
          groupBy: {
            args: Prisma.AudioProcessingLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioProcessingLogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AudioProcessingLogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AudioProcessingLogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AudioProcessingLogCountArgs<ExtArgs>
            result: $Utils.Optional<AudioProcessingLogCountAggregateOutputType> | number
          }
        }
      }
      DetectionRule: {
        payload: Prisma.$DetectionRulePayload<ExtArgs>
        fields: Prisma.DetectionRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetectionRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetectionRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionRulePayload>
          }
          findFirst: {
            args: Prisma.DetectionRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetectionRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionRulePayload>
          }
          findMany: {
            args: Prisma.DetectionRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionRulePayload>[]
          }
          create: {
            args: Prisma.DetectionRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionRulePayload>
          }
          createMany: {
            args: Prisma.DetectionRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetectionRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionRulePayload>
          }
          update: {
            args: Prisma.DetectionRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionRulePayload>
          }
          deleteMany: {
            args: Prisma.DetectionRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetectionRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetectionRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetectionRulePayload>
          }
          aggregate: {
            args: Prisma.DetectionRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetectionRule>
          }
          groupBy: {
            args: Prisma.DetectionRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetectionRuleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DetectionRuleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DetectionRuleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DetectionRuleCountArgs<ExtArgs>
            result: $Utils.Optional<DetectionRuleCountAggregateOutputType> | number
          }
        }
      }
      AudioWebhook: {
        payload: Prisma.$AudioWebhookPayload<ExtArgs>
        fields: Prisma.AudioWebhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudioWebhookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioWebhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudioWebhookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioWebhookPayload>
          }
          findFirst: {
            args: Prisma.AudioWebhookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioWebhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudioWebhookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioWebhookPayload>
          }
          findMany: {
            args: Prisma.AudioWebhookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioWebhookPayload>[]
          }
          create: {
            args: Prisma.AudioWebhookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioWebhookPayload>
          }
          createMany: {
            args: Prisma.AudioWebhookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AudioWebhookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioWebhookPayload>
          }
          update: {
            args: Prisma.AudioWebhookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioWebhookPayload>
          }
          deleteMany: {
            args: Prisma.AudioWebhookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudioWebhookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudioWebhookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudioWebhookPayload>
          }
          aggregate: {
            args: Prisma.AudioWebhookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudioWebhook>
          }
          groupBy: {
            args: Prisma.AudioWebhookGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudioWebhookGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AudioWebhookFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AudioWebhookAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AudioWebhookCountArgs<ExtArgs>
            result: $Utils.Optional<AudioWebhookCountAggregateOutputType> | number
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
    audioConfiguration?: AudioConfigurationOmit
    audioKeyword?: AudioKeywordOmit
    audioDetectionEvent?: AudioDetectionEventOmit
    audioProcessingLog?: AudioProcessingLogOmit
    detectionRule?: DetectionRuleOmit
    audioWebhook?: AudioWebhookOmit
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
   * Models
   */

  /**
   * Model AudioConfiguration
   */

  export type AggregateAudioConfiguration = {
    _count: AudioConfigurationCountAggregateOutputType | null
    _min: AudioConfigurationMinAggregateOutputType | null
    _max: AudioConfigurationMaxAggregateOutputType | null
  }

  export type AudioConfigurationMinAggregateOutputType = {
    id: string | null
    isActive: boolean | null
  }

  export type AudioConfigurationMaxAggregateOutputType = {
    id: string | null
    isActive: boolean | null
  }

  export type AudioConfigurationCountAggregateOutputType = {
    id: number
    isActive: number
    _all: number
  }


  export type AudioConfigurationMinAggregateInputType = {
    id?: true
    isActive?: true
  }

  export type AudioConfigurationMaxAggregateInputType = {
    id?: true
    isActive?: true
  }

  export type AudioConfigurationCountAggregateInputType = {
    id?: true
    isActive?: true
    _all?: true
  }

  export type AudioConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioConfiguration to aggregate.
     */
    where?: AudioConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioConfigurations to fetch.
     */
    orderBy?: AudioConfigurationOrderByWithRelationInput | AudioConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioConfigurations
    **/
    _count?: true | AudioConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioConfigurationMaxAggregateInputType
  }

  export type GetAudioConfigurationAggregateType<T extends AudioConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioConfiguration[P]>
      : GetScalarType<T[P], AggregateAudioConfiguration[P]>
  }




  export type AudioConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioConfigurationWhereInput
    orderBy?: AudioConfigurationOrderByWithAggregationInput | AudioConfigurationOrderByWithAggregationInput[]
    by: AudioConfigurationScalarFieldEnum[] | AudioConfigurationScalarFieldEnum
    having?: AudioConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioConfigurationCountAggregateInputType | true
    _min?: AudioConfigurationMinAggregateInputType
    _max?: AudioConfigurationMaxAggregateInputType
  }

  export type AudioConfigurationGroupByOutputType = {
    id: string
    isActive: boolean
    _count: AudioConfigurationCountAggregateOutputType | null
    _min: AudioConfigurationMinAggregateOutputType | null
    _max: AudioConfigurationMaxAggregateOutputType | null
  }

  type GetAudioConfigurationGroupByPayload<T extends AudioConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], AudioConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type AudioConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["audioConfiguration"]>



  export type AudioConfigurationSelectScalar = {
    id?: boolean
    isActive?: boolean
  }

  export type AudioConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isActive", ExtArgs["result"]["audioConfiguration"]>

  export type $AudioConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioConfiguration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isActive: boolean
    }, ExtArgs["result"]["audioConfiguration"]>
    composites: {}
  }

  type AudioConfigurationGetPayload<S extends boolean | null | undefined | AudioConfigurationDefaultArgs> = $Result.GetResult<Prisma.$AudioConfigurationPayload, S>

  type AudioConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioConfigurationCountAggregateInputType | true
    }

  export interface AudioConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioConfiguration'], meta: { name: 'AudioConfiguration' } }
    /**
     * Find zero or one AudioConfiguration that matches the filter.
     * @param {AudioConfigurationFindUniqueArgs} args - Arguments to find a AudioConfiguration
     * @example
     * // Get one AudioConfiguration
     * const audioConfiguration = await prisma.audioConfiguration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioConfigurationFindUniqueArgs>(args: SelectSubset<T, AudioConfigurationFindUniqueArgs<ExtArgs>>): Prisma__AudioConfigurationClient<$Result.GetResult<Prisma.$AudioConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudioConfiguration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioConfigurationFindUniqueOrThrowArgs} args - Arguments to find a AudioConfiguration
     * @example
     * // Get one AudioConfiguration
     * const audioConfiguration = await prisma.audioConfiguration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioConfigurationClient<$Result.GetResult<Prisma.$AudioConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioConfiguration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioConfigurationFindFirstArgs} args - Arguments to find a AudioConfiguration
     * @example
     * // Get one AudioConfiguration
     * const audioConfiguration = await prisma.audioConfiguration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioConfigurationFindFirstArgs>(args?: SelectSubset<T, AudioConfigurationFindFirstArgs<ExtArgs>>): Prisma__AudioConfigurationClient<$Result.GetResult<Prisma.$AudioConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioConfiguration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioConfigurationFindFirstOrThrowArgs} args - Arguments to find a AudioConfiguration
     * @example
     * // Get one AudioConfiguration
     * const audioConfiguration = await prisma.audioConfiguration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioConfigurationClient<$Result.GetResult<Prisma.$AudioConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioConfigurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioConfigurations
     * const audioConfigurations = await prisma.audioConfiguration.findMany()
     * 
     * // Get first 10 AudioConfigurations
     * const audioConfigurations = await prisma.audioConfiguration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioConfigurationWithIdOnly = await prisma.audioConfiguration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioConfigurationFindManyArgs>(args?: SelectSubset<T, AudioConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudioConfiguration.
     * @param {AudioConfigurationCreateArgs} args - Arguments to create a AudioConfiguration.
     * @example
     * // Create one AudioConfiguration
     * const AudioConfiguration = await prisma.audioConfiguration.create({
     *   data: {
     *     // ... data to create a AudioConfiguration
     *   }
     * })
     * 
     */
    create<T extends AudioConfigurationCreateArgs>(args: SelectSubset<T, AudioConfigurationCreateArgs<ExtArgs>>): Prisma__AudioConfigurationClient<$Result.GetResult<Prisma.$AudioConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudioConfigurations.
     * @param {AudioConfigurationCreateManyArgs} args - Arguments to create many AudioConfigurations.
     * @example
     * // Create many AudioConfigurations
     * const audioConfiguration = await prisma.audioConfiguration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioConfigurationCreateManyArgs>(args?: SelectSubset<T, AudioConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AudioConfiguration.
     * @param {AudioConfigurationDeleteArgs} args - Arguments to delete one AudioConfiguration.
     * @example
     * // Delete one AudioConfiguration
     * const AudioConfiguration = await prisma.audioConfiguration.delete({
     *   where: {
     *     // ... filter to delete one AudioConfiguration
     *   }
     * })
     * 
     */
    delete<T extends AudioConfigurationDeleteArgs>(args: SelectSubset<T, AudioConfigurationDeleteArgs<ExtArgs>>): Prisma__AudioConfigurationClient<$Result.GetResult<Prisma.$AudioConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudioConfiguration.
     * @param {AudioConfigurationUpdateArgs} args - Arguments to update one AudioConfiguration.
     * @example
     * // Update one AudioConfiguration
     * const audioConfiguration = await prisma.audioConfiguration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioConfigurationUpdateArgs>(args: SelectSubset<T, AudioConfigurationUpdateArgs<ExtArgs>>): Prisma__AudioConfigurationClient<$Result.GetResult<Prisma.$AudioConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudioConfigurations.
     * @param {AudioConfigurationDeleteManyArgs} args - Arguments to filter AudioConfigurations to delete.
     * @example
     * // Delete a few AudioConfigurations
     * const { count } = await prisma.audioConfiguration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioConfigurationDeleteManyArgs>(args?: SelectSubset<T, AudioConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioConfigurations
     * const audioConfiguration = await prisma.audioConfiguration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioConfigurationUpdateManyArgs>(args: SelectSubset<T, AudioConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AudioConfiguration.
     * @param {AudioConfigurationUpsertArgs} args - Arguments to update or create a AudioConfiguration.
     * @example
     * // Update or create a AudioConfiguration
     * const audioConfiguration = await prisma.audioConfiguration.upsert({
     *   create: {
     *     // ... data to create a AudioConfiguration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioConfiguration we want to update
     *   }
     * })
     */
    upsert<T extends AudioConfigurationUpsertArgs>(args: SelectSubset<T, AudioConfigurationUpsertArgs<ExtArgs>>): Prisma__AudioConfigurationClient<$Result.GetResult<Prisma.$AudioConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioConfigurations that matches the filter.
     * @param {AudioConfigurationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const audioConfiguration = await prisma.audioConfiguration.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AudioConfigurationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AudioConfiguration.
     * @param {AudioConfigurationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const audioConfiguration = await prisma.audioConfiguration.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AudioConfigurationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AudioConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioConfigurationCountArgs} args - Arguments to filter AudioConfigurations to count.
     * @example
     * // Count the number of AudioConfigurations
     * const count = await prisma.audioConfiguration.count({
     *   where: {
     *     // ... the filter for the AudioConfigurations we want to count
     *   }
     * })
    **/
    count<T extends AudioConfigurationCountArgs>(
      args?: Subset<T, AudioConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioConfigurationAggregateArgs>(args: Subset<T, AudioConfigurationAggregateArgs>): Prisma.PrismaPromise<GetAudioConfigurationAggregateType<T>>

    /**
     * Group by AudioConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioConfigurationGroupByArgs} args - Group by arguments.
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
      T extends AudioConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: AudioConfigurationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioConfiguration model
   */
  readonly fields: AudioConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioConfiguration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AudioConfiguration model
   */
  interface AudioConfigurationFieldRefs {
    readonly id: FieldRef<"AudioConfiguration", 'String'>
    readonly isActive: FieldRef<"AudioConfiguration", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AudioConfiguration findUnique
   */
  export type AudioConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioConfiguration
     */
    select?: AudioConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioConfiguration
     */
    omit?: AudioConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which AudioConfiguration to fetch.
     */
    where: AudioConfigurationWhereUniqueInput
  }

  /**
   * AudioConfiguration findUniqueOrThrow
   */
  export type AudioConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioConfiguration
     */
    select?: AudioConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioConfiguration
     */
    omit?: AudioConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which AudioConfiguration to fetch.
     */
    where: AudioConfigurationWhereUniqueInput
  }

  /**
   * AudioConfiguration findFirst
   */
  export type AudioConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioConfiguration
     */
    select?: AudioConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioConfiguration
     */
    omit?: AudioConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which AudioConfiguration to fetch.
     */
    where?: AudioConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioConfigurations to fetch.
     */
    orderBy?: AudioConfigurationOrderByWithRelationInput | AudioConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioConfigurations.
     */
    cursor?: AudioConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioConfigurations.
     */
    distinct?: AudioConfigurationScalarFieldEnum | AudioConfigurationScalarFieldEnum[]
  }

  /**
   * AudioConfiguration findFirstOrThrow
   */
  export type AudioConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioConfiguration
     */
    select?: AudioConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioConfiguration
     */
    omit?: AudioConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which AudioConfiguration to fetch.
     */
    where?: AudioConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioConfigurations to fetch.
     */
    orderBy?: AudioConfigurationOrderByWithRelationInput | AudioConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioConfigurations.
     */
    cursor?: AudioConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioConfigurations.
     */
    distinct?: AudioConfigurationScalarFieldEnum | AudioConfigurationScalarFieldEnum[]
  }

  /**
   * AudioConfiguration findMany
   */
  export type AudioConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioConfiguration
     */
    select?: AudioConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioConfiguration
     */
    omit?: AudioConfigurationOmit<ExtArgs> | null
    /**
     * Filter, which AudioConfigurations to fetch.
     */
    where?: AudioConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioConfigurations to fetch.
     */
    orderBy?: AudioConfigurationOrderByWithRelationInput | AudioConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioConfigurations.
     */
    cursor?: AudioConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioConfigurations.
     */
    skip?: number
    distinct?: AudioConfigurationScalarFieldEnum | AudioConfigurationScalarFieldEnum[]
  }

  /**
   * AudioConfiguration create
   */
  export type AudioConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioConfiguration
     */
    select?: AudioConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioConfiguration
     */
    omit?: AudioConfigurationOmit<ExtArgs> | null
    /**
     * The data needed to create a AudioConfiguration.
     */
    data?: XOR<AudioConfigurationCreateInput, AudioConfigurationUncheckedCreateInput>
  }

  /**
   * AudioConfiguration createMany
   */
  export type AudioConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioConfigurations.
     */
    data: AudioConfigurationCreateManyInput | AudioConfigurationCreateManyInput[]
  }

  /**
   * AudioConfiguration update
   */
  export type AudioConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioConfiguration
     */
    select?: AudioConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioConfiguration
     */
    omit?: AudioConfigurationOmit<ExtArgs> | null
    /**
     * The data needed to update a AudioConfiguration.
     */
    data: XOR<AudioConfigurationUpdateInput, AudioConfigurationUncheckedUpdateInput>
    /**
     * Choose, which AudioConfiguration to update.
     */
    where: AudioConfigurationWhereUniqueInput
  }

  /**
   * AudioConfiguration updateMany
   */
  export type AudioConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioConfigurations.
     */
    data: XOR<AudioConfigurationUpdateManyMutationInput, AudioConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which AudioConfigurations to update
     */
    where?: AudioConfigurationWhereInput
    /**
     * Limit how many AudioConfigurations to update.
     */
    limit?: number
  }

  /**
   * AudioConfiguration upsert
   */
  export type AudioConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioConfiguration
     */
    select?: AudioConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioConfiguration
     */
    omit?: AudioConfigurationOmit<ExtArgs> | null
    /**
     * The filter to search for the AudioConfiguration to update in case it exists.
     */
    where: AudioConfigurationWhereUniqueInput
    /**
     * In case the AudioConfiguration found by the `where` argument doesn't exist, create a new AudioConfiguration with this data.
     */
    create: XOR<AudioConfigurationCreateInput, AudioConfigurationUncheckedCreateInput>
    /**
     * In case the AudioConfiguration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioConfigurationUpdateInput, AudioConfigurationUncheckedUpdateInput>
  }

  /**
   * AudioConfiguration delete
   */
  export type AudioConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioConfiguration
     */
    select?: AudioConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioConfiguration
     */
    omit?: AudioConfigurationOmit<ExtArgs> | null
    /**
     * Filter which AudioConfiguration to delete.
     */
    where: AudioConfigurationWhereUniqueInput
  }

  /**
   * AudioConfiguration deleteMany
   */
  export type AudioConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioConfigurations to delete
     */
    where?: AudioConfigurationWhereInput
    /**
     * Limit how many AudioConfigurations to delete.
     */
    limit?: number
  }

  /**
   * AudioConfiguration findRaw
   */
  export type AudioConfigurationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AudioConfiguration aggregateRaw
   */
  export type AudioConfigurationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AudioConfiguration without action
   */
  export type AudioConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioConfiguration
     */
    select?: AudioConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioConfiguration
     */
    omit?: AudioConfigurationOmit<ExtArgs> | null
  }


  /**
   * Model AudioKeyword
   */

  export type AggregateAudioKeyword = {
    _count: AudioKeywordCountAggregateOutputType | null
    _min: AudioKeywordMinAggregateOutputType | null
    _max: AudioKeywordMaxAggregateOutputType | null
  }

  export type AudioKeywordMinAggregateOutputType = {
    id: string | null
    keyword: string | null
  }

  export type AudioKeywordMaxAggregateOutputType = {
    id: string | null
    keyword: string | null
  }

  export type AudioKeywordCountAggregateOutputType = {
    id: number
    keyword: number
    _all: number
  }


  export type AudioKeywordMinAggregateInputType = {
    id?: true
    keyword?: true
  }

  export type AudioKeywordMaxAggregateInputType = {
    id?: true
    keyword?: true
  }

  export type AudioKeywordCountAggregateInputType = {
    id?: true
    keyword?: true
    _all?: true
  }

  export type AudioKeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioKeyword to aggregate.
     */
    where?: AudioKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioKeywords to fetch.
     */
    orderBy?: AudioKeywordOrderByWithRelationInput | AudioKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioKeywords
    **/
    _count?: true | AudioKeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioKeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioKeywordMaxAggregateInputType
  }

  export type GetAudioKeywordAggregateType<T extends AudioKeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioKeyword[P]>
      : GetScalarType<T[P], AggregateAudioKeyword[P]>
  }




  export type AudioKeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioKeywordWhereInput
    orderBy?: AudioKeywordOrderByWithAggregationInput | AudioKeywordOrderByWithAggregationInput[]
    by: AudioKeywordScalarFieldEnum[] | AudioKeywordScalarFieldEnum
    having?: AudioKeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioKeywordCountAggregateInputType | true
    _min?: AudioKeywordMinAggregateInputType
    _max?: AudioKeywordMaxAggregateInputType
  }

  export type AudioKeywordGroupByOutputType = {
    id: string
    keyword: string
    _count: AudioKeywordCountAggregateOutputType | null
    _min: AudioKeywordMinAggregateOutputType | null
    _max: AudioKeywordMaxAggregateOutputType | null
  }

  type GetAudioKeywordGroupByPayload<T extends AudioKeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioKeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioKeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioKeywordGroupByOutputType[P]>
            : GetScalarType<T[P], AudioKeywordGroupByOutputType[P]>
        }
      >
    >


  export type AudioKeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
  }, ExtArgs["result"]["audioKeyword"]>



  export type AudioKeywordSelectScalar = {
    id?: boolean
    keyword?: boolean
  }

  export type AudioKeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyword", ExtArgs["result"]["audioKeyword"]>

  export type $AudioKeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioKeyword"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyword: string
    }, ExtArgs["result"]["audioKeyword"]>
    composites: {}
  }

  type AudioKeywordGetPayload<S extends boolean | null | undefined | AudioKeywordDefaultArgs> = $Result.GetResult<Prisma.$AudioKeywordPayload, S>

  type AudioKeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioKeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioKeywordCountAggregateInputType | true
    }

  export interface AudioKeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioKeyword'], meta: { name: 'AudioKeyword' } }
    /**
     * Find zero or one AudioKeyword that matches the filter.
     * @param {AudioKeywordFindUniqueArgs} args - Arguments to find a AudioKeyword
     * @example
     * // Get one AudioKeyword
     * const audioKeyword = await prisma.audioKeyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioKeywordFindUniqueArgs>(args: SelectSubset<T, AudioKeywordFindUniqueArgs<ExtArgs>>): Prisma__AudioKeywordClient<$Result.GetResult<Prisma.$AudioKeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudioKeyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioKeywordFindUniqueOrThrowArgs} args - Arguments to find a AudioKeyword
     * @example
     * // Get one AudioKeyword
     * const audioKeyword = await prisma.audioKeyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioKeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioKeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioKeywordClient<$Result.GetResult<Prisma.$AudioKeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioKeyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioKeywordFindFirstArgs} args - Arguments to find a AudioKeyword
     * @example
     * // Get one AudioKeyword
     * const audioKeyword = await prisma.audioKeyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioKeywordFindFirstArgs>(args?: SelectSubset<T, AudioKeywordFindFirstArgs<ExtArgs>>): Prisma__AudioKeywordClient<$Result.GetResult<Prisma.$AudioKeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioKeyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioKeywordFindFirstOrThrowArgs} args - Arguments to find a AudioKeyword
     * @example
     * // Get one AudioKeyword
     * const audioKeyword = await prisma.audioKeyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioKeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioKeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioKeywordClient<$Result.GetResult<Prisma.$AudioKeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioKeywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioKeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioKeywords
     * const audioKeywords = await prisma.audioKeyword.findMany()
     * 
     * // Get first 10 AudioKeywords
     * const audioKeywords = await prisma.audioKeyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioKeywordWithIdOnly = await prisma.audioKeyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioKeywordFindManyArgs>(args?: SelectSubset<T, AudioKeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioKeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudioKeyword.
     * @param {AudioKeywordCreateArgs} args - Arguments to create a AudioKeyword.
     * @example
     * // Create one AudioKeyword
     * const AudioKeyword = await prisma.audioKeyword.create({
     *   data: {
     *     // ... data to create a AudioKeyword
     *   }
     * })
     * 
     */
    create<T extends AudioKeywordCreateArgs>(args: SelectSubset<T, AudioKeywordCreateArgs<ExtArgs>>): Prisma__AudioKeywordClient<$Result.GetResult<Prisma.$AudioKeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudioKeywords.
     * @param {AudioKeywordCreateManyArgs} args - Arguments to create many AudioKeywords.
     * @example
     * // Create many AudioKeywords
     * const audioKeyword = await prisma.audioKeyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioKeywordCreateManyArgs>(args?: SelectSubset<T, AudioKeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AudioKeyword.
     * @param {AudioKeywordDeleteArgs} args - Arguments to delete one AudioKeyword.
     * @example
     * // Delete one AudioKeyword
     * const AudioKeyword = await prisma.audioKeyword.delete({
     *   where: {
     *     // ... filter to delete one AudioKeyword
     *   }
     * })
     * 
     */
    delete<T extends AudioKeywordDeleteArgs>(args: SelectSubset<T, AudioKeywordDeleteArgs<ExtArgs>>): Prisma__AudioKeywordClient<$Result.GetResult<Prisma.$AudioKeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudioKeyword.
     * @param {AudioKeywordUpdateArgs} args - Arguments to update one AudioKeyword.
     * @example
     * // Update one AudioKeyword
     * const audioKeyword = await prisma.audioKeyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioKeywordUpdateArgs>(args: SelectSubset<T, AudioKeywordUpdateArgs<ExtArgs>>): Prisma__AudioKeywordClient<$Result.GetResult<Prisma.$AudioKeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudioKeywords.
     * @param {AudioKeywordDeleteManyArgs} args - Arguments to filter AudioKeywords to delete.
     * @example
     * // Delete a few AudioKeywords
     * const { count } = await prisma.audioKeyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioKeywordDeleteManyArgs>(args?: SelectSubset<T, AudioKeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioKeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioKeywords
     * const audioKeyword = await prisma.audioKeyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioKeywordUpdateManyArgs>(args: SelectSubset<T, AudioKeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AudioKeyword.
     * @param {AudioKeywordUpsertArgs} args - Arguments to update or create a AudioKeyword.
     * @example
     * // Update or create a AudioKeyword
     * const audioKeyword = await prisma.audioKeyword.upsert({
     *   create: {
     *     // ... data to create a AudioKeyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioKeyword we want to update
     *   }
     * })
     */
    upsert<T extends AudioKeywordUpsertArgs>(args: SelectSubset<T, AudioKeywordUpsertArgs<ExtArgs>>): Prisma__AudioKeywordClient<$Result.GetResult<Prisma.$AudioKeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioKeywords that matches the filter.
     * @param {AudioKeywordFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const audioKeyword = await prisma.audioKeyword.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AudioKeywordFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AudioKeyword.
     * @param {AudioKeywordAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const audioKeyword = await prisma.audioKeyword.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AudioKeywordAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AudioKeywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioKeywordCountArgs} args - Arguments to filter AudioKeywords to count.
     * @example
     * // Count the number of AudioKeywords
     * const count = await prisma.audioKeyword.count({
     *   where: {
     *     // ... the filter for the AudioKeywords we want to count
     *   }
     * })
    **/
    count<T extends AudioKeywordCountArgs>(
      args?: Subset<T, AudioKeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioKeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioKeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioKeywordAggregateArgs>(args: Subset<T, AudioKeywordAggregateArgs>): Prisma.PrismaPromise<GetAudioKeywordAggregateType<T>>

    /**
     * Group by AudioKeyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioKeywordGroupByArgs} args - Group by arguments.
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
      T extends AudioKeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioKeywordGroupByArgs['orderBy'] }
        : { orderBy?: AudioKeywordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioKeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioKeyword model
   */
  readonly fields: AudioKeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioKeyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioKeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AudioKeyword model
   */
  interface AudioKeywordFieldRefs {
    readonly id: FieldRef<"AudioKeyword", 'String'>
    readonly keyword: FieldRef<"AudioKeyword", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AudioKeyword findUnique
   */
  export type AudioKeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioKeyword
     */
    select?: AudioKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioKeyword
     */
    omit?: AudioKeywordOmit<ExtArgs> | null
    /**
     * Filter, which AudioKeyword to fetch.
     */
    where: AudioKeywordWhereUniqueInput
  }

  /**
   * AudioKeyword findUniqueOrThrow
   */
  export type AudioKeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioKeyword
     */
    select?: AudioKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioKeyword
     */
    omit?: AudioKeywordOmit<ExtArgs> | null
    /**
     * Filter, which AudioKeyword to fetch.
     */
    where: AudioKeywordWhereUniqueInput
  }

  /**
   * AudioKeyword findFirst
   */
  export type AudioKeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioKeyword
     */
    select?: AudioKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioKeyword
     */
    omit?: AudioKeywordOmit<ExtArgs> | null
    /**
     * Filter, which AudioKeyword to fetch.
     */
    where?: AudioKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioKeywords to fetch.
     */
    orderBy?: AudioKeywordOrderByWithRelationInput | AudioKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioKeywords.
     */
    cursor?: AudioKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioKeywords.
     */
    distinct?: AudioKeywordScalarFieldEnum | AudioKeywordScalarFieldEnum[]
  }

  /**
   * AudioKeyword findFirstOrThrow
   */
  export type AudioKeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioKeyword
     */
    select?: AudioKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioKeyword
     */
    omit?: AudioKeywordOmit<ExtArgs> | null
    /**
     * Filter, which AudioKeyword to fetch.
     */
    where?: AudioKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioKeywords to fetch.
     */
    orderBy?: AudioKeywordOrderByWithRelationInput | AudioKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioKeywords.
     */
    cursor?: AudioKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioKeywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioKeywords.
     */
    distinct?: AudioKeywordScalarFieldEnum | AudioKeywordScalarFieldEnum[]
  }

  /**
   * AudioKeyword findMany
   */
  export type AudioKeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioKeyword
     */
    select?: AudioKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioKeyword
     */
    omit?: AudioKeywordOmit<ExtArgs> | null
    /**
     * Filter, which AudioKeywords to fetch.
     */
    where?: AudioKeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioKeywords to fetch.
     */
    orderBy?: AudioKeywordOrderByWithRelationInput | AudioKeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioKeywords.
     */
    cursor?: AudioKeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioKeywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioKeywords.
     */
    skip?: number
    distinct?: AudioKeywordScalarFieldEnum | AudioKeywordScalarFieldEnum[]
  }

  /**
   * AudioKeyword create
   */
  export type AudioKeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioKeyword
     */
    select?: AudioKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioKeyword
     */
    omit?: AudioKeywordOmit<ExtArgs> | null
    /**
     * The data needed to create a AudioKeyword.
     */
    data: XOR<AudioKeywordCreateInput, AudioKeywordUncheckedCreateInput>
  }

  /**
   * AudioKeyword createMany
   */
  export type AudioKeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioKeywords.
     */
    data: AudioKeywordCreateManyInput | AudioKeywordCreateManyInput[]
  }

  /**
   * AudioKeyword update
   */
  export type AudioKeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioKeyword
     */
    select?: AudioKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioKeyword
     */
    omit?: AudioKeywordOmit<ExtArgs> | null
    /**
     * The data needed to update a AudioKeyword.
     */
    data: XOR<AudioKeywordUpdateInput, AudioKeywordUncheckedUpdateInput>
    /**
     * Choose, which AudioKeyword to update.
     */
    where: AudioKeywordWhereUniqueInput
  }

  /**
   * AudioKeyword updateMany
   */
  export type AudioKeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioKeywords.
     */
    data: XOR<AudioKeywordUpdateManyMutationInput, AudioKeywordUncheckedUpdateManyInput>
    /**
     * Filter which AudioKeywords to update
     */
    where?: AudioKeywordWhereInput
    /**
     * Limit how many AudioKeywords to update.
     */
    limit?: number
  }

  /**
   * AudioKeyword upsert
   */
  export type AudioKeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioKeyword
     */
    select?: AudioKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioKeyword
     */
    omit?: AudioKeywordOmit<ExtArgs> | null
    /**
     * The filter to search for the AudioKeyword to update in case it exists.
     */
    where: AudioKeywordWhereUniqueInput
    /**
     * In case the AudioKeyword found by the `where` argument doesn't exist, create a new AudioKeyword with this data.
     */
    create: XOR<AudioKeywordCreateInput, AudioKeywordUncheckedCreateInput>
    /**
     * In case the AudioKeyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioKeywordUpdateInput, AudioKeywordUncheckedUpdateInput>
  }

  /**
   * AudioKeyword delete
   */
  export type AudioKeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioKeyword
     */
    select?: AudioKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioKeyword
     */
    omit?: AudioKeywordOmit<ExtArgs> | null
    /**
     * Filter which AudioKeyword to delete.
     */
    where: AudioKeywordWhereUniqueInput
  }

  /**
   * AudioKeyword deleteMany
   */
  export type AudioKeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioKeywords to delete
     */
    where?: AudioKeywordWhereInput
    /**
     * Limit how many AudioKeywords to delete.
     */
    limit?: number
  }

  /**
   * AudioKeyword findRaw
   */
  export type AudioKeywordFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AudioKeyword aggregateRaw
   */
  export type AudioKeywordAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AudioKeyword without action
   */
  export type AudioKeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioKeyword
     */
    select?: AudioKeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioKeyword
     */
    omit?: AudioKeywordOmit<ExtArgs> | null
  }


  /**
   * Model AudioDetectionEvent
   */

  export type AggregateAudioDetectionEvent = {
    _count: AudioDetectionEventCountAggregateOutputType | null
    _avg: AudioDetectionEventAvgAggregateOutputType | null
    _sum: AudioDetectionEventSumAggregateOutputType | null
    _min: AudioDetectionEventMinAggregateOutputType | null
    _max: AudioDetectionEventMaxAggregateOutputType | null
  }

  export type AudioDetectionEventAvgAggregateOutputType = {
    confidence: number | null
    location_lat: number | null
    location_lon: number | null
  }

  export type AudioDetectionEventSumAggregateOutputType = {
    confidence: number | null
    location_lat: number | null
    location_lon: number | null
  }

  export type AudioDetectionEventMinAggregateOutputType = {
    id: string | null
    keyword: string | null
    confidence: number | null
    createdAt: Date | null
    location: string | null
    location_lat: number | null
    location_lon: number | null
    metadata: string | null
    severity: string | null
    sourceDevice: string | null
  }

  export type AudioDetectionEventMaxAggregateOutputType = {
    id: string | null
    keyword: string | null
    confidence: number | null
    createdAt: Date | null
    location: string | null
    location_lat: number | null
    location_lon: number | null
    metadata: string | null
    severity: string | null
    sourceDevice: string | null
  }

  export type AudioDetectionEventCountAggregateOutputType = {
    id: number
    keyword: number
    confidence: number
    createdAt: number
    location: number
    location_lat: number
    location_lon: number
    metadata: number
    severity: number
    sourceDevice: number
    _all: number
  }


  export type AudioDetectionEventAvgAggregateInputType = {
    confidence?: true
    location_lat?: true
    location_lon?: true
  }

  export type AudioDetectionEventSumAggregateInputType = {
    confidence?: true
    location_lat?: true
    location_lon?: true
  }

  export type AudioDetectionEventMinAggregateInputType = {
    id?: true
    keyword?: true
    confidence?: true
    createdAt?: true
    location?: true
    location_lat?: true
    location_lon?: true
    metadata?: true
    severity?: true
    sourceDevice?: true
  }

  export type AudioDetectionEventMaxAggregateInputType = {
    id?: true
    keyword?: true
    confidence?: true
    createdAt?: true
    location?: true
    location_lat?: true
    location_lon?: true
    metadata?: true
    severity?: true
    sourceDevice?: true
  }

  export type AudioDetectionEventCountAggregateInputType = {
    id?: true
    keyword?: true
    confidence?: true
    createdAt?: true
    location?: true
    location_lat?: true
    location_lon?: true
    metadata?: true
    severity?: true
    sourceDevice?: true
    _all?: true
  }

  export type AudioDetectionEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioDetectionEvent to aggregate.
     */
    where?: AudioDetectionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioDetectionEvents to fetch.
     */
    orderBy?: AudioDetectionEventOrderByWithRelationInput | AudioDetectionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioDetectionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioDetectionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioDetectionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioDetectionEvents
    **/
    _count?: true | AudioDetectionEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudioDetectionEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudioDetectionEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioDetectionEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioDetectionEventMaxAggregateInputType
  }

  export type GetAudioDetectionEventAggregateType<T extends AudioDetectionEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioDetectionEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioDetectionEvent[P]>
      : GetScalarType<T[P], AggregateAudioDetectionEvent[P]>
  }




  export type AudioDetectionEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioDetectionEventWhereInput
    orderBy?: AudioDetectionEventOrderByWithAggregationInput | AudioDetectionEventOrderByWithAggregationInput[]
    by: AudioDetectionEventScalarFieldEnum[] | AudioDetectionEventScalarFieldEnum
    having?: AudioDetectionEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioDetectionEventCountAggregateInputType | true
    _avg?: AudioDetectionEventAvgAggregateInputType
    _sum?: AudioDetectionEventSumAggregateInputType
    _min?: AudioDetectionEventMinAggregateInputType
    _max?: AudioDetectionEventMaxAggregateInputType
  }

  export type AudioDetectionEventGroupByOutputType = {
    id: string
    keyword: string
    confidence: number
    createdAt: Date
    location: string | null
    location_lat: number | null
    location_lon: number | null
    metadata: string
    severity: string
    sourceDevice: string | null
    _count: AudioDetectionEventCountAggregateOutputType | null
    _avg: AudioDetectionEventAvgAggregateOutputType | null
    _sum: AudioDetectionEventSumAggregateOutputType | null
    _min: AudioDetectionEventMinAggregateOutputType | null
    _max: AudioDetectionEventMaxAggregateOutputType | null
  }

  type GetAudioDetectionEventGroupByPayload<T extends AudioDetectionEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioDetectionEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioDetectionEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioDetectionEventGroupByOutputType[P]>
            : GetScalarType<T[P], AudioDetectionEventGroupByOutputType[P]>
        }
      >
    >


  export type AudioDetectionEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    confidence?: boolean
    createdAt?: boolean
    location?: boolean
    location_lat?: boolean
    location_lon?: boolean
    metadata?: boolean
    severity?: boolean
    sourceDevice?: boolean
  }, ExtArgs["result"]["audioDetectionEvent"]>



  export type AudioDetectionEventSelectScalar = {
    id?: boolean
    keyword?: boolean
    confidence?: boolean
    createdAt?: boolean
    location?: boolean
    location_lat?: boolean
    location_lon?: boolean
    metadata?: boolean
    severity?: boolean
    sourceDevice?: boolean
  }

  export type AudioDetectionEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyword" | "confidence" | "createdAt" | "location" | "location_lat" | "location_lon" | "metadata" | "severity" | "sourceDevice", ExtArgs["result"]["audioDetectionEvent"]>

  export type $AudioDetectionEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioDetectionEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyword: string
      confidence: number
      createdAt: Date
      location: string | null
      location_lat: number | null
      location_lon: number | null
      metadata: string
      severity: string
      sourceDevice: string | null
    }, ExtArgs["result"]["audioDetectionEvent"]>
    composites: {}
  }

  type AudioDetectionEventGetPayload<S extends boolean | null | undefined | AudioDetectionEventDefaultArgs> = $Result.GetResult<Prisma.$AudioDetectionEventPayload, S>

  type AudioDetectionEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioDetectionEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioDetectionEventCountAggregateInputType | true
    }

  export interface AudioDetectionEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioDetectionEvent'], meta: { name: 'AudioDetectionEvent' } }
    /**
     * Find zero or one AudioDetectionEvent that matches the filter.
     * @param {AudioDetectionEventFindUniqueArgs} args - Arguments to find a AudioDetectionEvent
     * @example
     * // Get one AudioDetectionEvent
     * const audioDetectionEvent = await prisma.audioDetectionEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioDetectionEventFindUniqueArgs>(args: SelectSubset<T, AudioDetectionEventFindUniqueArgs<ExtArgs>>): Prisma__AudioDetectionEventClient<$Result.GetResult<Prisma.$AudioDetectionEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudioDetectionEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioDetectionEventFindUniqueOrThrowArgs} args - Arguments to find a AudioDetectionEvent
     * @example
     * // Get one AudioDetectionEvent
     * const audioDetectionEvent = await prisma.audioDetectionEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioDetectionEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioDetectionEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioDetectionEventClient<$Result.GetResult<Prisma.$AudioDetectionEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioDetectionEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioDetectionEventFindFirstArgs} args - Arguments to find a AudioDetectionEvent
     * @example
     * // Get one AudioDetectionEvent
     * const audioDetectionEvent = await prisma.audioDetectionEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioDetectionEventFindFirstArgs>(args?: SelectSubset<T, AudioDetectionEventFindFirstArgs<ExtArgs>>): Prisma__AudioDetectionEventClient<$Result.GetResult<Prisma.$AudioDetectionEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioDetectionEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioDetectionEventFindFirstOrThrowArgs} args - Arguments to find a AudioDetectionEvent
     * @example
     * // Get one AudioDetectionEvent
     * const audioDetectionEvent = await prisma.audioDetectionEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioDetectionEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioDetectionEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioDetectionEventClient<$Result.GetResult<Prisma.$AudioDetectionEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioDetectionEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioDetectionEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioDetectionEvents
     * const audioDetectionEvents = await prisma.audioDetectionEvent.findMany()
     * 
     * // Get first 10 AudioDetectionEvents
     * const audioDetectionEvents = await prisma.audioDetectionEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioDetectionEventWithIdOnly = await prisma.audioDetectionEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioDetectionEventFindManyArgs>(args?: SelectSubset<T, AudioDetectionEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioDetectionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudioDetectionEvent.
     * @param {AudioDetectionEventCreateArgs} args - Arguments to create a AudioDetectionEvent.
     * @example
     * // Create one AudioDetectionEvent
     * const AudioDetectionEvent = await prisma.audioDetectionEvent.create({
     *   data: {
     *     // ... data to create a AudioDetectionEvent
     *   }
     * })
     * 
     */
    create<T extends AudioDetectionEventCreateArgs>(args: SelectSubset<T, AudioDetectionEventCreateArgs<ExtArgs>>): Prisma__AudioDetectionEventClient<$Result.GetResult<Prisma.$AudioDetectionEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudioDetectionEvents.
     * @param {AudioDetectionEventCreateManyArgs} args - Arguments to create many AudioDetectionEvents.
     * @example
     * // Create many AudioDetectionEvents
     * const audioDetectionEvent = await prisma.audioDetectionEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioDetectionEventCreateManyArgs>(args?: SelectSubset<T, AudioDetectionEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AudioDetectionEvent.
     * @param {AudioDetectionEventDeleteArgs} args - Arguments to delete one AudioDetectionEvent.
     * @example
     * // Delete one AudioDetectionEvent
     * const AudioDetectionEvent = await prisma.audioDetectionEvent.delete({
     *   where: {
     *     // ... filter to delete one AudioDetectionEvent
     *   }
     * })
     * 
     */
    delete<T extends AudioDetectionEventDeleteArgs>(args: SelectSubset<T, AudioDetectionEventDeleteArgs<ExtArgs>>): Prisma__AudioDetectionEventClient<$Result.GetResult<Prisma.$AudioDetectionEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudioDetectionEvent.
     * @param {AudioDetectionEventUpdateArgs} args - Arguments to update one AudioDetectionEvent.
     * @example
     * // Update one AudioDetectionEvent
     * const audioDetectionEvent = await prisma.audioDetectionEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioDetectionEventUpdateArgs>(args: SelectSubset<T, AudioDetectionEventUpdateArgs<ExtArgs>>): Prisma__AudioDetectionEventClient<$Result.GetResult<Prisma.$AudioDetectionEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudioDetectionEvents.
     * @param {AudioDetectionEventDeleteManyArgs} args - Arguments to filter AudioDetectionEvents to delete.
     * @example
     * // Delete a few AudioDetectionEvents
     * const { count } = await prisma.audioDetectionEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioDetectionEventDeleteManyArgs>(args?: SelectSubset<T, AudioDetectionEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioDetectionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioDetectionEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioDetectionEvents
     * const audioDetectionEvent = await prisma.audioDetectionEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioDetectionEventUpdateManyArgs>(args: SelectSubset<T, AudioDetectionEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AudioDetectionEvent.
     * @param {AudioDetectionEventUpsertArgs} args - Arguments to update or create a AudioDetectionEvent.
     * @example
     * // Update or create a AudioDetectionEvent
     * const audioDetectionEvent = await prisma.audioDetectionEvent.upsert({
     *   create: {
     *     // ... data to create a AudioDetectionEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioDetectionEvent we want to update
     *   }
     * })
     */
    upsert<T extends AudioDetectionEventUpsertArgs>(args: SelectSubset<T, AudioDetectionEventUpsertArgs<ExtArgs>>): Prisma__AudioDetectionEventClient<$Result.GetResult<Prisma.$AudioDetectionEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioDetectionEvents that matches the filter.
     * @param {AudioDetectionEventFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const audioDetectionEvent = await prisma.audioDetectionEvent.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AudioDetectionEventFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AudioDetectionEvent.
     * @param {AudioDetectionEventAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const audioDetectionEvent = await prisma.audioDetectionEvent.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AudioDetectionEventAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AudioDetectionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioDetectionEventCountArgs} args - Arguments to filter AudioDetectionEvents to count.
     * @example
     * // Count the number of AudioDetectionEvents
     * const count = await prisma.audioDetectionEvent.count({
     *   where: {
     *     // ... the filter for the AudioDetectionEvents we want to count
     *   }
     * })
    **/
    count<T extends AudioDetectionEventCountArgs>(
      args?: Subset<T, AudioDetectionEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioDetectionEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioDetectionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioDetectionEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioDetectionEventAggregateArgs>(args: Subset<T, AudioDetectionEventAggregateArgs>): Prisma.PrismaPromise<GetAudioDetectionEventAggregateType<T>>

    /**
     * Group by AudioDetectionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioDetectionEventGroupByArgs} args - Group by arguments.
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
      T extends AudioDetectionEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioDetectionEventGroupByArgs['orderBy'] }
        : { orderBy?: AudioDetectionEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioDetectionEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioDetectionEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioDetectionEvent model
   */
  readonly fields: AudioDetectionEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioDetectionEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioDetectionEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AudioDetectionEvent model
   */
  interface AudioDetectionEventFieldRefs {
    readonly id: FieldRef<"AudioDetectionEvent", 'String'>
    readonly keyword: FieldRef<"AudioDetectionEvent", 'String'>
    readonly confidence: FieldRef<"AudioDetectionEvent", 'Float'>
    readonly createdAt: FieldRef<"AudioDetectionEvent", 'DateTime'>
    readonly location: FieldRef<"AudioDetectionEvent", 'String'>
    readonly location_lat: FieldRef<"AudioDetectionEvent", 'Float'>
    readonly location_lon: FieldRef<"AudioDetectionEvent", 'Float'>
    readonly metadata: FieldRef<"AudioDetectionEvent", 'String'>
    readonly severity: FieldRef<"AudioDetectionEvent", 'String'>
    readonly sourceDevice: FieldRef<"AudioDetectionEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AudioDetectionEvent findUnique
   */
  export type AudioDetectionEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioDetectionEvent
     */
    select?: AudioDetectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioDetectionEvent
     */
    omit?: AudioDetectionEventOmit<ExtArgs> | null
    /**
     * Filter, which AudioDetectionEvent to fetch.
     */
    where: AudioDetectionEventWhereUniqueInput
  }

  /**
   * AudioDetectionEvent findUniqueOrThrow
   */
  export type AudioDetectionEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioDetectionEvent
     */
    select?: AudioDetectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioDetectionEvent
     */
    omit?: AudioDetectionEventOmit<ExtArgs> | null
    /**
     * Filter, which AudioDetectionEvent to fetch.
     */
    where: AudioDetectionEventWhereUniqueInput
  }

  /**
   * AudioDetectionEvent findFirst
   */
  export type AudioDetectionEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioDetectionEvent
     */
    select?: AudioDetectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioDetectionEvent
     */
    omit?: AudioDetectionEventOmit<ExtArgs> | null
    /**
     * Filter, which AudioDetectionEvent to fetch.
     */
    where?: AudioDetectionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioDetectionEvents to fetch.
     */
    orderBy?: AudioDetectionEventOrderByWithRelationInput | AudioDetectionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioDetectionEvents.
     */
    cursor?: AudioDetectionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioDetectionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioDetectionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioDetectionEvents.
     */
    distinct?: AudioDetectionEventScalarFieldEnum | AudioDetectionEventScalarFieldEnum[]
  }

  /**
   * AudioDetectionEvent findFirstOrThrow
   */
  export type AudioDetectionEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioDetectionEvent
     */
    select?: AudioDetectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioDetectionEvent
     */
    omit?: AudioDetectionEventOmit<ExtArgs> | null
    /**
     * Filter, which AudioDetectionEvent to fetch.
     */
    where?: AudioDetectionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioDetectionEvents to fetch.
     */
    orderBy?: AudioDetectionEventOrderByWithRelationInput | AudioDetectionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioDetectionEvents.
     */
    cursor?: AudioDetectionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioDetectionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioDetectionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioDetectionEvents.
     */
    distinct?: AudioDetectionEventScalarFieldEnum | AudioDetectionEventScalarFieldEnum[]
  }

  /**
   * AudioDetectionEvent findMany
   */
  export type AudioDetectionEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioDetectionEvent
     */
    select?: AudioDetectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioDetectionEvent
     */
    omit?: AudioDetectionEventOmit<ExtArgs> | null
    /**
     * Filter, which AudioDetectionEvents to fetch.
     */
    where?: AudioDetectionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioDetectionEvents to fetch.
     */
    orderBy?: AudioDetectionEventOrderByWithRelationInput | AudioDetectionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioDetectionEvents.
     */
    cursor?: AudioDetectionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioDetectionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioDetectionEvents.
     */
    skip?: number
    distinct?: AudioDetectionEventScalarFieldEnum | AudioDetectionEventScalarFieldEnum[]
  }

  /**
   * AudioDetectionEvent create
   */
  export type AudioDetectionEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioDetectionEvent
     */
    select?: AudioDetectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioDetectionEvent
     */
    omit?: AudioDetectionEventOmit<ExtArgs> | null
    /**
     * The data needed to create a AudioDetectionEvent.
     */
    data: XOR<AudioDetectionEventCreateInput, AudioDetectionEventUncheckedCreateInput>
  }

  /**
   * AudioDetectionEvent createMany
   */
  export type AudioDetectionEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioDetectionEvents.
     */
    data: AudioDetectionEventCreateManyInput | AudioDetectionEventCreateManyInput[]
  }

  /**
   * AudioDetectionEvent update
   */
  export type AudioDetectionEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioDetectionEvent
     */
    select?: AudioDetectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioDetectionEvent
     */
    omit?: AudioDetectionEventOmit<ExtArgs> | null
    /**
     * The data needed to update a AudioDetectionEvent.
     */
    data: XOR<AudioDetectionEventUpdateInput, AudioDetectionEventUncheckedUpdateInput>
    /**
     * Choose, which AudioDetectionEvent to update.
     */
    where: AudioDetectionEventWhereUniqueInput
  }

  /**
   * AudioDetectionEvent updateMany
   */
  export type AudioDetectionEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioDetectionEvents.
     */
    data: XOR<AudioDetectionEventUpdateManyMutationInput, AudioDetectionEventUncheckedUpdateManyInput>
    /**
     * Filter which AudioDetectionEvents to update
     */
    where?: AudioDetectionEventWhereInput
    /**
     * Limit how many AudioDetectionEvents to update.
     */
    limit?: number
  }

  /**
   * AudioDetectionEvent upsert
   */
  export type AudioDetectionEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioDetectionEvent
     */
    select?: AudioDetectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioDetectionEvent
     */
    omit?: AudioDetectionEventOmit<ExtArgs> | null
    /**
     * The filter to search for the AudioDetectionEvent to update in case it exists.
     */
    where: AudioDetectionEventWhereUniqueInput
    /**
     * In case the AudioDetectionEvent found by the `where` argument doesn't exist, create a new AudioDetectionEvent with this data.
     */
    create: XOR<AudioDetectionEventCreateInput, AudioDetectionEventUncheckedCreateInput>
    /**
     * In case the AudioDetectionEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioDetectionEventUpdateInput, AudioDetectionEventUncheckedUpdateInput>
  }

  /**
   * AudioDetectionEvent delete
   */
  export type AudioDetectionEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioDetectionEvent
     */
    select?: AudioDetectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioDetectionEvent
     */
    omit?: AudioDetectionEventOmit<ExtArgs> | null
    /**
     * Filter which AudioDetectionEvent to delete.
     */
    where: AudioDetectionEventWhereUniqueInput
  }

  /**
   * AudioDetectionEvent deleteMany
   */
  export type AudioDetectionEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioDetectionEvents to delete
     */
    where?: AudioDetectionEventWhereInput
    /**
     * Limit how many AudioDetectionEvents to delete.
     */
    limit?: number
  }

  /**
   * AudioDetectionEvent findRaw
   */
  export type AudioDetectionEventFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AudioDetectionEvent aggregateRaw
   */
  export type AudioDetectionEventAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AudioDetectionEvent without action
   */
  export type AudioDetectionEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioDetectionEvent
     */
    select?: AudioDetectionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioDetectionEvent
     */
    omit?: AudioDetectionEventOmit<ExtArgs> | null
  }


  /**
   * Model AudioProcessingLog
   */

  export type AggregateAudioProcessingLog = {
    _count: AudioProcessingLogCountAggregateOutputType | null
    _avg: AudioProcessingLogAvgAggregateOutputType | null
    _sum: AudioProcessingLogSumAggregateOutputType | null
    _min: AudioProcessingLogMinAggregateOutputType | null
    _max: AudioProcessingLogMaxAggregateOutputType | null
  }

  export type AudioProcessingLogAvgAggregateOutputType = {
    duration: number | null
  }

  export type AudioProcessingLogSumAggregateOutputType = {
    duration: number | null
  }

  export type AudioProcessingLogMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    status: string | null
    duration: number | null
    details: string | null
    createdAt: Date | null
  }

  export type AudioProcessingLogMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    status: string | null
    duration: number | null
    details: string | null
    createdAt: Date | null
  }

  export type AudioProcessingLogCountAggregateOutputType = {
    id: number
    eventId: number
    status: number
    duration: number
    details: number
    createdAt: number
    _all: number
  }


  export type AudioProcessingLogAvgAggregateInputType = {
    duration?: true
  }

  export type AudioProcessingLogSumAggregateInputType = {
    duration?: true
  }

  export type AudioProcessingLogMinAggregateInputType = {
    id?: true
    eventId?: true
    status?: true
    duration?: true
    details?: true
    createdAt?: true
  }

  export type AudioProcessingLogMaxAggregateInputType = {
    id?: true
    eventId?: true
    status?: true
    duration?: true
    details?: true
    createdAt?: true
  }

  export type AudioProcessingLogCountAggregateInputType = {
    id?: true
    eventId?: true
    status?: true
    duration?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type AudioProcessingLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioProcessingLog to aggregate.
     */
    where?: AudioProcessingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioProcessingLogs to fetch.
     */
    orderBy?: AudioProcessingLogOrderByWithRelationInput | AudioProcessingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioProcessingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioProcessingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioProcessingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioProcessingLogs
    **/
    _count?: true | AudioProcessingLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AudioProcessingLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AudioProcessingLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioProcessingLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioProcessingLogMaxAggregateInputType
  }

  export type GetAudioProcessingLogAggregateType<T extends AudioProcessingLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioProcessingLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioProcessingLog[P]>
      : GetScalarType<T[P], AggregateAudioProcessingLog[P]>
  }




  export type AudioProcessingLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioProcessingLogWhereInput
    orderBy?: AudioProcessingLogOrderByWithAggregationInput | AudioProcessingLogOrderByWithAggregationInput[]
    by: AudioProcessingLogScalarFieldEnum[] | AudioProcessingLogScalarFieldEnum
    having?: AudioProcessingLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioProcessingLogCountAggregateInputType | true
    _avg?: AudioProcessingLogAvgAggregateInputType
    _sum?: AudioProcessingLogSumAggregateInputType
    _min?: AudioProcessingLogMinAggregateInputType
    _max?: AudioProcessingLogMaxAggregateInputType
  }

  export type AudioProcessingLogGroupByOutputType = {
    id: string
    eventId: string | null
    status: string
    duration: number
    details: string | null
    createdAt: Date
    _count: AudioProcessingLogCountAggregateOutputType | null
    _avg: AudioProcessingLogAvgAggregateOutputType | null
    _sum: AudioProcessingLogSumAggregateOutputType | null
    _min: AudioProcessingLogMinAggregateOutputType | null
    _max: AudioProcessingLogMaxAggregateOutputType | null
  }

  type GetAudioProcessingLogGroupByPayload<T extends AudioProcessingLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioProcessingLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioProcessingLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioProcessingLogGroupByOutputType[P]>
            : GetScalarType<T[P], AudioProcessingLogGroupByOutputType[P]>
        }
      >
    >


  export type AudioProcessingLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    status?: boolean
    duration?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["audioProcessingLog"]>



  export type AudioProcessingLogSelectScalar = {
    id?: boolean
    eventId?: boolean
    status?: boolean
    duration?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type AudioProcessingLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "status" | "duration" | "details" | "createdAt", ExtArgs["result"]["audioProcessingLog"]>

  export type $AudioProcessingLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioProcessingLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string | null
      status: string
      duration: number
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["audioProcessingLog"]>
    composites: {}
  }

  type AudioProcessingLogGetPayload<S extends boolean | null | undefined | AudioProcessingLogDefaultArgs> = $Result.GetResult<Prisma.$AudioProcessingLogPayload, S>

  type AudioProcessingLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioProcessingLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioProcessingLogCountAggregateInputType | true
    }

  export interface AudioProcessingLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioProcessingLog'], meta: { name: 'AudioProcessingLog' } }
    /**
     * Find zero or one AudioProcessingLog that matches the filter.
     * @param {AudioProcessingLogFindUniqueArgs} args - Arguments to find a AudioProcessingLog
     * @example
     * // Get one AudioProcessingLog
     * const audioProcessingLog = await prisma.audioProcessingLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioProcessingLogFindUniqueArgs>(args: SelectSubset<T, AudioProcessingLogFindUniqueArgs<ExtArgs>>): Prisma__AudioProcessingLogClient<$Result.GetResult<Prisma.$AudioProcessingLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudioProcessingLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioProcessingLogFindUniqueOrThrowArgs} args - Arguments to find a AudioProcessingLog
     * @example
     * // Get one AudioProcessingLog
     * const audioProcessingLog = await prisma.audioProcessingLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioProcessingLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioProcessingLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioProcessingLogClient<$Result.GetResult<Prisma.$AudioProcessingLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioProcessingLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioProcessingLogFindFirstArgs} args - Arguments to find a AudioProcessingLog
     * @example
     * // Get one AudioProcessingLog
     * const audioProcessingLog = await prisma.audioProcessingLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioProcessingLogFindFirstArgs>(args?: SelectSubset<T, AudioProcessingLogFindFirstArgs<ExtArgs>>): Prisma__AudioProcessingLogClient<$Result.GetResult<Prisma.$AudioProcessingLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioProcessingLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioProcessingLogFindFirstOrThrowArgs} args - Arguments to find a AudioProcessingLog
     * @example
     * // Get one AudioProcessingLog
     * const audioProcessingLog = await prisma.audioProcessingLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioProcessingLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioProcessingLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioProcessingLogClient<$Result.GetResult<Prisma.$AudioProcessingLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioProcessingLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioProcessingLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioProcessingLogs
     * const audioProcessingLogs = await prisma.audioProcessingLog.findMany()
     * 
     * // Get first 10 AudioProcessingLogs
     * const audioProcessingLogs = await prisma.audioProcessingLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioProcessingLogWithIdOnly = await prisma.audioProcessingLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioProcessingLogFindManyArgs>(args?: SelectSubset<T, AudioProcessingLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioProcessingLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudioProcessingLog.
     * @param {AudioProcessingLogCreateArgs} args - Arguments to create a AudioProcessingLog.
     * @example
     * // Create one AudioProcessingLog
     * const AudioProcessingLog = await prisma.audioProcessingLog.create({
     *   data: {
     *     // ... data to create a AudioProcessingLog
     *   }
     * })
     * 
     */
    create<T extends AudioProcessingLogCreateArgs>(args: SelectSubset<T, AudioProcessingLogCreateArgs<ExtArgs>>): Prisma__AudioProcessingLogClient<$Result.GetResult<Prisma.$AudioProcessingLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudioProcessingLogs.
     * @param {AudioProcessingLogCreateManyArgs} args - Arguments to create many AudioProcessingLogs.
     * @example
     * // Create many AudioProcessingLogs
     * const audioProcessingLog = await prisma.audioProcessingLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioProcessingLogCreateManyArgs>(args?: SelectSubset<T, AudioProcessingLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AudioProcessingLog.
     * @param {AudioProcessingLogDeleteArgs} args - Arguments to delete one AudioProcessingLog.
     * @example
     * // Delete one AudioProcessingLog
     * const AudioProcessingLog = await prisma.audioProcessingLog.delete({
     *   where: {
     *     // ... filter to delete one AudioProcessingLog
     *   }
     * })
     * 
     */
    delete<T extends AudioProcessingLogDeleteArgs>(args: SelectSubset<T, AudioProcessingLogDeleteArgs<ExtArgs>>): Prisma__AudioProcessingLogClient<$Result.GetResult<Prisma.$AudioProcessingLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudioProcessingLog.
     * @param {AudioProcessingLogUpdateArgs} args - Arguments to update one AudioProcessingLog.
     * @example
     * // Update one AudioProcessingLog
     * const audioProcessingLog = await prisma.audioProcessingLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioProcessingLogUpdateArgs>(args: SelectSubset<T, AudioProcessingLogUpdateArgs<ExtArgs>>): Prisma__AudioProcessingLogClient<$Result.GetResult<Prisma.$AudioProcessingLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudioProcessingLogs.
     * @param {AudioProcessingLogDeleteManyArgs} args - Arguments to filter AudioProcessingLogs to delete.
     * @example
     * // Delete a few AudioProcessingLogs
     * const { count } = await prisma.audioProcessingLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioProcessingLogDeleteManyArgs>(args?: SelectSubset<T, AudioProcessingLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioProcessingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioProcessingLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioProcessingLogs
     * const audioProcessingLog = await prisma.audioProcessingLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioProcessingLogUpdateManyArgs>(args: SelectSubset<T, AudioProcessingLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AudioProcessingLog.
     * @param {AudioProcessingLogUpsertArgs} args - Arguments to update or create a AudioProcessingLog.
     * @example
     * // Update or create a AudioProcessingLog
     * const audioProcessingLog = await prisma.audioProcessingLog.upsert({
     *   create: {
     *     // ... data to create a AudioProcessingLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioProcessingLog we want to update
     *   }
     * })
     */
    upsert<T extends AudioProcessingLogUpsertArgs>(args: SelectSubset<T, AudioProcessingLogUpsertArgs<ExtArgs>>): Prisma__AudioProcessingLogClient<$Result.GetResult<Prisma.$AudioProcessingLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioProcessingLogs that matches the filter.
     * @param {AudioProcessingLogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const audioProcessingLog = await prisma.audioProcessingLog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AudioProcessingLogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AudioProcessingLog.
     * @param {AudioProcessingLogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const audioProcessingLog = await prisma.audioProcessingLog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AudioProcessingLogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AudioProcessingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioProcessingLogCountArgs} args - Arguments to filter AudioProcessingLogs to count.
     * @example
     * // Count the number of AudioProcessingLogs
     * const count = await prisma.audioProcessingLog.count({
     *   where: {
     *     // ... the filter for the AudioProcessingLogs we want to count
     *   }
     * })
    **/
    count<T extends AudioProcessingLogCountArgs>(
      args?: Subset<T, AudioProcessingLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioProcessingLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioProcessingLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioProcessingLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioProcessingLogAggregateArgs>(args: Subset<T, AudioProcessingLogAggregateArgs>): Prisma.PrismaPromise<GetAudioProcessingLogAggregateType<T>>

    /**
     * Group by AudioProcessingLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioProcessingLogGroupByArgs} args - Group by arguments.
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
      T extends AudioProcessingLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioProcessingLogGroupByArgs['orderBy'] }
        : { orderBy?: AudioProcessingLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioProcessingLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioProcessingLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioProcessingLog model
   */
  readonly fields: AudioProcessingLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioProcessingLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioProcessingLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AudioProcessingLog model
   */
  interface AudioProcessingLogFieldRefs {
    readonly id: FieldRef<"AudioProcessingLog", 'String'>
    readonly eventId: FieldRef<"AudioProcessingLog", 'String'>
    readonly status: FieldRef<"AudioProcessingLog", 'String'>
    readonly duration: FieldRef<"AudioProcessingLog", 'Int'>
    readonly details: FieldRef<"AudioProcessingLog", 'String'>
    readonly createdAt: FieldRef<"AudioProcessingLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AudioProcessingLog findUnique
   */
  export type AudioProcessingLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioProcessingLog
     */
    select?: AudioProcessingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioProcessingLog
     */
    omit?: AudioProcessingLogOmit<ExtArgs> | null
    /**
     * Filter, which AudioProcessingLog to fetch.
     */
    where: AudioProcessingLogWhereUniqueInput
  }

  /**
   * AudioProcessingLog findUniqueOrThrow
   */
  export type AudioProcessingLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioProcessingLog
     */
    select?: AudioProcessingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioProcessingLog
     */
    omit?: AudioProcessingLogOmit<ExtArgs> | null
    /**
     * Filter, which AudioProcessingLog to fetch.
     */
    where: AudioProcessingLogWhereUniqueInput
  }

  /**
   * AudioProcessingLog findFirst
   */
  export type AudioProcessingLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioProcessingLog
     */
    select?: AudioProcessingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioProcessingLog
     */
    omit?: AudioProcessingLogOmit<ExtArgs> | null
    /**
     * Filter, which AudioProcessingLog to fetch.
     */
    where?: AudioProcessingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioProcessingLogs to fetch.
     */
    orderBy?: AudioProcessingLogOrderByWithRelationInput | AudioProcessingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioProcessingLogs.
     */
    cursor?: AudioProcessingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioProcessingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioProcessingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioProcessingLogs.
     */
    distinct?: AudioProcessingLogScalarFieldEnum | AudioProcessingLogScalarFieldEnum[]
  }

  /**
   * AudioProcessingLog findFirstOrThrow
   */
  export type AudioProcessingLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioProcessingLog
     */
    select?: AudioProcessingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioProcessingLog
     */
    omit?: AudioProcessingLogOmit<ExtArgs> | null
    /**
     * Filter, which AudioProcessingLog to fetch.
     */
    where?: AudioProcessingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioProcessingLogs to fetch.
     */
    orderBy?: AudioProcessingLogOrderByWithRelationInput | AudioProcessingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioProcessingLogs.
     */
    cursor?: AudioProcessingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioProcessingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioProcessingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioProcessingLogs.
     */
    distinct?: AudioProcessingLogScalarFieldEnum | AudioProcessingLogScalarFieldEnum[]
  }

  /**
   * AudioProcessingLog findMany
   */
  export type AudioProcessingLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioProcessingLog
     */
    select?: AudioProcessingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioProcessingLog
     */
    omit?: AudioProcessingLogOmit<ExtArgs> | null
    /**
     * Filter, which AudioProcessingLogs to fetch.
     */
    where?: AudioProcessingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioProcessingLogs to fetch.
     */
    orderBy?: AudioProcessingLogOrderByWithRelationInput | AudioProcessingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioProcessingLogs.
     */
    cursor?: AudioProcessingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioProcessingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioProcessingLogs.
     */
    skip?: number
    distinct?: AudioProcessingLogScalarFieldEnum | AudioProcessingLogScalarFieldEnum[]
  }

  /**
   * AudioProcessingLog create
   */
  export type AudioProcessingLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioProcessingLog
     */
    select?: AudioProcessingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioProcessingLog
     */
    omit?: AudioProcessingLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AudioProcessingLog.
     */
    data: XOR<AudioProcessingLogCreateInput, AudioProcessingLogUncheckedCreateInput>
  }

  /**
   * AudioProcessingLog createMany
   */
  export type AudioProcessingLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioProcessingLogs.
     */
    data: AudioProcessingLogCreateManyInput | AudioProcessingLogCreateManyInput[]
  }

  /**
   * AudioProcessingLog update
   */
  export type AudioProcessingLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioProcessingLog
     */
    select?: AudioProcessingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioProcessingLog
     */
    omit?: AudioProcessingLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AudioProcessingLog.
     */
    data: XOR<AudioProcessingLogUpdateInput, AudioProcessingLogUncheckedUpdateInput>
    /**
     * Choose, which AudioProcessingLog to update.
     */
    where: AudioProcessingLogWhereUniqueInput
  }

  /**
   * AudioProcessingLog updateMany
   */
  export type AudioProcessingLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioProcessingLogs.
     */
    data: XOR<AudioProcessingLogUpdateManyMutationInput, AudioProcessingLogUncheckedUpdateManyInput>
    /**
     * Filter which AudioProcessingLogs to update
     */
    where?: AudioProcessingLogWhereInput
    /**
     * Limit how many AudioProcessingLogs to update.
     */
    limit?: number
  }

  /**
   * AudioProcessingLog upsert
   */
  export type AudioProcessingLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioProcessingLog
     */
    select?: AudioProcessingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioProcessingLog
     */
    omit?: AudioProcessingLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AudioProcessingLog to update in case it exists.
     */
    where: AudioProcessingLogWhereUniqueInput
    /**
     * In case the AudioProcessingLog found by the `where` argument doesn't exist, create a new AudioProcessingLog with this data.
     */
    create: XOR<AudioProcessingLogCreateInput, AudioProcessingLogUncheckedCreateInput>
    /**
     * In case the AudioProcessingLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioProcessingLogUpdateInput, AudioProcessingLogUncheckedUpdateInput>
  }

  /**
   * AudioProcessingLog delete
   */
  export type AudioProcessingLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioProcessingLog
     */
    select?: AudioProcessingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioProcessingLog
     */
    omit?: AudioProcessingLogOmit<ExtArgs> | null
    /**
     * Filter which AudioProcessingLog to delete.
     */
    where: AudioProcessingLogWhereUniqueInput
  }

  /**
   * AudioProcessingLog deleteMany
   */
  export type AudioProcessingLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioProcessingLogs to delete
     */
    where?: AudioProcessingLogWhereInput
    /**
     * Limit how many AudioProcessingLogs to delete.
     */
    limit?: number
  }

  /**
   * AudioProcessingLog findRaw
   */
  export type AudioProcessingLogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AudioProcessingLog aggregateRaw
   */
  export type AudioProcessingLogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AudioProcessingLog without action
   */
  export type AudioProcessingLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioProcessingLog
     */
    select?: AudioProcessingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioProcessingLog
     */
    omit?: AudioProcessingLogOmit<ExtArgs> | null
  }


  /**
   * Model DetectionRule
   */

  export type AggregateDetectionRule = {
    _count: DetectionRuleCountAggregateOutputType | null
    _avg: DetectionRuleAvgAggregateOutputType | null
    _sum: DetectionRuleSumAggregateOutputType | null
    _min: DetectionRuleMinAggregateOutputType | null
    _max: DetectionRuleMaxAggregateOutputType | null
  }

  export type DetectionRuleAvgAggregateOutputType = {
    confidence: number | null
  }

  export type DetectionRuleSumAggregateOutputType = {
    confidence: number | null
  }

  export type DetectionRuleMinAggregateOutputType = {
    id: string | null
    keyword: string | null
    severity: string | null
    enabled: boolean | null
    confidence: number | null
    action: string | null
    createdAt: Date | null
  }

  export type DetectionRuleMaxAggregateOutputType = {
    id: string | null
    keyword: string | null
    severity: string | null
    enabled: boolean | null
    confidence: number | null
    action: string | null
    createdAt: Date | null
  }

  export type DetectionRuleCountAggregateOutputType = {
    id: number
    keyword: number
    severity: number
    enabled: number
    confidence: number
    action: number
    createdAt: number
    _all: number
  }


  export type DetectionRuleAvgAggregateInputType = {
    confidence?: true
  }

  export type DetectionRuleSumAggregateInputType = {
    confidence?: true
  }

  export type DetectionRuleMinAggregateInputType = {
    id?: true
    keyword?: true
    severity?: true
    enabled?: true
    confidence?: true
    action?: true
    createdAt?: true
  }

  export type DetectionRuleMaxAggregateInputType = {
    id?: true
    keyword?: true
    severity?: true
    enabled?: true
    confidence?: true
    action?: true
    createdAt?: true
  }

  export type DetectionRuleCountAggregateInputType = {
    id?: true
    keyword?: true
    severity?: true
    enabled?: true
    confidence?: true
    action?: true
    createdAt?: true
    _all?: true
  }

  export type DetectionRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetectionRule to aggregate.
     */
    where?: DetectionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionRules to fetch.
     */
    orderBy?: DetectionRuleOrderByWithRelationInput | DetectionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetectionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetectionRules
    **/
    _count?: true | DetectionRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetectionRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetectionRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetectionRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetectionRuleMaxAggregateInputType
  }

  export type GetDetectionRuleAggregateType<T extends DetectionRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateDetectionRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetectionRule[P]>
      : GetScalarType<T[P], AggregateDetectionRule[P]>
  }




  export type DetectionRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetectionRuleWhereInput
    orderBy?: DetectionRuleOrderByWithAggregationInput | DetectionRuleOrderByWithAggregationInput[]
    by: DetectionRuleScalarFieldEnum[] | DetectionRuleScalarFieldEnum
    having?: DetectionRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetectionRuleCountAggregateInputType | true
    _avg?: DetectionRuleAvgAggregateInputType
    _sum?: DetectionRuleSumAggregateInputType
    _min?: DetectionRuleMinAggregateInputType
    _max?: DetectionRuleMaxAggregateInputType
  }

  export type DetectionRuleGroupByOutputType = {
    id: string
    keyword: string
    severity: string
    enabled: boolean
    confidence: number
    action: string
    createdAt: Date
    _count: DetectionRuleCountAggregateOutputType | null
    _avg: DetectionRuleAvgAggregateOutputType | null
    _sum: DetectionRuleSumAggregateOutputType | null
    _min: DetectionRuleMinAggregateOutputType | null
    _max: DetectionRuleMaxAggregateOutputType | null
  }

  type GetDetectionRuleGroupByPayload<T extends DetectionRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetectionRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetectionRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetectionRuleGroupByOutputType[P]>
            : GetScalarType<T[P], DetectionRuleGroupByOutputType[P]>
        }
      >
    >


  export type DetectionRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword?: boolean
    severity?: boolean
    enabled?: boolean
    confidence?: boolean
    action?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["detectionRule"]>



  export type DetectionRuleSelectScalar = {
    id?: boolean
    keyword?: boolean
    severity?: boolean
    enabled?: boolean
    confidence?: boolean
    action?: boolean
    createdAt?: boolean
  }

  export type DetectionRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyword" | "severity" | "enabled" | "confidence" | "action" | "createdAt", ExtArgs["result"]["detectionRule"]>

  export type $DetectionRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetectionRule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      keyword: string
      severity: string
      enabled: boolean
      confidence: number
      action: string
      createdAt: Date
    }, ExtArgs["result"]["detectionRule"]>
    composites: {}
  }

  type DetectionRuleGetPayload<S extends boolean | null | undefined | DetectionRuleDefaultArgs> = $Result.GetResult<Prisma.$DetectionRulePayload, S>

  type DetectionRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetectionRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetectionRuleCountAggregateInputType | true
    }

  export interface DetectionRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetectionRule'], meta: { name: 'DetectionRule' } }
    /**
     * Find zero or one DetectionRule that matches the filter.
     * @param {DetectionRuleFindUniqueArgs} args - Arguments to find a DetectionRule
     * @example
     * // Get one DetectionRule
     * const detectionRule = await prisma.detectionRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetectionRuleFindUniqueArgs>(args: SelectSubset<T, DetectionRuleFindUniqueArgs<ExtArgs>>): Prisma__DetectionRuleClient<$Result.GetResult<Prisma.$DetectionRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetectionRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetectionRuleFindUniqueOrThrowArgs} args - Arguments to find a DetectionRule
     * @example
     * // Get one DetectionRule
     * const detectionRule = await prisma.detectionRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetectionRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, DetectionRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetectionRuleClient<$Result.GetResult<Prisma.$DetectionRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetectionRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionRuleFindFirstArgs} args - Arguments to find a DetectionRule
     * @example
     * // Get one DetectionRule
     * const detectionRule = await prisma.detectionRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetectionRuleFindFirstArgs>(args?: SelectSubset<T, DetectionRuleFindFirstArgs<ExtArgs>>): Prisma__DetectionRuleClient<$Result.GetResult<Prisma.$DetectionRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetectionRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionRuleFindFirstOrThrowArgs} args - Arguments to find a DetectionRule
     * @example
     * // Get one DetectionRule
     * const detectionRule = await prisma.detectionRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetectionRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, DetectionRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetectionRuleClient<$Result.GetResult<Prisma.$DetectionRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetectionRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetectionRules
     * const detectionRules = await prisma.detectionRule.findMany()
     * 
     * // Get first 10 DetectionRules
     * const detectionRules = await prisma.detectionRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detectionRuleWithIdOnly = await prisma.detectionRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetectionRuleFindManyArgs>(args?: SelectSubset<T, DetectionRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetectionRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetectionRule.
     * @param {DetectionRuleCreateArgs} args - Arguments to create a DetectionRule.
     * @example
     * // Create one DetectionRule
     * const DetectionRule = await prisma.detectionRule.create({
     *   data: {
     *     // ... data to create a DetectionRule
     *   }
     * })
     * 
     */
    create<T extends DetectionRuleCreateArgs>(args: SelectSubset<T, DetectionRuleCreateArgs<ExtArgs>>): Prisma__DetectionRuleClient<$Result.GetResult<Prisma.$DetectionRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetectionRules.
     * @param {DetectionRuleCreateManyArgs} args - Arguments to create many DetectionRules.
     * @example
     * // Create many DetectionRules
     * const detectionRule = await prisma.detectionRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetectionRuleCreateManyArgs>(args?: SelectSubset<T, DetectionRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetectionRule.
     * @param {DetectionRuleDeleteArgs} args - Arguments to delete one DetectionRule.
     * @example
     * // Delete one DetectionRule
     * const DetectionRule = await prisma.detectionRule.delete({
     *   where: {
     *     // ... filter to delete one DetectionRule
     *   }
     * })
     * 
     */
    delete<T extends DetectionRuleDeleteArgs>(args: SelectSubset<T, DetectionRuleDeleteArgs<ExtArgs>>): Prisma__DetectionRuleClient<$Result.GetResult<Prisma.$DetectionRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetectionRule.
     * @param {DetectionRuleUpdateArgs} args - Arguments to update one DetectionRule.
     * @example
     * // Update one DetectionRule
     * const detectionRule = await prisma.detectionRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetectionRuleUpdateArgs>(args: SelectSubset<T, DetectionRuleUpdateArgs<ExtArgs>>): Prisma__DetectionRuleClient<$Result.GetResult<Prisma.$DetectionRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetectionRules.
     * @param {DetectionRuleDeleteManyArgs} args - Arguments to filter DetectionRules to delete.
     * @example
     * // Delete a few DetectionRules
     * const { count } = await prisma.detectionRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetectionRuleDeleteManyArgs>(args?: SelectSubset<T, DetectionRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetectionRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetectionRules
     * const detectionRule = await prisma.detectionRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetectionRuleUpdateManyArgs>(args: SelectSubset<T, DetectionRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetectionRule.
     * @param {DetectionRuleUpsertArgs} args - Arguments to update or create a DetectionRule.
     * @example
     * // Update or create a DetectionRule
     * const detectionRule = await prisma.detectionRule.upsert({
     *   create: {
     *     // ... data to create a DetectionRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetectionRule we want to update
     *   }
     * })
     */
    upsert<T extends DetectionRuleUpsertArgs>(args: SelectSubset<T, DetectionRuleUpsertArgs<ExtArgs>>): Prisma__DetectionRuleClient<$Result.GetResult<Prisma.$DetectionRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetectionRules that matches the filter.
     * @param {DetectionRuleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const detectionRule = await prisma.detectionRule.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DetectionRuleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DetectionRule.
     * @param {DetectionRuleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const detectionRule = await prisma.detectionRule.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DetectionRuleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DetectionRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionRuleCountArgs} args - Arguments to filter DetectionRules to count.
     * @example
     * // Count the number of DetectionRules
     * const count = await prisma.detectionRule.count({
     *   where: {
     *     // ... the filter for the DetectionRules we want to count
     *   }
     * })
    **/
    count<T extends DetectionRuleCountArgs>(
      args?: Subset<T, DetectionRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetectionRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetectionRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetectionRuleAggregateArgs>(args: Subset<T, DetectionRuleAggregateArgs>): Prisma.PrismaPromise<GetDetectionRuleAggregateType<T>>

    /**
     * Group by DetectionRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetectionRuleGroupByArgs} args - Group by arguments.
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
      T extends DetectionRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetectionRuleGroupByArgs['orderBy'] }
        : { orderBy?: DetectionRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetectionRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetectionRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetectionRule model
   */
  readonly fields: DetectionRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetectionRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetectionRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DetectionRule model
   */
  interface DetectionRuleFieldRefs {
    readonly id: FieldRef<"DetectionRule", 'String'>
    readonly keyword: FieldRef<"DetectionRule", 'String'>
    readonly severity: FieldRef<"DetectionRule", 'String'>
    readonly enabled: FieldRef<"DetectionRule", 'Boolean'>
    readonly confidence: FieldRef<"DetectionRule", 'Float'>
    readonly action: FieldRef<"DetectionRule", 'String'>
    readonly createdAt: FieldRef<"DetectionRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DetectionRule findUnique
   */
  export type DetectionRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionRule
     */
    select?: DetectionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionRule
     */
    omit?: DetectionRuleOmit<ExtArgs> | null
    /**
     * Filter, which DetectionRule to fetch.
     */
    where: DetectionRuleWhereUniqueInput
  }

  /**
   * DetectionRule findUniqueOrThrow
   */
  export type DetectionRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionRule
     */
    select?: DetectionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionRule
     */
    omit?: DetectionRuleOmit<ExtArgs> | null
    /**
     * Filter, which DetectionRule to fetch.
     */
    where: DetectionRuleWhereUniqueInput
  }

  /**
   * DetectionRule findFirst
   */
  export type DetectionRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionRule
     */
    select?: DetectionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionRule
     */
    omit?: DetectionRuleOmit<ExtArgs> | null
    /**
     * Filter, which DetectionRule to fetch.
     */
    where?: DetectionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionRules to fetch.
     */
    orderBy?: DetectionRuleOrderByWithRelationInput | DetectionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetectionRules.
     */
    cursor?: DetectionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetectionRules.
     */
    distinct?: DetectionRuleScalarFieldEnum | DetectionRuleScalarFieldEnum[]
  }

  /**
   * DetectionRule findFirstOrThrow
   */
  export type DetectionRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionRule
     */
    select?: DetectionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionRule
     */
    omit?: DetectionRuleOmit<ExtArgs> | null
    /**
     * Filter, which DetectionRule to fetch.
     */
    where?: DetectionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionRules to fetch.
     */
    orderBy?: DetectionRuleOrderByWithRelationInput | DetectionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetectionRules.
     */
    cursor?: DetectionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetectionRules.
     */
    distinct?: DetectionRuleScalarFieldEnum | DetectionRuleScalarFieldEnum[]
  }

  /**
   * DetectionRule findMany
   */
  export type DetectionRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionRule
     */
    select?: DetectionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionRule
     */
    omit?: DetectionRuleOmit<ExtArgs> | null
    /**
     * Filter, which DetectionRules to fetch.
     */
    where?: DetectionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetectionRules to fetch.
     */
    orderBy?: DetectionRuleOrderByWithRelationInput | DetectionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetectionRules.
     */
    cursor?: DetectionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetectionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetectionRules.
     */
    skip?: number
    distinct?: DetectionRuleScalarFieldEnum | DetectionRuleScalarFieldEnum[]
  }

  /**
   * DetectionRule create
   */
  export type DetectionRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionRule
     */
    select?: DetectionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionRule
     */
    omit?: DetectionRuleOmit<ExtArgs> | null
    /**
     * The data needed to create a DetectionRule.
     */
    data: XOR<DetectionRuleCreateInput, DetectionRuleUncheckedCreateInput>
  }

  /**
   * DetectionRule createMany
   */
  export type DetectionRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetectionRules.
     */
    data: DetectionRuleCreateManyInput | DetectionRuleCreateManyInput[]
  }

  /**
   * DetectionRule update
   */
  export type DetectionRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionRule
     */
    select?: DetectionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionRule
     */
    omit?: DetectionRuleOmit<ExtArgs> | null
    /**
     * The data needed to update a DetectionRule.
     */
    data: XOR<DetectionRuleUpdateInput, DetectionRuleUncheckedUpdateInput>
    /**
     * Choose, which DetectionRule to update.
     */
    where: DetectionRuleWhereUniqueInput
  }

  /**
   * DetectionRule updateMany
   */
  export type DetectionRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetectionRules.
     */
    data: XOR<DetectionRuleUpdateManyMutationInput, DetectionRuleUncheckedUpdateManyInput>
    /**
     * Filter which DetectionRules to update
     */
    where?: DetectionRuleWhereInput
    /**
     * Limit how many DetectionRules to update.
     */
    limit?: number
  }

  /**
   * DetectionRule upsert
   */
  export type DetectionRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionRule
     */
    select?: DetectionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionRule
     */
    omit?: DetectionRuleOmit<ExtArgs> | null
    /**
     * The filter to search for the DetectionRule to update in case it exists.
     */
    where: DetectionRuleWhereUniqueInput
    /**
     * In case the DetectionRule found by the `where` argument doesn't exist, create a new DetectionRule with this data.
     */
    create: XOR<DetectionRuleCreateInput, DetectionRuleUncheckedCreateInput>
    /**
     * In case the DetectionRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetectionRuleUpdateInput, DetectionRuleUncheckedUpdateInput>
  }

  /**
   * DetectionRule delete
   */
  export type DetectionRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionRule
     */
    select?: DetectionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionRule
     */
    omit?: DetectionRuleOmit<ExtArgs> | null
    /**
     * Filter which DetectionRule to delete.
     */
    where: DetectionRuleWhereUniqueInput
  }

  /**
   * DetectionRule deleteMany
   */
  export type DetectionRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetectionRules to delete
     */
    where?: DetectionRuleWhereInput
    /**
     * Limit how many DetectionRules to delete.
     */
    limit?: number
  }

  /**
   * DetectionRule findRaw
   */
  export type DetectionRuleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * DetectionRule aggregateRaw
   */
  export type DetectionRuleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * DetectionRule without action
   */
  export type DetectionRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetectionRule
     */
    select?: DetectionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetectionRule
     */
    omit?: DetectionRuleOmit<ExtArgs> | null
  }


  /**
   * Model AudioWebhook
   */

  export type AggregateAudioWebhook = {
    _count: AudioWebhookCountAggregateOutputType | null
    _min: AudioWebhookMinAggregateOutputType | null
    _max: AudioWebhookMaxAggregateOutputType | null
  }

  export type AudioWebhookMinAggregateOutputType = {
    id: string | null
    url: string | null
  }

  export type AudioWebhookMaxAggregateOutputType = {
    id: string | null
    url: string | null
  }

  export type AudioWebhookCountAggregateOutputType = {
    id: number
    url: number
    _all: number
  }


  export type AudioWebhookMinAggregateInputType = {
    id?: true
    url?: true
  }

  export type AudioWebhookMaxAggregateInputType = {
    id?: true
    url?: true
  }

  export type AudioWebhookCountAggregateInputType = {
    id?: true
    url?: true
    _all?: true
  }

  export type AudioWebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioWebhook to aggregate.
     */
    where?: AudioWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioWebhooks to fetch.
     */
    orderBy?: AudioWebhookOrderByWithRelationInput | AudioWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudioWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AudioWebhooks
    **/
    _count?: true | AudioWebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudioWebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudioWebhookMaxAggregateInputType
  }

  export type GetAudioWebhookAggregateType<T extends AudioWebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateAudioWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudioWebhook[P]>
      : GetScalarType<T[P], AggregateAudioWebhook[P]>
  }




  export type AudioWebhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudioWebhookWhereInput
    orderBy?: AudioWebhookOrderByWithAggregationInput | AudioWebhookOrderByWithAggregationInput[]
    by: AudioWebhookScalarFieldEnum[] | AudioWebhookScalarFieldEnum
    having?: AudioWebhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudioWebhookCountAggregateInputType | true
    _min?: AudioWebhookMinAggregateInputType
    _max?: AudioWebhookMaxAggregateInputType
  }

  export type AudioWebhookGroupByOutputType = {
    id: string
    url: string
    _count: AudioWebhookCountAggregateOutputType | null
    _min: AudioWebhookMinAggregateOutputType | null
    _max: AudioWebhookMaxAggregateOutputType | null
  }

  type GetAudioWebhookGroupByPayload<T extends AudioWebhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudioWebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudioWebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudioWebhookGroupByOutputType[P]>
            : GetScalarType<T[P], AudioWebhookGroupByOutputType[P]>
        }
      >
    >


  export type AudioWebhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
  }, ExtArgs["result"]["audioWebhook"]>



  export type AudioWebhookSelectScalar = {
    id?: boolean
    url?: boolean
  }

  export type AudioWebhookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url", ExtArgs["result"]["audioWebhook"]>

  export type $AudioWebhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AudioWebhook"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
    }, ExtArgs["result"]["audioWebhook"]>
    composites: {}
  }

  type AudioWebhookGetPayload<S extends boolean | null | undefined | AudioWebhookDefaultArgs> = $Result.GetResult<Prisma.$AudioWebhookPayload, S>

  type AudioWebhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AudioWebhookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AudioWebhookCountAggregateInputType | true
    }

  export interface AudioWebhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AudioWebhook'], meta: { name: 'AudioWebhook' } }
    /**
     * Find zero or one AudioWebhook that matches the filter.
     * @param {AudioWebhookFindUniqueArgs} args - Arguments to find a AudioWebhook
     * @example
     * // Get one AudioWebhook
     * const audioWebhook = await prisma.audioWebhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudioWebhookFindUniqueArgs>(args: SelectSubset<T, AudioWebhookFindUniqueArgs<ExtArgs>>): Prisma__AudioWebhookClient<$Result.GetResult<Prisma.$AudioWebhookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AudioWebhook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AudioWebhookFindUniqueOrThrowArgs} args - Arguments to find a AudioWebhook
     * @example
     * // Get one AudioWebhook
     * const audioWebhook = await prisma.audioWebhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudioWebhookFindUniqueOrThrowArgs>(args: SelectSubset<T, AudioWebhookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudioWebhookClient<$Result.GetResult<Prisma.$AudioWebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioWebhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioWebhookFindFirstArgs} args - Arguments to find a AudioWebhook
     * @example
     * // Get one AudioWebhook
     * const audioWebhook = await prisma.audioWebhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudioWebhookFindFirstArgs>(args?: SelectSubset<T, AudioWebhookFindFirstArgs<ExtArgs>>): Prisma__AudioWebhookClient<$Result.GetResult<Prisma.$AudioWebhookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AudioWebhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioWebhookFindFirstOrThrowArgs} args - Arguments to find a AudioWebhook
     * @example
     * // Get one AudioWebhook
     * const audioWebhook = await prisma.audioWebhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudioWebhookFindFirstOrThrowArgs>(args?: SelectSubset<T, AudioWebhookFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudioWebhookClient<$Result.GetResult<Prisma.$AudioWebhookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioWebhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioWebhookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AudioWebhooks
     * const audioWebhooks = await prisma.audioWebhook.findMany()
     * 
     * // Get first 10 AudioWebhooks
     * const audioWebhooks = await prisma.audioWebhook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audioWebhookWithIdOnly = await prisma.audioWebhook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudioWebhookFindManyArgs>(args?: SelectSubset<T, AudioWebhookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudioWebhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AudioWebhook.
     * @param {AudioWebhookCreateArgs} args - Arguments to create a AudioWebhook.
     * @example
     * // Create one AudioWebhook
     * const AudioWebhook = await prisma.audioWebhook.create({
     *   data: {
     *     // ... data to create a AudioWebhook
     *   }
     * })
     * 
     */
    create<T extends AudioWebhookCreateArgs>(args: SelectSubset<T, AudioWebhookCreateArgs<ExtArgs>>): Prisma__AudioWebhookClient<$Result.GetResult<Prisma.$AudioWebhookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AudioWebhooks.
     * @param {AudioWebhookCreateManyArgs} args - Arguments to create many AudioWebhooks.
     * @example
     * // Create many AudioWebhooks
     * const audioWebhook = await prisma.audioWebhook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudioWebhookCreateManyArgs>(args?: SelectSubset<T, AudioWebhookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AudioWebhook.
     * @param {AudioWebhookDeleteArgs} args - Arguments to delete one AudioWebhook.
     * @example
     * // Delete one AudioWebhook
     * const AudioWebhook = await prisma.audioWebhook.delete({
     *   where: {
     *     // ... filter to delete one AudioWebhook
     *   }
     * })
     * 
     */
    delete<T extends AudioWebhookDeleteArgs>(args: SelectSubset<T, AudioWebhookDeleteArgs<ExtArgs>>): Prisma__AudioWebhookClient<$Result.GetResult<Prisma.$AudioWebhookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AudioWebhook.
     * @param {AudioWebhookUpdateArgs} args - Arguments to update one AudioWebhook.
     * @example
     * // Update one AudioWebhook
     * const audioWebhook = await prisma.audioWebhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudioWebhookUpdateArgs>(args: SelectSubset<T, AudioWebhookUpdateArgs<ExtArgs>>): Prisma__AudioWebhookClient<$Result.GetResult<Prisma.$AudioWebhookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AudioWebhooks.
     * @param {AudioWebhookDeleteManyArgs} args - Arguments to filter AudioWebhooks to delete.
     * @example
     * // Delete a few AudioWebhooks
     * const { count } = await prisma.audioWebhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudioWebhookDeleteManyArgs>(args?: SelectSubset<T, AudioWebhookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AudioWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioWebhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AudioWebhooks
     * const audioWebhook = await prisma.audioWebhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudioWebhookUpdateManyArgs>(args: SelectSubset<T, AudioWebhookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AudioWebhook.
     * @param {AudioWebhookUpsertArgs} args - Arguments to update or create a AudioWebhook.
     * @example
     * // Update or create a AudioWebhook
     * const audioWebhook = await prisma.audioWebhook.upsert({
     *   create: {
     *     // ... data to create a AudioWebhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AudioWebhook we want to update
     *   }
     * })
     */
    upsert<T extends AudioWebhookUpsertArgs>(args: SelectSubset<T, AudioWebhookUpsertArgs<ExtArgs>>): Prisma__AudioWebhookClient<$Result.GetResult<Prisma.$AudioWebhookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AudioWebhooks that matches the filter.
     * @param {AudioWebhookFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const audioWebhook = await prisma.audioWebhook.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AudioWebhookFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AudioWebhook.
     * @param {AudioWebhookAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const audioWebhook = await prisma.audioWebhook.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AudioWebhookAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AudioWebhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioWebhookCountArgs} args - Arguments to filter AudioWebhooks to count.
     * @example
     * // Count the number of AudioWebhooks
     * const count = await prisma.audioWebhook.count({
     *   where: {
     *     // ... the filter for the AudioWebhooks we want to count
     *   }
     * })
    **/
    count<T extends AudioWebhookCountArgs>(
      args?: Subset<T, AudioWebhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudioWebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AudioWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioWebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudioWebhookAggregateArgs>(args: Subset<T, AudioWebhookAggregateArgs>): Prisma.PrismaPromise<GetAudioWebhookAggregateType<T>>

    /**
     * Group by AudioWebhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudioWebhookGroupByArgs} args - Group by arguments.
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
      T extends AudioWebhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudioWebhookGroupByArgs['orderBy'] }
        : { orderBy?: AudioWebhookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudioWebhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudioWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AudioWebhook model
   */
  readonly fields: AudioWebhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AudioWebhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudioWebhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AudioWebhook model
   */
  interface AudioWebhookFieldRefs {
    readonly id: FieldRef<"AudioWebhook", 'String'>
    readonly url: FieldRef<"AudioWebhook", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AudioWebhook findUnique
   */
  export type AudioWebhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioWebhook
     */
    select?: AudioWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioWebhook
     */
    omit?: AudioWebhookOmit<ExtArgs> | null
    /**
     * Filter, which AudioWebhook to fetch.
     */
    where: AudioWebhookWhereUniqueInput
  }

  /**
   * AudioWebhook findUniqueOrThrow
   */
  export type AudioWebhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioWebhook
     */
    select?: AudioWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioWebhook
     */
    omit?: AudioWebhookOmit<ExtArgs> | null
    /**
     * Filter, which AudioWebhook to fetch.
     */
    where: AudioWebhookWhereUniqueInput
  }

  /**
   * AudioWebhook findFirst
   */
  export type AudioWebhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioWebhook
     */
    select?: AudioWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioWebhook
     */
    omit?: AudioWebhookOmit<ExtArgs> | null
    /**
     * Filter, which AudioWebhook to fetch.
     */
    where?: AudioWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioWebhooks to fetch.
     */
    orderBy?: AudioWebhookOrderByWithRelationInput | AudioWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioWebhooks.
     */
    cursor?: AudioWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioWebhooks.
     */
    distinct?: AudioWebhookScalarFieldEnum | AudioWebhookScalarFieldEnum[]
  }

  /**
   * AudioWebhook findFirstOrThrow
   */
  export type AudioWebhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioWebhook
     */
    select?: AudioWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioWebhook
     */
    omit?: AudioWebhookOmit<ExtArgs> | null
    /**
     * Filter, which AudioWebhook to fetch.
     */
    where?: AudioWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioWebhooks to fetch.
     */
    orderBy?: AudioWebhookOrderByWithRelationInput | AudioWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AudioWebhooks.
     */
    cursor?: AudioWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioWebhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AudioWebhooks.
     */
    distinct?: AudioWebhookScalarFieldEnum | AudioWebhookScalarFieldEnum[]
  }

  /**
   * AudioWebhook findMany
   */
  export type AudioWebhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioWebhook
     */
    select?: AudioWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioWebhook
     */
    omit?: AudioWebhookOmit<ExtArgs> | null
    /**
     * Filter, which AudioWebhooks to fetch.
     */
    where?: AudioWebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AudioWebhooks to fetch.
     */
    orderBy?: AudioWebhookOrderByWithRelationInput | AudioWebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AudioWebhooks.
     */
    cursor?: AudioWebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AudioWebhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AudioWebhooks.
     */
    skip?: number
    distinct?: AudioWebhookScalarFieldEnum | AudioWebhookScalarFieldEnum[]
  }

  /**
   * AudioWebhook create
   */
  export type AudioWebhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioWebhook
     */
    select?: AudioWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioWebhook
     */
    omit?: AudioWebhookOmit<ExtArgs> | null
    /**
     * The data needed to create a AudioWebhook.
     */
    data: XOR<AudioWebhookCreateInput, AudioWebhookUncheckedCreateInput>
  }

  /**
   * AudioWebhook createMany
   */
  export type AudioWebhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AudioWebhooks.
     */
    data: AudioWebhookCreateManyInput | AudioWebhookCreateManyInput[]
  }

  /**
   * AudioWebhook update
   */
  export type AudioWebhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioWebhook
     */
    select?: AudioWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioWebhook
     */
    omit?: AudioWebhookOmit<ExtArgs> | null
    /**
     * The data needed to update a AudioWebhook.
     */
    data: XOR<AudioWebhookUpdateInput, AudioWebhookUncheckedUpdateInput>
    /**
     * Choose, which AudioWebhook to update.
     */
    where: AudioWebhookWhereUniqueInput
  }

  /**
   * AudioWebhook updateMany
   */
  export type AudioWebhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AudioWebhooks.
     */
    data: XOR<AudioWebhookUpdateManyMutationInput, AudioWebhookUncheckedUpdateManyInput>
    /**
     * Filter which AudioWebhooks to update
     */
    where?: AudioWebhookWhereInput
    /**
     * Limit how many AudioWebhooks to update.
     */
    limit?: number
  }

  /**
   * AudioWebhook upsert
   */
  export type AudioWebhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioWebhook
     */
    select?: AudioWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioWebhook
     */
    omit?: AudioWebhookOmit<ExtArgs> | null
    /**
     * The filter to search for the AudioWebhook to update in case it exists.
     */
    where: AudioWebhookWhereUniqueInput
    /**
     * In case the AudioWebhook found by the `where` argument doesn't exist, create a new AudioWebhook with this data.
     */
    create: XOR<AudioWebhookCreateInput, AudioWebhookUncheckedCreateInput>
    /**
     * In case the AudioWebhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudioWebhookUpdateInput, AudioWebhookUncheckedUpdateInput>
  }

  /**
   * AudioWebhook delete
   */
  export type AudioWebhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioWebhook
     */
    select?: AudioWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioWebhook
     */
    omit?: AudioWebhookOmit<ExtArgs> | null
    /**
     * Filter which AudioWebhook to delete.
     */
    where: AudioWebhookWhereUniqueInput
  }

  /**
   * AudioWebhook deleteMany
   */
  export type AudioWebhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AudioWebhooks to delete
     */
    where?: AudioWebhookWhereInput
    /**
     * Limit how many AudioWebhooks to delete.
     */
    limit?: number
  }

  /**
   * AudioWebhook findRaw
   */
  export type AudioWebhookFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AudioWebhook aggregateRaw
   */
  export type AudioWebhookAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * AudioWebhook without action
   */
  export type AudioWebhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudioWebhook
     */
    select?: AudioWebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AudioWebhook
     */
    omit?: AudioWebhookOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const AudioConfigurationScalarFieldEnum: {
    id: 'id',
    isActive: 'isActive'
  };

  export type AudioConfigurationScalarFieldEnum = (typeof AudioConfigurationScalarFieldEnum)[keyof typeof AudioConfigurationScalarFieldEnum]


  export const AudioKeywordScalarFieldEnum: {
    id: 'id',
    keyword: 'keyword'
  };

  export type AudioKeywordScalarFieldEnum = (typeof AudioKeywordScalarFieldEnum)[keyof typeof AudioKeywordScalarFieldEnum]


  export const AudioDetectionEventScalarFieldEnum: {
    id: 'id',
    keyword: 'keyword',
    confidence: 'confidence',
    createdAt: 'createdAt',
    location: 'location',
    location_lat: 'location_lat',
    location_lon: 'location_lon',
    metadata: 'metadata',
    severity: 'severity',
    sourceDevice: 'sourceDevice'
  };

  export type AudioDetectionEventScalarFieldEnum = (typeof AudioDetectionEventScalarFieldEnum)[keyof typeof AudioDetectionEventScalarFieldEnum]


  export const AudioProcessingLogScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    status: 'status',
    duration: 'duration',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type AudioProcessingLogScalarFieldEnum = (typeof AudioProcessingLogScalarFieldEnum)[keyof typeof AudioProcessingLogScalarFieldEnum]


  export const DetectionRuleScalarFieldEnum: {
    id: 'id',
    keyword: 'keyword',
    severity: 'severity',
    enabled: 'enabled',
    confidence: 'confidence',
    action: 'action',
    createdAt: 'createdAt'
  };

  export type DetectionRuleScalarFieldEnum = (typeof DetectionRuleScalarFieldEnum)[keyof typeof DetectionRuleScalarFieldEnum]


  export const AudioWebhookScalarFieldEnum: {
    id: 'id',
    url: 'url'
  };

  export type AudioWebhookScalarFieldEnum = (typeof AudioWebhookScalarFieldEnum)[keyof typeof AudioWebhookScalarFieldEnum]


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
   * Deep Input Types
   */


  export type AudioConfigurationWhereInput = {
    AND?: AudioConfigurationWhereInput | AudioConfigurationWhereInput[]
    OR?: AudioConfigurationWhereInput[]
    NOT?: AudioConfigurationWhereInput | AudioConfigurationWhereInput[]
    id?: StringFilter<"AudioConfiguration"> | string
    isActive?: BoolFilter<"AudioConfiguration"> | boolean
  }

  export type AudioConfigurationOrderByWithRelationInput = {
    id?: SortOrder
    isActive?: SortOrder
  }

  export type AudioConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudioConfigurationWhereInput | AudioConfigurationWhereInput[]
    OR?: AudioConfigurationWhereInput[]
    NOT?: AudioConfigurationWhereInput | AudioConfigurationWhereInput[]
    isActive?: BoolFilter<"AudioConfiguration"> | boolean
  }, "id">

  export type AudioConfigurationOrderByWithAggregationInput = {
    id?: SortOrder
    isActive?: SortOrder
    _count?: AudioConfigurationCountOrderByAggregateInput
    _max?: AudioConfigurationMaxOrderByAggregateInput
    _min?: AudioConfigurationMinOrderByAggregateInput
  }

  export type AudioConfigurationScalarWhereWithAggregatesInput = {
    AND?: AudioConfigurationScalarWhereWithAggregatesInput | AudioConfigurationScalarWhereWithAggregatesInput[]
    OR?: AudioConfigurationScalarWhereWithAggregatesInput[]
    NOT?: AudioConfigurationScalarWhereWithAggregatesInput | AudioConfigurationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudioConfiguration"> | string
    isActive?: BoolWithAggregatesFilter<"AudioConfiguration"> | boolean
  }

  export type AudioKeywordWhereInput = {
    AND?: AudioKeywordWhereInput | AudioKeywordWhereInput[]
    OR?: AudioKeywordWhereInput[]
    NOT?: AudioKeywordWhereInput | AudioKeywordWhereInput[]
    id?: StringFilter<"AudioKeyword"> | string
    keyword?: StringFilter<"AudioKeyword"> | string
  }

  export type AudioKeywordOrderByWithRelationInput = {
    id?: SortOrder
    keyword?: SortOrder
  }

  export type AudioKeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudioKeywordWhereInput | AudioKeywordWhereInput[]
    OR?: AudioKeywordWhereInput[]
    NOT?: AudioKeywordWhereInput | AudioKeywordWhereInput[]
    keyword?: StringFilter<"AudioKeyword"> | string
  }, "id">

  export type AudioKeywordOrderByWithAggregationInput = {
    id?: SortOrder
    keyword?: SortOrder
    _count?: AudioKeywordCountOrderByAggregateInput
    _max?: AudioKeywordMaxOrderByAggregateInput
    _min?: AudioKeywordMinOrderByAggregateInput
  }

  export type AudioKeywordScalarWhereWithAggregatesInput = {
    AND?: AudioKeywordScalarWhereWithAggregatesInput | AudioKeywordScalarWhereWithAggregatesInput[]
    OR?: AudioKeywordScalarWhereWithAggregatesInput[]
    NOT?: AudioKeywordScalarWhereWithAggregatesInput | AudioKeywordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudioKeyword"> | string
    keyword?: StringWithAggregatesFilter<"AudioKeyword"> | string
  }

  export type AudioDetectionEventWhereInput = {
    AND?: AudioDetectionEventWhereInput | AudioDetectionEventWhereInput[]
    OR?: AudioDetectionEventWhereInput[]
    NOT?: AudioDetectionEventWhereInput | AudioDetectionEventWhereInput[]
    id?: StringFilter<"AudioDetectionEvent"> | string
    keyword?: StringFilter<"AudioDetectionEvent"> | string
    confidence?: FloatFilter<"AudioDetectionEvent"> | number
    createdAt?: DateTimeFilter<"AudioDetectionEvent"> | Date | string
    location?: StringNullableFilter<"AudioDetectionEvent"> | string | null
    location_lat?: FloatNullableFilter<"AudioDetectionEvent"> | number | null
    location_lon?: FloatNullableFilter<"AudioDetectionEvent"> | number | null
    metadata?: StringFilter<"AudioDetectionEvent"> | string
    severity?: StringFilter<"AudioDetectionEvent"> | string
    sourceDevice?: StringNullableFilter<"AudioDetectionEvent"> | string | null
  }

  export type AudioDetectionEventOrderByWithRelationInput = {
    id?: SortOrder
    keyword?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    location?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    metadata?: SortOrder
    severity?: SortOrder
    sourceDevice?: SortOrder
  }

  export type AudioDetectionEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudioDetectionEventWhereInput | AudioDetectionEventWhereInput[]
    OR?: AudioDetectionEventWhereInput[]
    NOT?: AudioDetectionEventWhereInput | AudioDetectionEventWhereInput[]
    keyword?: StringFilter<"AudioDetectionEvent"> | string
    confidence?: FloatFilter<"AudioDetectionEvent"> | number
    createdAt?: DateTimeFilter<"AudioDetectionEvent"> | Date | string
    location?: StringNullableFilter<"AudioDetectionEvent"> | string | null
    location_lat?: FloatNullableFilter<"AudioDetectionEvent"> | number | null
    location_lon?: FloatNullableFilter<"AudioDetectionEvent"> | number | null
    metadata?: StringFilter<"AudioDetectionEvent"> | string
    severity?: StringFilter<"AudioDetectionEvent"> | string
    sourceDevice?: StringNullableFilter<"AudioDetectionEvent"> | string | null
  }, "id">

  export type AudioDetectionEventOrderByWithAggregationInput = {
    id?: SortOrder
    keyword?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    location?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    metadata?: SortOrder
    severity?: SortOrder
    sourceDevice?: SortOrder
    _count?: AudioDetectionEventCountOrderByAggregateInput
    _avg?: AudioDetectionEventAvgOrderByAggregateInput
    _max?: AudioDetectionEventMaxOrderByAggregateInput
    _min?: AudioDetectionEventMinOrderByAggregateInput
    _sum?: AudioDetectionEventSumOrderByAggregateInput
  }

  export type AudioDetectionEventScalarWhereWithAggregatesInput = {
    AND?: AudioDetectionEventScalarWhereWithAggregatesInput | AudioDetectionEventScalarWhereWithAggregatesInput[]
    OR?: AudioDetectionEventScalarWhereWithAggregatesInput[]
    NOT?: AudioDetectionEventScalarWhereWithAggregatesInput | AudioDetectionEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudioDetectionEvent"> | string
    keyword?: StringWithAggregatesFilter<"AudioDetectionEvent"> | string
    confidence?: FloatWithAggregatesFilter<"AudioDetectionEvent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AudioDetectionEvent"> | Date | string
    location?: StringNullableWithAggregatesFilter<"AudioDetectionEvent"> | string | null
    location_lat?: FloatNullableWithAggregatesFilter<"AudioDetectionEvent"> | number | null
    location_lon?: FloatNullableWithAggregatesFilter<"AudioDetectionEvent"> | number | null
    metadata?: StringWithAggregatesFilter<"AudioDetectionEvent"> | string
    severity?: StringWithAggregatesFilter<"AudioDetectionEvent"> | string
    sourceDevice?: StringNullableWithAggregatesFilter<"AudioDetectionEvent"> | string | null
  }

  export type AudioProcessingLogWhereInput = {
    AND?: AudioProcessingLogWhereInput | AudioProcessingLogWhereInput[]
    OR?: AudioProcessingLogWhereInput[]
    NOT?: AudioProcessingLogWhereInput | AudioProcessingLogWhereInput[]
    id?: StringFilter<"AudioProcessingLog"> | string
    eventId?: StringNullableFilter<"AudioProcessingLog"> | string | null
    status?: StringFilter<"AudioProcessingLog"> | string
    duration?: IntFilter<"AudioProcessingLog"> | number
    details?: StringNullableFilter<"AudioProcessingLog"> | string | null
    createdAt?: DateTimeFilter<"AudioProcessingLog"> | Date | string
  }

  export type AudioProcessingLogOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioProcessingLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudioProcessingLogWhereInput | AudioProcessingLogWhereInput[]
    OR?: AudioProcessingLogWhereInput[]
    NOT?: AudioProcessingLogWhereInput | AudioProcessingLogWhereInput[]
    eventId?: StringNullableFilter<"AudioProcessingLog"> | string | null
    status?: StringFilter<"AudioProcessingLog"> | string
    duration?: IntFilter<"AudioProcessingLog"> | number
    details?: StringNullableFilter<"AudioProcessingLog"> | string | null
    createdAt?: DateTimeFilter<"AudioProcessingLog"> | Date | string
  }, "id">

  export type AudioProcessingLogOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    _count?: AudioProcessingLogCountOrderByAggregateInput
    _avg?: AudioProcessingLogAvgOrderByAggregateInput
    _max?: AudioProcessingLogMaxOrderByAggregateInput
    _min?: AudioProcessingLogMinOrderByAggregateInput
    _sum?: AudioProcessingLogSumOrderByAggregateInput
  }

  export type AudioProcessingLogScalarWhereWithAggregatesInput = {
    AND?: AudioProcessingLogScalarWhereWithAggregatesInput | AudioProcessingLogScalarWhereWithAggregatesInput[]
    OR?: AudioProcessingLogScalarWhereWithAggregatesInput[]
    NOT?: AudioProcessingLogScalarWhereWithAggregatesInput | AudioProcessingLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudioProcessingLog"> | string
    eventId?: StringNullableWithAggregatesFilter<"AudioProcessingLog"> | string | null
    status?: StringWithAggregatesFilter<"AudioProcessingLog"> | string
    duration?: IntWithAggregatesFilter<"AudioProcessingLog"> | number
    details?: StringNullableWithAggregatesFilter<"AudioProcessingLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AudioProcessingLog"> | Date | string
  }

  export type DetectionRuleWhereInput = {
    AND?: DetectionRuleWhereInput | DetectionRuleWhereInput[]
    OR?: DetectionRuleWhereInput[]
    NOT?: DetectionRuleWhereInput | DetectionRuleWhereInput[]
    id?: StringFilter<"DetectionRule"> | string
    keyword?: StringFilter<"DetectionRule"> | string
    severity?: StringFilter<"DetectionRule"> | string
    enabled?: BoolFilter<"DetectionRule"> | boolean
    confidence?: FloatFilter<"DetectionRule"> | number
    action?: StringFilter<"DetectionRule"> | string
    createdAt?: DateTimeFilter<"DetectionRule"> | Date | string
  }

  export type DetectionRuleOrderByWithRelationInput = {
    id?: SortOrder
    keyword?: SortOrder
    severity?: SortOrder
    enabled?: SortOrder
    confidence?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type DetectionRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DetectionRuleWhereInput | DetectionRuleWhereInput[]
    OR?: DetectionRuleWhereInput[]
    NOT?: DetectionRuleWhereInput | DetectionRuleWhereInput[]
    keyword?: StringFilter<"DetectionRule"> | string
    severity?: StringFilter<"DetectionRule"> | string
    enabled?: BoolFilter<"DetectionRule"> | boolean
    confidence?: FloatFilter<"DetectionRule"> | number
    action?: StringFilter<"DetectionRule"> | string
    createdAt?: DateTimeFilter<"DetectionRule"> | Date | string
  }, "id">

  export type DetectionRuleOrderByWithAggregationInput = {
    id?: SortOrder
    keyword?: SortOrder
    severity?: SortOrder
    enabled?: SortOrder
    confidence?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    _count?: DetectionRuleCountOrderByAggregateInput
    _avg?: DetectionRuleAvgOrderByAggregateInput
    _max?: DetectionRuleMaxOrderByAggregateInput
    _min?: DetectionRuleMinOrderByAggregateInput
    _sum?: DetectionRuleSumOrderByAggregateInput
  }

  export type DetectionRuleScalarWhereWithAggregatesInput = {
    AND?: DetectionRuleScalarWhereWithAggregatesInput | DetectionRuleScalarWhereWithAggregatesInput[]
    OR?: DetectionRuleScalarWhereWithAggregatesInput[]
    NOT?: DetectionRuleScalarWhereWithAggregatesInput | DetectionRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DetectionRule"> | string
    keyword?: StringWithAggregatesFilter<"DetectionRule"> | string
    severity?: StringWithAggregatesFilter<"DetectionRule"> | string
    enabled?: BoolWithAggregatesFilter<"DetectionRule"> | boolean
    confidence?: FloatWithAggregatesFilter<"DetectionRule"> | number
    action?: StringWithAggregatesFilter<"DetectionRule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DetectionRule"> | Date | string
  }

  export type AudioWebhookWhereInput = {
    AND?: AudioWebhookWhereInput | AudioWebhookWhereInput[]
    OR?: AudioWebhookWhereInput[]
    NOT?: AudioWebhookWhereInput | AudioWebhookWhereInput[]
    id?: StringFilter<"AudioWebhook"> | string
    url?: StringFilter<"AudioWebhook"> | string
  }

  export type AudioWebhookOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type AudioWebhookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AudioWebhookWhereInput | AudioWebhookWhereInput[]
    OR?: AudioWebhookWhereInput[]
    NOT?: AudioWebhookWhereInput | AudioWebhookWhereInput[]
    url?: StringFilter<"AudioWebhook"> | string
  }, "id">

  export type AudioWebhookOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    _count?: AudioWebhookCountOrderByAggregateInput
    _max?: AudioWebhookMaxOrderByAggregateInput
    _min?: AudioWebhookMinOrderByAggregateInput
  }

  export type AudioWebhookScalarWhereWithAggregatesInput = {
    AND?: AudioWebhookScalarWhereWithAggregatesInput | AudioWebhookScalarWhereWithAggregatesInput[]
    OR?: AudioWebhookScalarWhereWithAggregatesInput[]
    NOT?: AudioWebhookScalarWhereWithAggregatesInput | AudioWebhookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AudioWebhook"> | string
    url?: StringWithAggregatesFilter<"AudioWebhook"> | string
  }

  export type AudioConfigurationCreateInput = {
    id?: string
    isActive?: boolean
  }

  export type AudioConfigurationUncheckedCreateInput = {
    id?: string
    isActive?: boolean
  }

  export type AudioConfigurationUpdateInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudioConfigurationUncheckedUpdateInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudioConfigurationCreateManyInput = {
    id?: string
    isActive?: boolean
  }

  export type AudioConfigurationUpdateManyMutationInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudioConfigurationUncheckedUpdateManyInput = {
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AudioKeywordCreateInput = {
    id?: string
    keyword: string
  }

  export type AudioKeywordUncheckedCreateInput = {
    id?: string
    keyword: string
  }

  export type AudioKeywordUpdateInput = {
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type AudioKeywordUncheckedUpdateInput = {
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type AudioKeywordCreateManyInput = {
    id?: string
    keyword: string
  }

  export type AudioKeywordUpdateManyMutationInput = {
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type AudioKeywordUncheckedUpdateManyInput = {
    keyword?: StringFieldUpdateOperationsInput | string
  }

  export type AudioDetectionEventCreateInput = {
    id?: string
    keyword: string
    confidence: number
    createdAt?: Date | string
    location?: string | null
    location_lat?: number | null
    location_lon?: number | null
    metadata?: string
    severity?: string
    sourceDevice?: string | null
  }

  export type AudioDetectionEventUncheckedCreateInput = {
    id?: string
    keyword: string
    confidence: number
    createdAt?: Date | string
    location?: string | null
    location_lat?: number | null
    location_lon?: number | null
    metadata?: string
    severity?: string
    sourceDevice?: string | null
  }

  export type AudioDetectionEventUpdateInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceDevice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AudioDetectionEventUncheckedUpdateInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceDevice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AudioDetectionEventCreateManyInput = {
    id?: string
    keyword: string
    confidence: number
    createdAt?: Date | string
    location?: string | null
    location_lat?: number | null
    location_lon?: number | null
    metadata?: string
    severity?: string
    sourceDevice?: string | null
  }

  export type AudioDetectionEventUpdateManyMutationInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceDevice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AudioDetectionEventUncheckedUpdateManyInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    location_lat?: NullableFloatFieldUpdateOperationsInput | number | null
    location_lon?: NullableFloatFieldUpdateOperationsInput | number | null
    metadata?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    sourceDevice?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AudioProcessingLogCreateInput = {
    id?: string
    eventId?: string | null
    status: string
    duration: number
    details?: string | null
    createdAt?: Date | string
  }

  export type AudioProcessingLogUncheckedCreateInput = {
    id?: string
    eventId?: string | null
    status: string
    duration: number
    details?: string | null
    createdAt?: Date | string
  }

  export type AudioProcessingLogUpdateInput = {
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioProcessingLogUncheckedUpdateInput = {
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioProcessingLogCreateManyInput = {
    id?: string
    eventId?: string | null
    status: string
    duration: number
    details?: string | null
    createdAt?: Date | string
  }

  export type AudioProcessingLogUpdateManyMutationInput = {
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioProcessingLogUncheckedUpdateManyInput = {
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionRuleCreateInput = {
    id?: string
    keyword: string
    severity: string
    enabled?: boolean
    confidence?: number
    action?: string
    createdAt?: Date | string
  }

  export type DetectionRuleUncheckedCreateInput = {
    id?: string
    keyword: string
    severity: string
    enabled?: boolean
    confidence?: number
    action?: string
    createdAt?: Date | string
  }

  export type DetectionRuleUpdateInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    confidence?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionRuleUncheckedUpdateInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    confidence?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionRuleCreateManyInput = {
    id?: string
    keyword: string
    severity: string
    enabled?: boolean
    confidence?: number
    action?: string
    createdAt?: Date | string
  }

  export type DetectionRuleUpdateManyMutationInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    confidence?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetectionRuleUncheckedUpdateManyInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    confidence?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AudioWebhookCreateInput = {
    id?: string
    url: string
  }

  export type AudioWebhookUncheckedCreateInput = {
    id?: string
    url: string
  }

  export type AudioWebhookUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AudioWebhookUncheckedUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AudioWebhookCreateManyInput = {
    id?: string
    url: string
  }

  export type AudioWebhookUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AudioWebhookUncheckedUpdateManyInput = {
    url?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AudioConfigurationCountOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
  }

  export type AudioConfigurationMaxOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
  }

  export type AudioConfigurationMinOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AudioKeywordCountOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
  }

  export type AudioKeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
  }

  export type AudioKeywordMinOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
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

  export type AudioDetectionEventCountOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    location?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    metadata?: SortOrder
    severity?: SortOrder
    sourceDevice?: SortOrder
  }

  export type AudioDetectionEventAvgOrderByAggregateInput = {
    confidence?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
  }

  export type AudioDetectionEventMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    location?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    metadata?: SortOrder
    severity?: SortOrder
    sourceDevice?: SortOrder
  }

  export type AudioDetectionEventMinOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    confidence?: SortOrder
    createdAt?: SortOrder
    location?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
    metadata?: SortOrder
    severity?: SortOrder
    sourceDevice?: SortOrder
  }

  export type AudioDetectionEventSumOrderByAggregateInput = {
    confidence?: SortOrder
    location_lat?: SortOrder
    location_lon?: SortOrder
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

  export type AudioProcessingLogCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioProcessingLogAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type AudioProcessingLogMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioProcessingLogMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type AudioProcessingLogSumOrderByAggregateInput = {
    duration?: SortOrder
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

  export type DetectionRuleCountOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    severity?: SortOrder
    enabled?: SortOrder
    confidence?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type DetectionRuleAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type DetectionRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    severity?: SortOrder
    enabled?: SortOrder
    confidence?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type DetectionRuleMinOrderByAggregateInput = {
    id?: SortOrder
    keyword?: SortOrder
    severity?: SortOrder
    enabled?: SortOrder
    confidence?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type DetectionRuleSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type AudioWebhookCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type AudioWebhookMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type AudioWebhookMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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