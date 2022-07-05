<template>
	<div class="some-page-wrapper">
        <div class="row">
            <div class="column">
                <div class="footer-image"></div>
            </div>
        </div>
		<div class="logo-row">
			<div class="bottom-column">
				<span class="black-span"></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.some-page-wrapper {
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
    margin-bottom: 0;
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

.footer-image {
	display: flex;
	background-image: url('../assets/Footer.png');
	height: 300px;
	align-items: center;
	padding-left: 20vw;
}

.bottom-column {
    background-color: black;
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
}

.black-span {
	max-height: auto;
	max-width: 60px;
	padding-left: 20vw;
}

p {
	color: white;
	font-size: 48px;
	padding: 0%
;
}

</style>
