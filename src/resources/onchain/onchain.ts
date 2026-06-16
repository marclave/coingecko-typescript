// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Tokens } from "./tokens/tokens";
import { Search } from "./search/search";
import { Simple } from "./simple/simple";
import { Networks } from "./networks/networks";
import { Pools } from "./pools/pools";
import { Categories } from "./categories";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Onchain extends APIResource {
  tokens: Tokens = new Tokens(this._client);
  search: Search = new Search(this._client);
  simple: Simple = new Simple(this._client);
  networks: Networks = new Networks(this._client);
  pools: Pools = new Pools(this._client);
  categories: Categories = new Categories(this._client);

}

export declare namespace Onchain {
  export { Tokens as Tokens, Search as Search, Simple as Simple, Networks as Networks, Pools as Pools, Categories as Categories };
}
export { Onchain as OnchainResource };
