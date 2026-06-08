# Coingecko

Generated TypeScript SDK for the Coingecko API.

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
npm install @coingecko/coingecko-typescript
```

<br />

## Quickstart

```ts
import Coingecko from "@coingecko/coingecko-typescript";

const client = new Coingecko({
  proKeyAuth: process.env["PRO_KEY_AUTH"], // defaults to the PRO_KEY_AUTH env var
  environment: "pro",
});

const server = await client.ping.get();
console.log(server);
```

<br />

## Authentication

Pass credentials to the generated client constructor. Environment variables are read automatically when supported by the target runtime.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `proKeyAuth` | `string \| provider` | - | CoinGecko Pro API Key Defaults to PRO_KEY_AUTH. |
| `demoKeyAuth` | `string \| provider` | - | CoinGecko Demo API Key Defaults to DEMO_KEY_AUTH. |

Declared schemes:

- `proKeyAuth` API key in header `x-cg-pro-api-key`
- `demoKeyAuth` API key in header `x-cg-demo-api-key`

<br />

## Client Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `proKeyAuth` | `string \| AuthTokenProvider` | `process.env["PRO_KEY_AUTH"]` | CoinGecko Pro API Key |
| `demoKeyAuth` | `string \| AuthTokenProvider` | `process.env["DEMO_KEY_AUTH"]` | CoinGecko Demo API Key |
| `environment` | `Environment` | - | Select one of the configured API environments. |
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

### API Server Status

To check the API server status

```ts
const server = await client.ping.get();
```

### `Key`

### API Usage

To monitor your account's API usage, including rate limits, monthly total credits, remaining credits, and more

```ts
const apiUsage = await client.key.get();
```

### `Simple Price`

### Coin Price by IDs, Symbols, or Names

To query the prices of one or more coins by using their unique Coin API IDs, symbols, or names

```ts
const simplePrice = await client.simple.price.get({
  vs_currencies: "usd",
  ids: "bitcoin",
  names: "Bitcoin",
  symbols: "btc",
});
```

<br />

### `Simple SupportedVsCurrencies`

### Currencies List

To query all the supported currencies on CoinGecko

```ts
const supportedCurrencies = await client.simple.supportedVsCurrencies.get();
```

<br />

### `Simple TokenPrice`

### Coin Price by Token Addresses

To query one or more token prices by using their token contract addresses

```ts
const simplePrice = await client.simple.tokenPrice.getId("ethereum", {
  contract_addresses: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  vs_currencies: "usd",
});
```

### `Search`

### Search Queries

To search for coins, categories and markets listed on CoinGecko

```ts
const search = await client.search.get({
  query: "query",
});
```

### `Search Trending`

### Trending Search List

To query trending search coins, NFTs and categories on CoinGecko in the last 24 hours

```ts
const search = await client.search.trending.get();
```

### `Coins`

### Coin Data by ID

To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on a particular coin ID

```ts
const sId = await client.coins.getId("bitcoin");
```

### `Coins TopGainersLosers`

### Top Gainers & Losers

To query the top 30 coins with largest price gain and loss by a specific time duration

```ts
const s = await client.coins.topGainersLosers.get({
  vs_currency: "usd",
});
```

<br />

### `Coins Markets`

### Coins List with Market Data

To query all the supported coins with price, market cap, volume and market related data

```ts
const coinsMarkets = await client.coins.markets.get({
  vs_currency: "usd",
  ids: "bitcoin",
  names: "Bitcoin",
  symbols: "btc",
});
```

<br />

### `Coins Tickers`

### Coin Tickers by ID

To query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID

```ts
const coinsIdTickers = await client.coins.tickers.get("bitcoin");
```

<br />

### `Coins History`

### Coin Historical Data by ID

To query the historical data (price, market cap, 24hrs volume, etc.) at a given date for a coin based on a particular coin ID

```ts
const coinsIdHistory = await client.coins.history.get("bitcoin", {
  date: "2025-12-30",
});
```

<br />

### `Coins MarketChart`

### Coin Historical Chart Data by ID

To get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin ID

```ts
const coinsMarketChart = await client.coins.marketChart.get("bitcoin", {
  vs_currency: "usd",
  days: "1",
});
```

<br />

### Coin Historical Chart Data within Time Range by ID

To get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin ID

```ts
const coinsMarketChart = await client.coins.marketChart.getRange("bitcoin", {
  vs_currency: "usd",
  from: "2025-01-01",
  to: "2025-12-31",
});
```

<br />

### `Coins Ohlc`

### Coin OHLC Chart by ID

To get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID

```ts
const coinsOhlc = await client.coins.ohlc.get("bitcoin", {
  vs_currency: "usd",
  days: "1",
});
```

<br />

### Coin OHLC Chart within Time Range by ID

To get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin ID

```ts
const coinsOhlc = await client.coins.ohlc.getRange("bitcoin", {
  vs_currency: "usd",
  from: "2025-12-01",
  to: "2025-12-31",
  interval: "daily",
});
```

<br />

### `Coins Contract`

### Coin Data by Token Address

To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on an asset platform and a particular token contract address

```ts
const coinsContractAddress = await client.coins.contract.get("ethereum", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
```

### `Coins Contract MarketChart`

### Coin Historical Chart Data by Token Address

To get the historical chart data including time in UNIX, price, market cap and 24hrs volume based on asset platform and particular token contract address

```ts
const coinsMarketChart = await client.coins.contract.marketChart.get("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
  vs_currency: "usd",
  days: "1",
});
```

<br />

### Coin Historical Chart Data within Time Range by Token Address

To get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume based on asset platform and particular token contract address

```ts
const coinsMarketChart = await client.coins.contract.marketChart.getRange("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
  vs_currency: "usd",
  from: "2025-01-01",
  to: "2025-12-31",
});
```

<br />

### `Coins CirculatingSupplyChart`

### Circulating Supply Chart by ID

To query historical circulating supply of a coin by number of days away from now based on provided coin ID

```ts
const circulatingSupplyChart = await client.coins.circulatingSupplyChart.get("bitcoin", {
  days: "1",
});
```

<br />

### Circulating Supply Chart within Time Range by ID

To query historical circulating supply of a coin, within a range of timestamp based on the provided coin ID

```ts
const circulatingSupplyChart = await client.coins.circulatingSupplyChart.getRange("bitcoin", {
  from: "2025-01-01",
  to: "2025-12-31",
});
```

<br />

### `Coins TotalSupplyChart`

### Total Supply Chart by ID

To query historical total supply of a coin by number of days away from now based on provided coin ID

```ts
const totalSupplyChart = await client.coins.totalSupplyChart.get("bitcoin", {
  days: "1",
});
```

<br />

### Total Supply Chart within Time Range by ID

To query historical total supply of a coin, within a range of timestamp based on the provided coin ID

```ts
const totalSupplyChart = await client.coins.totalSupplyChart.getRange("bitcoin", {
  from: "2025-01-01",
  to: "2025-12-31",
});
```

<br />

### `Coins List`

### Recently Added Coins

To query the latest 200 coins that recently listed on CoinGecko

```ts
const coinsListNew = await client.coins.list.getNew();
```

<br />

### Coins List

To query all the supported coins on CoinGecko with coin ID, name and symbol

```ts
const coinsList = await client.coins.list.get();
```

<br />

### `Coins Categories`

### Coins Categories List

To query all the supported coins categories on CoinGecko

```ts
const categoriesList = await client.coins.categories.getList();
```

<br />

### Coins Categories List with Market Data

To query all the coins categories with market data (market cap, volume, etc.) on CoinGecko

```ts
const categories = await client.coins.categories.get();
```

### `AssetPlatforms`

### Asset Platforms List

To query all the supported asset platforms (blockchain networks) on CoinGecko

```ts
const s = await client.assetPlatforms.get();
```

### `TokenLists`

### Token Lists by Asset Platform ID

To get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)

```ts
const s = await client.tokenLists.getAllJson("ethereum");
```

### `Exchanges`

### Exchanges List with Data

To query all the supported exchanges with exchanges' data (ID, name, country, etc.) that have active trading volumes on CoinGecko

```ts
const s = await client.exchanges.get();
```

<br />

### Exchanges List

To query all the supported exchanges with ID and name

```ts
const sList = await client.exchanges.getList();
```

<br />

### Exchange Data by ID

To query exchange's data (name, year established, country, etc.), exchange volume in BTC and top 100 tickers based on exchange's ID

```ts
const sId = await client.exchanges.getId("binance");
```

### `Exchanges Tickers`

### Exchange Tickers by ID

To query exchange's tickers based on exchange's ID

```ts
const coinsIdTickers = await client.exchanges.tickers.get("binance");
```

<br />

### `Exchanges VolumeChart`

### Exchange Volume Chart by ID

To query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID

```ts
const exchangeVolumeChart = await client.exchanges.volumeChart.get("binance", {
  days: "1",
});
```

<br />

### Exchange Volume Chart within Time Range by ID

To query the historical volume chart data in BTC by specifying date range in UNIX based on exchange's ID

```ts
const exchangeVolumeChart = await client.exchanges.volumeChart.getRange("binance", {
  from: "1767196800",
  to: "1769702400",
});
```

### `Derivatives`

### Derivatives Tickers List

To query all the tickers from derivatives exchanges on CoinGecko

```ts
const sTickers = await client.derivatives.get();
```

### `Derivatives Exchanges`

### Derivatives Exchanges List with Data

To query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko

```ts
const derivativesExchanges = await client.derivatives.exchanges.get();
```

<br />

### Derivatives Exchange Data by ID

To query the derivatives exchange's related data (name, open interest, trade volume, ...) based on the exchange's ID

```ts
const derivativesExchangesId = await client.derivatives.exchanges.getId("binance_futures");
```

<br />

### Derivatives Exchanges List

To query all the supported derivatives exchanges with ID and name on CoinGecko

```ts
const derivativesExchangesList = await client.derivatives.exchanges.getList();
```

### `Entities`

### Entities List

To query all the supported entities on CoinGecko with entity ID, name, symbol, and country

```ts
const entitiesList = await client.entities.getList();
```

### `PublicTreasury`

### Crypto Treasury Holdings by Coin ID

To query public companies' and governments' cryptocurrency holdings by coin ID

```ts
const publicTreasury = await client.publicTreasury.getCoinId("companies", "bitcoin");
```

<br />

### Crypto Treasury Holdings by Entity ID

To query public companies' and governments' cryptocurrency holdings by entity ID

```ts
const entity = await client.publicTreasury.getEntityId("strategy");
```

<br />

### Crypto Treasury Holdings Historical Chart Data by ID

To query historical cryptocurrency holdings chart of public companies and governments by entity ID and coin ID

```ts
const entityChart = await client.publicTreasury.getHoldingChart("strategy", "bitcoin", {
  days: "365",
});
```

<br />

### Crypto Treasury Transaction History by Entity ID

To query public companies' and governments' cryptocurrency transaction history by entity ID

```ts
const transactionHistory = await client.publicTreasury.getTransactionHistory("strategy");
```

### `Nfts`

### NFTs List

To query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko

```ts
const nfTsList = await client.nfts.getList();
```

<br />

### NFTs Collection Data by ID

To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection ID

```ts
const data = await client.nfts.getId("pudgy-penguins");
```

<br />

### NFTs List with Market Data

To query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko

```ts
const nfTsMarkets = await client.nfts.getMarkets();
```

### `Nfts Contract`

### NFTs Collection Data by Contract Address

To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection contract address and respective asset platform

```ts
const nftData = await client.nfts.contract.getContractAddress("ethereum", "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8");
```

### `Nfts Contract MarketChart`

### NFTs Collection Historical Chart Data by Contract Address

To query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now based on the provided contract address

```ts
const nftMarketChart = await client.nfts.contract.marketChart.get("ethereum", "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", {
  days: "1",
});
```

<br />

### `Nfts MarketChart`

### NFTs Collection Historical Chart Data by ID

To query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now

```ts
const nftMarketChart = await client.nfts.marketChart.get("pudgy-penguins", {
  days: "1",
});
```

<br />

### `Nfts Tickers`

### NFTs Collection Tickers by ID

To query the latest floor price and 24hr volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and Blur

```ts
const nftTickers = await client.nfts.tickers.get("pudgy-penguins");
```

### `ExchangeRates`

### BTC-to-Currency Exchange Rates

To query BTC exchange rates with other currencies

```ts
const s = await client.exchangeRates.get();
```

### `News`

### Crypto News

To query the latest crypto news and guides on CoinGecko

```ts
const s = await client.news.get();
```

### `Global`

### Crypto Global Market Data

To query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc

```ts
const global = await client.global.get();
```

### `Global DecentralizedFinanceDefi`

### Global DeFi Market Data

To query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume

```ts
const globalDeFi = await client.global.decentralizedFinanceDefi.get();
```

<br />

### `Global MarketCapChart`

### Global Market Cap Chart Data

To query historical global market cap and volume data by number of days away from now

```ts
const globalMarketCapChart = await client.global.marketCapChart.get({
  days: "1",
});
```

### `Onchain Networks`

### Networks List

To retrieve a list of all supported networks on GeckoTerminal

```ts
const sList = await client.onchain.networks.get();
```

### `Onchain Networks Pools`

### Specific Pool Data by Pool Address

To query the specific pool based on the provided network and pool address

```ts
const addressData = await client.onchain.networks.pools.getAddress("eth", "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640");
```

<br />

### Top Pools by Network

To query all the top pools based on the provided network

```ts
const pool = await client.onchain.networks.pools.get("eth");
```

### `Onchain Networks Pools Info`

### Pool Tokens Info by Pool Address

To query pool metadata (base and quote token details, image, socials, websites, description, contract address, etc.) based on a provided pool contract address on a network

```ts
const poolTokensInfo = await client.onchain.networks.pools.info.get("solana", "8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt");
```

<br />

### `Onchain Networks Pools Ohlcv`

### Pool OHLCV Chart by Pool Address

To get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network

```ts
const ohlcv = await client.onchain.networks.pools.ohlcv.getTimeframe("eth", "0x06da0fd433c1a5d7a4faa01111c044910a184553", "day");
```

<br />

### `Onchain Networks Pools Trades`

### Past 24 Hour Trades by Pool Address

To query the last 300 trades in the past 24 hours based on the provided pool address

```ts
const s = await client.onchain.networks.pools.trades.get("eth", "0x06da0fd433c1a5d7a4faa01111c044910a184553");
```

<br />

### `Onchain Networks Pools Multi`

### Multiple Pools Data by Pool Addresses

To query multiple pools based on the provided network and pool addresses

```ts
const poolAddressData = await client.onchain.networks.pools.multi.getAddresses("eth", "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640");
```

<br />

### `Onchain Networks TrendingPools`

### Trending Pools List

To query all the trending pools across all networks on GeckoTerminal

```ts
const pool = await client.onchain.networks.trendingPools.get();
```

<br />

### Trending Pools by Network

To query the trending pools based on the provided network

```ts
const pool = await client.onchain.networks.trendingPools.getNetwork("eth");
```

<br />

### `Onchain Networks Dexes`

### Top Pools by DEX

To query all the top pools based on the provided network and decentralized exchange (DEX)

```ts
const pool = await client.onchain.networks.dexes.getPools("eth", "sushiswap");
```

<br />

### DEXs List by Network

To query all the supported decentralized exchanges (DEXs) based on the provided network on GeckoTerminal

```ts
const sList = await client.onchain.networks.dexes.get("eth");
```

<br />

### `Onchain Networks Tokens`

### Token Data by Token Address

To query specific token data based on the provided token contract address on a network

```ts
const data = await client.onchain.networks.tokens.getAddress("eth", "0xdac17f958d2ee523a2206206994597c13d831ec7");
```

### `Onchain Networks Tokens Pools`

### Top Pools by Token Address

To query top pools based on the provided token contract address on a network

```ts
const pool = await client.onchain.networks.tokens.pools.get("eth", "0xdac17f958d2ee523a2206206994597c13d831ec7");
```

<br />

### `Onchain Networks Tokens Multi`

### Tokens Data by Token Addresses

To query multiple tokens data based on the provided token contract addresses on a network

```ts
const tokenData = await client.onchain.networks.tokens.multi.getAddresses("solana", "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN,2g4LS3y2myPe6vj9wTvoBE1wKqxvhnZPoZA9QU9upump");
```

<br />

### `Onchain Networks Tokens Info`

### Token Info by Token Address

To query token metadata (name, symbol, CoinGecko ID, image, socials, websites, description, etc.) based on a provided token contract address on a network

```ts
const tokenInfo = await client.onchain.networks.tokens.info.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
```

<br />

### `Onchain Networks Tokens TopTraders`

### Top Token Traders by Token Address

To query top token traders based on the provided token contract address on a network

```ts
const topTokenTraders = await client.onchain.networks.tokens.topTraders.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
```

<br />

### `Onchain Networks Tokens TopHolders`

### Top Token Holders by Token Address

To query top token holders based on the provided token contract address on a network

```ts
const topTokenHolders = await client.onchain.networks.tokens.topHolders.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
```

<br />

### `Onchain Networks Tokens HoldersChart`

### Historical Token Holders Chart by Token Address

To get the historical token holders chart based on the provided token contract address on a network

```ts
const tokenHoldersChart = await client.onchain.networks.tokens.holdersChart.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
```

<br />

### `Onchain Networks Tokens Ohlcv`

### Token OHLCV Chart by Token Address

To get the OHLCV chart (Open, High, Low, Close, Volume) of a token based on the provided token address on a network

```ts
const ohlcv = await client.onchain.networks.tokens.ohlcv.getTimeframe("solana", "So11111111111111111111111111111111111111112", "day");
```

<br />

### `Onchain Networks Tokens Trades`

### Past 24 Hour Trades by Token Address

To query the last 300 trades in the past 24 hours, across all pools, based on the provided token contract address on a network

```ts
const tokenTrades = await client.onchain.networks.tokens.trades.get("eth", "0xdac17f958d2ee523a2206206994597c13d831ec7");
```

<br />

### `Onchain Networks NewPools`

### New Pools List

To query all the latest pools across all networks on GeckoTerminal

```ts
const pool = await client.onchain.networks.newPools.get();
```

<br />

### New Pools by Network

To query all the latest pools based on the provided network

```ts
const pool = await client.onchain.networks.newPools.getNetwork("eth");
```

<br />

### `Onchain Pools Megafilter`

### Megafilter for Pools

To query pools based on various filters across all networks on GeckoTerminal

```ts
const pool = await client.onchain.pools.megafilter.get();
```

<br />

### `Onchain Pools TrendingSearch`

### Trending Search Pools

To query all the trending search pools across all networks on GeckoTerminal

```ts
const pools = await client.onchain.pools.trendingSearch.get();
```

<br />

### `Onchain Tokens InfoRecentlyUpdated`

### Most Recently Updated Tokens List

To query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal

```ts
const tokenInfoRecentlyUpdated = await client.onchain.tokens.infoRecentlyUpdated.get();
```

<br />

### `Onchain Categories`

### Categories List

To query all the supported categories on GeckoTerminal

```ts
const onchainCategoriesList = await client.onchain.categories.get();
```

<br />

### Pools by Category ID

To query all the pools based on the provided category ID

```ts
const categoriesPools = await client.onchain.categories.getPools("pump-fun");
```

<br />

### `Onchain Search Pools`

### Search Pools & Tokens

To search for pools across all networks by pool address, token name, token symbol, or token contract address

```ts
const search = await client.onchain.search.pools.get({
  query: "weth",
});
```

<br />

### `Onchain Simple Networks TokenPrice`

### Token Price by Token Addresses

To get token price based on the provided token contract address on a network

```ts
const onchainSimplePrice = await client.onchain.simple.networks.tokenPrice.getAddresses("eth", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
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

### SDK created by [Scalar](https://www.scalar.com/?utm_source=coingecko-api-typescript&utm_campaign=sdk)
