// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";

export class InfoRecentlyUpdated extends APIResource {
  /**
   * To query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal
   *
   * @param {InfoRecentlyUpdatedGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<InfoRecentlyUpdatedGetResponse>} Most recently updated tokens info
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.tokens.infoRecentlyUpdated.get();
   * ```
   */
  get(params: InfoRecentlyUpdatedGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<InfoRecentlyUpdatedGetResponse> {
    const { include, network } = params ?? {};
    return this._client.get("/onchain/tokens/info_recently_updated", { query: { include: include, network: network }, ...options });
  }
}

export interface InfoRecentlyUpdatedGetParams {
  /**
   * Attributes for related resources to include.
   */
  include?: "network";
  /**
   * Filter tokens by provided network.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   */
  network?: string;
}

export interface InfoRecentlyUpdatedGetResponse {
  data: Array<InfoRecentlyUpdatedGetResponse.Data>;
  /**
   * Included network data, present when include=network is specified
   */
  included?: Array<InfoRecentlyUpdatedGetResponse.Included>;
}

export namespace InfoRecentlyUpdatedGetResponse {
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
      gt_score: number | null;
      /**
       * Metadata last updated timestamp
       */
      metadata_updated_at: string;
    }

    export interface Relationships {
      network?: Relationships.Network;
    }

    export namespace Relationships {
      export interface Network {
        data?: Network.Data;
      }

      export namespace Network {
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
      name?: string;
      coingecko_asset_platform_id?: string;
    }
  }
}
export declare namespace InfoRecentlyUpdated {
  export {
    type InfoRecentlyUpdatedGetResponse as InfoRecentlyUpdatedGetResponse,
    type InfoRecentlyUpdatedGetParams as InfoRecentlyUpdatedGetParams,
  };
}
export { InfoRecentlyUpdated as InfoRecentlyUpdatedResource };
