// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import { MarketChart, type MarketChartGetResponse, type MarketChartGetRangeResponse, type MarketChartGetParams, type MarketChartGetRangeParams } from "./market-chart";
import { Ohlc, type OhlcGetResponse, type OhlcGetRangeResponse, type OhlcGetParams, type OhlcGetRangeParams } from "./ohlc";
import { Contract, type ContractGetResponse, type ContractGetParams } from "./contract/contract";
import { CirculatingSupplyChartResource, type CirculatingSupplyChart, type CirculatingSupplyChartGetParams, type CirculatingSupplyChartGetRangeParams } from "./circulating-supply-chart";
import { TotalSupplyChartResource, type TotalSupplyChart, type TotalSupplyChartGetParams, type TotalSupplyChartGetRangeParams } from "./total-supply-chart";
import { List, type ListGetNewResponse, type ListGetResponse, type ListGetParams } from "./list";
import { CategoryResource, type Categories, type CategoryGetListResponse, type CategoryGetParams } from "./categories";
import { History, type HistoryGetResponse, type HistoryGetParams } from "./history";
import { Markets, type MarketGetResponse, type MarketGetParams } from "./markets";
import { Tickers, type TickerGetResponse, type TickerGetParams } from "./tickers";
import { TopGainersLosers, type TopGainersLosersItem, type TopGainersLoserGetParams } from "./top-gainers-losers";

export class Coins extends APIResource {
  marketChart: MarketChart = new MarketChart(this._client);
  ohlc: Ohlc = new Ohlc(this._client);
  contract: Contract = new Contract(this._client);
  circulatingSupplyChart: CirculatingSupplyChartResource = new CirculatingSupplyChartResource(this._client);
  totalSupplyChart: TotalSupplyChartResource = new TotalSupplyChartResource(this._client);
  list: List = new List(this._client);
  categories: CategoryResource = new CategoryResource(this._client);
  history: History = new History(this._client);
  markets: Markets = new Markets(this._client);
  tickers: Tickers = new Tickers(this._client);
  topGainersLosers: TopGainersLosers = new TopGainersLosers(this._client);

  /**
   * To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on a particular coin ID
   *
   * @param {string} id - Coin ID.
   * @param {CoinGetIDParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CoinGetIDResponse>} Coin data
   *
   * @example
   * ```ts
   * const getID = await client.coins.getID("bitcoin");
   * ```
   */
  getID(id: string, params: CoinGetIDParams | null | undefined = {}, options?: RequestOptions): APIPromise<CoinGetIDResponse> {
    const { localization, tickers, market_data, community_data, developer_data, sparkline, include_categories_details, dex_pair_format } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}`, { query: { localization: localization, tickers: tickers, market_data: market_data, community_data: community_data, developer_data: developer_data, sparkline: sparkline, include_categories_details: include_categories_details, dex_pair_format: dex_pair_format }, ...options });
  }
}

export interface TopGainersLosers2 {
  top_gainers: Array<TopGainersLosersItem>;
  top_losers: Array<TopGainersLosersItem>;
}

export interface CoinGetIDParams {
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

export interface CoinGetIDResponse {
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
  detail_platforms: Record<string, CoinGetIDResponse.DetailPlatforms>;
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
  links: CoinGetIDResponse.Links;
  /**
   * Coin image URL
   */
  image: CoinGetIDResponse.Image;
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
  status_updates: Array<CoinGetIDResponse.StatusUpdate>;
  /**
   * Last updated timestamp
   */
  last_updated: string;
  /**
   * Detailed coin categories
   */
  categories_details?: Array<CoinGetIDResponse.CategoriesDetail>;
  /**
   * Coin name localization
   */
  localization?: Record<string, string>;
  /**
   * ICO data
   */
  ico_data?: CoinGetIDResponse.IcoData | null;
  /**
   * Market data
   */
  market_data?: CoinGetIDResponse.MarketData;
  /**
   * Community data
   */
  community_data?: CoinGetIDResponse.CommunityData;
  /**
   * Developer data
   */
  developer_data?: CoinGetIDResponse.DeveloperData;
  /**
   * Tickers
   */
  tickers?: Array<CoinGetIDResponse.Ticker>;
}

export namespace CoinGetIDResponse {
  export interface DetailPlatforms {
    /**
     * Token decimal place
     */
    decimal_place?: number | null;
    /**
     * Token contract address
     */
    contract_address?: string;
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

  export interface CategoriesDetail {
    /**
     * Category ID
     */
    id?: string;
    /**
     * Category name
     */
    name?: string;
  }

  export interface IcoData {
    /**
     * ICO start date
     */
    ico_start_date?: string;
    /**
     * ICO end date
     */
    ico_end_date?: string;
    /**
     * Short description
     */
    short_desc?: string;
    /**
     * Detailed description
     */
    description?: string;
    /**
     * ICO related links
     */
    links?: Record<string, string>;
    /**
     * Softcap currency
     */
    softcap_currency?: string;
    /**
     * Hardcap currency
     */
    hardcap_currency?: string;
    /**
     * Total raised currency
     */
    total_raised_currency?: string;
    /**
     * Softcap amount
     */
    softcap_amount?: number;
    /**
     * Hardcap amount
     */
    hardcap_amount?: number;
    /**
     * Total raised amount
     */
    total_raised?: number;
    /**
     * Quote pre-sale currency
     */
    quote_pre_sale_currency?: string;
    /**
     * Base pre-sale amount
     */
    base_pre_sale_amount?: number;
    /**
     * Quote pre-sale amount
     */
    quote_pre_sale_amount?: number;
    /**
     * Quote public sale currency
     */
    quote_public_sale_currency?: string;
    /**
     * Base public sale amount
     */
    base_public_sale_amount?: number;
    /**
     * Quote public sale amount
     */
    quote_public_sale_amount?: number;
    /**
     * Accepting currencies
     */
    accepting_currencies?: string;
    /**
     * Country of origin
     */
    country_origin?: string;
    /**
     * Pre-sale start date
     */
    pre_sale_start_date?: string;
    /**
     * Pre-sale end date
     */
    pre_sale_end_date?: string;
    /**
     * Whitelist URL
     */
    whitelist_url?: string;
    /**
     * Whitelist start date
     */
    whitelist_start_date?: string;
    /**
     * Whitelist end date
     */
    whitelist_end_date?: string;
    /**
     * Bounty detail URL
     */
    bounty_detail_url?: string;
    /**
     * Amount for sale
     */
    amount_for_sale?: number;
    /**
     * KYC required
     */
    kyc_required?: boolean;
    /**
     * Whitelist available
     */
    whitelist_available?: boolean;
    /**
     * Pre-sale available
     */
    pre_sale_available?: boolean;
    /**
     * Pre-sale ended
     */
    pre_sale_ended?: boolean;
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
Coins.MarketChart = MarketChart;
Coins.Ohlc = Ohlc;
Coins.Contract = Contract;
Coins.CirculatingSupplyChartResource = CirculatingSupplyChartResource;
Coins.TotalSupplyChartResource = TotalSupplyChartResource;
Coins.List = List;
Coins.CategoryResource = CategoryResource;
Coins.History = History;
Coins.Markets = Markets;
Coins.Tickers = Tickers;
Coins.TopGainersLosers = TopGainersLosers;

export declare namespace Coins {
  export {
    type TopGainersLosers2 as TopGainersLosers,
    type CoinGetIDResponse as CoinGetIDResponse,
    type CoinGetIDParams as CoinGetIDParams,
  };

  export {
    MarketChart as MarketChart,
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetRangeResponse as MarketChartGetRangeResponse,
    type MarketChartGetParams as MarketChartGetParams,
    type MarketChartGetRangeParams as MarketChartGetRangeParams,
  };

  export {
    Ohlc as Ohlc,
    type OhlcGetResponse as OhlcGetResponse,
    type OhlcGetRangeResponse as OhlcGetRangeResponse,
    type OhlcGetParams as OhlcGetParams,
    type OhlcGetRangeParams as OhlcGetRangeParams,
  };

  export {
    Contract as Contract,
    type ContractGetResponse as ContractGetResponse,
    type ContractGetParams as ContractGetParams,
  };

  export {
    CirculatingSupplyChartResource as CirculatingSupplyChartResource,
    type CirculatingSupplyChart as CirculatingSupplyChart,
    type CirculatingSupplyChartGetParams as CirculatingSupplyChartGetParams,
    type CirculatingSupplyChartGetRangeParams as CirculatingSupplyChartGetRangeParams,
  };

  export {
    TotalSupplyChartResource as TotalSupplyChartResource,
    type TotalSupplyChart as TotalSupplyChart,
    type TotalSupplyChartGetParams as TotalSupplyChartGetParams,
    type TotalSupplyChartGetRangeParams as TotalSupplyChartGetRangeParams,
  };

  export {
    List as List,
    type ListGetNewResponse as ListGetNewResponse,
    type ListGetResponse as ListGetResponse,
    type ListGetParams as ListGetParams,
  };

  export {
    CategoryResource as CategoryResource,
    type Categories as Categories,
    type CategoryGetListResponse as CategoryGetListResponse,
    type CategoryGetParams as CategoryGetParams,
  };

  export {
    History as History,
    type HistoryGetResponse as HistoryGetResponse,
    type HistoryGetParams as HistoryGetParams,
  };

  export {
    Markets as Markets,
    type MarketGetResponse as MarketGetResponse,
    type MarketGetParams as MarketGetParams,
  };

  export {
    Tickers as Tickers,
    type TickerGetResponse as TickerGetResponse,
    type TickerGetParams as TickerGetParams,
  };

  export {
    TopGainersLosers as TopGainersLosers,
    type TopGainersLosersItem as TopGainersLosersItem,
    type TopGainersLoserGetParams as TopGainersLoserGetParams,
  };
}
export { Coins as CoinResource };
