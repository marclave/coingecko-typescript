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
   * To query the latest 200 coins that recently listed on CoinGecko
   */
  getNew(options?: RequestOptions): APIPromise<CoinsListNew> {
    return this._client.get("/coins/list/new", options);
  }
  /**
   * To query all the supported coins on CoinGecko with coin ID, name and symbol
   */
  get(params: ListGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<CoinsList> {
    const { include_platform, status } = params ?? {};
    return this._client.get("/coins/list", { query: { include_platform: include_platform, status: status }, ...options });
  }
}

export type CoinsListNew = Array<{ id: string; symbol: string; name: string; activated_at: number }>;

export type CoinsList = Array<{ id: string; symbol: string; name: string; platforms?: Record<string, string | null> }>;

export interface ListGetParams {
/**
 * Include platform and token's contract addresses.
 * Default: false
 */
  include_platform?: boolean;

/**
 * Filter by status of coins.
 * Default: active
 */
  status?: "active" | "inactive";

}
export declare namespace List {
  export { type CoinsListNew as CoinsListNew, type CoinsList as CoinsList, type ListGetParams as ListGetParams };
}
export { List as ListResource };
