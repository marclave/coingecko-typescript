// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Key extends APIResource {
  /**
   * This endpoint allows you to **monitor your account's API usage, including rate limits, monthly total credits, remaining credits, and more**
   */
  apiUsage(options?: RequestOptions): APIPromise<Key> {
    return this._client.get("/key", options);
  }
}

export interface Key {
  plan?: string;
  rate_limit_request_per_minute?: number;
  monthly_call_credit?: number;
  current_total_monthly_calls?: number;
  current_remaining_monthly_calls?: number;
  /**
   * Specific request per minute configured for the API key used to authenticate this request
   */
  api_key_rate_limit_request_per_minute?: number;
  /**
   * Specific monthly credit limit configured for the API key used to authenticate this request
   */
  api_key_monthly_call_credit?: number;
}
export declare namespace Key {
  export { type Key as Key };
}
export { Key as KeyResource };
