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
   * To query multiple pools based on the provided network and pool addresses
   */
  getAddresses(network: string, addresses: string, params: MultiGetAddressesParams | null | undefined = {}, options?: RequestOptions): APIPromise<MultiPoolAddressData> {
    const { include, include_volume_breakdown, include_composition } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools/multi/${addresses}`, { query: { include: include, include_volume_breakdown: include_volume_breakdown, include_composition: include_composition }, ...options });
  }
}

export interface MultiPoolAddressData {
  data: Array<PoolAddressItem>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { address?: string; name?: string; symbol?: string; decimals?: number; image_url?: string; coingecko_coin_id?: string } }>;
}

export interface PoolAddressItem {
  /**
   * Pool identifier
   */
  id: string;
  /**
   * Resource type
   */
  type: string;
  attributes: { base_token_price_usd: string; base_token_price_native_currency: string; quote_token_price_usd: string; quote_token_price_native_currency: string; base_token_price_quote_token: string; quote_token_price_base_token: string; address: string; name: string; pool_name: string; pool_fee_percentage: string; pool_created_at: string; fdv_usd: string | null; market_cap_usd: string | null; price_change_percentage: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; transactions: { m5?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m15?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m30?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h1?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h6?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h24?: { buys?: number; sells?: number; buyers?: number; sellers?: number } }; volume_usd: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; reserve_in_usd: string; locked_liquidity_percentage: string; base_token_balance?: string; base_token_liquidity_usd?: string; quote_token_balance?: string; quote_token_liquidity_usd?: string; net_buy_volume_usd?: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; buy_volume_usd?: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; sell_volume_usd?: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string } };
  /**
   * Related resources
   */
  relationships: { base_token?: { data?: { id?: string; type?: string } }; quote_token?: { data?: { id?: string; type?: string } }; dex?: { data?: { id?: string; type?: string } } };
}

export interface MultiGetAddressesParams {
/**
 * Attributes to include, comma-separated if more than one.
 * Available values: `base_token`, `quote_token`, `dex`
 */
  include?: string;

/**
 * Include volume breakdown.
 * Default: `false`
 */
  include_volume_breakdown?: boolean;

/**
 * Include pool composition.
 * Default: `false`
 */
  include_composition?: boolean;

}
export declare namespace Multi {
  export { type MultiPoolAddressData as MultiPoolAddressData, type PoolAddressItem as PoolAddressItem, type MultiGetAddressesParams as MultiGetAddressesParams };
}
export { Multi as MultiResource };
