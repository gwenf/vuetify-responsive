<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Awesome Shop</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- mobile menu button -->
      <span class="hidden-sm-and-up">
        <v-btn
          @click.stop="drawer = !drawer"
        >
          Menu
        </v-btn>
      </span>

      <!-- desktop & tablet menu -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn to="store" text>
          <v-icon>mdi-store</v-icon>
          Store
        </v-btn>
        <v-btn to="cart" text>
          <v-icon>mdi-cart</v-icon>
          Cart
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'Store', link: 'store', icon: 'store' },
        { title: 'Cart', link: 'cart', icon: 'cart' }
      ]
    }
  }
}
</script>
