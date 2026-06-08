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

export class TokenLists extends APIResource {
  /**
   * To get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)
   */
  getAllJson(asset_platform_id: string, options?: RequestOptions): APIPromise<TokenLists> {
    return this._client.get(__scalarPath`/token_lists/${asset_platform_id}/all.json`, options);
  }
}

export interface TokenLists {
  /**
   * Token list name
   */
  name: string;
  /**
   * Token list logo URL
   */
  logoURI: string;
  /**
   * Token list keywords
   */
  keywords: Array<string>;
  /**
   * Token list generation timestamp
   */
  timestamp: string;
  /**
   * List of tokens
   */
  tokens: Array<{ chainId: number; address: string; name: string; symbol: string; decimals: number; logoURI: string }>;
  /**
   * Token list version
   */
  version: { major?: number; minor?: number; patch?: number };
}
export declare namespace TokenLists {
  export { type TokenLists as TokenLists };
}
export { TokenLists as TokenListResource };
