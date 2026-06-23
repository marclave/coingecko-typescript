// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class TopHolders extends APIResource {
  /**
   * To query top token holders based on the provided token contract address on a network
   *
   * @param {string} address - Token contract address.
   * @param {TopHolderGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TopHolderGetResponse>} Top token holders data
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.networks.tokens.topHolders.get("Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump", {
   *   network: "solana",
   * });
   * ```
   */
  get(address: string, params: TopHolderGetParams, options?: RequestOptions): APIPromise<TopHolderGetResponse> {
    const { network, holders, include_pnl_details } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/${address}/top_holders`, { query: { holders: holders, include_pnl_details: include_pnl_details }, ...options });
  }
}

export interface TopHolderGetParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default solana
   */
  network: string;
  /**
   * Query param: Number of top token holders to return, any integer or `max`.
   * Default value: 10
   */
  holders?: string;
  /**
   * Query param: Include PnL details for token holders.
   * Default: `false`
   */
  include_pnl_details?: boolean;
}

export interface TopHolderGetResponse {
  data: TopHolderGetResponse.Data;
}

export namespace TopHolderGetResponse {
  export interface Data {
    /**
     * Token identifier
     */
    id: string;
    /**
     * Resource type
     */
    type: string;
    attributes: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Data last updated timestamp
       */
      last_updated_at: string;
      holders: Array<Attributes.Holder>;
    }

    export namespace Attributes {
      export interface Holder {
        /**
         * Holder rank
         */
        rank: number;
        /**
         * Holder wallet address
         */
        address: string;
        /**
         * Address label
         */
        label: string | null;
        /**
         * Token amount held
         */
        amount: string;
        /**
         * Percentage of total supply held
         */
        percentage: string;
        /**
         * Value of holdings in USD
         */
        value: string;
        /**
         * Average buy price in USD
         */
        average_buy_price_usd?: string | null;
        /**
         * Total number of buy transactions
         */
        total_buy_count?: number | null;
        /**
         * Total number of sell transactions
         */
        total_sell_count?: number | null;
        /**
         * Unrealized PnL in USD
         */
        unrealized_pnl_usd?: string | null;
        /**
         * Unrealized PnL percentage
         */
        unrealized_pnl_percentage?: string | null;
        /**
         * Realized PnL in USD
         */
        realized_pnl_usd?: string | null;
        /**
         * Realized PnL percentage
         */
        realized_pnl_percentage?: string | null;
        /**
         * Block explorer URL for the holder address
         */
        explorer_url?: string;
      }
    }
  }
}
export declare namespace TopHolders {
  export {
    type TopHolderGetResponse as TopHolderGetResponse,
    type TopHolderGetParams as TopHolderGetParams,
  };
}
export { TopHolders as TopHolderResource };
