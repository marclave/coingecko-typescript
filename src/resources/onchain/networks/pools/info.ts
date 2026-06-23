// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class Info extends APIResource {
  /**
   * To query pool metadata (base and quote token details, image, socials, websites, description, contract address, etc.) based on a provided pool contract address on a network
   *
   * @param {string} pool_address - Pool contract address.
   * @param {InfoGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InfoGetResponse>} Pool tokens info data
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.networks.pools.info.get("8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt", {
   *   network: "solana",
   * });
   * ```
   */
  get(pool_address: string, params: InfoGetParams, options?: RequestOptions): APIPromise<InfoGetResponse> {
    const { network, include } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools/${pool_address}/info`, { query: { include: include }, ...options });
  }
}

export interface InfoGetParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default solana
   */
  network: string;
  /**
   * Query param: Attributes to include.
   */
  include?: "pool";
}

export interface InfoGetResponse {
  data: Array<InfoGetResponse.Data>;
  /**
   * Included pool data, present when include=pool is specified
   */
  included?: Array<InfoGetResponse.Included>;
}

export namespace InfoGetResponse {
  export interface Data {
    /**
     * Token identifier
     */
    id: string;
    /**
     * Resource type
     */
    type: string;
    attributes: Data.Attributes;
    relationships: Data.Relationships;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Token contract address
       */
      address: string;
      /**
       * Token name
       */
      name: string;
      /**
       * Token symbol
       */
      symbol: string;
      /**
       * Token decimals
       */
      decimals: number;
      /**
       * Token image URL
       */
      image_url: string | null;
      /**
       * Token image URLs in different sizes
       */
      image: Attributes.Image;
      /**
       * CoinGecko coin ID
       */
      coingecko_coin_id: string | null;
      /**
       * Token websites
       */
      websites: Array<string>;
      /**
       * Discord URL
       */
      discord_url: string | null;
      /**
       * Farcaster URL
       */
      farcaster_url: string | null;
      /**
       * Zora URL
       */
      zora_url: string | null;
      /**
       * Telegram handle
       */
      telegram_handle: string | null;
      /**
       * Twitter handle
       */
      twitter_handle: string | null;
      /**
       * Token description
       */
      description: string | null;
      /**
       * GeckoTerminal trust score
       */
      gt_score: number;
      /**
       * GeckoTerminal trust score breakdown
       */
      gt_score_details: Attributes.GtScoreDetails;
      /**
       * Whether the token is verified on GeckoTerminal
       */
      gt_verified: boolean;
      /**
       * Token categories
       */
      categories: Array<string>;
      /**
       * GeckoTerminal category IDs
       */
      gt_category_ids: Array<string>;
      /**
       * Token holder information
       */
      holders: Attributes.Holders;
      /**
       * Mint authority status
       */
      mint_authority: string | null;
      /**
       * Freeze authority status
       */
      freeze_authority: string | null;
      /**
       * Whether the token is a honeypot (boolean or 'unknown')
       */
      is_honeypot: boolean | string;
    }

    export namespace Attributes {
      export interface Image {
        thumb?: string;
        small?: string;
        large?: string;
      }

      export interface GtScoreDetails {
        pool?: number;
        transaction?: number;
        creation?: number;
        info?: number;
        holders?: number;
      }

      export interface Holders {
        /**
         * Number of holders
         */
        count?: number;
        /**
         * Holder distribution percentage (keys vary by chain, e.g. top_10, 11_30, 31_50, rest)
         */
        distribution_percentage?: Record<string, string>;
        /**
         * Last updated timestamp
         */
        last_updated?: string;
      }
    }

    export interface Relationships {
      pool?: Relationships.Pool;
    }

    export namespace Relationships {
      export interface Pool {
        data?: Pool.Data;
      }

      export namespace Pool {
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
      /**
       * Base token contract address
       */
      base_token_address?: string;
      /**
       * Quote token contract address
       */
      quote_token_address?: string;
      /**
       * Quote token contract addresses, present for pools with more than 2 tokens
       */
      quote_token_addresses?: Array<string>;
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
  }
}
export declare namespace Info {
  export {
    type InfoGetResponse as InfoGetResponse,
    type InfoGetParams as InfoGetParams,
  };
}
export { Info as InfoResource };
