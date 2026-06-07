// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Global extends APIResource {
  /**
   * This endpoint allows you **query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc**
   */
  crypto(options?: RequestOptions): APIPromise<Global> {
    return this._client.get("/global", options);
  }
  /**
   * This endpoint allows you **query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume**
   */
  deFi(options?: RequestOptions): APIPromise<GlobalDeFi> {
    return this._client.get("/global/decentralized_finance_defi", options);
  }
  /**
   * This endpoint allows you to **query historical global market cap and volume data by number of days away from now**
   */
  marketCapChart(params: GlobalMarketCapChartParams, options?: RequestOptions): APIPromise<GlobalMarketCapChart> {
    const { days, vs_currency } = params ?? {};
    return this._client.get("/global/market_cap_chart", { query: { days: days, vs_currency: vs_currency }, ...options });
  }
}

export interface Global {
  data?: { active_cryptocurrencies?: number; upcoming_icos?: number; ongoing_icos?: number; ended_icos?: number; markets?: number; total_market_cap?: { btc?: number; eth?: number }; total_volume?: { btc?: number; eth?: number }; market_cap_percentage?: { btc?: number; eth?: number }; market_cap_change_percentage_24h_usd?: number; volume_change_percentage_24h_usd?: number; updated_at?: number };
}

export interface GlobalDeFi {
  data?: { defi_market_cap?: string; eth_market_cap?: string; defi_to_eth_ratio?: string; trading_volume_24h?: string; defi_dominance?: string; top_coin_name?: string; top_coin_defi_dominance?: number };
}

export interface GlobalMarketCapChart {
  market_cap_chart?: { market_cap?: Array<Array<number>>; volume?: Array<Array<number>> };
}

export interface GlobalMarketCapChartParams {
/**
 * data up to number of days ago
 *  Valid values: any integer
 */
  days: "1" | "7" | "14" | "30" | "90" | "180" | "365" | "max";

/**
 * target currency of market cap, default: usd
 *  *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
 */
  vs_currency?: string;

}
export declare namespace Global {
  export { type Global as Global, type GlobalDeFi as GlobalDeFi, type GlobalMarketCapChart as GlobalMarketCapChart, type GlobalMarketCapChartParams as GlobalMarketCapChartParams };
}
export { Global as GlobalResource };
