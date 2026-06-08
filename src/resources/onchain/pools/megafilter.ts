// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../../../resource";
import { APIPromise } from "../../../api-promise";
import type { RequestOptions } from "../../../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class Megafilter extends APIResource {
  /**
   * To query pools based on various filters across all networks on GeckoTerminal
   */
  get(params: MegafilterGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Pool> {
    const { networks, dexes, include, page, sort, fdv_usd_min, fdv_usd_max, reserve_in_usd_min, reserve_in_usd_max, h24_volume_usd_min, h24_volume_usd_max, pool_created_hour_min, pool_created_hour_max, tx_count_min, tx_count_max, tx_count_duration, buys_min, buys_max, buys_duration, sells_min, sells_max, sells_duration, price_change_percentage_min, price_change_percentage_max, price_change_percentage_duration, buy_tax_percentage_min, buy_tax_percentage_max, sell_tax_percentage_min, sell_tax_percentage_max, checks, include_unknown_honeypot_tokens } = params ?? {};
    return this._client.get("/onchain/pools/megafilter", { query: { networks: networks, dexes: dexes, include: include, page: page, sort: sort, fdv_usd_min: fdv_usd_min, fdv_usd_max: fdv_usd_max, reserve_in_usd_min: reserve_in_usd_min, reserve_in_usd_max: reserve_in_usd_max, h24_volume_usd_min: h24_volume_usd_min, h24_volume_usd_max: h24_volume_usd_max, pool_created_hour_min: pool_created_hour_min, pool_created_hour_max: pool_created_hour_max, tx_count_min: tx_count_min, tx_count_max: tx_count_max, tx_count_duration: tx_count_duration, buys_min: buys_min, buys_max: buys_max, buys_duration: buys_duration, sells_min: sells_min, sells_max: sells_max, sells_duration: sells_duration, price_change_percentage_min: price_change_percentage_min, price_change_percentage_max: price_change_percentage_max, price_change_percentage_duration: price_change_percentage_duration, buy_tax_percentage_min: buy_tax_percentage_min, buy_tax_percentage_max: buy_tax_percentage_max, sell_tax_percentage_min: sell_tax_percentage_min, sell_tax_percentage_max: sell_tax_percentage_max, checks: checks, include_unknown_honeypot_tokens: include_unknown_honeypot_tokens }, ...options });
  }
}

export interface Pool {
  data: Array<{ id: string; type: string; attributes: { base_token_price_usd: string; base_token_price_native_currency: string | null; quote_token_price_usd: string; quote_token_price_native_currency: string | null; base_token_price_quote_token: string | null; quote_token_price_base_token: string | null; address: string; name: string; pool_created_at: string; fdv_usd: string | null; market_cap_usd: string | null; price_change_percentage: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; transactions: { m5?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m15?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; m30?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h1?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h6?: { buys?: number; sells?: number; buyers?: number; sellers?: number }; h24?: { buys?: number; sells?: number; buyers?: number; sellers?: number } }; volume_usd: { m5?: string; m15?: string; m30?: string; h1?: string; h6?: string; h24?: string }; reserve_in_usd: string | null; token_price_usd?: string; sentiment_vote_positive_percentage?: number; sentiment_vote_negative_percentage?: number; community_sus_report?: number }; relationships: { base_token?: { data?: { id?: string; type?: string } }; quote_token?: { data?: { id?: string; type?: string } }; network?: { data?: { id?: string; type?: string } }; dex?: { data?: { id?: string; type?: string } } } }>;
  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<{ id?: string; type?: string; attributes?: { address?: string; name?: string; symbol?: string; decimals?: number; image_url?: string | null; coingecko_coin_id?: string | null; coingecko_asset_platform_id?: string } }>;
}

export interface MegafilterGetParams {
/**
 * Filter pools by networks, comma-separated if more than one.
 * *refers to [`/onchain/networks`](/reference/networks-list).
 */
  networks?: string;

/**
 * Filter pools by DEXes, comma-separated if more than one.
 * *refers to [`/onchain/networks/{network}/dexes`](/reference/dexes-list).
 */
  dexes?: string;

/**
 * Attributes to include, comma-separated if more than one.
 * Available values: `base_token`, `quote_token`, `dex`, `network`
 */
  include?: string;

/**
 * Page through results.
 * Default value: 1
 */
  page?: number;

/**
 * Sort the pools by field.
 * Default: `h6_trending`
 */
  sort?: "m5_trending" | "h1_trending" | "h6_trending" | "h24_trending" | "h24_tx_count_desc" | "h24_tx_count_asc" | "h24_volume_usd_desc" | "h24_volume_usd_asc" | "m5_price_change_percentage_asc" | "h1_price_change_percentage_asc" | "h6_price_change_percentage_asc" | "h24_price_change_percentage_asc" | "m5_price_change_percentage_desc" | "h1_price_change_percentage_desc" | "h6_price_change_percentage_desc" | "h24_price_change_percentage_desc" | "fdv_usd_asc" | "fdv_usd_desc" | "reserve_in_usd_asc" | "reserve_in_usd_desc" | "price_asc" | "price_desc" | "pool_created_at_desc";

/**
 * Minimum fully diluted value in USD.
 */
  fdv_usd_min?: number;

/**
 * Maximum fully diluted value in USD.
 */
  fdv_usd_max?: number;

/**
 * Minimum reserve in USD.
 */
  reserve_in_usd_min?: number;

/**
 * Maximum reserve in USD.
 */
  reserve_in_usd_max?: number;

/**
 * Minimum 24hr volume in USD.
 */
  h24_volume_usd_min?: number;

/**
 * Maximum 24hr volume in USD.
 */
  h24_volume_usd_max?: number;

/**
 * Minimum pool age in hours.
 */
  pool_created_hour_min?: number;

/**
 * Maximum pool age in hours.
 */
  pool_created_hour_max?: number;

/**
 * Minimum transaction count.
 */
  tx_count_min?: number;

/**
 * Maximum transaction count.
 */
  tx_count_max?: number;

/**
 * Duration for transaction count metric.
 * Default: `24h`
 */
  tx_count_duration?: "5m" | "1h" | "6h" | "24h";

/**
 * Minimum number of buy transactions.
 */
  buys_min?: number;

/**
 * Maximum number of buy transactions.
 */
  buys_max?: number;

/**
 * Duration for buy transactions metric.
 * Default: `24h`
 */
  buys_duration?: "5m" | "1h" | "6h" | "24h";

/**
 * Minimum number of sell transactions.
 */
  sells_min?: number;

/**
 * Maximum number of sell transactions.
 */
  sells_max?: number;

/**
 * Duration for sell transactions metric.
 * Default: `24h`
 */
  sells_duration?: "5m" | "1h" | "6h" | "24h";

/**
 * Minimum price change percentage.
 */
  price_change_percentage_min?: number;

/**
 * Maximum price change percentage.
 */
  price_change_percentage_max?: number;

/**
 * Duration for price change percentage metric.
 * Default: `24h`
 */
  price_change_percentage_duration?: "5m" | "1h" | "6h" | "24h";

/**
 * Minimum buy tax percentage.
 */
  buy_tax_percentage_min?: number;

/**
 * Maximum buy tax percentage.
 */
  buy_tax_percentage_max?: number;

/**
 * Minimum sell tax percentage.
 */
  sell_tax_percentage_min?: number;

/**
 * Maximum sell tax percentage.
 */
  sell_tax_percentage_max?: number;

/**
 * Filter options for various checks, comma-separated if more than one.
 * Available values: `no_honeypot`, `good_gt_score`, `on_coingecko`, `has_social`
 */
  checks?: string;

/**
 * When `checks` includes `no_honeypot`, set to `true` to also include unknown honeypot tokens.
 * Default: `false`
 */
  include_unknown_honeypot_tokens?: boolean;

}
export declare namespace Megafilter {
  export { type Pool as Pool, type MegafilterGetParams as MegafilterGetParams };
}
export { Megafilter as MegafilterResource };
