<template>
  <v-app id="app">
    <v-main> </v-main>
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>

{ primary: '#1976D2', secondary: '#424242', accent: '#82B1FF', error: '#FF5252',
info: '#2196F3', success: '#4CAF50', warning: '#FFC107', }

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");
h2 {
  font-family: "Nunito", sans-serif !important;
  font-size: calc(14px + (20 - 10) * ((100vw - 435px) / (1200 - 200)));
}
h3 {
  font-family: "Nunito", sans-serif !important;
  font-size: calc(10px + (15 - 5) * ((70vw - 435px) / (1200 - 200)));
  color: #ffc107;
}
</style>
