<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link
      to="/"
      class="navbar-brand"
    >
      Stock Trader
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"/>
    </button>

    <div
      id="navbarSupportedContent"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav mr-auto">
        <router-link
          to="/portfolio"
          active-class="active"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Portfolio</a>
        </router-link>
        <router-link
          to="/stocks"
          active-class="active"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li>
          <a
            class="nav-link"
            href="#"
            @click="endDay"
          >
            End Day
          </a>
        </li>
        <li
          :class="{ show: dropdownVisible }"
          class="nav-item dropdown"
        >
          <a
            id="navbarDropdown"
            :aria-expanded="dropdownVisible.toString()"
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            @click="dropdownVisible = !dropdownVisible"
          >
            Save & Load
          </a>
          <div
            :class="{ show: dropdownVisible }"
            class="dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <a
              class="dropdown-item"
              href="#"
              @click="saveData"
            >
              Save Data
            </a>
            <a
              class="dropdown-item"
              href="#"
              @click="loadData"
            >
              Load Data
            </a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text float-right ml-5">Funds: {{ funds | currency }}</strong>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import api from '@/api'

export default {
  name: 'Header',
  data () {
    return {
      dropdownVisible: false
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay () {
      this.randomizeStocks()
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }

      api.saveData(data)
      this.dropdownVisible = false
    },
    loadData () {
      this.fetchData()
      this.dropdownVisible = false
    }
  }
}
</script>
