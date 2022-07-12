<template>
<div>
    <div class="info" >
        <div class="row">
            <div class="column">
                <div class="blobHolder">
                    <img class="pic" src="..\assets\SnapIT.webp">
                    <img class="badge" src="..\assets\AppBadge.png">
                </div>
            </div>
            <div class="column">
                <div class="details">
                    <h1 class="fullName">Parish Neighbors</h1>
                    <h2 class="pronouns">mister/sir</h2>
                    <h3 class="title">Chief Irritator</h3>
                    <h6 class="jobData">Parish joined SnapIT in 1908.</h6>
                    <h6 class="jobData">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, impedit ipsum molestiae, repellat placeat veritatis ullam similique dicta possimus temporibus ratione nisi accusamus quis velit minima maiores voluptas perspiciatis illo.</h6>
                </div>
            </div>
        </div>
    </div> 
    <div class="lowerInfo">
        <div class="interests">
            <h1 class="hobby">Hobbies and Interests</h1>
            <h5 class="hobbyData">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ad atque fugiat, voluptates adipisci nisi dolorem quia soluta placeat aperiam odio dolorum culpa, deleniti eius cum voluptatibus laudantium voluptatum quibusdam?</h5>
        </div>
        <div class="icons">
            <img class="sampleIcon" src="..\assets\LinkedIn.webp">
            <img class="sampleIcon" src="..\assets\GitHub.webp">
            <img class="sampleIcon" src="..\assets\Insta.webp">
            <img class="sampleIcon" src="..\assets\YouTube.webp">
            <img class="sampleIcon" src="..\assets\Link.webp">
        </div>
    </div>
    </div>  
</template>

<script>
import axios from "axios";

export default {
    name: "DetailsComponent",
    created: function() {
        
    },

    created() {
        axios.get("https://jsonplaceholder.typicode.com/users/").then((res) => {
            this.users = res.data;
        });
    },
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');


.row {
    margin-top: 75px;
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
}

.blobHolder {
    width:50%;
    margin-left: 30%;
}

.pic {
    width: 75%;
    margin-left: 15%;
}

.details {
    width: 50%;
    margin-right: 15%;
}

.fullName {
    font-size: 35px;
    font-weight: 600;
    font-style: normal;
    font-family: poppins;
    color: #0679be;

}

.interests {
    color: black;
    font-family: poppins, sans-serif;
    width: 55%;
    margin-left: 22%;
}
.lowerInfo {
    display: flexbox;
    flex-direction: column;
    justify-content: center;
    padding-left: 22%;
    width: 55%;
}

.icons {
    height: auto;
    width: 100%;
}

.pronouns {
    font-size: 32px;
    font-family: poppins;
    font-weight: 600;
}

.title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    font-family: poppins;
}

.jobData {
    font-family: poppins;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #111111;
}

.hobby {
    font-family: poppins;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #1b1b1b;
}

.hobbyData {
    font-family: poppins;
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    color: #111111;
}

.sampleIcon {
    height: 7%;
    width: 7%;
    padding-left: 10px;
    padding-right: 10px;
}

.badge {
    height: 15%;
    width: auto;

}

</style>