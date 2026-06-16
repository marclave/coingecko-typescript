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

export class Trades extends APIResource {
  /**
   * To query the last 300 trades in the past 24 hours based on the provided pool address
   */
  get(network: string, pool_address: string, params: TradeGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Trades2> {
    const { trade_volume_in_usd_greater_than, token } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools/${pool_address}/trades`, { query: { trade_volume_in_usd_greater_than: trade_volume_in_usd_greater_than, token: token }, ...options });
  }
}

export interface Trades2 {
  data: Array<{ id: string; type: string; attributes: { block_number: number; tx_hash: string; tx_from_address: string; from_token_amount: string; to_token_amount: string; price_from_in_currency_token: string; price_to_in_currency_token: string; price_from_in_usd: string; price_to_in_usd: string; block_timestamp: string; kind: string; volume_in_usd: string; from_token_address: string; to_token_address: string } }>;
}

export interface TradeGetParams {
/**
 * Filter trades by trade volume in USD greater than this value.
 * Default value: 0
 */
  trade_volume_in_usd_greater_than?: number;

/**
 * Return trades for token, use this to invert the chart.
 * Available values: `base`, `quote`, or token address.
 * Default: `base`
 */
  token?: string;

}
export declare namespace Trades {
  export { type Trades2 as Trades, type TradeGetParams as TradeGetParams };
}
export { Trades as TradeResource };
