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

export class CirculatingSupplyChart extends APIResource {
  /**
   * To query historical circulating supply of a coin by number of days away from now based on provided coin ID
   */
  get(id: string, params: CirculatingSupplyChartGetParams, options?: RequestOptions): APIPromise<CirculatingSupplyChart> {
    const { days, interval } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/circulating_supply_chart`, { query: { days: days, interval: interval }, ...options });
  }
  /**
   * To query historical circulating supply of a coin, within a range of timestamp based on the provided coin ID
   */
  getRange(id: string, params: CirculatingSupplyChartGetRangeParams, options?: RequestOptions): APIPromise<CirculatingSupplyChart> {
    const { from, to } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/circulating_supply_chart/range`, { query: { from: from, to: to }, ...options });
  }
}

export interface CirculatingSupplyChart {
  /**
   * Circulating supply data points as [timestamp, supply] pairs
   */
  circulating_supply: Array<Array<number | string>>;
}

export interface CirculatingSupplyChartGetParams {
/**
 * Data up to number of days ago.
 * Valid values: any integer or `max`.
 */
  days: string;

/**
 * Data interval.
 */
  interval?: "5m" | "hourly" | "daily";

}

export interface CirculatingSupplyChartGetRangeParams {
/**
 * Starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
 * **Use ISO date string for best compatibility.**
 */
  from: string;

/**
 * Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
 * **Use ISO date string for best compatibility.**
 */
  to: string;

}
export declare namespace CirculatingSupplyChart {
  export { type CirculatingSupplyChart as CirculatingSupplyChart, type CirculatingSupplyChartGetParams as CirculatingSupplyChartGetParams, type CirculatingSupplyChartGetRangeParams as CirculatingSupplyChartGetRangeParams };
}
export { CirculatingSupplyChart as CirculatingSupplyChartResource };
