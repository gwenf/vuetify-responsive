<template>
  <v-container class="fill-height mb-12">
    <v-row>
      <v-col col-sm="10" offset-sm="1" col-md="8" offset-md="2">
        <h2>Popular Products <v-btn to="store" text small color="primary">View All</v-btn></h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col col-sm="10" offset-sm="1" col-md="8" offset-md="2">
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            col-sm="2"
            v-for="(product, i) in products.slice(0, 3)"
            :key="product.name"
          >
            <v-card
              max-width="344"
              outlined
            >
              <v-img
                :src="product.image"
                height="200px"
              />

              <v-card-title>
                {{ product.name }}
              </v-card-title>

              <v-card-subtitle>
                ${{ product.price }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  color="success"
                  outlined
                  @click="addToCart(i)"
                >
                  <v-icon>mdi-plus</v-icon>
                  Add to Cart
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
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
