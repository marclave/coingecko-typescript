// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Search extends APIResource {
  /**
   * This endpoint allows you to **search for coins, categories and markets listed on CoinGecko**
   */
  data(params: SearchDataParams, options?: RequestOptions): APIPromise<Search> {
    const { query } = params ?? {};
    return this._client.get("/search", { query: { query: query }, ...options });
  }
}

export interface Search {
  coins?: Array<{ id?: string; name?: string; api_symbol?: string; symbol?: string; market_cap_rank?: number; thumb?: string; large?: string }>;
  exchanges?: Array<{ id?: string; name?: string; market_type?: string; thumb?: string; large?: string }>;
  icos?: Array<string>;
  categories?: Array<{ id?: string; name?: string }>;
  nfts?: Array<{ id?: string; name?: string; symbol?: string; thumb?: string }>;
}

export interface SearchDataParams {
/**
 * search query
 */
  query: string;

}
export declare namespace Search {
  export { type Search as Search, type SearchDataParams as SearchDataParams };
}
export { Search as SearchResource };
