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
   * To query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko
   */
  get(params: ExchangeGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<DerivativesExchanges> {
    const { order, per_page, page } = params ?? {};
    return this._client.get("/derivatives/exchanges", { query: { order: order, per_page: per_page, page: page }, ...options });
  }
  /**
   * To query the derivatives exchange's related data (name, open interest, trade volume, ...) based on the exchange's ID
   */
  getId(id: string, params: ExchangeGetIdParams | null | undefined = {}, options?: RequestOptions): APIPromise<DerivativesExchangesId> {
    const { include_tickers } = params ?? {};
    return this._client.get(__scalarPath`/derivatives/exchanges/${id}`, { query: { include_tickers: include_tickers }, ...options });
  }
  /**
   * To query all the supported derivatives exchanges with ID and name on CoinGecko
   */
  getList(options?: RequestOptions): APIPromise<DerivativesExchangesList> {
    return this._client.get("/derivatives/exchanges/list", options);
  }
}

export type DerivativesExchanges = Array<{ name: string; id: string; open_interest_btc: number; trade_volume_24h_btc: string; number_of_perpetual_pairs: number; number_of_futures_pairs: number; image: string; year_established: number | null; country: string | null; description: string; url: string }>;

export interface DerivativesExchangesId {
  /**
   * Derivatives exchange name
   */
  name: string;
  /**
   * Derivatives exchange open interest in BTC
   */
  open_interest_btc: number | null;
  /**
   * Derivatives exchange trade volume in BTC in 24 hours
   */
  trade_volume_24h_btc: string;
  /**
   * Number of perpetual pairs in the derivatives exchange
   */
  number_of_perpetual_pairs: number;
  /**
   * Number of futures pairs in the derivatives exchange
   */
  number_of_futures_pairs: number;
  /**
   * Derivatives exchange image URL
   */
  image: string;
  /**
   * Derivatives exchange established year
   */
  year_established: number | null;
  /**
   * Derivatives exchange incorporated country
   */
  country: string | null;
  /**
   * Derivatives exchange description
   */
  description: string;
  /**
   * Derivatives exchange website URL
   */
  url: string;
  /**
   * Derivative tickers data, available when include_tickers is specified
   */
  tickers?: Array<{ symbol: string; base: string; target: string; coin_id: string; target_coin_id: string; trade_url: string; contract_type: string; last: number; h24_percentage_change: number; index: number; index_basis_percentage: number; bid_ask_spread: number; funding_rate: number; open_interest_usd: number; h24_volume: number; converted_volume: { btc?: string; eth?: string; usd?: string }; converted_last: { btc?: string; eth?: string; usd?: string }; last_traded: number; expired_at: number | null }>;
}

export type DerivativesExchangesList = Array<{ id: string; name: string }>;

export interface ExchangeGetParams {
/**
 * Sort order of responses.
 * Default: `open_interest_btc_desc`
 */
  order?: "name_asc" | "name_desc" | "open_interest_btc_asc" | "open_interest_btc_desc" | "trade_volume_24h_btc_asc" | "trade_volume_24h_btc_desc";

/**
 * Total results per page.
 */
  per_page?: number;

/**
 * Page through results.
 * Default value: 1
 */
  page?: number;

}

export interface ExchangeGetIdParams {
/**
 * Include tickers data.
 * Default: tickers data is not included.
 */
  include_tickers?: "all" | "unexpired";

}
export declare namespace Exchanges {
  export { type DerivativesExchanges as DerivativesExchanges, type DerivativesExchangesId as DerivativesExchangesId, type DerivativesExchangesList as DerivativesExchangesList, type ExchangeGetParams as ExchangeGetParams, type ExchangeGetIdParams as ExchangeGetIdParams };
}
export { Exchanges as ExchangeResource };
