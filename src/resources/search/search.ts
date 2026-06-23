// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Trending, type TrendingGetResponse, type TrendingGetParams } from "./trending";

export class SearchResource extends APIResource {
  trending: Trending = new Trending(this._client);

  /**
   * To search for coins, categories and markets listed on CoinGecko
   *
   * @param {SearchGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Search>} Search results
   *
   * @example
   * ```ts
   * const search = await client.search.get({
   *   query: "query",
   * });
   * ```
   */
  get(params: SearchGetParams, options?: RequestOptions): APIPromise<Search> {
    const { query } = params ?? {};
    return this._client.get("/search", { query: { query: query }, ...options });
  }
}

export interface Search {
  coins: Array<{ id: string; name: string; api_symbol: string; symbol: string; market_cap_rank: number | null; thumb: string; large: string }>;
  exchanges: Array<{ id: string; name: string; market_type: string; thumb: string; large: string }>;
  icos: Array<Record<string, unknown>>;
  categories: Array<{ id: string; name: string }>;
  nfts: Array<{ id: string; name: string; symbol: string; thumb: string }>;
}

export interface SearchGetParams {
  /**
   * Search query
   */
  query: string;
}
SearchResource.Trending = Trending;

export declare namespace SearchResource {
  export {
    type Search as Search,
    type SearchGetParams as SearchGetParams,
  };

  export {
    Trending as Trending,
    type TrendingGetResponse as TrendingGetResponse,
    type TrendingGetParams as TrendingGetParams,
  };
}
