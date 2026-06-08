// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { path as __scalarPath } from "../../../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Dexes extends APIResource {
  /**
   * To query all the top pools based on the provided network and decentralized exchange (DEX)
   */
  getPools(network: string, dex: string, params: DexGetPoolsParams | null | undefined = {}, options?: RequestOptions): APIPromise<Pool> {
    const { include, page, sort, include_gt_community_data } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/dexes/${dex}/pools`, { query: { include: include, page: page, sort: sort, include_gt_community_data: include_gt_community_data }, ...options });
  }
  /**
   * To query all the supported decentralized exchanges (DEXs) based on the provided network on GeckoTerminal
   */
  get(network: string, params: DexGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<DexesList> {
    const { page } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/dexes`, { query: { page: page }, ...options });
  }
}

export interface Pool {
  data: Array<{ id: string; type: string; attributes: { base_token_price_usd: string; base_token_price_native_currency: string | null; quote_token_price_usd: string; quote_token_price_native_currency: string | null; base_token_price_quote_token: string | null; quote_token_price_base_token: string | null; address: string; name: string; pool_created_at: string; fdv_usd: string | null; market_cap_usd: string | null; price_change_percentage: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; transactions: { m5?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m15?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m30?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h1?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h6?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h24?: { buys?: number; sells?: number; buyers?: number; sellers?: number } }; volume_usd: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; reserve_in_usd: string | null; token_price_usd?: string; sentiment_vote_positive_percentage?: number; sentiment_vote_negative_percentage?: number; community_sus_report?: number }; relationships: { base_token?: { data?: { id?: string; type?: string } }; quote_token?: { data?: { id?: string; type?: string } }; network?: { data?: { id?: string; type?: string } }; dex?: { data?: { id?: string; type?: string } } } }>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { address?: string; name?: string; symbol?: string; decimals?: number; image_url?: string | null; coingecko_coin_id?: string | null; coingecko_asset_platform_id?: string } }>;
}

export interface DexesList {
  data: Array<{ id: string; type: string; attributes: { name: string } }>;
}

export interface DexGetPoolsParams {
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

/**
 * Sort the pools by field.
 * Default: `h24_tx_count_desc`
 */
  sort?: "h24_tx_count_desc" | "h24_volume_usd_desc";

/**
 * Include GeckoTerminal community data (sentiment votes, suspicious reports).
 * Default: `false`
 */
  include_gt_community_data?: boolean;

}

export interface DexGetParams {
/**
 * Page through results.
 * Default value: 1
 */
  page?: number;

}
export declare namespace Dexes {
  export { type Pool as Pool, type DexesList as DexesList, type DexGetPoolsParams as DexGetPoolsParams, type DexGetParams as DexGetParams };
}
export { Dexes as DexResource };
