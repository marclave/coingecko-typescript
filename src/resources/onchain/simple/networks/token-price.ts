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

export class TokenPrice extends APIResource {
  /**
   * To get token price based on the provided token contract address on a network
   */
  getAddresses(network: string, addresses: string, params: TokenPriceGetAddressesParams | null | undefined = {}, options?: RequestOptions): APIPromise<OnchainSimplePrice> {
    const { include_market_cap, mcap_fdv_fallback, include_24hr_vol, include_24hr_price_change, include_total_reserve_in_usd, include_inactive_source } = params ?? {};
    return this._client.get(__scalarPath`/onchain/simple/networks/${network}/token_price/${addresses}`, { query: { include_market_cap: include_market_cap, mcap_fdv_fallback: mcap_fdv_fallback, include_24hr_vol: include_24hr_vol, include_24hr_price_change: include_24hr_price_change, include_total_reserve_in_usd: include_total_reserve_in_usd, include_inactive_source: include_inactive_source }, ...options });
  }
}

export interface OnchainSimplePrice {
  data: { id: string; type: string; attributes: { token_prices: Record<string, string>; market_cap_usd?: Record<string, string>; h24_volume_usd?: Record<string, string>; h24_price_change_percentage?: Record<string, string>; total_reserve_in_usd?: Record<string, string>; last_trade_timestamp?: Record<string, string> } };
}

export interface TokenPriceGetAddressesParams {
/**
 * Include market capitalization.
 * Default: `false`
 */
  include_market_cap?: boolean;

/**
 * Return FDV if market cap is not available.
 * Default: `false`
 */
  mcap_fdv_fallback?: boolean;

/**
 * Include 24hr volume.
 * Default: `false`
 */
  include_24hr_vol?: boolean;

/**
 * Include 24hr price change.
 * Default: `false`
 */
  include_24hr_price_change?: boolean;

/**
 * Include total reserve in USD.
 * Default: `false`
 */
  include_total_reserve_in_usd?: boolean;

/**
 * Include token price data from inactive pools using the most recent swap.
 * Default: `false`
 */
  include_inactive_source?: boolean;

}
export declare namespace TokenPrice {
  export { type OnchainSimplePrice as OnchainSimplePrice, type TokenPriceGetAddressesParams as TokenPriceGetAddressesParams };
}
export { TokenPrice as TokenPriceResource };
