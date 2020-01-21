<template>
  <v-app>
    <TopNav />
    <router-view></router-view>
  </v-app>
</template>

<script>
import TopNav from './components/TopNav.vue'

export default {
  name: 'app',
  components: {
    TopNav
  }
}
</script>
