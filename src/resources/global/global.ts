// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../resource";
import { APIPromise } from "../../api-promise";
import type { RequestOptions } from "../../internal/request-options";
import { DecentralizedFinanceDefi, type DecentralizedFinanceDefiGetResponse } from "./decentralized-finance-defi";
import { MarketCapChart, type MarketCapChartGetResponse, type MarketCapChartGetParams } from "./market-cap-chart";

export class GlobalResource extends APIResource {
  decentralizedFinanceDefi: DecentralizedFinanceDefi = new DecentralizedFinanceDefi(this._client);
  marketCapChart: MarketCapChart = new MarketCapChart(this._client);

  /**
   * To query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns {APIPromise<Global>} Cryptocurrency global market data
   *
   * @example
   * ```ts
   * const global = await client.global.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<Global> {
    return this._client.get("/global", options);
  }
}

export interface Global {
  data: { active_cryptocurrencies: number; upcoming_icos: number; ongoing_icos: number; ended_icos: number; markets: number; total_market_cap: Record<string, number>; total_volume: Record<string, number>; market_cap_percentage: Record<string, number>; market_cap_change_percentage_24h_usd: number; volume_change_percentage_24h_usd: number; updated_at: number };
}
GlobalResource.DecentralizedFinanceDefi = DecentralizedFinanceDefi;
GlobalResource.MarketCapChart = MarketCapChart;

export declare namespace GlobalResource {
  export {
    type Global as Global,
  };

  export {
    DecentralizedFinanceDefi as DecentralizedFinanceDefi,
    type DecentralizedFinanceDefiGetResponse as DecentralizedFinanceDefiGetResponse,
  };

  export {
    MarketCapChart as MarketCapChart,
    type MarketCapChartGetResponse as MarketCapChartGetResponse,
    type MarketCapChartGetParams as MarketCapChartGetParams,
  };
}
