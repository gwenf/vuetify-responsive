<template>
  <v-container>
    <v-row>
      <v-col sm="4" offset-sm="2" xl="4" offset-xl="2">
        <ProductList />
      </v-col>
      <v-col sm="4" xl="3">
        <CheckoutBox />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductList from '@/components/cart/ProductList.vue'
import CheckoutBox from '@/components/cart/CheckoutBox.vue'

export default {
  components: {
    ProductList,
    CheckoutBox
  }
}
</script>
