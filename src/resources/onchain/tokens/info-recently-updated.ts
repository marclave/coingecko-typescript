// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class InfoRecentlyUpdated extends APIResource {
  /**
   * To query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal
   */
  get(params: InfoRecentlyUpdatedGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<TokenInfoRecentlyUpdated> {
    const { include, network } = params ?? {};
    return this._client.get("/onchain/tokens/info_recently_updated", { query: { include: include, network: network }, ...options });
  }
}

export interface TokenInfoRecentlyUpdated {
  data: Array<{ id: string; type: string; attributes: { address: string; name: string; symbol: string; decimals: number; image_url: string | null; coingecko_coin_id: string | null; websites: Array<string>; discord_url: string | null; farcaster_url: string | null; zora_url: string | null; telegram_handle: string | null; twitter_handle: string | null; description: string | null; gt_score: number | null; metadata_updated_at: string }; relationships: { network?: { data?: { id?: string; type?: string } } } }>;
  /**
   * Included network data, present when include=network is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { name?: string; coingecko_asset_platform_id?: string } }>;
}

export interface InfoRecentlyUpdatedGetParams {
/**
 * Attributes for related resources to include.
 */
  include?: "network";

/**
 * Filter tokens by provided network.
 * *refers to [`/onchain/networks`](/reference/networks-list).
 */
  network?: string;

}
export declare namespace InfoRecentlyUpdated {
  export { type TokenInfoRecentlyUpdated as TokenInfoRecentlyUpdated, type InfoRecentlyUpdatedGetParams as InfoRecentlyUpdatedGetParams };
}
export { InfoRecentlyUpdated as InfoRecentlyUpdatedResource };
