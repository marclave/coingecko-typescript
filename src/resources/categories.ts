// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Categories extends APIResource {
  /**
   * This endpoint allows you to **query all the coins categories on CoinGecko**
   */
  coinsList(options?: RequestOptions): APIPromise<CategoriesList> {
    return this._client.get("/coins/categories/list", options);
  }
  /**
   * This endpoint allows you to **query all the coins categories with market data (market cap, volume, ...) on CoinGecko**
   */
  coins(params: CategoryCoinsParams | null | undefined = {}, options?: RequestOptions): APIPromise<Categories> {
    const { order } = params ?? {};
    return this._client.get("/coins/categories", { query: { order: order }, ...options });
  }
}

export interface Categories {
  /**
   * category ID
   */
  id?: string;
  /**
   * category name
   */
  name?: string;
  /**
   * category market cap
   */
  market_cap?: number;
  /**
   * category market cap change in 24 hours
   */
  market_cap_change_24h?: number;
  /**
   * category description
   */
  content?: string;
  /**
   * IDs of top 3 coins in the category
   */
  top_3_coins_id?: Array<string>;
  /**
   * images of top 3 coins in the category
   */
  top_3_coins?: Array<string>;
  /**
   * category volume in 24 hours
   */
  volume_24h?: number;
  /**
   * category last updated time
   */
  updated_at?: string;
}

export interface CategoriesList {
  /**
   * category ID
   */
  category_id?: string;
  /**
   * category name
   */
  name?: string;
}

export interface CategoryCoinsParams {
/**
 * sort results by field, default: market_cap_desc
 */
  order?: "market_cap_desc" | "market_cap_asc" | "name_desc" | "name_asc" | "market_cap_change_24h_desc" | "market_cap_change_24h_asc";

}
export declare namespace Categories {
  export { type Categories as Categories, type CategoriesList as CategoriesList, type CategoryCoinsParams as CategoryCoinsParams };
}
export { Categories as CategoryResource };
