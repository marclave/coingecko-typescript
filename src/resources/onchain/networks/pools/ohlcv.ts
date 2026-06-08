// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Ohlcv extends APIResource {
  /**
   * To get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network
   */
  getTimeframe(network: string, pool_address: string, timeframe: "day" | "hour" | "minute" | "second", params: OhlcvGetTimeframeParams | null | undefined = {}, options?: RequestOptions): APIPromise<Ohlcv> {
    const { aggregate, before_timestamp, limit, currency, token, include_empty_intervals } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools/${pool_address}/ohlcv/${timeframe}`, { query: { aggregate: aggregate, before_timestamp: before_timestamp, limit: limit, currency: currency, token: token, include_empty_intervals: include_empty_intervals }, ...options });
  }
}

export interface Ohlcv {
  data: { id: string; type: string; attributes: { ohlcv_list: Array<Array<number>> } };
  meta: { base?: { name?: string; symbol?: string; coingecko_coin_id?: string | null; address?: string }; quote?: { name?: string; symbol?: string; coingecko_coin_id?: string | null; address?: string } };
}

export interface OhlcvGetTimeframeParams {
/**
 * Time period to aggregate each OHLCV.
 * Available values (day): `1`
 * Available values (hour): `1`, `4`, `12`
 * Available values (minute): `1`, `5`, `15`
 * Available values (second): `1`, `15`, `30`
 * Default value: 1
 */
  aggregate?: string;

/**
 * Return OHLCV data before this timestamp (integer seconds since epoch).
 */
  before_timestamp?: number;

/**
 * Number of OHLCV results to return, maximum 1000.
 * Default value: 100
 */
  limit?: number;

/**
 * Return OHLCV in USD or quote token.
 * Default: `usd`
 */
  currency?: "usd" | "token";

/**
 * Return OHLCV for token, use this to invert the chart.
 * Available values: `base`, `quote`, or token address.
 * Default: `base`
 */
  token?: string;

/**
 * Include empty intervals with no trade data.
 * Default: `false`
 */
  include_empty_intervals?: boolean;

}
export declare namespace Ohlcv {
  export { type Ohlcv as Ohlcv, type OhlcvGetTimeframeParams as OhlcvGetTimeframeParams };
}
export { Ohlcv as OhlcvResource };
