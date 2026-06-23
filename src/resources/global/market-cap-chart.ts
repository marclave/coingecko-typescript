// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class MarketCapChart extends APIResource {
  /**
   * To query historical global market cap and volume data by number of days away from now
   *
   * @param {MarketCapChartGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MarketCapChartGetResponse>} Global market cap chart data
   *
   * @example
   * ```ts
   * const get_ = await client.global.marketCapChart.get({
   *   days: "1",
   * });
   * ```
   */
  get(params: MarketCapChartGetParams, options?: RequestOptions): APIPromise<MarketCapChartGetResponse> {
    const { days, vs_currency } = params ?? {};
    return this._client.get("/global/market_cap_chart", { query: { days: days, vs_currency: vs_currency }, ...options });
  }
}

export interface MarketCapChartGetParams {
  /**
   * Data up to number of days ago.
   * @default 1
   */
  days: "1" | "7" | "14" | "30" | "90" | "180" | "365" | "max";
  /**
   * Target currency of market cap.
   * Default: `usd`
   * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency?: string;
}

export interface MarketCapChartGetResponse {
  market_cap_chart: MarketCapChartGetResponse.MarketCapChart;
}

export namespace MarketCapChartGetResponse {
  export interface MarketCapChart {
    /**
     * Market cap data as [timestamp, market_cap] pairs
     */
    market_cap: Array<Array<number>>;
    /**
     * Volume data as [timestamp, volume] pairs
     */
    volume: Array<Array<number>>;
  }
}
export declare namespace MarketCapChart {
  export {
    type MarketCapChartGetResponse as MarketCapChartGetResponse,
    type MarketCapChartGetParams as MarketCapChartGetParams,
  };
}
export { MarketCapChart as MarketCapChartResource };
