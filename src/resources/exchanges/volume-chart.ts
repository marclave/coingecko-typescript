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
   * This endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID**
   */
  exchangesId(id: string, params: VolumeChartExchangesIdParams, options?: RequestOptions): APIPromise<ExchangeVolumeChart> {
    const { days } = params ?? {};
    return this._client.get(__scalarPath`/exchanges/${id}/volume_chart`, { query: { days: days }, ...options });
  }
  /**
   * This endpoint allows you to **query the historical volume chart data in BTC by specifying date range in UNIX based on exchange's ID**
   */
  exchangesIdRange(id: string, params: VolumeChartExchangesIdRangeParams, options?: RequestOptions): APIPromise<ExchangeVolumeChart> {
    const { from, to } = params ?? {};
    return this._client.get(__scalarPath`/exchanges/${id}/volume_chart/range`, { query: { from: from, to: to }, ...options });
  }
}

export type ExchangeVolumeChart = Array<Array<number | string>>;

export interface VolumeChartExchangesIdParams {
/**
 * data up to number of days ago
 */
  days: "1" | "7" | "14" | "30" | "90" | "180" | "365";

}

export interface VolumeChartExchangesIdRangeParams {
/**
 * starting date in UNIX timestamp
 */
  from: number;

/**
 * ending date in UNIX timestamp
 */
  to: number;

}
export declare namespace VolumeChart {
  export { type ExchangeVolumeChart as ExchangeVolumeChart, type VolumeChartExchangesIdParams as VolumeChartExchangesIdParams, type VolumeChartExchangesIdRangeParams as VolumeChartExchangesIdRangeParams };
}
export { VolumeChart as VolumeChartResource };
