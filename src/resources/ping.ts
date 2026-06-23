// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

export class Ping extends APIResource {
  /**
   * To check the API server status
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PingGetResponse>} Server status
   *
   * @example
   * ```ts
   * const get_ = await client.ping.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<PingGetResponse> {
    return this._client.get("/ping", options);
  }
}

export interface PingGetResponse {
  /**
   * API server status message
   */
  gecko_says: string;
}
export declare namespace Ping {
  export {
    type PingGetResponse as PingGetResponse,
  };
}
export { Ping as PingResource };
