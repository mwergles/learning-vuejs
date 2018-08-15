<template>
  <div class="card-deck">
    <stock
      v-for="stock in stocks"
      :stock="stock"
      :key="stock.id"
    />
  </div>
</template>

<script>
import Stock from '@/components/stocks/Stock'

export default {
  name: 'Stocks',
  components: {
    Stock
  },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>
