<template>
  <div
    class="card mb-3"
    style="min-height: 180px"
  >
    <div class="card-header bg-success text-white">{{ stock.name }} <small>(Price: {{ stock.price }})</small></div>
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
              :disabled="quantity <= 0 || (quantity * stock.price) > funds"
              class="btn btn-success ml-2"
              @click.prevent="buy"
            >
              Buy
            </button>
          </div>
        </form>
        <p
          v-if="quantity && quantity * stock.price > funds"
          class="text-danger mt-2"
        >
          Insufficient funds!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stock',
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
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    buy () {
      const order = {
        stockId: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      }

      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>
