// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Exchanges } from "./exchanges";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Derivatives extends APIResource {
  exchanges: Exchanges = new Exchanges(this._client);

  /**
   * To query all the tickers from derivatives exchanges on CoinGecko
   */
  get(options?: RequestOptions): APIPromise<DerivativesTickers> {
    return this._client.get("/derivatives", options);
  }
}

export type DerivativesTickers = Array<{ market: string; symbol: string; index_id: string; price: string; price_percentage_change_24h: number; contract_type: string; index: number; basis: number; spread: number; funding_rate: number; open_interest: number; volume_24h: number; last_traded_at: number; expired_at: number | null }>;
export declare namespace Derivatives {
  export { Exchanges as Exchanges };
  export { type DerivativesTickers as DerivativesTickers };
}
export { Derivatives as DerivativeResource };
