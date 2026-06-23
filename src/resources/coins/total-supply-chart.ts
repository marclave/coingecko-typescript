// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class TotalSupplyChartResource extends APIResource {
  /**
   * To query historical total supply of a coin by number of days away from now based on provided coin ID
   *
   * @param {string} id - Coin ID.
   * @param {TotalSupplyChartGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TotalSupplyChart>} Historical total supply chart data
   *
   * @example
   * ```ts
   * const totalSupplyChart = await client.coins.totalSupplyChart.get("bitcoin", {
   *   days: "1",
   * });
   * ```
   */
  get(id: string, params: TotalSupplyChartGetParams, options?: RequestOptions): APIPromise<TotalSupplyChart> {
    const { days, interval } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/total_supply_chart`, { query: { days: days, interval: interval }, ...options });
  }

  /**
   * To query historical total supply of a coin, within a range of timestamp based on the provided coin ID
   *
   * @param {string} id - Coin ID.
   * @param {TotalSupplyChartGetRangeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<TotalSupplyChart>} Historical total supply chart data within time range
   *
   * @example
   * ```ts
   * const totalSupplyChart = await client.coins.totalSupplyChart.getRange("bitcoin", {
   *   from: "2025-01-01",
   *   to: "2025-12-31",
   * });
   * ```
   */
  getRange(id: string, params: TotalSupplyChartGetRangeParams, options?: RequestOptions): APIPromise<TotalSupplyChart> {
    const { from, to } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/total_supply_chart/range`, { query: { from: from, to: to }, ...options });
  }
}

export interface TotalSupplyChart {
  /**
   * Total supply data points as [timestamp, supply] pairs
   */
  total_supply: Array<Array<number | string>>;
}

export interface TotalSupplyChartGetParams {
  /**
   * Data up to number of days ago.
   * Valid values: any integer or `max`.
   * @default 1
   */
  days: string;
  /**
   * Data interval.
   */
  interval?: "daily";
}

export interface TotalSupplyChartGetRangeParams {
  /**
   * Starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
   * **Use ISO date string for best compatibility.**
   * @default 2025-01-01
   */
  from: string;
  /**
   * Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
   * **Use ISO date string for best compatibility.**
   * @default 2025-12-31
   */
  to: string;
}
export declare namespace TotalSupplyChartResource {
  export {
    type TotalSupplyChart as TotalSupplyChart,
    type TotalSupplyChartGetParams as TotalSupplyChartGetParams,
    type TotalSupplyChartGetRangeParams as TotalSupplyChartGetRangeParams,
  };
}
