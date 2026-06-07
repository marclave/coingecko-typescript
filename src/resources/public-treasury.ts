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

export class PublicTreasury extends APIResource {
  /**
   * This endpoint allows you to **query all the supported entities on CoinGecko with entities ID, name, symbol, and country**
   */
  entitiesList(params: PublicTreasuryEntitiesListParams | null | undefined = {}, options?: RequestOptions): APIPromise<EntitiesList> {
    const { entity_type, per_page, page } = params ?? {};
    return this._client.get("/entities/list", { query: { entity_type: entity_type, per_page: per_page, page: page }, ...options });
  }
  /**
   * This endpoint allows you **query public companies & governments' cryptocurrency holdings** by Coin ID
   */
  companies(entity: "companies" | "governments", coin_id: string, params: PublicTreasuryCompaniesParams | null | undefined = {}, options?: RequestOptions): APIPromise<PublicTreasury> {
    const { per_page, page, order } = params ?? {};
    return this._client.get(__scalarPath`/${entity}/public_treasury/${coin_id}`, { query: { per_page: per_page, page: page, order: order }, ...options });
  }
  /**
   * This endpoint allows you **query public companies & governments' cryptocurrency holdings** by Entity ID
   */
  entity(entity_id: string, params: PublicTreasuryEntityParams | null | undefined = {}, options?: RequestOptions): APIPromise<PublicTreasuryEntity> {
    const { holding_amount_change, holding_change_percentage } = params ?? {};
    return this._client.get(__scalarPath`/public_treasury/${entity_id}`, { query: { holding_amount_change: holding_amount_change, holding_change_percentage: holding_change_percentage }, ...options });
  }
  /**
   * This endpoint allows you to **query historical cryptocurrency holdings chart of public companies & governments** by Entity ID and Coin ID
   */
  entityChart(entity_id: string, coin_id: string, params: PublicTreasuryEntityChartParams, options?: RequestOptions): APIPromise<PublicTreasuryEntityChart> {
    const { days, include_empty_intervals } = params ?? {};
    return this._client.get(__scalarPath`/public_treasury/${entity_id}/${coin_id}/holding_chart`, { query: { days: days, include_empty_intervals: include_empty_intervals }, ...options });
  }
  /**
   * This endpoint allows you **query public companies & governments' cryptocurrency transaction history** by Entity ID
   */
  transactionHistory(entity_id: string, params: PublicTreasuryTransactionHistoryParams | null | undefined = {}, options?: RequestOptions): APIPromise<PublicTreasuryTransactionHistory> {
    const { per_page, page, order, coin_ids } = params ?? {};
    return this._client.get(__scalarPath`/public_treasury/${entity_id}/transaction_history`, { query: { per_page: per_page, page: page, order: order, coin_ids: coin_ids }, ...options });
  }
}

export type PublicTreasury = CompaniesTreasury | GovernmentsTreasury;

export type EntitiesList = Array<{ id?: string; symbol?: string; name?: string; country?: string }>;

export interface CompaniesTreasury {
  /**
   * total crypto holdings of companies
   */
  total_holdings?: number;
  /**
   * total crypto holdings value in usd
   */
  total_value_usd?: number;
  /**
   * market cap dominance
   */
  market_cap_dominance?: number;
  companies?: Array<TreasuryEntity>;
}

export interface TreasuryEntity {
  /**
   * company or government name
   */
  name?: string;
  /**
   * company symbol
   */
  symbol?: string;
  /**
   * company incorporated or government country
   */
  country?: string;
  /**
   * total crypto holdings
   */
  total_holdings?: number;
  /**
   * total entry value in usd
   */
  total_entry_value_usd?: number;
  /**
   * total current value of crypto holdings in usd
   */
  total_current_value_usd?: number;
  /**
   * percentage of total crypto supply
   */
  percentage_of_total_supply?: number;
}

export interface GovernmentsTreasury {
  /**
   * total crypto holdings of governments
   */
  total_holdings?: number;
  /**
   * total crypto holdings value in usd
   */
  total_value_usd?: number;
  /**
   * market cap dominance
   */
  market_cap_dominance?: number;
  governments?: Array<TreasuryEntity>;
}

export interface PublicTreasuryEntity {
  /**
   * entity name
   */
  name?: string;
  /**
   * entity ID
   */
  id?: string;
  /**
   * entity type: company or government
   */
  type?: string;
  /**
   * stock market symbol for public company
   */
  symbol?: string;
  /**
   * country code of company or government location
   */
  country?: string;
  /**
   * official website URL of the entity
   */
  website_url?: string;
  /**
   * official Twitter handle of the entity
   */
  twitter_screen_name?: string;
  /**
   * total current value of all holdings in USD
   */
  total_treasury_value_usd?: number;
  /**
   * unrealized profit and loss (current value - total entry value)
   */
  unrealized_pnl?: number;
  /**
   * market to net asset value ratio
   */
  m_nav?: number;
  /**
   * total asset value per share in USD
   */
  total_asset_value_per_share_usd?: number;
  /**
   * list of cryptocurrency assets held by the entity
   */
  holdings?: Array<{ coin_id?: string; amount?: number; percentage_of_total_supply?: number; amount_per_share?: number; entity_value_usd_percentage?: number; current_value_usd?: number; total_entry_value_usd?: number; average_entry_value_usd?: number; unrealized_pnl?: number; holding_amount_change?: { "7d"?: number; "14d"?: number; "30d"?: number; "90d"?: number; "1y"?: number; ytd?: number }; holding_change_percentage?: { "7d"?: number; "14d"?: number; "30d"?: number; "90d"?: number; "1y"?: number; ytd?: number } }>;
}

export interface PublicTreasuryEntityChart {
  holdings?: Array<Array<number>>;
  holding_value_in_usd?: Array<Array<number>>;
}

export interface PublicTreasuryTransactionHistory {
  transactions?: Array<{ date?: number; source_url?: string; coin_id?: string; type?: "buy" | "sell"; holding_net_change?: number; transaction_value_usd?: number; holding_balance?: number; average_entry_value_usd?: number }>;
}

export interface PublicTreasuryEntitiesListParams {
/**
 * filter by entity type, default: false
 */
  entity_type?: "company" | "government";

/**
 * total results per page, default: 100
 *  Valid values: 1...250
 */
  per_page?: number;

/**
 * page through results, default: 1
 */
  page?: number;

}

export interface PublicTreasuryCompaniesParams {
/**
 * Number of results to return per page
 */
  per_page?: number;

/**
 * Page number to return
 */
  page?: number;

/**
 * Sort order for results
 */
  order?: "total_holdings_usd_desc" | "total_holdings_usd_asc";

}

export interface PublicTreasuryEntityParams {
/**
 * include holding amount change for specified timeframes, comma-separated if querying more than 1 timeframe
 *  Valid values: 7d, 14d, 30d, 90d, 1y, ytd
 */
  holding_amount_change?: string;

/**
 * include holding change percentage for specified timeframes, comma-separated if querying more than 1 timeframe
 *  Valid values: 7d, 14d, 30d, 90d, 1y, ytd
 */
  holding_change_percentage?: string;

}

export interface PublicTreasuryEntityChartParams {
/**
 * data up to number of days ago
 *  Valid values: `7, 14, 30, 90, 180, 365, 730, max`
 */
  days: string;

/**
 * include empty intervals with no transaction data, default: false
 */
  include_empty_intervals?: boolean;

}

export interface PublicTreasuryTransactionHistoryParams {
/**
 * total results per page, default: `100`
 *  Valid values: 1...250
 */
  per_page?: number;

/**
 * page through results, default: `1`
 */
  page?: number;

/**
 * use this to sort the order of transactions, default: `date_desc`
 */
  order?: "date_desc" | "date_asc" | "holding_net_change_desc" | "holding_net_change_asc" | "transaction_value_usd_desc" | "transaction_value_usd_asc" | "average_cost_desc" | "average_cost_asc";

/**
 * filter transactions by coin IDs, comma-separated if querying more than 1 coin
 *  *refers to [`/coins/list`](/reference/coins-list).
 */
  coin_ids?: string;

}
export declare namespace PublicTreasury {
  export { type PublicTreasury as PublicTreasury, type EntitiesList as EntitiesList, type CompaniesTreasury as CompaniesTreasury, type TreasuryEntity as TreasuryEntity, type GovernmentsTreasury as GovernmentsTreasury, type PublicTreasuryEntity as PublicTreasuryEntity, type PublicTreasuryEntityChart as PublicTreasuryEntityChart, type PublicTreasuryTransactionHistory as PublicTreasuryTransactionHistory, type PublicTreasuryEntitiesListParams as PublicTreasuryEntitiesListParams, type PublicTreasuryCompaniesParams as PublicTreasuryCompaniesParams, type PublicTreasuryEntityParams as PublicTreasuryEntityParams, type PublicTreasuryEntityChartParams as PublicTreasuryEntityChartParams, type PublicTreasuryTransactionHistoryParams as PublicTreasuryTransactionHistoryParams };
}
export { PublicTreasury as PublicTreasuryResource };
