// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class Price extends APIResource {
  /**
   * To query the prices of one or more coins by using their unique Coin API IDs, symbols, or names
   *
   * @param {PriceGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PriceGetResponse>} Coin prices
   *
   * @example
   * ```ts
   * const get_ = await client.simple.price.get({
   *   vs_currencies: "usd",
   *   ids: "bitcoin",
   *   names: "Bitcoin",
   *   symbols: "btc",
   * });
   * ```
   */
  get(params: PriceGetParams, options?: RequestOptions): APIPromise<PriceGetResponse> {
    const { vs_currencies, ids, names, symbols, include_tokens, include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at, precision } = params ?? {};
    return this._client.get("/simple/price", { query: { vs_currencies: vs_currencies, ids: ids, names: names, symbols: symbols, include_tokens: include_tokens, include_market_cap: include_market_cap, include_24hr_vol: include_24hr_vol, include_24hr_change: include_24hr_change, include_last_updated_at: include_last_updated_at, precision: precision }, ...options });
  }
}

export interface PriceGetParams {
  /**
   * Target currency of coins, comma-separated if querying more than 1 currency.
   * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
   * @default usd
   */
  vs_currencies: string;
  /**
   * Coins' IDs, comma-separated if querying more than 1 coin.
   * *refers to [`/coins/list`](/reference/coins-list)
   * @default bitcoin
   */
  ids?: string;
  /**
   * Coins' names, comma-separated if querying more than 1 coin.
   * @default Bitcoin
   */
  names?: string;
  /**
   * Coins' symbols, comma-separated if querying more than 1 coin.
   * @default btc
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

export type PriceGetResponse = Record<string, PriceGetResponse.PriceGetResponseItem>;

export namespace PriceGetResponse {
  export interface PriceGetResponseItem {
    /**
     * Price in the target currency
     */
    usd?: number;
    /**
     * Market capitalization in the target currency
     */
    usd_market_cap?: number;
    /**
     * 24-hour trading volume in the target currency
     */
    usd_24h_vol?: number;
    /**
     * 24-hour price change percentage in the target currency
     */
    usd_24h_change?: number;
    /**
     * Last updated timestamp in UNIX seconds
     */
    last_updated_at?: number;
  }
}
export declare namespace Price {
  export {
    type PriceGetResponse as PriceGetResponse,
    type PriceGetParams as PriceGetParams,
  };
}
export { Price as PriceResource };
