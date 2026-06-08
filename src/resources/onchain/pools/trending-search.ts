// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class TrendingSearch extends APIResource {
  /**
   * To query all the trending search pools across all networks on GeckoTerminal
   */
  get(params: TrendingSearchGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<TrendingSearchPools> {
    const { include, pools } = params ?? {};
    return this._client.get("/onchain/pools/trending_search", { query: { include: include, pools: pools }, ...options });
  }
}

export interface TrendingSearchPools {
  data: Array<{ id: string; type: string; attributes: { trending_rank: number; address: string; name: string; pool_created_at: string; fdv_usd: string | null; market_cap_usd: string | null; volume_usd: { h24?: string }; reserve_in_usd: string | null }; relationships: { base_token?: { data?: { id?: string; type?: string } }; quote_token?: { data?: { id?: string; type?: string } }; network?: { data?: { id?: string; type?: string } }; dex?: { data?: { id?: string; type?: string } } } }>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { address?: string; name?: string; symbol?: string; decimals?: number; image_url?: string | null; coingecko_coin_id?: string | null; coingecko_asset_platform_id?: string } }>;
}

export interface TrendingSearchGetParams {
/**
 * Attributes to include, comma-separated if more than one.
 * Available values: `base_token`, `quote_token`, `dex`, `network`
 */
  include?: string;

/**
 * Number of pools to return, maximum 10.
 * Default value: 4
 */
  pools?: number;

}
export declare namespace TrendingSearch {
  export { type TrendingSearchPools as TrendingSearchPools, type TrendingSearchGetParams as TrendingSearchGetParams };
}
export { TrendingSearch as TrendingSearchResource };
