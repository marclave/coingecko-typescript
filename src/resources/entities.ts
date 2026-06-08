// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Entities extends APIResource {
  /**
   * To query all the supported entities on CoinGecko with entity ID, name, symbol, and country
   */
  getList(params: EntityGetListParams | null | undefined = {}, options?: RequestOptions): APIPromise<EntitiesList> {
    const { entity_type, per_page, page } = params ?? {};
    return this._client.get("/entities/list", { query: { entity_type: entity_type, per_page: per_page, page: page }, ...options });
  }
}

export type EntitiesList = Array<{ id: string; symbol: string; name: string; country: string }>;

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
export declare namespace Entities {
  export { type EntitiesList as EntitiesList, type EntityGetListParams as EntityGetListParams };
}
export { Entities as EntityResource };
