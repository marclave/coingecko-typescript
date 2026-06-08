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

export class TotalSupplyChart extends APIResource {
  /**
   * To query historical total supply of a coin by number of days away from now based on provided coin ID
   */
  get(id: string, params: TotalSupplyChartGetParams, options?: RequestOptions): APIPromise<TotalSupplyChart> {
    const { days, interval } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/total_supply_chart`, { query: { days: days, interval: interval }, ...options });
  }
  /**
   * To query historical total supply of a coin, within a range of timestamp based on the provided coin ID
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
 */
  from: string;

/**
 * Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
 * **Use ISO date string for best compatibility.**
 */
  to: string;

}
export declare namespace TotalSupplyChart {
  export { type TotalSupplyChart as TotalSupplyChart, type TotalSupplyChartGetParams as TotalSupplyChartGetParams, type TotalSupplyChartGetRangeParams as TotalSupplyChartGetRangeParams };
}
export { TotalSupplyChart as TotalSupplyChartResource };
