# Coingecko TypeScript API

Complete reference of every operation, grouped by resource. See [the README](./README.md) for usage and configuration.

## Contents

- [`Ping`](#ping)
  - [API Server Status](#api-server-status)
- [`Key`](#key)
  - [API Usage](#api-usage)
- [`Simple`](#simple)
  - [`Simple Price`](#simple-price)
    - [Coin Price by IDs, Symbols, or Names](#coin-price-by-ids-symbols-or-names)
  - [`Simple SupportedVsCurrencies`](#simple-supportedvscurrencies)
    - [Currencies List](#currencies-list)
  - [`Simple TokenPrice`](#simple-tokenprice)
    - [Coin Price by Token Addresses](#coin-price-by-token-addresses)
- [`Search`](#search)
  - [Search Queries](#search-queries)
  - [`Search Trending`](#search-trending)
    - [Trending Search List](#trending-search-list)
- [`Coins`](#coins)
  - [Coin Data by ID](#coin-data-by-id)
  - [`Coins TopGainersLosers`](#coins-topgainerslosers)
    - [Top Gainers & Losers](#top-gainers--losers)
  - [`Coins Markets`](#coins-markets)
    - [Coins List with Market Data](#coins-list-with-market-data)
  - [`Coins Tickers`](#coins-tickers)
    - [Coin Tickers by ID](#coin-tickers-by-id)
  - [`Coins History`](#coins-history)
    - [Coin Historical Data by ID](#coin-historical-data-by-id)
  - [`Coins MarketChart`](#coins-marketchart)
    - [Coin Historical Chart Data by ID](#coin-historical-chart-data-by-id)
    - [Coin Historical Chart Data within Time Range by ID](#coin-historical-chart-data-within-time-range-by-id)
  - [`Coins Ohlc`](#coins-ohlc)
    - [Coin OHLC Chart by ID](#coin-ohlc-chart-by-id)
    - [Coin OHLC Chart within Time Range by ID](#coin-ohlc-chart-within-time-range-by-id)
  - [`Coins Contract`](#coins-contract)
    - [Coin Data by Token Address](#coin-data-by-token-address)
    - [`Coins Contract MarketChart`](#coins-contract-marketchart)
      - [Coin Historical Chart Data by Token Address](#coin-historical-chart-data-by-token-address)
      - [Coin Historical Chart Data within Time Range by Token Address](#coin-historical-chart-data-within-time-range-by-token-address)
  - [`Coins CirculatingSupplyChart`](#coins-circulatingsupplychart)
    - [Circulating Supply Chart by ID](#circulating-supply-chart-by-id)
    - [Circulating Supply Chart within Time Range by ID](#circulating-supply-chart-within-time-range-by-id)
  - [`Coins TotalSupplyChart`](#coins-totalsupplychart)
    - [Total Supply Chart by ID](#total-supply-chart-by-id)
    - [Total Supply Chart within Time Range by ID](#total-supply-chart-within-time-range-by-id)
  - [`Coins List`](#coins-list)
    - [Recently Added Coins](#recently-added-coins)
    - [Coins List](#coins-list-1)
  - [`Coins Categories`](#coins-categories)
    - [Coins Categories List](#coins-categories-list)
    - [Coins Categories List with Market Data](#coins-categories-list-with-market-data)
- [`AssetPlatforms`](#assetplatforms)
  - [Asset Platforms List](#asset-platforms-list)
- [`TokenLists`](#tokenlists)
  - [Token Lists by Asset Platform ID](#token-lists-by-asset-platform-id)
- [`Exchanges`](#exchanges)
  - [Exchanges List with Data](#exchanges-list-with-data)
  - [Exchanges List](#exchanges-list)
  - [Exchange Data by ID](#exchange-data-by-id)
  - [`Exchanges Tickers`](#exchanges-tickers)
    - [Exchange Tickers by ID](#exchange-tickers-by-id)
  - [`Exchanges VolumeChart`](#exchanges-volumechart)
    - [Exchange Volume Chart by ID](#exchange-volume-chart-by-id)
    - [Exchange Volume Chart within Time Range by ID](#exchange-volume-chart-within-time-range-by-id)
- [`Derivatives`](#derivatives)
  - [Derivatives Tickers List](#derivatives-tickers-list)
  - [`Derivatives Exchanges`](#derivatives-exchanges)
    - [Derivatives Exchanges List with Data](#derivatives-exchanges-list-with-data)
    - [Derivatives Exchange Data by ID](#derivatives-exchange-data-by-id)
    - [Derivatives Exchanges List](#derivatives-exchanges-list)
- [`Entities`](#entities)
  - [Entities List](#entities-list)
- [`PublicTreasury`](#publictreasury)
  - [Crypto Treasury Holdings by Coin ID](#crypto-treasury-holdings-by-coin-id)
  - [Crypto Treasury Holdings by Entity ID](#crypto-treasury-holdings-by-entity-id)
  - [Crypto Treasury Holdings Historical Chart Data by ID](#crypto-treasury-holdings-historical-chart-data-by-id)
  - [Crypto Treasury Transaction History by Entity ID](#crypto-treasury-transaction-history-by-entity-id)
- [`Nfts`](#nfts)
  - [NFTs List](#nfts-list)
  - [NFTs Collection Data by ID](#nfts-collection-data-by-id)
  - [NFTs List with Market Data](#nfts-list-with-market-data)
  - [`Nfts MarketChart`](#nfts-marketchart)
    - [NFTs Collection Historical Chart Data by ID](#nfts-collection-historical-chart-data-by-id)
  - [`Nfts Tickers`](#nfts-tickers)
    - [NFTs Collection Tickers by ID](#nfts-collection-tickers-by-id)
  - [`Nfts Contract`](#nfts-contract)
    - [NFTs Collection Data by Contract Address](#nfts-collection-data-by-contract-address)
    - [`Nfts Contract MarketChart`](#nfts-contract-marketchart)
      - [NFTs Collection Historical Chart Data by Contract Address](#nfts-collection-historical-chart-data-by-contract-address)
- [`ExchangeRates`](#exchangerates)
  - [BTC-to-Currency Exchange Rates](#btc-to-currency-exchange-rates)
- [`News`](#news)
  - [Crypto News](#crypto-news)
- [`Global`](#global)
  - [Crypto Global Market Data](#crypto-global-market-data)
  - [`Global DecentralizedFinanceDefi`](#global-decentralizedfinancedefi)
    - [Global DeFi Market Data](#global-defi-market-data)
  - [`Global MarketCapChart`](#global-marketcapchart)
    - [Global Market Cap Chart Data](#global-market-cap-chart-data)
- [`Onchain`](#onchain)
  - [`Onchain Tokens`](#onchain-tokens)
    - [`Onchain Tokens InfoRecentlyUpdated`](#onchain-tokens-inforecentlyupdated)
      - [Most Recently Updated Tokens List](#most-recently-updated-tokens-list)
  - [`Onchain Search`](#onchain-search)
    - [`Onchain Search Pools`](#onchain-search-pools)
      - [Search Pools & Tokens](#search-pools--tokens)
  - [`Onchain Simple`](#onchain-simple)
    - [`Onchain Simple Networks`](#onchain-simple-networks)
      - [`Onchain Simple Networks TokenPrice`](#onchain-simple-networks-tokenprice)
        - [Token Price by Token Addresses](#token-price-by-token-addresses)
  - [`Onchain Networks`](#onchain-networks)
    - [Networks List](#networks-list)
    - [`Onchain Networks Pools`](#onchain-networks-pools)
      - [Specific Pool Data by Pool Address](#specific-pool-data-by-pool-address)
      - [Top Pools by Network](#top-pools-by-network)
      - [`Onchain Networks Pools Info`](#onchain-networks-pools-info)
        - [Pool Tokens Info by Pool Address](#pool-tokens-info-by-pool-address)
      - [`Onchain Networks Pools Ohlcv`](#onchain-networks-pools-ohlcv)
        - [Pool OHLCV Chart by Pool Address](#pool-ohlcv-chart-by-pool-address)
      - [`Onchain Networks Pools Trades`](#onchain-networks-pools-trades)
        - [Past 24 Hour Trades by Pool Address](#past-24-hour-trades-by-pool-address)
      - [`Onchain Networks Pools Multi`](#onchain-networks-pools-multi)
        - [Multiple Pools Data by Pool Addresses](#multiple-pools-data-by-pool-addresses)
    - [`Onchain Networks TrendingPools`](#onchain-networks-trendingpools)
      - [Trending Pools List](#trending-pools-list)
      - [Trending Pools by Network](#trending-pools-by-network)
    - [`Onchain Networks Dexes`](#onchain-networks-dexes)
      - [Top Pools by DEX](#top-pools-by-dex)
      - [DEXs List by Network](#dexs-list-by-network)
    - [`Onchain Networks Tokens`](#onchain-networks-tokens)
      - [Token Data by Token Address](#token-data-by-token-address)
      - [`Onchain Networks Tokens Pools`](#onchain-networks-tokens-pools)
        - [Top Pools by Token Address](#top-pools-by-token-address)
      - [`Onchain Networks Tokens Multi`](#onchain-networks-tokens-multi)
        - [Tokens Data by Token Addresses](#tokens-data-by-token-addresses)
      - [`Onchain Networks Tokens Info`](#onchain-networks-tokens-info)
        - [Token Info by Token Address](#token-info-by-token-address)
      - [`Onchain Networks Tokens TopTraders`](#onchain-networks-tokens-toptraders)
        - [Top Token Traders by Token Address](#top-token-traders-by-token-address)
      - [`Onchain Networks Tokens TopHolders`](#onchain-networks-tokens-topholders)
        - [Top Token Holders by Token Address](#top-token-holders-by-token-address)
      - [`Onchain Networks Tokens HoldersChart`](#onchain-networks-tokens-holderschart)
        - [Historical Token Holders Chart by Token Address](#historical-token-holders-chart-by-token-address)
      - [`Onchain Networks Tokens Ohlcv`](#onchain-networks-tokens-ohlcv)
        - [Token OHLCV Chart by Token Address](#token-ohlcv-chart-by-token-address)
      - [`Onchain Networks Tokens Trades`](#onchain-networks-tokens-trades)
        - [Past 24 Hour Trades by Token Address](#past-24-hour-trades-by-token-address)
    - [`Onchain Networks NewPools`](#onchain-networks-newpools)
      - [New Pools List](#new-pools-list)
      - [New Pools by Network](#new-pools-by-network)
  - [`Onchain Pools`](#onchain-pools)
    - [`Onchain Pools Megafilter`](#onchain-pools-megafilter)
      - [Megafilter for Pools](#megafilter-for-pools)
    - [`Onchain Pools TrendingSearch`](#onchain-pools-trendingsearch)
      - [Trending Search Pools](#trending-search-pools)
  - [`Onchain Categories`](#onchain-categories)
    - [Categories List](#categories-list)
    - [Pools by Category ID](#pools-by-category-id)

## Setup

```ts
import Coingecko from "@coingecko/coingecko-typescript";

const client = new Coingecko({
  proKeyAuth: process.env["PRO_KEY_AUTH"], // defaults to the PRO_KEY_AUTH env var
  environment: "pro",
});
```

## `Ping`

### API Server Status

To check the API server status

| Direction | Type |
| --- | --- |
| Response | [`PingServer`](./src/resources/ping.ts) |

```ts
const server = await client.ping.get();
```

## `Key`

### API Usage

To monitor your account's API usage, including rate limits, monthly total credits, remaining credits, and more

| Direction | Type |
| --- | --- |
| Response | [`ApiUsage`](./src/resources/key.ts) |

```ts
const apiUsage = await client.key.get();
```

## `Simple`

### `Simple Price`

#### Coin Price by IDs, Symbols, or Names

To query the prices of one or more coins by using their unique Coin API IDs, symbols, or names

| Direction | Type |
| --- | --- |
| Request | [`PriceGetParams`](./src/resources/simple/price.ts) |
| Response | [`SimplePrice`](./src/resources/simple/price.ts) |

```ts
const simplePrice = await client.simple.price.get({
  vs_currencies: "usd",
  ids: "bitcoin",
  names: "Bitcoin",
  symbols: "btc",
});
```

### `Simple SupportedVsCurrencies`

#### Currencies List

To query all the supported currencies on CoinGecko

| Direction | Type |
| --- | --- |
| Response | [`SupportedCurrencies`](./src/resources/simple/supported-vs-currencies.ts) |

```ts
const supportedCurrencies = await client.simple.supportedVsCurrencies.get();
```

### `Simple TokenPrice`

#### Coin Price by Token Addresses

To query one or more token prices by using their token contract addresses

| Direction | Type |
| --- | --- |
| Request | [`TokenPriceGetIdParams`](./src/resources/simple/token-price.ts) |
| Response | [`SimplePrice`](./src/resources/simple/token-price.ts) |

```ts
const simplePrice = await client.simple.tokenPrice.getId("ethereum", {
  contract_addresses: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  vs_currencies: "usd",
});
```

## `Search`

### Search Queries

To search for coins, categories and markets listed on CoinGecko

| Direction | Type |
| --- | --- |
| Request | [`SearchGetParams`](./src/resources/search/search.ts) |
| Response | [`Search2`](./src/resources/search/search.ts) |

```ts
const search = await client.search.get({
  query: "query",
});
```

### `Search Trending`

#### Trending Search List

To query trending search coins, NFTs and categories on CoinGecko in the last 24 hours

| Direction | Type |
| --- | --- |
| Request | [`TrendingGetParams`](./src/resources/search/trending.ts) |
| Response | [`TrendingSearch`](./src/resources/search/trending.ts) |

```ts
const search = await client.search.trending.get();
```

## `Coins`

### Coin Data by ID

To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on a particular coin ID

| Direction | Type |
| --- | --- |
| Request | [`CoinGetIdParams`](./src/resources/coins/coins.ts) |
| Response | [`CoinsId`](./src/resources/coins/coins.ts) |

```ts
const sId = await client.coins.getId("bitcoin");
```

### `Coins TopGainersLosers`

#### Top Gainers & Losers

To query the top 30 coins with largest price gain and loss by a specific time duration

| Direction | Type |
| --- | --- |
| Request | [`TopGainersLoserGetParams`](./src/resources/coins/top-gainers-losers.ts) |
| Response | [`TopGainersLosers2`](./src/resources/coins/top-gainers-losers.ts) |

```ts
const s = await client.coins.topGainersLosers.get({
  vs_currency: "usd",
});
```

### `Coins Markets`

#### Coins List with Market Data

To query all the supported coins with price, market cap, volume and market related data

| Direction | Type |
| --- | --- |
| Request | [`MarketGetParams`](./src/resources/coins/markets.ts) |
| Response | [`CoinsMarkets`](./src/resources/coins/markets.ts) |

```ts
const coinsMarkets = await client.coins.markets.get({
  vs_currency: "usd",
  ids: "bitcoin",
  names: "Bitcoin",
  symbols: "btc",
});
```

### `Coins Tickers`

#### Coin Tickers by ID

To query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID

| Direction | Type |
| --- | --- |
| Request | [`TickerGetParams`](./src/resources/coins/tickers.ts) |
| Response | [`CoinsIdTickers`](./src/resources/coins/tickers.ts) |

```ts
const coinsIdTickers = await client.coins.tickers.get("bitcoin");
```

### `Coins History`

#### Coin Historical Data by ID

To query the historical data (price, market cap, 24hrs volume, etc.) at a given date for a coin based on a particular coin ID

| Direction | Type |
| --- | --- |
| Request | [`HistoryGetParams`](./src/resources/coins/history.ts) |
| Response | [`CoinsIdHistory`](./src/resources/coins/history.ts) |

```ts
const coinsIdHistory = await client.coins.history.get("bitcoin", {
  date: "2025-12-30",
});
```

### `Coins MarketChart`

#### Coin Historical Chart Data by ID

To get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin ID

| Direction | Type |
| --- | --- |
| Request | [`MarketChartGetParams`](./src/resources/coins/market-chart.ts) |
| Response | [`CoinsMarketChart`](./src/resources/coins/market-chart.ts) |

```ts
const coinsMarketChart = await client.coins.marketChart.get("bitcoin", {
  vs_currency: "usd",
  days: "1",
});
```

#### Coin Historical Chart Data within Time Range by ID

To get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin ID

| Direction | Type |
| --- | --- |
| Request | [`MarketChartGetRangeParams`](./src/resources/coins/market-chart.ts) |
| Response | [`CoinsMarketChart`](./src/resources/coins/market-chart.ts) |

```ts
const coinsMarketChart = await client.coins.marketChart.getRange("bitcoin", {
  vs_currency: "usd",
  from: "2025-01-01",
  to: "2025-12-31",
});
```

### `Coins Ohlc`

#### Coin OHLC Chart by ID

To get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID

| Direction | Type |
| --- | --- |
| Request | [`OhlcGetParams`](./src/resources/coins/ohlc.ts) |
| Response | [`CoinsOhlc`](./src/resources/coins/ohlc.ts) |

```ts
const coinsOhlc = await client.coins.ohlc.get("bitcoin", {
  vs_currency: "usd",
  days: "1",
});
```

#### Coin OHLC Chart within Time Range by ID

To get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin ID

| Direction | Type |
| --- | --- |
| Request | [`OhlcGetRangeParams`](./src/resources/coins/ohlc.ts) |
| Response | [`CoinsOhlc`](./src/resources/coins/ohlc.ts) |

```ts
const coinsOhlc = await client.coins.ohlc.getRange("bitcoin", {
  vs_currency: "usd",
  from: "2025-12-01",
  to: "2025-12-31",
  interval: "daily",
});
```

### `Coins Contract`

#### Coin Data by Token Address

To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on an asset platform and a particular token contract address

| Direction | Type |
| --- | --- |
| Response | [`CoinsContractAddress`](./src/resources/coins/contract/contract.ts) |

```ts
const coinsContractAddress = await client.coins.contract.get("ethereum", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
```

#### `Coins Contract MarketChart`

##### Coin Historical Chart Data by Token Address

To get the historical chart data including time in UNIX, price, market cap and 24hrs volume based on asset platform and particular token contract address

| Direction | Type |
| --- | --- |
| Request | [`MarketChartGetParams`](./src/resources/coins/contract/market-chart.ts) |
| Response | [`CoinsMarketChart`](./src/resources/coins/contract/market-chart.ts) |

```ts
const coinsMarketChart = await client.coins.contract.marketChart.get("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
  vs_currency: "usd",
  days: "1",
});
```

##### Coin Historical Chart Data within Time Range by Token Address

To get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume based on asset platform and particular token contract address

| Direction | Type |
| --- | --- |
| Request | [`MarketChartGetRangeParams`](./src/resources/coins/contract/market-chart.ts) |
| Response | [`CoinsMarketChart`](./src/resources/coins/contract/market-chart.ts) |

```ts
const coinsMarketChart = await client.coins.contract.marketChart.getRange("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
  vs_currency: "usd",
  from: "2025-01-01",
  to: "2025-12-31",
});
```

### `Coins CirculatingSupplyChart`

#### Circulating Supply Chart by ID

To query historical circulating supply of a coin by number of days away from now based on provided coin ID

| Direction | Type |
| --- | --- |
| Request | [`CirculatingSupplyChartGetParams`](./src/resources/coins/circulating-supply-chart.ts) |
| Response | [`CirculatingSupplyChart2`](./src/resources/coins/circulating-supply-chart.ts) |

```ts
const circulatingSupplyChart = await client.coins.circulatingSupplyChart.get("bitcoin", {
  days: "1",
});
```

#### Circulating Supply Chart within Time Range by ID

To query historical circulating supply of a coin, within a range of timestamp based on the provided coin ID

| Direction | Type |
| --- | --- |
| Request | [`CirculatingSupplyChartGetRangeParams`](./src/resources/coins/circulating-supply-chart.ts) |
| Response | [`CirculatingSupplyChart2`](./src/resources/coins/circulating-supply-chart.ts) |

```ts
const circulatingSupplyChart = await client.coins.circulatingSupplyChart.getRange("bitcoin", {
  from: "2025-01-01",
  to: "2025-12-31",
});
```

### `Coins TotalSupplyChart`

#### Total Supply Chart by ID

To query historical total supply of a coin by number of days away from now based on provided coin ID

| Direction | Type |
| --- | --- |
| Request | [`TotalSupplyChartGetParams`](./src/resources/coins/total-supply-chart.ts) |
| Response | [`TotalSupplyChart2`](./src/resources/coins/total-supply-chart.ts) |

```ts
const totalSupplyChart = await client.coins.totalSupplyChart.get("bitcoin", {
  days: "1",
});
```

#### Total Supply Chart within Time Range by ID

To query historical total supply of a coin, within a range of timestamp based on the provided coin ID

| Direction | Type |
| --- | --- |
| Request | [`TotalSupplyChartGetRangeParams`](./src/resources/coins/total-supply-chart.ts) |
| Response | [`TotalSupplyChart2`](./src/resources/coins/total-supply-chart.ts) |

```ts
const totalSupplyChart = await client.coins.totalSupplyChart.getRange("bitcoin", {
  from: "2025-01-01",
  to: "2025-12-31",
});
```

### `Coins List`

#### Recently Added Coins

To query the latest 200 coins that recently listed on CoinGecko

| Direction | Type |
| --- | --- |
| Response | [`CoinsListNew`](./src/resources/coins/list.ts) |

```ts
const coinsListNew = await client.coins.list.getNew();
```

#### Coins List

To query all the supported coins on CoinGecko with coin ID, name and symbol

| Direction | Type |
| --- | --- |
| Request | [`ListGetParams`](./src/resources/coins/list.ts) |
| Response | [`CoinsList`](./src/resources/coins/list.ts) |

```ts
const coinsList = await client.coins.list.get();
```

### `Coins Categories`

#### Coins Categories List

To query all the supported coins categories on CoinGecko

| Direction | Type |
| --- | --- |
| Response | [`CategoriesList`](./src/resources/coins/categories.ts) |

```ts
const categoriesList = await client.coins.categories.getList();
```

#### Coins Categories List with Market Data

To query all the coins categories with market data (market cap, volume, etc.) on CoinGecko

| Direction | Type |
| --- | --- |
| Request | [`CategoryGetParams`](./src/resources/coins/categories.ts) |
| Response | [`Categories2`](./src/resources/coins/categories.ts) |

```ts
const categories = await client.coins.categories.get();
```

## `AssetPlatforms`

### Asset Platforms List

To query all the supported asset platforms (blockchain networks) on CoinGecko

| Direction | Type |
| --- | --- |
| Request | [`AssetPlatformGetParams`](./src/resources/asset-platforms.ts) |
| Response | [`AssetPlatforms2`](./src/resources/asset-platforms.ts) |

```ts
const s = await client.assetPlatforms.get();
```

## `TokenLists`

### Token Lists by Asset Platform ID

To get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)

| Direction | Type |
| --- | --- |
| Response | [`TokenLists2`](./src/resources/token-lists.ts) |

```ts
const s = await client.tokenLists.getAllJson("ethereum");
```

## `Exchanges`

### Exchanges List with Data

To query all the supported exchanges with exchanges' data (ID, name, country, etc.) that have active trading volumes on CoinGecko

| Direction | Type |
| --- | --- |
| Request | [`ExchangeGetParams`](./src/resources/exchanges/exchanges.ts) |
| Response | [`Exchanges2`](./src/resources/exchanges/exchanges.ts) |

```ts
const s = await client.exchanges.get();
```

### Exchanges List

To query all the supported exchanges with ID and name

| Direction | Type |
| --- | --- |
| Request | [`ExchangeGetListParams`](./src/resources/exchanges/exchanges.ts) |
| Response | [`ExchangesList`](./src/resources/exchanges/exchanges.ts) |

```ts
const sList = await client.exchanges.getList();
```

### Exchange Data by ID

To query exchange's data (name, year established, country, etc.), exchange volume in BTC and top 100 tickers based on exchange's ID

| Direction | Type |
| --- | --- |
| Request | [`ExchangeGetIdParams`](./src/resources/exchanges/exchanges.ts) |
| Response | [`ExchangesId`](./src/resources/exchanges/exchanges.ts) |

```ts
const sId = await client.exchanges.getId("binance");
```

### `Exchanges Tickers`

#### Exchange Tickers by ID

To query exchange's tickers based on exchange's ID

| Direction | Type |
| --- | --- |
| Request | [`TickerGetParams`](./src/resources/exchanges/tickers.ts) |
| Response | [`CoinsIdTickers`](./src/resources/exchanges/tickers.ts) |

```ts
const coinsIdTickers = await client.exchanges.tickers.get("binance");
```

### `Exchanges VolumeChart`

#### Exchange Volume Chart by ID

To query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID

| Direction | Type |
| --- | --- |
| Request | [`VolumeChartGetParams`](./src/resources/exchanges/volume-chart.ts) |
| Response | [`ExchangeVolumeChart`](./src/resources/exchanges/volume-chart.ts) |

```ts
const exchangeVolumeChart = await client.exchanges.volumeChart.get("binance", {
  days: "1",
});
```

#### Exchange Volume Chart within Time Range by ID

To query the historical volume chart data in BTC by specifying date range in UNIX based on exchange's ID

| Direction | Type |
| --- | --- |
| Request | [`VolumeChartGetRangeParams`](./src/resources/exchanges/volume-chart.ts) |
| Response | [`ExchangeVolumeChart`](./src/resources/exchanges/volume-chart.ts) |

```ts
const exchangeVolumeChart = await client.exchanges.volumeChart.getRange("binance", {
  from: "1767196800",
  to: "1769702400",
});
```

## `Derivatives`

### Derivatives Tickers List

To query all the tickers from derivatives exchanges on CoinGecko

| Direction | Type |
| --- | --- |
| Response | [`DerivativesTickers`](./src/resources/derivatives/derivatives.ts) |

```ts
const sTickers = await client.derivatives.get();
```

### `Derivatives Exchanges`

#### Derivatives Exchanges List with Data

To query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko

| Direction | Type |
| --- | --- |
| Request | [`ExchangeGetParams`](./src/resources/derivatives/exchanges.ts) |
| Response | [`DerivativesExchanges`](./src/resources/derivatives/exchanges.ts) |

```ts
const derivativesExchanges = await client.derivatives.exchanges.get();
```

#### Derivatives Exchange Data by ID

To query the derivatives exchange's related data (name, open interest, trade volume, ...) based on the exchange's ID

| Direction | Type |
| --- | --- |
| Request | [`ExchangeGetIdParams`](./src/resources/derivatives/exchanges.ts) |
| Response | [`DerivativesExchangesId`](./src/resources/derivatives/exchanges.ts) |

```ts
const derivativesExchangesId = await client.derivatives.exchanges.getId("binance_futures");
```

#### Derivatives Exchanges List

To query all the supported derivatives exchanges with ID and name on CoinGecko

| Direction | Type |
| --- | --- |
| Response | [`DerivativesExchangesList`](./src/resources/derivatives/exchanges.ts) |

```ts
const derivativesExchangesList = await client.derivatives.exchanges.getList();
```

## `Entities`

### Entities List

To query all the supported entities on CoinGecko with entity ID, name, symbol, and country

| Direction | Type |
| --- | --- |
| Request | [`EntityGetListParams`](./src/resources/entities.ts) |
| Response | [`EntitiesList`](./src/resources/entities.ts) |

```ts
const entitiesList = await client.entities.getList();
```

## `PublicTreasury`

### Crypto Treasury Holdings by Coin ID

To query public companies' and governments' cryptocurrency holdings by coin ID

| Direction | Type |
| --- | --- |
| Request | [`PublicTreasuryGetCoinIdParams`](./src/resources/public-treasury.ts) |
| Response | [`PublicTreasury2`](./src/resources/public-treasury.ts) |

```ts
const publicTreasury = await client.publicTreasury.getCoinId("companies", "bitcoin");
```

### Crypto Treasury Holdings by Entity ID

To query public companies' and governments' cryptocurrency holdings by entity ID

| Direction | Type |
| --- | --- |
| Request | [`PublicTreasuryGetEntityIdParams`](./src/resources/public-treasury.ts) |
| Response | [`PublicTreasuryEntity`](./src/resources/public-treasury.ts) |

```ts
const entity = await client.publicTreasury.getEntityId("strategy");
```

### Crypto Treasury Holdings Historical Chart Data by ID

To query historical cryptocurrency holdings chart of public companies and governments by entity ID and coin ID

| Direction | Type |
| --- | --- |
| Request | [`PublicTreasuryGetHoldingChartParams`](./src/resources/public-treasury.ts) |
| Response | [`PublicTreasuryEntityChart`](./src/resources/public-treasury.ts) |

```ts
const entityChart = await client.publicTreasury.getHoldingChart("strategy", "bitcoin", {
  days: "365",
});
```

### Crypto Treasury Transaction History by Entity ID

To query public companies' and governments' cryptocurrency transaction history by entity ID

| Direction | Type |
| --- | --- |
| Request | [`PublicTreasuryGetTransactionHistoryParams`](./src/resources/public-treasury.ts) |
| Response | [`PublicTreasuryTransactionHistory`](./src/resources/public-treasury.ts) |

```ts
const transactionHistory = await client.publicTreasury.getTransactionHistory("strategy");
```

## `Nfts`

### NFTs List

To query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko

| Direction | Type |
| --- | --- |
| Request | [`NftGetListParams`](./src/resources/nfts/nfts.ts) |
| Response | [`NfTsList`](./src/resources/nfts/nfts.ts) |

```ts
const nfTsList = await client.nfts.getList();
```

### NFTs Collection Data by ID

To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection ID

| Direction | Type |
| --- | --- |
| Response | [`NftData`](./src/resources/nfts/nfts.ts) |

```ts
const data = await client.nfts.getId("pudgy-penguins");
```

### NFTs List with Market Data

To query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko

| Direction | Type |
| --- | --- |
| Request | [`NftGetMarketsParams`](./src/resources/nfts/nfts.ts) |
| Response | [`NfTsMarkets`](./src/resources/nfts/nfts.ts) |

```ts
const nfTsMarkets = await client.nfts.getMarkets();
```

### `Nfts MarketChart`

#### NFTs Collection Historical Chart Data by ID

To query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now

| Direction | Type |
| --- | --- |
| Request | [`MarketChartGetParams`](./src/resources/nfts/market-chart.ts) |
| Response | [`NftMarketChart`](./src/resources/nfts/market-chart.ts) |

```ts
const nftMarketChart = await client.nfts.marketChart.get("pudgy-penguins", {
  days: "1",
});
```

### `Nfts Tickers`

#### NFTs Collection Tickers by ID

To query the latest floor price and 24hr volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and Blur

| Direction | Type |
| --- | --- |
| Response | [`NftTickers`](./src/resources/nfts/tickers.ts) |

```ts
const nftTickers = await client.nfts.tickers.get("pudgy-penguins");
```

### `Nfts Contract`

#### NFTs Collection Data by Contract Address

To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection contract address and respective asset platform

| Direction | Type |
| --- | --- |
| Response | [`NftData`](./src/resources/nfts/contract/contract.ts) |

```ts
const nftData = await client.nfts.contract.getContractAddress("ethereum", "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8");
```

#### `Nfts Contract MarketChart`

##### NFTs Collection Historical Chart Data by Contract Address

To query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now based on the provided contract address

| Direction | Type |
| --- | --- |
| Request | [`MarketChartGetParams`](./src/resources/nfts/contract/market-chart.ts) |
| Response | [`NftMarketChart`](./src/resources/nfts/contract/market-chart.ts) |

```ts
const nftMarketChart = await client.nfts.contract.marketChart.get("ethereum", "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", {
  days: "1",
});
```

## `ExchangeRates`

### BTC-to-Currency Exchange Rates

To query BTC exchange rates with other currencies

| Direction | Type |
| --- | --- |
| Response | [`ExchangeRates2`](./src/resources/exchange-rates.ts) |

```ts
const s = await client.exchangeRates.get();
```

## `News`

### Crypto News

To query the latest crypto news and guides on CoinGecko

| Direction | Type |
| --- | --- |
| Request | [`NewGetParams`](./src/resources/news.ts) |
| Response | [`News2`](./src/resources/news.ts) |

```ts
const s = await client.news.get();
```

## `Global`

### Crypto Global Market Data

To query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc

| Direction | Type |
| --- | --- |
| Response | [`Global2`](./src/resources/global/global.ts) |

```ts
const global = await client.global.get();
```

### `Global DecentralizedFinanceDefi`

#### Global DeFi Market Data

To query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume

| Direction | Type |
| --- | --- |
| Response | [`GlobalDeFi`](./src/resources/global/decentralized-finance-defi.ts) |

```ts
const globalDeFi = await client.global.decentralizedFinanceDefi.get();
```

### `Global MarketCapChart`

#### Global Market Cap Chart Data

To query historical global market cap and volume data by number of days away from now

| Direction | Type |
| --- | --- |
| Request | [`MarketCapChartGetParams`](./src/resources/global/market-cap-chart.ts) |
| Response | [`GlobalMarketCapChart`](./src/resources/global/market-cap-chart.ts) |

```ts
const globalMarketCapChart = await client.global.marketCapChart.get({
  days: "1",
});
```

## `Onchain`

### `Onchain Tokens`

#### `Onchain Tokens InfoRecentlyUpdated`

##### Most Recently Updated Tokens List

To query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal

| Direction | Type |
| --- | --- |
| Request | [`InfoRecentlyUpdatedGetParams`](./src/resources/onchain/tokens/info-recently-updated.ts) |
| Response | [`TokenInfoRecentlyUpdated`](./src/resources/onchain/tokens/info-recently-updated.ts) |

```ts
const tokenInfoRecentlyUpdated = await client.onchain.tokens.infoRecentlyUpdated.get();
```

### `Onchain Search`

#### `Onchain Search Pools`

##### Search Pools & Tokens

To search for pools across all networks by pool address, token name, token symbol, or token contract address

| Direction | Type |
| --- | --- |
| Request | [`PoolGetParams`](./src/resources/onchain/search/pools.ts) |
| Response | [`PoolSearch`](./src/resources/onchain/search/pools.ts) |

```ts
const search = await client.onchain.search.pools.get({
  query: "weth",
});
```

### `Onchain Simple`

#### `Onchain Simple Networks`

##### `Onchain Simple Networks TokenPrice`

###### Token Price by Token Addresses

To get token price based on the provided token contract address on a network

| Direction | Type |
| --- | --- |
| Request | [`TokenPriceGetAddressesParams`](./src/resources/onchain/simple/networks/token-price.ts) |
| Response | [`OnchainSimplePrice`](./src/resources/onchain/simple/networks/token-price.ts) |

```ts
const onchainSimplePrice = await client.onchain.simple.networks.tokenPrice.getAddresses("eth", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
```

### `Onchain Networks`

#### Networks List

To retrieve a list of all supported networks on GeckoTerminal

| Direction | Type |
| --- | --- |
| Request | [`NetworkGetParams`](./src/resources/onchain/networks/networks.ts) |
| Response | [`NetworksList`](./src/resources/onchain/networks/networks.ts) |

```ts
const sList = await client.onchain.networks.get();
```

#### `Onchain Networks Pools`

##### Specific Pool Data by Pool Address

To query the specific pool based on the provided network and pool address

| Direction | Type |
| --- | --- |
| Request | [`PoolGetAddressParams`](./src/resources/onchain/networks/pools/pools.ts) |
| Response | [`PoolAddressData`](./src/resources/onchain/networks/pools/pools.ts) |

```ts
const addressData = await client.onchain.networks.pools.getAddress("eth", "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640");
```

##### Top Pools by Network

To query all the top pools based on the provided network

| Direction | Type |
| --- | --- |
| Request | [`PoolGetParams`](./src/resources/onchain/networks/pools/pools.ts) |
| Response | [`Pool`](./src/resources/onchain/networks/pools/pools.ts) |

```ts
const pool = await client.onchain.networks.pools.get("eth");
```

##### `Onchain Networks Pools Info`

###### Pool Tokens Info by Pool Address

To query pool metadata (base and quote token details, image, socials, websites, description, contract address, etc.) based on a provided pool contract address on a network

| Direction | Type |
| --- | --- |
| Request | [`InfoGetParams`](./src/resources/onchain/networks/pools/info.ts) |
| Response | [`PoolTokensInfo`](./src/resources/onchain/networks/pools/info.ts) |

```ts
const poolTokensInfo = await client.onchain.networks.pools.info.get("solana", "8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt");
```

##### `Onchain Networks Pools Ohlcv`

###### Pool OHLCV Chart by Pool Address

To get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network

| Direction | Type |
| --- | --- |
| Request | [`OhlcvGetTimeframeParams`](./src/resources/onchain/networks/pools/ohlcv.ts) |
| Response | [`Ohlcv2`](./src/resources/onchain/networks/pools/ohlcv.ts) |

```ts
const ohlcv = await client.onchain.networks.pools.ohlcv.getTimeframe("eth", "0x06da0fd433c1a5d7a4faa01111c044910a184553", "day");
```

##### `Onchain Networks Pools Trades`

###### Past 24 Hour Trades by Pool Address

To query the last 300 trades in the past 24 hours based on the provided pool address

| Direction | Type |
| --- | --- |
| Request | [`TradeGetParams`](./src/resources/onchain/networks/pools/trades.ts) |
| Response | [`Trades2`](./src/resources/onchain/networks/pools/trades.ts) |

```ts
const s = await client.onchain.networks.pools.trades.get("eth", "0x06da0fd433c1a5d7a4faa01111c044910a184553");
```

##### `Onchain Networks Pools Multi`

###### Multiple Pools Data by Pool Addresses

To query multiple pools based on the provided network and pool addresses

| Direction | Type |
| --- | --- |
| Request | [`MultiGetAddressesParams`](./src/resources/onchain/networks/pools/multi.ts) |
| Response | [`MultiPoolAddressData`](./src/resources/onchain/networks/pools/multi.ts) |

```ts
const poolAddressData = await client.onchain.networks.pools.multi.getAddresses("eth", "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640");
```

#### `Onchain Networks TrendingPools`

##### Trending Pools List

To query all the trending pools across all networks on GeckoTerminal

| Direction | Type |
| --- | --- |
| Request | [`TrendingPoolGetParams`](./src/resources/onchain/networks/trending-pools.ts) |
| Response | [`Pool`](./src/resources/onchain/networks/trending-pools.ts) |

```ts
const pool = await client.onchain.networks.trendingPools.get();
```

##### Trending Pools by Network

To query the trending pools based on the provided network

| Direction | Type |
| --- | --- |
| Request | [`TrendingPoolGetNetworkParams`](./src/resources/onchain/networks/trending-pools.ts) |
| Response | [`Pool`](./src/resources/onchain/networks/trending-pools.ts) |

```ts
const pool = await client.onchain.networks.trendingPools.getNetwork("eth");
```

#### `Onchain Networks Dexes`

##### Top Pools by DEX

To query all the top pools based on the provided network and decentralized exchange (DEX)

| Direction | Type |
| --- | --- |
| Request | [`DexGetPoolsParams`](./src/resources/onchain/networks/dexes.ts) |
| Response | [`Pool`](./src/resources/onchain/networks/dexes.ts) |

```ts
const pool = await client.onchain.networks.dexes.getPools("eth", "sushiswap");
```

##### DEXs List by Network

To query all the supported decentralized exchanges (DEXs) based on the provided network on GeckoTerminal

| Direction | Type |
| --- | --- |
| Request | [`DexGetParams`](./src/resources/onchain/networks/dexes.ts) |
| Response | [`DexesList`](./src/resources/onchain/networks/dexes.ts) |

```ts
const sList = await client.onchain.networks.dexes.get("eth");
```

#### `Onchain Networks Tokens`

##### Token Data by Token Address

To query specific token data based on the provided token contract address on a network

| Direction | Type |
| --- | --- |
| Request | [`TokenGetAddressParams`](./src/resources/onchain/networks/tokens/tokens.ts) |
| Response | [`TokenData`](./src/resources/onchain/networks/tokens/tokens.ts) |

```ts
const data = await client.onchain.networks.tokens.getAddress("eth", "0xdac17f958d2ee523a2206206994597c13d831ec7");
```

##### `Onchain Networks Tokens Pools`

###### Top Pools by Token Address

To query top pools based on the provided token contract address on a network

| Direction | Type |
| --- | --- |
| Request | [`PoolGetParams`](./src/resources/onchain/networks/tokens/pools.ts) |
| Response | [`Pool`](./src/resources/onchain/networks/tokens/pools.ts) |

```ts
const pool = await client.onchain.networks.tokens.pools.get("eth", "0xdac17f958d2ee523a2206206994597c13d831ec7");
```

##### `Onchain Networks Tokens Multi`

###### Tokens Data by Token Addresses

To query multiple tokens data based on the provided token contract addresses on a network

| Direction | Type |
| --- | --- |
| Request | [`MultiGetAddressesParams`](./src/resources/onchain/networks/tokens/multi.ts) |
| Response | [`MultiTokenData`](./src/resources/onchain/networks/tokens/multi.ts) |

```ts
const tokenData = await client.onchain.networks.tokens.multi.getAddresses("solana", "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN,2g4LS3y2myPe6vj9wTvoBE1wKqxvhnZPoZA9QU9upump");
```

##### `Onchain Networks Tokens Info`

###### Token Info by Token Address

To query token metadata (name, symbol, CoinGecko ID, image, socials, websites, description, etc.) based on a provided token contract address on a network

| Direction | Type |
| --- | --- |
| Response | [`TokenInfo`](./src/resources/onchain/networks/tokens/info.ts) |

```ts
const tokenInfo = await client.onchain.networks.tokens.info.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
```

##### `Onchain Networks Tokens TopTraders`

###### Top Token Traders by Token Address

To query top token traders based on the provided token contract address on a network

| Direction | Type |
| --- | --- |
| Request | [`TopTraderGetParams`](./src/resources/onchain/networks/tokens/top-traders.ts) |
| Response | [`TopTokenTraders`](./src/resources/onchain/networks/tokens/top-traders.ts) |

```ts
const topTokenTraders = await client.onchain.networks.tokens.topTraders.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
```

##### `Onchain Networks Tokens TopHolders`

###### Top Token Holders by Token Address

To query top token holders based on the provided token contract address on a network

| Direction | Type |
| --- | --- |
| Request | [`TopHolderGetParams`](./src/resources/onchain/networks/tokens/top-holders.ts) |
| Response | [`TopTokenHolders`](./src/resources/onchain/networks/tokens/top-holders.ts) |

```ts
const topTokenHolders = await client.onchain.networks.tokens.topHolders.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
```

##### `Onchain Networks Tokens HoldersChart`

###### Historical Token Holders Chart by Token Address

To get the historical token holders chart based on the provided token contract address on a network

| Direction | Type |
| --- | --- |
| Request | [`HoldersChartGetParams`](./src/resources/onchain/networks/tokens/holders-chart.ts) |
| Response | [`TokenHoldersChart`](./src/resources/onchain/networks/tokens/holders-chart.ts) |

```ts
const tokenHoldersChart = await client.onchain.networks.tokens.holdersChart.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
```

##### `Onchain Networks Tokens Ohlcv`

###### Token OHLCV Chart by Token Address

To get the OHLCV chart (Open, High, Low, Close, Volume) of a token based on the provided token address on a network

| Direction | Type |
| --- | --- |
| Request | [`OhlcvGetTimeframeParams`](./src/resources/onchain/networks/tokens/ohlcv.ts) |
| Response | [`Ohlcv2`](./src/resources/onchain/networks/tokens/ohlcv.ts) |

```ts
const ohlcv = await client.onchain.networks.tokens.ohlcv.getTimeframe("solana", "So11111111111111111111111111111111111111112", "day");
```

##### `Onchain Networks Tokens Trades`

###### Past 24 Hour Trades by Token Address

To query the last 300 trades in the past 24 hours, across all pools, based on the provided token contract address on a network

| Direction | Type |
| --- | --- |
| Request | [`TradeGetParams`](./src/resources/onchain/networks/tokens/trades.ts) |
| Response | [`TokenTrades`](./src/resources/onchain/networks/tokens/trades.ts) |

```ts
const tokenTrades = await client.onchain.networks.tokens.trades.get("eth", "0xdac17f958d2ee523a2206206994597c13d831ec7");
```

#### `Onchain Networks NewPools`

##### New Pools List

To query all the latest pools across all networks on GeckoTerminal

| Direction | Type |
| --- | --- |
| Request | [`NewPoolGetParams`](./src/resources/onchain/networks/new-pools.ts) |
| Response | [`Pool`](./src/resources/onchain/networks/new-pools.ts) |

```ts
const pool = await client.onchain.networks.newPools.get();
```

##### New Pools by Network

To query all the latest pools based on the provided network

| Direction | Type |
| --- | --- |
| Request | [`NewPoolGetNetworkParams`](./src/resources/onchain/networks/new-pools.ts) |
| Response | [`Pool`](./src/resources/onchain/networks/new-pools.ts) |

```ts
const pool = await client.onchain.networks.newPools.getNetwork("eth");
```

### `Onchain Pools`

#### `Onchain Pools Megafilter`

##### Megafilter for Pools

To query pools based on various filters across all networks on GeckoTerminal

| Direction | Type |
| --- | --- |
| Request | [`MegafilterGetParams`](./src/resources/onchain/pools/megafilter.ts) |
| Response | [`Pool`](./src/resources/onchain/pools/megafilter.ts) |

```ts
const pool = await client.onchain.pools.megafilter.get();
```

#### `Onchain Pools TrendingSearch`

##### Trending Search Pools

To query all the trending search pools across all networks on GeckoTerminal

| Direction | Type |
| --- | --- |
| Request | [`TrendingSearchGetParams`](./src/resources/onchain/pools/trending-search.ts) |
| Response | [`TrendingSearchPools`](./src/resources/onchain/pools/trending-search.ts) |

```ts
const pools = await client.onchain.pools.trendingSearch.get();
```

### `Onchain Categories`

#### Categories List

To query all the supported categories on GeckoTerminal

| Direction | Type |
| --- | --- |
| Request | [`CategoryGetParams`](./src/resources/onchain/categories.ts) |
| Response | [`OnchainCategoriesList`](./src/resources/onchain/categories.ts) |

```ts
const onchainCategoriesList = await client.onchain.categories.get();
```

#### Pools by Category ID

To query all the pools based on the provided category ID

| Direction | Type |
| --- | --- |
| Request | [`CategoryGetPoolsParams`](./src/resources/onchain/categories.ts) |
| Response | [`CategoriesPools`](./src/resources/onchain/categories.ts) |

```ts
const categoriesPools = await client.onchain.categories.getPools("pump-fun");
```
