// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Exchanges extends APIResource {
  /**
   * To query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko
   *
   * @param {ExchangeGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ExchangeGetResponse>} List of derivative exchanges with data
   *
   * @example
   * ```ts
   * const get_ = await client.derivatives.exchanges.get();
   * ```
   */
  get(params: ExchangeGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<ExchangeGetResponse> {
    const { order, per_page, page } = params ?? {};
    return this._client.get("/derivatives/exchanges", { query: { order: order, per_page: per_page, page: page }, ...options });
  }

  /**
   * To query the derivatives exchange's related data (name, open interest, trade volume, ...) based on the exchange's ID
   *
   * @param {string} id - Derivative exchange ID.
   * @param {ExchangeGetIDParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ExchangeGetIDResponse>} Derivative exchange data
   *
   * @example
   * ```ts
   * const getID = await client.derivatives.exchanges.getID("binance_futures");
   * ```
   */
  getID(id: string, params: ExchangeGetIDParams | null | undefined = {}, options?: RequestOptions): APIPromise<ExchangeGetIDResponse> {
    const { include_tickers } = params ?? {};
    return this._client.get(__scalarPath`/derivatives/exchanges/${id}`, { query: { include_tickers: include_tickers }, ...options });
  }

  /**
   * To query all the supported derivatives exchanges with ID and name on CoinGecko
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ExchangeGetListResponse>} List of derivative exchange identifiers and names
   *
   * @example
   * ```ts
   * const getList = await client.derivatives.exchanges.getList();
   * ```
   */
  getList(options?: RequestOptions): APIPromise<ExchangeGetListResponse> {
    return this._client.get("/derivatives/exchanges/list", options);
  }
}

export interface ExchangeGetParams {
  /**
   * Sort order of responses.
   * Default: `open_interest_btc_desc`
   */
  order?: "name_asc" | "name_desc" | "open_interest_btc_asc" | "open_interest_btc_desc" | "trade_volume_24h_btc_asc" | "trade_volume_24h_btc_desc";
  /**
   * Total results per page.
   */
  per_page?: number;
  /**
   * Page through results.
   * Default value: 1
   */
  page?: number;
}

export type ExchangeGetResponse = Array<ExchangeGetResponse.ExchangeGetResponseItem>;

export namespace ExchangeGetResponse {
  export interface ExchangeGetResponseItem {
    /**
     * Derivatives exchange name
     */
    name: string;
    /**
     * Derivatives exchange ID
     */
    id: string;
    /**
     * Derivatives exchange open interest in BTC
     */
    open_interest_btc: number;
    /**
     * Derivatives exchange trade volume in BTC in 24 hours
     */
    trade_volume_24h_btc: string;
    /**
     * Number of perpetual pairs in the derivatives exchange
     */
    number_of_perpetual_pairs: number;
    /**
     * Number of futures pairs in the derivatives exchange
     */
    number_of_futures_pairs: number;
    /**
     * Derivatives exchange image URL
     */
    image: string;
    /**
     * Derivatives exchange established year
     */
    year_established: number | null;
    /**
     * Derivatives exchange incorporated country
     */
    country: string | null;
    /**
     * Derivatives exchange description
     */
    description: string;
    /**
     * Derivatives exchange website URL
     */
    url: string;
  }
}

export interface ExchangeGetIDParams {
  /**
   * Include tickers data.
   * Default: tickers data is not included.
   */
  include_tickers?: "all" | "unexpired";
}

export interface ExchangeGetIDResponse {
  /**
   * Derivatives exchange name
   */
  name: string;
  /**
   * Derivatives exchange open interest in BTC
   */
  open_interest_btc: number | null;
  /**
   * Derivatives exchange trade volume in BTC in 24 hours
   */
  trade_volume_24h_btc: string;
  /**
   * Number of perpetual pairs in the derivatives exchange
   */
  number_of_perpetual_pairs: number;
  /**
   * Number of futures pairs in the derivatives exchange
   */
  number_of_futures_pairs: number;
  /**
   * Derivatives exchange image URL
   */
  image: string;
  /**
   * Derivatives exchange established year
   */
  year_established: number | null;
  /**
   * Derivatives exchange incorporated country
   */
  country: string | null;
  /**
   * Derivatives exchange description
   */
  description: string;
  /**
   * Derivatives exchange website URL
   */
  url: string;
  /**
   * Derivative tickers data, available when include_tickers is specified
   */
  tickers?: Array<ExchangeGetIDResponse.Ticker>;
}

export namespace ExchangeGetIDResponse {
  export interface Ticker {
    /**
     * Derivative ticker symbol
     */
    symbol: string;
    /**
     * Derivative base asset
     */
    base: string;
    /**
     * Derivative target asset
     */
    target: string;
    /**
     * Derivative base asset coin ID
     */
    coin_id: string;
    /**
     * Derivative target asset coin ID
     */
    target_coin_id: string;
    /**
     * Derivative trade URL
     */
    trade_url: string;
    /**
     * Derivative contract type
     */
    contract_type: string;
    /**
     * Derivative last price
     */
    last: number;
    /**
     * Derivative price percentage change in 24 hours
     */
    h24_percentage_change: number;
    /**
     * Derivative underlying asset price
     */
    index: number;
    /**
     * Difference of derivative price and index price in percentage
     */
    index_basis_percentage: number;
    /**
     * Derivative bid-ask spread
     */
    bid_ask_spread: number;
    /**
     * Derivative funding rate
     */
    funding_rate: number;
    /**
     * Derivative open interest in USD
     */
    open_interest_usd: number;
    /**
     * Derivative volume in 24 hours
     */
    h24_volume: number;
    /**
     * Derivative converted volume
     */
    converted_volume: Ticker.ConvertedVolume;
    /**
     * Derivative converted last price
     */
    converted_last: Ticker.ConvertedLast;
    /**
     * Derivative last traded time in UNIX timestamp
     */
    last_traded: number;
    /**
     * Derivative expiry time in UNIX timestamp
     */
    expired_at: number | null;
  }

  export namespace Ticker {
    export interface ConvertedVolume {
      btc?: string;
      eth?: string;
      usd?: string;
    }

    export interface ConvertedLast {
      btc?: string;
      eth?: string;
      usd?: string;
    }
  }
}

export type ExchangeGetListResponse = Array<ExchangeGetListResponse.ExchangeGetListResponseItem>;

export namespace ExchangeGetListResponse {
  export interface ExchangeGetListResponseItem {
    /**
     * Derivatives exchange ID
     */
    id: string;
    /**
     * Derivatives exchange name
     */
    name: string;
  }
}
export declare namespace Exchanges {
  export {
    type ExchangeGetResponse as ExchangeGetResponse,
    type ExchangeGetIDResponse as ExchangeGetIDResponse,
    type ExchangeGetListResponse as ExchangeGetListResponse,
    type ExchangeGetParams as ExchangeGetParams,
    type ExchangeGetIDParams as ExchangeGetIDParams,
  };
}
export { Exchanges as ExchangeResource };
