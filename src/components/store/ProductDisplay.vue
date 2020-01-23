<template>
  <div>
    <h3>Products</h3>
    <!-- list of product cards that wraps -->
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="(product, i) in products"
        :key="product.name"
      >
        <VerticalProduct :product="product" :i="i" :addToCart="addToCart" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VerticalProduct from '@/components/cards/VerticalProduct.vue'

export default {
  components: {
    VerticalProduct
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapMutations(['updateSnackbar', 'addItemToCart']),
    addToCart(index, quantity = 1) {
      this.addItemToCart({ itemId: index, quantity })
      this.updateSnackbar({ show: true })
    }
  }
}
</script>
