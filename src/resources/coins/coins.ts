// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";
import { List } from "./list";
import { MarketChart } from "./market-chart";
import { Ohlc } from "./ohlc";
import { CirculatingSupplyChart } from "./circulating-supply-chart";
import { TotalSupplyChart } from "./total-supply-chart";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Coins extends APIResource {
  list: List = new List(this._client);
  marketChart: MarketChart = new MarketChart(this._client);
  ohlc: Ohlc = new Ohlc(this._client);
  circulatingSupplyChart: CirculatingSupplyChart = new CirculatingSupplyChart(this._client);
  totalSupplyChart: TotalSupplyChart = new TotalSupplyChart(this._client);

  /**
   * This endpoint allows you to **query the top 30 coins with largest price gain and loss by a specific time duration**
   */
  topGainersLosers(params: CoinTopGainersLosersParams, options?: RequestOptions): APIPromise<TopGainersLosers> {
    const { vs_currency, duration, price_change_percentage, top_coins } = params ?? {};
    return this._client.get("/coins/top_gainers_losers", { query: { vs_currency: vs_currency, duration: duration, price_change_percentage: price_change_percentage, top_coins: top_coins }, ...options });
  }
  /**
   * This endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**
   */
  markets(params: CoinMarketsParams, options?: RequestOptions): APIPromise<CoinsMarkets> {
    const { vs_currency, ids, names, symbols, include_tokens, category, order, per_page, page, sparkline, price_change_percentage, locale, precision, include_rehypothecated } = params ?? {};
    return this._client.get("/coins/markets", { query: { vs_currency: vs_currency, ids: ids, names: names, symbols: symbols, include_tokens: include_tokens, category: category, order: order, per_page: per_page, page: page, sparkline: sparkline, price_change_percentage: price_change_percentage, locale: locale, precision: precision, include_rehypothecated: include_rehypothecated }, ...options });
  }
  /**
   * This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on a particular coin ID**
   */
  id(id: string, params: CoinIdParams | null | undefined = {}, options?: RequestOptions): APIPromise<CoinsId> {
    const { localization, tickers, market_data, community_data, developer_data, sparkline, include_categories_details, dex_pair_format } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}`, { query: { localization: localization, tickers: tickers, market_data: market_data, community_data: community_data, developer_data: developer_data, sparkline: sparkline, include_categories_details: include_categories_details, dex_pair_format: dex_pair_format }, ...options });
  }
  /**
   * This endpoint allows you to **query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID**
   */
  idTickers(id: string, params: CoinIdTickersParams | null | undefined = {}, options?: RequestOptions): APIPromise<CoinsTickers> {
    const { exchange_ids, include_exchange_logo, page, order, depth, dex_pair_format } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/tickers`, { query: { exchange_ids: exchange_ids, include_exchange_logo: include_exchange_logo, page: page, order: order, depth: depth, dex_pair_format: dex_pair_format }, ...options });
  }
  /**
   * This endpoint allows you to **query the historical data (price, market cap, 24hrs volume, ...) at a given date for a coin based on a particular coin ID**
   */
  idHistory(id: string, params: CoinIdHistoryParams, options?: RequestOptions): APIPromise<CoinsHistoricalData> {
    const { date, localization } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/history`, { query: { date: date, localization: localization }, ...options });
  }
}

export interface TopGainersLosers {
  top_gainers?: Array<{ id?: string; symbol?: string; name?: string; image?: string; market_cap_rank?: number; usd?: number; usd_24h_vol?: number; usd_24h_change?: number | null; usd_1h_change?: number | null; usd_7d_change?: number | null; usd_14d_change?: number | null; usd_30d_change?: number | null; usd_200d_change?: number | null; usd_1y_change?: number | null }>;
  top_losers?: Array<{ id?: string; symbol?: string; name?: string; image?: string; market_cap_rank?: number; usd?: number; usd_24h_vol?: number; usd_24h_change?: number | null; usd_1h_change?: number | null; usd_7d_change?: number | null; usd_14d_change?: number | null; usd_30d_change?: number | null; usd_200d_change?: number | null; usd_1y_change?: number | null }>;
}

export type CoinsMarkets = Array<CoinsMarketsItem>;

export interface CoinsMarketsItem {
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
   * coin image url
   */
  image?: string;
  /**
   * coin current price in currency
   */
  current_price?: number | null;
  /**
   * coin market cap in currency
   */
  market_cap?: number | null;
  /**
   * coin rank by market cap
   */
  market_cap_rank?: number | null;
  /**
   * coin rank by market cap including rehypothecated tokens
   */
  market_cap_rank_with_rehypothecated?: number | null;
  /**
   * coin fully diluted valuation (fdv) in currency
   */
  fully_diluted_valuation?: number | null;
  /**
   * coin total trading volume in currency
   */
  total_volume?: number | null;
  /**
   * coin 24hr price high in currency
   */
  high_24h?: number | null;
  /**
   * coin 24hr price low in currency
   */
  low_24h?: number | null;
  /**
   * coin 24hr price change in currency
   */
  price_change_24h?: number | null;
  /**
   * coin 24hr price change in percentage
   */
  price_change_percentage_24h?: number | null;
  /**
   * coin 24hr market cap change in currency
   */
  market_cap_change_24h?: number | null;
  /**
   * coin 24hr market cap change in percentage
   */
  market_cap_change_percentage_24h?: number | null;
  /**
   * coin circulating supply
   */
  circulating_supply?: number | null;
  /**
   * coin total supply
   */
  total_supply?: number | null;
  /**
   * coin max supply
   */
  max_supply?: number | null;
  /**
   * coin all time high (ATH) in currency
   */
  ath?: number | null;
  /**
   * coin all time high (ATH) change in percentage
   */
  ath_change_percentage?: number | null;
  /**
   * coin all time high (ATH) date
   */
  ath_date?: string | null;
  /**
   * coin all time low (atl) in currency
   */
  atl?: number | null;
  /**
   * coin all time low (atl) change in percentage
   */
  atl_change_percentage?: number | null;
  /**
   * coin all time low (atl) date
   */
  atl_date?: string | null;
  /**
   * return on investment data
   */
  roi?: { times?: number; currency?: string; percentage?: number } | null;
  /**
   * coin last updated timestamp
   */
  last_updated?: string;
}

export interface CoinsId {
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
  asset_platform_id?: string | null;
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
   * detailed coin categories
   */
  categories_details?: Array<{ id?: string; name?: string }>;
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
   * coin sentiment votes up percentage
   */
  sentiment_votes_up_percentage?: number | null;
  /**
   * coin sentiment votes down percentage
   */
  sentiment_votes_down_percentage?: number | null;
  /**
   * coin ICO data
   */
  ico_data?: { ico_start_date?: string; ico_end_date?: string; short_desc?: string; description?: string; links?: Record<string, string>; softcap_currency?: string; hardcap_currency?: string; total_raised_currency?: string; softcap_amount?: number; hardcap_amount?: number; total_raised?: number; quote_pre_sale_currency?: string; base_pre_sale_amount?: number; quote_pre_sale_amount?: number; quote_public_sale_currency?: string; base_public_sale_amount?: number; quote_public_sale_amount?: number; accepting_currencies?: string; country_origin?: string; pre_sale_start_date?: string; pre_sale_end_date?: string; whitelist_url?: string; whitelist_start_date?: string; whitelist_end_date?: string; bounty_detail_url?: string; amount_for_sale?: number; kyc_required?: boolean; whitelist_available?: boolean; pre_sale_available?: boolean; pre_sale_ended?: boolean } | null;
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

export interface CoinsTickers {
  /**
   * coin name
   */
  name?: string;
  /**
   * list of tickers
   */
  tickers?: Array<{ base?: string; target?: string; market?: { name?: string; identifier?: string; has_trading_incentive?: boolean; logo?: string }; last?: number; volume?: number; cost_to_move_up_usd?: number; cost_to_move_down_usd?: number; converted_last?: { btc?: number; eth?: number; usd?: number }; converted_volume?: { btc?: number; eth?: number; usd?: number }; trust_score?: string | null; bid_ask_spread_percentage?: number; timestamp?: string; last_traded_at?: string; last_fetch_at?: string; is_anomaly?: boolean; is_stale?: boolean; trade_url?: string; token_info_url?: string | null; coin_id?: string; target_coin_id?: string; coin_mcap_usd?: number }>;
}

export interface CoinsHistoricalData {
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
   * coin localization
   */
  localization?: Record<string, string>;
  /**
   * coin image url
   */
  image?: { thumb?: string; small?: string };
  /**
   * coin market data
   */
  market_data?: { current_price?: { btc?: number; eur?: number; usd?: number }; market_cap?: { btc?: number; eur?: number; usd?: number }; total_volume?: { btc?: number; eur?: number; usd?: number } };
  /**
   * coin community data
   */
  community_data?: { facebook_likes?: number; reddit_average_posts_48h?: number; reddit_average_comments_48h?: number; reddit_subscribers?: number; reddit_accounts_active_48h?: number };
  /**
   * coin developer data
   */
  developer_data?: { forks?: number; stars?: number; subscribers?: number; total_issues?: number; closed_issues?: number; pull_requests_merged?: number; pull_request_contributors?: number; code_additions_deletions_4_weeks?: { additions?: number; deletions?: number }; commit_count_4_weeks?: number };
  /**
   * coin public interest stats
   */
  public_interest_stats?: { alexa_rank?: number; bing_matches?: number };
}

export interface CoinTopGainersLosersParams {
/**
 * target currency of coins
 *  *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
 */
  vs_currency: string;

/**
 * filter result by time range
 *  Default value: `24h`
 */
  duration?: "1h" | "24h" | "7d" | "14d" | "30d" | "60d" | "1y";

/**
 * include price change percentage timeframe, comma-separated if query more than 1 price change percentage timeframe
 *  Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y
 */
  price_change_percentage?: string;

/**
 * filter result by market cap ranking (top 300 to 1000) or all coins (including coins that do not have market cap)
 *  Default value: `1000`
 */
  top_coins?: "300" | "500" | "1000" | "all";

}

export interface CoinMarketsParams {
/**
 * target currency of coins and market data
 *  *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
 */
  vs_currency: string;

/**
 * coins' IDs, comma-separated if querying more than 1 coin.
 *  *refers to [`/coins/list`](/reference/coins-list).
 */
  ids?: string;

/**
 * coins' names, comma-separated if querying more than 1 coin.
 */
  names?: string;

/**
 * coins' symbols, comma-separated if querying more than 1 coin.
 */
  symbols?: string;

/**
 * for `symbols` lookups, specify `all` to include all matching tokens
 *  Default `top` returns top-ranked tokens (by market cap or volume)
 */
  include_tokens?: "top" | "all";

/**
 * filter based on coins' category
 *  *refers to [`/coins/categories/list`](/reference/coins-categories-list).
 */
  category?: string;

/**
 * sort result by field, default: market_cap_desc
 */
  order?: "market_cap_asc" | "market_cap_desc" | "volume_asc" | "volume_desc" | "id_asc" | "id_desc";

/**
 * total results per page, default: 100
 *  Valid values: 1...250
 */
  per_page?: number;

/**
 * page through results, default: 1
 */
  page?: number;

/**
 * include sparkline 7 days data, default: false
 */
  sparkline?: boolean;

/**
 * include price change percentage timeframe, comma-separated if query more than 1 timeframe
 *  Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y
 */
  price_change_percentage?: string;

/**
 * language background, default: en
 */
  locale?: "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "fi" | "fr" | "he" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "ko" | "lt" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sv" | "th" | "tr" | "uk" | "vi" | "zh" | "zh-tw";

/**
 * decimal place for currency price value
 */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";

/**
 * include rehypothecated tokens in results, default: false
 *  When true, returns `market_cap_rank_with_rehypothecated` field
 */
  include_rehypothecated?: boolean;

}

export interface CoinIdParams {
/**
 * include all the localized languages in the response, default: true
 */
  localization?: boolean;

/**
 * include tickers data, default: true
 */
  tickers?: boolean;

/**
 * include market data, default: true
 */
  market_data?: boolean;

/**
 * include community data, default: true
 */
  community_data?: boolean;

/**
 * include developer data, default: true
 */
  developer_data?: boolean;

/**
 * include sparkline 7 days data, default: false
 */
  sparkline?: boolean;

/**
 * include categories details, default: false
 */
  include_categories_details?: boolean;

/**
 * set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`
 */
  dex_pair_format?: "contract_address" | "symbol";

}

export interface CoinIdTickersParams {
/**
 * exchange ID
 *  *refers to [`/exchanges/list`](/reference/exchanges-list).
 */
  exchange_ids?: string;

/**
 * include exchange logo, default: false
 */
  include_exchange_logo?: boolean;

/**
 * page through results
 */
  page?: number;

/**
 * use this to sort the order of responses, default: trust_score_desc
 */
  order?: "trust_score_desc" | "trust_score_asc" | "volume_desc" | "volume_asc";

/**
 * include 2% orderbook depth, ie. `cost_to_move_up_usd` and `cost_to_move_down_usd`
 *  Default: false
 */
  depth?: boolean;

/**
 * set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`
 */
  dex_pair_format?: "contract_address" | "symbol";

}

export interface CoinIdHistoryParams {
/**
 * date of data snapshot (`YYYY-MM-DD`)
 */
  date: string;

/**
 * include all the localized languages in response, default: true
 */
  localization?: boolean;

}
export declare namespace Coins {
  export { List as List, MarketChart as MarketChart, Ohlc as Ohlc, CirculatingSupplyChart as CirculatingSupplyChart, TotalSupplyChart as TotalSupplyChart };
  export { type TopGainersLosers as TopGainersLosers, type CoinsMarkets as CoinsMarkets, type CoinsMarketsItem as CoinsMarketsItem, type CoinsId as CoinsId, type DetailPlatformData as DetailPlatformData, type CoinsTickers as CoinsTickers, type CoinsHistoricalData as CoinsHistoricalData, type CoinTopGainersLosersParams as CoinTopGainersLosersParams, type CoinMarketsParams as CoinMarketsParams, type CoinIdParams as CoinIdParams, type CoinIdTickersParams as CoinIdTickersParams, type CoinIdHistoryParams as CoinIdHistoryParams };
}
export { Coins as CoinResource };
