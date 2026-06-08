// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { Megafilter } from "./megafilter";
import { TrendingSearch } from "./trending-search";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Pools extends APIResource {
  megafilter: Megafilter = new Megafilter(this._client);
  trendingSearch: TrendingSearch = new TrendingSearch(this._client);

}

export declare namespace Pools {
  export { Megafilter as Megafilter, TrendingSearch as TrendingSearch };
}
export { Pools as PoolResource };
