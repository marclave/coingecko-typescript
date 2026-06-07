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

export class Ohlc extends APIResource {
  /**
   * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID**
   */
  coinsId(id: string, params: OhlcCoinsIdParams, options?: RequestOptions): APIPromise<CoinsOhlc> {
    const { vs_currency, days, interval, precision } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/ohlc`, { query: { vs_currency: vs_currency, days: days, interval: interval, precision: precision }, ...options });
  }
  /**
   * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin ID**
   */
  coinsIdRange(id: string, params: OhlcCoinsIdRangeParams, options?: RequestOptions): APIPromise<CoinsOhlc> {
    const { vs_currency, from, to, interval } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/ohlc/range`, { query: { vs_currency: vs_currency, from: from, to: to, interval: interval }, ...options });
  }
}

export type CoinsOhlc = Array<Array<number>>;

export interface OhlcCoinsIdParams {
/**
 * target currency of price data
 *  *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
 */
  vs_currency: string;

/**
 * data up to number of days ago
 */
  days: "1" | "7" | "14" | "30" | "90" | "180" | "365" | "max";

/**
 * data interval, leave empty for auto granularity
 */
  interval?: "daily" | "hourly";

/**
 * decimal place for currency price value
 */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";

}

export interface OhlcCoinsIdRangeParams {
/**
 * target currency of price data
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
 * data interval
 */
  interval: "daily" | "hourly";

}
export declare namespace Ohlc {
  export { type CoinsOhlc as CoinsOhlc, type OhlcCoinsIdParams as OhlcCoinsIdParams, type OhlcCoinsIdRangeParams as OhlcCoinsIdRangeParams };
}
export { Ohlc as OhlcResource };
