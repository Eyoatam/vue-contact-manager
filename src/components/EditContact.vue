<template>
  <v-app id="edit-contacts">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2 class="display-1">Contact Manager</h2>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-card>
      <v-card-title>
        <span class="headline">Your New Contact</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field label="Name*" v-model="name"></v-text-field>
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
                disabled
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
        <v-btn color="primary" @click.prevent="updateContact">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import { db } from "@/main";
export default {
  name: "edit-contacts",
  data() {
    return {
      name: null,
      email: null,
      job_title: null,
      contact_id: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("contacts")
      .where("contact_id", "==", to.params.contact_id)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          next(vm => {
            (vm.contact_id = doc.data().contact_id),
              (vm.name = doc.data().name),
              (vm.email = doc.data().email),
              (vm.job_title = doc.data().job_title);
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db.collection("contacts")
        .where("contact_id", "==", this.$route.params.contact_id)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            (this.contact_id = doc.data().contact_id),
              (this.name = doc.data().name),
              (this.email = doc.data().email),
              (this.job_title = doc.data().job_title);
          });
        });
    },
    updateContact() {
      db.collection("contacts")
        .where("contact_id", "==", this.$route.params.contact_id)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            doc.ref
              .update({
                name: this.name,
                email: this.email,
                contact_id: this.contact_id,
                job_title: this.job_title
              })
              .then(() => {
                this.$router.push({
                  name: "view-contact",
                  params: { contact_id: this.contact_id }
                });
              });
          });
        });
    }
  }
};
</script>
