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

export class TokenPrice extends APIResource {
  /**
   * To query one or more token prices by using their token contract addresses
   */
  getId(id: string, params: TokenPriceGetIdParams, options?: RequestOptions): APIPromise<SimplePrice> {
    const { contract_addresses, vs_currencies, include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at, precision } = params ?? {};
    return this._client.get(__scalarPath`/simple/token_price/${id}`, { query: { contract_addresses: contract_addresses, vs_currencies: vs_currencies, include_market_cap: include_market_cap, include_24hr_vol: include_24hr_vol, include_24hr_change: include_24hr_change, include_last_updated_at: include_last_updated_at, precision: precision }, ...options });
  }
}

export type SimplePrice = Record<string, { usd?: number; usd_market_cap?: number; usd_24h_vol?: number; usd_24h_change?: number; last_updated_at?: number }>;

export interface TokenPriceGetIdParams {
/**
 * Token contract addresses, comma-separated if querying more than 1 token
 */
  contract_addresses: string;

/**
 * Target currency of coins, comma-separated if querying more than 1 currency.
 * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
 */
  vs_currencies: string;

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
export declare namespace TokenPrice {
  export { type SimplePrice as SimplePrice, type TokenPriceGetIdParams as TokenPriceGetIdParams };
}
export { TokenPrice as TokenPriceResource };
