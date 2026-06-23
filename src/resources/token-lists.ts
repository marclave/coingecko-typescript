// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class TokenLists extends APIResource {
  /**
   * To get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)
   *
   * @param {string} asset_platform_id - Asset platform ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TokenListGetAllJSONResponse>} Token list by asset platform
   *
   * @example
   * ```ts
   * const getAllJSON = await client.tokenLists.getAllJSON("ethereum");
   * ```
   */
  getAllJSON(asset_platform_id: string, options?: RequestOptions): APIPromise<TokenListGetAllJSONResponse> {
    return this._client.get(__scalarPath`/token_lists/${asset_platform_id}/all.json`, options);
  }
}

export interface TokenListGetAllJSONResponse {
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
   * @format date-time
   */
  timestamp: string;
  /**
   * List of tokens
   */
  tokens: Array<TokenListGetAllJSONResponse.Token>;
  /**
   * Token list version
   */
  version: TokenListGetAllJSONResponse.Version;
}

export namespace TokenListGetAllJSONResponse {
  export interface Token {
    /**
     * Chainlist's chain ID
     */
    chainId: number;
    /**
     * Token contract address
     */
    address: string;
    /**
     * Token name
     */
    name: string;
    /**
     * Token symbol
     */
    symbol: string;
    /**
     * Token decimals
     */
    decimals: number;
    /**
     * Token image URL
     */
    logoURI: string;
  }

  export interface Version {
    /**
     * Major version
     */
    major?: number;
    /**
     * Minor version
     */
    minor?: number;
    /**
     * Patch version
     */
    patch?: number;
  }
}
export declare namespace TokenLists {
  export {
    type TokenListGetAllJSONResponse as TokenListGetAllJSONResponse,
  };
}
export { TokenLists as TokenListResource };
