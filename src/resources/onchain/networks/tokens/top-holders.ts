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

export class TopHolders extends APIResource {
  /**
   * To query top token holders based on the provided token contract address on a network
   */
  get(network: string, address: string, params: TopHolderGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<TopTokenHolders> {
    const { holders, include_pnl_details } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/${address}/top_holders`, { query: { holders: holders, include_pnl_details: include_pnl_details }, ...options });
  }
}

export interface TopTokenHolders {
  data: { id: string; type: string; attributes: { last_updated_at: string; holders: Array<{ rank: number; address: string; label: string | null; amount: string; percentage: string; value: string; average_buy_price_usd?: string | null; total_buy_count?: number | null; total_sell_count?: number | null; unrealized_pnl_usd?: string | null; unrealized_pnl_percentage?: string | null; realized_pnl_usd?: string | null; realized_pnl_percentage?: string | null; explorer_url?: string }> } };
}

export interface TopHolderGetParams {
/**
 * Number of top token holders to return, any integer or `max`.
 * Default value: 10
 */
  holders?: string;

/**
 * Include PnL details for token holders.
 * Default: `false`
 */
  include_pnl_details?: boolean;

}
export declare namespace TopHolders {
  export { type TopTokenHolders as TopTokenHolders, type TopHolderGetParams as TopHolderGetParams };
}
export { TopHolders as TopHolderResource };
