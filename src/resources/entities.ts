// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class Entities extends APIResource {
  /**
   * To query all the supported entities on CoinGecko with entity ID, name, symbol, and country
   *
   * @param {EntityGetListParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<EntityGetListResponse>} List of entities with ID, name, symbol, and country
   *
   * @example
   * ```ts
   * const getList = await client.entities.getList();
   * ```
   */
  getList(params: EntityGetListParams | null | undefined = {}, options?: RequestOptions): APIPromise<EntityGetListResponse> {
    const { entity_type, per_page, page } = params ?? {};
    return this._client.get("/entities/list", { query: { entity_type: entity_type, per_page: per_page, page: page }, ...options });
  }
}

export interface EntityGetListParams {
  /**
   * Filter by entity type.
   */
  entity_type?: "company" | "government";
  /**
   * Total results per page.
   * Default value: 100
   * Valid values: 1...250
   */
  per_page?: number;
  /**
   * Page through results.
   * Default value: 1
   */
  page?: number;
}

export type EntityGetListResponse = Array<EntityGetListResponse.EntityGetListResponseItem>;

export namespace EntityGetListResponse {
  export interface EntityGetListResponseItem {
    /**
     * Entity ID
     */
    id: string;
    /**
     * Ticker symbol of public company
     */
    symbol: string;
    /**
     * Entity name
     */
    name: string;
    /**
     * Country code
     */
    country: string;
  }
}
export declare namespace Entities {
  export {
    type EntityGetListResponse as EntityGetListResponse,
    type EntityGetListParams as EntityGetListParams,
  };
}
export { Entities as EntityResource };
