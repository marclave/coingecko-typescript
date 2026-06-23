// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class Trending extends APIResource {
  /**
   * To query trending search coins, NFTs and categories on CoinGecko in the last 24 hours
   *
   * @param {TrendingGetParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TrendingGetResponse>} Trending search coins, NFTs and categories
   *
   * @example
   * ```ts
   * const get_ = await client.search.trending.get();
   * ```
   */
  get(params: TrendingGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<TrendingGetResponse> {
    const { show_max } = params ?? {};
    return this._client.get("/search/trending", { query: { show_max: show_max }, ...options });
  }
}

export interface TrendingGetParams {
  /**
   * Show max number of results available for the given type.
   * Available values: `coins`, `nfts`, `categories`
   * e.g. `coins` or `coins,nfts,categories`
   */
  show_max?: string;
}

export interface TrendingGetResponse {
  coins: Array<TrendingGetResponse.Coin>;
  nfts: Array<TrendingGetResponse.NFT>;
  categories: Array<TrendingGetResponse.Category>;
}

export namespace TrendingGetResponse {
  export interface Coin {
    item: Coin.Item;
  }

  export namespace Coin {
    export interface Item {
      /**
       * Coin ID
       */
      id: string;
      /**
       * Coin internal ID
       */
      coin_id: number;
      /**
       * Coin name
       */
      name: string;
      /**
       * Coin symbol
       */
      symbol: string;
      /**
       * Coin market cap rank
       */
      market_cap_rank: number;
      /**
       * Coin thumb image URL
       */
      thumb: string;
      /**
       * Coin small image URL
       */
      small: string;
      /**
       * Coin large image URL
       */
      large: string;
      /**
       * Coin web slug
       */
      slug: string;
      /**
       * Coin price in BTC
       */
      price_btc: number;
      /**
       * Coin trending rank (0-based)
       */
      score: number;
      data: Item.Data;
    }

    export namespace Item {
      export interface Data {
        /**
         * Coin price in USD
         */
        price: number;
        /**
         * Coin price in BTC
         */
        price_btc: string;
        /**
         * Coin price change percentage in 24 hours by currency
         */
        price_change_percentage_24h: Record<string, number>;
        /**
         * Coin market cap in USD
         */
        market_cap: string;
        /**
         * Coin market cap in BTC
         */
        market_cap_btc: string;
        /**
         * Coin total volume in USD
         */
        total_volume: string;
        /**
         * Coin total volume in BTC
         */
        total_volume_btc: string;
        /**
         * Coin sparkline image URL
         */
        sparkline: string;
        content: Data.Content | null;
      }

      export namespace Data {
        export interface Content {
          title?: string;
          description?: string;
        }
      }
    }
  }

  export interface NFT {
    /**
     * NFT collection ID
     */
    id: string;
    /**
     * NFT collection name
     */
    name: string;
    /**
     * NFT collection symbol
     */
    symbol: string;
    /**
     * NFT collection thumb image URL
     */
    thumb: string;
    /**
     * NFT contract internal ID
     */
    nft_contract_id: number;
    /**
     * NFT collection native currency symbol
     */
    native_currency_symbol: string;
    /**
     * NFT collection floor price in native currency
     */
    floor_price_in_native_currency: number;
    /**
     * NFT collection floor price 24 hours percentage change
     */
    floor_price_24h_percentage_change: number;
    data: NFT.Data;
  }

  export namespace NFT {
    export interface Data {
      /**
       * NFT collection floor price
       */
      floor_price: string;
      /**
       * NFT collection floor price in USD 24 hours percentage change
       */
      floor_price_in_usd_24h_percentage_change: string;
      /**
       * NFT collection volume in 24 hours
       */
      h24_volume: string;
      /**
       * NFT collection 24 hours average sale price
       */
      h24_average_sale_price: string;
      /**
       * NFT collection sparkline image URL
       */
      sparkline: string;
      content: Data.Content | null;
    }

    export namespace Data {
      export interface Content {
        title?: string;
        description?: string;
      }
    }
  }

  export interface Category {
    /**
     * Category ID
     */
    id: number;
    /**
     * Category name
     */
    name: string;
    /**
     * Top 3 coins image URLs in the category
     */
    top_3_coins_images: Array<string>;
    /**
     * Category market cap 1 hour change
     */
    market_cap_1h_change: number;
    /**
     * Category web slug
     */
    slug: string;
    /**
     * Number of coins in the category
     */
    coins_count: string;
    data: Category.Data;
  }

  export namespace Category {
    export interface Data {
      /**
       * Category market cap
       */
      market_cap: number;
      /**
       * Category market cap in BTC
       */
      market_cap_btc: number;
      /**
       * Category total volume
       */
      total_volume: number;
      /**
       * Category total volume in BTC
       */
      total_volume_btc: number;
      /**
       * Category market cap change percentage in 24 hours by currency
       */
      market_cap_change_percentage_24h: Record<string, number>;
      /**
       * Category sparkline image URL
       */
      sparkline: string;
    }
  }
}
export declare namespace Trending {
  export {
    type TrendingGetResponse as TrendingGetResponse,
    type TrendingGetParams as TrendingGetParams,
  };
}
export { Trending as TrendingResource };
