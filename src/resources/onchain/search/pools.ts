// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Pools extends APIResource {
  /**
   * To search for pools across all networks by pool address, token name, token symbol, or token contract address
   */
  get(params: PoolGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<PoolSearch> {
    const { query, network, include, page } = params ?? {};
    return this._client.get("/onchain/search/pools", { query: { query: query, network: network, include: include, page: page }, ...options });
  }
}

export interface PoolSearch {
  data: Array<{ id: string; type: string; attributes: { base_token_price_usd: string; base_token_price_native_currency: string | null; quote_token_price_usd: string; quote_token_price_native_currency: string | null; base_token_price_quote_token: string | null; quote_token_price_base_token: string | null; address: string; name: string; pool_created_at: string; fdv_usd: string | null; market_cap_usd: string | null; price_change_percentage: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; transactions: { m5?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m15?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m30?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h1?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h6?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h24?: { buys?: number; sells?: number; buyers?: number; sellers?: number } }; volume_usd: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; reserve_in_usd: string | null }; relationships: { base_token?: { data?: { id?: string; type?: string } }; quote_token?: { data?: { id?: string; type?: string } }; network?: { data?: { id?: string; type?: string } }; dex?: { data?: { id?: string; type?: string } } } }>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { address?: string; name?: string; symbol?: string; decimals?: number; image_url?: string | null; coingecko_coin_id?: string | null; coingecko_asset_platform_id?: string } }>;
}

export interface PoolGetParams {
/**
 * Search query: pool contract address, token name, token symbol, or token contract address.
 */
  query?: string;

/**
 * Network ID.
 * *refers to [`/onchain/networks`](/reference/networks-list).
 */
  network?: string;

/**
 * Attributes to include, comma-separated if more than one.
 * Available values: `base_token`, `quote_token`, `dex`
 */
  include?: string;

/**
 * Page through results.
 * Default value: 1
 */
  page?: number;

}
export declare namespace Pools {
  export { type PoolSearch as PoolSearch, type PoolGetParams as PoolGetParams };
}
export { Pools as PoolResource };
