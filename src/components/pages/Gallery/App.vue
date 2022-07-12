<template>
	<GalleryBanner />
	<GalleryComponent />
	<FooterComponent />
</template>

<script setup>
import GalleryBanner from "@/components/GalleryBanner";
import GalleryComponent from "@/components/GalleryComponent";
import FooterComponent from "@/components/FooterComponent";
</script>

<script>
export default {
	name: "App",
};
</script>

<style>
/* .container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-left: 10%;
	padding-right: 10%;
	font-family: "Poppins", sans-serif;
}

.card {
	text-align: center;
	padding-top: 10px;
	padding-bottom: 10px;
}

.oldie {
	background-image: url("@/assets/skater-girl.png");
	border-radius: 10px;
	-webkit-mask-image: url(@/assets/Bridget-blob.jpg);
	mask-image: url(@/assets/Bridget-blob.jpg);
	-webkit-mask-repeat: no-repeat;
	mask-repeat: no-repeat;
}

.name {
	color: black;
	font-size: 18px;
	font-weight: bold;
	margin-top: 3px;
	margin-bottom: 0px;
}

.title {
	color: #747474;
	font-size: 16px;
	margin-top: 0px;
} */
</style>
