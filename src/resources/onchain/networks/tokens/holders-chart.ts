// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

export class HoldersChart extends APIResource {
  /**
   * To get the historical token holders chart based on the provided token contract address on a network
   *
   * @param {string} token_address - Token contract address.
   * @param {HoldersChartGetParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<HoldersChartGetResponse>} Historical token holders chart data
   *
   * @example
   * ```ts
   * const get_ = await client.onchain.networks.tokens.holdersChart.get("Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump", {
   *   network: "solana",
   * });
   * ```
   */
  get(token_address: string, params: HoldersChartGetParams, options?: RequestOptions): APIPromise<HoldersChartGetResponse> {
    const { network, days } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/${token_address}/holders_chart`, { query: { days: days }, ...options });
  }
}

export interface HoldersChartGetParams {
  /**
   * Path param: Network ID.
   * *refers to [`/onchain/networks`](/reference/networks-list).
   * @default solana
   */
  network: string;
  /**
   * Query param: Number of days to return the historical token holders chart.
   * Default value: 7
   */
  days?: "7" | "30" | "max";
}

export interface HoldersChartGetResponse {
  data: HoldersChartGetResponse.Data;
  meta: HoldersChartGetResponse.Meta;
}

export namespace HoldersChartGetResponse {
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
       * Historical token holders as [timestamp, holder_count] pairs
       */
      token_holders_list: Array<Array<string | number>>;
    }
  }

  export interface Meta {
    token?: Meta.Token;
  }

  export namespace Meta {
    export interface Token {
      /**
       * Token name
       */
      name?: string;
      /**
       * Token symbol
       */
      symbol?: string;
      /**
       * CoinGecko coin ID
       */
      coingecko_coin_id?: string | null;
      /**
       * Token contract address
       */
      address?: string;
    }
  }
}
export declare namespace HoldersChart {
  export {
    type HoldersChartGetResponse as HoldersChartGetResponse,
    type HoldersChartGetParams as HoldersChartGetParams,
  };
}
export { HoldersChart as HoldersChartResource };
