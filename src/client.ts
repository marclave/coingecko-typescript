// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIPromise, type APIResponseProps } from './api-promise';
import { CoingeckoProApiTypescriptError, APIError, APIConnectionError, APIConnectionTimeoutError, APIUserAbortError, NotFoundError, ConflictError, RateLimitError, BadRequestError, AuthenticationError, InternalServerError, PermissionDeniedError, UnprocessableEntityError } from './error';
import { readEnv } from './internal/utils/env';
import type { Fetch, RequestInfo } from './internal/builtin-types';
import type { HeadersLike } from './internal/headers';
import type { FinalRequestOptions, RequestOptions } from './internal/request-options';
import type { FinalizedRequestInit, MergedRequestInit, PromiseOrValue } from './internal/types';
import { toFile } from './uploads';
import { Ping } from "./resources/ping";
import { Key } from "./resources/key";
import { Simple } from "./resources/simple";
import { Search } from "./resources/search";
import { Coins } from "./resources/coins/coins";
import { Contract } from "./resources/contract";
import { AssetPlatforms } from "./resources/asset-platforms";
import { Categories } from "./resources/categories";
import { Exchanges } from "./resources/exchanges/exchanges";
import { Derivatives } from "./resources/derivatives/derivatives";
import { PublicTreasury } from "./resources/public-treasury";
import { NfTsBeta } from "./resources/nf-ts-beta";
import { ExchangeRates } from "./resources/exchange-rates";
import { Trending } from "./resources/trending";
import { News } from "./resources/news";
import { Global } from "./resources/global";

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

export interface ClientOptions {
/**
 * The API key used for authentication.
 */
  apiKeyAuth?: string | AuthTokenProvider | undefined;

/**
 * The API key used for authentication.
 */
  apiKeyQueryParam?: string | AuthTokenProvider | undefined;

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

export type CoingeckoProApiTypescriptOptions = ClientOptions;

/**
 * API Client for interfacing with the CoingeckoProApiTypescript API.
 *
 * @param {string | AuthTokenProvider | undefined} [opts.apiKeyAuth=process.env["API_KEY_AUTH"] ?? undefined]
 * @param {string | AuthTokenProvider | undefined} [opts.apiKeyQueryParam=process.env["API_KEY_QUERY_PARAM"] ?? undefined]
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
export class CoingeckoProApiTypescript {
  static CoingeckoProApiTypescript = this;
  static DEFAULT_TIMEOUT = 60000;
  static CoingeckoProApiTypescriptError = CoingeckoProApiTypescriptError;
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
  static Contract = Contract;
  static AssetPlatforms = AssetPlatforms;
  static Categories = Categories;
  static Exchanges = Exchanges;
  static Derivatives = Derivatives;
  static PublicTreasury = PublicTreasury;
  static NfTsBeta = NfTsBeta;
  static ExchangeRates = ExchangeRates;
  static Trending = Trending;
  static News = News;
  static Global = Global;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;
  private fetchImpl: Fetch;
  private options: ClientOptions;
  protected idempotencyHeader?: string;
  apiKeyAuth: string | AuthTokenProvider | undefined;
  apiKeyQueryParam: string | AuthTokenProvider | undefined;

  ping: Ping;
  key: Key;
  simple: Simple;
  search: Search;
  coins: Coins;
  contract: Contract;
  assetPlatforms: AssetPlatforms;
  categories: Categories;
  exchanges: Exchanges;
  derivatives: Derivatives;
  publicTreasury: PublicTreasury;
  nfTsBeta: NfTsBeta;
  exchangeRates: ExchangeRates;
  trending: Trending;
  news: News;
  global: Global;

  constructor(options: ClientOptions = {}) {
    const baseURL = options.baseURL ?? readEnv("COIN-GECKO_BASE_URL");
    this.baseURL = baseURL ?? "https://pro-api.coingecko.com/api/v3";
    this.timeout = options.timeout ?? 60000;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetchImpl = options.fetch ?? defaultFetch();
    this.fetchOptions = options.fetchOptions;
    this.logger = options.logger ?? console;
    const envLogLevel = readEnv("COIN-GECKO_LOG");
    this.logLevel = options.logLevel === null ? undefined : (options.logLevel ?? (isLogLevel(envLogLevel) ? envLogLevel : 'warn'));
    this.options = options;
    this.apiKeyAuth = options.apiKeyAuth ?? readEnv("API_KEY_AUTH");
    this.apiKeyQueryParam = options.apiKeyQueryParam ?? readEnv("API_KEY_QUERY_PARAM");
    this.ping = new Ping(this);
    this.key = new Key(this);
    this.simple = new Simple(this);
    this.search = new Search(this);
    this.coins = new Coins(this);
    this.contract = new Contract(this);
    this.assetPlatforms = new AssetPlatforms(this);
    this.categories = new Categories(this);
    this.exchanges = new Exchanges(this);
    this.derivatives = new Derivatives(this);
    this.publicTreasury = new PublicTreasury(this);
    this.nfTsBeta = new NfTsBeta(this);
    this.exchangeRates = new ExchangeRates(this);
    this.trending = new Trending(this);
    this.news = new News(this);
    this.global = new Global(this);
  }

  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as new (props: ClientOptions) => this)({
      ...this.options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      fetch: this.fetchImpl,
      fetchOptions: this.fetchOptions,
      apiKeyAuth: this.apiKeyAuth,
      apiKeyQueryParam: this.apiKeyQueryParam,
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
    if (new URL(url).searchParams.has("x_cg_pro_api_key")) return;
    throw new AuthenticationError(401, {}, "Could not resolve authentication method. Expected x-cg-pro-api-key or query x_cg_pro_api_key to be set.", headers);
  }

  authHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};
    const apiKeyAuth = this.resolveAuthOptionSync("apiKeyAuth", this.apiKeyAuth);
    if (apiKeyAuth) headers["x-cg-pro-api-key"] = apiKeyAuth;
    return headers;
  }

  webSocketAuthHeaders(): Record<string, string> {
    const apiKeyAuth = this.resolveAuthOptionSync("apiKeyAuth", this.apiKeyAuth);
    if (apiKeyAuth) return { "x-cg-pro-api-key": apiKeyAuth };
    return {};
  }

  private async authQueryAsync(): Promise<Record<string, string>> {
    const query: Record<string, string> = {};
    const apiKeyQueryParam = await this.resolveAuthOption("apiKeyQueryParam", this.apiKeyQueryParam);
    if (apiKeyQueryParam) query["x_cg_pro_api_key"] = apiKeyQueryParam;
    return query;
  }

  private async authCookiesAsync(): Promise<Record<string, string>> {
    const cookies: Record<string, string> = {};
    return cookies;
  }

  private async authHeadersAsync(): Promise<Record<string, string>> {
    const headers: Record<string, string> = {};
    const apiKeyAuth = await this.resolveAuthOption("apiKeyAuth", this.apiKeyAuth);
    if (apiKeyAuth) headers["x-cg-pro-api-key"] = apiKeyAuth;
    return headers;
  }

  private async resolveAuthOption(optionName: string, value: string | AuthTokenProvider | null | undefined): Promise<string | undefined> {
    if (value == null) return undefined;
    const token = typeof value === "function" ? await value() : value;
    if (!token) throw new CoingeckoProApiTypescriptError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }

  private resolveAuthOptionSync(optionName: string, value: string | AuthTokenProvider | null | undefined): string | undefined {
    if (value == null) return undefined;
    const token = typeof value === "function" ? value() : value;
    if (typeof token !== "string" || !token) throw new CoingeckoProApiTypescriptError(`Expected '${optionName}' to resolve to a non-empty string.`);
    return token;
  }
}

export declare namespace CoingeckoProApiTypescript {
  export type RequestOptions = import("./internal/request-options").RequestOptions;
  export type PingPing = import("./resources/ping").Ping;
  export type KeyKey = import("./resources/key").Key;
  export type SimplePrice = import("./resources/simple").SimplePrice;
  export type SimplePriceData = import("./resources/simple").SimplePriceData;
  export type SimpleTokenPrice = import("./resources/simple").SimpleTokenPrice;
  export type CurrencyList = import("./resources/simple").CurrencyList;
  export type SimplePriceParams = import("./resources/simple").SimplePriceParams;
  export type SimpleTokenPriceParams = import("./resources/simple").SimpleTokenPriceParams;
  export type SearchSearch = import("./resources/search").Search;
  export type SearchDataParams = import("./resources/search").SearchDataParams;
  export type TopGainersLosers = import("./resources/coins/coins").TopGainersLosers;
  export type CoinsMarkets = import("./resources/coins/coins").CoinsMarkets;
  export type CoinsMarketsItem = import("./resources/coins/coins").CoinsMarketsItem;
  export type CoinsId = import("./resources/coins/coins").CoinsId;
  export type DetailPlatformData = import("./resources/coins/coins").DetailPlatformData;
  export type CoinsTickers = import("./resources/coins/coins").CoinsTickers;
  export type CoinsHistoricalData = import("./resources/coins/coins").CoinsHistoricalData;
  export type CoinTopGainersLosersParams = import("./resources/coins/coins").CoinTopGainersLosersParams;
  export type CoinMarketsParams = import("./resources/coins/coins").CoinMarketsParams;
  export type CoinIdParams = import("./resources/coins/coins").CoinIdParams;
  export type CoinIdTickersParams = import("./resources/coins/coins").CoinIdTickersParams;
  export type CoinIdHistoryParams = import("./resources/coins/coins").CoinIdHistoryParams;
  export type CoinsList = import("./resources/coins/list").CoinsList;
  export type CoinsListNew = import("./resources/coins/list").CoinsListNew;
  export type ListCoinsParams = import("./resources/coins/list").ListCoinsParams;
  export type CoinsMarketChart = import("./resources/coins/market-chart").CoinsMarketChart;
  export type CoinsMarketChartRange = import("./resources/coins/market-chart").CoinsMarketChartRange;
  export type MarketChartCoinsIdParams = import("./resources/coins/market-chart").MarketChartCoinsIdParams;
  export type MarketChartCoinsIdRangeParams = import("./resources/coins/market-chart").MarketChartCoinsIdRangeParams;
  export type CoinsOhlc = import("./resources/coins/ohlc").CoinsOhlc;
  export type OhlcCoinsIdParams = import("./resources/coins/ohlc").OhlcCoinsIdParams;
  export type OhlcCoinsIdRangeParams = import("./resources/coins/ohlc").OhlcCoinsIdRangeParams;
  export type CirculatingSupplyChartBase = import("./resources/coins/circulating-supply-chart").CirculatingSupplyChartBase;
  export type CirculatingSupplyChartCoinsIdParams = import("./resources/coins/circulating-supply-chart").CirculatingSupplyChartCoinsIdParams;
  export type CirculatingSupplyChartCoinsIdRangeParams = import("./resources/coins/circulating-supply-chart").CirculatingSupplyChartCoinsIdRangeParams;
  export type TotalSupplyChartBase = import("./resources/coins/total-supply-chart").TotalSupplyChartBase;
  export type TotalSupplyChartCoinsIdParams = import("./resources/coins/total-supply-chart").TotalSupplyChartCoinsIdParams;
  export type TotalSupplyChartCoinsIdRangeParams = import("./resources/coins/total-supply-chart").TotalSupplyChartCoinsIdRangeParams;
  export type CoinsContractAddress = import("./resources/contract").CoinsContractAddress;
  export type ContractAddressMarketChartParams = import("./resources/contract").ContractAddressMarketChartParams;
  export type ContractAddressMarketChartRangeParams = import("./resources/contract").ContractAddressMarketChartRangeParams;
  export type AssetPlatformAssetPlatforms = import("./resources/asset-platforms").AssetPlatforms;
  export type TokenLists = import("./resources/asset-platforms").TokenLists;
  export type AssetPlatformListParams = import("./resources/asset-platforms").AssetPlatformListParams;
  export type CategoryCategories = import("./resources/categories").Categories;
  export type CategoriesList = import("./resources/categories").CategoriesList;
  export type CategoryCoinsParams = import("./resources/categories").CategoryCoinsParams;
  export type ExchangeExchanges = import("./resources/exchanges/exchanges").Exchanges;
  export type ExchangesList = import("./resources/exchanges/exchanges").ExchangesList;
  export type ExchangesListItem = import("./resources/exchanges/exchanges").ExchangesListItem;
  export type ExchangeData = import("./resources/exchanges/exchanges").ExchangeData;
  export type ExchangeTickers = import("./resources/exchanges/exchanges").ExchangeTickers;
  export type ExchangesParams = import("./resources/exchanges/exchanges").ExchangesParams;
  export type ExchangeListParams = import("./resources/exchanges/exchanges").ExchangeListParams;
  export type ExchangeIdParams = import("./resources/exchanges/exchanges").ExchangeIdParams;
  export type ExchangeIdTickersParams = import("./resources/exchanges/exchanges").ExchangeIdTickersParams;
  export type ExchangeVolumeChart = import("./resources/exchanges/volume-chart").ExchangeVolumeChart;
  export type VolumeChartExchangesIdParams = import("./resources/exchanges/volume-chart").VolumeChartExchangesIdParams;
  export type VolumeChartExchangesIdRangeParams = import("./resources/exchanges/volume-chart").VolumeChartExchangesIdRangeParams;
  export type DerivativesTickersList = import("./resources/derivatives/derivatives").DerivativesTickersList;
  export type DerivativesExchanges = import("./resources/derivatives/exchanges").DerivativesExchanges;
  export type DerivativesExchangesId = import("./resources/derivatives/exchanges").DerivativesExchangesId;
  export type DerivativesTickersItems = import("./resources/derivatives/exchanges").DerivativesTickersItems;
  export type DerivativesExchangesList = import("./resources/derivatives/exchanges").DerivativesExchangesList;
  export type ExchangeDerivativesParams = import("./resources/derivatives/exchanges").ExchangeDerivativesParams;
  export type ExchangeDerivativesIdParams = import("./resources/derivatives/exchanges").ExchangeDerivativesIdParams;
  export type PublicTreasuryPublicTreasury = import("./resources/public-treasury").PublicTreasury;
  export type EntitiesList = import("./resources/public-treasury").EntitiesList;
  export type CompaniesTreasury = import("./resources/public-treasury").CompaniesTreasury;
  export type TreasuryEntity = import("./resources/public-treasury").TreasuryEntity;
  export type GovernmentsTreasury = import("./resources/public-treasury").GovernmentsTreasury;
  export type PublicTreasuryEntity = import("./resources/public-treasury").PublicTreasuryEntity;
  export type PublicTreasuryEntityChart = import("./resources/public-treasury").PublicTreasuryEntityChart;
  export type PublicTreasuryTransactionHistory = import("./resources/public-treasury").PublicTreasuryTransactionHistory;
  export type PublicTreasuryEntitiesListParams = import("./resources/public-treasury").PublicTreasuryEntitiesListParams;
  export type PublicTreasuryCompaniesParams = import("./resources/public-treasury").PublicTreasuryCompaniesParams;
  export type PublicTreasuryEntityParams = import("./resources/public-treasury").PublicTreasuryEntityParams;
  export type PublicTreasuryEntityChartParams = import("./resources/public-treasury").PublicTreasuryEntityChartParams;
  export type PublicTreasuryTransactionHistoryParams = import("./resources/public-treasury").PublicTreasuryTransactionHistoryParams;
  export type NftList = import("./resources/nf-ts-beta").NftList;
  export type NftData = import("./resources/nf-ts-beta").NftData;
  export type NfTsMarkets = import("./resources/nf-ts-beta").NfTsMarkets;
  export type NftMarketChart = import("./resources/nf-ts-beta").NftMarketChart;
  export type NftTickers = import("./resources/nf-ts-beta").NftTickers;
  export type NfTsBetaNftsListParams = import("./resources/nf-ts-beta").NfTsBetaNftsListParams;
  export type NfTsBetaNftsMarketsParams = import("./resources/nf-ts-beta").NfTsBetaNftsMarketsParams;
  export type NfTsBetaNftsIdMarketChartParams = import("./resources/nf-ts-beta").NfTsBetaNftsIdMarketChartParams;
  export type NfTsBetaNftsContractAddressMarketChartParams = import("./resources/nf-ts-beta").NfTsBetaNftsContractAddressMarketChartParams;
  export type ExchangeRateExchangeRates = import("./resources/exchange-rates").ExchangeRates;
  export type TrendingSearch = import("./resources/trending").TrendingSearch;
  export type TrendingSearchParams = import("./resources/trending").TrendingSearchParams;
  export type NewNews = import("./resources/news").News;
  export type NewsArticle = import("./resources/news").NewsArticle;
  export type NewsParams = import("./resources/news").NewsParams;
  export type GlobalGlobal = import("./resources/global").Global;
  export type GlobalDeFi = import("./resources/global").GlobalDeFi;
  export type GlobalMarketCapChart = import("./resources/global").GlobalMarketCapChart;
  export type GlobalMarketCapChartParams = import("./resources/global").GlobalMarketCapChartParams;
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
    throw new CoingeckoProApiTypescriptError('No fetch implementation found; pass `fetch` in client options.');
  }
  return fetchImpl.bind(globalThis) as Fetch;
};

const logDebug = (client: { logger: Logger | undefined; logLevel: LogLevel | undefined }, message: string, ...rest: readonly unknown[]): void => {
  if (client.logLevel === 'debug') client.logger?.debug(message, ...rest);
};
