<template>
  <v-card
    outlined
    min-width="100%"
    class="mb-5"
  >
    <div class="d-flex">
      <div>
        <v-img
          :src="product.image"
          width="200px"
          height="200px"
        />
      </div>

      <v-spacer></v-spacer>

      <div>
        <v-card-title>
          {{ product.name }}
        </v-card-title>

        <v-card-subtitle>
          ${{ product.price }}
        </v-card-subtitle>

        <v-btn
          v-if="btnAction === 'remove'"
          color="error"
          outlined
          @click="updateCart(i)"
        >
          <v-icon>mdi-minus</v-icon>
          Remove from Cart
        </v-btn>
        <v-btn
          v-else
          color="success"
          outlined
          @click="updateCart(i)"
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
    updateCart: VueTypes.func.isRequired,
    btnAction: VueTypes.string.isRequired,
    i: VueTypes.integer.isRequired
  }
}
</script>
