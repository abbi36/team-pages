<template>
	<GalleryBanner />
	<a href="details.html">
		<h1>Details Page</h1>
	</a>
	<FooterComponent />
</template>

<script setup>
import GalleryBanner from "@/components/GalleryBanner";
import FooterComponent from "@/components/FooterComponent";
</script>

<script>
export default {
	name: "App",
};
</script>

<style></style>
