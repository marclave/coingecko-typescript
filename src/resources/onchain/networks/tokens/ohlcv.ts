// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class Ohlcv2 extends APIResource {
  /**
   * To get the OHLCV chart (Open, High, Low, Close, Volume) of a token based on the provided token address on a network
   *
   * @param {"day" | "hour" | "minute" | "second"} timeframe - Timeframe of the OHLCV chart.
   * @param {OhlcvGetTimeframeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<OhlcvGetTimeframeResponse>} Token OHLCV chart data
   *
   * @example
   * ```ts
   * const getTimeframe = await client.onchain.networks.tokens.ohlcv.getTimeframe("day", {
   *   network: "solana",
   *   token_address: "So11111111111111111111111111111111111111112",
   * });
   * ```
   */
  getTimeframe(timeframe: "day" | "hour" | "minute" | "second", params: OhlcvGetTimeframeParams, options?: RequestOptions): APIPromise<OhlcvGetTimeframeResponse> {
    const { network, token_address, aggregate, before_timestamp, limit, currency, include_empty_intervals, include_inactive_source } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/${token_address}/ohlcv/${timeframe}`, { query: { aggregate: aggregate, before_timestamp: before_timestamp, limit: limit, currency: currency, include_empty_intervals: include_empty_intervals, include_inactive_source: include_inactive_source }, ...options });
  }
}

export interface OhlcvGetTimeframeParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default solana
   */
  network: string;
  /**
   * Path param: Token contract address.
   * @default So11111111111111111111111111111111111111112
   */
  token_address: string;
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
   * Query param: Include empty intervals with no trade data.
   * Default: `false`
   */
  include_empty_intervals?: boolean;
  /**
   * Query param: Include token data from inactive pools using the most recent swap.
   * Default: `false`
   */
  include_inactive_source?: boolean;
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
export declare namespace Ohlcv2 {
  export {
    type OhlcvGetTimeframeResponse as OhlcvGetTimeframeResponse,
    type OhlcvGetTimeframeParams as OhlcvGetTimeframeParams,
  };
}
export { Ohlcv2 as OhlcvResource };
