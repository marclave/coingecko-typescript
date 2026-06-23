// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Networks, type NetworkGetResponse, type NetworkGetParams } from "./networks/networks";
import { Pools3 } from "./pools/pools";
import { Categories, type CategoryGetResponse, type CategoryGetPoolsResponse, type CategoryGetParams, type CategoryGetPoolsParams } from "./categories";
import { Search } from "./search/search";
import { Simple2 } from "./simple/simple";
import { Tokens2 } from "./tokens/tokens";

export class Onchain extends APIResource {
  networks: Networks = new Networks(this._client);
  pools: Pools3 = new Pools3(this._client);
  categories: Categories = new Categories(this._client);
  search: Search = new Search(this._client);
  simple: Simple2 = new Simple2(this._client);
  tokens: Tokens2 = new Tokens2(this._client);

}

Onchain.Networks = Networks;
Onchain.Pools3 = Pools3;
Onchain.Categories = Categories;
Onchain.Search = Search;
Onchain.Simple2 = Simple2;
Onchain.Tokens2 = Tokens2;

export declare namespace Onchain {
  export {
    Networks as Networks,
    type NetworkGetResponse as NetworkGetResponse,
    type NetworkGetParams as NetworkGetParams,
  };

  export {
    Pools3 as Pools3,
  };

  export {
    Categories as Categories,
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryGetPoolsResponse as CategoryGetPoolsResponse,
    type CategoryGetParams as CategoryGetParams,
    type CategoryGetPoolsParams as CategoryGetPoolsParams,
  };

  export {
    Search as Search,
  };

  export {
    Simple2 as Simple2,
  };

  export {
    Tokens2 as Tokens2,
  };
}
export { Onchain as OnchainResource };
