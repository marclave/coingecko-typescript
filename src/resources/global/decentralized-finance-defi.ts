// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class DecentralizedFinanceDefi extends APIResource {
  /**
   * To query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DecentralizedFinanceDefiGetResponse>} Global decentralized finance (DeFi) market data
   *
   * @example
   * ```ts
   * const get_ = await client.global.decentralizedFinanceDefi.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<DecentralizedFinanceDefiGetResponse> {
    return this._client.get("/global/decentralized_finance_defi", options);
  }
}

export interface DecentralizedFinanceDefiGetResponse {
  data: DecentralizedFinanceDefiGetResponse.Data;
}

export namespace DecentralizedFinanceDefiGetResponse {
  export interface Data {
    /**
     * DeFi market cap
     */
    defi_market_cap: string;
    /**
     * ETH market cap
     */
    eth_market_cap: string;
    /**
     * DeFi to ETH ratio
     */
    defi_to_eth_ratio: string;
    /**
     * DeFi trading volume in 24 hours
     */
    trading_volume_24h: string;
    /**
     * DeFi dominance percentage
     */
    defi_dominance: string;
    /**
     * DeFi top coin name
     */
    top_coin_name: string;
    /**
     * DeFi top coin dominance percentage
     */
    top_coin_defi_dominance: number;
  }
}
export declare namespace DecentralizedFinanceDefi {
  export {
    type DecentralizedFinanceDefiGetResponse as DecentralizedFinanceDefiGetResponse,
  };
}
export { DecentralizedFinanceDefi as DecentralizedFinanceDefiResource };
