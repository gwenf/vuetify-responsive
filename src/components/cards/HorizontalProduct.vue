<template>
  <v-card
    outlined
    min-width="100%"
    class="mb-5 pa-4"
  >
    <div class="d-flex">
      <div>
        <v-img
          :src="product.image"
          width="120px"
          height="120px"
        />
      </div>

      <!-- <v-spacer></v-spacer> -->

      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">
          {{ product.name }}
        </v-card-title>

        <v-card-subtitle>
          ${{ product.price }}
        </v-card-subtitle>

        <v-btn
          v-if="btnAction === 'remove'"
          color="error"
          class="ml-4"
          outlined
          small
          @click="updateCart(i)"
        >
          <v-icon small>mdi-minus</v-icon>
          Remove from Cart
        </v-btn>
        <v-btn
          v-else
          color="success"
          small
          outlined
          @click="updateCart(i)"
        >
          <v-icon small>mdi-plus</v-icon>
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
