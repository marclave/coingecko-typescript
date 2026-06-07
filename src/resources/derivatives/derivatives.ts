// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Exchanges } from "./exchanges";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Derivatives extends APIResource {
  exchanges: Exchanges = new Exchanges(this._client);

  /**
   * This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**
   */
  tickers(options?: RequestOptions): APIPromise<DerivativesTickersList> {
    return this._client.get("/derivatives", options);
  }
}

export interface DerivativesTickersList {
  /**
   * derivative market name
   */
  market?: string;
  /**
   * derivative ticker symbol
   */
  symbol?: string;
  /**
   * derivative underlying asset
   */
  index_id?: string;
  /**
   * derivative ticker price
   */
  price?: string;
  /**
   * derivative ticker price percentage change in 24 hours
   */
  price_percentage_change_24h?: number;
  /**
   * derivative contract type
   */
  contract_type?: string;
  /**
   * derivative underlying asset price
   */
  index?: number;
  /**
   * difference of derivative price and index price
   */
  basis?: number;
  /**
   * derivative bid ask spread
   */
  spread?: number;
  /**
   * derivative funding rate
   */
  funding_rate?: number;
  /**
   * derivative open interest
   */
  open_interest?: number;
  /**
   * derivative volume in 24 hours
   */
  volume_24h?: number;
  /**
   * derivative last updated time
   */
  last_traded_at?: number;
  expired_at?: string | null;
}
export declare namespace Derivatives {
  export { Exchanges as Exchanges };
  export { type DerivativesTickersList as DerivativesTickersList };
}
export { Derivatives as DerivativeResource };
