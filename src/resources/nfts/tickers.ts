// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { path as __scalarPath } from "../../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Tickers extends APIResource {
  /**
   * To query the latest floor price and 24hr volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and Blur
   */
  get(id: string, options?: RequestOptions): APIPromise<NftTickers> {
    return this._client.get(__scalarPath`/nfts/${id}/tickers`, options);
  }
}

export interface NftTickers {
  tickers: Array<{ floor_price_in_native_currency: number; h24_volume_in_native_currency: number; native_currency: string; native_currency_symbol: string; updated_at: string; nft_marketplace_id: string; name: string; image: string; nft_collection_url: string }>;
}
export declare namespace Tickers {
  export { type NftTickers as NftTickers };
}
export { Tickers as TickerResource };
