<template>
  <v-container class="fill-height mb-12">
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <h2>Popular Products <v-btn to="store" text small color="primary">View All</v-btn></h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col
            sm="6"
            md="4"
            v-for="(product, i) in products.slice(0, 3)"
            :key="product.name"
          >
            <VerticalProduct :product="product" :i="i" :addToCart="addToCart" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import VerticalProduct from '@/components/cards/VerticalProduct.vue'

export default {
  components: {
    VerticalProduct
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['products', 'cart'])
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
