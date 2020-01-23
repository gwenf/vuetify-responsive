<template>
  <div>
    <v-card
      outlined
    >
      <v-card-title>Payment Details</v-card-title>

      <v-card-text>
        <v-form
          ref="form"
          v-model="checkoutForm"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
          />

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          />

          <v-btn
            color="primary"
            @click="submit"
          >
            Submit
          </v-btn>
        </v-form>
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
    submit() {

    }
  }
}
</script>
