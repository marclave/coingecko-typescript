// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import { TopGainersLosers } from "./top-gainers-losers";
import { Markets } from "./markets";
import { Tickers } from "./tickers";
import { History } from "./history";
import { MarketChart } from "./market-chart";
import { Ohlc } from "./ohlc";
import { Contract } from "./contract/contract";
import { CirculatingSupplyChart } from "./circulating-supply-chart";
import { TotalSupplyChart } from "./total-supply-chart";
import { List } from "./list";
import { Categories } from "./categories";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Coins extends APIResource {
  topGainersLosers: TopGainersLosers = new TopGainersLosers(this._client);
  markets: Markets = new Markets(this._client);
  tickers: Tickers = new Tickers(this._client);
  history: History = new History(this._client);
  marketChart: MarketChart = new MarketChart(this._client);
  ohlc: Ohlc = new Ohlc(this._client);
  contract: Contract = new Contract(this._client);
  circulatingSupplyChart: CirculatingSupplyChart = new CirculatingSupplyChart(this._client);
  totalSupplyChart: TotalSupplyChart = new TotalSupplyChart(this._client);
  list: List = new List(this._client);
  categories: Categories = new Categories(this._client);

  /**
   * To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on a particular coin ID
   */
  getId(id: string, params: CoinGetIdParams | null | undefined = {}, options?: RequestOptions): APIPromise<CoinsId> {
    const { localization, tickers, market_data, community_data, developer_data, sparkline, include_categories_details, dex_pair_format } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}`, { query: { localization: localization, tickers: tickers, market_data: market_data, community_data: community_data, developer_data: developer_data, sparkline: sparkline, include_categories_details: include_categories_details, dex_pair_format: dex_pair_format }, ...options });
  }
}

export interface TopGainersLosers {
  top_gainers: Array<TopGainersLosersItem>;
  top_losers: Array<TopGainersLosersItem>;
}

export interface CoinsId {
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
  detail_platforms: Record<string, { decimal_place?: number | null; contract_address?: string }>;
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
   * Detailed coin categories
   */
  categories_details?: Array<{ id?: string; name?: string }>;
  /**
   * Coin name localization
   */
  localization?: Record<string, string>;
  /**
   * ICO data
   */
  ico_data?: { ico_start_date?: string; ico_end_date?: string; short_desc?: string; description?: string; links?: Record<string, string>; softcap_currency?: string; hardcap_currency?: string; total_raised_currency?: string; softcap_amount?: number; hardcap_amount?: number; total_raised?: number; quote_pre_sale_currency?: string; base_pre_sale_amount?: number; quote_pre_sale_amount?: number; quote_public_sale_currency?: string; base_public_sale_amount?: number; quote_public_sale_amount?: number; accepting_currencies?: string; country_origin?: string; pre_sale_start_date?: string; pre_sale_end_date?: string; whitelist_url?: string; whitelist_start_date?: string; whitelist_end_date?: string; bounty_detail_url?: string; amount_for_sale?: number; kyc_required?: boolean; whitelist_available?: boolean; pre_sale_available?: boolean; pre_sale_ended?: boolean } | null;
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

export interface CoinGetIdParams {
/**
 * Include all localized languages in the response.
 * Default: true
 */
  localization?: boolean;

/**
 * Include tickers data.
 * Default: true
 */
  tickers?: boolean;

/**
 * Include market data.
 * Default: true
 */
  market_data?: boolean;

/**
 * Include community data.
 * Default: true
 */
  community_data?: boolean;

/**
 * Include developer data.
 * Default: true
 */
  developer_data?: boolean;

/**
 * Include sparkline 7-day data.
 * Default: false
 */
  sparkline?: boolean;

/**
 * Include categories details.
 * Default: false
 */
  include_categories_details?: boolean;

/**
 * Set to `symbol` to display DEX pair base and target as symbols.
 * Default: `contract_address`
 */
  dex_pair_format?: "contract_address" | "symbol";

}
export declare namespace Coins {
  export { TopGainersLosers as TopGainersLosers, Markets as Markets, Tickers as Tickers, History as History, MarketChart as MarketChart, Ohlc as Ohlc, Contract as Contract, CirculatingSupplyChart as CirculatingSupplyChart, TotalSupplyChart as TotalSupplyChart, List as List, Categories as Categories };
  export { type TopGainersLosers as TopGainersLosers, type CoinsId as CoinsId, type CoinGetIdParams as CoinGetIdParams };
}
export { Coins as CoinResource };
