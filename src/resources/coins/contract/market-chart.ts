// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { path as __scalarPath } from "../../../internal/utils/path";

export class MarketChart2 extends APIResource {
  /**
   * To get the historical chart data including time in UNIX, price, market cap and 24hrs volume based on asset platform and particular token contract address
   *
   * @param {string} contract_address - The contract address of token.
   * @param {MarketChartGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MarketChartGetResponse>} Coin historical chart data by token address
   *
   * @example
   * ```ts
   * const get_ = await client.coins.contract.marketChart.get("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
   *   id: "ethereum",
   *   vs_currency: "usd",
   *   days: "1",
   * });
   * ```
   */
  get(contract_address: string, params: MarketChartGetParams, options?: RequestOptions): APIPromise<MarketChartGetResponse> {
    const { id, vs_currency, days, interval, precision } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/contract/${contract_address}/market_chart`, { query: { vs_currency: vs_currency, days: days, interval: interval, precision: precision }, ...options });
  }

  /**
   * To get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume based on asset platform and particular token contract address
   *
   * @param {string} contract_address - The contract address of token.
   * @param {MarketChartGetRangeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<MarketChartGetRangeResponse>} Coin historical chart data within time range by token address
   *
   * @example
   * ```ts
   * const getRange = await client.coins.contract.marketChart.getRange("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
   *   id: "ethereum",
   *   vs_currency: "usd",
   *   from: "2025-01-01",
   *   to: "2025-12-31",
   * });
   * ```
   */
  getRange(contract_address: string, params: MarketChartGetRangeParams, options?: RequestOptions): APIPromise<MarketChartGetRangeResponse> {
    const { id, vs_currency, from, to, interval, precision } = params ?? {};
    return this._client.get(__scalarPath`/coins/${id}/contract/${contract_address}/market_chart/range`, { query: { vs_currency: vs_currency, from: from, to: to, interval: interval, precision: precision }, ...options });
  }
}

export interface MarketChartGetParams {
  /**
   * Path param: Asset platform ID.
   * *refers to [`/asset_platforms`](/reference/asset-platforms-list).
   * @default ethereum
   */
  id: string;
  /**
   * Query param: Target currency of market data.
   * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   * @default usd
   */
  vs_currency: string;
  /**
   * Query param: Data up to number of days ago.
   * You may use any integer or `max` for number of days.
   * @default 1
   */
  days: string;
  /**
   * Query param: Data interval, leave empty for auto granularity.
   */
  interval?: "5m" | "hourly" | "daily";
  /**
   * Query param: Decimal place for currency price value.
   */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";
}

export interface MarketChartGetResponse {
  /**
   * Price data points as [timestamp, price] pairs
   */
  prices: Array<Array<number>>;
  /**
   * Market cap data points as [timestamp, market_cap] pairs
   */
  market_caps: Array<Array<number>>;
  /**
   * Total volume data points as [timestamp, volume] pairs
   */
  total_volumes: Array<Array<number>>;
}

export interface MarketChartGetRangeParams {
  /**
   * Path param: Asset platform ID.
   * *refers to [`/asset_platforms`](/reference/asset-platforms-list).
   * @default ethereum
   */
  id: string;
  /**
   * Query param: Target currency of market data.
   * *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   * @default usd
   */
  vs_currency: string;
  /**
   * Query param: Starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
   * **Use ISO date string for best compatibility.**
   * @default 2025-01-01
   */
  from: string;
  /**
   * Query param: Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp.
   * **Use ISO date string for best compatibility.**
   * @default 2025-12-31
   */
  to: string;
  /**
   * Query param: Data interval, leave empty for auto granularity.
   */
  interval?: "5m" | "hourly" | "daily";
  /**
   * Query param: Decimal place for currency price value.
   */
  precision?: "full" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18";
}

export interface MarketChartGetRangeResponse {
  /**
   * Price data points as [timestamp, price] pairs
   */
  prices: Array<Array<number>>;
  /**
   * Market cap data points as [timestamp, market_cap] pairs
   */
  market_caps: Array<Array<number>>;
  /**
   * Total volume data points as [timestamp, volume] pairs
   */
  total_volumes: Array<Array<number>>;
}
export declare namespace MarketChart2 {
  export {
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetRangeResponse as MarketChartGetRangeResponse,
    type MarketChartGetParams as MarketChartGetParams,
    type MarketChartGetRangeParams as MarketChartGetRangeParams,
  };
}
export { MarketChart2 as MarketChartResource };
