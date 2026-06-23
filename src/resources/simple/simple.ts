// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Price, type PriceGetResponse, type PriceGetParams } from "./price";
import { SupportedVsCurrencies, type SupportedVsCurrencyGetResponse } from "./supported-vs-currencies";
import { TokenPrice, type TokenPriceGetIDResponse, type TokenPriceGetIDParams } from "./token-price";

export class Simple extends APIResource {
  price: Price = new Price(this._client);
  supportedVsCurrencies: SupportedVsCurrencies = new SupportedVsCurrencies(this._client);
  tokenPrice: TokenPrice = new TokenPrice(this._client);

}

Simple.Price = Price;
Simple.SupportedVsCurrencies = SupportedVsCurrencies;
Simple.TokenPrice = TokenPrice;

export declare namespace Simple {
  export {
    Price as Price,
    type PriceGetResponse as PriceGetResponse,
    type PriceGetParams as PriceGetParams,
  };

  export {
    SupportedVsCurrencies as SupportedVsCurrencies,
    type SupportedVsCurrencyGetResponse as SupportedVsCurrencyGetResponse,
  };

  export {
    TokenPrice as TokenPrice,
    type TokenPriceGetIDResponse as TokenPriceGetIDResponse,
    type TokenPriceGetIDParams as TokenPriceGetIDParams,
  };
}
export { Simple as SimpleResource };
