// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Categories extends APIResource {
  /**
   * To query all the supported categories on GeckoTerminal
   *
   * @param {CategoryGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryGetResponse>} List of supported categories
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.categories.get();
   * ```
   */
  get(params: CategoryGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<CategoryGetResponse> {
    const { page, sort } = params ?? {};
    return this._client.get("/onchain/categories", { query: { page: page, sort: sort }, ...options });
  }

  /**
   * To query all the pools based on the provided category ID
   *
   * @param {string} category_id - Category ID.
   * @param {CategoryGetPoolsParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<CategoryGetPoolsResponse>} Pools by category
   *
   * @example
   * ```ts
   * const getPools = await client.onchain.categories.getPools("pump-fun");
   * ```
   */
  getPools(category_id: string, params: CategoryGetPoolsParams | null | undefined = {}, options?: RequestOptions): APIPromise<CategoryGetPoolsResponse> {
    const { include, page, sort } = params ?? {};
    return this._client.get(__scalarPath`/onchain/categories/${category_id}/pools`, { query: { include: include, page: page, sort: sort }, ...options });
  }
}

export interface CategoryGetParams {
  /**
   * Page through results.
   * Default value: 1
   */
  page?: number;
  /**
   * Sort the categories by field.
   * Default: `h6_volume_percentage_desc`
   */
  sort?: "h1_volume_percentage_desc" | "h6_volume_percentage_desc" | "h12_volume_percentage_desc" | "h24_tx_count_desc" | "h24_volume_usd_desc" | "fdv_usd_desc" | "reserve_in_usd_desc";
}

export interface CategoryGetResponse {
  data: Array<CategoryGetResponse.Data>;
}

export namespace CategoryGetResponse {
  export interface Data {
    /**
     * Category ID
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
       * Category name
       */
      name: string;
      /**
       * Category description
       */
      description: string;
      /**
       * Volume change percentage over various timeframes
       */
      volume_change_percentage: Attributes.VolumeChangePercentage;
      /**
       * Total reserve in USD
       */
      reserve_in_usd: string;
      /**
       * Fully diluted valuation in USD
       */
      fdv_usd: string;
      /**
       * 24hr volume in USD
       */
      h24_volume_usd: string;
      /**
       * 24hr transaction count
       */
      h24_tx_count: number;
    }

    export namespace Attributes {
      export interface VolumeChangePercentage {
        h1?: string;
        h6?: string;
        h12?: string;
        h24?: string;
      }
    }
  }
}

export interface CategoryGetPoolsParams {
  /**
   * Attributes to include, comma-separated if more than one.
   * Available values: `base_token`, `quote_token`, `dex`, `network`
   */
  include?: string;
  /**
   * Page through results.
   * Default value: 1
   */
  page?: number;
  /**
   * Sort the pools by field.
   * Default: `pool_created_at_desc`
   */
  sort?: "m5_trending" | "h1_trending" | "h6_trending" | "h24_trending" | "h24_tx_count_desc" | "h24_volume_usd_desc" | "pool_created_at_desc" | "h24_price_change_percentage_desc";
}

export interface CategoryGetPoolsResponse {
  data: Array<CategoryGetPoolsResponse.Data>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<CategoryGetPoolsResponse.Included>;
}

export namespace CategoryGetPoolsResponse {
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
       * Base token price in USD
       */
      base_token_price_usd: string;
      /**
       * Base token price in native currency
       */
      base_token_price_native_currency: string | null;
      /**
       * Quote token price in USD
       */
      quote_token_price_usd: string;
      /**
       * Quote token price in native currency
       */
      quote_token_price_native_currency: string | null;
      /**
       * Base token price in quote token
       */
      base_token_price_quote_token: string | null;
      /**
       * Quote token price in base token
       */
      quote_token_price_base_token: string | null;
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
       * Price change percentage over various timeframes
       */
      price_change_percentage: Attributes.PriceChangePercentage;
      /**
       * Total reserve in USD
       */
      reserve_in_usd: string | null;
      /**
       * 24hr volume in USD
       */
      h24_volume_usd: string;
      /**
       * 24hr transaction count
       */
      h24_tx_count: number;
    }

    export namespace Attributes {
      export interface PriceChangePercentage {
        m5?: string;
        m15?: string;
        m30?: string;
        h1?: string;
        h6?: string;
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
export declare namespace Categories {
  export {
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryGetPoolsResponse as CategoryGetPoolsResponse,
    type CategoryGetParams as CategoryGetParams,
    type CategoryGetPoolsParams as CategoryGetPoolsParams,
  };
}
export { Categories as CategoryResource };
