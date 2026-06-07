// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class List extends APIResource {
  /**
   * This endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**
   */
  coins(params: ListCoinsParams | null | undefined = {}, options?: RequestOptions): APIPromise<CoinsList> {
    const { include_platform, status } = params ?? {};
    return this._client.get("/coins/list", { query: { include_platform: include_platform, status: status }, ...options });
  }
  /**
   * This endpoint allows you to **query the latest 200 coins that recently listed on CoinGecko**
   */
  coinsNew(options?: RequestOptions): APIPromise<CoinsListNew> {
    return this._client.get("/coins/list/new", options);
  }
}

export type CoinsList = Array<{ id?: string; symbol?: string; name?: string; platforms?: Record<string, string> }>;

export type CoinsListNew = Array<{ id?: string; symbol?: string; name?: string; activated_at?: number }>;

export interface ListCoinsParams {
/**
 * include platform and token's contract addresses, default: false
 */
  include_platform?: boolean;

/**
 * filter by status of coins, default: active
 */
  status?: "active" | "inactive";

}
export declare namespace List {
  export { type CoinsList as CoinsList, type CoinsListNew as CoinsListNew, type ListCoinsParams as ListCoinsParams };
}
export { List as ListResource };
