// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class History extends APIResource {
  /**
   * To query the historical data (price, market cap, 24hrs volume, etc.) at a given date for a coin based on a particular coin ID
   */
  get(id: string, params: HistoryGetParams, options?: RequestOptions): APIPromise<CoinsIdHistory> {
    const { date, localization } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/history`, { query: { date: date, localization: localization }, ...options });
  }
}

export interface CoinsIdHistory {
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
  image: { thumb?: string; small?: string };
  /**
   * Market data at the given date
   */
  market_data: { current_price?: Record<string, number>; market_cap?: Record<string, number>; total_volume?: Record<string, number> };
  /**
   * Community engagement data
   */
  community_data: { facebook_likes?: number | null; reddit_average_posts_48h?: number; reddit_average_comments_48h?: number; reddit_subscribers?: number | null; reddit_accounts_active_48h?: number };
  /**
   * Developer activity data
   */
  developer_data: { forks?: number | null; stars?: number | null; subscribers?: number | null; total_issues?: number | null; closed_issues?: number | null; pull_requests_merged?: number | null; pull_request_contributors?: number | null; code_additions_deletions_4_weeks?: { additions?: number | null; deletions?: number | null }; commit_count_4_weeks?: number | null };
  /**
   * Public interest statistics
   */
  public_interest_stats: { alexa_rank?: number | null; bing_matches?: number | null };
  /**
   * Localized coin names keyed by locale code
   */
  localization?: Record<string, string>;
}

export interface HistoryGetParams {
/**
 * The date of data snapshot.
 * Format: `YYYY-MM-DD`
 */
  date: string;

/**
 * Include all the localized languages in response.
 * Default: true
 */
  localization?: boolean;

}
export declare namespace History {
  export { type CoinsIdHistory as CoinsIdHistory, type HistoryGetParams as HistoryGetParams };
}
export { History as HistoryResource };
