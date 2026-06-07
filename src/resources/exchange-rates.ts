// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class ExchangeRates extends APIResource {
  /**
   * This endpoint allows you to **query BTC exchange rates with other currencies**
   */
  exchangeRates(options?: RequestOptions): APIPromise<ExchangeRates> {
    return this._client.get("/exchange_rates", options);
  }
}

export interface ExchangeRates {
  rates?: Record<string, { name?: string; unit?: string; value?: number; type?: string }>;
}
export declare namespace ExchangeRates {
  export { type ExchangeRates as ExchangeRates };
}
export { ExchangeRates as ExchangeRateResource };
