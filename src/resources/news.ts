// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

const mergeBody = (base: unknown, fields: Record<string, unknown>): Record<string, unknown> =>
  typeof base === "object" && base !== null && !Array.isArray(base) ? { ...base, ...fields } : { ...fields };

export class News extends APIResource {
  /**
   * To query the latest crypto news and guides on CoinGecko
   */
  get(params: NewGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<News2> {
    const { page, per_page, coin_id, language, type } = params ?? {};
    return this._client.get("/news", { query: { page: page, per_page: per_page, coin_id: coin_id, language: language, type: type }, ...options });
  }
}

export type News2 = Array<{ title: string; url: string; image: string; author: string; posted_at: string; type: "news" | "guide"; source_name: string; related_coin_ids: Array<string> }>;

export interface NewGetParams {
/**
 * Page through results.
 * Default value: 1
 * Valid values: 1...20
 */
  page?: number;

/**
 * Total results per page.
 * Default value: 10
 * Valid values: 1...20
 */
  per_page?: number;

/**
 * Filter news by coin ID.
 * *refers to [`/coins/list`](/reference/coins-list).
 */
  coin_id?: string;

/**
 * Filter news by language.
 * Default: `en`
 */
  language?: "en" | "ru" | "de" | "pl" | "es" | "vi" | "fr" | "pt-br" | "ar" | "bg" | "cs" | "da" | "el" | "fi" | "he" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "ko" | "lt" | "nl" | "no" | "ro" | "sk" | "sl" | "sv" | "th" | "tr" | "uk" | "zh" | "zh-tw";

/**
 * Filter news by type.
 * Default: `all`
 * Note: `guides` filter is only applicable if `coin_id` is specified and valid.
 */
  type?: "all" | "news" | "guides";

}
export declare namespace News {
  export { type News2 as News, type NewGetParams as NewGetParams };
}
export { News as NewResource };
