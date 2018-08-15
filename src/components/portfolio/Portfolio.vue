<template>
  <div :class="{ 'w-100': !stocks.length, 'card-deck': stocks.length }">
    <portfolio-stock
      v-for="stock in stocks"
      :stock="stock"
      :key="stock.id"
    />
    <div
      v-if="!stocks.length"
      class="alert alert-warning text-center"
      role="alert"
    >
      Your portfolio is empty.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PortfolioStock from '@/components/portfolio/PortfolioStock'

export default {
  name: 'Portfolio',
  components: {
    PortfolioStock
  },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>
