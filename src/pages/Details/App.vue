<script setup>
import DetailsBanner from "./components/DetailsBanner";
import FooterComponent from "./components/FooterComponent";
</script>

<script>
export default {
  name: "App",
  components: {
    DetailsBanner,
    FooterComponent,
  },
};
</script>

<template>
  <DetailsBanner />
  <FooterComponent />
</template>

<style></style>
