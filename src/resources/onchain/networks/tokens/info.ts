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
   * To query token metadata (name, symbol, CoinGecko ID, image, socials, websites, description, etc.) based on a provided token contract address on a network
   */
  get(network: string, address: string, options?: RequestOptions): APIPromise<TokenInfo> {
    return this._client.get(__scalarPath`/onchain/networks/${network}/tokens/${address}/info`, options);
  }
}

export interface TokenInfo {
  data: TokenInfoItem;
}

export interface TokenInfoItem {
  /**
   * Token identifier
   */
  id: string;
  /**
   * Resource type
   */
  type: string;
  attributes: { address: string; name: string; symbol: string; decimals: number; image_url: string | null; image: { thumb?: string; small?: string; large?: string }; coingecko_coin_id: string | null; websites: Array<string>; discord_url: string | null; farcaster_url: string | null; zora_url: string | null; telegram_handle: string | null; twitter_handle: string | null; description: string | null; gt_score: number; gt_score_details: { pool?: number; transaction?: number; creation?: number; info?: number; holders?: number }; gt_verified: boolean; categories: Array<string>; gt_category_ids: Array<string>; holders: { count?: number; distribution_percentage?: Record<string, string>; last_updated?: string }; mint_authority: string | null; freeze_authority: string | null; is_honeypot: boolean | string };
}
export declare namespace Info {
  export { type TokenInfo as TokenInfo, type TokenInfoItem as TokenInfoItem };
}
export { Info as InfoResource };
