// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class AssetPlatforms extends APIResource {
  /**
   * This endpoint allows you to **query all the asset platforms on CoinGecko**
   */
  list(params: AssetPlatformListParams | null | undefined = {}, options?: RequestOptions): APIPromise<AssetPlatforms> {
    const { filter } = params ?? {};
    return this._client.get("/asset_platforms", { query: { filter: filter }, ...options });
  }
  /**
   * This endpoint allows you to **get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)**
   */
  tokenLists(asset_platform_id: string, options?: RequestOptions): APIPromise<TokenLists> {
    return this._client.get(__scalarPath`/token_lists/${asset_platform_id}/all.json`, options);
  }
}

export type AssetPlatforms = Array<{ id?: string; chain_identifier?: number | null; name?: string; shortname?: string; native_coin_id?: string | null; image?: { thumb?: string; small?: string; large?: string } }>;

export interface TokenLists {
  name?: string;
  logoURI?: string;
  keywords?: Array<string>;
  timestamp?: string;
  tokens?: Array<{ chainId?: number; address?: string; name?: string; symbol?: string; decimals?: number; logoURI?: string }>;
  /**
   * token list version
   */
  version?: { major?: number; minor?: number; patch?: number };
}

export interface AssetPlatformListParams {
/**
 * apply relevant filters to results
 */
  filter?: "nft";

}
export declare namespace AssetPlatforms {
  export { type AssetPlatforms as AssetPlatforms, type TokenLists as TokenLists, type AssetPlatformListParams as AssetPlatformListParams };
}
export { AssetPlatforms as AssetPlatformResource };
