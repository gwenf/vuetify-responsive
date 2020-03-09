<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset-sm="3" xl="4" offset-xl="4">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="e1 > 1"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3"></v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">

              <v-text-field
                v-model="formData.name"
                :rules="nameRules"
                label="Name"
                required
              />

              <v-text-field
                v-model="formData.email"
                :rules="emailRules"
                label="E-mail"
                required
              />

              <v-text-field
                v-model="formData.phone"
                :rules="phoneRules"
                label="Phone Number"
                required
              />

              <v-btn
                color="primary"
                @click="e1 = 2"
              >
                Continue
              </v-btn>
              <v-btn text>
                Cancel
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-text-field
                v-model="formData.street"
                label="Street Address"
                required
              />

              <v-text-field
                v-model="formData.state"
                label="State"
                required
              />

              <v-text-field
                v-model="formData.zip"
                label="Zip"
                type="number"
                required
              />

              <v-btn
                color="primary"
                @click="e1 = 3"
              >
                Continue
              </v-btn>

              <v-btn text @click="e1 = 1">
                Go Back
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-list
                disabled
                dense
              >
                <v-subheader class="title">
                  Review Order
                </v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item
                    v-for="(value, name) in formData"
                    :key="name"
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ name }}: {{ value }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

              <v-btn
                color="primary"
                @click="submitOrder"
              >
                Submit
              </v-btn>

              <v-btn text @click="e1 = 1">
                Go Back
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      checkoutForm: false,
      formData: {
        email: '',
        name: '',
        phone: '',
        street: '',
        state: '',
        zip: null
      },
      nameRules: [],
      emailRules: [],
      phoneRules: []
    }
  },
  methods: {
    submitOrder() {
      // set loader
      // navigate to thank you
    }
  }
}
</script>
