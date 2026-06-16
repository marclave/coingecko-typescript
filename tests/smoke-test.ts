// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs'

// The default export is the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import Coingecko from "@coingecko/coingecko-typescript"

// One shared client runs every case.
const client = new Coingecko()

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string
  method: string
  path: string
  status: 'passed' | 'failed'
  durationMs: number
  error?: string
}

// One entry per generated operation. `run` performs the real SDK call; the other fields are
// metadata used for filtering and reporting. This list is generated, so it stays in sync with
// the SDK surface.
const cases: { operation: string; method: string; path: string; run: () => Promise<unknown> }[] = [
  {
    operation: "get",
    method: "GET",
    path: "/ping",
    run: async () => {
      const server = await client.ping.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/key",
    run: async () => {
      const apiUsage = await client.key.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/simple/price",
    run: async () => {
      const simplePrice = await client.simple.price.get({
        vs_currencies: "usd",
        ids: "bitcoin",
        names: "Bitcoin",
        symbols: "btc",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/simple/supported_vs_currencies",
    run: async () => {
      const supportedCurrencies = await client.simple.supportedVsCurrencies.get();
    },
  },

  {
    operation: "getId",
    method: "GET",
    path: "/simple/token_price/{id}",
    run: async () => {
      const simplePrice = await client.simple.tokenPrice.getId("ethereum", {
        contract_addresses: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        vs_currencies: "usd",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/search",
    run: async () => {
      const search = await client.search.get({
        query: "query",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/search/trending",
    run: async () => {
      const search = await client.search.trending.get();
    },
  },

  {
    operation: "getId",
    method: "GET",
    path: "/coins/{id}",
    run: async () => {
      const sId = await client.coins.getId("bitcoin");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/top_gainers_losers",
    run: async () => {
      const s = await client.coins.topGainersLosers.get({
        vs_currency: "usd",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/markets",
    run: async () => {
      const coinsMarkets = await client.coins.markets.get({
        vs_currency: "usd",
        ids: "bitcoin",
        names: "Bitcoin",
        symbols: "btc",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/{id}/tickers",
    run: async () => {
      const coinsIdTickers = await client.coins.tickers.get("bitcoin");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/{id}/history",
    run: async () => {
      const coinsIdHistory = await client.coins.history.get("bitcoin", {
        date: "2025-12-30",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/{id}/market_chart",
    run: async () => {
      const coinsMarketChart = await client.coins.marketChart.get("bitcoin", {
        vs_currency: "usd",
        days: "1",
      });
    },
  },

  {
    operation: "getRange",
    method: "GET",
    path: "/coins/{id}/market_chart/range",
    run: async () => {
      const coinsMarketChart = await client.coins.marketChart.getRange("bitcoin", {
        vs_currency: "usd",
        from: "2025-01-01",
        to: "2025-12-31",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/{id}/ohlc",
    run: async () => {
      const coinsOhlc = await client.coins.ohlc.get("bitcoin", {
        vs_currency: "usd",
        days: "1",
      });
    },
  },

  {
    operation: "getRange",
    method: "GET",
    path: "/coins/{id}/ohlc/range",
    run: async () => {
      const coinsOhlc = await client.coins.ohlc.getRange("bitcoin", {
        vs_currency: "usd",
        from: "2025-12-01",
        to: "2025-12-31",
        interval: "daily",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/{id}/contract/{contract_address}",
    run: async () => {
      const coinsContractAddress = await client.coins.contract.get("ethereum", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/{id}/contract/{contract_address}/market_chart",
    run: async () => {
      const coinsMarketChart = await client.coins.contract.marketChart.get("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
        vs_currency: "usd",
        days: "1",
      });
    },
  },

  {
    operation: "getRange",
    method: "GET",
    path: "/coins/{id}/contract/{contract_address}/market_chart/range",
    run: async () => {
      const coinsMarketChart = await client.coins.contract.marketChart.getRange("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
        vs_currency: "usd",
        from: "2025-01-01",
        to: "2025-12-31",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/{id}/circulating_supply_chart",
    run: async () => {
      const circulatingSupplyChart = await client.coins.circulatingSupplyChart.get("bitcoin", {
        days: "1",
      });
    },
  },

  {
    operation: "getRange",
    method: "GET",
    path: "/coins/{id}/circulating_supply_chart/range",
    run: async () => {
      const circulatingSupplyChart = await client.coins.circulatingSupplyChart.getRange("bitcoin", {
        from: "2025-01-01",
        to: "2025-12-31",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/{id}/total_supply_chart",
    run: async () => {
      const totalSupplyChart = await client.coins.totalSupplyChart.get("bitcoin", {
        days: "1",
      });
    },
  },

  {
    operation: "getRange",
    method: "GET",
    path: "/coins/{id}/total_supply_chart/range",
    run: async () => {
      const totalSupplyChart = await client.coins.totalSupplyChart.getRange("bitcoin", {
        from: "2025-01-01",
        to: "2025-12-31",
      });
    },
  },

  {
    operation: "getNew",
    method: "GET",
    path: "/coins/list/new",
    run: async () => {
      const coinsListNew = await client.coins.list.getNew();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/list",
    run: async () => {
      const coinsList = await client.coins.list.get();
    },
  },

  {
    operation: "getList",
    method: "GET",
    path: "/coins/categories/list",
    run: async () => {
      const categoriesList = await client.coins.categories.getList();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/categories",
    run: async () => {
      const categories = await client.coins.categories.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/asset_platforms",
    run: async () => {
      const s = await client.assetPlatforms.get();
    },
  },

  {
    operation: "getAllJson",
    method: "GET",
    path: "/token_lists/{asset_platform_id}/all.json",
    run: async () => {
      const s = await client.tokenLists.getAllJson("ethereum");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/exchanges",
    run: async () => {
      const s = await client.exchanges.get();
    },
  },

  {
    operation: "getList",
    method: "GET",
    path: "/exchanges/list",
    run: async () => {
      const sList = await client.exchanges.getList();
    },
  },

  {
    operation: "getId",
    method: "GET",
    path: "/exchanges/{id}",
    run: async () => {
      const sId = await client.exchanges.getId("binance");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/exchanges/{id}/tickers",
    run: async () => {
      const coinsIdTickers = await client.exchanges.tickers.get("binance");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/exchanges/{id}/volume_chart",
    run: async () => {
      const exchangeVolumeChart = await client.exchanges.volumeChart.get("binance", {
        days: "1",
      });
    },
  },

  {
    operation: "getRange",
    method: "GET",
    path: "/exchanges/{id}/volume_chart/range",
    run: async () => {
      const exchangeVolumeChart = await client.exchanges.volumeChart.getRange("binance", {
        from: "1767196800",
        to: "1769702400",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/derivatives",
    run: async () => {
      const sTickers = await client.derivatives.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/derivatives/exchanges",
    run: async () => {
      const derivativesExchanges = await client.derivatives.exchanges.get();
    },
  },

  {
    operation: "getId",
    method: "GET",
    path: "/derivatives/exchanges/{id}",
    run: async () => {
      const derivativesExchangesId = await client.derivatives.exchanges.getId("binance_futures");
    },
  },

  {
    operation: "getList",
    method: "GET",
    path: "/derivatives/exchanges/list",
    run: async () => {
      const derivativesExchangesList = await client.derivatives.exchanges.getList();
    },
  },

  {
    operation: "getList",
    method: "GET",
    path: "/entities/list",
    run: async () => {
      const entitiesList = await client.entities.getList();
    },
  },

  {
    operation: "getCoinId",
    method: "GET",
    path: "/{entity}/public_treasury/{coin_id}",
    run: async () => {
      const publicTreasury = await client.publicTreasury.getCoinId("companies", "bitcoin");
    },
  },

  {
    operation: "getEntityId",
    method: "GET",
    path: "/public_treasury/{entity_id}",
    run: async () => {
      const entity = await client.publicTreasury.getEntityId("strategy");
    },
  },

  {
    operation: "getHoldingChart",
    method: "GET",
    path: "/public_treasury/{entity_id}/{coin_id}/holding_chart",
    run: async () => {
      const entityChart = await client.publicTreasury.getHoldingChart("strategy", "bitcoin", {
        days: "365",
      });
    },
  },

  {
    operation: "getTransactionHistory",
    method: "GET",
    path: "/public_treasury/{entity_id}/transaction_history",
    run: async () => {
      const transactionHistory = await client.publicTreasury.getTransactionHistory("strategy");
    },
  },

  {
    operation: "getList",
    method: "GET",
    path: "/nfts/list",
    run: async () => {
      const nfTsList = await client.nfts.getList();
    },
  },

  {
    operation: "getId",
    method: "GET",
    path: "/nfts/{id}",
    run: async () => {
      const data = await client.nfts.getId("pudgy-penguins");
    },
  },

  {
    operation: "getMarkets",
    method: "GET",
    path: "/nfts/markets",
    run: async () => {
      const nfTsMarkets = await client.nfts.getMarkets();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/nfts/{id}/market_chart",
    run: async () => {
      const nftMarketChart = await client.nfts.marketChart.get("pudgy-penguins", {
        days: "1",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/nfts/{id}/tickers",
    run: async () => {
      const nftTickers = await client.nfts.tickers.get("pudgy-penguins");
    },
  },

  {
    operation: "getContractAddress",
    method: "GET",
    path: "/nfts/{asset_platform_id}/contract/{contract_address}",
    run: async () => {
      const nftData = await client.nfts.contract.getContractAddress("ethereum", "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/nfts/{asset_platform_id}/contract/{contract_address}/market_chart",
    run: async () => {
      const nftMarketChart = await client.nfts.contract.marketChart.get("ethereum", "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", {
        days: "1",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/exchange_rates",
    run: async () => {
      const s = await client.exchangeRates.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/news",
    run: async () => {
      const s = await client.news.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/global",
    run: async () => {
      const global = await client.global.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/global/decentralized_finance_defi",
    run: async () => {
      const globalDeFi = await client.global.decentralizedFinanceDefi.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/global/market_cap_chart",
    run: async () => {
      const globalMarketCapChart = await client.global.marketCapChart.get({
        days: "1",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/tokens/info_recently_updated",
    run: async () => {
      const tokenInfoRecentlyUpdated = await client.onchain.tokens.infoRecentlyUpdated.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/search/pools",
    run: async () => {
      const search = await client.onchain.search.pools.get({
        query: "weth",
      });
    },
  },

  {
    operation: "getAddresses",
    method: "GET",
    path: "/onchain/simple/networks/{network}/token_price/{addresses}",
    run: async () => {
      const onchainSimplePrice = await client.onchain.simple.networks.tokenPrice.getAddresses("eth", "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks",
    run: async () => {
      const sList = await client.onchain.networks.get();
    },
  },

  {
    operation: "getAddress",
    method: "GET",
    path: "/onchain/networks/{network}/pools/{address}",
    run: async () => {
      const addressData = await client.onchain.networks.pools.getAddress("eth", "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/pools",
    run: async () => {
      const pool = await client.onchain.networks.pools.get("eth");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/pools/{pool_address}/info",
    run: async () => {
      const poolTokensInfo = await client.onchain.networks.pools.info.get("solana", "8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt");
    },
  },

  {
    operation: "getTimeframe",
    method: "GET",
    path: "/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}",
    run: async () => {
      const ohlcv = await client.onchain.networks.pools.ohlcv.getTimeframe("eth", "0x06da0fd433c1a5d7a4faa01111c044910a184553", "day");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/pools/{pool_address}/trades",
    run: async () => {
      const s = await client.onchain.networks.pools.trades.get("eth", "0x06da0fd433c1a5d7a4faa01111c044910a184553");
    },
  },

  {
    operation: "getAddresses",
    method: "GET",
    path: "/onchain/networks/{network}/pools/multi/{addresses}",
    run: async () => {
      const poolAddressData = await client.onchain.networks.pools.multi.getAddresses("eth", "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/trending_pools",
    run: async () => {
      const pool = await client.onchain.networks.trendingPools.get();
    },
  },

  {
    operation: "getNetwork",
    method: "GET",
    path: "/onchain/networks/{network}/trending_pools",
    run: async () => {
      const pool = await client.onchain.networks.trendingPools.getNetwork("eth");
    },
  },

  {
    operation: "getPools",
    method: "GET",
    path: "/onchain/networks/{network}/dexes/{dex}/pools",
    run: async () => {
      const pool = await client.onchain.networks.dexes.getPools("eth", "sushiswap");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/dexes",
    run: async () => {
      const sList = await client.onchain.networks.dexes.get("eth");
    },
  },

  {
    operation: "getAddress",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{address}",
    run: async () => {
      const data = await client.onchain.networks.tokens.getAddress("eth", "0xdac17f958d2ee523a2206206994597c13d831ec7");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{token_address}/pools",
    run: async () => {
      const pool = await client.onchain.networks.tokens.pools.get("eth", "0xdac17f958d2ee523a2206206994597c13d831ec7");
    },
  },

  {
    operation: "getAddresses",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/multi/{addresses}",
    run: async () => {
      const tokenData = await client.onchain.networks.tokens.multi.getAddresses("solana", "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN,2g4LS3y2myPe6vj9wTvoBE1wKqxvhnZPoZA9QU9upump");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{address}/info",
    run: async () => {
      const tokenInfo = await client.onchain.networks.tokens.info.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network_id}/tokens/{token_address}/top_traders",
    run: async () => {
      const topTokenTraders = await client.onchain.networks.tokens.topTraders.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{address}/top_holders",
    run: async () => {
      const topTokenHolders = await client.onchain.networks.tokens.topHolders.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{token_address}/holders_chart",
    run: async () => {
      const tokenHoldersChart = await client.onchain.networks.tokens.holdersChart.get("solana", "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump");
    },
  },

  {
    operation: "getTimeframe",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{token_address}/ohlcv/{timeframe}",
    run: async () => {
      const ohlcv = await client.onchain.networks.tokens.ohlcv.getTimeframe("solana", "So11111111111111111111111111111111111111112", "day");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{token_address}/trades",
    run: async () => {
      const tokenTrades = await client.onchain.networks.tokens.trades.get("eth", "0xdac17f958d2ee523a2206206994597c13d831ec7");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/new_pools",
    run: async () => {
      const pool = await client.onchain.networks.newPools.get();
    },
  },

  {
    operation: "getNetwork",
    method: "GET",
    path: "/onchain/networks/{network}/new_pools",
    run: async () => {
      const pool = await client.onchain.networks.newPools.getNetwork("eth");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/pools/megafilter",
    run: async () => {
      const pool = await client.onchain.pools.megafilter.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/pools/trending_search",
    run: async () => {
      const pools = await client.onchain.pools.trendingSearch.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/categories",
    run: async () => {
      const onchainCategoriesList = await client.onchain.categories.get();
    },
  },

  {
    operation: "getPools",
    method: "GET",
    path: "/onchain/categories/{category_id}/pools",
    run: async () => {
      const categoriesPools = await client.onchain.categories.getPools("pump-fun");
    },
  },

]

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER']
  const needles = filter ? filter.split(',').map((needle) => needle.trim()).filter(Boolean) : []
  const selected = needles.length > 0 ? cases.filter((testCase) => needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle))) : cases

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now()
      try {
        await testCase.run()
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'passed', durationMs: Date.now() - startedAt }
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error)
        return { operation: testCase.operation, method: testCase.method, path: testCase.path, status: 'failed', durationMs: Date.now() - startedAt, error: message }
      }
    }),
  )

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) => (result.status === 'fulfilled' ? result.value : { operation: 'unknown', method: '', path: '', status: 'failed', durationMs: 0, error: String(result.reason) }))
  const failed = results.filter((result) => result.status === 'failed')

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT']
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }))
  } else {
    for (const result of results) {
      if (result.status === 'passed') console.log(`\u2714 ${result.operation} (${result.method} ${result.path}) ${result.durationMs}ms`)
      else console.error(`\u2718 ${result.operation} (${result.method} ${result.path})\n${result.error ?? ''}`)
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).')
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`)
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1
}

void main()
