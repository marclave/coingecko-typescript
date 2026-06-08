// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";
import { Info } from "./info";
import { Ohlcv } from "./ohlcv";
import { Trades } from "./trades";
import { Multi } from "./multi";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Pools extends APIResource {
  info: Info = new Info(this._client);
  ohlcv: Ohlcv = new Ohlcv(this._client);
  trades: Trades = new Trades(this._client);
  multi: Multi = new Multi(this._client);

  /**
   * To query the specific pool based on the provided network and pool address
   */
  getAddress(network: string, address: string, params: PoolGetAddressParams | null | undefined = {}, options?: RequestOptions): APIPromise<PoolAddressData> {
    const { include, include_volume_breakdown, include_composition } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools/${address}`, { query: { include: include, include_volume_breakdown: include_volume_breakdown, include_composition: include_composition }, ...options });
  }
  /**
   * To query all the top pools based on the provided network
   */
  get(network: string, params: PoolGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Pool> {
    const { include, page, sort, include_gt_community_data } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools`, { query: { include: include, page: page, sort: sort, include_gt_community_data: include_gt_community_data }, ...options });
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

export interface PoolAddressData {
  data: PoolAddressItem;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { address?: string; name?: string; symbol?: string; decimals?: number; image_url?: string; coingecko_coin_id?: string } }>;
}

export interface Pool {
  data: Array<{ id: string; type: string; attributes: { base_token_price_usd: string; base_token_price_native_currency: string | null; quote_token_price_usd: string; quote_token_price_native_currency: string | null; base_token_price_quote_token: string | null; quote_token_price_base_token: string | null; address: string; name: string; pool_created_at: string; fdv_usd: string | null; market_cap_usd: string | null; price_change_percentage: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; transactions: { m5?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m15?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m30?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h1?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h6?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h24?: { buys?: number; sells?: number; buyers?: number; sellers?: number } }; volume_usd: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; reserve_in_usd: string | null; token_price_usd?: string; sentiment_vote_positive_percentage?: number; sentiment_vote_negative_percentage?: number; community_sus_report?: number }; relationships: { base_token?: { data?: { id?: string; type?: string } }; quote_token?: { data?: { id?: string; type?: string } }; network?: { data?: { id?: string; type?: string } }; dex?: { data?: { id?: string; type?: string } } } }>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { address?: string; name?: string; symbol?: string; decimals?: number; image_url?: string | null; coingecko_coin_id?: string | null; coingecko_asset_platform_id?: string } }>;
}

export interface PoolGetAddressParams {
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

export interface PoolGetParams {
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
export declare namespace Pools {
  export { Info as Info, Ohlcv as Ohlcv, Trades as Trades, Multi as Multi };
  export { type PoolAddressItem as PoolAddressItem, type PoolAddressData as PoolAddressData, type Pool as Pool, type PoolGetAddressParams as PoolGetAddressParams, type PoolGetParams as PoolGetParams };
}
export { Pools as PoolResource };
