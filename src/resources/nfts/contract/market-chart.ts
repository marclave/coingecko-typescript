// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { path as __scalarPath } from "../../../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class MarketChart extends APIResource {
  /**
   * To query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now based on the provided contract address
   */
  get(asset_platform_id: string, contract_address: string, params: MarketChartGetParams, options?: RequestOptions): APIPromise<NftMarketChart> {
    const { days } = params ?? {};
    return this._client.get(__scalarPath`/nfts/${asset_platform_id}/contract/${contract_address}/market_chart`, { query: { days: days }, ...options });
  }
}

export interface NftMarketChart {
  /**
   * NFT collection floor price in USD as [timestamp, price] pairs
   */
  floor_price_usd: Array<Array<number>>;
  /**
   * NFT collection floor price in native currency as [timestamp, price] pairs
   */
  floor_price_native: Array<Array<number>>;
  /**
   * NFT collection 24h volume in USD as [timestamp, volume] pairs
   */
  h24_volume_usd: Array<Array<number>>;
  /**
   * NFT collection 24h volume in native currency as [timestamp, volume] pairs
   */
  h24_volume_native: Array<Array<number>>;
  /**
   * NFT collection market cap in USD as [timestamp, market_cap] pairs
   */
  market_cap_usd: Array<Array<number>>;
  /**
   * NFT collection market cap in native currency as [timestamp, market_cap] pairs
   */
  market_cap_native: Array<Array<number>>;
}

export interface MarketChartGetParams {
/**
 * Data up to number of days ago.
 * Valid values: any integer or `max`
 */
  days: string;

}
export declare namespace MarketChart {
  export { type NftMarketChart as NftMarketChart, type MarketChartGetParams as MarketChartGetParams };
}
export { MarketChart as MarketChartResource };
