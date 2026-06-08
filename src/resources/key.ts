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
   * To monitor your account's API usage, including rate limits, monthly total credits, remaining credits, and more
   */
  get(options?: RequestOptions): APIPromise<ApiUsage> {
    return this._client.get("/key", options);
  }
}

export interface ApiUsage {
  /**
   * Current subscription plan
   */
  plan: string;
  /**
   * Rate limit per minute for the plan
   */
  rate_limit_request_per_minute: number;
  /**
   * Total monthly API call credits for the plan
   */
  monthly_call_credit: number;
  /**
   * Total API calls made this month
   */
  current_total_monthly_calls: number;
  /**
   * Remaining API call credits this month
   */
  current_remaining_monthly_calls: number;
  /**
   * Rate limit per minute configured for this API key
   */
  api_key_rate_limit_request_per_minute: number;
  /**
   * Monthly call credit limit configured for this API key
   */
  api_key_monthly_call_credit: number;
  /**
   * Total API calls made this month by this API key
   */
  api_key_current_total_monthly_calls: number;
}
export declare namespace Key {
  export { type ApiUsage as ApiUsage };
}
export { Key as KeyResource };
