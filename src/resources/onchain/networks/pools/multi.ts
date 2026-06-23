// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class Multi extends APIResource {
  /**
   * To query multiple pools based on the provided network and pool addresses
   *
   * @param {string} addresses - Pool contract address, comma-separated if more than one pool contract address.
   * @param {MultiGetAddressesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MultiGetAddressesResponse>} Multiple pools data
   *
   * @example
   * ```ts
   * const getAddresses = await client.onchain.networks.pools.multi.getAddresses("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640", {
   *   network: "eth",
   * });
   * ```
   */
  getAddresses(addresses: string, params: MultiGetAddressesParams, options?: RequestOptions): APIPromise<MultiGetAddressesResponse> {
    const { network, include, include_volume_breakdown, include_composition } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools/multi/${addresses}`, { query: { include: include, include_volume_breakdown: include_volume_breakdown, include_composition: include_composition }, ...options });
  }
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
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default eth
   */
  network: string;
  /**
   * Query param: Attributes to include, comma-separated if more than one.
   * Available values: `base_token`, `quote_token`, `dex`
   */
  include?: string;
  /**
   * Query param: Include volume breakdown.
   * Default: `false`
   */
  include_volume_breakdown?: boolean;
  /**
   * Query param: Include pool composition.
   * Default: `false`
   */
  include_composition?: boolean;
}

export interface MultiGetAddressesResponse {
  data: Array<PoolAddressItem>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<MultiGetAddressesResponse.Included>;
}

export namespace MultiGetAddressesResponse {
  export interface Included {
    id?: string;
    type?: string;
    attributes?: Included.Attributes;
  }

  export namespace Included {
    export interface Attributes {
      address?: string;
      name?: string;
      symbol?: string;
      decimals?: number;
      image_url?: string;
      coingecko_coin_id?: string;
    }
  }
}
export declare namespace Multi {
  export {
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };
}
export { Multi as MultiResource };
