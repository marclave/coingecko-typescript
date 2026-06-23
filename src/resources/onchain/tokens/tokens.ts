// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { InfoRecentlyUpdated, type InfoRecentlyUpdatedGetResponse, type InfoRecentlyUpdatedGetParams } from "./info-recently-updated";

export class Tokens2 extends APIResource {
  infoRecentlyUpdated: InfoRecentlyUpdated = new InfoRecentlyUpdated(this._client);

}

Tokens2.InfoRecentlyUpdated = InfoRecentlyUpdated;

export declare namespace Tokens2 {
  export {
    InfoRecentlyUpdated as InfoRecentlyUpdated,
    type InfoRecentlyUpdatedGetResponse as InfoRecentlyUpdatedGetResponse,
    type InfoRecentlyUpdatedGetParams as InfoRecentlyUpdatedGetParams,
  };
}
export { Tokens2 as TokenResource };
