// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class NfTsBeta extends APIResource {
  /**
   * This endpoint allows you to **query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko**
   */
  nftsList(params: NfTsBetaNftsListParams | null | undefined = {}, options?: RequestOptions): APIPromise<NftList> {
    const { order, per_page, page } = params ?? {};
    return this._client.get("/nfts/list", { query: { order: order, per_page: per_page, page: page }, ...options });
  }
  /**
   * This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection ID**
   */
  nftsId(id: string, options?: RequestOptions): APIPromise<NftData> {
    return this._client.get(__scalarPath`/nfts/${id}`, options);
  }
  /**
   * This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection contract address and respective asset platform**
   */
  nftsContractAddress(asset_platform_id: string, contract_address: string, options?: RequestOptions): APIPromise<NftData> {
    return this._client.get(__scalarPath`/nfts/${asset_platform_id}/contract/${contract_address}`, options);
  }
  /**
   * This endpoint allows you to **query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko**
   */
  nftsMarkets(params: NfTsBetaNftsMarketsParams | null | undefined = {}, options?: RequestOptions): APIPromise<NfTsMarkets> {
    const { asset_platform_id, order, per_page, page } = params ?? {};
    return this._client.get("/nfts/markets", { query: { asset_platform_id: asset_platform_id, order: order, per_page: per_page, page: page }, ...options });
  }
  /**
   * This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now**
   */
  nftsIdMarketChart(id: string, params: NfTsBetaNftsIdMarketChartParams, options?: RequestOptions): APIPromise<NftMarketChart> {
    const { days } = params ?? {};
    return this._client.get(__scalarPath`/nfts/${id}/market_chart`, { query: { days: days }, ...options });
  }
  /**
   * This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now based on the provided contract address**
   */
  nftsContractAddressMarketChart(asset_platform_id: string, contract_address: string, params: NfTsBetaNftsContractAddressMarketChartParams, options?: RequestOptions): APIPromise<NftMarketChart> {
    const { days } = params ?? {};
    return this._client.get(__scalarPath`/nfts/${asset_platform_id}/contract/${contract_address}/market_chart`, { query: { days: days }, ...options });
  }
  /**
   * This endpoint allows you to **query the latest floor price and 24hr volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and LooksRare**
   */
  nftsIdTickers(id: string, options?: RequestOptions): APIPromise<NftTickers> {
    return this._client.get(__scalarPath`/nfts/${id}/tickers`, options);
  }
}

export interface NftList {
  /**
   * NFT collection ID
   */
  id?: string;
  /**
   * NFT collection contract address
   */
  contract_address?: string;
  /**
   * NFT collection name
   */
  name?: string;
  /**
   * NFT collection asset platform ID
   */
  asset_platform_id?: string;
  /**
   * NFT collection symbol
   */
  symbol?: string;
}

export interface NftData {
  /**
   * NFT collection ID
   */
  id?: string;
  /**
   * NFT collection web slug
   */
  web_slug?: string;
  /**
   * NFT collection contract address
   */
  contract_address?: string;
  /**
   * NFT collection asset platform ID
   */
  asset_platform_id?: string;
  /**
   * NFT collection name
   */
  name?: string;
  /**
   * NFT collection symbol
   */
  symbol?: string;
  /**
   * NFT collection image url
   */
  image?: { small?: string; small_2x?: string };
  /**
   * NFT collection banner image url
   */
  banner_image?: string;
  /**
   * NFT collection description
   */
  description?: string;
  /**
   * NFT collection native currency
   */
  native_currency?: string;
  /**
   * NFT collection native currency symbol
   */
  native_currency_symbol?: string;
  /**
   * coin market cap rank
   */
  market_cap_rank?: number | null;
  /**
   * NFT collection floor price
   */
  floor_price?: { native_currency?: number; usd?: number };
  /**
   * NFT collection market cap
   */
  market_cap?: { native_currency?: number; usd?: number };
  /**
   * NFT collection volume in 24 hours
   */
  volume_24h?: { native_currency?: number; usd?: number };
  /**
   * NFT collection floor price in usd 24 hours percentage change
   */
  floor_price_in_usd_24h_percentage_change?: number;
  floor_price_24h_percentage_change?: { usd?: number; native_currency?: number };
  /**
   * NFT collection market cap 24 hours percentage change
   */
  market_cap_24h_percentage_change?: { usd?: number; native_currency?: number };
  /**
   * NFT collection volume in 24 hours percentage change
   */
  volume_24h_percentage_change?: { usd?: number; native_currency?: number };
  /**
   * number of unique address owning the NFTs
   */
  number_of_unique_addresses?: number;
  /**
   * number of unique address owning the NFTs 24 hours percentage change
   */
  number_of_unique_addresses_24h_percentage_change?: number;
  /**
   * NFT collection volume in usd 24 hours percentage change
   */
  volume_in_usd_24h_percentage_change?: number;
  /**
   * NFT collection total supply
   */
  total_supply?: number;
  /**
   * NFT collection one day sales
   */
  one_day_sales?: number | null;
  /**
   * NFT collection one day sales 24 hours percentage change
   */
  one_day_sales_24h_percentage_change?: number;
  /**
   * NFT collection one day average sale price
   */
  one_day_average_sale_price?: number | null;
  /**
   * NFT collection one day average sale price 24 hours percentage change
   */
  one_day_average_sale_price_24h_percentage_change?: number;
  /**
   * NFT collection links
   */
  links?: { homepage?: string; twitter?: string; discord?: string };
  /**
   * NFT collection floor price 7 days percentage change
   */
  floor_price_7d_percentage_change?: { usd?: number; native_currency?: number };
  /**
   * NFT collection floor price 14 days percentage change
   */
  floor_price_14d_percentage_change?: { usd?: number; native_currency?: number };
  /**
   * NFT collection floor price 30 days percentage change
   */
  floor_price_30d_percentage_change?: { usd?: number; native_currency?: number };
  /**
   * NFT collection floor price 60 days percentage change
   */
  floor_price_60d_percentage_change?: { usd?: number; native_currency?: number };
  /**
   * NFT collection floor price 1 year percentage change
   */
  floor_price_1y_percentage_change?: { usd?: number; native_currency?: number };
  /**
   * NFT collection block explorers links
   */
  explorers?: Array<{ name?: string; link?: string }>;
  /**
   * NFT collection user favorites count
   */
  user_favorites_count?: number;
  /**
   * NFT collection all time highs
   */
  ath?: { native_currency?: number; usd?: number };
  /**
   * NFT collection all time highs change percentage
   */
  ath_change_percentage?: { native_currency?: number; usd?: number };
  /**
   * NFT collection all time highs date
   */
  ath_date?: { native_currency?: string; usd?: string };
}

export type NfTsMarkets = Array<{ id?: string; contract_address?: string | null; asset_platform_id?: string; name?: string; symbol?: string; image?: { small?: string; small_2x?: string }; description?: string | null; native_currency?: string; native_currency_symbol?: string; market_cap_rank?: number; floor_price?: { native_currency?: number; usd?: number }; market_cap?: { native_currency?: number; usd?: number }; volume_24h?: { native_currency?: number; usd?: number }; floor_price_in_usd_24h_percentage_change?: number; floor_price_24h_percentage_change?: { usd?: number; native_currency?: number }; market_cap_24h_percentage_change?: { usd?: number; native_currency?: number }; volume_24h_percentage_change?: { usd?: number; native_currency?: number }; number_of_unique_addresses?: number | null; number_of_unique_addresses_24h_percentage_change?: number; volume_in_usd_24h_percentage_change?: number; total_supply?: number | null; one_day_sales?: number | null; one_day_sales_24h_percentage_change?: number; one_day_average_sale_price?: number | null; one_day_average_sale_price_24h_percentage_change?: number }>;

export interface NftMarketChart {
  /**
   * NFT collection floor price in usd
   */
  floor_price_usd?: Array<Array<number>>;
  /**
   * NFT collection floor price in native currency
   */
  floor_price_native?: Array<Array<number>>;
  /**
   * NFT collection volume in 24 hours in usd
   */
  h24_volume_usd?: Array<Array<number>>;
  /**
   * NFT collection volume in 24 hours in native currency
   */
  h24_volume_native?: Array<Array<number>>;
  /**
   * NFT collection market cap in usd
   */
  market_cap_usd?: Array<Array<number>>;
  /**
   * NFT collection market cap in native currency
   */
  market_cap_native?: Array<Array<number>>;
}

export interface NftTickers {
  tickers?: Array<{ floor_price_in_native_currency?: number; h24_volume_in_native_currency?: number; native_currency?: string; native_currency_symbol?: string; updated_at?: string; nft_marketplace_id?: string; name?: string; image?: string; nft_collection_url?: string }>;
}

export interface NfTsBetaNftsListParams {
/**
 * use this to sort the order of responses
 */
  order?: "h24_volume_usd_asc" | "h24_volume_usd_desc" | "h24_volume_native_asc" | "h24_volume_native_desc" | "floor_price_native_asc" | "floor_price_native_desc" | "market_cap_native_asc" | "market_cap_native_desc" | "market_cap_usd_asc" | "market_cap_usd_desc";

/**
 * total results per page
 *  Valid values: 1...250
 */
  per_page?: number;

/**
 * page through results
 */
  page?: number;

}

export interface NfTsBetaNftsMarketsParams {
/**
 * filter result by asset platform (blockchain network)
 *  *refers to [`/asset_platforms`](/reference/asset-platforms-list) filter=`nft`
 */
  asset_platform_id?: string;

/**
 * sort results by field
 *  Default: `market_cap_usd_desc`
 */
  order?: "h24_volume_native_asc" | "h24_volume_native_desc" | "h24_volume_usd_asc" | "h24_volume_usd_desc" | "market_cap_usd_asc" | "market_cap_usd_desc";

/**
 * total results per page
 *  Valid values: any integer between 1 and 250
 *  Default: `100`
 */
  per_page?: number;

/**
 * page through results
 *  Default: `1`
 */
  page?: number;

}

export interface NfTsBetaNftsIdMarketChartParams {
/**
 * data up to number of days
 *  Valid values: any integer or max
 */
  days: string;

}

export interface NfTsBetaNftsContractAddressMarketChartParams {
/**
 * data up to number of days ago
 *  Valid values: any integer or max
 */
  days: string;

}
export declare namespace NfTsBeta {
  export { type NftList as NftList, type NftData as NftData, type NfTsMarkets as NfTsMarkets, type NftMarketChart as NftMarketChart, type NftTickers as NftTickers, type NfTsBetaNftsListParams as NfTsBetaNftsListParams, type NfTsBetaNftsMarketsParams as NfTsBetaNftsMarketsParams, type NfTsBetaNftsIdMarketChartParams as NfTsBetaNftsIdMarketChartParams, type NfTsBetaNftsContractAddressMarketChartParams as NfTsBetaNftsContractAddressMarketChartParams };
}
export { NfTsBeta as NfTsBetaResource };
