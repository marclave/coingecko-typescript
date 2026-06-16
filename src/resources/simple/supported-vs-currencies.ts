// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class SupportedVsCurrencies extends APIResource {
  /**
   * To query all the supported currencies on CoinGecko
   */
  get(options?: RequestOptions): APIPromise<SupportedCurrencies> {
    return this._client.get("/simple/supported_vs_currencies", options);
  }
}

export type SupportedCurrencies = Array<string>;
export declare namespace SupportedVsCurrencies {
  export { type SupportedCurrencies as SupportedCurrencies };
}
export { SupportedVsCurrencies as SupportedVsCurrencyResource };
