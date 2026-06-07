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
import CoingeckoProApiTypescript from "@coin-gecko/coingecko-pro-api"

// One shared client runs every case.
const client = new CoingeckoProApiTypescript()

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
    operation: "server",
    method: "GET",
    path: "/ping",
    run: async () => {
      const ping = await client.ping.server();
    },
  },

  {
    operation: "apiUsage",
    method: "GET",
    path: "/key",
    run: async () => {
      const key = await client.key.apiUsage();
    },
  },

  {
    operation: "price",
    method: "GET",
    path: "/simple/price",
    run: async () => {
      const price = await client.simple.price({
        vs_currencies: "usd",
        ids: "bitcoin",
        names: "Bitcoin",
        symbols: "btc",
      });
    },
  },

  {
    operation: "tokenPrice",
    method: "GET",
    path: "/simple/token_price/{id}",
    run: async () => {
      const tokenPrice = await client.simple.tokenPrice("ethereum", {
        contract_addresses: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        vs_currencies: "usd",
      });
    },
  },

  {
    operation: "supportedCurrencies",
    method: "GET",
    path: "/simple/supported_vs_currencies",
    run: async () => {
      const currencyList = await client.simple.supportedCurrencies();
    },
  },

  {
    operation: "data",
    method: "GET",
    path: "/search",
    run: async () => {
      const search = await client.search.data({
        query: "query",
      });
    },
  },

  {
    operation: "topGainersLosers",
    method: "GET",
    path: "/coins/top_gainers_losers",
    run: async () => {
      const topGainersLosers = await client.coins.topGainersLosers({
        vs_currency: "usd",
      });
    },
  },

  {
    operation: "markets",
    method: "GET",
    path: "/coins/markets",
    run: async () => {
      const sMarkets = await client.coins.markets({
        vs_currency: "usd",
        ids: "bitcoin",
        names: "Bitcoin",
        symbols: "btc",
        category: "layer-1",
        price_change_percentage: "1h",
        include_rehypothecated: false,
      });
    },
  },

  {
    operation: "id",
    method: "GET",
    path: "/coins/{id}",
    run: async () => {
      const sId = await client.coins.id("bitcoin");
    },
  },

  {
    operation: "idTickers",
    method: "GET",
    path: "/coins/{id}/tickers",
    run: async () => {
      const sTickers = await client.coins.idTickers("bitcoin", {
        exchange_ids: "binance",
      });
    },
  },

  {
    operation: "idHistory",
    method: "GET",
    path: "/coins/{id}/history",
    run: async () => {
      const sHistoricalData = await client.coins.idHistory("bitcoin", {
        date: "2024-01-01",
      });
    },
  },

  {
    operation: "coins",
    method: "GET",
    path: "/coins/list",
    run: async () => {
      const coinsList = await client.coins.list.coins();
    },
  },

  {
    operation: "coinsNew",
    method: "GET",
    path: "/coins/list/new",
    run: async () => {
      const coinsListNew = await client.coins.list.coinsNew();
    },
  },

  {
    operation: "coinsId",
    method: "GET",
    path: "/coins/{id}/market_chart",
    run: async () => {
      const coinsMarketChart = await client.coins.marketChart.coinsId("bitcoin", {
        vs_currency: "usd",
        days: "1",
      });
    },
  },

  {
    operation: "coinsIdRange",
    method: "GET",
    path: "/coins/{id}/market_chart/range",
    run: async () => {
      const coinsMarketChartRange = await client.coins.marketChart.coinsIdRange("bitcoin", {
        vs_currency: "usd",
        from: "2024-01-01",
        to: "2024-12-31",
      });
    },
  },

  {
    operation: "coinsId",
    method: "GET",
    path: "/coins/{id}/ohlc",
    run: async () => {
      const coinsOhlc = await client.coins.ohlc.coinsId("bitcoin", {
        vs_currency: "usd",
        days: "1",
      });
    },
  },

  {
    operation: "coinsIdRange",
    method: "GET",
    path: "/coins/{id}/ohlc/range",
    run: async () => {
      const coinsOhlc = await client.coins.ohlc.coinsIdRange("bitcoin", {
        vs_currency: "usd",
        from: "2024-01-01",
        to: "2024-12-31",
        interval: "daily",
      });
    },
  },

  {
    operation: "coinsId",
    method: "GET",
    path: "/coins/{id}/circulating_supply_chart",
    run: async () => {
      const base = await client.coins.circulatingSupplyChart.coinsId("bitcoin", {
        days: "1",
      });
    },
  },

  {
    operation: "coinsIdRange",
    method: "GET",
    path: "/coins/{id}/circulating_supply_chart/range",
    run: async () => {
      const base = await client.coins.circulatingSupplyChart.coinsIdRange("bitcoin", {
        from: "2024-01-01",
        to: "2024-12-31",
      });
    },
  },

  {
    operation: "coinsId",
    method: "GET",
    path: "/coins/{id}/total_supply_chart",
    run: async () => {
      const base = await client.coins.totalSupplyChart.coinsId("bitcoin", {
        days: "1",
      });
    },
  },

  {
    operation: "coinsIdRange",
    method: "GET",
    path: "/coins/{id}/total_supply_chart/range",
    run: async () => {
      const base = await client.coins.totalSupplyChart.coinsIdRange("bitcoin", {
        from: "2024-01-01",
        to: "2024-12-31",
      });
    },
  },

  {
    operation: "coinsAddress",
    method: "GET",
    path: "/coins/{id}/contract/{contract_address}",
    run: async () => {
      const coinsContractAddress = await client.contract.coinsAddress("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48");
    },
  },

  {
    operation: "addressMarketChart",
    method: "GET",
    path: "/coins/{id}/contract/{contract_address}/market_chart",
    run: async () => {
      const coinsMarketChart = await client.contract.addressMarketChart("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
        vs_currency: "usd",
        days: "1",
      });
    },
  },

  {
    operation: "addressMarketChartRange",
    method: "GET",
    path: "/coins/{id}/contract/{contract_address}/market_chart/range",
    run: async () => {
      const coinsMarketChartRange = await client.contract.addressMarketChartRange("ethereum", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", {
        vs_currency: "usd",
        from: "2024-01-01",
        to: "2024-12-31",
      });
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/asset_platforms",
    run: async () => {
      const s = await client.assetPlatforms.list();
    },
  },

  {
    operation: "tokenLists",
    method: "GET",
    path: "/token_lists/{asset_platform_id}/all.json",
    run: async () => {
      const tokenLists = await client.assetPlatforms.tokenLists("ethereum");
    },
  },

  {
    operation: "coinsList",
    method: "GET",
    path: "/coins/categories/list",
    run: async () => {
      const categoriesList = await client.categories.coinsList();
    },
  },

  {
    operation: "coins",
    method: "GET",
    path: "/coins/categories",
    run: async () => {
      const categories = await client.categories.coins();
    },
  },

  {
    operation: "exchanges",
    method: "GET",
    path: "/exchanges",
    run: async () => {
      const s = await client.exchanges.exchanges();
    },
  },

  {
    operation: "list",
    method: "GET",
    path: "/exchanges/list",
    run: async () => {
      const sList = await client.exchanges.list();
    },
  },

  {
    operation: "id",
    method: "GET",
    path: "/exchanges/{id}",
    run: async () => {
      const data = await client.exchanges.id("binance");
    },
  },

  {
    operation: "idTickers",
    method: "GET",
    path: "/exchanges/{id}/tickers",
    run: async () => {
      const tickers = await client.exchanges.idTickers("binance", {
        coin_ids: "bitcoin",
      });
    },
  },

  {
    operation: "exchangesId",
    method: "GET",
    path: "/exchanges/{id}/volume_chart",
    run: async () => {
      const exchangeVolumeChart = await client.exchanges.volumeChart.exchangesId("binance", {
        days: "1",
      });
    },
  },

  {
    operation: "exchangesIdRange",
    method: "GET",
    path: "/exchanges/{id}/volume_chart/range",
    run: async () => {
      const exchangeVolumeChart = await client.exchanges.volumeChart.exchangesIdRange("binance", {
        from: "1672531200",
        to: "1675123200",
      });
    },
  },

  {
    operation: "tickers",
    method: "GET",
    path: "/derivatives",
    run: async () => {
      const sTickersList = await client.derivatives.tickers();
    },
  },

  {
    operation: "derivatives",
    method: "GET",
    path: "/derivatives/exchanges",
    run: async () => {
      const derivativesExchanges = await client.derivatives.exchanges.derivatives();
    },
  },

  {
    operation: "derivativesId",
    method: "GET",
    path: "/derivatives/exchanges/{id}",
    run: async () => {
      const derivativesExchangesId = await client.derivatives.exchanges.derivativesId("binance_futures");
    },
  },

  {
    operation: "derivativesList",
    method: "GET",
    path: "/derivatives/exchanges/list",
    run: async () => {
      const derivativesExchangesList = await client.derivatives.exchanges.derivativesList();
    },
  },

  {
    operation: "entitiesList",
    method: "GET",
    path: "/entities/list",
    run: async () => {
      const entitiesList = await client.publicTreasury.entitiesList();
    },
  },

  {
    operation: "companies",
    method: "GET",
    path: "/{entity}/public_treasury/{coin_id}",
    run: async () => {
      const publicTreasury = await client.publicTreasury.companies("companies", "bitcoin", {
        per_page: 250,
        page: 1,
        order: "total_holdings_usd_desc",
      });
    },
  },

  {
    operation: "entity",
    method: "GET",
    path: "/public_treasury/{entity_id}",
    run: async () => {
      const entity = await client.publicTreasury.entity("strategy");
    },
  },

  {
    operation: "entityChart",
    method: "GET",
    path: "/public_treasury/{entity_id}/{coin_id}/holding_chart",
    run: async () => {
      const entityChart = await client.publicTreasury.entityChart("strategy", "bitcoin", {
        days: "365",
        include_empty_intervals: false,
      });
    },
  },

  {
    operation: "transactionHistory",
    method: "GET",
    path: "/public_treasury/{entity_id}/transaction_history",
    run: async () => {
      const transactionHistory = await client.publicTreasury.transactionHistory("strategy", {
        per_page: 100,
        page: 1,
        order: "date_desc",
      });
    },
  },

  {
    operation: "nftsList",
    method: "GET",
    path: "/nfts/list",
    run: async () => {
      const nftList = await client.nfTsBeta.nftsList();
    },
  },

  {
    operation: "nftsId",
    method: "GET",
    path: "/nfts/{id}",
    run: async () => {
      const nftData = await client.nfTsBeta.nftsId("pudgy-penguins");
    },
  },

  {
    operation: "nftsContractAddress",
    method: "GET",
    path: "/nfts/{asset_platform_id}/contract/{contract_address}",
    run: async () => {
      const nftData = await client.nfTsBeta.nftsContractAddress("ethereum", "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8");
    },
  },

  {
    operation: "nftsMarkets",
    method: "GET",
    path: "/nfts/markets",
    run: async () => {
      const nfTsMarkets = await client.nfTsBeta.nftsMarkets({
        asset_platform_id: "ethereum",
      });
    },
  },

  {
    operation: "nftsIdMarketChart",
    method: "GET",
    path: "/nfts/{id}/market_chart",
    run: async () => {
      const nftMarketChart = await client.nfTsBeta.nftsIdMarketChart("pudgy-penguins", {
        days: "1",
      });
    },
  },

  {
    operation: "nftsContractAddressMarketChart",
    method: "GET",
    path: "/nfts/{asset_platform_id}/contract/{contract_address}/market_chart",
    run: async () => {
      const nftMarketChart = await client.nfTsBeta.nftsContractAddressMarketChart("ethereum", "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", {
        days: "1",
      });
    },
  },

  {
    operation: "nftsIdTickers",
    method: "GET",
    path: "/nfts/{id}/tickers",
    run: async () => {
      const nftTickers = await client.nfTsBeta.nftsIdTickers("pudgy-penguins");
    },
  },

  {
    operation: "exchangeRates",
    method: "GET",
    path: "/exchange_rates",
    run: async () => {
      const s = await client.exchangeRates.exchangeRates();
    },
  },

  {
    operation: "search",
    method: "GET",
    path: "/search/trending",
    run: async () => {
      const search = await client.trending.search({
        show_max: "coins",
      });
    },
  },

  {
    operation: "news",
    method: "GET",
    path: "/news",
    run: async () => {
      const s = await client.news.news({
        page: 1,
        per_page: 10,
        language: "en",
        type: "all",
      });
    },
  },

  {
    operation: "crypto",
    method: "GET",
    path: "/global",
    run: async () => {
      const global = await client.global.crypto();
    },
  },

  {
    operation: "deFi",
    method: "GET",
    path: "/global/decentralized_finance_defi",
    run: async () => {
      const deFi = await client.global.deFi();
    },
  },

  {
    operation: "marketCapChart",
    method: "GET",
    path: "/global/market_cap_chart",
    run: async () => {
      const marketCapChart = await client.global.marketCapChart({
        days: "1",
        vs_currency: "usd",
      });
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
