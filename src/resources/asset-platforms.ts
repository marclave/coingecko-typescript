// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class AssetPlatformResource extends APIResource {
  /**
   * To query all the supported asset platforms (blockchain networks) on CoinGecko
   *
   * @param {AssetPlatformGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<AssetPlatforms>} List of asset platforms
   *
   * @example
   * ```ts
   * const s = await client.assetPlatforms.get();
   * ```
   */
  get(params: AssetPlatformGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<AssetPlatforms> {
    const { filter } = params ?? {};
    return this._client.get("/asset_platforms", { query: { filter: filter }, ...options });
  }
}

export type AssetPlatforms = Array<{ id: string; chain_identifier: number | null; name: string; shortname: string; native_coin_id: string | null; image: { thumb?: string; small?: string; large?: string } }>;

export interface AssetPlatformGetParams {
  /**
   * Apply relevant filters to results.
   */
  filter?: "nft";
}
export declare namespace AssetPlatformResource {
  export {
    type AssetPlatforms as AssetPlatforms,
    type AssetPlatformGetParams as AssetPlatformGetParams,
  };
}
