// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { path as __scalarPath } from "../../../internal/utils/path";
import { MarketChart } from "./market-chart";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Contract extends APIResource {
  marketChart: MarketChart = new MarketChart(this._client);

  /**
   * To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on an asset platform and a particular token contract address
   */
  get(id: string, contract_address: string, options?: RequestOptions): APIPromise<CoinsContractAddress> {
    return this._client.get(__scalarPath`/coins/${id}/contract/${contract_address}`, options);
  }
}

export interface CoinsContractAddress {
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
   * Coin web slug
   */
  web_slug: string;
  /**
   * Coin asset platform ID
   */
  asset_platform_id: string | null;
  /**
   * Coin asset platform and contract address
   */
  platforms: Record<string, string>;
  /**
   * Detailed coin asset platform and contract address
   */
  detail_platforms: Record<string, { decimal_place?: number | null; contract_address?: string; geckoterminal_url?: string }>;
  /**
   * Blockchain block time in minutes
   */
  block_time_in_minutes: number;
  /**
   * Blockchain hashing algorithm
   */
  hashing_algorithm: string | null;
  /**
   * Coin categories
   */
  categories: Array<string>;
  /**
   * Preview listing coin
   */
  preview_listing: boolean;
  /**
   * Public notice
   */
  public_notice: string | null;
  /**
   * Additional notices
   */
  additional_notices: Array<string>;
  /**
   * Coin description
   */
  description: Record<string, string>;
  /**
   * Links
   */
  links: { homepage?: Array<string>; whitepaper?: string; blockchain_site?: Array<string>; official_forum_url?: Array<string>; chat_url?: Array<string>; announcement_url?: Array<string>; snapshot_url?: string | null; twitter_screen_name?: string; facebook_username?: string; bitcointalk_thread_identifier?: number | null; telegram_channel_identifier?: string; subreddit_url?: string; repos_url?: { github?: Array<string>; bitbucket?: Array<string> } };
  /**
   * Coin image URL
   */
  image: { thumb?: string; small?: string; large?: string };
  /**
   * Country of origin
   */
  country_origin: string;
  /**
   * Genesis date
   */
  genesis_date: string | null;
  /**
   * Coin contract address
   */
  contract_address: string;
  /**
   * Sentiment votes up percentage
   */
  sentiment_votes_up_percentage: number | null;
  /**
   * Sentiment votes down percentage
   */
  sentiment_votes_down_percentage: number | null;
  /**
   * Number of users watching this coin in portfolio
   */
  watchlist_portfolio_users: number;
  /**
   * Market cap rank
   */
  market_cap_rank: number | null;
  /**
   * Market cap rank including rehypothecated tokens
   */
  market_cap_rank_with_rehypothecated: number | null;
  /**
   * Status updates
   */
  status_updates: Array<{ description?: string; category?: string; created_at?: string; user?: string; user_title?: string }>;
  /**
   * Last updated timestamp
   */
  last_updated: string;
  /**
   * Coin name localization
   */
  localization?: Record<string, string>;
  /**
   * Market data
   */
  market_data?: { current_price?: Record<string, number>; total_value_locked?: number | null; mcap_to_tvl_ratio?: number | null; fdv_to_tvl_ratio?: number | null; roi?: { times?: number; currency?: string; percentage?: number } | null; ath?: Record<string, number>; ath_change_percentage?: Record<string, number>; ath_date?: Record<string, string>; atl?: Record<string, number>; atl_change_percentage?: Record<string, number>; atl_date?: Record<string, string>; market_cap?: Record<string, number>; fully_diluted_valuation?: Record<string, number>; market_cap_fdv_ratio?: number; market_cap_rank?: number | null; outstanding_token_value_usd?: number | null; market_cap_rank_with_rehypothecated?: number | null; total_volume?: Record<string, number>; high_24h?: Record<string, number>; low_24h?: Record<string, number>; price_change_24h?: number; price_change_percentage_24h?: number; price_change_percentage_7d?: number; price_change_percentage_14d?: number; price_change_percentage_30d?: number; price_change_percentage_60d?: number; price_change_percentage_200d?: number; price_change_percentage_1y?: number; market_cap_change_24h?: number; market_cap_change_percentage_24h?: number; price_change_24h_in_currency?: Record<string, number>; price_change_percentage_1h_in_currency?: Record<string, number>; price_change_percentage_24h_in_currency?: Record<string, number>; price_change_percentage_7d_in_currency?: Record<string, number>; price_change_percentage_14d_in_currency?: Record<string, number>; price_change_percentage_30d_in_currency?: Record<string, number>; price_change_percentage_60d_in_currency?: Record<string, number>; price_change_percentage_200d_in_currency?: Record<string, number>; price_change_percentage_1y_in_currency?: Record<string, number>; market_cap_change_24h_in_currency?: Record<string, number>; market_cap_change_percentage_24h_in_currency?: Record<string, number>; total_supply?: number; max_supply?: number | null; max_supply_infinite?: boolean; circulating_supply?: number; outstanding_supply?: number | null; last_updated?: string; sparkline_7d?: Array<number> };
  /**
   * Community data
   */
  community_data?: { facebook_likes?: number | null; reddit_average_posts_48h?: number; reddit_average_comments_48h?: number; reddit_subscribers?: number; reddit_accounts_active_48h?: number; telegram_channel_user_count?: number | null };
  /**
   * Developer data
   */
  developer_data?: { forks?: number; stars?: number; subscribers?: number; total_issues?: number; closed_issues?: number; pull_requests_merged?: number; pull_request_contributors?: number; code_additions_deletions_4_weeks?: { additions?: number; deletions?: number }; commit_count_4_weeks?: number; last_4_weeks_commit_activity_series?: Array<number> };
  /**
   * Tickers
   */
  tickers?: Array<{ base?: string; target?: string; market?: { name?: string; identifier?: string; has_trading_incentive?: boolean }; last?: number; volume?: number; converted_last?: { btc?: number; eth?: number; usd?: number }; converted_volume?: { btc?: number; eth?: number; usd?: number }; trust_score?: string | null; bid_ask_spread_percentage?: number; timestamp?: string; last_traded_at?: string; last_fetch_at?: string; is_anomaly?: boolean; is_stale?: boolean; trade_url?: string; token_info_url?: string | null; coin_id?: string; target_coin_id?: string; coin_mcap_usd?: number }>;
}
export declare namespace Contract {
  export { MarketChart as MarketChart };
  export { type CoinsContractAddress as CoinsContractAddress };
}
export { Contract as ContractResource };
