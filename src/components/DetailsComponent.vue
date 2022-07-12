<template>
	<div class="container">
		<div id="frame">
			<img id="myImg" src="@/assets/blue-blob.png" />
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailsComponent",
};
</script>

<style>
.container {
	display: flex;
	min-height: 1000px;
	width: auto;
	margin-top: 25px;
    padding-left: 10%;
    padding-right: 10%;
}

#frame {
	position: relative;
    

	width: 600px;
	height: 550px;

	background-image: url(@/assets/sudheer.webp);
    background-repeat: no-repeat;
	background-position: left 100px top 40px;
	background-size: 85%;
}

#myImg {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;

	display: block;
	margin: auto;
}
</style>
