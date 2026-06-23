// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

export class SupportedVsCurrencies extends APIResource {
  /**
   * To query all the supported currencies on CoinGecko
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<SupportedVsCurrencyGetResponse>} List of supported currencies
   *
   * @example
   * ```ts
   * const get_ = await client.simple.supportedVsCurrencies.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<SupportedVsCurrencyGetResponse> {
    return this._client.get("/simple/supported_vs_currencies", options);
  }
}

export type SupportedVsCurrencyGetResponse = Array<string>;
export declare namespace SupportedVsCurrencies {
  export {
    type SupportedVsCurrencyGetResponse as SupportedVsCurrencyGetResponse,
  };
}
export { SupportedVsCurrencies as SupportedVsCurrencyResource };
