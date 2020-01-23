<template>
  <v-card
    outlined
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-img
        :src="product.image"
        width="200px"
        height="200px"
      />

      <div>
        <v-card-title>
          {{ product.name }}
        </v-card-title>

        <v-card-subtitle>
          ${{ product.price }}
        </v-card-subtitle>

        <v-btn
          color="success"
          outlined
          @click="addToCart(i)"
        >
          <v-icon>mdi-plus</v-icon>
          Add to Cart
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  props: {
    product: VueTypes.shape({
      name: VueTypes.string.isRequired,
      price: VueTypes.number.isRequired,
      image: VueTypes.string.isRequired
    }),
    addToCart: VueTypes.func,
    removeFromCart: VueTypes.func,
    i: VueTypes.integer.isRequired
  }
}
</script>
