// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Ping extends APIResource {
  /**
   * To check the API server status
   */
  get(options?: RequestOptions): APIPromise<PingServer> {
    return this._client.get("/ping", options);
  }
}

export interface PingServer {
  /**
   * API server status message
   */
  gecko_says: string;
}
export declare namespace Ping {
  export { type PingServer as PingServer };
}
export { Ping as PingResource };
