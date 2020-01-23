<template>
  <v-container>
    <v-row>
      <v-col sm="3" offset-sm="1">
        <Sidebar />
      </v-col>
      <v-col sm="7">
        <ProductDisplay />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Sidebar from '@/components/store/Sidebar.vue'
import ProductDisplay from '@/components/store/ProductDisplay.vue'

export default {
  components: {
    Sidebar,
    ProductDisplay
  }
}
</script>
