<template>
  <v-app id="new-contact ">
    <v-app-bar app color="primary" dark>
      <div>
        <h2>Contact Manager</h2>
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
            <v-col cols="12">
              <v-text-field
                label="database Id"
                type="text"
                required
                readonly
                v-model="database_id"
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
        <v-btn color="primary" @click="generateId">
          Auto-Id
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
      job_title: null,
      database_id: null
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
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data().id);
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
    generateId() {
      let symbols = "!@#$%^&*";
      let upperCase = String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      let lowerCase = String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      let number = String.fromCharCode(Math.floor(Math.random() * 26 + 97));

      const randomId = symbols
        .concat(lowerCase)
        .split("")
        .reverse()
        .join("")
        .concat(number)
        .split("")
        .reverse("")
        .join("")
        .concat(upperCase);
      console.log(randomId);
      this.database_id = randomId;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");
h2 {
  font-family: "Nunito", sans-serif !important;
  font-size: calc(14px + (20 - 10) * ((100vw - 435px) / (1200 - 200)));
}
</style>
