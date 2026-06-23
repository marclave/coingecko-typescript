// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class TokenPrice extends APIResource {
  /**
   * To query one or more token prices by using their token contract addresses
   *
   * @param {string} id - Asset platform's ID.
   * @param {TokenPriceGetIDParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TokenPriceGetIDResponse>} Token prices
   *
   * @example
   * ```ts
   * const getID = await client.simple.tokenPrice.getID("ethereum", {
   *   contract_addresses: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
   *   vs_currencies: "usd",
   * });
   * ```
   */
  getID(id: string, params: TokenPriceGetIDParams, options?: RequestOptions): APIPromise<TokenPriceGetIDResponse> {
    const { contract_addresses, vs_currencies, include_market_cap, include_24hr_vol, include_24hr_change, include_last_updated_at, precision } = params ?? {};
    return this._client.get(__scalarPath`/simple/token_price/${id}`, { query: { contract_addresses: contract_addresses, vs_currencies: vs_currencies, include_market_cap: include_market_cap, include_24hr_vol: include_24hr_vol, include_24hr_change: include_24hr_change, include_last_updated_at: include_last_updated_at, precision: precision }, ...options });
  }
}

export interface TokenPriceGetIDParams {
  /**
   * Token contract addresses, comma-separated if querying more than 1 token
   * @default 0x2260fac5e5542a773aa44fbcfedf7c193bc2c599
   */
  contract_addresses: string;
  /**
   * Target currency of coins, comma-separated if querying more than 1 currency.
   * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
   * @default usd
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

export type TokenPriceGetIDResponse = Record<string, TokenPriceGetIDResponse.TokenPriceGetIDResponseItem>;

export namespace TokenPriceGetIDResponse {
  export interface TokenPriceGetIDResponseItem {
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
export declare namespace TokenPrice {
  export {
    type TokenPriceGetIDResponse as TokenPriceGetIDResponse,
    type TokenPriceGetIDParams as TokenPriceGetIDParams,
  };
}
export { TokenPrice as TokenPriceResource };
