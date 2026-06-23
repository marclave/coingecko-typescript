// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { Pools4, type PoolGetResponse, type PoolGetParams } from "./pools";

export class Search extends APIResource {
  pools: Pools4 = new Pools4(this._client);

}

Search.Pools4 = Pools4;

export declare namespace Search {
  export {
    Pools4 as Pools4,
    type PoolGetResponse as PoolGetResponse,
    type PoolGetParams as PoolGetParams,
  };
}
export { Search as SearchResource };
