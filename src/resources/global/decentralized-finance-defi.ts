// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class DecentralizedFinanceDefi extends APIResource {
  /**
   * To query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume
   */
  get(options?: RequestOptions): APIPromise<GlobalDeFi> {
    return this._client.get("/global/decentralized_finance_defi", options);
  }
}

export interface GlobalDeFi {
  data: { defi_market_cap: string; eth_market_cap: string; defi_to_eth_ratio: string; trading_volume_24h: string; defi_dominance: string; top_coin_name: string; top_coin_defi_dominance: number };
}
export declare namespace DecentralizedFinanceDefi {
  export { type GlobalDeFi as GlobalDeFi };
}
export { DecentralizedFinanceDefi as DecentralizedFinanceDefiResource };
