// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class AssetPlatforms extends APIResource {
  /**
   * To query all the supported asset platforms (blockchain networks) on CoinGecko
   */
  get(params: AssetPlatformGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<AssetPlatforms2> {
    const { filter } = params ?? {};
    return this._client.get("/asset_platforms", { query: { filter: filter }, ...options });
  }
}

export type AssetPlatforms2 = Array<{ id: string; chain_identifier: number | null; name: string; shortname: string; native_coin_id: string | null; image: { thumb?: string; small?: string; large?: string } }>;

export interface AssetPlatformGetParams {
/**
 * Apply relevant filters to results.
 */
  filter?: "nft";

}
export declare namespace AssetPlatforms {
  export { type AssetPlatforms2 as AssetPlatforms, type AssetPlatformGetParams as AssetPlatformGetParams };
}
export { AssetPlatforms as AssetPlatformResource };
