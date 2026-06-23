// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class List extends APIResource {
  /**
   * To query the latest 200 coins that recently listed on CoinGecko
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ListGetNewResponse>} List of recently added coins
   *
   * @example
   * ```ts
   * const getNew = await client.coins.list.getNew();
   * ```
   */
  getNew(options?: RequestOptions): APIPromise<ListGetNewResponse> {
    return this._client.get("/coins/list/new", options);
  }

  /**
   * To query all the supported coins on CoinGecko with coin ID, name and symbol
   *
   * @param {ListGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ListGetResponse>} List of coins
   *
   * @example
   * ```ts
   * const get_ = await client.coins.list.get();
   * ```
   */
  get(params: ListGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListGetResponse> {
    const { include_platform, status } = params ?? {};
    return this._client.get("/coins/list", { query: { include_platform: include_platform, status: status }, ...options });
  }
}

export type ListGetNewResponse = Array<ListGetNewResponse.ListGetNewResponseItem>;

export namespace ListGetNewResponse {
  export interface ListGetNewResponseItem {
    /**
     * Coin ID
     */
    id: string;
    /**
     * Coin symbol
     */
    symbol: string;
    /**
     * Coin name
     */
    name: string;
    /**
     * Timestamp when coin was activated on CoinGecko
     */
    activated_at: number;
  }
}

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

export type ListGetResponse = Array<ListGetResponse.ListGetResponseItem>;

export namespace ListGetResponse {
  export interface ListGetResponseItem {
    /**
     * Coin ID
     */
    id: string;
    /**
     * Coin symbol
     */
    symbol: string;
    /**
     * Coin name
     */
    name: string;
    /**
     * Asset platform and contract address
     */
    platforms?: Record<string, string | null>;
  }
}
export declare namespace List {
  export {
    type ListGetNewResponse as ListGetNewResponse,
    type ListGetResponse as ListGetResponse,
    type ListGetParams as ListGetParams,
  };
}
export { List as ListResource };
