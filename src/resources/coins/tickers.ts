// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Tickers extends APIResource {
  /**
   * To query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID
   *
   * @param {string} id - Coin ID.
   * @param {TickerGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TickerGetResponse>} Coin tickers
   *
   * @example
   * ```ts
   * const get_ = await client.coins.tickers.get("bitcoin");
   * ```
   */
  get(id: string, params: TickerGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<TickerGetResponse> {
    const { exchange_ids, include_exchange_logo, page, order, depth, dex_pair_format } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/tickers`, { query: { exchange_ids: exchange_ids, include_exchange_logo: include_exchange_logo, page: page, order: order, depth: depth, dex_pair_format: dex_pair_format }, ...options });
  }
}

export interface TickerGetParams {
  /**
   * Exchange ID.
   * *refers to [`/exchanges/list`](/reference/exchanges-list)
   */
  exchange_ids?: string;
  /**
   * Include exchange logo.
   * Default: false
   */
  include_exchange_logo?: boolean;
  /**
   * Page through results
   */
  page?: number;
  /**
   * Sort the order of responses.
   * Default: trust_score_desc
   */
  order?: "trust_score_desc" | "trust_score_asc" | "volume_desc" | "volume_asc";
  /**
   * Include 2% orderbook depth, i.e. `cost_to_move_up_usd` and `cost_to_move_down_usd`.
   * Default: false
   */
  depth?: boolean;
  /**
   * Set to `symbol` to display DEX pair base and target as symbols.
   * Default: `contract_address`
   */
  dex_pair_format?: "contract_address" | "symbol";
}

export interface TickerGetResponse {
  /**
   * Coin name
   */
  name: string;
  /**
   * List of tickers
   */
  tickers: Array<TickerGetResponse.Ticker>;
}

export namespace TickerGetResponse {
  export interface Ticker {
    /**
     * Ticker base currency
     */
    base: string;
    /**
     * Ticker target currency
     */
    target: string;
    /**
     * Exchange information
     */
    market: Ticker.Market;
    /**
     * Last price
     */
    last: number;
    /**
     * Trading volume
     */
    volume: number;
    /**
     * Converted last price
     */
    converted_last: Ticker.ConvertedLast;
    /**
     * Converted trading volume
     */
    converted_volume: Ticker.ConvertedVolume;
    /**
     * Trust score
     */
    trust_score: string | null;
    /**
     * Bid-ask spread percentage
     */
    bid_ask_spread_percentage: number;
    /**
     * Ticker timestamp
     */
    timestamp: string;
    /**
     * Last traded timestamp
     */
    last_traded_at: string;
    /**
     * Last fetch timestamp
     */
    last_fetch_at: string;
    /**
     * Whether ticker is anomalous
     */
    is_anomaly: boolean;
    /**
     * Whether ticker is stale
     */
    is_stale: boolean;
    /**
     * Trade URL
     */
    trade_url: string;
    /**
     * Token info URL
     */
    token_info_url: string | null;
    /**
     * Base currency coin ID
     */
    coin_id: string;
    /**
     * Target currency coin ID
     */
    target_coin_id: string;
    /**
     * Coin market cap in USD
     */
    coin_mcap_usd: number;
    /**
     * Cost to move price up by 2% in USD
     */
    cost_to_move_up_usd?: number;
    /**
     * Cost to move price down by 2% in USD
     */
    cost_to_move_down_usd?: number;
  }

  export namespace Ticker {
    export interface Market {
      /**
       * Exchange name
       */
      name?: string;
      /**
       * Exchange identifier
       */
      identifier?: string;
      /**
       * Exchange trading incentive
       */
      has_trading_incentive?: boolean;
      /**
       * Exchange logo URL
       */
      logo?: string;
    }

    export interface ConvertedLast {
      btc?: number;
      eth?: number;
      usd?: number;
    }

    export interface ConvertedVolume {
      btc?: number;
      eth?: number;
      usd?: number;
    }
  }
}
export declare namespace Tickers {
  export {
    type TickerGetResponse as TickerGetResponse,
    type TickerGetParams as TickerGetParams,
  };
}
export { Tickers as TickerResource };
