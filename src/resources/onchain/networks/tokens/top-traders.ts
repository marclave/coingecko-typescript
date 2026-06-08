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

export class TopTraders extends APIResource {
  /**
   * To query top token traders based on the provided token contract address on a network
   */
  get(network_id: string, token_address: string, params: TopTraderGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<TopTokenTraders> {
    const { traders, sort, include_address_label } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network_id}/tokens/${token_address}/top_traders`, { query: { traders: traders, sort: sort, include_address_label: include_address_label }, ...options });
  }
}

export interface TopTokenTraders {
  data: { id: string; type: string; attributes: { traders: Array<{ address: string; realized_pnl_usd: string; unrealized_pnl_usd: string | null; token_balance: string | null; average_buy_price_usd: string; average_sell_price_usd: string; total_buy_count: number; total_sell_count: number; total_buy_token_amount: string; total_sell_token_amount: string; total_buy_usd: string; total_sell_usd: string; explorer_url: string; name?: string | null; label?: string | null; type?: string | null }> } };
}

export interface TopTraderGetParams {
/**
 * Number of top token traders to return, any integer or `max`.
 * Default value: 10
 */
  traders?: string;

/**
 * Sort the traders by field.
 * Default: `realized_pnl_usd_desc`
 */
  sort?: "realized_pnl_usd_desc" | "unrealized_pnl_usd_desc" | "total_buy_usd_desc" | "total_sell_usd_desc";

/**
 * Include address label data.
 * Default: `false`
 */
  include_address_label?: boolean;

}
export declare namespace TopTraders {
  export { type TopTokenTraders as TopTokenTraders, type TopTraderGetParams as TopTraderGetParams };
}
export { TopTraders as TopTraderResource };
