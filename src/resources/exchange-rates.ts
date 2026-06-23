// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class ExchangeRateResource extends APIResource {
  /**
   * To query BTC exchange rates with other currencies
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ExchangeRates>} BTC exchange rates with other currencies
   *
   * @example
   * ```ts
   * const s = await client.exchangeRates.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<ExchangeRates> {
    return this._client.get("/exchange_rates", options);
  }
}

export interface ExchangeRates {
  /**
   * Exchange rates keyed by currency code
   */
  rates: Record<string, { name: string; unit: string; value: number; type: string }>;
}
export declare namespace ExchangeRateResource {
  export {
    type ExchangeRates as ExchangeRates,
  };
}
