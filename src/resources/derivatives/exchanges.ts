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

export class Exchanges extends APIResource {
  /**
   * This endpoint allows you to **query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko**
   */
  derivatives(params: ExchangeDerivativesParams | null | undefined = {}, options?: RequestOptions): APIPromise<DerivativesExchanges> {
    const { order, per_page, page } = params ?? {};
    return this._client.get("/derivatives/exchanges", { query: { order: order, per_page: per_page, page: page }, ...options });
  }
  /**
   * This endpoint allows you to **query the derivatives exchange's related data (ID, name, open interest, ...) based on the exchanges' ID**
   */
  derivativesId(id: string, params: ExchangeDerivativesIdParams | null | undefined = {}, options?: RequestOptions): APIPromise<DerivativesExchangesId> {
    const { include_tickers } = params ?? {};
    return this._client.get(__scalarPath`/derivatives/exchanges/${id}`, { query: { include_tickers: include_tickers }, ...options });
  }
  /**
   * This endpoint allows you to **query all the derivatives exchanges with ID and name on CoinGecko**
   */
  derivativesList(options?: RequestOptions): APIPromise<DerivativesExchangesList> {
    return this._client.get("/derivatives/exchanges/list", options);
  }
}

export interface DerivativesExchanges {
  /**
   * derivatives exchange name
   */
  name?: string;
  /**
   * derivatives exchange ID
   */
  id?: string;
  /**
   * derivatives exchange open interest in BTC
   */
  open_interest_btc?: number;
  /**
   * derivatives exchange trade volume in BTC in 24 hours
   */
  trade_volume_24h_btc?: string;
  /**
   * number of perpetual pairs in the derivatives exchange
   */
  number_of_perpetual_pairs?: number;
  /**
   * number of futures pairs in the derivatives exchange
   */
  number_of_futures_pairs?: number;
  /**
   * derivatives exchange image url
   */
  image?: string;
  /**
   * derivatives exchange established year
   */
  year_established?: number | null;
  /**
   * derivatives exchange incorporated country
   */
  country?: string | null;
  /**
   * derivatives exchange description
   */
  description?: string;
  /**
   * derivatives exchange website url
   */
  url?: string;
}

export interface DerivativesExchangesId {
  /**
   * derivatives exchange name
   */
  name?: string;
  /**
   * derivatives exchange open interest in BTC
   */
  open_interest_btc?: number | null;
  /**
   * derivatives exchange trade volume in BTC in 24 hours
   */
  trade_volume_24h_btc?: string;
  /**
   * number of perpetual pairs in the derivatives exchange
   */
  number_of_perpetual_pairs?: number;
  /**
   * number of futures pairs in the derivatives exchange
   */
  number_of_futures_pairs?: number;
  /**
   * derivatives exchange image url
   */
  image?: string;
  /**
   * derivatives exchange established year
   */
  year_established?: number | null;
  /**
   * derivatives exchange incorporated country
   */
  country?: string | null;
  /**
   * derivatives exchange description
   */
  description?: string;
  /**
   * derivatives exchange website url
   */
  url?: string;
  tickers?: Array<DerivativesTickersItems>;
}

export interface DerivativesTickersItems {
  /**
   * derivative ticker symbol
   */
  symbol?: string;
  /**
   * derivative base asset
   */
  base?: string;
  /**
   * derivative target asset
   */
  target?: string;
  /**
   * derivative base asset coin ID
   */
  coin_id?: string;
  /**
   * derivative target asset coin ID
   */
  target_coin_id?: string;
  /**
   * derivative trade url
   */
  trade_url?: string;
  /**
   * derivative contract type
   */
  contract_type?: string;
  /**
   * derivative last price
   */
  last?: number;
  /**
   * derivative price percentage change in 24 hours
   */
  h24_percentage_change?: number;
  /**
   * derivative underlying asset price
   */
  index?: number;
  /**
   * difference of derivative price and index price in percentage
   */
  index_basis_percentage?: number;
  /**
   * derivative bid ask spread
   */
  bid_ask_spread?: number;
  /**
   * derivative funding rate
   */
  funding_rate?: number;
  /**
   * derivative open interest in USD
   */
  open_interest_usd?: number;
  /**
   * derivative volume in 24 hours
   */
  h24_volume?: number;
  converted_volume?: { btc?: string; eth?: string; usd?: string };
  converted_last?: { btc?: string; eth?: string; usd?: string };
  /**
   * derivative last updated time
   */
  last_traded?: number;
  expired_at?: string | null;
}

export interface DerivativesExchangesList {
  /**
   * derivatives exchange ID
   */
  id?: string;
  /**
   * derivatives exchange name
   */
  name?: string;
}

export interface ExchangeDerivativesParams {
/**
 * use this to sort the order of responses, default: open_interest_btc_desc
 */
  order?: "name_asc" | "name_desc" | "open_interest_btc_asc" | "open_interest_btc_desc" | "trade_volume_24h_btc_asc" | "trade_volume_24h_btc_desc";

/**
 * total results per page
 */
  per_page?: number;

/**
 * page through results, default: 1
 */
  page?: number;

}

export interface ExchangeDerivativesIdParams {
/**
 * include tickers data
 */
  include_tickers?: "all" | "unexpired";

}
export declare namespace Exchanges {
  export { type DerivativesExchanges as DerivativesExchanges, type DerivativesExchangesId as DerivativesExchangesId, type DerivativesTickersItems as DerivativesTickersItems, type DerivativesExchangesList as DerivativesExchangesList, type ExchangeDerivativesParams as ExchangeDerivativesParams, type ExchangeDerivativesIdParams as ExchangeDerivativesIdParams };
}
export { Exchanges as ExchangeResource };
