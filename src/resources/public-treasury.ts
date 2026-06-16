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

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class PublicTreasury extends APIResource {
  /**
   * To query public companies' and governments' cryptocurrency holdings by coin ID
   */
  getCoinId(entity: "companies" | "governments", coin_id: string, params: PublicTreasuryGetCoinIdParams | null | undefined = {}, options?: RequestOptions): APIPromise<PublicTreasury2> {
    const { per_page, page, order } = params ?? {};
    return this._client.get(__scalarPath`/${entity}/public_treasury/${coin_id}`, { query: { per_page: per_page, page: page, order: order }, ...options });
  }
  /**
   * To query public companies' and governments' cryptocurrency holdings by entity ID
   */
  getEntityId(entity_id: string, params: PublicTreasuryGetEntityIdParams | null | undefined = {}, options?: RequestOptions): APIPromise<PublicTreasuryEntity> {
    const { holding_amount_change, holding_change_percentage } = params ?? {};
    return this._client.get(__scalarPath`/public_treasury/${entity_id}`, { query: { holding_amount_change: holding_amount_change, holding_change_percentage: holding_change_percentage }, ...options });
  }
  /**
   * To query historical cryptocurrency holdings chart of public companies and governments by entity ID and coin ID
   */
  getHoldingChart(entity_id: string, coin_id: string, params: PublicTreasuryGetHoldingChartParams, options?: RequestOptions): APIPromise<PublicTreasuryEntityChart> {
    const { days, include_empty_intervals } = params ?? {};
    return this._client.get(__scalarPath`/public_treasury/${entity_id}/${coin_id}/holding_chart`, { query: { days: days, include_empty_intervals: include_empty_intervals }, ...options });
  }
  /**
   * To query public companies' and governments' cryptocurrency transaction history by entity ID
   */
  getTransactionHistory(entity_id: string, params: PublicTreasuryGetTransactionHistoryParams | null | undefined = {}, options?: RequestOptions): APIPromise<PublicTreasuryTransactionHistory> {
    const { per_page, page, order, coin_ids } = params ?? {};
    return this._client.get(__scalarPath`/public_treasury/${entity_id}/transaction_history`, { query: { per_page: per_page, page: page, order: order, coin_ids: coin_ids }, ...options });
  }
}

export type PublicTreasury2 = { total_holdings: number; total_value_usd: number; market_cap_dominance: number; companies: Array<{ name: string; symbol: string | null; country: string; total_holdings: number; total_entry_value_usd: number; total_current_value_usd: number; percentage_of_total_supply: number }> } | { total_holdings: number; total_value_usd: number; market_cap_dominance: number; governments: Array<{ name: string; symbol: string | null; country: string; total_holdings: number; total_entry_value_usd: number; total_current_value_usd: number; percentage_of_total_supply: number }> };

export interface PublicTreasuryEntity {
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
  holdings: Array<{ coin_id: string; amount: number; percentage_of_total_supply: number; amount_per_share: number; entity_value_usd_percentage: number; current_value_usd: number; total_entry_value_usd: number; average_entry_value_usd: number; unrealized_pnl: number; holding_amount_change?: { "7d"?: number; "14d"?: number; "30d"?: number; "90d"?: number; "1y"?: number; ytd?: number }; holding_change_percentage?: { "7d"?: number; "14d"?: number; "30d"?: number; "90d"?: number; "1y"?: number; ytd?: number } }>;
}

export interface PublicTreasuryEntityChart {
  /**
   * Historical holdings data as [timestamp, amount] pairs
   */
  holdings: Array<Array<number>>;
  /**
   * Historical holdings value in USD as [timestamp, value_usd] pairs
   */
  holding_value_in_usd: Array<Array<number>>;
}

export interface PublicTreasuryTransactionHistory {
  transactions: Array<{ date: number; source_url: string; coin_id: string; type: "buy" | "sell"; holding_net_change: number; transaction_value_usd: number; holding_balance: number; average_entry_value_usd: number }>;
}

export interface PublicTreasuryGetCoinIdParams {
/**
 * Total results per page.
 * Default value: 250
 * Valid values: 1...250
 */
  per_page?: number;

/**
 * Page through results.
 * Default value: 1
 */
  page?: number;

/**
 * Sort order for results.
 * Default: `total_holdings_usd_desc`
 */
  order?: "total_holdings_usd_desc" | "total_holdings_usd_asc";

}

export interface PublicTreasuryGetEntityIdParams {
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

export interface PublicTreasuryGetHoldingChartParams {
/**
 * Data up to number of days ago.
 * Valid values: `7`, `14`, `30`, `90`, `180`, `365`, `730`, `max`
 */
  days: string;

/**
 * Include empty intervals with no transaction data.
 * Default: `false`
 */
  include_empty_intervals?: boolean;

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
export declare namespace PublicTreasury {
  export { type PublicTreasury2 as PublicTreasury, type PublicTreasuryEntity as PublicTreasuryEntity, type PublicTreasuryEntityChart as PublicTreasuryEntityChart, type PublicTreasuryTransactionHistory as PublicTreasuryTransactionHistory, type PublicTreasuryGetCoinIdParams as PublicTreasuryGetCoinIdParams, type PublicTreasuryGetEntityIdParams as PublicTreasuryGetEntityIdParams, type PublicTreasuryGetHoldingChartParams as PublicTreasuryGetHoldingChartParams, type PublicTreasuryGetTransactionHistoryParams as PublicTreasuryGetTransactionHistoryParams };
}
export { PublicTreasury as PublicTreasuryResource };
