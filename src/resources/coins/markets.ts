// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Markets extends APIResource {
  /**
   * To query all the supported coins with price, market cap, volume and market related data
   */
  get(params: MarketGetParams, options?: RequestOptions): APIPromise<CoinsMarkets> {
    const { vs_currency, ids, names, symbols, include_tokens, category, order, per_page, page, sparkline, price_change_percentage, locale, precision, include_rehypothecated } = params ?? {};
    return this._client.get("/coins/markets", { query: { vs_currency: vs_currency, ids: ids, names: names, symbols: symbols, include_tokens: include_tokens, category: category, order: order, per_page: per_page, page: page, sparkline: sparkline, price_change_percentage: price_change_percentage, locale: locale, precision: precision, include_rehypothecated: include_rehypothecated }, ...options });
  }
}

export type CoinsMarkets = Array<{ id: string; symbol: string; name: string; image: string; current_price: number | null; market_cap: number | null; market_cap_rank: number | null; fully_diluted_valuation: number | null; total_volume: number | null; high_24h: number | null; low_24h: number | null; price_change_24h: number | null; price_change_percentage_24h: number | null; market_cap_change_24h: number | null; market_cap_change_percentage_24h: number | null; circulating_supply: number | null; total_supply: number | null; max_supply: number | null; ath: number | null; ath_change_percentage: number | null; ath_date: string | null; atl: number | null; atl_change_percentage: number | null; atl_date: string | null; roi: { times?: number; currency?: string; percentage?: number } | null; last_updated: string; market_cap_rank_with_rehypothecated?: number | null; sparkline_in_7d?: { price?: Array<number> }; price_change_percentage_1h_in_currency?: number | null; price_change_percentage_24h_in_currency?: number | null; price_change_percentage_7d_in_currency?: number | null; price_change_percentage_14d_in_currency?: number | null; price_change_percentage_30d_in_currency?: number | null; price_change_percentage_200d_in_currency?: number | null; price_change_percentage_1y_in_currency?: number | null }>;

export interface MarketGetParams {
/**
 * Target currency of coins and market data.
 * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
 */
  vs_currency: string;

/**
 * Coins' IDs, comma-separated if querying more than 1 coin.
 * *refers to [`/coins/list`](/reference/coins-list)
 */
  ids?: string;

/**
 * Coins' names, comma-separated if querying more than 1 coin.
 */
  names?: string;

/**
 * Coins' symbols, comma-separated if querying more than 1 coin.
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
export declare namespace Markets {
  export { type CoinsMarkets as CoinsMarkets, type MarketGetParams as MarketGetParams };
}
export { Markets as MarketResource };
