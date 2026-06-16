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

export class Trending extends APIResource {
  /**
   * To query trending search coins, NFTs and categories on CoinGecko in the last 24 hours
   */
  get(params: TrendingGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<TrendingSearch> {
    const { show_max } = params ?? {};
    return this._client.get("/search/trending", { query: { show_max: show_max }, ...options });
  }
}

export interface TrendingSearch {
  coins: Array<{ item: { id: string; coin_id: number; name: string; symbol: string; market_cap_rank: number; thumb: string; small: string; large: string; slug: string; price_btc: number; score: number; data: { price: number; price_btc: string; price_change_percentage_24h: Record<string, number>; market_cap: string; market_cap_btc: string; total_volume: string; total_volume_btc: string; sparkline: string; content: { title?: string; description?: string } | null } } }>;
  nfts: Array<{ id: string; name: string; symbol: string; thumb: string; nft_contract_id: number; native_currency_symbol: string; floor_price_in_native_currency: number; floor_price_24h_percentage_change: number; data: { floor_price: string; floor_price_in_usd_24h_percentage_change: string; h24_volume: string; h24_average_sale_price: string; sparkline: string; content: { title?: string; description?: string } | null } }>;
  categories: Array<{ id: number; name: string; top_3_coins_images: Array<string>; market_cap_1h_change: number; slug: string; coins_count: string; data: { market_cap: number; market_cap_btc: number; total_volume: number; total_volume_btc: number; market_cap_change_percentage_24h: Record<string, number>; sparkline: string } }>;
}

export interface TrendingGetParams {
/**
 * Show max number of results available for the given type.
 * Available values: `coins`, `nfts`, `categories`
 * e.g. `coins` or `coins,nfts,categories`
 */
  show_max?: string;

}
export declare namespace Trending {
  export { type TrendingSearch as TrendingSearch, type TrendingGetParams as TrendingGetParams };
}
export { Trending as TrendingResource };
