// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class VolumeChart extends APIResource {
  /**
   * To query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID
   *
   * @param {string} id - Exchange ID or derivative exchange ID.
   * @param {VolumeChartGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VolumeChartGetResponse>} Exchange volume chart data
   *
   * @example
   * ```ts
   * const get_ = await client.exchanges.volumeChart.get("binance", {
   *   days: "1",
   * });
   * ```
   */
  get(id: string, params: VolumeChartGetParams, options?: RequestOptions): APIPromise<VolumeChartGetResponse> {
    const { days } = params ?? {};
    return this._client.get(__scalarPath`/exchanges/${id}/volume_chart`, { query: { days: days }, ...options });
  }

  /**
   * To query the historical volume chart data in BTC by specifying date range in UNIX based on exchange's ID
   *
   * @param {string} id - Exchange ID or derivative exchange ID.
   * @param {VolumeChartGetRangeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<VolumeChartGetRangeResponse>} Exchange volume chart data within time range
   *
   * @example
   * ```ts
   * const getRange = await client.exchanges.volumeChart.getRange("binance", {
   *   from: "1767196800",
   *   to: "1769702400",
   * });
   * ```
   */
  getRange(id: string, params: VolumeChartGetRangeParams, options?: RequestOptions): APIPromise<VolumeChartGetRangeResponse> {
    const { from, to } = params ?? {};
    return this._client.get(__scalarPath`/exchanges/${id}/volume_chart/range`, { query: { from: from, to: to }, ...options });
  }
}

export interface VolumeChartGetParams {
  /**
   * Data up to number of days ago.
   * @default 1
   */
  days: "1" | "7" | "14" | "30" | "90" | "180" | "365";
}

export type VolumeChartGetResponse = Array<Array<number | string>>;

export interface VolumeChartGetRangeParams {
  /**
   * Starting date in UNIX timestamp.
   * @default 1767196800
   */
  from: number;
  /**
   * Ending date in UNIX timestamp.
   * @default 1769702400
   */
  to: number;
}

export type VolumeChartGetRangeResponse = Array<Array<number | string>>;
export declare namespace VolumeChart {
  export {
    type VolumeChartGetResponse as VolumeChartGetResponse,
    type VolumeChartGetRangeResponse as VolumeChartGetRangeResponse,
    type VolumeChartGetParams as VolumeChartGetParams,
    type VolumeChartGetRangeParams as VolumeChartGetRangeParams,
  };
}
export { VolumeChart as VolumeChartResource };
