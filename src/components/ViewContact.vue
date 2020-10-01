<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div>
        <h2 class="pa-4">Contact Manager</h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        router
        :to="{ name: 'edit-contact', params: { contact_id: contact_id } }"
        color="info"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-app-bar>
    <v-list>
      <v-divider></v-divider>
      <v-list-item-group>
        <v-list-item class="display-2 pa-4">
          {{ name }}
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          Contact Id#: {{ contact_id }}
          <v-spacer></v-spacer>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          email: {{ email }}
          <v-spacer></v-spacer>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          Job Title: {{ job_title }}
          <v-spacer></v-spacer>
        </v-list-item>
        <v-divider></v-divider>
      </v-list-item-group>
    </v-list>
    <v-container>
      <v-btn class="mr-3" router to="/" color="primary"
        ><v-icon>mdi-arrow-left</v-icon>Back</v-btn
      ><v-btn @click="deleteContact" color="error"
        >Delete<v-icon>mdi-delete</v-icon></v-btn
      ></v-container
    >
  </v-app>
</template>

<script>
import { db } from "@/main";
export default {
  name: "view-contacts",
  data() {
    return {
      contact_id: null,
      name: null,
      job_title: null,
      email: null
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
            console.log(this.contacts);
          });
        });
    },
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
    deleteContact() {
      if (
        confirm("Are You Sure you want to delete, your data Cannot be reversed")
      ) {
        db.collection("contacts")
          .where("contact_id", "==", this.$route.params.contact_id)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/");
            });
          });
      }
      this.getContacts();
    }
  }
};
</script>
