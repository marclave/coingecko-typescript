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

export class HoldersChart extends APIResource {
  /**
   * To get the historical token holders chart based on the provided token contract address on a network
   */
  get(network: string, token_address: string, params: HoldersChartGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<TokenHoldersChart> {
    const { days } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/${token_address}/holders_chart`, { query: { days: days }, ...options });
  }
}

export interface TokenHoldersChart {
  data: { id: string; type: string; attributes: { token_holders_list: Array<Array<string | number>> } };
  meta: { token?: { name?: string; symbol?: string; coingecko_coin_id?: string | null; address?: string } };
}

export interface HoldersChartGetParams {
/**
 * Number of days to return the historical token holders chart.
 * Default value: 7
 */
  days?: "7" | "30" | "max";

}
export declare namespace HoldersChart {
  export { type TokenHoldersChart as TokenHoldersChart, type HoldersChartGetParams as HoldersChartGetParams };
}
export { HoldersChart as HoldersChartResource };
