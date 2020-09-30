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

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");
h2 {
  font-family: "Nunito", sans-serif !important;
  font-size: calc(14px + (20 - 10) * ((100vw - 435px) / (1200 - 200)));
}
</style>
