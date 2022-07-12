<template>
<div class="page-box">

        
        <div class="card" style="width:175px">
 <a href="https://trello.com/b/9JeBfHJc/fdb-team-member-page"><img class="shane" src="@/assets/profile.jpg" alt="Avatar" style="width:100%"/></a> 
    <div class="container">
        <h4 class="name"><b>Dshane Godbold</b></h4>
        <p class="title">Apprentice</p>
    </div>
</div>


<div class="card" style="width:175px">
    <img class="shane" src="@/assets/profile.jpg" alt="Avatar" style="width:100%"/>
    <div class="container">
        <h4 class="name"><b>Dshane Godbold</b></h4>
        <p class="title">Apprentice</p>
    </div>
</div>


<div class="card" style="width:175px">
    <img class="shane" src="@/assets/profile.jpg" alt="Avatar" style="width:100%"/>
    <div class="container">
        <h4 class="name"><b>Dshane Godbold</b></h4>
        <p class="title">Apprentice</p>
    </div>
</div>


<div class="card" style="width:175px">
    <img class="shane" src="@/assets/profile.jpg" alt="Avatar" style="width:100%"/>
    <div class="container">
        <h4 class="name"><b>Dshane Godbold</b></h4>
        <p class="title">Apprentice</p>
    </div>
</div>


<div class="card" style="width:175px">
    <img class="shane" src="@/assets/profile.jpg" alt="Avatar" style="width:100%"/>
    <div class="container">
        <h4 class="name"><b>Dshane Godbold</b></h4>
        <p class="title">Apprentice</p>
    </div>
</div>

        
    </div>
</template>

<script>
export default {
	name: "GalleryComponent",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.page-box{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
}

.card {
  transition: 0.3s;
  width: 40%;
  text-align: center;
}


.container {
  padding: 2px 16px;
}

.shane {
    border-radius: 10px;
    
}
.shane:hover{
    background-color: aqua;
}

.name{
    font-size: 18px;
    margin-top: 0px;
    margin-bottom: 0px;

}

.title{

    font-size: 16px;
    color: gray;
    margin-top: 0px;
}

</style>