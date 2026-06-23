// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { path as __scalarPath } from "../../../internal/utils/path";

export class NewPools extends APIResource {
  /**
   * To query all the latest pools across all networks on GeckoTerminal
   *
   * @param {NewPoolGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<NewPoolGetResponse>} Latest pools across all networks
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.networks.newPools.get();
   * ```
   */
  get(params: NewPoolGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<NewPoolGetResponse> {
    const { include, page, include_gt_community_data } = params ?? {};
    return this._client.get("/onchain/networks/new_pools", { query: { include: include, page: page, include_gt_community_data: include_gt_community_data }, ...options });
  }

  /**
   * To query all the latest pools based on the provided network
   *
   * @param {string} network - Network ID.
   * @param {NewPoolGetNetworkParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<NewPoolGetNetworkResponse>} Latest pools on a network
   *
   * @example
   * ```ts
   * const getNetwork = await client.onchain.networks.newPools.getNetwork("eth");
   * ```
   */
  getNetwork(network: string, params: NewPoolGetNetworkParams | null | undefined = {}, options?: RequestOptions): APIPromise<NewPoolGetNetworkResponse> {
    const { include, page, include_gt_community_data } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/new_pools`, { query: { include: include, page: page, include_gt_community_data: include_gt_community_data }, ...options });
  }
}

export interface NewPoolGetParams {
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
   * Include GeckoTerminal community data (sentiment votes, suspicious reports).
   * Default: `false`
   */
  include_gt_community_data?: boolean;
}

export interface NewPoolGetResponse {
  data: Array<NewPoolGetResponse.Data>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<NewPoolGetResponse.Included>;
}

export namespace NewPoolGetResponse {
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
       * Transaction counts over various timeframes
       */
      transactions: Attributes.Transactions;
      /**
       * Volume in USD over various timeframes
       */
      volume_usd: Attributes.VolumeUsd;
      /**
       * Total reserve in USD
       */
      reserve_in_usd: string | null;
      /**
       * Price of the queried token in USD, present when querying pools by token address
       */
      token_price_usd?: string;
      /**
       * GeckoTerminal community positive sentiment vote percentage
       */
      sentiment_vote_positive_percentage?: number;
      /**
       * GeckoTerminal community negative sentiment vote percentage
       */
      sentiment_vote_negative_percentage?: number;
      /**
       * GeckoTerminal community suspicious reports count
       */
      community_sus_report?: number;
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

      export interface Transactions {
        m5?: Transactions.M5;
        m15?: Transactions.M15;
        m30?: Transactions.M30;
        h1?: Transactions.H1;
        h6?: Transactions.H6;
        h24?: Transactions.H24;
      }

      export namespace Transactions {
        export interface M5 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }

        export interface M15 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }

        export interface M30 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }

        export interface H1 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }

        export interface H6 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }

        export interface H24 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }
      }

      export interface VolumeUsd {
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

export interface NewPoolGetNetworkParams {
  /**
   * Attributes to include, comma-separated if more than one.
   * Available values: `base_token`, `quote_token`, `dex`
   */
  include?: string;
  /**
   * Page through results.
   * Default value: 1
   */
  page?: number;
  /**
   * Include GeckoTerminal community data (sentiment votes, suspicious reports).
   * Default: `false`
   */
  include_gt_community_data?: boolean;
}

export interface NewPoolGetNetworkResponse {
  data: Array<NewPoolGetNetworkResponse.Data>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<NewPoolGetNetworkResponse.Included>;
}

export namespace NewPoolGetNetworkResponse {
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
       * Transaction counts over various timeframes
       */
      transactions: Attributes.Transactions;
      /**
       * Volume in USD over various timeframes
       */
      volume_usd: Attributes.VolumeUsd;
      /**
       * Total reserve in USD
       */
      reserve_in_usd: string | null;
      /**
       * Price of the queried token in USD, present when querying pools by token address
       */
      token_price_usd?: string;
      /**
       * GeckoTerminal community positive sentiment vote percentage
       */
      sentiment_vote_positive_percentage?: number;
      /**
       * GeckoTerminal community negative sentiment vote percentage
       */
      sentiment_vote_negative_percentage?: number;
      /**
       * GeckoTerminal community suspicious reports count
       */
      community_sus_report?: number;
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

      export interface Transactions {
        m5?: Transactions.M5;
        m15?: Transactions.M15;
        m30?: Transactions.M30;
        h1?: Transactions.H1;
        h6?: Transactions.H6;
        h24?: Transactions.H24;
      }

      export namespace Transactions {
        export interface M5 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }

        export interface M15 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }

        export interface M30 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }

        export interface H1 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }

        export interface H6 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }

        export interface H24 {
          buys?: number;
          sells?: number;
          buyers?: number;
          sellers?: number;
        }
      }

      export interface VolumeUsd {
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
export declare namespace NewPools {
  export {
    type NewPoolGetResponse as NewPoolGetResponse,
    type NewPoolGetNetworkResponse as NewPoolGetNetworkResponse,
    type NewPoolGetParams as NewPoolGetParams,
    type NewPoolGetNetworkParams as NewPoolGetNetworkParams,
  };
}
export { NewPools as NewPoolResource };
