// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from "../resource";
import { APIPromise } from "../api-promise";
import type { RequestOptions } from "../internal/request-options";

const omitParams = (params: object, names: readonly string[]): Record<string, unknown> => {
  const out: Record<string, unknown> = { ...(params as Record<string, unknown>) };
  for (const name of names) delete out[name];
  return out;
};

export class News extends APIResource {
  /**
   * This endpoint allows you to **query the latest crypto news and guides on CoinGecko**
   */
  news(params: NewsParams | null | undefined = {}, options?: RequestOptions): APIPromise<News> {
    const { page, per_page, coin_id, language, type } = params ?? {};
    return this._client.get("/news", { query: { page: page, per_page: per_page, coin_id: coin_id, language: language, type: type }, ...options });
  }
}

export type News = Array<NewsArticle>;

export interface NewsArticle {
  /**
   * news article title
   */
  title?: string;
  /**
   * news article URL
   */
  url?: string;
  /**
   * news article image URL
   */
  image?: string;
  /**
   * news article author
   */
  author?: string;
  /**
   * news article published timestamp in ISO 8601 format
   */
  posted_at?: string;
  /**
   * news article type
   */
  type?: "news" | "guide";
  /**
   * news article source name
   */
  source_name?: string;
  /**
   * related coin IDs
   */
  related_coin_ids?: Array<string>;
}

export interface NewsParams {
/**
 * page through results
 *  Default value: **1**
 */
  page?: number;

/**
 * total results per page
 *  Default value: **10**
 */
  per_page?: number;

/**
 * filter news by coin ID
 *  *refers to [`/coins/list`](/reference/coins-list).
 */
  coin_id?: string;

/**
 * filter news by language
 *  Default value: **en**
 */
  language?: "en" | "ru" | "de" | "pl" | "es" | "vi" | "fr" | "pt-br" | "ar" | "bg" | "cs" | "da" | "el" | "fi" | "he" | "hi" | "hr" | "hu" | "id" | "it" | "ja" | "ko" | "lt" | "nl" | "no" | "ro" | "sk" | "sl" | "sv" | "th" | "tr" | "uk" | "zh" | "zh-tw";

/**
 * filter news by type
 *  Default value: **all**
 *  Note: `guides` filter is only applicable if `coin_id` is specified and valid
 */
  type?: "all" | "news" | "guides";

}
export declare namespace News {
  export { type News as News, type NewsArticle as NewsArticle, type NewsParams as NewsParams };
}
export { News as NewResource };
