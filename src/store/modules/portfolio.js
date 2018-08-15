import * as types from '@/store/mutation-types'

const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  [types.BUY_STOCK] (state, { stockId, quantity, price }) {
    if (state.funds < (price * quantity)) {
      return
    }

    let record = state.stocks.find(element => stockId === element.id)

    if (!record) {
      record = {
        id: stockId,
        quantity: 0
      }

      state.stocks.push(record)
    }

    record.quantity += quantity
    state.funds -= (price * quantity)
  },
  [types.SELL_STOCK] (state, { stockId, quantity, price }) {
    const record = state.stocks.find(element => stockId === element.id)

    if (record.quantity < quantity) {
      return
    }

    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else if (record.quantity === quantity) {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }

    state.funds += price * quantity
  },
  [types.SET_PORTFOLIO] (state, portfolio) {
    state.funds = portfolio.funds
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
  }
}

const actions = {
  sellStock ({ commit }, order) {
    commit(types.SELL_STOCK, order)
  }
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id)

      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds: state => state.funds
}

export default {
  state,
  mutations,
  actions,
  getters
}
