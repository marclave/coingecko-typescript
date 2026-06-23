// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import { VolumeChart, type VolumeChartGetResponse, type VolumeChartGetRangeResponse, type VolumeChartGetParams, type VolumeChartGetRangeParams } from "./volume-chart";
import { Tickers2, type TickerGetResponse, type TickerGetParams } from "./tickers";

export class ExchangeResource extends APIResource {
  volumeChart: VolumeChart = new VolumeChart(this._client);
  tickers: Tickers2 = new Tickers2(this._client);

  /**
   * To query all the supported exchanges with exchanges' data (ID, name, country, etc.) that have active trading volumes on CoinGecko
   *
   * @param {ExchangeGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Exchanges>} List of exchanges with data
   *
   * @example
   * ```ts
   * const s = await client.exchanges.get();
   * ```
   */
  get(params: ExchangeGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Exchanges> {
    const { per_page, page } = params ?? {};
    return this._client.get("/exchanges", { query: { per_page: per_page, page: page }, ...options });
  }

  /**
   * To query all the supported exchanges with ID and name
   *
   * @param {ExchangeGetListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ExchangeGetListResponse>} List of exchanges
   *
   * @example
   * ```ts
   * const getList = await client.exchanges.getList();
   * ```
   */
  getList(params: ExchangeGetListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ExchangeGetListResponse> {
    const { status } = params ?? {};
    return this._client.get("/exchanges/list", { query: { status: status }, ...options });
  }

  /**
   * To query exchange's data (name, year established, country, etc.), exchange volume in BTC and top 100 tickers based on exchange's ID
   *
   * @param {string} id - Exchange ID.
   * @param {ExchangeGetIDParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ExchangeGetIDResponse>} Exchange data
   *
   * @example
   * ```ts
   * const getID = await client.exchanges.getID("binance");
   * ```
   */
  getID(id: string, params: ExchangeGetIDParams | null | undefined = {}, options?: RequestOptions): APIPromise<ExchangeGetIDResponse> {
    const { dex_pair_format } = params ?? {};
    return this._client.get(__scalarPath`/exchanges/${id}`, { query: { dex_pair_format: dex_pair_format }, ...options });
  }
}

export type Exchanges = Array<{ id: string; name: string; year_established: number | null; country: string | null; description: string; url: string; image: string; has_trading_incentive: boolean; trust_score: number | null; trust_score_rank: number | null; trade_volume_24h_btc: number }>;

export interface ExchangeGetParams {
  /**
   * Total results per page.
   * Default: 100.
   * Valid values: 1...250
   */
  per_page?: number;
  /**
   * Page through results.
   * Default: 1
   */
  page?: number;
}

export interface ExchangeGetListParams {
  /**
   * Filter by status of exchanges.
   * Default: `active`
   */
  status?: "active" | "inactive";
}

export type ExchangeGetListResponse = Array<ExchangeGetListResponse.ExchangeGetListResponseItem>;

export namespace ExchangeGetListResponse {
  export interface ExchangeGetListResponseItem {
    /**
     * Exchange ID
     */
    id: string;
    /**
     * Exchange name
     */
    name: string;
  }
}

export interface ExchangeGetIDParams {
  /**
   * Set to `symbol` to display DEX pair base and target as symbols.
   * Default: `contract_address`
   */
  dex_pair_format?: "contract_address" | "symbol";
}

export interface ExchangeGetIDResponse {
  /**
   * Exchange name
   */
  name: string;
  /**
   * Year the exchange was established
   */
  year_established: number | null;
  /**
   * Country where the exchange is based
   */
  country: string | null;
  /**
   * Exchange description
   */
  description: string;
  /**
   * Exchange website URL
   */
  url: string;
  /**
   * Exchange logo URL
   */
  image: string;
  /**
   * Facebook URL
   */
  facebook_url: string;
  /**
   * Reddit URL
   */
  reddit_url: string;
  /**
   * Telegram URL
   */
  telegram_url: string;
  /**
   * Slack URL
   */
  slack_url: string;
  /**
   * Other URL 1
   */
  other_url_1: string;
  /**
   * Other URL 2
   */
  other_url_2: string;
  /**
   * Twitter handle
   */
  twitter_handle: string;
  /**
   * Whether the exchange has trading incentive
   */
  has_trading_incentive: boolean;
  /**
   * Whether the exchange is centralized
   */
  centralized: boolean;
  /**
   * Public notice
   */
  public_notice: string;
  /**
   * Alert notice
   */
  alert_notice: string;
  /**
   * Exchange trust score
   */
  trust_score: number | null;
  /**
   * Exchange trust score rank
   */
  trust_score_rank: number | null;
  /**
   * Number of coins listed
   */
  coins: number;
  /**
   * Number of trading pairs
   */
  pairs: number;
  /**
   * Exchange 24h trading volume in BTC
   */
  trade_volume_24h_btc: number;
  /**
   * Exchange tickers
   */
  tickers: Array<ExchangeGetIDResponse.Ticker>;
  /**
   * Status updates
   */
  status_updates: Array<ExchangeGetIDResponse.StatusUpdate>;
}

export namespace ExchangeGetIDResponse {
  export interface Ticker {
    /**
     * Ticker base currency
     */
    base?: string;
    /**
     * Ticker target currency
     */
    target?: string;
    /**
     * Exchange information
     */
    market?: Ticker.Market;
    /**
     * Last price
     */
    last?: number;
    /**
     * Trading volume
     */
    volume?: number;
    /**
     * Converted last price
     */
    converted_last?: Ticker.ConvertedLast;
    /**
     * Converted trading volume
     */
    converted_volume?: Ticker.ConvertedVolume;
    /**
     * Trust score
     */
    trust_score?: string | null;
    /**
     * Bid-ask spread percentage
     */
    bid_ask_spread_percentage?: number;
    /**
     * Ticker timestamp
     */
    timestamp?: string;
    /**
     * Last traded timestamp
     */
    last_traded_at?: string;
    /**
     * Last fetch timestamp
     */
    last_fetch_at?: string;
    /**
     * Whether ticker is anomalous
     */
    is_anomaly?: boolean;
    /**
     * Whether ticker is stale
     */
    is_stale?: boolean;
    /**
     * Trade URL
     */
    trade_url?: string;
    /**
     * Token info URL
     */
    token_info_url?: string | null;
    /**
     * Base currency coin ID
     */
    coin_id?: string;
    /**
     * Target currency coin ID
     */
    target_coin_id?: string;
    /**
     * Coin market cap in USD
     */
    coin_mcap_usd?: number;
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

  export interface StatusUpdate {
    /**
     * Status update description
     */
    description?: string;
    /**
     * Status update category
     */
    category?: string;
    /**
     * Status update creation time
     */
    created_at?: string;
    /**
     * Status update user
     */
    user?: string;
    /**
     * Status update user title
     */
    user_title?: string;
    /**
     * Whether status update is pinned
     */
    pin?: boolean;
    /**
     * Project information
     */
    project?: StatusUpdate.Project;
  }

  export namespace StatusUpdate {
    export interface Project {
      /**
       * Project type
       */
      type?: string;
      /**
       * Project ID
       */
      id?: string;
      /**
       * Project name
       */
      name?: string;
      /**
       * Project image URLs
       */
      image?: Project.Image;
    }

    export namespace Project {
      export interface Image {
        thumb?: string;
        small?: string;
        large?: string;
      }
    }
  }
}
ExchangeResource.VolumeChart = VolumeChart;
ExchangeResource.Tickers2 = Tickers2;

export declare namespace ExchangeResource {
  export {
    type Exchanges as Exchanges,
    type ExchangeGetListResponse as ExchangeGetListResponse,
    type ExchangeGetIDResponse as ExchangeGetIDResponse,
    type ExchangeGetParams as ExchangeGetParams,
    type ExchangeGetListParams as ExchangeGetListParams,
    type ExchangeGetIDParams as ExchangeGetIDParams,
  };

  export {
    VolumeChart as VolumeChart,
    type VolumeChartGetResponse as VolumeChartGetResponse,
    type VolumeChartGetRangeResponse as VolumeChartGetRangeResponse,
    type VolumeChartGetParams as VolumeChartGetParams,
    type VolumeChartGetRangeParams as VolumeChartGetRangeParams,
  };

  export {
    Tickers2 as Tickers2,
    type TickerGetResponse as TickerGetResponse,
    type TickerGetParams as TickerGetParams,
  };
}
