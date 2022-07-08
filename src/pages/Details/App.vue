<template>
	<DetailsBanner />
	<a href="gallery.html">
		<h2>Gallery Page</h2>
	</a>
	<DetailsComponent />
	<FooterComponent />
</template>

<script setup>
import DetailsBanner from "@/components/DetailsBanner";
import FooterComponent from "@/components/FooterComponent";
import DetailsComponent from "@/components/DetailsComponent";
</script>

<script>
export default {
	name: "App",
};
</script>

<style></style>
