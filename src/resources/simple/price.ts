// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Price extends APIResource {
  /**
   * To query the prices of one or more coins by using their unique Coin API IDs, symbols, or names
   */
  get(params: PriceGetParams, options?: RequestOptions): APIPromise<SimplePrice> {
    const { vs_currencies, ids, names, symbols, include_tokens, include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at, precision } = params ?? {};
    return this._client.get("/simple/price", { query: { vs_currencies: vs_currencies, ids: ids, names: names, symbols: symbols, include_tokens: include_tokens, include_market_cap: include_market_cap, include_24hr_vol: include_24hr_vol, include_24hr_change: include_24hr_change, include_last_updated_at: include_last_updated_at, precision: precision }, ...options });
  }
}

export type SimplePrice = Record<string, { usd?: number; usd_market_cap?: number; usd_24h_vol?: number; usd_24h_change?: number; last_updated_at?: number }>;

export interface PriceGetParams {
/**
 * Target currency of coins, comma-separated if querying more than 1 currency.
 * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
 */
  vs_currencies: string;

/**
 * Coins' IDs, comma-separated if querying more than 1 coin.
 * *refers to [`/coins/list`](/reference/coins-list)
 */
  ids?: string;

/**
 * Coins' names, comma-separated if querying more than 1 coin.
 */
  names?: string;

/**
 * Coins' symbols, comma-separated if querying more than 1 coin.
 */
  symbols?: string;

/**
 * For `symbols` lookups, specify `all` to include all matching tokens.
 * Default `top` returns top-ranked tokens by market cap or volume.
 */
  include_tokens?: "top" | "all";

/**
 * Include market capitalization.
 * Default: false
 */
  include_market_cap?: boolean;

/**
 * Include 24-hour trading volume.
 * Default: false
 */
  include_24hr_vol?: boolean;

/**
 * Include 24-hour change percentage.
 * Default: false
 */
  include_24hr_change?: boolean;

/**
 * Include last updated price time as a UNIX timestamp.
 * Default: false
 */
  include_last_updated_at?: boolean;

/**
 * Decimal places for currency price value
 */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";

}
export declare namespace Price {
  export { type SimplePrice as SimplePrice, type PriceGetParams as PriceGetParams };
}
export { Price as PriceResource };
