import * as types from '@/store/mutation-types'
import api from '@/api'

export const loadData = async ({ commit }) => {
  const request = await api.loadData()

  if (request.status !== 200 || !Object.keys(request.data).length) {
    return
  }

  const portfolio = {
    stockPortfolio: request.data.stockPortfolio,
    funds: request.data.funds
  }

  commit(types.SET_STOCKS, request.data.stocks)
  commit(types.SET_PORTFOLIO, portfolio)
}
