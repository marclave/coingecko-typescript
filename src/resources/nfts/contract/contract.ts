// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { path as __scalarPath } from "../../../internal/utils/path";
import { MarketChart } from "./market-chart";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class Contract extends APIResource {
  marketChart: MarketChart = new MarketChart(this._client);

  /**
   * To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection contract address and respective asset platform
   */
  getContractAddress(asset_platform_id: string, contract_address: string, options?: RequestOptions): APIPromise<NftData> {
    return this._client.get(__scalarPath`/nfts/${asset_platform_id}/contract/${contract_address}`, options);
  }
}

export interface NftData {
  /**
   * NFT collection ID
   */
  id: string;
  /**
   * NFT collection web slug
   */
  web_slug: string;
  /**
   * NFT collection contract address
   */
  contract_address: string;
  /**
   * NFT collection asset platform ID
   */
  asset_platform_id: string;
  /**
   * NFT collection name
   */
  name: string;
  /**
   * NFT collection symbol
   */
  symbol: string;
  /**
   * NFT collection image URLs
   */
  image: { small?: string; small_2x?: string };
  /**
   * NFT collection banner image URL
   */
  banner_image: string;
  /**
   * NFT collection description
   */
  description: string;
  /**
   * NFT collection native currency
   */
  native_currency: string;
  /**
   * NFT collection native currency symbol
   */
  native_currency_symbol: string;
  /**
   * NFT collection market cap rank
   */
  market_cap_rank: number | null;
  /**
   * NFT collection floor price
   */
  floor_price: { native_currency?: number; usd?: number };
  /**
   * NFT collection market cap
   */
  market_cap: { native_currency?: number; usd?: number };
  /**
   * NFT collection volume in 24 hours
   */
  volume_24h: { native_currency?: number; usd?: number };
  /**
   * NFT collection floor price in USD 24 hours percentage change
   */
  floor_price_in_usd_24h_percentage_change: number;
  /**
   * NFT collection floor price 24 hours percentage change
   */
  floor_price_24h_percentage_change: { usd?: number; native_currency?: number };
  /**
   * NFT collection market cap 24 hours percentage change
   */
  market_cap_24h_percentage_change: { usd?: number; native_currency?: number };
  /**
   * NFT collection volume in 24 hours percentage change
   */
  volume_24h_percentage_change: { usd?: number; native_currency?: number };
  /**
   * Number of unique addresses owning the NFTs
   */
  number_of_unique_addresses: number;
  /**
   * Number of unique addresses 24 hours percentage change
   */
  number_of_unique_addresses_24h_percentage_change: number;
  /**
   * NFT collection volume in USD 24 hours percentage change
   */
  volume_in_usd_24h_percentage_change: number;
  /**
   * NFT collection total supply
   */
  total_supply: number;
  /**
   * NFT collection one day sales
   */
  one_day_sales: number | null;
  /**
   * NFT collection one day sales 24 hours percentage change
   */
  one_day_sales_24h_percentage_change: number;
  /**
   * NFT collection one day average sale price
   */
  one_day_average_sale_price: number | null;
  /**
   * NFT collection one day average sale price 24 hours percentage change
   */
  one_day_average_sale_price_24h_percentage_change: number;
  /**
   * NFT collection links
   */
  links: { homepage?: string; twitter?: string; discord?: string };
  /**
   * NFT collection floor price 7 days percentage change
   */
  floor_price_7d_percentage_change: { usd?: number; native_currency?: number };
  /**
   * NFT collection floor price 14 days percentage change
   */
  floor_price_14d_percentage_change: { usd?: number; native_currency?: number };
  /**
   * NFT collection floor price 30 days percentage change
   */
  floor_price_30d_percentage_change: { usd?: number; native_currency?: number };
  /**
   * NFT collection floor price 60 days percentage change
   */
  floor_price_60d_percentage_change: { usd?: number; native_currency?: number };
  /**
   * NFT collection floor price 1 year percentage change
   */
  floor_price_1y_percentage_change: { usd?: number; native_currency?: number };
  /**
   * NFT collection block explorer links
   */
  explorers: Array<{ name?: string; link?: string }>;
  /**
   * NFT collection user favorites count
   */
  user_favorites_count: number;
  /**
   * NFT collection all time highs
   */
  ath: { native_currency?: number; usd?: number };
  /**
   * NFT collection all time highs change percentage
   */
  ath_change_percentage: { native_currency?: number; usd?: number };
  /**
   * NFT collection all time highs date
   */
  ath_date: { native_currency?: string; usd?: string };
}
export declare namespace Contract {
  export { MarketChart as MarketChart };
  export { type NftData as NftData };
}
export { Contract as ContractResource };
