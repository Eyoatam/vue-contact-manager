<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div>
        <h2 class="pa-4">Sign Up</h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn color="white" router to="/login" text>
        <i class="fa fa-user-plus pa-1"></i>
        <span class="mr-2">Login</span>
      </v-btn>
    </v-app-bar>
    <v-container class="ma-12 pa-12">
      <v-card class="rounded-lg" elevation="10">
        <div class="bg-secondary">
          <v-card-title>SignUp</v-card-title>
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
              <v-btn
                type="submit"
                color="secondary"
                class="mr-4"
                @click.prevent="signIn"
                >Sign Up</v-btn
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
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn(e) {
      e.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`Account Created For ${user.user.email}`);
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
.bg-secondary {
  background-color: #424242;
  color: #fff;
}
</style>
