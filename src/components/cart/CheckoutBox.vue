<template>
  <div>
    <v-card
      outlined
    >
      <v-card-title>Payment Details</v-card-title>

      <v-card-text>
        <p>Total: $999</p>
        <v-btn
          color="primary"
          @click="goToCheckout"
        >
          Checkout
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkoutForm: null,
      nameRules: [],
      name: '',
      emailRules: [],
      email: ''
    }
  },
  methods: {
    goToCheckout() {
      this.$router.push({ name: 'checkout' })
    }
  }
}
</script>
