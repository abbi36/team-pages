<template>
<div>
    <div class="detailRow" >
        <div class="detailColumn">
            <div class="picBackColor">
                <div class="frame">
                    <img class="pic" src="..\assets\blue-blob.png">
                </div>
            </div>
            <img class="appBadge" src="..\assets\AppBadge.png">
        </div>
        
        <div class="detailColumn">
            <div class="details">
                <h1 class="fullName">{{firstName}} {{lastName}}</h1>
                <h2 class="pronouns">({{pronouns}})</h2>
                <h3 class="title">{{title}}</h3>
                <h6 class="startYear">{{firstName}} joined SnapIT in{{startYear}}.</h6>
                <h6 class="jobData">{{jobData}}</h6>
            </div>
        </div>
    </div> 
    <div class="lowerInfo">
        <div class="interests">
            <h1 class="hobby">Hobbies and Interests</h1>
            <h5 class="hobbyData">{{hobbyData}}</h5>
        </div>
        <div class="icons">

            <a href="https://www.linkedin.com/in/abbigail-engel-1a81171a2/">
            <img class="socialLink" src="..\assets\LinkedIn.webp"> </a>

            <a href="https://github.com/jgroff8806">
            <img class="socialLink" src="..\assets\GitHub.webp"> </a>

            <a href="https://www.instagram.com/isaacmad/">
            <img class="socialLink" src="..\assets\Insta.webp"> </a>

            <a href="https://www.youtube.com/megazipp">
            <img class="socialLink" src="..\assets\YouTube.webp"> </a>

            <a href="https://jasongroff.com/">
            <img class="socialLink" src="..\assets\Link.webp"> </a>
        </div>
    </div>
    </div>  
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            firstName : "Parish",
            lastName : "Neighbors",
            pronouns : "mister/sir",
            title : "Chief Irritator",
            startYear : "1908",
            jobData : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, impedit ipsum molestiae, repellat placeat veritatis ullam similique dicta possimus temporibus ratione nisi accusamus quis velit minima maiores voluptas perspiciatis illo.",
            hobbyData : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, impedit ipsum molestiae, repellat placeat veritatis ullam similique dicta possimus temporibus ratione nisi accusamus quis velit minima maiores voluptas perspiciatis illo."

        }
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


.detailRow {
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    align-items: flex-start;
}

.detailColumn {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    
}

.picBackColor {
    display: flex;
    min-height: 500px;
    width: auto;
    margin-top: 50px;
    padding-left: 5%;
    padding-right: 0%;
}

.frame {
    position: relative;
    width: 600px;
    height: 550px;
    background-image: url(@/assets/sudheer.webp);
    background-repeat: no-repeat;
    background-position: left 100px top 40px;
    background-size: 85%;
}

.pic {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: block;
    margin: auto;
    
}

.details {
    width: 75%;
    margin-right: 15%;
    margin-top: 175px;
    align-content: top;
    padding-left: 18%;
}

.fullName {
    font-size: 35px;
    font-weight: 600;
    font-style: normal;
    font-family: poppins;
    color: #0679be;
    line-height: 27px;
    margin-bottom: 15px;
    margin-top: 0px;
}

.interests {
    display: flex;
    flex-direction: column;
    color: black;
    font-family: poppins, sans-serif;
    width: 100%;
}

.lowerInfo {
    display: flexbox;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: auto;
    width: 40%;
    padding-left: 30%;
    padding-bottom: 50px;
    justify-content: center;
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
    padding-top: 15px;
}

.startYear {
    font-family: open-sans;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #111111;
    margin-top: 25px;
    margin-bottom: 0px;
}

.jobData {
    font-family: open-sans;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #111111;
    margin-top: 25px;
    padding-right: 20%;
}

.hobby {
    padding-left: 40%;
    width: 20%;
    font-family: poppins;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #1b1b1b;
    justify-self: center;
}

.hobbyData {
    padding-left: 15%;
    width: 70%;
    font-family: poppins;
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    font-stretch: 15%;
    color: #111111;
}

.socialLink {
    height: auto;
    width: 50%;
    padding-left: 15px;
    padding-right: 15px;
}

.appBadge {
    height: auto;
    width: 25%;
    margin-top: -23%;
    padding-left: 68%;
    z-index: 1;
}

</style>