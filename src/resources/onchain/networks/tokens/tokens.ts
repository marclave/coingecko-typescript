// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";
import { HoldersChart, type HoldersChartGetResponse, type HoldersChartGetParams } from "./holders-chart";
import { Info2, type InfoGetResponse, type InfoGetParams } from "./info";
import { Multi2, type MultiGetAddressesResponse, type MultiGetAddressesParams } from "./multi";
import { Ohlcv2, type OhlcvGetTimeframeResponse, type OhlcvGetTimeframeParams } from "./ohlcv";
import { Pools2, type PoolGetResponse, type PoolGetParams } from "./pools";
import { TopHolders, type TopHolderGetResponse, type TopHolderGetParams } from "./top-holders";
import { TopTraders, type TopTraderGetResponse, type TopTraderGetParams } from "./top-traders";
import { Trades2, type TradeGetResponse, type TradeGetParams } from "./trades";

export class Tokens extends APIResource {
  holdersChart: HoldersChart = new HoldersChart(this._client);
  info: Info2 = new Info2(this._client);
  multi: Multi2 = new Multi2(this._client);
  ohlcv: Ohlcv2 = new Ohlcv2(this._client);
  pools: Pools2 = new Pools2(this._client);
  topHolders: TopHolders = new TopHolders(this._client);
  topTraders: TopTraders = new TopTraders(this._client);
  trades: Trades2 = new Trades2(this._client);

  /**
   * To query specific token data based on the provided token contract address on a network
   *
   * @param {string} address - Token contract address.
   * @param {TokenGetAddressParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TokenGetAddressResponse>} Token data
   *
   * @example
   * ```ts
   * const getAddress = await client.onchain.networks.tokens.getAddress("0xdac17f958d2ee523a2206206994597c13d831ec7", {
   *   network: "eth",
   * });
   * ```
   */
  getAddress(address: string, params: TokenGetAddressParams, options?: RequestOptions): APIPromise<TokenGetAddressResponse> {
    const { network, include, include_composition, include_inactive_source } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/${address}`, { query: { include: include, include_composition: include_composition, include_inactive_source: include_inactive_source }, ...options });
  }
}

export interface TokenItem {
  /**
   * Token identifier
   */
  id: string;
  /**
   * Resource type
   */
  type: string;
  attributes: { address: string; name: string; symbol: string; decimals: number; image_url: string | null; coingecko_coin_id: string | null; total_supply: string; normalized_total_supply: string; price_usd: string | null; fdv_usd: string | null; total_reserve_in_usd: string; volume_usd: { h24?: string }; market_cap_usd: string | null; last_trade_timestamp?: string; launchpad_details?: { graduation_percentage?: number; completed?: boolean; completed_at?: string | null; migrated_destination_pool_address?: string | null } };
  relationships: { top_pools?: { data?: Array<{ id?: string; type?: string }> } };
}

export interface TokenGetAddressParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default eth
   */
  network: string;
  /**
   * Query param: Attributes to include.
   */
  include?: "top_pools";
  /**
   * Query param: Include pool composition.
   * Default: `false`
   */
  include_composition?: boolean;
  /**
   * Query param: Include token data from inactive pools using the most recent swap.
   * Default: `false`
   */
  include_inactive_source?: boolean;
}

export interface TokenGetAddressResponse {
  data: TokenItem;
  /**
   * Included top pool data, present when include=top_pools is specified
   */
  included?: Array<TokenGetAddressResponse.Included>;
}

export namespace TokenGetAddressResponse {
  export interface Included {
    id?: string;
    type?: string;
    attributes?: Included.Attributes;
    relationships?: Included.Relationships;
  }

  export namespace Included {
    export interface Attributes {
      base_token_price_usd?: string;
      base_token_price_native_currency?: string;
      quote_token_price_usd?: string;
      quote_token_price_native_currency?: string;
      base_token_price_quote_token?: string;
      quote_token_price_base_token?: string;
      address?: string;
      name?: string;
      pool_created_at?: string;
      token_price_usd?: string;
      fdv_usd?: string | null;
      market_cap_usd?: string | null;
      price_change_percentage?: Attributes.PriceChangePercentage;
      transactions?: Attributes.Transactions;
      volume_usd?: Attributes.VolumeUsd;
      reserve_in_usd?: string;
      last_trade_timestamp?: string;
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
}
Tokens.HoldersChart = HoldersChart;
Tokens.Info2 = Info2;
Tokens.Multi2 = Multi2;
Tokens.Ohlcv2 = Ohlcv2;
Tokens.Pools2 = Pools2;
Tokens.TopHolders = TopHolders;
Tokens.TopTraders = TopTraders;
Tokens.Trades2 = Trades2;

export declare namespace Tokens {
  export {
    type TokenItem as TokenItem,
    type TokenGetAddressResponse as TokenGetAddressResponse,
    type TokenGetAddressParams as TokenGetAddressParams,
  };

  export {
    HoldersChart as HoldersChart,
    type HoldersChartGetResponse as HoldersChartGetResponse,
    type HoldersChartGetParams as HoldersChartGetParams,
  };

  export {
    Info2 as Info2,
    type InfoGetResponse as InfoGetResponse,
    type InfoGetParams as InfoGetParams,
  };

  export {
    Multi2 as Multi2,
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };

  export {
    Ohlcv2 as Ohlcv2,
    type OhlcvGetTimeframeResponse as OhlcvGetTimeframeResponse,
    type OhlcvGetTimeframeParams as OhlcvGetTimeframeParams,
  };

  export {
    Pools2 as Pools2,
    type PoolGetResponse as PoolGetResponse,
    type PoolGetParams as PoolGetParams,
  };

  export {
    TopHolders as TopHolders,
    type TopHolderGetResponse as TopHolderGetResponse,
    type TopHolderGetParams as TopHolderGetParams,
  };

  export {
    TopTraders as TopTraders,
    type TopTraderGetResponse as TopTraderGetResponse,
    type TopTraderGetParams as TopTraderGetParams,
  };

  export {
    Trades2 as Trades2,
    type TradeGetResponse as TradeGetResponse,
    type TradeGetParams as TradeGetParams,
  };
}
export { Tokens as TokenResource };
