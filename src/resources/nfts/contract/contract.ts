// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";
import { path as __scalarPath } from "../../../internal/utils/path";
import { MarketChart3, type MarketChartGetResponse, type MarketChartGetParams } from "./market-chart";

export class Contract2 extends APIResource {
  marketChart: MarketChart3 = new MarketChart3(this._client);

  /**
   * To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection contract address and respective asset platform
   *
   * @param {string} contract_address - Contract address of the NFT collection.
   * @param {ContractGetContractAddressParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<ContractGetContractAddressResponse>} NFT collection data
   *
   * @example
   * ```ts
   * const getContractAddress = await client.nfts.contract.getContractAddress("0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", {
   *   asset_platform_id: "ethereum",
   * });
   * ```
   */
  getContractAddress(contract_address: string, params: ContractGetContractAddressParams, options?: RequestOptions): APIPromise<ContractGetContractAddressResponse> {
    const { asset_platform_id } = params ?? {};
    return this._client.get(__scalarPath`/nfts/${asset_platform_id}/contract/${contract_address}`, options);
  }
}

export interface ContractGetContractAddressParams {
  /**
   * Asset platform ID.
   * *refers to [`/asset_platforms`](/reference/asset-platforms-list).
   * @default ethereum
   */
  asset_platform_id: string;
}

export interface ContractGetContractAddressResponse {
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
  image: ContractGetContractAddressResponse.Image;
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
  floor_price: ContractGetContractAddressResponse.FloorPrice;
  /**
   * NFT collection market cap
   */
  market_cap: ContractGetContractAddressResponse.MarketCap;
  /**
   * NFT collection volume in 24 hours
   */
  volume_24h: ContractGetContractAddressResponse.Volume24h;
  /**
   * NFT collection floor price in USD 24 hours percentage change
   */
  floor_price_in_usd_24h_percentage_change: number;
  /**
   * NFT collection floor price 24 hours percentage change
   */
  floor_price_24h_percentage_change: ContractGetContractAddressResponse.FloorPrice24hPercentageChange;
  /**
   * NFT collection market cap 24 hours percentage change
   */
  market_cap_24h_percentage_change: ContractGetContractAddressResponse.MarketCap24hPercentageChange;
  /**
   * NFT collection volume in 24 hours percentage change
   */
  volume_24h_percentage_change: ContractGetContractAddressResponse.Volume24hPercentageChange;
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
  links: ContractGetContractAddressResponse.Links;
  /**
   * NFT collection floor price 7 days percentage change
   */
  floor_price_7d_percentage_change: ContractGetContractAddressResponse.FloorPrice7dPercentageChange;
  /**
   * NFT collection floor price 14 days percentage change
   */
  floor_price_14d_percentage_change: ContractGetContractAddressResponse.FloorPrice14dPercentageChange;
  /**
   * NFT collection floor price 30 days percentage change
   */
  floor_price_30d_percentage_change: ContractGetContractAddressResponse.FloorPrice30dPercentageChange;
  /**
   * NFT collection floor price 60 days percentage change
   */
  floor_price_60d_percentage_change: ContractGetContractAddressResponse.FloorPrice60dPercentageChange;
  /**
   * NFT collection floor price 1 year percentage change
   */
  floor_price_1y_percentage_change: ContractGetContractAddressResponse.FloorPrice1yPercentageChange;
  /**
   * NFT collection block explorer links
   */
  explorers: Array<ContractGetContractAddressResponse.Explorer>;
  /**
   * NFT collection user favorites count
   */
  user_favorites_count: number;
  /**
   * NFT collection all time highs
   */
  ath: ContractGetContractAddressResponse.Ath;
  /**
   * NFT collection all time highs change percentage
   */
  ath_change_percentage: ContractGetContractAddressResponse.AthChangePercentage;
  /**
   * NFT collection all time highs date
   */
  ath_date: ContractGetContractAddressResponse.AthDate;
}

export namespace ContractGetContractAddressResponse {
  export interface Image {
    small?: string;
    small_2x?: string;
  }

  export interface FloorPrice {
    native_currency?: number;
    usd?: number;
  }

  export interface MarketCap {
    native_currency?: number;
    usd?: number;
  }

  export interface Volume24h {
    native_currency?: number;
    usd?: number;
  }

  export interface FloorPrice24hPercentageChange {
    usd?: number;
    native_currency?: number;
  }

  export interface MarketCap24hPercentageChange {
    usd?: number;
    native_currency?: number;
  }

  export interface Volume24hPercentageChange {
    usd?: number;
    native_currency?: number;
  }

  export interface Links {
    homepage?: string;
    twitter?: string;
    discord?: string;
  }

  export interface FloorPrice7dPercentageChange {
    usd?: number;
    native_currency?: number;
  }

  export interface FloorPrice14dPercentageChange {
    usd?: number;
    native_currency?: number;
  }

  export interface FloorPrice30dPercentageChange {
    usd?: number;
    native_currency?: number;
  }

  export interface FloorPrice60dPercentageChange {
    usd?: number;
    native_currency?: number;
  }

  export interface FloorPrice1yPercentageChange {
    usd?: number;
    native_currency?: number;
  }

  export interface Explorer {
    name?: string;
    link?: string;
  }

  export interface Ath {
    native_currency?: number;
    usd?: number;
  }

  export interface AthChangePercentage {
    native_currency?: number;
    usd?: number;
  }

  export interface AthDate {
    /**
     * @format date-time
     */
    native_currency?: string;
    /**
     * @format date-time
     */
    usd?: string;
  }
}
Contract2.MarketChart3 = MarketChart3;

export declare namespace Contract2 {
  export {
    type ContractGetContractAddressResponse as ContractGetContractAddressResponse,
    type ContractGetContractAddressParams as ContractGetContractAddressParams,
  };

  export {
    MarketChart3 as MarketChart3,
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetParams as MarketChartGetParams,
  };
}
export { Contract2 as ContractResource };
