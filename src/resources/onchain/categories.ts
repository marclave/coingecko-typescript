// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Categories extends APIResource {
  /**
   * To query all the supported categories on GeckoTerminal
   */
  get(params: CategoryGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<OnchainCategoriesList> {
    const { page, sort } = params ?? {};
    return this._client.get("/onchain/categories", { query: { page: page, sort: sort }, ...options });
  }
  /**
   * To query all the pools based on the provided category ID
   */
  getPools(category_id: string, params: CategoryGetPoolsParams | null | undefined = {}, options?: RequestOptions): APIPromise<CategoriesPools> {
    const { include, page, sort } = params ?? {};
    return this._client.get(__scalarPath`/onchain/categories/${category_id}/pools`, { query: { include: include, page: page, sort: sort }, ...options });
  }
}

export interface OnchainCategoriesList {
  data: Array<{ id: string; type: string; attributes: { name: string; description: string; volume_change_percentage: { h1?: string; h6?: string; h12?: string; h24?: string }; reserve_in_usd: string; fdv_usd: string; h24_volume_usd: string; h24_tx_count: number } }>;
}

export interface CategoriesPools {
  data: Array<{ id: string; type: string; attributes: { base_token_price_usd: string; base_token_price_native_currency: string | null; quote_token_price_usd: string; quote_token_price_native_currency: string | null; base_token_price_quote_token: string | null; quote_token_price_base_token: string | null; address: string; name: string; pool_created_at: string; fdv_usd: string | null; market_cap_usd: string | null; price_change_percentage: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; reserve_in_usd: string | null; h24_volume_usd: string; h24_tx_count: number }; relationships: { base_token?: { data?: { id?: string; type?: string } }; quote_token?: { data?: { id?: string; type?: string } }; network?: { data?: { id?: string; type?: string } }; dex?: { data?: { id?: string; type?: string } } } }>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { address?: string; name?: string; symbol?: string; decimals?: number; image_url?: string | null; coingecko_coin_id?: string | null; coingecko_asset_platform_id?: string } }>;
}

export interface CategoryGetParams {
/**
 * Page through results.
 * Default value: 1
 */
  page?: number;

/**
 * Sort the categories by field.
 * Default: `h6_volume_percentage_desc`
 */
  sort?: "h1_volume_percentage_desc" | "h6_volume_percentage_desc" | "h12_volume_percentage_desc" | "h24_tx_count_desc" | "h24_volume_usd_desc" | "fdv_usd_desc" | "reserve_in_usd_desc";

}

export interface CategoryGetPoolsParams {
/**
 * Attributes to include, comma-separated if more than one.
 * Available values: `base_token`, `quote_token`, `dex`, `network`
 */
  include?: string;

/**
 * Page through results.
 * Default value: 1
 */
  page?: number;

/**
 * Sort the pools by field.
 * Default: `pool_created_at_desc`
 */
  sort?: "m5_trending" | "h1_trending" | "h6_trending" | "h24_trending" | "h24_tx_count_desc" | "h24_volume_usd_desc" | "pool_created_at_desc" | "h24_price_change_percentage_desc";

}
export declare namespace Categories {
  export { type OnchainCategoriesList as OnchainCategoriesList, type CategoriesPools as CategoriesPools, type CategoryGetParams as CategoryGetParams, type CategoryGetPoolsParams as CategoryGetPoolsParams };
}
export { Categories as CategoryResource };
