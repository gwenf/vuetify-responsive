<template>
  <v-container>
    <v-row>
      <v-col sm="4" offset-sm="2" xl="4" offset-xl="2">
        <ProductList />
      </v-col>
      <v-col sm="4" xl="3">
        <CheckoutForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductList from '@/components/cart/ProductList.vue'
import CheckoutForm from '@/components/cart/CheckoutForm.vue'

export default {
  components: {
    ProductList,
    CheckoutForm
  }
}
</script>
