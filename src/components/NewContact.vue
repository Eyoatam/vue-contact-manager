<template>
  <v-app id="new-contact ">
    <v-app-bar app color="primary" dark>
      <div>
        <h2 class="display-1">New</h2>
      </div>
    </v-app-bar>
    <v-card>
      <v-card-title>
        <span class="headline">Your New Contact</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                label="Name*"
                required
                v-model="name"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Email*"
                required
                v-model="email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Contact Id*"
                required
                v-model="contact_id"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Job Title*"
                type="text"
                required
                v-model="job_title"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text router to="/">
          Close
        </v-btn>
        <v-btn color="primary" @click="submitForm">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import { db } from "@/main";
export default {
  name: "new-contatcs",
  data() {
    return {
      name: null,
      email: null,
      contact_id: null,
      job_title: null
    };
  },
  methods: {
    submitForm() {
      db.collection("contacts")
        .add({
          name: this.name,
          email: this.email,
          contact_id: this.contact_id,
          job_title: this.job_title
        })
        .then(ref => {
          this.$router.push("/");
          console.log(ref);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
