// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Tickers extends APIResource {
  /**
   * To query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID
   */
  get(id: string, params: TickerGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<CoinsIdTickers> {
    const { exchange_ids, include_exchange_logo, page, order, depth, dex_pair_format } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/tickers`, { query: { exchange_ids: exchange_ids, include_exchange_logo: include_exchange_logo, page: page, order: order, depth: depth, dex_pair_format: dex_pair_format }, ...options });
  }
}

export interface CoinsIdTickers {
  /**
   * Coin name
   */
  name: string;
  /**
   * List of tickers
   */
  tickers: Array<{ base: string; target: string; market: { name?: string; identifier?: string; has_trading_incentive?: boolean; logo?: string }; last: number; volume: number; converted_last: { btc?: number; eth?: number; usd?: number }; converted_volume: { btc?: number; eth?: number; usd?: number }; trust_score: string | null; bid_ask_spread_percentage: number; timestamp: string; last_traded_at: string; last_fetch_at: string; is_anomaly: boolean; is_stale: boolean; trade_url: string; token_info_url: string | null; coin_id: string; target_coin_id: string; coin_mcap_usd: number; cost_to_move_up_usd?: number; cost_to_move_down_usd?: number }>;
}

export interface TickerGetParams {
/**
 * Exchange ID.
 * *refers to [`/exchanges/list`](/reference/exchanges-list)
 */
  exchange_ids?: string;

/**
 * Include exchange logo.
 * Default: false
 */
  include_exchange_logo?: boolean;

/**
 * Page through results
 */
  page?: number;

/**
 * Sort the order of responses.
 * Default: trust_score_desc
 */
  order?: "trust_score_desc" | "trust_score_asc" | "volume_desc" | "volume_asc";

/**
 * Include 2% orderbook depth, i.e. `cost_to_move_up_usd` and `cost_to_move_down_usd`.
 * Default: false
 */
  depth?: boolean;

/**
 * Set to `symbol` to display DEX pair base and target as symbols.
 * Default: `contract_address`
 */
  dex_pair_format?: "contract_address" | "symbol";

}
export declare namespace Tickers {
  export { type CoinsIdTickers as CoinsIdTickers, type TickerGetParams as TickerGetParams };
}
export { Tickers as TickerResource };
