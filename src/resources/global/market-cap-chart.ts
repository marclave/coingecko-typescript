// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class MarketCapChart extends APIResource {
  /**
   * To query historical global market cap and volume data by number of days away from now
   */
  get(params: MarketCapChartGetParams, options?: RequestOptions): APIPromise<GlobalMarketCapChart> {
    const { days, vs_currency } = params ?? {};
    return this._client.get("/global/market_cap_chart", { query: { days: days, vs_currency: vs_currency }, ...options });
  }
}

export interface GlobalMarketCapChart {
  market_cap_chart: { market_cap: Array<Array<number>>; volume: Array<Array<number>> };
}

export interface MarketCapChartGetParams {
/**
 * Data up to number of days ago.
 */
  days: "1" | "7" | "14" | "30" | "90" | "180" | "365" | "max";

/**
 * Target currency of market cap.
 * Default: `usd`
 * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
 */
  vs_currency?: string;

}
export declare namespace MarketCapChart {
  export { type GlobalMarketCapChart as GlobalMarketCapChart, type MarketCapChartGetParams as MarketCapChartGetParams };
}
export { MarketCapChart as MarketCapChartResource };
