<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="text-center">
        <h2>Login</h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="white" router to="/signup" text>
        <i class="fa fa-user-plus"></i>
        <span class="mr-2">Sign Up</span>
      </v-btn>
    </v-app-bar>
    <v-container class="ma-12 pa-12">
      <v-card class="rounded-lg" elevation="10">
        <div class="bg-primary">
          <v-card-title>Login</v-card-title>
          <v-divider></v-divider>
        </div>
        <v-container>
          <v-form>
            <v-text-field
              type="text"
              label="Email*"
              v-model="email"
            ></v-text-field>
            <v-text-field
              type="password"
              label="Password*"
              v-model="password"
            ></v-text-field>
            <div class="text-left">
              <small>*indicates required field</small>
            </div>
            <div class="text-right">
              <v-btn type="submit" color="primary" class="mr-4" @click="logIn"
                >Login</v-btn
              >
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    logIn(e) {
      e.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You Success fully Logged in as ${user.user.email}`);
            this.$router.push("/");
          },
          err => {
            alert(err.message);
            console.log(err);
          }
        );
    }
  }
};
</script>

<style scoped>
.bg-primary {
  background-color: #1976d2;
  color: #fff;
}
</style>
