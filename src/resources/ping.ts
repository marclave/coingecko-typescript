// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Ping extends APIResource {
  /**
   * This endpoint allows you to **check the API server status**
   */
  server(options?: RequestOptions): APIPromise<Ping> {
    return this._client.get("/ping", options);
  }
}

export interface Ping {
  gecko_says?: string;
}
export declare namespace Ping {
  export { type Ping as Ping };
}
export { Ping as PingResource };
