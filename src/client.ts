// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIPromise, type APIResponseProps } from './api-promise';
import { CoinGeckoApiError, APIError, APIConnectionError, APIConnectionTimeoutError, APIUserAbortError, NotFoundError, ConflictError, RateLimitError, BadRequestError, AuthenticationError, InternalServerError, PermissionDeniedError, UnprocessableEntityError } from './error';
import { readEnv } from './internal/utils/env';
import type { Fetch, RequestInfo } from './internal/builtin-types';
import type { HeadersLike } from './internal/headers';
import type { FinalRequestOptions, RequestOptions } from './internal/request-options';
import type { FinalizedRequestInit, MergedRequestInit, PromiseOrValue } from './internal/types';
import { toFile } from './uploads';
import { Ping } from "./resources/ping";
import { Key } from "./resources/key";
import { Simple } from "./resources/simple/simple";
import { Search } from "./resources/search/search";
import { Coins } from "./resources/coins/coins";
import { AssetPlatforms } from "./resources/asset-platforms";
import { TokenLists } from "./resources/token-lists";
import { Exchanges } from "./resources/exchanges/exchanges";
import { Derivatives } from "./resources/derivatives/derivatives";
import { Entities } from "./resources/entities";
import { PublicTreasury } from "./resources/public-treasury";
import { Nfts } from "./resources/nfts/nfts";
import { ExchangeRates } from "./resources/exchange-rates";
import { News } from "./resources/news";
import { Global } from "./resources/global/global";
import { Onchain } from "./resources/onchain/onchain";

type LogFn = (message: string, ...rest: readonly unknown[]) => void;

export type Logger = {
  error: LogFn;
  warn: LogFn;
  info: LogFn;
  debug: LogFn;
};

export type LogLevel = 'off' | 'error' | 'warn' | 'info' | 'debug';

export type AuthTokenProvider = () => string | Promise<string>;

const isLogLevel = (value: string | undefined): value is LogLevel => {
  if (value === undefined) return false;
  return ['off', 'error', 'warn', 'info', 'debug'].includes(value);
};

const environments = {
  pro: "https://pro-api.coingecko.com/api/v3",
  demo: "https://api.coingecko.com/api/v3",
  production: "https://pro-api.coingecko.com/api/v3",
  environment_2: "https://api.coingecko.com/api/v3",
};
type Environment = keyof typeof environments;

export interface ClientOptions {
/**
 * CoinGecko Pro API Key
 */
  proKeyAuth?: string | AuthTokenProvider | undefined;

/**
 * CoinGecko Demo API Key
 */
  demoKeyAuth?: string | AuthTokenProvider | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `pro` corresponds to `https://pro-api.coingecko.com/api/v3`
   * - `demo` corresponds to `https://api.coingecko.com/api/v3`
   * - `production` corresponds to `https://pro-api.coingecko.com/api/v3`
   * - `environment_2` corresponds to `https://api.coingecko.com/api/v3`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API.
   *
   * Defaults to process.env["COIN-GECKO_BASE_URL"].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time, in milliseconds, to wait for a response before aborting a request.
   *
   * Request timeouts are retried by default, so the total time may be longer when retries are enabled.
   */
  timeout?: number | undefined;

  /**
   * The maximum number of times to retry temporary failures such as network errors, 408, 409, 429, and 5xx responses.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Additional `RequestInit` options to pass to `fetch` calls.
   *
   * Per-request `fetchOptions` override these values.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` implementation.
   *
   * If omitted, the generated client uses global `fetch`.
   */
  fetch?: Fetch | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env["COIN-GECKO_LOG"].
   */
  logLevel?: LogLevel | undefined | null;

  /**
   * Set the logger implementation.
   *
   * Defaults to `console`.
   */
  logger?: Logger | undefined | null;
}

export type CoinGeckoApiOptions = ClientOptions;

/**
 * API Client for interfacing with the CoinGeckoApi API.
 *
 * @param {string | AuthTokenProvider | undefined} [opts.proKeyAuth=process.env["PRO_KEY_AUTH"] ?? undefined]
 * @param {string | AuthTokenProvider | undefined} [opts.demoKeyAuth=process.env["DEMO_KEY_AUTH"] ?? undefined]
 * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
 * @param {string | null | undefined} [opts.baseURL=process.env["COIN-GECKO_BASE_URL"] ?? https://pro-api.coingecko.com/api/v3] - Override the default base URL for the API.
 * @param {number} [opts.timeout=60000] - The maximum amount of time, in milliseconds, to wait for a response before aborting a request.
 * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to pass to `fetch` calls.
 * @param {Fetch} [opts.fetch] - Specify a custom `fetch` implementation.
 * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
 * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request.
 * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request.
 * @param {LogLevel | undefined | null} opts.logLevel - Set the log level.
 * @param {Logger | undefined | null} opts.logger - Set the logger implementation.
 */
export class CoinGeckoApi {
  static CoinGeckoApi = this;
  static DEFAULT_TIMEOUT = 60000;
  static CoinGeckoApiError = CoinGeckoApiError;
  static APIError = APIError;
  static APIConnectionError = APIConnectionError;
  static APIConnectionTimeoutError = APIConnectionTimeoutError;
  static APIUserAbortError = APIUserAbortError;
  static NotFoundError = NotFoundError;
  static ConflictError = ConflictError;
  static RateLimitError = RateLimitError;
  static BadRequestError = BadRequestError;
  static AuthenticationError = AuthenticationError;
  static InternalServerError = InternalServerError;
  static PermissionDeniedError = PermissionDeniedError;
  static UnprocessableEntityError = UnprocessableEntityError;
  static toFile = toFile;
  static Ping = Ping;
  static Key = Key;
  static Simple = Simple;
  static Search = Search;
  static Coins = Coins;
  static AssetPlatforms = AssetPlatforms;
  static TokenLists = TokenLists;
  static Exchanges = Exchanges;
  static Derivatives = Derivatives;
  static Entities = Entities;
  static PublicTreasury = PublicTreasury;
  static Nfts = Nfts;
  static ExchangeRates = ExchangeRates;
  static News = News;
  static Global = Global;
  static Onchain = Onchain;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;
  private fetchImpl: Fetch;
  private options: ClientOptions;
  protected idempotencyHeader?: string;
  proKeyAuth: string | AuthTokenProvider | undefined;
  demoKeyAuth: string | AuthTokenProvider | undefined;

  ping: Ping;
  key: Key;
  simple: Simple;
  search: Search;
  coins: Coins;
  assetPlatforms: AssetPlatforms;
  tokenLists: TokenLists;
  exchanges: Exchanges;
  derivatives: Derivatives;
  entities: Entities;
  publicTreasury: PublicTreasury;
  nfts: Nfts;
  exchangeRates: ExchangeRates;
  news: News;
  global: Global;
  onchain: Onchain;

  constructor(options: ClientOptions = {}) {
    const baseURL = options.baseURL === undefined ? readEnv("COIN-GECKO_BASE_URL") : options.baseURL;
    const environment = options.environment ?? "production";
    if (baseURL && options.environment) throw new CoinGeckoApiError("Ambiguous URL; The `baseURL` option (or COIN-GECKO_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null");
    this.baseURL = baseURL ?? environments[environment];
    this.timeout = options.timeout ?? 60000;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetchImpl = options.fetch ?? defaultFetch();
    this.fetchOptions = options.fetchOptions;
    this.logger = options.logger ?? console;
    const envLogLevel = readEnv("COIN-GECKO_LOG");
    this.logLevel = options.logLevel === null ? undefined : (options.logLevel ?? (isLogLevel(envLogLevel) ? envLogLevel : 'warn'));
    this.options = { ...options, baseURL, environment };
    this.proKeyAuth = options.proKeyAuth ?? readEnv("PRO_KEY_AUTH");
    this.demoKeyAuth = options.demoKeyAuth ?? readEnv("DEMO_KEY_AUTH");
    this.ping = new Ping(this);
    this.key = new Key(this);
    this.simple = new Simple(this);
    this.search = new Search(this);
    this.coins = new Coins(this);
    this.assetPlatforms = new AssetPlatforms(this);
    this.tokenLists = new TokenLists(this);
    this.exchanges = new Exchanges(this);
    this.derivatives = new Derivatives(this);
    this.entities = new Entities(this);
    this.publicTreasury = new PublicTreasury(this);
    this.nfts = new Nfts(this);
    this.exchangeRates = new ExchangeRates(this);
    this.news = new News(this);
    this.global = new Global(this);
    this.onchain = new Onchain(this);
  }

  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as new (props: ClientOptions) => this)({
      ...this.options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      fetch: this.fetchImpl,
      fetchOptions: this.fetchOptions,
      proKeyAuth: this.proKeyAuth,
      demoKeyAuth: this.demoKeyAuth,
      ...options,
    });
    return client;
  }

  buildURL(path: string, query: object | null | undefined, defaultBaseURL?: string | undefined): string {
    const url = buildUrl(defaultBaseURL ?? this.baseURL, path);
    const pathQuery = Object.fromEntries(url.searchParams);
    const mergedQuery = { ...pathQuery, ...this.options.defaultQuery, ...(query ?? {}) };
    url.search = stringifyQuery(mergedQuery);
    return url.toString();
  }

  request<T>(options: PromiseOrValue<FinalRequestOptions>, remainingRetries: number | null = null): APIPromise<T> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries));
  }

  protected async prepareOptions(_options: FinalRequestOptions): Promise<void> {}

  protected async prepareRequest(_request: RequestInit, _props: { url: string; options: FinalRequestOptions }): Promise<void> {}

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const timeout = options.timeout ?? this.timeout;
    const url = this.buildURL(options.path, { ...await this.authQueryAsync(), ...(options.query ?? {}) }, options.defaultBaseURL);
    const headers = normalizeHeaders(await this.authHeadersAsync(), this.options.defaultHeaders, options.headers);
    appendAuthCookies(headers, await this.authCookiesAsync());
    headers.set("X-Scalar-Retry-Count", String(retryCount));
    headers.set("X-Scalar-Timeout", String(timeout));
    if (this.idempotencyHeader && options.method !== "get" && !headers.has(this.idempotencyHeader)) {
      const idempotencyKey = inputOptions.idempotencyKey ?? createIdempotencyKey();
      inputOptions.idempotencyKey = idempotencyKey;
      headers.set(this.idempotencyHeader, idempotencyKey);
    }
    const body = serializeBody(options.body);
    const req: FinalizedRequestInit = {
      ...(options.signal ? { signal: options.signal } : {}),
      ...(body !== undefined ? { body } : {}),
      ...this.fetchOptions,
      ...options.fetchOptions,
      method: options.method,
      headers,
    };
    return { req, url, timeout };
  }

  private async makeRequest(optionsInput: PromiseOrValue<FinalRequestOptions>, retriesRemaining: number | null = null): Promise<APIResponseProps> {
    const finalOptions: FinalRequestOptions = await optionsInput;
    const maxRetries = finalOptions.maxRetries ?? this.maxRetries;
    retriesRemaining ??= maxRetries;
    await this.prepareOptions(finalOptions);
    const url = this.buildURL(finalOptions.path, { ...await this.authQueryAsync(), ...(finalOptions.query ?? {}) }, finalOptions.defaultBaseURL);
    const headers = normalizeHeaders(await this.authHeadersAsync(), this.options.defaultHeaders, finalOptions.headers);
    appendAuthCookies(headers, await this.authCookiesAsync());
    this.validateAuth(url, headers, finalOptions);
    const retryCount = maxRetries - retriesRemaining;
    headers.set("X-Scalar-Retry-Count", String(retryCount));
    headers.set("X-Scalar-Timeout", String(finalOptions.timeout ?? this.timeout));
    if (this.idempotencyHeader && finalOptions.method !== "get" && !headers.has(this.idempotencyHeader)) {
      const idempotencyKey = finalOptions.idempotencyKey ?? createIdempotencyKey();
      finalOptions.idempotencyKey = idempotencyKey;
      headers.set(this.idempotencyHeader, idempotencyKey);
    }
    const body = serializeBody(finalOptions.body);
    const controller = new AbortController();
    if (finalOptions.signal) finalOptions.signal.addEventListener("abort", () => controller.abort());
    const init: RequestInit = {
      method: finalOptions.method.toUpperCase(),
      headers,
      signal: controller.signal,
      ...this.fetchOptions,
      ...finalOptions.fetchOptions,
    };
    if (body !== undefined) init.body = body;
    await this.prepareRequest(init, { url, options: finalOptions });
    logDebug(this, "request", String(url), finalOptions, headers);
    if (finalOptions.signal?.aborted) throw new APIUserAbortError();
    let response: Response;
    try {
      response = await this.fetchWithTimeout(url, init, finalOptions.timeout ?? this.timeout, controller);
    } catch (error) {
      const cause = castToError(error);
      if (finalOptions.signal?.aborted) throw new APIUserAbortError();
      if (retriesRemaining > 0) return this.retryRequest(finalOptions, retriesRemaining);
      if (isAbortError(cause)) throw new APIConnectionTimeoutError({ message: cause.message });
      throw new APIConnectionError({ message: cause.message, cause });
    }
    if (!response.ok) {
      if (retriesRemaining > 0 && this.shouldRetry(response)) {
        logDebug(this, `response (error; retrying, ${retriesRemaining} attempts remaining)`, response.status, String(url), response.headers);
        return this.retryRequest(finalOptions, retriesRemaining, response.headers);
      }
      const errText = await response.text().catch((err) => castToError(err).message);
      const errJSON = safeJson(errText) as object | undefined;
      const errMessage = errJSON ? undefined : errText;
      logDebug(this, "response (error; (error; not retryable))", response.status, String(url), response.headers, errJSON ?? errMessage);
      throw APIError.generate(response.status, errJSON, errMessage, response.headers);
    }
    return { response, options: finalOptions, controller };
  }

  async fetchWithTimeout(url: RequestInfo, init: RequestInit | undefined, ms: number, controller: AbortController): Promise<Response> {
    const timeout = setTimeout(() => controller.abort(), ms);
    try {
      return await this.fetchImpl(url, init);
    } finally {
      clearTimeout(timeout);
    }
  }

  private shouldRetry(response: Response): boolean {
    const shouldRetryHeader = response.headers.get('x-should-retry');
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;
    if (response.status === 408 || response.status === 409 || response.status === 429) return true;
    return response.status >= 500;
  }

  private async retryRequest(options: FinalRequestOptions, retriesRemaining: number, responseHeaders?: Headers): Promise<APIResponseProps> {
    await sleep(this.retryDelayMillis(options, retriesRemaining, responseHeaders));
    return this.makeRequest(options, retriesRemaining - 1);
  }

  private retryDelayMillis(options: FinalRequestOptions, retriesRemaining: number, responseHeaders?: Headers): number {
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const millis = Number.parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(millis) && millis >= 0 && millis < 60000) return millis;
    }
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader) {
      const seconds = Number.parseFloat(retryAfterHeader);
      const millis = Number.isNaN(seconds) ? Date.parse(retryAfterHeader) - Date.now() : seconds * 1000;
      if (millis >= 0 && millis < 60000) return millis;
    }
    const maxRetries = options.maxRetries ?? this.maxRetries;
    const retryCount = maxRetries - retriesRemaining;
    const delay = Math.min(0.5 * 2 ** retryCount, 8);
    return delay * (1 - Math.random() * 0.25) * 1000;
  }

  get<T>(path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> { return this.methodRequest<T>('get', path, options); }
  post<T>(path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> { return this.methodRequest<T>('post', path, options); }
  put<T>(path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> { return this.methodRequest<T>('put', path, options); }
  patch<T>(path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> { return this.methodRequest<T>('patch', path, options); }
  delete<T>(path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> { return this.methodRequest<T>('delete', path, options); }

  private methodRequest<T>(method: FinalRequestOptions["method"], path: string, options?: PromiseOrValue<RequestOptions>): APIPromise<T> {
    const requestOptions = Promise.resolve(options).then((opts) => ({ ...opts, method, path }));
    return this.request<T>(requestOptions);
  }

  private validateAuth(url: string, headers: Headers, options: FinalRequestOptions): void {
    if (headers.has("x-cg-pro-api-key")) return;
    if (headerExplicitlyOmitted(options.headers, "x-cg-pro-api-key")) return;
    if (headers.has("x-cg-demo-api-key")) return;
    if (headerExplicitlyOmitted(options.headers, "x-cg-demo-api-key")) return;
    throw new AuthenticationError(401, {}, "Could not resolve authentication method. Expected x-cg-pro-api-key or x-cg-demo-api-key to be set.", headers);
  }

  authHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};
    const proKeyAuth = this.resolveAuthOptionSync("proKeyAuth", this.proKeyAuth);
    if (proKeyAuth) headers["x-cg-pro-api-key"] = proKeyAuth;
    const demoKeyAuth = this.resolveAuthOptionSync("demoKeyAuth", this.demoKeyAuth);
    if (demoKeyAuth) headers["x-cg-demo-api-key"] = demoKeyAuth;
    return headers;
  }

  webSocketAuthHeaders(): Record<string, string> {
    const proKeyAuth = this.resolveAuthOptionSync("proKeyAuth", this.proKeyAuth);
    if (proKeyAuth) return { "x-cg-pro-api-key": proKeyAuth };
    return {};
  }

  private async authQueryAsync(): Promise<Record<string, string>> {
    const query: Record<string, string> = {};
    return query;
  }

  private async authCookiesAsync(): Promise<Record<string, string>> {
    const cookies: Record<string, string> = {};
    return cookies;
  }

  private async authHeadersAsync(): Promise<Record<string, string>> {
    const headers: Record<string, string> = {};
    const proKeyAuth = await this.resolveAuthOption("proKeyAuth", this.proKeyAuth);
    if (proKeyAuth) headers["x-cg-pro-api-key"] = proKeyAuth;
    const demoKeyAuth = await this.resolveAuthOption("demoKeyAuth", this.demoKeyAuth);
    if (demoKeyAuth) headers["x-cg-demo-api-key"] = demoKeyAuth;
    return headers;
  }

  private async resolveAuthOption(optionName: string, value: string | AuthTokenProvider | null | undefined): Promise<string | undefined> {
    if (value == null) return undefined;
    const token = typeof value === "function" ? await value() : value;
    if (!token) throw new CoinGeckoApiError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }

  private resolveAuthOptionSync(optionName: string, value: string | AuthTokenProvider | null | undefined): string | undefined {
    if (value == null) return undefined;
    const token = typeof value === "function" ? value() : value;
    if (typeof token !== "string" || !token) throw new CoinGeckoApiError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }
}

export declare namespace CoinGeckoApi {
  export type RequestOptions = import("./internal/request-options").RequestOptions;
  export type PingServer = import("./resources/ping").PingServer;
  export type ApiUsage = import("./resources/key").ApiUsage;
  export type SimplePrice = import("./resources/simple/price").SimplePrice;
  export type PriceGetParams = import("./resources/simple/price").PriceGetParams;
  export type SupportedCurrencies = import("./resources/simple/supported-vs-currencies").SupportedCurrencies;
  export type TokenPriceGetIdParams = import("./resources/simple/token-price").TokenPriceGetIdParams;
  export type SearchSearch = import("./resources/search/search").Search;
  export type SearchGetParams = import("./resources/search/search").SearchGetParams;
  export type TrendingSearch = import("./resources/search/trending").TrendingSearch;
  export type TrendingGetParams = import("./resources/search/trending").TrendingGetParams;
  export type TopGainersLosers = import("./resources/coins/coins").TopGainersLosers;
  export type CoinsId = import("./resources/coins/coins").CoinsId;
  export type CoinGetIdParams = import("./resources/coins/coins").CoinGetIdParams;
  export type TopGainersLosersItem = import("./resources/coins/top-gainers-losers").TopGainersLosersItem;
  export type TopGainersLoserGetParams = import("./resources/coins/top-gainers-losers").TopGainersLoserGetParams;
  export type CoinsMarkets = import("./resources/coins/markets").CoinsMarkets;
  export type MarketGetParams = import("./resources/coins/markets").MarketGetParams;
  export type CoinsIdTickers = import("./resources/coins/tickers").CoinsIdTickers;
  export type TickerGetParams = import("./resources/coins/tickers").TickerGetParams;
  export type CoinsIdHistory = import("./resources/coins/history").CoinsIdHistory;
  export type HistoryGetParams = import("./resources/coins/history").HistoryGetParams;
  export type CoinsMarketChart = import("./resources/coins/market-chart").CoinsMarketChart;
  export type MarketChartGetParams = import("./resources/coins/market-chart").MarketChartGetParams;
  export type MarketChartGetRangeParams = import("./resources/coins/market-chart").MarketChartGetRangeParams;
  export type CoinsOhlc = import("./resources/coins/ohlc").CoinsOhlc;
  export type OhlcGetParams = import("./resources/coins/ohlc").OhlcGetParams;
  export type OhlcGetRangeParams = import("./resources/coins/ohlc").OhlcGetRangeParams;
  export type CoinsContractAddress = import("./resources/coins/contract/contract").CoinsContractAddress;
  export type CirculatingSupplyChart = import("./resources/coins/circulating-supply-chart").CirculatingSupplyChart;
  export type CirculatingSupplyChartGetParams = import("./resources/coins/circulating-supply-chart").CirculatingSupplyChartGetParams;
  export type CirculatingSupplyChartGetRangeParams = import("./resources/coins/circulating-supply-chart").CirculatingSupplyChartGetRangeParams;
  export type TotalSupplyChart = import("./resources/coins/total-supply-chart").TotalSupplyChart;
  export type TotalSupplyChartGetParams = import("./resources/coins/total-supply-chart").TotalSupplyChartGetParams;
  export type TotalSupplyChartGetRangeParams = import("./resources/coins/total-supply-chart").TotalSupplyChartGetRangeParams;
  export type CoinsListNew = import("./resources/coins/list").CoinsListNew;
  export type CoinsList = import("./resources/coins/list").CoinsList;
  export type ListGetParams = import("./resources/coins/list").ListGetParams;
  export type Categories = import("./resources/coins/categories").Categories;
  export type CategoriesList = import("./resources/coins/categories").CategoriesList;
  export type CategoryGetParams = import("./resources/coins/categories").CategoryGetParams;
  export type AssetPlatformAssetPlatforms = import("./resources/asset-platforms").AssetPlatforms;
  export type AssetPlatformGetParams = import("./resources/asset-platforms").AssetPlatformGetParams;
  export type TokenListTokenLists = import("./resources/token-lists").TokenLists;
  export type ExchangeExchanges = import("./resources/exchanges/exchanges").Exchanges;
  export type ExchangesList = import("./resources/exchanges/exchanges").ExchangesList;
  export type ExchangesId = import("./resources/exchanges/exchanges").ExchangesId;
  export type ExchangeGetParams = import("./resources/exchanges/exchanges").ExchangeGetParams;
  export type ExchangeGetListParams = import("./resources/exchanges/exchanges").ExchangeGetListParams;
  export type ExchangeGetIdParams = import("./resources/exchanges/exchanges").ExchangeGetIdParams;
  export type TickerTickerGetParams = import("./resources/exchanges/tickers").TickerGetParams;
  export type ExchangeVolumeChart = import("./resources/exchanges/volume-chart").ExchangeVolumeChart;
  export type VolumeChartGetParams = import("./resources/exchanges/volume-chart").VolumeChartGetParams;
  export type VolumeChartGetRangeParams = import("./resources/exchanges/volume-chart").VolumeChartGetRangeParams;
  export type DerivativesTickers = import("./resources/derivatives/derivatives").DerivativesTickers;
  export type DerivativesExchanges = import("./resources/derivatives/exchanges").DerivativesExchanges;
  export type DerivativesExchangesId = import("./resources/derivatives/exchanges").DerivativesExchangesId;
  export type DerivativesExchangesList = import("./resources/derivatives/exchanges").DerivativesExchangesList;
  export type ExchangeExchangeGetParams = import("./resources/derivatives/exchanges").ExchangeGetParams;
  export type ExchangeExchangeGetIdParams = import("./resources/derivatives/exchanges").ExchangeGetIdParams;
  export type EntitiesList = import("./resources/entities").EntitiesList;
  export type EntityGetListParams = import("./resources/entities").EntityGetListParams;
  export type PublicTreasuryPublicTreasury = import("./resources/public-treasury").PublicTreasury;
  export type PublicTreasuryEntity = import("./resources/public-treasury").PublicTreasuryEntity;
  export type PublicTreasuryEntityChart = import("./resources/public-treasury").PublicTreasuryEntityChart;
  export type PublicTreasuryTransactionHistory = import("./resources/public-treasury").PublicTreasuryTransactionHistory;
  export type PublicTreasuryGetCoinIdParams = import("./resources/public-treasury").PublicTreasuryGetCoinIdParams;
  export type PublicTreasuryGetEntityIdParams = import("./resources/public-treasury").PublicTreasuryGetEntityIdParams;
  export type PublicTreasuryGetHoldingChartParams = import("./resources/public-treasury").PublicTreasuryGetHoldingChartParams;
  export type PublicTreasuryGetTransactionHistoryParams = import("./resources/public-treasury").PublicTreasuryGetTransactionHistoryParams;
  export type NfTsList = import("./resources/nfts/nfts").NfTsList;
  export type NftData = import("./resources/nfts/nfts").NftData;
  export type NfTsMarkets = import("./resources/nfts/nfts").NfTsMarkets;
  export type NftGetListParams = import("./resources/nfts/nfts").NftGetListParams;
  export type NftGetMarketsParams = import("./resources/nfts/nfts").NftGetMarketsParams;
  export type NftMarketChart = import("./resources/nfts/contract/market-chart").NftMarketChart;
  export type MarketChartMarketChartGetParams = import("./resources/nfts/contract/market-chart").MarketChartGetParams;
  export type NftTickers = import("./resources/nfts/tickers").NftTickers;
  export type ExchangeRateExchangeRates = import("./resources/exchange-rates").ExchangeRates;
  export type NewNews = import("./resources/news").News;
  export type NewGetParams = import("./resources/news").NewGetParams;
  export type GlobalGlobal = import("./resources/global/global").Global;
  export type GlobalDeFi = import("./resources/global/decentralized-finance-defi").GlobalDeFi;
  export type GlobalMarketCapChart = import("./resources/global/market-cap-chart").GlobalMarketCapChart;
  export type MarketCapChartGetParams = import("./resources/global/market-cap-chart").MarketCapChartGetParams;
  export type NetworksList = import("./resources/onchain/networks/networks").NetworksList;
  export type NetworkGetParams = import("./resources/onchain/networks/networks").NetworkGetParams;
  export type PoolAddressItem = import("./resources/onchain/networks/pools/pools").PoolAddressItem;
  export type PoolAddressData = import("./resources/onchain/networks/pools/pools").PoolAddressData;
  export type Pool = import("./resources/onchain/networks/pools/pools").Pool;
  export type PoolGetAddressParams = import("./resources/onchain/networks/pools/pools").PoolGetAddressParams;
  export type PoolGetParams = import("./resources/onchain/networks/pools/pools").PoolGetParams;
  export type PoolTokensInfo = import("./resources/onchain/networks/pools/info").PoolTokensInfo;
  export type InfoGetParams = import("./resources/onchain/networks/pools/info").InfoGetParams;
  export type Ohlcv = import("./resources/onchain/networks/pools/ohlcv").Ohlcv;
  export type OhlcvGetTimeframeParams = import("./resources/onchain/networks/pools/ohlcv").OhlcvGetTimeframeParams;
  export type Trades = import("./resources/onchain/networks/pools/trades").Trades;
  export type TradeGetParams = import("./resources/onchain/networks/pools/trades").TradeGetParams;
  export type MultiPoolAddressData = import("./resources/onchain/networks/pools/multi").MultiPoolAddressData;
  export type MultiGetAddressesParams = import("./resources/onchain/networks/pools/multi").MultiGetAddressesParams;
  export type TrendingPoolGetParams = import("./resources/onchain/networks/trending-pools").TrendingPoolGetParams;
  export type TrendingPoolGetNetworkParams = import("./resources/onchain/networks/trending-pools").TrendingPoolGetNetworkParams;
  export type DexesList = import("./resources/onchain/networks/dexes").DexesList;
  export type DexGetPoolsParams = import("./resources/onchain/networks/dexes").DexGetPoolsParams;
  export type DexGetParams = import("./resources/onchain/networks/dexes").DexGetParams;
  export type TokenItem = import("./resources/onchain/networks/tokens/tokens").TokenItem;
  export type TokenData = import("./resources/onchain/networks/tokens/tokens").TokenData;
  export type TokenGetAddressParams = import("./resources/onchain/networks/tokens/tokens").TokenGetAddressParams;
  export type PoolPoolGetParams = import("./resources/onchain/networks/tokens/pools").PoolGetParams;
  export type MultiTokenData = import("./resources/onchain/networks/tokens/multi").MultiTokenData;
  export type MultiMultiGetAddressesParams = import("./resources/onchain/networks/tokens/multi").MultiGetAddressesParams;
  export type TokenInfo = import("./resources/onchain/networks/tokens/info").TokenInfo;
  export type TokenInfoItem = import("./resources/onchain/networks/tokens/info").TokenInfoItem;
  export type TopTokenTraders = import("./resources/onchain/networks/tokens/top-traders").TopTokenTraders;
  export type TopTraderGetParams = import("./resources/onchain/networks/tokens/top-traders").TopTraderGetParams;
  export type TopTokenHolders = import("./resources/onchain/networks/tokens/top-holders").TopTokenHolders;
  export type TopHolderGetParams = import("./resources/onchain/networks/tokens/top-holders").TopHolderGetParams;
  export type TokenHoldersChart = import("./resources/onchain/networks/tokens/holders-chart").TokenHoldersChart;
  export type HoldersChartGetParams = import("./resources/onchain/networks/tokens/holders-chart").HoldersChartGetParams;
  export type OhlcvOhlcvGetTimeframeParams = import("./resources/onchain/networks/tokens/ohlcv").OhlcvGetTimeframeParams;
  export type TokenTrades = import("./resources/onchain/networks/tokens/trades").TokenTrades;
  export type TradeTradeGetParams = import("./resources/onchain/networks/tokens/trades").TradeGetParams;
  export type NewPoolGetParams = import("./resources/onchain/networks/new-pools").NewPoolGetParams;
  export type NewPoolGetNetworkParams = import("./resources/onchain/networks/new-pools").NewPoolGetNetworkParams;
  export type MegafilterGetParams = import("./resources/onchain/pools/megafilter").MegafilterGetParams;
  export type TrendingSearchPools = import("./resources/onchain/pools/trending-search").TrendingSearchPools;
  export type TrendingSearchGetParams = import("./resources/onchain/pools/trending-search").TrendingSearchGetParams;
  export type TokenInfoRecentlyUpdated = import("./resources/onchain/tokens/info-recently-updated").TokenInfoRecentlyUpdated;
  export type InfoRecentlyUpdatedGetParams = import("./resources/onchain/tokens/info-recently-updated").InfoRecentlyUpdatedGetParams;
  export type OnchainCategoriesList = import("./resources/onchain/categories").OnchainCategoriesList;
  export type CategoriesPools = import("./resources/onchain/categories").CategoriesPools;
  export type CategoryCategoryGetParams = import("./resources/onchain/categories").CategoryGetParams;
  export type CategoryGetPoolsParams = import("./resources/onchain/categories").CategoryGetPoolsParams;
  export type PoolSearch = import("./resources/onchain/search/pools").PoolSearch;
  export type PoolPoolGetParams2 = import("./resources/onchain/search/pools").PoolGetParams;
  export type OnchainSimplePrice = import("./resources/onchain/simple/networks/token-price").OnchainSimplePrice;
  export type TokenPriceGetAddressesParams = import("./resources/onchain/simple/networks/token-price").TokenPriceGetAddressesParams;
}


const serializeBody = (body: unknown): BodyInit | undefined => {
  if (body === undefined) return undefined;
  if (typeof body === 'string' || body instanceof Blob || body instanceof FormData || body instanceof URLSearchParams) return body;
  return JSON.stringify(body);
};

const buildUrl = (baseURL: string, path: string): URL => {
  const base = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;
  return new URL(path.replace(/^\/+/, ""), base);
};

const stringifyQuery = (query: object | Record<string, unknown>): string => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) appendQuery(params, key, value);
  const serialized = params.toString();
  return serialized ? `?${serialized}` : "";
};

const appendQuery = (params: URLSearchParams, key: string, value: unknown): void => {
  if (value === undefined) return;
  if (value === null) { params.append(key, ""); return; }
  if (Array.isArray(value)) { for (const item of value) appendQuery(params, key, item); return; }
  if (typeof value === "object") {
    for (const [nestedKey, nestedValue] of Object.entries(value as Record<string, unknown>)) appendQuery(params, `${key}[${nestedKey}]`, nestedValue);
    return;
  }
  params.append(key, String(value));
};

const normalizeHeaders = (...sources: readonly (HeadersLike | undefined)[]): Headers => {
  const headers = new Headers();
  for (const source of sources) {
    if (!source) continue;
    if (Array.isArray(source) || source instanceof Headers) {
      new Headers(source).forEach((value, key) => headers.set(key, value));
      continue;
    }
    for (const [key, value] of Object.entries(source)) {
      if (value === null) headers.delete(key);
      else if (value !== undefined) headers.set(key, String(value));
    }
  }
  return headers;
};

const headerExplicitlyOmitted = (source: HeadersLike | undefined, name: string): boolean => {
  if (!source || Array.isArray(source) || source instanceof Headers) return false;
  const target = name.toLowerCase();
  return Object.entries(source).some(([key, value]) => key.toLowerCase() === target && value === null);
};

const appendAuthCookies = (headers: Headers, cookies: Record<string, string>): void => {
  for (const [name, value] of Object.entries(cookies)) {
    if (cookieHeaderHas(headers.get("Cookie"), name)) continue;
    const cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    const existing = headers.get("Cookie");
    headers.set("Cookie", existing ? existing + "; " + cookie : cookie);
  }
};

const cookieHeaderHas = (value: string | null, name: string): boolean => {
  if (!value) return false;
  const target = encodeURIComponent(name) + "=";
  return value.split(";").some((cookie) => cookie.trim().startsWith(target));
};

const safeJson = (value: string): unknown | undefined => {
  try { return JSON.parse(value); } catch { return undefined; }
};

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const createIdempotencyKey = (): string => "scalar-sdk-" + Date.now() + "-" + Math.random().toString(16).slice(2);

const castToError = (error: unknown): Error => (error instanceof Error ? error : new Error(String(error)));

const isAbortError = (error: Error): boolean => error.name === "AbortError";

const defaultFetch = (): Fetch => {
  const fetchImpl = globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new CoinGeckoApiError('No fetch implementation found; pass `fetch` in client options.');
  }
  return fetchImpl.bind(globalThis) as Fetch;
};

const logDebug = (client: { logger: Logger | undefined; logLevel: LogLevel | undefined }, message: string, ...rest: readonly unknown[]): void => {
  if (client.logLevel === 'debug') client.logger?.debug(message, ...rest);
};
