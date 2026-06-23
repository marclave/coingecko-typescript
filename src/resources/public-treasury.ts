// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";
import { path as __scalarPath } from "../internal/utils/path";

export class PublicTreasuryResource extends APIResource {
  /**
   * To query public companies' and governments' cryptocurrency holdings by coin ID
   *
   * @param {string} coin_id - Coin ID.
   * @param {PublicTreasuryGetCoinIDParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicTreasury>} Public companies or governments crypto treasury holdings data
   *
   * @example
   * ```ts
   * const publicTreasury = await client.publicTreasury.getCoinID("bitcoin", {
   *   entity: "companies",
   * });
   * ```
   */
  getCoinID(coin_id: string, params: PublicTreasuryGetCoinIDParams, options?: RequestOptions): APIPromise<PublicTreasury> {
    const { entity, per_page, page, order } = params ?? {};
    return this._client.get(__scalarPath`/${entity}/public_treasury/${coin_id}`, { query: { per_page: per_page, page: page, order: order }, ...options });
  }

  /**
   * To query public companies' and governments' cryptocurrency holdings by entity ID
   *
   * @param {string} entity_id - Public company or government entity ID.
   * @param {PublicTreasuryGetEntityIDParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicTreasuryGetEntityIDResponse>} Public company or government crypto treasury holdings data
   *
   * @example
   * ```ts
   * const getEntityID = await client.publicTreasury.getEntityID("strategy");
   * ```
   */
  getEntityID(entity_id: string, params: PublicTreasuryGetEntityIDParams | null | undefined = {}, options?: RequestOptions): APIPromise<PublicTreasuryGetEntityIDResponse> {
    const { holding_amount_change, holding_change_percentage } = params ?? {};
    return this._client.get(__scalarPath`/public_treasury/${entity_id}`, { query: { holding_amount_change: holding_amount_change, holding_change_percentage: holding_change_percentage }, ...options });
  }

  /**
   * To query historical cryptocurrency holdings chart of public companies and governments by entity ID and coin ID
   *
   * @param {string} coin_id - Coin ID.
   * @param {PublicTreasuryGetHoldingChartParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicTreasuryGetHoldingChartResponse>} Crypto treasury holdings historical chart data
   *
   * @example
   * ```ts
   * const getHoldingChart = await client.publicTreasury.getHoldingChart("bitcoin", {
   *   entity_id: "strategy",
   *   days: "365",
   * });
   * ```
   */
  getHoldingChart(coin_id: string, params: PublicTreasuryGetHoldingChartParams, options?: RequestOptions): APIPromise<PublicTreasuryGetHoldingChartResponse> {
    const { entity_id, days, include_empty_intervals } = params ?? {};
    return this._client.get(__scalarPath`/public_treasury/${entity_id}/${coin_id}/holding_chart`, { query: { days: days, include_empty_intervals: include_empty_intervals }, ...options });
  }

  /**
   * To query public companies' and governments' cryptocurrency transaction history by entity ID
   *
   * @param {string} entity_id - Public company or government entity ID.
   * @param {PublicTreasuryGetTransactionHistoryParams} [params] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<PublicTreasuryGetTransactionHistoryResponse>} Crypto treasury transaction history data
   *
   * @example
   * ```ts
   * const getTransactionHistory = await client.publicTreasury.getTransactionHistory("strategy");
   * ```
   */
  getTransactionHistory(entity_id: string, params: PublicTreasuryGetTransactionHistoryParams | null | undefined = {}, options?: RequestOptions): APIPromise<PublicTreasuryGetTransactionHistoryResponse> {
    const { per_page, page, order, coin_ids } = params ?? {};
    return this._client.get(__scalarPath`/public_treasury/${entity_id}/transaction_history`, { query: { per_page: per_page, page: page, order: order, coin_ids: coin_ids }, ...options });
  }
}

export type PublicTreasury = { total_holdings: number; total_value_usd: number; market_cap_dominance: number; companies: Array<{ name: string; symbol: string | null; country: string; total_holdings: number; total_entry_value_usd: number; total_current_value_usd: number; percentage_of_total_supply: number }> } | { total_holdings: number; total_value_usd: number; market_cap_dominance: number; governments: Array<{ name: string; symbol: string | null; country: string; total_holdings: number; total_entry_value_usd: number; total_current_value_usd: number; percentage_of_total_supply: number }> };

export interface PublicTreasuryGetCoinIDParams {
  /**
   * Path param: Public company or government entity.
   * @default companies
   */
  entity: "companies" | "governments";
  /**
   * Query param: Total results per page.
   * Default value: 250
   * Valid values: 1...250
   */
  per_page?: number;
  /**
   * Query param: Page through results.
   * Default value: 1
   */
  page?: number;
  /**
   * Query param: Sort order for results.
   * Default: `total_holdings_usd_desc`
   */
  order?: "total_holdings_usd_desc" | "total_holdings_usd_asc";
}

export interface PublicTreasuryGetEntityIDParams {
  /**
   * Include holding amount change for specified timeframes, comma-separated if querying more than 1 timeframe.
   * Valid values: `7d`, `14d`, `30d`, `90d`, `1y`, `ytd`
   */
  holding_amount_change?: string;
  /**
   * Include holding change percentage for specified timeframes, comma-separated if querying more than 1 timeframe.
   * Valid values: `7d`, `14d`, `30d`, `90d`, `1y`, `ytd`
   */
  holding_change_percentage?: string;
}

export interface PublicTreasuryGetEntityIDResponse {
  /**
   * Entity name
   */
  name: string;
  /**
   * Entity ID
   */
  id: string;
  /**
   * Entity type: company or government
   */
  type: string;
  /**
   * Stock market ticker symbol
   */
  symbol: string | null;
  /**
   * Country code
   */
  country: string;
  /**
   * Official website URL
   */
  website_url: string;
  /**
   * Official Twitter handle
   */
  twitter_screen_name: string;
  /**
   * Total current value of all holdings in USD
   */
  total_treasury_value_usd: number;
  /**
   * Unrealized profit and loss (current value minus total entry value)
   */
  unrealized_pnl: number;
  /**
   * Market to net asset value ratio
   */
  m_nav: number;
  /**
   * Total asset value per share in USD
   */
  total_asset_value_per_share_usd: number;
  /**
   * List of cryptocurrency assets held by the entity
   */
  holdings: Array<PublicTreasuryGetEntityIDResponse.Holding>;
}

export namespace PublicTreasuryGetEntityIDResponse {
  export interface Holding {
    /**
     * Coin ID
     */
    coin_id: string;
    /**
     * Amount of cryptocurrency held
     */
    amount: number;
    /**
     * Percentage of total crypto supply
     */
    percentage_of_total_supply: number;
    /**
     * Amount of cryptocurrency per share
     */
    amount_per_share: number;
    /**
     * Percentage of entity's total treasury value
     */
    entity_value_usd_percentage: number;
    /**
     * Current value of holdings in USD
     */
    current_value_usd: number;
    /**
     * Total entry cost in USD
     */
    total_entry_value_usd: number;
    /**
     * Average entry cost per unit in USD
     */
    average_entry_value_usd: number;
    /**
     * Unrealized profit and loss for this holding
     */
    unrealized_pnl: number;
    /**
     * Holding amount changes over different timeframes
     */
    holding_amount_change?: Holding.HoldingAmountChange;
    /**
     * Holding change percentages over different timeframes
     */
    holding_change_percentage?: Holding.HoldingChangePercentage;
  }

  export namespace Holding {
    export interface HoldingAmountChange {
      "7d"?: number;
      "14d"?: number;
      "30d"?: number;
      "90d"?: number;
      "1y"?: number;
      ytd?: number;
    }

    export interface HoldingChangePercentage {
      "7d"?: number;
      "14d"?: number;
      "30d"?: number;
      "90d"?: number;
      "1y"?: number;
      ytd?: number;
    }
  }
}

export interface PublicTreasuryGetHoldingChartParams {
  /**
   * Path param: Public company or government entity ID.
   * *refers to [`/entities/list`](/reference/entities-list).
   * @default strategy
   */
  entity_id: string;
  /**
   * Query param: Data up to number of days ago.
   * Valid values: `7`, `14`, `30`, `90`, `180`, `365`, `730`, `max`
   * @default 365
   */
  days: string;
  /**
   * Query param: Include empty intervals with no transaction data.
   * Default: `false`
   */
  include_empty_intervals?: boolean;
}

export interface PublicTreasuryGetHoldingChartResponse {
  /**
   * Historical holdings data as [timestamp, amount] pairs
   */
  holdings: Array<Array<number>>;
  /**
   * Historical holdings value in USD as [timestamp, value_usd] pairs
   */
  holding_value_in_usd: Array<Array<number>>;
}

export interface PublicTreasuryGetTransactionHistoryParams {
  /**
   * Total results per page.
   * Default value: 100
   * Valid values: 1...250
   */
  per_page?: number;
  /**
   * Page through results.
   * Default value: 1
   */
  page?: number;
  /**
   * Sort order of transactions.
   * Default: `date_desc`
   */
  order?: "date_desc" | "date_asc" | "holding_net_change_desc" | "holding_net_change_asc" | "transaction_value_usd_desc" | "transaction_value_usd_asc" | "average_cost_desc" | "average_cost_asc";
  /**
   * Filter transactions by coin IDs, comma-separated if querying more than 1 coin.
   * *refers to [`/coins/list`](/reference/coins-list).
   */
  coin_ids?: string;
}

export interface PublicTreasuryGetTransactionHistoryResponse {
  transactions: Array<PublicTreasuryGetTransactionHistoryResponse.Transaction>;
}

export namespace PublicTreasuryGetTransactionHistoryResponse {
  export interface Transaction {
    /**
     * Transaction date in UNIX timestamp
     */
    date: number;
    /**
     * Source document URL
     */
    source_url: string;
    /**
     * Coin ID
     */
    coin_id: string;
    /**
     * Transaction type
     */
    type: "buy" | "sell";
    /**
     * Net change in holdings after the transaction
     */
    holding_net_change: number;
    /**
     * Transaction value in USD
     */
    transaction_value_usd: number;
    /**
     * Total holding balance after the transaction
     */
    holding_balance: number;
    /**
     * Average entry value in USD after the transaction
     */
    average_entry_value_usd: number;
  }
}
export declare namespace PublicTreasuryResource {
  export {
    type PublicTreasury as PublicTreasury,
    type PublicTreasuryGetEntityIDResponse as PublicTreasuryGetEntityIDResponse,
    type PublicTreasuryGetHoldingChartResponse as PublicTreasuryGetHoldingChartResponse,
    type PublicTreasuryGetTransactionHistoryResponse as PublicTreasuryGetTransactionHistoryResponse,
    type PublicTreasuryGetCoinIDParams as PublicTreasuryGetCoinIDParams,
    type PublicTreasuryGetEntityIDParams as PublicTreasuryGetEntityIDParams,
    type PublicTreasuryGetHoldingChartParams as PublicTreasuryGetHoldingChartParams,
    type PublicTreasuryGetTransactionHistoryParams as PublicTreasuryGetTransactionHistoryParams,
  };
}
