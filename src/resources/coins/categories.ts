// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class CategoryResource extends APIResource {
  /**
   * To query all the supported coins categories on CoinGecko
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryGetListResponse>} List of coin categories
   *
   * @example
   * ```ts
   * const getList = await client.coins.categories.getList();
   * ```
   */
  getList(options?: RequestOptions): APIPromise<CategoryGetListResponse> {
    return this._client.get("/coins/categories/list", options);
  }

  /**
   * To query all the coins categories with market data (market cap, volume, etc.) on CoinGecko
   *
   * @param {CategoryGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Categories>} List of coin categories with market data
   *
   * @example
   * ```ts
   * const categories = await client.coins.categories.get();
   * ```
   */
  get(params: CategoryGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Categories> {
    const { order } = params ?? {};
    return this._client.get("/coins/categories", { query: { order: order }, ...options });
  }
}

export type Categories = Array<{ id: string; name: string; market_cap: number; market_cap_change_24h: number; content: string; top_3_coins_id: Array<string>; top_3_coins: Array<string>; volume_24h: number; updated_at: string }>;

export type CategoryGetListResponse = Array<CategoryGetListResponse.CategoryGetListResponseItem>;

export namespace CategoryGetListResponse {
  export interface CategoryGetListResponseItem {
    /**
     * Category ID
     */
    category_id: string;
    /**
     * Category name
     */
    name: string;
  }
}

export interface CategoryGetParams {
  /**
   * Sort results by field.
   * Default: `market_cap_desc`
   */
  order?: "market_cap_desc" | "market_cap_asc" | "name_desc" | "name_asc" | "market_cap_change_24h_desc" | "market_cap_change_24h_asc";
}
export declare namespace CategoryResource {
  export {
    type Categories as Categories,
    type CategoryGetListResponse as CategoryGetListResponse,
    type CategoryGetParams as CategoryGetParams,
  };
}
