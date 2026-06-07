// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Simple extends APIResource {
  /**
   * This endpoint allows you to **query the prices of one or more coins by using their unique Coin API IDs, symbols, or names**
   */
  price(params: SimplePriceParams, options?: RequestOptions): APIPromise<SimplePrice> {
    const { vs_currencies, ids, names, symbols, include_tokens, include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at, precision } = params ?? {};
    return this._client.get("/simple/price", { query: { vs_currencies: vs_currencies, ids: ids, names: names, symbols: symbols, include_tokens: include_tokens, include_market_cap: include_market_cap, include_24hr_vol: include_24hr_vol, include_24hr_change: include_24hr_change, include_last_updated_at: include_last_updated_at, precision: precision }, ...options });
  }
  /**
   * This endpoint allows you to **query one or more token prices using their token contract addresses**
   */
  tokenPrice(id: string, params: SimpleTokenPriceParams, options?: RequestOptions): APIPromise<SimpleTokenPrice> {
    const { contract_addresses, vs_currencies, include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at, precision } = params ?? {};
    return this._client.get(__scalarPath`/simple/token_price/${id}`, { query: { contract_addresses: contract_addresses, vs_currencies: vs_currencies, include_market_cap: include_market_cap, include_24hr_vol: include_24hr_vol, include_24hr_change: include_24hr_change, include_last_updated_at: include_last_updated_at, precision: precision }, ...options });
  }
  /**
   * This endpoint allows you to **query all the supported currencies on CoinGecko**
   */
  supportedCurrencies(options?: RequestOptions): APIPromise<CurrencyList> {
    return this._client.get("/simple/supported_vs_currencies", options);
  }
}

export type SimplePrice = Record<string, SimplePriceData>;

export interface SimplePriceData {
  /**
   * price in USD
   */
  usd?: number;
  /**
   * market cap in USD
   */
  usd_market_cap?: number;
  /**
   * 24hr volume in USD
   */
  usd_24h_vol?: number;
  /**
   * 24hr change percentage in USD
   */
  usd_24h_change?: number;
  /**
   * last updated timestamp
   */
  last_updated_at?: number;
}

export interface SimpleTokenPrice {
  /**
   * price in USD
   */
  usd?: number;
  /**
   * market cap in USD
   */
  usd_market_cap?: number;
  /**
   * 24hr volume in USD
   */
  usd_24h_vol?: number;
  /**
   * 24hr change in USD
   */
  usd_24h_change?: number;
  /**
   * last updated timestamp
   */
  last_updated_at?: number;
}

export type CurrencyList = Array<string>;

export interface SimplePriceParams {
/**
 * target currency of coins, comma-separated if querying more than 1 currency.
 *  *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
 */
  vs_currencies: string;

/**
 * coins' IDs, comma-separated if querying more than 1 coin.
 *  *refers to [`/coins/list`](/reference/coins-list).
 */
  ids?: string;

/**
 * coins' names, comma-separated if querying more than 1 coin.
 */
  names?: string;

/**
 * coins' symbols, comma-separated if querying more than 1 coin.
 */
  symbols?: string;

/**
 * for `symbols` lookups, specify `all` to include all matching tokens
 *  Default `top` returns top-ranked tokens (by market cap or volume)
 */
  include_tokens?: "top" | "all";

/**
 * include market capitalization, default: false
 */
  include_market_cap?: boolean;

/**
 * include 24hr volume, default: false
 */
  include_24hr_vol?: boolean;

/**
 * include 24hr change percentage, default: false
 */
  include_24hr_change?: boolean;

/**
 * include last updated price time in UNIX, default: false
 */
  include_last_updated_at?: boolean;

/**
 * decimal place for currency price value
 */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";

}

export interface SimpleTokenPriceParams {
/**
 * the contract addresses of tokens, comma-separated if querying more than 1 token's contract address
 */
  contract_addresses: string;

/**
 * target currency of coins, comma-separated if querying more than 1 currency.
 *  *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
 */
  vs_currencies: string;

/**
 * include market capitalization, default: false
 */
  include_market_cap?: boolean;

/**
 * include 24hr volume, default: false
 */
  include_24hr_vol?: boolean;

/**
 * include 24hr change
 *  default: false
 */
  include_24hr_change?: boolean;

/**
 * include last updated price time in UNIX , default: false
 */
  include_last_updated_at?: boolean;

/**
 * decimal place for currency price value
 */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";

}
export declare namespace Simple {
  export { type SimplePrice as SimplePrice, type SimplePriceData as SimplePriceData, type SimpleTokenPrice as SimpleTokenPrice, type CurrencyList as CurrencyList, type SimplePriceParams as SimplePriceParams, type SimpleTokenPriceParams as SimpleTokenPriceParams };
}
export { Simple as SimpleResource };
