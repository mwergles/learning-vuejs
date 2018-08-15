<template>
  <div
    class="card mb-3"
    style="min-height: 180px"
  >
    <div class="card-header bg-info text-white">
      {{ stock.name }} <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
    </div>
    <div class="card-body">
      <div class="card-text">
        <form class="form-inline">
          <div class="form-group">
            <input
              v-model.number="quantity"
              type="number"
              class="form-control"
              placeholder="Quantity"
            >
            <button
              :disabled="quantity <= 0 || quantity > stock.quantity"
              class="btn btn-success ml-2"
              @click.prevent="sell"
            >
              Sell
            </button>
          </div>
        </form>
        <p
          v-if="quantity && quantity > stock.quantity"
          class="text-danger mt-2"
        >
          Stocks available {{ stock.quantity }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PortfolioStock',
  props: {
    stock: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions([
      'sellStock'
    ]),
    sell () {
      const order = {
        stockId: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      }

      // this.$store.dispatch('sellStock', order)
      this.sellStock(order)
      this.quantity = 0
    }
  }
}
</script>
