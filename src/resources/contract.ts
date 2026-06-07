// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Contract extends APIResource {
  /**
   * This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on an asset platform and a particular token contract address**
   */
  coinsAddress(id: string, contract_address: string, options?: RequestOptions): APIPromise<CoinsContractAddress> {
    return this._client.get(__scalarPath`/coins/${id}/contract/${contract_address}`, options);
  }
  /**
   * This endpoint allows you to **get the historical chart data including time in UNIX, price, market cap and 24hr volume based on asset platform and particular token contract address**
   */
  addressMarketChart(id: string, contract_address: string, params: ContractAddressMarketChartParams, options?: RequestOptions): APIPromise<CoinsMarketChart> {
    const { vs_currency, days, interval, precision } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/contract/${contract_address}/market_chart`, { query: { vs_currency: vs_currency, days: days, interval: interval, precision: precision }, ...options });
  }
  /**
   * This endpoint allows you to **get the historical chart data within certain time range in UNIX along with price, market cap and 24hr volume based on asset platform and particular token contract address**
   */
  addressMarketChartRange(id: string, contract_address: string, params: ContractAddressMarketChartRangeParams, options?: RequestOptions): APIPromise<CoinsMarketChartRange> {
    const { vs_currency, from, to, interval, precision } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/contract/${contract_address}/market_chart/range`, { query: { vs_currency: vs_currency, from: from, to: to, interval: interval, precision: precision }, ...options });
  }
}

export interface CoinsContractAddress {
  /**
   * coin ID
   */
  id?: string;
  /**
   * coin symbol
   */
  symbol?: string;
  /**
   * coin name
   */
  name?: string;
  /**
   * coin web slug
   */
  web_slug?: string;
  /**
   * coin asset platform ID
   */
  asset_platform_id?: string;
  /**
   * coin asset platform and contract address
   */
  platforms?: Record<string, string | null>;
  /**
   * detailed coin asset platform and contract address
   */
  detail_platforms?: Record<string, DetailPlatformData>;
  /**
   * blockchain block time in minutes
   */
  block_time_in_minutes?: number;
  /**
   * blockchain hashing algorithm
   */
  hashing_algorithm?: string | null;
  /**
   * coin categories
   */
  categories?: Array<string>;
  /**
   * preview listing coin
   */
  preview_listing?: boolean;
  /**
   * public notice
   */
  public_notice?: string | null;
  /**
   * additional notices
   */
  additional_notices?: Array<string>;
  /**
   * coin name localization
   */
  localization?: Record<string, string>;
  /**
   * coin description
   */
  description?: Record<string, string>;
  /**
   * links
   */
  links?: { homepage?: Array<string>; whitepaper?: Array<string>; blockchain_site?: Array<string>; official_forum_url?: Array<string>; chat_url?: Array<string>; announcement_url?: Array<string>; snapshot_url?: string; twitter_screen_name?: string; facebook_username?: string; bitcointalk_thread_identifier?: string; telegram_channel_identifier?: string; subreddit_url?: string; repos_url?: { github?: Array<string>; bitbucket?: Array<string> } };
  /**
   * coin image url
   */
  image?: { thumb?: string; small?: string; large?: string };
  /**
   * coin country of origin
   */
  country_origin?: string;
  /**
   * coin genesis date
   */
  genesis_date?: string | null;
  /**
   * coin contract address
   */
  contract_address?: string;
  /**
   * coin sentiment votes up percentage
   */
  sentiment_votes_up_percentage?: number | null;
  /**
   * coin sentiment votes down percentage
   */
  sentiment_votes_down_percentage?: number | null;
  /**
   * number of users watching this coin in portfolio
   */
  watchlist_portfolio_users?: number;
  /**
   * coin rank by market cap
   */
  market_cap_rank?: number | null;
  /**
   * coin rank by market cap including rehypothecated tokens
   */
  market_cap_rank_with_rehypothecated?: number;
  /**
   * coin market data
   */
  market_data?: { current_price?: { btc?: number; eur?: number; usd?: number }; total_value_locked?: number; mcap_to_tvl_ratio?: number; fdv_to_tvl_ratio?: number; roi?: number; ath?: { btc?: number; eur?: number; usd?: number }; ath_change_percentage?: { btc?: number; eur?: number; usd?: number }; ath_date?: { btc?: string; eur?: string; usd?: string }; atl?: { btc?: number; eur?: number; usd?: number }; atl_change_percentage?: { btc?: number; eur?: number; usd?: number }; atl_date?: { btc?: string; eur?: string; usd?: string }; market_cap?: { btc?: number; eur?: number; usd?: number }; market_cap_rank?: number; outstanding_token_value_usd?: number | null; market_cap_rank_with_rehypothecated?: number; fully_diluted_valuation?: { btc?: number; eur?: number; usd?: number }; market_cap_fdv_ratio?: number; total_volume?: { btc?: number; eur?: number; usd?: number }; high_24h?: { btc?: number; eur?: number; usd?: number }; low_24h?: { btc?: number; eur?: number; usd?: number }; price_change_24h?: number; price_change_percentage_24h?: number; price_change_percentage_7d?: number; price_change_percentage_14d?: number; price_change_percentage_30d?: number; price_change_percentage_60d?: number; price_change_percentage_200d?: number; price_change_percentage_1y?: number; market_cap_change_24h?: number; market_cap_change_percentage_24h?: number; price_change_percentage_1h_in_currency?: { btc?: number; eur?: number; usd?: number }; price_change_percentage_24h_in_currency?: { btc?: number; eur?: number; usd?: number }; price_change_percentage_7d_in_currency?: { btc?: number; eur?: number; usd?: number }; price_change_percentage_14d_in_currency?: { btc?: number; eur?: number; usd?: number }; price_change_percentage_30d_in_currency?: { btc?: number; eur?: number; usd?: number }; price_change_percentage_60d_in_currency?: { btc?: number; eur?: number; usd?: number }; price_change_percentage_200d_in_currency?: { btc?: number; eur?: number; usd?: number }; price_change_percentage_1y_in_currency?: { btc?: number; eur?: number; usd?: number }; market_cap_change_24h_in_currency?: { btc?: number; eur?: number; usd?: number }; market_cap_change_percentage_24h_in_currency?: { btc?: number; eur?: number; usd?: number }; total_supply?: number; max_supply?: number; circulating_supply?: number; outstanding_supply?: number | null; last_updated?: string };
  /**
   * coin community data
   */
  community_data?: { facebook_likes?: number; reddit_average_posts_48h?: number; reddit_average_comments_48h?: number; reddit_subscribers?: number; reddit_accounts_active_48h?: number; telegram_channel_user_count?: number };
  /**
   * coin developer data
   */
  developer_data?: { forks?: number; stars?: number; subscribers?: number; total_issues?: number; closed_issues?: number; pull_requests_merged?: number; pull_request_contributors?: number; code_additions_deletions_4_weeks?: { additions?: number; deletions?: number }; commit_count_4_weeks?: number; last_4_weeks_commit_activity_series?: Array<number> };
  /**
   * coin status updates
   */
  status_updates?: Array<string>;
  /**
   * coin last updated timestamp
   */
  last_updated?: string;
  /**
   * coin tickers
   */
  tickers?: Array<{ base?: string; target?: string; market?: { name?: string; identifier?: string; has_trading_incentive?: boolean }; last?: number; volume?: number; converted_last?: { btc?: number; eth?: number; usd?: number }; converted_volume?: { btc?: number; eth?: number; usd?: number }; trust_score?: string | null; bid_ask_spread_percentage?: number; timestamp?: string; last_traded_at?: string; last_fetch_at?: string; is_anomaly?: boolean; is_stale?: boolean; trade_url?: string; token_info_url?: string; coin_id?: string; target_coin_id?: string; coin_mcap_usd?: number }>;
}

export interface DetailPlatformData {
  /**
   * decimal places for the token
   */
  decimal_place?: number | null;
  /**
   * contract address on the platform
   */
  contract_address?: string;
}

export interface CoinsMarketChart {
  prices?: Array<Array<number>>;
  market_caps?: Array<Array<number>>;
  total_volumes?: Array<Array<number>>;
}

export interface CoinsMarketChartRange {
  prices?: Array<Array<number>>;
  market_caps?: Array<Array<number>>;
  total_volumes?: Array<Array<number>>;
}

export interface ContractAddressMarketChartParams {
/**
 * target currency of market data
 *  *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
 */
  vs_currency: string;

/**
 * data up to number of days ago
 *  You may use any integer or `max` for number of days
 */
  days: string;

/**
 * data interval, leave empty for auto granularity
 */
  interval?: "5m" | "hourly" | "daily";

/**
 * decimal place for currency price value
 */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";

}

export interface ContractAddressMarketChartRangeParams {
/**
 * target currency of market data
 *  *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
 */
  vs_currency: string;

/**
 * starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
 *  **use ISO date string for best compatibility**
 */
  from: string;

/**
 * ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
 *  **use ISO date string for best compatibility**
 */
  to: string;

/**
 * data interval, leave empty for auto granularity
 */
  interval?: "5m" | "hourly" | "daily";

/**
 * decimal place for currency price value
 */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";

}
export declare namespace Contract {
  export { type CoinsContractAddress as CoinsContractAddress, type DetailPlatformData as DetailPlatformData, type CoinsMarketChart as CoinsMarketChart, type CoinsMarketChartRange as CoinsMarketChartRange, type ContractAddressMarketChartParams as ContractAddressMarketChartParams, type ContractAddressMarketChartRangeParams as ContractAddressMarketChartRangeParams };
}
export { Contract as ContractResource };
