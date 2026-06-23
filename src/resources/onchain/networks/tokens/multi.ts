// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class Multi2 extends APIResource {
  /**
   * To query multiple tokens data based on the provided token contract addresses on a network
   *
   * @param {string} addresses - Token contract address, comma-separated if more than one token contract address.
   * @param {MultiGetAddressesParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MultiGetAddressesResponse>} Multiple tokens data
   *
   * @example
   * ```ts
   * const getAddresses = await client.onchain.networks.tokens.multi.getAddresses("6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN,2g4LS3y2myPe6vj9wTvoBE1wKqxvhnZPoZA9QU9upump", {
   *   network: "solana",
   * });
   * ```
   */
  getAddresses(addresses: string, params: MultiGetAddressesParams, options?: RequestOptions): APIPromise<MultiGetAddressesResponse> {
    const { network, include, include_composition, include_inactive_source } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/multi/${addresses}`, { query: { include: include, include_composition: include_composition, include_inactive_source: include_inactive_source }, ...options });
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

export interface MultiGetAddressesParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default solana
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
   * Query param: Include tokens from inactive pools using the most recent swap.
   * Default: `false`
   */
  include_inactive_source?: boolean;
}

export interface MultiGetAddressesResponse {
  data: Array<TokenItem>;
  /**
   * Included top pool data, present when include=top_pools is specified
   */
  included?: Array<MultiGetAddressesResponse.Included>;
}

export namespace MultiGetAddressesResponse {
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
      fdv_usd?: string | null;
      market_cap_usd?: string | null;
      price_change_percentage?: Attributes.PriceChangePercentage;
      transactions?: Attributes.Transactions;
      volume_usd?: Attributes.VolumeUsd;
      reserve_in_usd?: string;
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
export declare namespace Multi2 {
  export {
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };
}
export { Multi2 as MultiResource };
