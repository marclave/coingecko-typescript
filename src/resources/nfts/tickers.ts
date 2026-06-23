// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Tickers3 extends APIResource {
  /**
   * To query the latest floor price and 24hr volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and Blur
   *
   * @param {string} id - NFT collection ID.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TickerGetResponse>} NFT collection tickers data
   *
   * @example
   * ```ts
   * const get_ = await client.nfts.tickers.get("pudgy-penguins");
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<TickerGetResponse> {
    return this._client.get(__scalarPath`/nfts/${id}/tickers`, options);
  }
}

export interface TickerGetResponse {
  tickers: Array<TickerGetResponse.Ticker>;
}

export namespace TickerGetResponse {
  export interface Ticker {
    /**
     * NFT collection floor price in native currency
     */
    floor_price_in_native_currency: number;
    /**
     * NFT collection volume in 24 hours in native currency
     */
    h24_volume_in_native_currency: number;
    /**
     * NFT collection native currency
     */
    native_currency: string;
    /**
     * NFT collection native currency symbol
     */
    native_currency_symbol: string;
    /**
     * Last updated time
     */
    updated_at: string;
    /**
     * NFT marketplace ID
     */
    nft_marketplace_id: string;
    /**
     * NFT marketplace name
     */
    name: string;
    /**
     * NFT marketplace image URL
     */
    image: string;
    /**
     * NFT collection URL in the NFT marketplace
     */
    nft_collection_url: string;
  }
}
export declare namespace Tickers3 {
  export {
    type TickerGetResponse as TickerGetResponse,
  };
}
export { Tickers3 as TickerResource };
