// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { Networks2 } from "./networks/networks";

export class Simple2 extends APIResource {
  networks: Networks2 = new Networks2(this._client);

}

Simple2.Networks2 = Networks2;

export declare namespace Simple2 {
  export {
    Networks2 as Networks2,
  };
}
export { Simple2 as SimpleResource };
