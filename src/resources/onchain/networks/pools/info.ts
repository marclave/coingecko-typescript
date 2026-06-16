// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../../resource";
import { APIPromise } from "../../../../api-promise";
import type { RequestOptions } from "../../../../internal/request-options";
import { path as __scalarPath } from "../../../../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Info extends APIResource {
  /**
   * To query pool metadata (base and quote token details, image, socials, websites, description, contract address, etc.) based on a provided pool contract address on a network
   */
  get(network: string, pool_address: string, params: InfoGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<PoolTokensInfo> {
    const { include } = params ?? {};
    return this._client.get(__scalarPath`/onchain/networks/${network}/pools/${pool_address}/info`, { query: { include: include }, ...options });
  }
}

export interface PoolTokensInfo {
  data: Array<{ id: string; type: string; attributes: { address: string; name: string; symbol: string; decimals: number; image_url: string | null; image: { thumb?: string; small?: string; large?: string }; coingecko_coin_id: string | null; websites: Array<string>; discord_url: string | null; farcaster_url: string | null; zora_url: string | null; telegram_handle: string | null; twitter_handle: string | null; description: string | null; gt_score: number; gt_score_details: { pool?: number; transaction?: number; creation?: number; info?: number; holders?: number }; gt_verified: boolean; categories: Array<string>; gt_category_ids: Array<string>; holders: { count?: number; distribution_percentage?: Record<string, string>; last_updated?: string }; mint_authority: string | null; freeze_authority: string | null; is_honeypot: boolean | string }; relationships: { pool?: { data?: { id?: string; type?: string } } } }>;
  /**
   * Included pool data, present when include=pool is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { base_token_address?: string; quote_token_address?: string; quote_token_addresses?: Array<string>; sentiment_vote_positive_percentage?: number; sentiment_vote_negative_percentage?: number; community_sus_report?: number } }>;
}

export interface InfoGetParams {
/**
 * Attributes to include.
 */
  include?: "pool";

}
export declare namespace Info {
  export { type PoolTokensInfo as PoolTokensInfo, type InfoGetParams as InfoGetParams };
}
export { Info as InfoResource };
