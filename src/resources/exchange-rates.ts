// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class ExchangeRates extends APIResource {
  /**
   * To query BTC exchange rates with other currencies
   */
  get(options?: RequestOptions): APIPromise<ExchangeRates2> {
    return this._client.get("/exchange_rates", options);
  }
}

export interface ExchangeRates2 {
  /**
   * Exchange rates keyed by currency code
   */
  rates: Record<string, { name: string; unit: string; value: number; type: string }>;
}
export declare namespace ExchangeRates {
  export { type ExchangeRates2 as ExchangeRates };
}
export { ExchangeRates as ExchangeRateResource };
