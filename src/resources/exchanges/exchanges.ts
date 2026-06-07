// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import { VolumeChart } from "./volume-chart";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Exchanges extends APIResource {
  volumeChart: VolumeChart = new VolumeChart(this._client);

  /**
   * This endpoint allows you to **query all the supported exchanges with exchanges' data (ID, name, country, ...) that have active trading volumes on CoinGecko**
   */
  exchanges(params: ExchangesParams | null | undefined = {}, options?: RequestOptions): APIPromise<Exchanges> {
    const { per_page, page } = params ?? {};
    return this._client.get("/exchanges", { query: { per_page: per_page, page: page }, ...options });
  }
  /**
   * This endpoint allows you to **query all the exchanges with ID and name**
   */
  list(params: ExchangeListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ExchangesList> {
    const { status } = params ?? {};
    return this._client.get("/exchanges/list", { query: { status: status }, ...options });
  }
  /**
   * This endpoint allows you to **query exchange's data (name, year established, country, ...), exchange volume in BTC and top 100 tickers based on exchange's ID**
   */
  id(id: string, params: ExchangeIdParams | null | undefined = {}, options?: RequestOptions): APIPromise<ExchangeData> {
    const { dex_pair_format } = params ?? {};
    return this._client.get(__scalarPath`/exchanges/${id}`, { query: { dex_pair_format: dex_pair_format }, ...options });
  }
  /**
   * This endpoint allows you to **query exchange's tickers based on exchange's ID**
   */
  idTickers(id: string, params: ExchangeIdTickersParams | null | undefined = {}, options?: RequestOptions): APIPromise<ExchangeTickers> {
    const { coin_ids, include_exchange_logo, page, depth, order, dex_pair_format } = params ?? {};
    return this._client.get(__scalarPath`/exchanges/${id}/tickers`, { query: { coin_ids: coin_ids, include_exchange_logo: include_exchange_logo, page: page, depth: depth, order: order, dex_pair_format: dex_pair_format }, ...options });
  }
}

export interface Exchanges {
  /**
   * exchange ID
   */
  id?: string;
  /**
   * exchange name
   */
  name?: string;
  /**
   * exchange established year
   */
  year_established?: number | null;
  /**
   * exchange country
   */
  country?: string | null;
  /**
   * exchange description
   */
  description?: string;
  /**
   * exchange website URL
   */
  url?: string;
  /**
   * exchange image URL
   */
  image?: string;
  /**
   * exchange trading incentive
   */
  has_trading_incentive?: boolean | null;
  /**
   * exchange trust score
   */
  trust_score?: number;
  /**
   * exchange trust score rank
   */
  trust_score_rank?: number;
  /**
   * exchange trade volume in BTC in 24 hours
   */
  trade_volume_24h_btc?: number;
}

export type ExchangesList = Array<ExchangesListItem>;

export interface ExchangesListItem {
  /**
   * exchange ID
   */
  id?: string;
  /**
   * exchange name
   */
  name?: string;
}

export interface ExchangeData {
  /**
   * exchange name
   */
  name?: string;
  /**
   * exchange established year
   */
  year_established?: number | null;
  /**
   * exchange incorporated country
   */
  country?: string | null;
  /**
   * exchange description
   */
  description?: string;
  /**
   * exchange website url
   */
  url?: string;
  /**
   * exchange image url
   */
  image?: string;
  /**
   * exchange facebook url
   */
  facebook_url?: string | null;
  /**
   * exchange reddit url
   */
  reddit_url?: string | null;
  /**
   * exchange telegram url
   */
  telegram_url?: string | null;
  /**
   * exchange slack url
   */
  slack_url?: string | null;
  other_url_1?: string | null;
  other_url_2?: string | null;
  /**
   * exchange twitter handle
   */
  twitter_handle?: string | null;
  /**
   * exchange trading incentive
   */
  has_trading_incentive?: boolean | null;
  /**
   * exchange type (true for centralized, false for decentralized)
   */
  centralized?: boolean;
  /**
   * public notice for exchange
   */
  public_notice?: string | null;
  /**
   * alert notice for exchange
   */
  alert_notice?: string | null;
  /**
   * exchange trust score
   */
  trust_score?: number;
  /**
   * exchange trust score rank
   */
  trust_score_rank?: number;
  /**
   * number of coins listed on the exchange
   */
  coins?: number;
  /**
   * number of trading pairs on the exchange
   */
  pairs?: number;
  trade_volume_24h_btc?: number;
  tickers?: Array<{ name?: string; tickers?: Array<{ base?: string; target?: string; market?: { name?: string; identifier?: string; has_trading_incentive?: boolean; logo?: string }; last?: number; volume?: number; cost_to_move_up_usd?: number; cost_to_move_down_usd?: number; converted_last?: { btc?: number; eth?: number; usd?: number }; converted_volume?: { btc?: number; eth?: number; usd?: number }; trust_score?: string | null; bid_ask_spread_percentage?: number; timestamp?: string; last_traded_at?: string; last_fetch_at?: string; is_anomaly?: boolean; is_stale?: boolean; trade_url?: string; token_info_url?: string | null; coin_id?: string; target_coin_id?: string; coin_mcap_usd?: number }> }>;
  /**
   * exchange status updates
   */
  status_updates?: Array<{ description?: string; category?: string; created_at?: string; user?: string; user_title?: string; pin?: boolean; project?: { type?: string; id?: string; name?: string; image?: { thumb?: string; small?: string; large?: string } } }>;
}

export interface ExchangeTickers {
  /**
   * coin name
   */
  name?: string;
  /**
   * list of tickers
   */
  tickers?: Array<{ base?: string; target?: string; market?: { name?: string; identifier?: string; has_trading_incentive?: boolean; logo?: string }; last?: number; volume?: number; cost_to_move_up_usd?: number; cost_to_move_down_usd?: number; converted_last?: { btc?: number; eth?: number; usd?: number }; converted_volume?: { btc?: number; eth?: number; usd?: number }; trust_score?: string | null; bid_ask_spread_percentage?: number; timestamp?: string; last_traded_at?: string; last_fetch_at?: string; is_anomaly?: boolean; is_stale?: boolean; trade_url?: string; token_info_url?: string | null; coin_id?: string; target_coin_id?: string; coin_mcap_usd?: number }>;
}

export interface ExchangesParams {
/**
 * total results per page, default: 100
 *  Valid values: 1...250
 */
  per_page?: number;

/**
 * page through results, default: 1
 */
  page?: number;

}

export interface ExchangeListParams {
/**
 * filter by status of exchanges, default: active
 */
  status?: "active" | "inactive";

}

export interface ExchangeIdParams {
/**
 * set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`
 */
  dex_pair_format?: "contract_address" | "symbol";

}

export interface ExchangeIdTickersParams {
/**
 * filter tickers by coin IDs, comma-separated if querying more than 1 coin
 *  *refers to [`/coins/list`](/reference/coins-list).
 */
  coin_ids?: string;

/**
 * include exchange logo, default: false
 */
  include_exchange_logo?: boolean;

/**
 * page through results
 */
  page?: number;

/**
 * include 2% orderbook depth (Example: cost_to_move_up_usd & cost_to_move_down_usd),default: false
 */
  depth?: boolean;

/**
 * use this to sort the order of responses, default: trust_score_desc
 */
  order?: "market_cap_asc" | "market_cap_desc" | "trust_score_desc" | "trust_score_asc" | "volume_desc" | "volume_asc" | "base_target";

/**
 * set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`
 */
  dex_pair_format?: "contract_address" | "symbol";

}
export declare namespace Exchanges {
  export { VolumeChart as VolumeChart };
  export { type Exchanges as Exchanges, type ExchangesList as ExchangesList, type ExchangesListItem as ExchangesListItem, type ExchangeData as ExchangeData, type ExchangeTickers as ExchangeTickers, type ExchangesParams as ExchangesParams, type ExchangeListParams as ExchangeListParams, type ExchangeIdParams as ExchangeIdParams, type ExchangeIdTickersParams as ExchangeIdTickersParams };
}
export { Exchanges as ExchangeResource };
