<template>
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
</template>