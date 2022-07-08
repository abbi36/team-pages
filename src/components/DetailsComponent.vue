<template>
<div>
    <div class="info" >
        <div class="row">
            <div class="column">
                <div class="pic">
                    <img src="..\assets\SnapIT.webp">
                </div>
            </div>
            <div class="column">
                <div class="details">
                    <h1>Parish Neighbors</h1>
                    <h3>Scrum/Lord</h3>
                    <h5>Chief Irritator</h5>
                    <h6>Parish joined SnapIT in 1908.</h6>
                    <h6>Ihiusfuhsf hgoihs hsodiso vsoidosd.!</h6>
                </div>
            </div>
        </div>
    </div>
    <div class="interests">
        <h1>Hobbies and Interests</h1>
        <h5>Blahkfdsjflsj</h5>
    </div>
    <div class="icons">
        <img class="sampleIcon" src="..\assets\SnapIT.webp">
    </div>
</div>
</template>

<script>
    export default {
        name: "DetailsComponent",
        data()  {
            firstName: "Abbi"
        
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.info {
    margin: 15px;
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
    flex-basis: 100%;
    flex: 1;
    justify-content: center;
    width: 26%;
}

.pic {
    background-color: white;
    width: 26%;
}

.details {
    background-color: gray;
    width: 26%;
    margin-left: 10px;
}

.interests {
    color: black;
    font-family: poppins, sans-serif;
}

.icons {
    height: auto;
    width: 100%;
}

.sampleIcon {
    height: 60px;
    width: 60px;
}

</style>