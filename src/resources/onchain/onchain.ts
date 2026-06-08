// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Networks } from "./networks/networks";
import { Pools } from "./pools/pools";
import { Tokens } from "./tokens/tokens";
import { Categories } from "./categories";
import { Search } from "./search/search";
import { Simple } from "./simple/simple";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Onchain extends APIResource {
  networks: Networks = new Networks(this._client);
  pools: Pools = new Pools(this._client);
  tokens: Tokens = new Tokens(this._client);
  categories: Categories = new Categories(this._client);
  search: Search = new Search(this._client);
  simple: Simple = new Simple(this._client);

}

export declare namespace Onchain {
  export { Networks as Networks, Pools as Pools, Tokens as Tokens, Categories as Categories, Search as Search, Simple as Simple };
}
export { Onchain as OnchainResource };
