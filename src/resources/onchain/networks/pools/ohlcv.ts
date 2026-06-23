// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class Ohlcv extends APIResource {
  /**
   * To get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network
   *
   * @param {"day" | "hour" | "minute" | "second"} timeframe - Timeframe of the OHLCV chart.
   * @param {OhlcvGetTimeframeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OhlcvGetTimeframeResponse>} Pool OHLCV chart data
   *
   * @example
   * ```ts
   * const getTimeframe = await client.onchain.networks.pools.ohlcv.getTimeframe("day", {
   *   network: "eth",
   *   pool_address: "0x06da0fd433c1a5d7a4faa01111c044910a184553",
   * });
   * ```
   */
  getTimeframe(timeframe: "day" | "hour" | "minute" | "second", params: OhlcvGetTimeframeParams, options?: RequestOptions): APIPromise<OhlcvGetTimeframeResponse> {
    const { network, pool_address, aggregate, before_timestamp, limit, currency, token, include_empty_intervals } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools/${pool_address}/ohlcv/${timeframe}`, { query: { aggregate: aggregate, before_timestamp: before_timestamp, limit: limit, currency: currency, token: token, include_empty_intervals: include_empty_intervals }, ...options });
  }
}

export interface OhlcvGetTimeframeParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default eth
   */
  network: string;
  /**
   * Path param: Pool contract address.
   * @default 0x06da0fd433c1a5d7a4faa01111c044910a184553
   */
  pool_address: string;
  /**
   * Query param: Time period to aggregate each OHLCV.
   * Available values (day): `1`
   * Available values (hour): `1`, `4`, `12`
   * Available values (minute): `1`, `5`, `15`
   * Available values (second): `1`, `15`, `30`
   * Default value: 1
   */
  aggregate?: string;
  /**
   * Query param: Return OHLCV data before this timestamp (integer seconds since epoch).
   */
  before_timestamp?: number;
  /**
   * Query param: Number of OHLCV results to return, maximum 1000.
   * Default value: 100
   */
  limit?: number;
  /**
   * Query param: Return OHLCV in USD or quote token.
   * Default: `usd`
   */
  currency?: "usd" | "token";
  /**
   * Query param: Return OHLCV for token, use this to invert the chart.
   * Available values: `base`, `quote`, or token address.
   * Default: `base`
   */
  token?: string;
  /**
   * Query param: Include empty intervals with no trade data.
   * Default: `false`
   */
  include_empty_intervals?: boolean;
}

export interface OhlcvGetTimeframeResponse {
  data: OhlcvGetTimeframeResponse.Data;
  meta: OhlcvGetTimeframeResponse.Meta;
}

export namespace OhlcvGetTimeframeResponse {
  export interface Data {
    /**
     * Request ID
     */
    id: string;
    /**
     * Resource type
     */
    type: string;
    attributes: Data.Attributes;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * OHLCV data as [timestamp, open, high, low, close, volume] arrays
       */
      ohlcv_list: Array<Array<number>>;
    }
  }

  export interface Meta {
    /**
     * Base token metadata
     */
    base?: Meta.Base;
    /**
     * Quote token metadata
     */
    quote?: Meta.Quote;
  }

  export namespace Meta {
    export interface Base {
      name?: string;
      symbol?: string;
      coingecko_coin_id?: string | null;
      address?: string;
    }

    export interface Quote {
      name?: string;
      symbol?: string;
      coingecko_coin_id?: string | null;
      address?: string;
    }
  }
}
export declare namespace Ohlcv {
  export {
    type OhlcvGetTimeframeResponse as OhlcvGetTimeframeResponse,
    type OhlcvGetTimeframeParams as OhlcvGetTimeframeParams,
  };
}
export { Ohlcv as OhlcvResource };
