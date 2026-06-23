// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class Markets extends APIResource {
  /**
   * To query all the supported coins with price, market cap, volume and market related data
   *
   * @param {MarketGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MarketGetResponse>} List of coins with market data
   *
   * @example
   * ```ts
   * const get_ = await client.coins.markets.get({
   *   vs_currency: "usd",
   *   ids: "bitcoin",
   *   names: "Bitcoin",
   *   symbols: "btc",
   * });
   * ```
   */
  get(params: MarketGetParams, options?: RequestOptions): APIPromise<MarketGetResponse> {
    const { vs_currency, ids, names, symbols, include_tokens, category, order, per_page, page, sparkline, price_change_percentage, locale, precision, include_rehypothecated } = params ?? {};
    return this._client.get("/coins/markets", { query: { vs_currency: vs_currency, ids: ids, names: names, symbols: symbols, include_tokens: include_tokens, category: category, order: order, per_page: per_page, page: page, sparkline: sparkline, price_change_percentage: price_change_percentage, locale: locale, precision: precision, include_rehypothecated: include_rehypothecated }, ...options });
  }
}

export interface MarketGetParams {
  /**
   * Target currency of coins and market data.
   * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
   * @default usd
   */
  vs_currency: string;
  /**
   * Coins' IDs, comma-separated if querying more than 1 coin.
   * *refers to [`/coins/list`](/reference/coins-list)
   * @default bitcoin
   */
  ids?: string;
  /**
   * Coins' names, comma-separated if querying more than 1 coin.
   * @default Bitcoin
   */
  names?: string;
  /**
   * Coins' symbols, comma-separated if querying more than 1 coin.
   * @default btc
   */
  symbols?: string;
  /**
   * For `symbols` lookups, specify `all` to include all matching tokens.
   * Default `top` returns top-ranked tokens by market cap or volume.
   */
  include_tokens?: "top" | "all";
  /**
   * Filter based on coins' category.
   * *refers to [`/coins/categories/list`](/reference/coins-categories-list)
   */
  category?: string;
  /**
   * Sort result by field.
   * Default: market_cap_desc
   */
  order?: "market_cap_asc" | "market_cap_desc" | "volume_asc" | "volume_desc" | "id_asc" | "id_desc";
  /**
   * Total results per page.
   * Default: 100
   * Valid values: 1...250
   */
  per_page?: number;
  /**
   * Page through results.
   * Default: 1
   */
  page?: number;
  /**
   * Include sparkline 7-day data.
   * Default: false
   */
  sparkline?: boolean;
  /**
   * Include price change percentage timeframe, comma-separated if querying more than 1 timeframe.
   * Valid values: `1h`, `24h`, `7d`, `14d`, `30d`, `200d`, `1y`
   */
  price_change_percentage?: string;
  /**
   * Language background.
   * Default: en
   */
  locale?: "ar" | "bg" | "cs" | "da" | "de" | "el" | "en" | "es" | "fi" | "fr" | "he" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "ko" | "lt" | "nl" | "no" | "pl" | "pt" | "ro" | "ru" | "sk" | "sl" | "sv" | "th" | "tr" | "uk" | "vi" | "zh" | "zh-tw";
  /**
   * Decimal places for currency price value
   */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";
  /**
   * Include rehypothecated tokens in results. When true, returns `market_cap_rank_with_rehypothecated` field.
   * Default: false
   */
  include_rehypothecated?: boolean;
}

export type MarketGetResponse = Array<MarketGetResponse.MarketGetResponseItem>;

export namespace MarketGetResponse {
  export interface MarketGetResponseItem {
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
     * Coin image URL
     */
    image: string;
    /**
     * Current price in target currency
     */
    current_price: number | null;
    /**
     * Market cap in target currency
     */
    market_cap: number | null;
    /**
     * Market cap rank
     */
    market_cap_rank: number | null;
    /**
     * Fully diluted valuation in target currency
     */
    fully_diluted_valuation: number | null;
    /**
     * Total trading volume in target currency
     */
    total_volume: number | null;
    /**
     * 24-hour price high in target currency
     */
    high_24h: number | null;
    /**
     * 24-hour price low in target currency
     */
    low_24h: number | null;
    /**
     * 24-hour price change in target currency
     */
    price_change_24h: number | null;
    /**
     * 24-hour price change percentage
     */
    price_change_percentage_24h: number | null;
    /**
     * 24-hour market cap change in target currency
     */
    market_cap_change_24h: number | null;
    /**
     * 24-hour market cap change percentage
     */
    market_cap_change_percentage_24h: number | null;
    /**
     * Circulating supply
     */
    circulating_supply: number | null;
    /**
     * Total supply
     */
    total_supply: number | null;
    /**
     * Max supply
     */
    max_supply: number | null;
    /**
     * All-time high price in target currency
     */
    ath: number | null;
    /**
     * All-time high change percentage
     */
    ath_change_percentage: number | null;
    /**
     * All-time high date
     * @format date-time
     */
    ath_date: string | null;
    /**
     * All-time low price in target currency
     */
    atl: number | null;
    /**
     * All-time low change percentage
     */
    atl_change_percentage: number | null;
    /**
     * All-time low date
     * @format date-time
     */
    atl_date: string | null;
    /**
     * Return on investment data
     */
    roi: MarketGetResponseItem.Roi | null;
    /**
     * Last updated timestamp
     * @format date-time
     */
    last_updated: string;
    /**
     * Market cap rank including rehypothecated tokens
     */
    market_cap_rank_with_rehypothecated?: number | null;
    /**
     * Sparkline price data for the last 7 days
     */
    sparkline_in_7d?: MarketGetResponseItem.SparklineIn7d;
    /**
     * 1-hour price change percentage in target currency
     */
    price_change_percentage_1h_in_currency?: number | null;
    /**
     * 24-hour price change percentage in target currency
     */
    price_change_percentage_24h_in_currency?: number | null;
    /**
     * 7-day price change percentage in target currency
     */
    price_change_percentage_7d_in_currency?: number | null;
    /**
     * 14-day price change percentage in target currency
     */
    price_change_percentage_14d_in_currency?: number | null;
    /**
     * 30-day price change percentage in target currency
     */
    price_change_percentage_30d_in_currency?: number | null;
    /**
     * 200-day price change percentage in target currency
     */
    price_change_percentage_200d_in_currency?: number | null;
    /**
     * 1-year price change percentage in target currency
     */
    price_change_percentage_1y_in_currency?: number | null;
  }

  export namespace MarketGetResponseItem {
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

    export interface SparklineIn7d {
      /**
       * Array of price values
       */
      price?: Array<number>;
    }
  }
}
export declare namespace Markets {
  export {
    type MarketGetResponse as MarketGetResponse,
    type MarketGetParams as MarketGetParams,
  };
}
export { Markets as MarketResource };
