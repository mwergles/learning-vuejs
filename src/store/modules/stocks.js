import * as types from '@/store/mutation-types'
import stocks from '@/data/stocks'

const state = {
  stocks: []
}

const mutations = {
  [types.SET_STOCKS] (state, stocks) {
    state.stocks = stocks
  },
  [types.RND_STOCKS] (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (Math.random() + 0.5))
    })
  }
}

const actions = {
  buyStock ({ commit }, order) {
    commit(types.BUY_STOCK, order)
  },
  loadStocks ({ commit }) {
    commit(types.SET_STOCKS, stocks)
  },
  randomizeStocks ({ commit }) {
    commit(types.RND_STOCKS)
  }
}

const getters = {
  stocks: state => state.stocks
}

export default {
  state,
  mutations,
  actions,
  getters
}
