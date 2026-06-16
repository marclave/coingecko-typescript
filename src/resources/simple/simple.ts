// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Price } from "./price";
import { SupportedVsCurrencies } from "./supported-vs-currencies";
import { TokenPrice } from "./token-price";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Simple extends APIResource {
  price: Price = new Price(this._client);
  supportedVsCurrencies: SupportedVsCurrencies = new SupportedVsCurrencies(this._client);
  tokenPrice: TokenPrice = new TokenPrice(this._client);

}

export declare namespace Simple {
  export { Price as Price, SupportedVsCurrencies as SupportedVsCurrencies, TokenPrice as TokenPrice };
}
export { Simple as SimpleResource };
