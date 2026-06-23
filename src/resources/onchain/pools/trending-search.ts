// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";

export class TrendingSearch extends APIResource {
  /**
   * To query all the trending search pools across all networks on GeckoTerminal
   *
   * @param {TrendingSearchGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TrendingSearchGetResponse>} Trending search pools across all networks
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.pools.trendingSearch.get();
   * ```
   */
  get(params: TrendingSearchGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<TrendingSearchGetResponse> {
    const { include, pools } = params ?? {};
    return this._client.get("/onchain/pools/trending_search", { query: { include: include, pools: pools }, ...options });
  }
}

export interface TrendingSearchGetParams {
  /**
   * Attributes to include, comma-separated if more than one.
   * Available values: `base_token`, `quote_token`, `dex`, `network`
   */
  include?: string;
  /**
   * Number of pools to return, maximum 10.
   * Default value: 4
   */
  pools?: number;
}

export interface TrendingSearchGetResponse {
  data: Array<TrendingSearchGetResponse.Data>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<TrendingSearchGetResponse.Included>;
}

export namespace TrendingSearchGetResponse {
  export interface Data {
    /**
     * Pool identifier
     */
    id: string;
    /**
     * Resource type
     */
    type: string;
    attributes: Data.Attributes;
    /**
     * Related resources
     */
    relationships: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Trending search rank (0-based)
       */
      trending_rank: number;
      /**
       * Pool contract address
       */
      address: string;
      /**
       * Pool name
       */
      name: string;
      /**
       * Pool creation timestamp
       */
      pool_created_at: string;
      /**
       * Fully diluted valuation in USD
       */
      fdv_usd: string | null;
      /**
       * Market cap in USD
       */
      market_cap_usd: string | null;
      /**
       * Volume in USD
       */
      volume_usd: Attributes.VolumeUsd;
      /**
       * Total reserve in USD
       */
      reserve_in_usd: string | null;
    }

    export namespace Attributes {
      export interface VolumeUsd {
        h24?: string;
      }
    }

    export interface Relationships {
      base_token?: Relationships.BaseToken;
      quote_token?: Relationships.QuoteToken;
      network?: Relationships.Network;
      dex?: Relationships.Dex;
    }

    export namespace Relationships {
      export interface BaseToken {
        data?: BaseToken.Data;
      }

      export namespace BaseToken {
        export interface Data {
          id?: string;
          type?: string;
        }
      }

      export interface QuoteToken {
        data?: QuoteToken.Data;
      }

      export namespace QuoteToken {
        export interface Data {
          id?: string;
          type?: string;
        }
      }

      export interface Network {
        data?: Network.Data;
      }

      export namespace Network {
        export interface Data {
          id?: string;
          type?: string;
        }
      }

      export interface Dex {
        data?: Dex.Data;
      }

      export namespace Dex {
        export interface Data {
          id?: string;
          type?: string;
        }
      }
    }
  }

  export interface Included {
    id?: string;
    type?: string;
    attributes?: Included.Attributes;
  }

  export namespace Included {
    export interface Attributes {
      address?: string;
      name?: string;
      symbol?: string;
      decimals?: number;
      image_url?: string | null;
      coingecko_coin_id?: string | null;
      coingecko_asset_platform_id?: string;
    }
  }
}
export declare namespace TrendingSearch {
  export {
    type TrendingSearchGetResponse as TrendingSearchGetResponse,
    type TrendingSearchGetParams as TrendingSearchGetParams,
  };
}
export { TrendingSearch as TrendingSearchResource };
