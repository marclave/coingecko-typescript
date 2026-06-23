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
      const get_ = await client.ping.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/key",
    run: async () => {
      const get_ = await client.key.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/simple/price",
    run: async () => {
      const get_ = await client.simple.price.get({
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
      const get_ = await client.simple.supportedVsCurrencies.get();
    },
  },

  {
    operation: "getId",
    method: "GET",
    path: "/simple/token_price/{id}",
    run: async () => {
      const getID = await client.simple.tokenPrice.getID("ethereum", {
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
      const get_ = await client.search.trending.get();
    },
  },

  {
    operation: "getId",
    method: "GET",
    path: "/coins/{id}",
    run: async () => {
      const getID = await client.coins.getID("bitcoin");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/{id}/market_chart",
    run: async () => {
      const get_ = await client.coins.marketChart.get("bitcoin", {
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
      const getRange = await client.coins.marketChart.getRange("bitcoin", {
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
      const get_ = await client.coins.ohlc.get("bitcoin", {
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
      const getRange = await client.coins.ohlc.getRange("bitcoin", {
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
      const get_ = await client.coins.contract.get("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", {
        id: "ethereum",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/{id}/contract/{contract_address}/market_chart",
    run: async () => {
      const get_ = await client.coins.contract.marketChart.get("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
        id: "ethereum",
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
      const getRange = await client.coins.contract.marketChart.getRange("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
        id: "ethereum",
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
      const getNew = await client.coins.list.getNew();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/list",
    run: async () => {
      const get_ = await client.coins.list.get();
    },
  },

  {
    operation: "getList",
    method: "GET",
    path: "/coins/categories/list",
    run: async () => {
      const getList = await client.coins.categories.getList();
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
    path: "/coins/{id}/history",
    run: async () => {
      const get_ = await client.coins.history.get("bitcoin", {
        date: "2025-12-30",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/coins/markets",
    run: async () => {
      const get_ = await client.coins.markets.get({
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
      const get_ = await client.coins.tickers.get("bitcoin");
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
      const getAllJSON = await client.tokenLists.getAllJSON("ethereum");
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
      const getList = await client.exchanges.getList();
    },
  },

  {
    operation: "getId",
    method: "GET",
    path: "/exchanges/{id}",
    run: async () => {
      const getID = await client.exchanges.getID("binance");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/exchanges/{id}/volume_chart",
    run: async () => {
      const get_ = await client.exchanges.volumeChart.get("binance", {
        days: "1",
      });
    },
  },

  {
    operation: "getRange",
    method: "GET",
    path: "/exchanges/{id}/volume_chart/range",
    run: async () => {
      const getRange = await client.exchanges.volumeChart.getRange("binance", {
        from: "1767196800",
        to: "1769702400",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/exchanges/{id}/tickers",
    run: async () => {
      const get_ = await client.exchanges.tickers.get("binance");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/derivatives",
    run: async () => {
      const get_ = await client.derivatives.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/derivatives/exchanges",
    run: async () => {
      const get_ = await client.derivatives.exchanges.get();
    },
  },

  {
    operation: "getId",
    method: "GET",
    path: "/derivatives/exchanges/{id}",
    run: async () => {
      const getID = await client.derivatives.exchanges.getID("binance_futures");
    },
  },

  {
    operation: "getList",
    method: "GET",
    path: "/derivatives/exchanges/list",
    run: async () => {
      const getList = await client.derivatives.exchanges.getList();
    },
  },

  {
    operation: "getList",
    method: "GET",
    path: "/entities/list",
    run: async () => {
      const getList = await client.entities.getList();
    },
  },

  {
    operation: "getCoinId",
    method: "GET",
    path: "/{entity}/public_treasury/{coin_id}",
    run: async () => {
      const publicTreasury = await client.publicTreasury.getCoinID("bitcoin", {
        entity: "companies",
      });
    },
  },

  {
    operation: "getEntityId",
    method: "GET",
    path: "/public_treasury/{entity_id}",
    run: async () => {
      const getEntityID = await client.publicTreasury.getEntityID("strategy");
    },
  },

  {
    operation: "getHoldingChart",
    method: "GET",
    path: "/public_treasury/{entity_id}/{coin_id}/holding_chart",
    run: async () => {
      const getHoldingChart = await client.publicTreasury.getHoldingChart("bitcoin", {
        entity_id: "strategy",
        days: "365",
      });
    },
  },

  {
    operation: "getTransactionHistory",
    method: "GET",
    path: "/public_treasury/{entity_id}/transaction_history",
    run: async () => {
      const getTransactionHistory = await client.publicTreasury.getTransactionHistory("strategy");
    },
  },

  {
    operation: "getList",
    method: "GET",
    path: "/nfts/list",
    run: async () => {
      const getList = await client.nfts.getList();
    },
  },

  {
    operation: "getId",
    method: "GET",
    path: "/nfts/{id}",
    run: async () => {
      const getID = await client.nfts.getID("pudgy-penguins");
    },
  },

  {
    operation: "getMarkets",
    method: "GET",
    path: "/nfts/markets",
    run: async () => {
      const getMarkets = await client.nfts.getMarkets();
    },
  },

  {
    operation: "getContractAddress",
    method: "GET",
    path: "/nfts/{asset_platform_id}/contract/{contract_address}",
    run: async () => {
      const getContractAddress = await client.nfts.contract.getContractAddress("0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", {
        asset_platform_id: "ethereum",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/nfts/{asset_platform_id}/contract/{contract_address}/market_chart",
    run: async () => {
      const get_ = await client.nfts.contract.marketChart.get("0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", {
        asset_platform_id: "ethereum",
        days: "1",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/nfts/{id}/market_chart",
    run: async () => {
      const get_ = await client.nfts.marketChart.get("pudgy-penguins", {
        days: "1",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/nfts/{id}/tickers",
    run: async () => {
      const get_ = await client.nfts.tickers.get("pudgy-penguins");
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
      const get_ = await client.global.decentralizedFinanceDefi.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/global/market_cap_chart",
    run: async () => {
      const get_ = await client.global.marketCapChart.get({
        days: "1",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks",
    run: async () => {
      const get_ = await client.onchain.networks.get();
    },
  },

  {
    operation: "getPools",
    method: "GET",
    path: "/onchain/networks/{network}/dexes/{dex}/pools",
    run: async () => {
      const dexGetPools = await client.onchain.networks.dexes.getPools("sushiswap", {
        network: "eth",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/dexes",
    run: async () => {
      const dexGet = await client.onchain.networks.dexes.get("eth");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/new_pools",
    run: async () => {
      const get_ = await client.onchain.networks.newPools.get();
    },
  },

  {
    operation: "getNetwork",
    method: "GET",
    path: "/onchain/networks/{network}/new_pools",
    run: async () => {
      const getNetwork = await client.onchain.networks.newPools.getNetwork("eth");
    },
  },

  {
    operation: "getAddress",
    method: "GET",
    path: "/onchain/networks/{network}/pools/{address}",
    run: async () => {
      const getAddress = await client.onchain.networks.pools.getAddress("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640", {
        network: "eth",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/pools",
    run: async () => {
      const get_ = await client.onchain.networks.pools.get("eth");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/pools/{pool_address}/info",
    run: async () => {
      const get_ = await client.onchain.networks.pools.info.get("8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt", {
        network: "solana",
      });
    },
  },

  {
    operation: "getAddresses",
    method: "GET",
    path: "/onchain/networks/{network}/pools/multi/{addresses}",
    run: async () => {
      const getAddresses = await client.onchain.networks.pools.multi.getAddresses("0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640", {
        network: "eth",
      });
    },
  },

  {
    operation: "getTimeframe",
    method: "GET",
    path: "/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}",
    run: async () => {
      const getTimeframe = await client.onchain.networks.pools.ohlcv.getTimeframe("day", {
        network: "eth",
        pool_address: "0x06da0fd433c1a5d7a4faa01111c044910a184553",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/pools/{pool_address}/trades",
    run: async () => {
      const get_ = await client.onchain.networks.pools.trades.get("0x06da0fd433c1a5d7a4faa01111c044910a184553", {
        network: "eth",
      });
    },
  },

  {
    operation: "getAddress",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{address}",
    run: async () => {
      const getAddress = await client.onchain.networks.tokens.getAddress("0xdac17f958d2ee523a2206206994597c13d831ec7", {
        network: "eth",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{token_address}/holders_chart",
    run: async () => {
      const get_ = await client.onchain.networks.tokens.holdersChart.get("Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump", {
        network: "solana",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{address}/info",
    run: async () => {
      const get_ = await client.onchain.networks.tokens.info.get("Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump", {
        network: "solana",
      });
    },
  },

  {
    operation: "getAddresses",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/multi/{addresses}",
    run: async () => {
      const getAddresses = await client.onchain.networks.tokens.multi.getAddresses("6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN,2g4LS3y2myPe6vj9wTvoBE1wKqxvhnZPoZA9QU9upump", {
        network: "solana",
      });
    },
  },

  {
    operation: "getTimeframe",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{token_address}/ohlcv/{timeframe}",
    run: async () => {
      const getTimeframe = await client.onchain.networks.tokens.ohlcv.getTimeframe("day", {
        network: "solana",
        token_address: "So11111111111111111111111111111111111111112",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{token_address}/pools",
    run: async () => {
      const get_ = await client.onchain.networks.tokens.pools.get("0xdac17f958d2ee523a2206206994597c13d831ec7", {
        network: "eth",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{address}/top_holders",
    run: async () => {
      const get_ = await client.onchain.networks.tokens.topHolders.get("Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump", {
        network: "solana",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network_id}/tokens/{token_address}/top_traders",
    run: async () => {
      const get_ = await client.onchain.networks.tokens.topTraders.get("Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump", {
        network_id: "solana",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/{network}/tokens/{token_address}/trades",
    run: async () => {
      const get_ = await client.onchain.networks.tokens.trades.get("0xdac17f958d2ee523a2206206994597c13d831ec7", {
        network: "eth",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/networks/trending_pools",
    run: async () => {
      const get_ = await client.onchain.networks.trendingPools.get();
    },
  },

  {
    operation: "getNetwork",
    method: "GET",
    path: "/onchain/networks/{network}/trending_pools",
    run: async () => {
      const getNetwork = await client.onchain.networks.trendingPools.getNetwork("eth");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/pools/megafilter",
    run: async () => {
      const get_ = await client.onchain.pools.megafilter.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/pools/trending_search",
    run: async () => {
      const get_ = await client.onchain.pools.trendingSearch.get();
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/categories",
    run: async () => {
      const get_ = await client.onchain.categories.get();
    },
  },

  {
    operation: "getPools",
    method: "GET",
    path: "/onchain/categories/{category_id}/pools",
    run: async () => {
      const getPools = await client.onchain.categories.getPools("pump-fun");
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/search/pools",
    run: async () => {
      const get_ = await client.onchain.search.pools.get({
        query: "weth",
      });
    },
  },

  {
    operation: "getAddresses",
    method: "GET",
    path: "/onchain/simple/networks/{network}/token_price/{addresses}",
    run: async () => {
      const getAddresses = await client.onchain.simple.networks.tokenPrice.getAddresses("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", {
        network: "eth",
      });
    },
  },

  {
    operation: "get",
    method: "GET",
    path: "/onchain/tokens/info_recently_updated",
    run: async () => {
      const get_ = await client.onchain.tokens.infoRecentlyUpdated.get();
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
