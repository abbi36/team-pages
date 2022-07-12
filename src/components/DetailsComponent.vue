<template>
<div>
    <div class="compRow" >
        <div class="compColumn">
            <div class="blobHolder">
                <img class="pic" src="..\assets\profile.jpg">
                <img class="badge" src="..\assets\AppBadge.png">
            </div>
        </div>
        <div class="compColumn">
            <div class="details">
                <h1 class="fullName">Parish Neighbors-Godbold</h1>
                <h2 class="pronouns">(mister/sir)</h2>
                <h3 class="title">Chief Irritator</h3>
                <h6 class="startYear">Parish joined SnapIT in 1908.</h6>
                <h6 class="jobData">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, impedit ipsum molestiae, repellat placeat veritatis ullam similique dicta possimus temporibus ratione nisi accusamus quis velit minima maiores voluptas perspiciatis illo.</h6>
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


.compRow {
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
}

.compColumn {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    
}

.blobHolder {
    width:65%;
    margin-left: 30%;
    margin-top: 100px;
    align-self: center;
}

.pic {
    width: 100%;
    
}

.details {
    width: 65%;
    margin-right: 30%;
    margin-top: 100px;
    align-content: top;
    padding-left: 12%;
}

.fullName {
    font-size: 35px;
    font-weight: 600;
    font-style: normal;
    font-family: poppins;
    color: #0679be;
    line-height: 27px;
    margin-bottom: 5px;
    margin-top: 0px;
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
    font-size: 24px;
    font-family: poppins;
    font-weight: 600;
    line-height: 28px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    font-family: poppins;
    margin-bottom: 0px;
}

.startYear {
    font-family: open-sans;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #111111;
    margin-top: 20px;
    margin-bottom: 0px;
}

.jobData {
    font-family: open-sans;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #111111;
    margin-top: 20px;
    padding-right: 25%;
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