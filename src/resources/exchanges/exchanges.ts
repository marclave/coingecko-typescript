// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import { Tickers } from "./tickers";
import { VolumeChart } from "./volume-chart";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Exchanges extends APIResource {
  tickers: Tickers = new Tickers(this._client);
  volumeChart: VolumeChart = new VolumeChart(this._client);

  /**
   * To query all the supported exchanges with exchanges' data (ID, name, country, etc.) that have active trading volumes on CoinGecko
   */
  get(params: ExchangeGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Exchanges2> {
    const { per_page, page } = params ?? {};
    return this._client.get("/exchanges", { query: { per_page: per_page, page: page }, ...options });
  }
  /**
   * To query all the supported exchanges with ID and name
   */
  getList(params: ExchangeGetListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ExchangesList> {
    const { status } = params ?? {};
    return this._client.get("/exchanges/list", { query: { status: status }, ...options });
  }
  /**
   * To query exchange's data (name, year established, country, etc.), exchange volume in BTC and top 100 tickers based on exchange's ID
   */
  getId(id: string, params: ExchangeGetIdParams | null | undefined = {}, options?: RequestOptions): APIPromise<ExchangesId> {
    const { dex_pair_format } = params ?? {};
    return this._client.get(__scalarPath`/exchanges/${id}`, { query: { dex_pair_format: dex_pair_format }, ...options });
  }
}

export type Exchanges2 = Array<{ id: string; name: string; year_established: number | null; country: string | null; description: string; url: string; image: string; has_trading_incentive: boolean; trust_score: number | null; trust_score_rank: number | null; trade_volume_24h_btc: number }>;

export type ExchangesList = Array<{ id: string; name: string }>;

export interface ExchangesId {
  /**
   * Exchange name
   */
  name: string;
  /**
   * Year the exchange was established
   */
  year_established: number | null;
  /**
   * Country where the exchange is based
   */
  country: string | null;
  /**
   * Exchange description
   */
  description: string;
  /**
   * Exchange website URL
   */
  url: string;
  /**
   * Exchange logo URL
   */
  image: string;
  /**
   * Facebook URL
   */
  facebook_url: string;
  /**
   * Reddit URL
   */
  reddit_url: string;
  /**
   * Telegram URL
   */
  telegram_url: string;
  /**
   * Slack URL
   */
  slack_url: string;
  /**
   * Other URL 1
   */
  other_url_1: string;
  /**
   * Other URL 2
   */
  other_url_2: string;
  /**
   * Twitter handle
   */
  twitter_handle: string;
  /**
   * Whether the exchange has trading incentive
   */
  has_trading_incentive: boolean;
  /**
   * Whether the exchange is centralized
   */
  centralized: boolean;
  /**
   * Public notice
   */
  public_notice: string;
  /**
   * Alert notice
   */
  alert_notice: string;
  /**
   * Exchange trust score
   */
  trust_score: number | null;
  /**
   * Exchange trust score rank
   */
  trust_score_rank: number | null;
  /**
   * Number of coins listed
   */
  coins: number;
  /**
   * Number of trading pairs
   */
  pairs: number;
  /**
   * Exchange 24h trading volume in BTC
   */
  trade_volume_24h_btc: number;
  /**
   * Exchange tickers
   */
  tickers: Array<{ base?: string; target?: string; market?: { name?: string; identifier?: string; has_trading_incentive?: boolean }; last?: number; volume?: number; converted_last?: { btc?: number; eth?: number; usd?: number }; converted_volume?: { btc?: number; eth?: number; usd?: number }; trust_score?: string | null; bid_ask_spread_percentage?: number; timestamp?: string; last_traded_at?: string; last_fetch_at?: string; is_anomaly?: boolean; is_stale?: boolean; trade_url?: string; token_info_url?: string | null; coin_id?: string; target_coin_id?: string; coin_mcap_usd?: number }>;
  /**
   * Status updates
   */
  status_updates: Array<{ description?: string; category?: string; created_at?: string; user?: string; user_title?: string; pin?: boolean; project?: { type?: string; id?: string; name?: string; image?: { thumb?: string; small?: string; large?: string } } }>;
}

export interface ExchangeGetParams {
/**
 * Total results per page.
 * Default: 100.
 * Valid values: 1...250
 */
  per_page?: number;

/**
 * Page through results.
 * Default: 1
 */
  page?: number;

}

export interface ExchangeGetListParams {
/**
 * Filter by status of exchanges.
 * Default: `active`
 */
  status?: "active" | "inactive";

}

export interface ExchangeGetIdParams {
/**
 * Set to `symbol` to display DEX pair base and target as symbols.
 * Default: `contract_address`
 */
  dex_pair_format?: "contract_address" | "symbol";

}
export declare namespace Exchanges {
  export { Tickers as Tickers, VolumeChart as VolumeChart };
  export { type Exchanges2 as Exchanges, type ExchangesList as ExchangesList, type ExchangesId as ExchangesId, type ExchangeGetParams as ExchangeGetParams, type ExchangeGetListParams as ExchangeGetListParams, type ExchangeGetIdParams as ExchangeGetIdParams };
}
export { Exchanges as ExchangeResource };
