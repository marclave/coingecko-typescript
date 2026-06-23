// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { TokenPrice2, type TokenPriceGetAddressesResponse, type TokenPriceGetAddressesParams } from "./token-price";

export class Networks2 extends APIResource {
  tokenPrice: TokenPrice2 = new TokenPrice2(this._client);

}

Networks2.TokenPrice2 = TokenPrice2;

export declare namespace Networks2 {
  export {
    TokenPrice2 as TokenPrice2,
    type TokenPriceGetAddressesResponse as TokenPriceGetAddressesResponse,
    type TokenPriceGetAddressesParams as TokenPriceGetAddressesParams,
  };
}
export { Networks2 as NetworkResource };
