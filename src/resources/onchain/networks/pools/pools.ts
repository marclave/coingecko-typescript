// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";
import { Info, type InfoGetResponse, type InfoGetParams } from "./info";
import { Multi, type MultiGetAddressesResponse, type MultiGetAddressesParams } from "./multi";
import { Ohlcv, type OhlcvGetTimeframeResponse, type OhlcvGetTimeframeParams } from "./ohlcv";
import { Trades, type TradeGetResponse, type TradeGetParams } from "./trades";

export class Pools extends APIResource {
  info: Info = new Info(this._client);
  multi: Multi = new Multi(this._client);
  ohlcv: Ohlcv = new Ohlcv(this._client);
  trades: Trades = new Trades(this._client);

  /**
   * To query the specific pool based on the provided network and pool address
   *
   * @param {string} address - Pool address.
   * @param {PoolGetAddressParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PoolGetAddressResponse>} Specific pool data
   *
   * @example
   * ```ts
   * const getAddress = await client.onchain.networks.pools.getAddress("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640", {
   *   network: "eth",
   * });
   * ```
   */
  getAddress(address: string, params: PoolGetAddressParams, options?: RequestOptions): APIPromise<PoolGetAddressResponse> {
    const { network, include, include_volume_breakdown, include_composition } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools/${address}`, { query: { include: include, include_volume_breakdown: include_volume_breakdown, include_composition: include_composition }, ...options });
  }

  /**
   * To query all the top pools based on the provided network
   *
   * @param {string} network - Network ID.
   * @param {PoolGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PoolGetResponse>} Top pools on a network
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.networks.pools.get("eth");
   * ```
   */
  get(network: string, params: PoolGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<PoolGetResponse> {
    const { include, page, sort, include_gt_community_data } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools`, { query: { include: include, page: page, sort: sort, include_gt_community_data: include_gt_community_data }, ...options });
  }
}

export interface PoolAddressItem {
  /**
   * Pool identifier
   */
  id: string;
  /**
   * Resource type
   */
  type: string;
  attributes: { base_token_price_usd: string; base_token_price_native_currency: string; quote_token_price_usd: string; quote_token_price_native_currency: string; base_token_price_quote_token: string; quote_token_price_base_token: string; address: string; name: string; pool_name: string; pool_fee_percentage: string; pool_created_at: string; fdv_usd: string | null; market_cap_usd: string | null; price_change_percentage: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; transactions: { m5?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m15?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m30?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h1?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h6?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h24?: { buys?: number; sells?: number; buyers?: number; sellers?: number } }; volume_usd: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; reserve_in_usd: string; locked_liquidity_percentage: string; base_token_balance?: string; base_token_liquidity_usd?: string; quote_token_balance?: string; quote_token_liquidity_usd?: string; net_buy_volume_usd?: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; buy_volume_usd?: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; sell_volume_usd?: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string } };
  /**
   * Related resources
   */
  relationships: { base_token?: { data?: { id?: string; type?: string } }; quote_token?: { data?: { id?: string; type?: string } }; dex?: { data?: { id?: string; type?: string } } };
}

export interface PoolGetAddressParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default eth
   */
  network: string;
  /**
   * Query param: Attributes to include, comma-separated if more than one.
   * Available values: `base_token`, `quote_token`, `dex`
   */
  include?: string;
  /**
   * Query param: Include volume breakdown.
   * Default: `false`
   */
  include_volume_breakdown?: boolean;
  /**
   * Query param: Include pool composition.
   * Default: `false`
   */
  include_composition?: boolean;
}

export interface PoolGetAddressResponse {
  data: PoolAddressItem;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<PoolGetAddressResponse.Included>;
}

export namespace PoolGetAddressResponse {
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
      image_url?: string;
      coingecko_coin_id?: string;
    }
  }
}

export interface PoolGetParams {
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
   * Sort the pools by field.
   * Default: `h24_tx_count_desc`
   */
  sort?: "h24_tx_count_desc" | "h24_volume_usd_desc";
  /**
   * Include GeckoTerminal community data (sentiment votes, suspicious reports).
   * Default: `false`
   */
  include_gt_community_data?: boolean;
}

export interface PoolGetResponse {
  data: Array<PoolGetResponse.Data>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<PoolGetResponse.Included>;
}

export namespace PoolGetResponse {
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
Pools.Info = Info;
Pools.Multi = Multi;
Pools.Ohlcv = Ohlcv;
Pools.Trades = Trades;

export declare namespace Pools {
  export {
    type PoolAddressItem as PoolAddressItem,
    type PoolGetAddressResponse as PoolGetAddressResponse,
    type PoolGetResponse as PoolGetResponse,
    type PoolGetAddressParams as PoolGetAddressParams,
    type PoolGetParams as PoolGetParams,
  };

  export {
    Info as Info,
    type InfoGetResponse as InfoGetResponse,
    type InfoGetParams as InfoGetParams,
  };

  export {
    Multi as Multi,
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };

  export {
    Ohlcv as Ohlcv,
    type OhlcvGetTimeframeResponse as OhlcvGetTimeframeResponse,
    type OhlcvGetTimeframeParams as OhlcvGetTimeframeParams,
  };

  export {
    Trades as Trades,
    type TradeGetResponse as TradeGetResponse,
    type TradeGetParams as TradeGetParams,
  };
}
export { Pools as PoolResource };
