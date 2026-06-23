// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

export class Ohlc extends APIResource {
  /**
   * To get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID
   *
   * @param {string} id - Coin ID.
   * @param {OhlcGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OhlcGetResponse>} Coin OHLC chart data
   *
   * @example
   * ```ts
   * const get_ = await client.coins.ohlc.get("bitcoin", {
   *   vs_currency: "usd",
   *   days: "1",
   * });
   * ```
   */
  get(id: string, params: OhlcGetParams, options?: RequestOptions): APIPromise<OhlcGetResponse> {
    const { vs_currency, days, interval, precision } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/ohlc`, { query: { vs_currency: vs_currency, days: days, interval: interval, precision: precision }, ...options });
  }

  /**
   * To get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin ID
   *
   * @param {string} id - Coin ID.
   * @param {OhlcGetRangeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OhlcGetRangeResponse>} Coin OHLC chart data within time range
   *
   * @example
   * ```ts
   * const getRange = await client.coins.ohlc.getRange("bitcoin", {
   *   vs_currency: "usd",
   *   from: "2025-12-01",
   *   to: "2025-12-31",
   *   interval: "daily",
   * });
   * ```
   */
  getRange(id: string, params: OhlcGetRangeParams, options?: RequestOptions): APIPromise<OhlcGetRangeResponse> {
    const { vs_currency, from, to, interval } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/ohlc/range`, { query: { vs_currency: vs_currency, from: from, to: to, interval: interval }, ...options });
  }
}

export interface OhlcGetParams {
  /**
   * Target currency of price data.
   * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   * @default usd
   */
  vs_currency: string;
  /**
   * Data up to number of days ago.
   * @default 1
   */
  days: "1" | "7" | "14" | "30" | "90" | "180" | "365" | "max";
  /**
   * Data interval, leave empty for auto granularity.
   */
  interval?: "daily" | "hourly";
  /**
   * Decimal place for currency price value.
   */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";
}

export type OhlcGetResponse = Array<Array<number>>;

export interface OhlcGetRangeParams {
  /**
   * Target currency of price data.
   * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   * @default usd
   */
  vs_currency: string;
  /**
   * Starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
   * **Use ISO date string for best compatibility.**
   * @default 2025-12-01
   */
  from: string;
  /**
   * Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
   * **Use ISO date string for best compatibility.**
   * @default 2025-12-31
   */
  to: string;
  /**
   * Data interval.
   * @default daily
   */
  interval: "daily" | "hourly";
}

export type OhlcGetRangeResponse = Array<Array<number>>;
export declare namespace Ohlc {
  export {
    type OhlcGetResponse as OhlcGetResponse,
    type OhlcGetRangeResponse as OhlcGetRangeResponse,
    type OhlcGetParams as OhlcGetParams,
    type OhlcGetRangeParams as OhlcGetRangeParams,
  };
}
export { Ohlc as OhlcResource };
