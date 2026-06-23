// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class MarketChart4 extends APIResource {
  /**
   * To query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now
   *
   * @param {string} id - NFT collection ID.
   * @param {MarketChartGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MarketChartGetResponse>} NFT collection historical chart data
   *
   * @example
   * ```ts
   * const get_ = await client.nfts.marketChart.get("pudgy-penguins", {
   *   days: "1",
   * });
   * ```
   */
  get(id: string, params: MarketChartGetParams, options?: RequestOptions): APIPromise<MarketChartGetResponse> {
    const { days } = params ?? {};
    return this._client.get(__scalarPath`/nfts/${id}/market_chart`, { query: { days: days }, ...options });
  }
}

export interface MarketChartGetParams {
  /**
   * Data up to number of days ago.
   * Valid values: any integer or `max`
   * @default 1
   */
  days: string;
}

export interface MarketChartGetResponse {
  /**
   * NFT collection floor price in USD as [timestamp, price] pairs
   */
  floor_price_usd: Array<Array<number>>;
  /**
   * NFT collection floor price in native currency as [timestamp, price] pairs
   */
  floor_price_native: Array<Array<number>>;
  /**
   * NFT collection 24h volume in USD as [timestamp, volume] pairs
   */
  h24_volume_usd: Array<Array<number>>;
  /**
   * NFT collection 24h volume in native currency as [timestamp, volume] pairs
   */
  h24_volume_native: Array<Array<number>>;
  /**
   * NFT collection market cap in USD as [timestamp, market_cap] pairs
   */
  market_cap_usd: Array<Array<number>>;
  /**
   * NFT collection market cap in native currency as [timestamp, market_cap] pairs
   */
  market_cap_native: Array<Array<number>>;
}
export declare namespace MarketChart4 {
  export {
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetParams as MarketChartGetParams,
  };
}
export { MarketChart4 as MarketChartResource };
