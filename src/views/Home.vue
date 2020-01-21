<template>
  <div>
    <Header />
    <PopularProducts />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import PopularProducts from '@/components/home/PopularProducts.vue'
import Footer from '@/components/home/Footer.vue'

export default {
  components: {
    Header,
    PopularProducts,
    Footer
  }
}
</script>
