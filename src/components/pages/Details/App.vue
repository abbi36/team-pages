<template>
	<DetailsBanner />
	<a href="details.html">
		<h1>Gallery Page</h1>
	</a>
	<DetailsComponent />
	<FooterComponent />
</template>

<script setup>
import DetailsBanner from "@/components/DetailsBanner";
import DetailsComponent from "@/components/DetailsComponent"
import FooterComponent from "@/components/FooterComponent";
</script>

<script>
export default {
	name: "App",
};
</script>

<style></style>
