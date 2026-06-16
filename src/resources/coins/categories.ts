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

export class Categories extends APIResource {
  /**
   * To query all the supported coins categories on CoinGecko
   */
  getList(options?: RequestOptions): APIPromise<CategoriesList> {
    return this._client.get("/coins/categories/list", options);
  }
  /**
   * To query all the coins categories with market data (market cap, volume, etc.) on CoinGecko
   */
  get(params: CategoryGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Categories2> {
    const { order } = params ?? {};
    return this._client.get("/coins/categories", { query: { order: order }, ...options });
  }
}

export type Categories2 = Array<{ id: string; name: string; market_cap: number; market_cap_change_24h: number; content: string; top_3_coins_id: Array<string>; top_3_coins: Array<string>; volume_24h: number; updated_at: string }>;

export type CategoriesList = Array<{ category_id: string; name: string }>;

export interface CategoryGetParams {
/**
 * Sort results by field.
 * Default: `market_cap_desc`
 */
  order?: "market_cap_desc" | "market_cap_asc" | "name_desc" | "name_asc" | "market_cap_change_24h_desc" | "market_cap_change_24h_asc";

}
export declare namespace Categories {
  export { type Categories2 as Categories, type CategoriesList as CategoriesList, type CategoryGetParams as CategoryGetParams };
}
export { Categories as CategoryResource };
