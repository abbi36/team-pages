<template>
	<div class="some-page-wrapper">
		<div class="logo-row">
			<div class="column">
				<img class="logo" src="../assets/SnapIT.webp">
			</div>
			<div>
				<a href="gallery.html">
					<h1>back to team gallery</h1>
				</a>
			</div>
		</div>
		<div class="row">
			<div class="column">
				<div class="blue-column">
					<p>Meet </p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Banner",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.some-page-wrapper {
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}
.logo-row {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	height: 75px;
}
.row {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
}

.column {
	display: flex;
	flex-direction: column;
	flex-basis: auto;
	flex: 1;
	}

.logo {
	max-height: auto;
	max-width: 60px;
	padding-left: 20vw;
}
.blue-column {
	display: flex;
	background-image: url('../assets/DetailsImage.jpg');
	height: 200px;
	align-items: center;
	padding-left: 20vw;
}
p {
	color: white;
	font-size: 48px;
	padding: 0%;
}

h1 {
	display: inline-flex;
	padding-right: 600px;
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 49px;
	color: #747474;
}

h1:hover {
  color: black;
  text-decoration: underline;
}

</style>
