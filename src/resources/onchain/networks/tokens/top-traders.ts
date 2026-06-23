// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class TopTraders extends APIResource {
  /**
   * To query top token traders based on the provided token contract address on a network
   *
   * @param {string} token_address - Token contract address.
   * @param {TopTraderGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TopTraderGetResponse>} Top token traders data
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.networks.tokens.topTraders.get("Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump", {
   *   network_id: "solana",
   * });
   * ```
   */
  get(token_address: string, params: TopTraderGetParams, options?: RequestOptions): APIPromise<TopTraderGetResponse> {
    const { network_id, traders, sort, include_address_label } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network_id}/tokens/${token_address}/top_traders`, { query: { traders: traders, sort: sort, include_address_label: include_address_label }, ...options });
  }
}

export interface TopTraderGetParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default solana
   */
  network_id: string;
  /**
   * Query param: Number of top token traders to return, any integer or `max`.
   * Default value: 10
   */
  traders?: string;
  /**
   * Query param: Sort the traders by field.
   * Default: `realized_pnl_usd_desc`
   */
  sort?: "realized_pnl_usd_desc" | "unrealized_pnl_usd_desc" | "total_buy_usd_desc" | "total_sell_usd_desc";
  /**
   * Query param: Include address label data.
   * Default: `false`
   */
  include_address_label?: boolean;
}

export interface TopTraderGetResponse {
  data: TopTraderGetResponse.Data;
}

export namespace TopTraderGetResponse {
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
      traders: Array<Attributes.Trader>;
    }

    export namespace Attributes {
      export interface Trader {
        /**
         * Trader wallet address
         */
        address: string;
        /**
         * Realized PnL in USD
         */
        realized_pnl_usd: string;
        /**
         * Unrealized PnL in USD
         */
        unrealized_pnl_usd: string | null;
        /**
         * Current token balance
         */
        token_balance: string | null;
        /**
         * Average buy price in USD
         */
        average_buy_price_usd: string;
        /**
         * Average sell price in USD
         */
        average_sell_price_usd: string;
        /**
         * Total number of buy transactions
         */
        total_buy_count: number;
        /**
         * Total number of sell transactions
         */
        total_sell_count: number;
        /**
         * Total buy token amount
         */
        total_buy_token_amount: string;
        /**
         * Total sell token amount
         */
        total_sell_token_amount: string;
        /**
         * Total buy amount in USD
         */
        total_buy_usd: string;
        /**
         * Total sell amount in USD
         */
        total_sell_usd: string;
        /**
         * Block explorer URL for the trader address
         */
        explorer_url: string;
        /**
         * Address label name
         */
        name?: string | null;
        /**
         * Address label
         */
        label?: string | null;
        /**
         * Address type
         */
        type?: string | null;
      }
    }
  }
}
export declare namespace TopTraders {
  export {
    type TopTraderGetResponse as TopTraderGetResponse,
    type TopTraderGetParams as TopTraderGetParams,
  };
}
export { TopTraders as TopTraderResource };
