// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { Exchanges, type ExchangeGetResponse, type ExchangeGetIDResponse, type ExchangeGetListResponse, type ExchangeGetParams, type ExchangeGetIDParams } from "./exchanges";

export class Derivatives extends APIResource {
  exchanges: Exchanges = new Exchanges(this._client);

  /**
   * To query all the tickers from derivatives exchanges on CoinGecko
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<DerivativeGetResponse>} List of derivative tickers
   *
   * @example
   * ```ts
   * const get_ = await client.derivatives.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<DerivativeGetResponse> {
    return this._client.get("/derivatives", options);
  }
}

export type DerivativeGetResponse = Array<DerivativeGetResponse.DerivativeGetResponseItem>;

export namespace DerivativeGetResponse {
  export interface DerivativeGetResponseItem {
    /**
     * Derivative market name
     */
    market: string;
    /**
     * Derivative ticker symbol
     */
    symbol: string;
    /**
     * Derivative underlying asset
     */
    index_id: string;
    /**
     * Derivative ticker price
     */
    price: string;
    /**
     * Derivative ticker price percentage change in 24 hours
     */
    price_percentage_change_24h: number;
    /**
     * Derivative contract type
     */
    contract_type: string;
    /**
     * Derivative underlying asset price
     */
    index: number;
    /**
     * Difference of derivative price and index price
     */
    basis: number;
    /**
     * Derivative bid-ask spread
     */
    spread: number;
    /**
     * Derivative funding rate
     */
    funding_rate: number;
    /**
     * Derivative open interest
     */
    open_interest: number;
    /**
     * Derivative trading volume in 24 hours
     */
    volume_24h: number;
    /**
     * Derivative last traded time in UNIX timestamp
     */
    last_traded_at: number;
    /**
     * Derivative expiry time in UNIX timestamp
     */
    expired_at: number | null;
  }
}
Derivatives.Exchanges = Exchanges;

export declare namespace Derivatives {
  export {
    type DerivativeGetResponse as DerivativeGetResponse,
  };

  export {
    Exchanges as Exchanges,
    type ExchangeGetResponse as ExchangeGetResponse,
    type ExchangeGetIDResponse as ExchangeGetIDResponse,
    type ExchangeGetListResponse as ExchangeGetListResponse,
    type ExchangeGetParams as ExchangeGetParams,
    type ExchangeGetIDParams as ExchangeGetIDParams,
  };
}
export { Derivatives as DerivativeResource };
