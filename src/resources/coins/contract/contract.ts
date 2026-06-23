// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { path as __scalarPath } from "../../../internal/utils/path";
import { MarketChart2, type MarketChartGetResponse, type MarketChartGetRangeResponse, type MarketChartGetParams, type MarketChartGetRangeParams } from "./market-chart";

export class Contract extends APIResource {
  marketChart: MarketChart2 = new MarketChart2(this._client);

  /**
   * To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on an asset platform and a particular token contract address
   *
   * @param {string} contract_address - The contract address of token.
   * @param {ContractGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ContractGetResponse>} Coin data by token contract address
   *
   * @example
   * ```ts
   * const get_ = await client.coins.contract.get("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", {
   *   id: "ethereum",
   * });
   * ```
   */
  get(contract_address: string, params: ContractGetParams, options?: RequestOptions): APIPromise<ContractGetResponse> {
    const { id } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/contract/${contract_address}`, options);
  }
}

export interface ContractGetParams {
  /**
   * Asset platform ID.
   * *refers to [`/asset_platforms`](/reference/asset-platforms-list).
   * @default ethereum
   */
  id: string;
}

export interface ContractGetResponse {
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
  detail_platforms: Record<string, ContractGetResponse.DetailPlatforms>;
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
  links: ContractGetResponse.Links;
  /**
   * Coin image URL
   */
  image: ContractGetResponse.Image;
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
  status_updates: Array<ContractGetResponse.StatusUpdate>;
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
  market_data?: ContractGetResponse.MarketData;
  /**
   * Community data
   */
  community_data?: ContractGetResponse.CommunityData;
  /**
   * Developer data
   */
  developer_data?: ContractGetResponse.DeveloperData;
  /**
   * Tickers
   */
  tickers?: Array<ContractGetResponse.Ticker>;
}

export namespace ContractGetResponse {
  export interface DetailPlatforms {
    /**
     * Token decimal place
     */
    decimal_place?: number | null;
    /**
     * Token contract address
     */
    contract_address?: string;
    /**
     * GeckoTerminal URL
     */
    geckoterminal_url?: string;
  }

  export interface Links {
    /**
     * Website URL
     */
    homepage?: Array<string>;
    /**
     * Whitepaper URL
     */
    whitepaper?: string;
    /**
     * Block explorer URL
     */
    blockchain_site?: Array<string>;
    /**
     * Official forum URL
     */
    official_forum_url?: Array<string>;
    /**
     * Chat URL
     */
    chat_url?: Array<string>;
    /**
     * Announcement URL
     */
    announcement_url?: Array<string>;
    /**
     * Snapshot URL
     */
    snapshot_url?: string | null;
    /**
     * Twitter handle
     */
    twitter_screen_name?: string;
    /**
     * Facebook username
     */
    facebook_username?: string;
    /**
     * Bitcointalk thread identifier
     */
    bitcointalk_thread_identifier?: number | null;
    /**
     * Telegram channel identifier
     */
    telegram_channel_identifier?: string;
    /**
     * Subreddit URL
     */
    subreddit_url?: string;
    /**
     * Repository URL
     */
    repos_url?: Links.ReposURL;
  }

  export namespace Links {
    export interface ReposURL {
      /**
       * GitHub repository URL
       */
      github?: Array<string>;
      /**
       * Bitbucket repository URL
       */
      bitbucket?: Array<string>;
    }
  }

  export interface Image {
    thumb?: string;
    small?: string;
    large?: string;
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
  }

  export interface MarketData {
    /**
     * Current price in target currency
     */
    current_price?: Record<string, number>;
    /**
     * Total value locked
     */
    total_value_locked?: number | null;
    /**
     * Market cap to TVL ratio
     */
    mcap_to_tvl_ratio?: number | null;
    /**
     * FDV to TVL ratio
     */
    fdv_to_tvl_ratio?: number | null;
    /**
     * Return on investment
     */
    roi?: MarketData.Roi | null;
    /**
     * All-time high in target currency
     */
    ath?: Record<string, number>;
    /**
     * All-time high change percentage
     */
    ath_change_percentage?: Record<string, number>;
    /**
     * All-time high date
     */
    ath_date?: Record<string, string>;
    /**
     * All-time low in target currency
     */
    atl?: Record<string, number>;
    /**
     * All-time low change percentage
     */
    atl_change_percentage?: Record<string, number>;
    /**
     * All-time low date
     */
    atl_date?: Record<string, string>;
    /**
     * Market cap in target currency
     */
    market_cap?: Record<string, number>;
    /**
     * Fully diluted valuation in target currency
     */
    fully_diluted_valuation?: Record<string, number>;
    /**
     * Market cap to FDV ratio
     */
    market_cap_fdv_ratio?: number;
    /**
     * Market cap rank
     */
    market_cap_rank?: number | null;
    /**
     * Outstanding token value in USD
     */
    outstanding_token_value_usd?: number | null;
    /**
     * Market cap rank including rehypothecated tokens
     */
    market_cap_rank_with_rehypothecated?: number | null;
    /**
     * Total trading volume in target currency
     */
    total_volume?: Record<string, number>;
    /**
     * 24h price high in target currency
     */
    high_24h?: Record<string, number>;
    /**
     * 24h price low in target currency
     */
    low_24h?: Record<string, number>;
    /**
     * 24h price change in target currency
     */
    price_change_24h?: number;
    /**
     * 24h price change percentage
     */
    price_change_percentage_24h?: number;
    /**
     * 7d price change percentage
     */
    price_change_percentage_7d?: number;
    /**
     * 14d price change percentage
     */
    price_change_percentage_14d?: number;
    /**
     * 30d price change percentage
     */
    price_change_percentage_30d?: number;
    /**
     * 60d price change percentage
     */
    price_change_percentage_60d?: number;
    /**
     * 200d price change percentage
     */
    price_change_percentage_200d?: number;
    /**
     * 1y price change percentage
     */
    price_change_percentage_1y?: number;
    /**
     * 24h market cap change in target currency
     */
    market_cap_change_24h?: number;
    /**
     * 24h market cap change percentage
     */
    market_cap_change_percentage_24h?: number;
    /**
     * 24h price change in target currency
     */
    price_change_24h_in_currency?: Record<string, number>;
    /**
     * 1h price change percentage per currency
     */
    price_change_percentage_1h_in_currency?: Record<string, number>;
    /**
     * 24h price change percentage per currency
     */
    price_change_percentage_24h_in_currency?: Record<string, number>;
    /**
     * 7d price change percentage per currency
     */
    price_change_percentage_7d_in_currency?: Record<string, number>;
    /**
     * 14d price change percentage per currency
     */
    price_change_percentage_14d_in_currency?: Record<string, number>;
    /**
     * 30d price change percentage per currency
     */
    price_change_percentage_30d_in_currency?: Record<string, number>;
    /**
     * 60d price change percentage per currency
     */
    price_change_percentage_60d_in_currency?: Record<string, number>;
    /**
     * 200d price change percentage per currency
     */
    price_change_percentage_200d_in_currency?: Record<string, number>;
    /**
     * 1y price change percentage per currency
     */
    price_change_percentage_1y_in_currency?: Record<string, number>;
    /**
     * 24h market cap change in target currency
     */
    market_cap_change_24h_in_currency?: Record<string, number>;
    /**
     * 24h market cap change percentage per currency
     */
    market_cap_change_percentage_24h_in_currency?: Record<string, number>;
    /**
     * Total supply
     */
    total_supply?: number;
    /**
     * Max supply
     */
    max_supply?: number | null;
    /**
     * Max supply infinite
     */
    max_supply_infinite?: boolean;
    /**
     * Circulating supply
     */
    circulating_supply?: number;
    /**
     * Tokens outstanding in the market
     */
    outstanding_supply?: number | null;
    /**
     * Market data last updated timestamp
     */
    last_updated?: string;
    /**
     * Sparkline 7-day price data
     */
    sparkline_7d?: Array<number>;
  }

  export namespace MarketData {
    export interface Roi {
      /**
       * ROI multiplier
       */
      times?: number;
      /**
       * ROI currency
       */
      currency?: string;
      /**
       * ROI percentage
       */
      percentage?: number;
    }
  }

  export interface CommunityData {
    /**
     * Facebook likes
     */
    facebook_likes?: number | null;
    /**
     * Reddit average posts in 48 hours
     */
    reddit_average_posts_48h?: number;
    /**
     * Reddit average comments in 48 hours
     */
    reddit_average_comments_48h?: number;
    /**
     * Reddit subscribers
     */
    reddit_subscribers?: number;
    /**
     * Reddit active accounts in 48 hours
     */
    reddit_accounts_active_48h?: number;
    /**
     * Telegram channel user count
     */
    telegram_channel_user_count?: number | null;
  }

  export interface DeveloperData {
    /**
     * Repository forks
     */
    forks?: number;
    /**
     * Repository stars
     */
    stars?: number;
    /**
     * Repository subscribers
     */
    subscribers?: number;
    /**
     * Repository total issues
     */
    total_issues?: number;
    /**
     * Repository closed issues
     */
    closed_issues?: number;
    /**
     * Repository pull requests merged
     */
    pull_requests_merged?: number;
    /**
     * Repository pull request contributors
     */
    pull_request_contributors?: number;
    /**
     * Code additions and deletions in 4 weeks
     */
    code_additions_deletions_4_weeks?: DeveloperData.CodeAdditionsDeletions4Weeks;
    /**
     * Repository commit count in 4 weeks
     */
    commit_count_4_weeks?: number;
    /**
     * Repository last 4 weeks commit activity series
     */
    last_4_weeks_commit_activity_series?: Array<number>;
  }

  export namespace DeveloperData {
    export interface CodeAdditionsDeletions4Weeks {
      additions?: number;
      deletions?: number;
    }
  }

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
     * Ticker exchange
     */
    market?: Ticker.Market;
    /**
     * Ticker last price
     */
    last?: number;
    /**
     * Ticker volume
     */
    volume?: number;
    /**
     * Ticker converted last price
     */
    converted_last?: Ticker.ConvertedLast;
    /**
     * Ticker converted volume
     */
    converted_volume?: Ticker.ConvertedVolume;
    /**
     * Ticker trust score
     */
    trust_score?: string | null;
    /**
     * Ticker bid-ask spread percentage
     */
    bid_ask_spread_percentage?: number;
    /**
     * Ticker timestamp
     */
    timestamp?: string;
    /**
     * Ticker last traded timestamp
     */
    last_traded_at?: string;
    /**
     * Ticker last fetch timestamp
     */
    last_fetch_at?: string;
    /**
     * Ticker anomaly
     */
    is_anomaly?: boolean;
    /**
     * Ticker stale
     */
    is_stale?: boolean;
    /**
     * Ticker trade URL
     */
    trade_url?: string;
    /**
     * Ticker token info URL
     */
    token_info_url?: string | null;
    /**
     * Ticker base currency coin ID
     */
    coin_id?: string;
    /**
     * Ticker target currency coin ID
     */
    target_coin_id?: string;
    /**
     * Market cap in USD
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
}
Contract.MarketChart2 = MarketChart2;

export declare namespace Contract {
  export {
    type ContractGetResponse as ContractGetResponse,
    type ContractGetParams as ContractGetParams,
  };

  export {
    MarketChart2 as MarketChart2,
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetRangeResponse as MarketChartGetRangeResponse,
    type MarketChartGetParams as MarketChartGetParams,
    type MarketChartGetRangeParams as MarketChartGetRangeParams,
  };
}
export { Contract as ContractResource };
