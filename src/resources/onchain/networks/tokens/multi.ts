// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Multi extends APIResource {
  /**
   * To query multiple tokens data based on the provided token contract addresses on a network
   */
  getAddresses(network: string, addresses: string, params: MultiGetAddressesParams | null | undefined = {}, options?: RequestOptions): APIPromise<MultiTokenData> {
    const { include, include_composition, include_inactive_source } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/multi/${addresses}`, { query: { include: include, include_composition: include_composition, include_inactive_source: include_inactive_source }, ...options });
  }
}

export interface MultiTokenData {
  data: Array<TokenItem>;
  /**
   * Included top pool data, present when include=top_pools is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { base_token_price_usd?: string; base_token_price_native_currency?: string; quote_token_price_usd?: string; quote_token_price_native_currency?: string; base_token_price_quote_token?: string; quote_token_price_base_token?: string; address?: string; name?: string; pool_created_at?: string; fdv_usd?: string | null; market_cap_usd?: string | null; price_change_percentage?: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; transactions?: { m5?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m15?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m30?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h1?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h6?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h24?: { buys?: number; sells?: number; buyers?: number; sellers?: number } }; volume_usd?: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; reserve_in_usd?: string }; relationships?: { base_token?: { data?: { id?: string; type?: string } }; quote_token?: { data?: { id?: string; type?: string } }; dex?: { data?: { id?: string; type?: string } } } }>;
}

export interface TokenItem {
  /**
   * Token identifier
   */
  id: string;
  /**
   * Resource type
   */
  type: string;
  attributes: { address: string; name: string; symbol: string; decimals: number; image_url: string | null; coingecko_coin_id: string | null; total_supply: string; normalized_total_supply: string; price_usd: string | null; fdv_usd: string | null; total_reserve_in_usd: string; volume_usd: { h24?: string }; market_cap_usd: string | null; last_trade_timestamp?: string; launchpad_details?: { graduation_percentage?: number; completed?: boolean; completed_at?: string | null; migrated_destination_pool_address?: string | null } };
  relationships: { top_pools?: { data?: Array<{ id?: string; type?: string }> } };
}

export interface MultiGetAddressesParams {
/**
 * Attributes to include.
 */
  include?: "top_pools";

/**
 * Include pool composition.
 * Default: `false`
 */
  include_composition?: boolean;

/**
 * Include tokens from inactive pools using the most recent swap.
 * Default: `false`
 */
  include_inactive_source?: boolean;

}
export declare namespace Multi {
  export { type MultiTokenData as MultiTokenData, type TokenItem as TokenItem, type MultiGetAddressesParams as MultiGetAddressesParams };
}
export { Multi as MultiResource };
