// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { Dexes, type DexGetPoolsResponse, type DexGetResponse, type DexGetPoolsParams, type DexGetParams } from "./dexes";
import { NewPools, type NewPoolGetResponse, type NewPoolGetNetworkResponse, type NewPoolGetParams, type NewPoolGetNetworkParams } from "./new-pools";
import { Pools, type PoolAddressItem, type PoolGetAddressResponse, type PoolGetResponse, type PoolGetAddressParams, type PoolGetParams } from "./pools/pools";
import { Tokens, type TokenItem, type TokenGetAddressResponse, type TokenGetAddressParams } from "./tokens/tokens";
import { TrendingPools, type TrendingPoolGetResponse, type TrendingPoolGetNetworkResponse, type TrendingPoolGetParams, type TrendingPoolGetNetworkParams } from "./trending-pools";

export class Networks extends APIResource {
  dexes: Dexes = new Dexes(this._client);
  newPools: NewPools = new NewPools(this._client);
  pools: Pools = new Pools(this._client);
  tokens: Tokens = new Tokens(this._client);
  trendingPools: TrendingPools = new TrendingPools(this._client);

  /**
   * To retrieve a list of all supported networks on GeckoTerminal
   *
   * @param {NetworkGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<NetworkGetResponse>} List of supported networks
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.networks.get();
   * ```
   */
  get(params: NetworkGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<NetworkGetResponse> {
    const { page } = params ?? {};
    return this._client.get("/onchain/networks", { query: { page: page }, ...options });
  }
}

export interface NetworkGetParams {
  /**
   * Page through results.
   * Default value: 1
   */
  page?: number;
}

export interface NetworkGetResponse {
  data: Array<NetworkGetResponse.Data>;
}

export namespace NetworkGetResponse {
  export interface Data {
    /**
     * Network identifier
     */
    id: string;
    /**
     * Resource type
     */
    type: string;
    attributes: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Network name
       */
      name: string;
      /**
       * Corresponding CoinGecko asset platform ID
       */
      coingecko_asset_platform_id: string;
    }
  }
}
Networks.Dexes = Dexes;
Networks.NewPools = NewPools;
Networks.Pools = Pools;
Networks.Tokens = Tokens;
Networks.TrendingPools = TrendingPools;

export declare namespace Networks {
  export {
    type NetworkGetResponse as NetworkGetResponse,
    type NetworkGetParams as NetworkGetParams,
  };

  export {
    Dexes as Dexes,
    type DexGetPoolsResponse as DexGetPoolsResponse,
    type DexGetResponse as DexGetResponse,
    type DexGetPoolsParams as DexGetPoolsParams,
    type DexGetParams as DexGetParams,
  };

  export {
    NewPools as NewPools,
    type NewPoolGetResponse as NewPoolGetResponse,
    type NewPoolGetNetworkResponse as NewPoolGetNetworkResponse,
    type NewPoolGetParams as NewPoolGetParams,
    type NewPoolGetNetworkParams as NewPoolGetNetworkParams,
  };

  export {
    Pools as Pools,
    type PoolAddressItem as PoolAddressItem,
    type PoolGetAddressResponse as PoolGetAddressResponse,
    type PoolGetResponse as PoolGetResponse,
    type PoolGetAddressParams as PoolGetAddressParams,
    type PoolGetParams as PoolGetParams,
  };

  export {
    Tokens as Tokens,
    type TokenItem as TokenItem,
    type TokenGetAddressResponse as TokenGetAddressResponse,
    type TokenGetAddressParams as TokenGetAddressParams,
  };

  export {
    TrendingPools as TrendingPools,
    type TrendingPoolGetResponse as TrendingPoolGetResponse,
    type TrendingPoolGetNetworkResponse as TrendingPoolGetNetworkResponse,
    type TrendingPoolGetParams as TrendingPoolGetParams,
    type TrendingPoolGetNetworkParams as TrendingPoolGetNetworkParams,
  };
}
export { Networks as NetworkResource };
