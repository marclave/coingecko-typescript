// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class Trades2 extends APIResource {
  /**
   * To query the last 300 trades in the past 24 hours, across all pools, based on the provided token contract address on a network
   *
   * @param {string} token_address - Token contract address.
   * @param {TradeGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TradeGetResponse>} Last 300 trades in past 24 hours from a token across all pools
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.networks.tokens.trades.get("0xdac17f958d2ee523a2206206994597c13d831ec7", {
   *   network: "eth",
   * });
   * ```
   */
  get(token_address: string, params: TradeGetParams, options?: RequestOptions): APIPromise<TradeGetResponse> {
    const { network, trade_volume_in_usd_greater_than } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/${token_address}/trades`, { query: { trade_volume_in_usd_greater_than: trade_volume_in_usd_greater_than }, ...options });
  }
}

export interface TradeGetParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default eth
   */
  network: string;
  /**
   * Query param: Filter trades by trade volume in USD greater than this value.
   * Default value: 0
   */
  trade_volume_in_usd_greater_than?: number;
}

export interface TradeGetResponse {
  data: Array<TradeGetResponse.Data>;
}

export namespace TradeGetResponse {
  export interface Data {
    /**
     * Trade identifier
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
       * Pool contract address where the trade occurred
       */
      pool_address: string;
      /**
       * DEX identifier of the pool
       */
      pool_dex: string;
      /**
       * Block number of the trade
       */
      block_number: number;
      /**
       * Transaction hash
       */
      tx_hash: string;
      /**
       * Transaction sender address
       */
      tx_from_address: string;
      /**
       * Amount of token sent
       */
      from_token_amount: string;
      /**
       * Amount of token received
       */
      to_token_amount: string;
      /**
       * Price of from-token in currency token
       */
      price_from_in_currency_token: string;
      /**
       * Price of to-token in currency token
       */
      price_to_in_currency_token: string;
      /**
       * Price of from-token in USD
       */
      price_from_in_usd: string;
      /**
       * Price of to-token in USD
       */
      price_to_in_usd: string;
      /**
       * Block timestamp
       */
      block_timestamp: string;
      /**
       * Trade kind (buy or sell)
       */
      kind: string;
      /**
       * Trade volume in USD
       */
      volume_in_usd: string;
      /**
       * From-token contract address
       */
      from_token_address: string;
      /**
       * To-token contract address
       */
      to_token_address: string;
    }
  }
}
export declare namespace Trades2 {
  export {
    type TradeGetResponse as TradeGetResponse,
    type TradeGetParams as TradeGetParams,
  };
}
export { Trades2 as TradeResource };
