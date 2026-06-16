// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { DecentralizedFinanceDefi } from "./decentralized-finance-defi";
import { MarketCapChart } from "./market-cap-chart";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Global extends APIResource {
  decentralizedFinanceDefi: DecentralizedFinanceDefi = new DecentralizedFinanceDefi(this._client);
  marketCapChart: MarketCapChart = new MarketCapChart(this._client);

  /**
   * To query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc
   */
  get(options?: RequestOptions): APIPromise<Global2> {
    return this._client.get("/global", options);
  }
}

export interface Global2 {
  data: { active_cryptocurrencies: number; upcoming_icos: number; ongoing_icos: number; ended_icos: number; markets: number; total_market_cap: Record<string, number>; total_volume: Record<string, number>; market_cap_percentage: Record<string, number>; market_cap_change_percentage_24h_usd: number; volume_change_percentage_24h_usd: number; updated_at: number };
}
export declare namespace Global {
  export { DecentralizedFinanceDefi as DecentralizedFinanceDefi, MarketCapChart as MarketCapChart };
  export { type Global2 as Global };
}
export { Global as GlobalResource };
