// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { Megafilter, type MegafilterGetResponse, type MegafilterGetParams } from "./megafilter";
import { TrendingSearch, type TrendingSearchGetResponse, type TrendingSearchGetParams } from "./trending-search";

export class Pools3 extends APIResource {
  megafilter: Megafilter = new Megafilter(this._client);
  trendingSearch: TrendingSearch = new TrendingSearch(this._client);

}

Pools3.Megafilter = Megafilter;
Pools3.TrendingSearch = TrendingSearch;

export declare namespace Pools3 {
  export {
    Megafilter as Megafilter,
    type MegafilterGetResponse as MegafilterGetResponse,
    type MegafilterGetParams as MegafilterGetParams,
  };

  export {
    TrendingSearch as TrendingSearch,
    type TrendingSearchGetResponse as TrendingSearchGetResponse,
    type TrendingSearchGetParams as TrendingSearchGetParams,
  };
}
export { Pools3 as PoolResource };
