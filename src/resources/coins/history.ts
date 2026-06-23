// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class History extends APIResource {
  /**
   * To query the historical data (price, market cap, 24hrs volume, etc.) at a given date for a coin based on a particular coin ID
   *
   * @param {string} id - Coin ID.
   * @param {HistoryGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<HistoryGetResponse>} Coin historical data
   *
   * @example
   * ```ts
   * const get_ = await client.coins.history.get("bitcoin", {
   *   date: "2025-12-30",
   * });
   * ```
   */
  get(id: string, params: HistoryGetParams, options?: RequestOptions): APIPromise<HistoryGetResponse> {
    const { date, localization } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/history`, { query: { date: date, localization: localization }, ...options });
  }
}

export interface HistoryGetParams {
  /**
   * The date of data snapshot.
   * Format: `YYYY-MM-DD`
   * @default 2025-12-30
   */
  date: string;
  /**
   * Include all the localized languages in response.
   * Default: true
   */
  localization?: boolean;
}

export interface HistoryGetResponse {
  /**
   * Coin ID
   */
  id: string;
  /**
   * Coin symbol
   */
  symbol: string;
  /**
   * Coin name
   */
  name: string;
  /**
   * Coin image URLs
   */
  image: HistoryGetResponse.Image;
  /**
   * Market data at the given date
   */
  market_data: HistoryGetResponse.MarketData;
  /**
   * Community engagement data
   */
  community_data: HistoryGetResponse.CommunityData;
  /**
   * Developer activity data
   */
  developer_data: HistoryGetResponse.DeveloperData;
  /**
   * Public interest statistics
   */
  public_interest_stats: HistoryGetResponse.PublicInterestStats;
  /**
   * Localized coin names keyed by locale code
   */
  localization?: Record<string, string>;
}

export namespace HistoryGetResponse {
  export interface Image {
    /**
     * Thumbnail image URL
     */
    thumb?: string;
    /**
     * Small image URL
     */
    small?: string;
  }

  export interface MarketData {
    /**
     * Current price keyed by currency
     */
    current_price?: Record<string, number>;
    /**
     * Market capitalization keyed by currency
     */
    market_cap?: Record<string, number>;
    /**
     * Total trading volume keyed by currency
     */
    total_volume?: Record<string, number>;
  }

  export interface CommunityData {
    /**
     * Number of Facebook likes
     */
    facebook_likes?: number | null;
    /**
     * Average Reddit posts in 48 hours
     */
    reddit_average_posts_48h?: number;
    /**
     * Average Reddit comments in 48 hours
     */
    reddit_average_comments_48h?: number;
    /**
     * Number of Reddit subscribers
     */
    reddit_subscribers?: number | null;
    /**
     * Active Reddit accounts in 48 hours
     */
    reddit_accounts_active_48h?: number;
  }

  export interface DeveloperData {
    /**
     * Repository forks
     */
    forks?: number | null;
    /**
     * Repository stars
     */
    stars?: number | null;
    /**
     * Repository subscribers
     */
    subscribers?: number | null;
    /**
     * Total issues
     */
    total_issues?: number | null;
    /**
     * Closed issues
     */
    closed_issues?: number | null;
    /**
     * Pull requests merged
     */
    pull_requests_merged?: number | null;
    /**
     * Pull request contributors
     */
    pull_request_contributors?: number | null;
    /**
     * Code additions and deletions in the last 4 weeks
     */
    code_additions_deletions_4_weeks?: DeveloperData.CodeAdditionsDeletions4Weeks;
    /**
     * Commit count in the last 4 weeks
     */
    commit_count_4_weeks?: number | null;
  }

  export namespace DeveloperData {
    export interface CodeAdditionsDeletions4Weeks {
      /**
       * Lines added
       */
      additions?: number | null;
      /**
       * Lines deleted
       */
      deletions?: number | null;
    }
  }

  export interface PublicInterestStats {
    /**
     * Alexa rank
     */
    alexa_rank?: number | null;
    /**
     * Bing search matches
     */
    bing_matches?: number | null;
  }
}
export declare namespace History {
  export {
    type HistoryGetResponse as HistoryGetResponse,
    type HistoryGetParams as HistoryGetParams,
  };
}
export { History as HistoryResource };
