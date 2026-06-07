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

export class MarketChart extends APIResource {
  /**
   * This endpoint allows you to **get the historical chart data of a coin including time in UNIX, price, market cap and 24hr volume based on particular coin ID**
   */
  coinsId(id: string, params: MarketChartCoinsIdParams, options?: RequestOptions): APIPromise<CoinsMarketChart> {
    const { vs_currency, days, interval, precision } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/market_chart`, { query: { vs_currency: vs_currency, days: days, interval: interval, precision: precision }, ...options });
  }
  /**
   * This endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID**
   */
  coinsIdRange(id: string, params: MarketChartCoinsIdRangeParams, options?: RequestOptions): APIPromise<CoinsMarketChartRange> {
    const { vs_currency, from, to, interval, precision } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/market_chart/range`, { query: { vs_currency: vs_currency, from: from, to: to, interval: interval, precision: precision }, ...options });
  }
}

export interface CoinsMarketChart {
  prices?: Array<Array<number>>;
  market_caps?: Array<Array<number>>;
  total_volumes?: Array<Array<number>>;
}

export interface CoinsMarketChartRange {
  prices?: Array<Array<number>>;
  market_caps?: Array<Array<number>>;
  total_volumes?: Array<Array<number>>;
}

export interface MarketChartCoinsIdParams {
/**
 * target currency of market data
 *  *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
 */
  vs_currency: string;

/**
 * data up to number of days ago
 *  You may use any integer or `max` for number of days
 */
  days: string;

/**
 * data interval, leave empty for auto granularity
 */
  interval?: "5m" | "hourly" | "daily";

/**
 * decimal place for currency price value
 */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";

}

export interface MarketChartCoinsIdRangeParams {
/**
 * target currency of market data
 *  *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
 */
  vs_currency: string;

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

/**
 * data interval, leave empty for auto granularity
 */
  interval?: "5m" | "hourly" | "daily";

/**
 * decimal place for currency price value
 */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";

}
export declare namespace MarketChart {
  export { type CoinsMarketChart as CoinsMarketChart, type CoinsMarketChartRange as CoinsMarketChartRange, type MarketChartCoinsIdParams as MarketChartCoinsIdParams, type MarketChartCoinsIdRangeParams as MarketChartCoinsIdRangeParams };
}
export { MarketChart as MarketChartResource };
