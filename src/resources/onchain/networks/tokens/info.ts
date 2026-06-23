// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class Info2 extends APIResource {
  /**
   * To query token metadata (name, symbol, CoinGecko ID, image, socials, websites, description, etc.) based on a provided token contract address on a network
   *
   * @param {string} address - Token contract address.
   * @param {InfoGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InfoGetResponse>} Token info data
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.networks.tokens.info.get("Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump", {
   *   network: "solana",
   * });
   * ```
   */
  get(address: string, params: InfoGetParams, options?: RequestOptions): APIPromise<InfoGetResponse> {
    const { network } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/${address}/info`, options);
  }
}

export interface InfoGetParams {
  /**
   * Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default solana
   */
  network: string;
}

export interface InfoGetResponse {
  data: InfoGetResponse.Data;
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
  }
}
export declare namespace Info2 {
  export {
    type InfoGetResponse as InfoGetResponse,
    type InfoGetParams as InfoGetParams,
  };
}
export { Info2 as InfoResource };
