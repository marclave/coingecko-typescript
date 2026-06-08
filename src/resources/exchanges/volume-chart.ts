// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class VolumeChart extends APIResource {
  /**
   * To query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID
   */
  get(id: string, params: VolumeChartGetParams, options?: RequestOptions): APIPromise<ExchangeVolumeChart> {
    const { days } = params ?? {};
    return this._client.get(__scalarPath`/exchanges/${id}/volume_chart`, { query: { days: days }, ...options });
  }
  /**
   * To query the historical volume chart data in BTC by specifying date range in UNIX based on exchange's ID
   */
  getRange(id: string, params: VolumeChartGetRangeParams, options?: RequestOptions): APIPromise<ExchangeVolumeChart> {
    const { from, to } = params ?? {};
    return this._client.get(__scalarPath`/exchanges/${id}/volume_chart/range`, { query: { from: from, to: to }, ...options });
  }
}

/**
 * Volume chart data points as [timestamp, volume_in_btc] pairs
 */
export type ExchangeVolumeChart = Array<Array<number | string>>;

export interface VolumeChartGetParams {
/**
 * Data up to number of days ago.
 */
  days: "1" | "7" | "14" | "30" | "90" | "180" | "365";

}

export interface VolumeChartGetRangeParams {
/**
 * Starting date in UNIX timestamp.
 */
  from: number;

/**
 * Ending date in UNIX timestamp.
 */
  to: number;

}
export declare namespace VolumeChart {
  export { type ExchangeVolumeChart as ExchangeVolumeChart, type VolumeChartGetParams as VolumeChartGetParams, type VolumeChartGetRangeParams as VolumeChartGetRangeParams };
}
export { VolumeChart as VolumeChartResource };
