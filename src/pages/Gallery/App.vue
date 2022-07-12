<template>
	<GalleryBanner />
	<a href="details.html">
		<h1 class="detailLink">Details Page</h1>
	</a>
	<GalleryComponent />
	<FooterComponent />
</template>

<script setup>
import GalleryBanner from "@/components/GalleryBanner";
import FooterComponent from "@/components/FooterComponent";
import GalleryComponent from "@/components/GalleryComponent";
</script>

<script>
export default {
	name: "App",
};
</script>

<style>
.detailLink {
	color: black;
}

</style>
