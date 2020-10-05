<template>
  <v-app id="dashboard">
    <v-app-bar app color="primary" dark>
      <div>
        <h2 class="pa-4">Contact Manager</h2>
      </div>
      <v-spacer></v-spacer>
      <h3 color="white" router to="/new" text>
        <i class="fa fa-user pa-1"></i>
        <span class="mr-2">{{ currentUser }}</span>
      </h3>
      <v-btn color="white" router to="/new" text>
        <i class="fa fa-user-plus pa-1"></i>
        <span class="mr-2">Create New Contact</span>
      </v-btn>
      <v-btn color="info" @click="logOut">
        <span class="mr-2">LogOut</span>
        <v-icon>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-card class="mx-auto" max-width="800">
        <v-list>
          <v-list-item class="d-flex justify-center">
            <h2 class="display-1 pa-3">Contacts</h2>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item-group>
            <v-list-item
              router
              :to="{
                name: 'view-contact',
                params: { contact_id: contact.contact_id }
              }"
              v-for="contact in contacts"
              :key="contact.id"
            >
              {{ contact.name }}
              <v-spacer></v-spacer>
              <v-chip class="mr-4">{{ contact.job_title }}</v-chip>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { db } from "@/main";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "dashboard",
  data() {
    return {
      contacts: [],
      isLogged: false,
      currentUser: false
    };
  },
  created() {
    this.getContacts();
    if (firebase.auth().currentUser) {
      this.isLogged = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    },
    getContacts() {
      db.collection("contacts")
        .orderBy("contact_id")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const data = {
              id: doc.id,
              contact_id: doc.data().contact_id,
              name: doc.data().name,
              job_title: doc.data().job_title,
              email: doc.data().email
            };
            this.contacts.push(data);
          });
        });
    }
  }
};
</script>
