// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { Pools } from "./pools/pools";
import { TrendingPools } from "./trending-pools";
import { Dexes } from "./dexes";
import { Tokens } from "./tokens/tokens";
import { NewPools } from "./new-pools";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Networks extends APIResource {
  pools: Pools = new Pools(this._client);
  trendingPools: TrendingPools = new TrendingPools(this._client);
  dexes: Dexes = new Dexes(this._client);
  tokens: Tokens = new Tokens(this._client);
  newPools: NewPools = new NewPools(this._client);

  /**
   * To retrieve a list of all supported networks on GeckoTerminal
   */
  get(params: NetworkGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<NetworksList> {
    const { page } = params ?? {};
    return this._client.get("/onchain/networks", { query: { page: page }, ...options });
  }
}

export interface NetworksList {
  data: Array<{ id: string; type: string; attributes: { name: string; coingecko_asset_platform_id: string } }>;
}

export interface NetworkGetParams {
/**
 * Page through results.
 * Default value: 1
 */
  page?: number;

}
export declare namespace Networks {
  export { Pools as Pools, TrendingPools as TrendingPools, Dexes as Dexes, Tokens as Tokens, NewPools as NewPools };
  export { type NetworksList as NetworksList, type NetworkGetParams as NetworkGetParams };
}
export { Networks as NetworkResource };
