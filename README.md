# coingecko-pro-api-typescript

Generated TypeScript SDK for the coingecko-pro-api-typescript API.

<br />

## Contents

- [Installation](#installation)
- [Quickstart](#quickstart)
- [Authentication](#authentication)
- [Client Options](#client-options)
- [Request Options](#request-options)
- [Resources](#resources)
- [Errors](#errors)
- [Retries and Timeouts](#retries-and-timeouts)
- [Logging](#logging)
- [Debugging](#debugging)
- [Requirements](#requirements)

<br />

## Installation

```sh
npm install @coin-gecko/coingecko-pro-api
```

<br />

## Quickstart

```ts
import CoinGeckoCoingeckoProApi from "@coin-gecko/coingecko-pro-api";

const client = new CoinGeckoCoingeckoProApi({
  apiKeyAuth: process.env["API_KEY_AUTH"], // defaults to the API_KEY_AUTH env var
});

const ping = await client.ping.server();
console.log(ping);
```

<br />

## Authentication

Pass credentials to the generated client constructor. Environment variables are read automatically when supported by the target runtime.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `apiKeyAuth` | `string \| provider` | - | Credential for the apiKeyAuth scheme. Defaults to API_KEY_AUTH. |
| `apiKeyQueryParam` | `string \| provider` | - | Credential for the apiKeyQueryParam scheme. Defaults to API_KEY_QUERY_PARAM. |

Declared schemes:

- `apiKeyAuth` API key in header `x-cg-pro-api-key`
- `apiKeyQueryParam` API key in query `x_cg_pro_api_key`

<br />

## Client Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `apiKeyAuth` | `string \| AuthTokenProvider` | `process.env["API_KEY_AUTH"]` | Credential for the apiKeyAuth scheme. |
| `apiKeyQueryParam` | `string \| AuthTokenProvider` | `process.env["API_KEY_QUERY_PARAM"]` | Credential for the apiKeyQueryParam scheme. |
| `baseURL` | `string \| null` | `process.env["COIN-GECKO_BASE_URL"]` | Override the default API base URL. Pass `null` when selecting a configured environment. |
| `timeout` | `number` | `60000` | Maximum time in milliseconds to wait for a response before aborting a request. |
| `maxRetries` | `number` | `2` | Number of retries for temporary failures. |
| `defaultHeaders` | `HeadersInit` | - | Headers sent with every request. |
| `defaultQuery` | `Record<string, string \| undefined>` | - | Query parameters sent with every request. |
| `fetchOptions` | `RequestInit` | - | Additional fetch options sent with every request. |
| `fetch` | `Fetch` | - | Custom fetch implementation. |
| `logLevel` | `"off" \| "error" \| "warn" \| "info" \| "debug" \| null` | `process.env["COIN-GECKO_LOG"]` | Controls request and retry debug logging. |
| `logger` | `Logger \| null` | `console` | Custom logger implementation. |

<br />

## Request Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `headers` | `HeadersInit` | - | Per-request headers. |
| `query` | `Record<string, unknown>` | - | Per-request query parameters. |
| `body` | `unknown` | - | Override the generated request body. |
| `timeout` | `number` | - | Per-request timeout in milliseconds. |
| `maxRetries` | `number` | - | Per-request retry count. |
| `signal` | `AbortSignal` | - | Abort an in-flight request. |
| `fetchOptions` | `RequestInit` | - | Per-request fetch options. |
| `idempotencyKey` | `string` | - | Idempotency key for retry-safe operations. |

<br />

## Resources

### `Ping`

### Check API server status

This endpoint allows you to **check the API server status**

```ts
const ping = await client.ping.server();
```

### `Key`

### 💼 API Usage

This endpoint allows you to **monitor your account's API usage, including rate limits, monthly total credits, remaining credits, and more**

```ts
const key = await client.key.apiUsage();
```

### `Simple`

### Coin Price by IDs, Symbols, or Names

This endpoint allows you to **query the prices of one or more coins by using their unique Coin API IDs, symbols, or names**

```ts
const price = await client.simple.price({
  vs_currencies: "usd",
  ids: "bitcoin",
  names: "Bitcoin",
  symbols: "btc",
});
```

<br />

### Coin Price by Token Addresses

This endpoint allows you to **query one or more token prices using their token contract addresses**

```ts
const tokenPrice = await client.simple.tokenPrice("ethereum", {
  contract_addresses: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  vs_currencies: "usd",
});
```

<br />

### Supported Currencies List

This endpoint allows you to **query all the supported currencies on CoinGecko**

```ts
const currencyList = await client.simple.supportedCurrencies();
```

### `Search`

### Search Queries

This endpoint allows you to **search for coins, categories and markets listed on CoinGecko**

```ts
const search = await client.search.data({
  query: "query",
});
```

### `Coins`

### 💼 Top Gainers & Losers

This endpoint allows you to **query the top 30 coins with largest price gain and loss by a specific time duration**

```ts
const topGainersLosers = await client.coins.topGainersLosers({
  vs_currency: "usd",
});
```

<br />

### Coins List with Market Data

This endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**

```ts
const sMarkets = await client.coins.markets({
  vs_currency: "usd",
  ids: "bitcoin",
  names: "Bitcoin",
  symbols: "btc",
  category: "layer-1",
  price_change_percentage: "1h",
  include_rehypothecated: false,
});
```

<br />

### Coin Data by ID

This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on a particular coin ID**

```ts
const sId = await client.coins.id("bitcoin");
```

<br />

### Coin Tickers by ID

This endpoint allows you to **query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID**

```ts
const sTickers = await client.coins.idTickers("bitcoin", {
  exchange_ids: "binance",
});
```

<br />

### Coin Historical Data by ID

This endpoint allows you to **query the historical data (price, market cap, 24hrs volume, ...) at a given date for a coin based on a particular coin ID**

```ts
const sHistoricalData = await client.coins.idHistory("bitcoin", {
  date: "2024-01-01",
});
```

### `Coins List`

### Coins List (ID Map)

This endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**

```ts
const coinsList = await client.coins.list.coins();
```

<br />

### 💼 Recently Added Coins

This endpoint allows you to **query the latest 200 coins that recently listed on CoinGecko**

```ts
const coinsListNew = await client.coins.list.coinsNew();
```

<br />

### `Coins MarketChart`

### Coin Historical Chart Data by ID

This endpoint allows you to **get the historical chart data of a coin including time in UNIX, price, market cap and 24hr volume based on particular coin ID**

```ts
const coinsMarketChart = await client.coins.marketChart.coinsId("bitcoin", {
  vs_currency: "usd",
  days: "1",
});
```

<br />

### Coin Historical Chart Data within Time Range by ID

This endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID**

```ts
const coinsMarketChartRange = await client.coins.marketChart.coinsIdRange("bitcoin", {
  vs_currency: "usd",
  from: "2024-01-01",
  to: "2024-12-31",
});
```

<br />

### `Coins Ohlc`

### Coin OHLC Chart by ID

This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID**

```ts
const coinsOhlc = await client.coins.ohlc.coinsId("bitcoin", {
  vs_currency: "usd",
  days: "1",
});
```

<br />

### 💼 Coin OHLC Chart within Time Range by ID

This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin ID**

```ts
const coinsOhlc = await client.coins.ohlc.coinsIdRange("bitcoin", {
  vs_currency: "usd",
  from: "2024-01-01",
  to: "2024-12-31",
  interval: "daily",
});
```

<br />

### `Coins CirculatingSupplyChart`

### 👑 Circulating Supply Chart by ID

This endpoint allows you to **query historical circulating supply of a coin by number of days away from now based on provided coin ID**

```ts
const base = await client.coins.circulatingSupplyChart.coinsId("bitcoin", {
  days: "1",
});
```

<br />

### 👑 Circulating Supply Chart within Time Range by ID

This endpoint allows you to **query historical circulating supply of a coin, within a range of timestamp based on the provided coin ID**

```ts
const base = await client.coins.circulatingSupplyChart.coinsIdRange("bitcoin", {
  from: "2024-01-01",
  to: "2024-12-31",
});
```

<br />

### `Coins TotalSupplyChart`

### 👑 Total Supply Chart by ID

This endpoint allows you to **query historical total supply of a coin by number of days away from now based on provided coin ID**

```ts
const base = await client.coins.totalSupplyChart.coinsId("bitcoin", {
  days: "1",
});
```

<br />

### 👑 Total Supply Chart within time range by ID

This endpoint allows you to **query historical total supply of a coin, within a range of timestamp based on the provided coin ID**

```ts
const base = await client.coins.totalSupplyChart.coinsIdRange("bitcoin", {
  from: "2024-01-01",
  to: "2024-12-31",
});
```

### `Contract`

### Coin Data by Token Address

This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on an asset platform and a particular token contract address**

```ts
const coinsContractAddress = await client.contract.coinsAddress("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48");
```

<br />

### Coin Historical Chart Data by Token Address

This endpoint allows you to **get the historical chart data including time in UNIX, price, market cap and 24hr volume based on asset platform and particular token contract address**

```ts
const coinsMarketChart = await client.contract.addressMarketChart("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
  vs_currency: "usd",
  days: "1",
});
```

<br />

### Coin Historical Chart Data within Time Range by Token Address

This endpoint allows you to **get the historical chart data within certain time range in UNIX along with price, market cap and 24hr volume based on asset platform and particular token contract address**

```ts
const coinsMarketChartRange = await client.contract.addressMarketChartRange("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
  vs_currency: "usd",
  from: "2024-01-01",
  to: "2024-12-31",
});
```

### `AssetPlatforms`

### Asset Platforms List (ID Map)

This endpoint allows you to **query all the asset platforms on CoinGecko**

```ts
const s = await client.assetPlatforms.list();
```

<br />

### Token Lists by Asset Platform ID

This endpoint allows you to **get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)**

```ts
const tokenLists = await client.assetPlatforms.tokenLists("ethereum");
```

### `Categories`

### Coins Categories List (ID Map)

This endpoint allows you to **query all the coins categories on CoinGecko**

```ts
const categoriesList = await client.categories.coinsList();
```

<br />

### Coins Categories List with Market Data

This endpoint allows you to **query all the coins categories with market data (market cap, volume, ...) on CoinGecko**

```ts
const categories = await client.categories.coins();
```

### `Exchanges`

### Exchanges List with Data

This endpoint allows you to **query all the supported exchanges with exchanges' data (ID, name, country, ...) that have active trading volumes on CoinGecko**

```ts
const s = await client.exchanges.exchanges();
```

<br />

### Exchanges List (ID Map)

This endpoint allows you to **query all the exchanges with ID and name**

```ts
const sList = await client.exchanges.list();
```

<br />

### Exchange Data by ID

This endpoint allows you to **query exchange's data (name, year established, country, ...), exchange volume in BTC and top 100 tickers based on exchange's ID**

```ts
const data = await client.exchanges.id("binance");
```

<br />

### Exchange Tickers by ID

This endpoint allows you to **query exchange's tickers based on exchange's ID**

```ts
const tickers = await client.exchanges.idTickers("binance", {
  coin_ids: "bitcoin",
});
```

### `Exchanges VolumeChart`

### Exchange Volume Chart by ID

This endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID**

```ts
const exchangeVolumeChart = await client.exchanges.volumeChart.exchangesId("binance", {
  days: "1",
});
```

<br />

### 💼 Exchange Volume Chart within Time Range by ID

This endpoint allows you to **query the historical volume chart data in BTC by specifying date range in UNIX based on exchange's ID**

```ts
const exchangeVolumeChart = await client.exchanges.volumeChart.exchangesIdRange("binance", {
  from: "1672531200",
  to: "1675123200",
});
```

### `Derivatives`

### Derivatives Tickers List

This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**

```ts
const sTickersList = await client.derivatives.tickers();
```

### `Derivatives Exchanges`

### Derivatives Exchanges List with Data

This endpoint allows you to **query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko**

```ts
const derivativesExchanges = await client.derivatives.exchanges.derivatives();
```

<br />

### Derivatives Exchange Data by ID

This endpoint allows you to **query the derivatives exchange's related data (ID, name, open interest, ...) based on the exchanges' ID**

```ts
const derivativesExchangesId = await client.derivatives.exchanges.derivativesId("binance_futures");
```

<br />

### Derivatives Exchanges List (ID Map)

This endpoint allows you to **query all the derivatives exchanges with ID and name on CoinGecko**

```ts
const derivativesExchangesList = await client.derivatives.exchanges.derivativesList();
```

### `PublicTreasury`

### Entities List (ID Map)

This endpoint allows you to **query all the supported entities on CoinGecko with entities ID, name, symbol, and country**

```ts
const entitiesList = await client.publicTreasury.entitiesList();
```

<br />

### Crypto Treasury Holdings by Coin ID

This endpoint allows you **query public companies & governments' cryptocurrency holdings** by Coin ID

```ts
const publicTreasury = await client.publicTreasury.companies("companies", "bitcoin", {
  per_page: 250,
  page: 1,
  order: "total_holdings_usd_desc",
});
```

<br />

### Crypto Treasury Holdings by Entity ID

This endpoint allows you **query public companies & governments' cryptocurrency holdings** by Entity ID

```ts
const entity = await client.publicTreasury.entity("strategy");
```

<br />

### Crypto Treasury Holdings Historical Chart Data by ID

This endpoint allows you to **query historical cryptocurrency holdings chart of public companies & governments** by Entity ID and Coin ID

```ts
const entityChart = await client.publicTreasury.entityChart("strategy", "bitcoin", {
  days: "365",
  include_empty_intervals: false,
});
```

<br />

### Crypto Treasury Transaction History by Entity ID

This endpoint allows you **query public companies & governments' cryptocurrency transaction history** by Entity ID

```ts
const transactionHistory = await client.publicTreasury.transactionHistory("strategy", {
  per_page: 100,
  page: 1,
  order: "date_desc",
});
```

### `NfTsBeta`

### NFTs List (ID Map)

This endpoint allows you to **query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko**

```ts
const nftList = await client.nfTsBeta.nftsList();
```

<br />

### NFTs Collection Data by ID

This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection ID**

```ts
const nftData = await client.nfTsBeta.nftsId("pudgy-penguins");
```

<br />

### NFTs Collection Data by Contract Address

This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection contract address and respective asset platform**

```ts
const nftData = await client.nfTsBeta.nftsContractAddress("ethereum", "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8");
```

<br />

### 💼 NFTs List with Market Data

This endpoint allows you to **query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko**

```ts
const nfTsMarkets = await client.nfTsBeta.nftsMarkets({
  asset_platform_id: "ethereum",
});
```

<br />

### 💼 NFTs Collection Historical Chart Data by ID

This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now**

```ts
const nftMarketChart = await client.nfTsBeta.nftsIdMarketChart("pudgy-penguins", {
  days: "1",
});
```

<br />

### 💼 NFTs Collection Historical Chart Data by Contract Address

This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now based on the provided contract address**

```ts
const nftMarketChart = await client.nfTsBeta.nftsContractAddressMarketChart("ethereum", "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", {
  days: "1",
});
```

<br />

### 💼 NFTs Collection Tickers by ID

This endpoint allows you to **query the latest floor price and 24hr volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and LooksRare**

```ts
const nftTickers = await client.nfTsBeta.nftsIdTickers("pudgy-penguins");
```

### `ExchangeRates`

### BTC-to-Currency Exchange Rates

This endpoint allows you to **query BTC exchange rates with other currencies**

```ts
const s = await client.exchangeRates.exchangeRates();
```

### `Trending`

### Trending Search List

This endpoint allows you **query trending search coins, NFTs and categories on CoinGecko in the last 24 hours**

```ts
const search = await client.trending.search({
  show_max: "coins",
});
```

### `News`

### 💼 Crypto News

This endpoint allows you to **query the latest crypto news and guides on CoinGecko**

```ts
const s = await client.news.news({
  page: 1,
  per_page: 10,
  language: "en",
  type: "all",
});
```

### `Global`

### Crypto Global Market Data

This endpoint allows you **query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc**

```ts
const global = await client.global.crypto();
```

<br />

### Global DeFi Market Data

This endpoint allows you **query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume**

```ts
const deFi = await client.global.deFi();
```

<br />

### 💼 Global Market Cap Chart Data

This endpoint allows you to **query historical global market cap and volume data by number of days away from now**

```ts
const marketCapChart = await client.global.marketCapChart({
  days: "1",
  vs_currency: "usd",
});
```

<br />

## Errors

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

<br />

## Retries and Timeouts

Generated clients support request timeouts and retry temporary failures such as network errors, 408, 409, 429, and 5xx responses. Retry delays honor `Retry-After` headers when present.

<br />

## Logging

- Set `logLevel: "debug"` to log request URLs, options, response status, response headers, and retry attempts.
- Pass a custom `logger` to route logs into your own observability pipeline.
- Set `logLevel: null` to disable environment-driven logging.

<br />

## Debugging

- Use `.withResponse()` on any request to inspect both parsed data and the raw `Response` object.
- Catch generated API errors to inspect status, headers, response body, and request metadata.

<br />

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

Powered by Scalar.


## Contributions

This SDK is generated programmatically. Manual edits to generated files will be
overwritten on the next build.

### SDK created by [Scalar](https://www.scalar.com/?utm_source=coingecko-pro-api-typescript&utm_campaign=sdk)
