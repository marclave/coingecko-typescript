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
   * This endpoint allows you to **query historical circulating supply of a coin by number of days away from now based on provided coin ID**
   */
  coinsId(id: string, params: CirculatingSupplyChartCoinsIdParams, options?: RequestOptions): APIPromise<CirculatingSupplyChartBase> {
    const { days, interval } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/circulating_supply_chart`, { query: { days: days, interval: interval }, ...options });
  }
  /**
   * This endpoint allows you to **query historical circulating supply of a coin, within a range of timestamp based on the provided coin ID**
   */
  coinsIdRange(id: string, params: CirculatingSupplyChartCoinsIdRangeParams, options?: RequestOptions): APIPromise<CirculatingSupplyChartBase> {
    const { from, to } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/circulating_supply_chart/range`, { query: { from: from, to: to }, ...options });
  }
}

export interface CirculatingSupplyChartBase {
  circulating_supply?: Array<Array<number | string>>;
}

export interface CirculatingSupplyChartCoinsIdParams {
/**
 * data up to number of days ago
 *  Valid values: any integer or `max`
 */
  days: string;

/**
 * data interval
 */
  interval?: "5m" | "hourly" | "daily";

}

export interface CirculatingSupplyChartCoinsIdRangeParams {
/**
 * starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
 *  **use ISO date string for best compatibility**
 */
  from: string;

/**
 * ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
 *  **use ISO date string for best compatibility**
 */
  to: string;

}
export declare namespace CirculatingSupplyChart {
  export { type CirculatingSupplyChartBase as CirculatingSupplyChartBase, type CirculatingSupplyChartCoinsIdParams as CirculatingSupplyChartCoinsIdParams, type CirculatingSupplyChartCoinsIdRangeParams as CirculatingSupplyChartCoinsIdRangeParams };
}
export { CirculatingSupplyChart as CirculatingSupplyChartResource };
