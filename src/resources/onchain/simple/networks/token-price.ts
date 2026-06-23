// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class TokenPrice2 extends APIResource {
  /**
   * To get token price based on the provided token contract address on a network
   *
   * @param {string} addresses - Token contract address, comma-separated if more than one token contract address.
   * @param {TokenPriceGetAddressesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TokenPriceGetAddressesResponse>} Token price data
   *
   * @example
   * ```ts
   * const getAddresses = await client.onchain.simple.networks.tokenPrice.getAddresses("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", {
   *   network: "eth",
   * });
   * ```
   */
  getAddresses(addresses: string, params: TokenPriceGetAddressesParams, options?: RequestOptions): APIPromise<TokenPriceGetAddressesResponse> {
    const { network, include_market_cap, mcap_fdv_fallback, include_24hr_vol, include_24hr_price_change, include_total_reserve_in_usd, include_inactive_source } = params ?? {};
    return this._client.get(__scalarPath`/onchain/simple/networks/${network}/token_price/${addresses}`, { query: { include_market_cap: include_market_cap, mcap_fdv_fallback: mcap_fdv_fallback, include_24hr_vol: include_24hr_vol, include_24hr_price_change: include_24hr_price_change, include_total_reserve_in_usd: include_total_reserve_in_usd, include_inactive_source: include_inactive_source }, ...options });
  }
}

export interface TokenPriceGetAddressesParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default eth
   */
  network: string;
  /**
   * Query param: Include market capitalization.
   * Default: `false`
   */
  include_market_cap?: boolean;
  /**
   * Query param: Return FDV if market cap is not available.
   * Default: `false`
   */
  mcap_fdv_fallback?: boolean;
  /**
   * Query param: Include 24hr volume.
   * Default: `false`
   */
  include_24hr_vol?: boolean;
  /**
   * Query param: Include 24hr price change.
   * Default: `false`
   */
  include_24hr_price_change?: boolean;
  /**
   * Query param: Include total reserve in USD.
   * Default: `false`
   */
  include_total_reserve_in_usd?: boolean;
  /**
   * Query param: Include token price data from inactive pools using the most recent swap.
   * Default: `false`
   */
  include_inactive_source?: boolean;
}

export interface TokenPriceGetAddressesResponse {
  data: TokenPriceGetAddressesResponse.Data;
}

export namespace TokenPriceGetAddressesResponse {
  export interface Data {
    /**
     * Request ID
     */
    id: string;
    /**
     * Response type
     */
    type: string;
    attributes: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Token prices keyed by contract address
       */
      token_prices: Record<string, string>;
      /**
       * Market cap in USD keyed by contract address
       */
      market_cap_usd?: Record<string, string>;
      /**
       * 24hr volume in USD keyed by contract address
       */
      h24_volume_usd?: Record<string, string>;
      /**
       * 24hr price change percentage keyed by contract address
       */
      h24_price_change_percentage?: Record<string, string>;
      /**
       * Total reserve in USD keyed by contract address
       */
      total_reserve_in_usd?: Record<string, string>;
      /**
       * Last trade timestamp keyed by contract address
       */
      last_trade_timestamp?: Record<string, string>;
    }
  }
}
export declare namespace TokenPrice2 {
  export {
    type TokenPriceGetAddressesResponse as TokenPriceGetAddressesResponse,
    type TokenPriceGetAddressesParams as TokenPriceGetAddressesParams,
  };
}
export { TokenPrice2 as TokenPriceResource };
