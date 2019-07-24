<template>
    <div id="app">
        <!-- <div class="starFive"></div>        
        <div class="pentagon"></div>
        <div class="hexagon"></div><br><br><br>
        <div class="starSix"></div><br><br><br>
        <div class="octagon"></div>

        <div class="heart"></div>
        <div class="diamond"></div><br><br>
        <div class="infinite"></div>
        <div class="vInfinite"></div>
        <div class="egg"></div>
        <div class="burst8"></div>
        <div class="burst12"></div>
        
        <div class="moon"></div>     
        <div class="magnify"></div>
        <div class="cone"></div> -->
        <!-- <div class="rotatewra">
        <div class="nagPos"></div> 
        </div> -->
        <div class="rotateWrapper">
        <div class="cross"></div>
        </div>
         
        <div class="badge"></div>
        <div class="facebook"></div> 
        <div class="pointer"></div> 
        
        
    </div>
</template>
<style scoped>
.facebook{
    width:100px;
    height:100px;
    border-radius:5px;
    background-color:violet;
    position:relative;
    box-sizing:content-box;
}

.facebook:before{
    content:'';
    position:absolute;
    left:55px;
    top:20px;
    width:25px;
    height:65px;
    border-style:solid;
    border-color:white;
    box-sizing:content-box;
    border-width:15px 0 0 15px;
    border-top-left-radius:50%;
}

.facebook:after{
    content:'';
    position:absolute;
    width:55px;
    height:15px;
    background-color:white;
    top:50px;
    left:40px;
}

.magnify{
    width:100px;
    height:100px;
    border-radius:50%;
    border:20px solid violet;
    background-color:white;
    position:relative;
}

.magnify:before{
    content:'';
    position:absolute;
    height:20px;
    width:70px;
    background-color:violet;
    transform:rotate(35deg);
    top:55px;
    left:55px;
}

.cross{
    width:100px;
    height:20px;
    background-color:violet;
    position:relative;
    display:inline-block;
    margin:50px;
    
}

.cross:before{
    content:'';
    width:20px;
    height:100px;
    background-color:violet;
    position:absolute;
    top:-40px;
    left:40px;
    
}

.rotateWrapper{
    animation:rolling 5s linear infinite;
}

@keyframes rolling{
    from{
        transform:rotate(0deg);
    }

    to{
        transform:rotate(360deg);
    }
}

.cone{
    height:0;
    width:0;
    border-top:40px solid violet;
    border-left:20px solid transparent;
    border-right:20px solid transparent;
    border-radius:20px;
}

.rotatewra{
    width:100px;
    height:100px;
    animation:rotating 2s linear infinite;
    display:inline-block;
    float:left;
}
.nagPos{
    width:96px;
    height:48px;
    box-sizing:content-box;
    border-style:solid;
    border-width:1px 1px 50px 1px;
    background-color:white;
    border-color:#a23;
    border-radius:50%;    
    position:relative;
    
}

@keyframes rotating{
    from{
        transform:rotate(0deg)
    }
    to{
        transform:rotate(360deg)
    }
}

.nagPos:before{
    content:'';
    position:absolute;
    border:18px solid #a23;
    height:12px;
    width:12px;
    border-radius:50%;
    background-color:white;
    box-sizing:content-box;
    left:0px;
    top:24px;
}

.nagPos:after{
    content:'';
    position:absolute;
    border:18px solid white;
    height:12px;
    width:12px;
    background-color:#a23;
    box-sizing:content-box;
    border-radius:50%;
    top:24px;
}

.moon{
    width:100px;
    height:100px;
    border-radius:50%;    
    box-shadow:10px 0px 0px 0px violet;
    transform:rotate(30deg)
}

.burst12{
  width:50px;
  height:50px;
  background-color:violet;
  position:relative;
  display:inline-block;
}

.burst12:before,.burst12:after{
    content:'';
    position:absolute;
    width:50px;
    height:50px;
    background-color:violet;
    top:0;
    left:0;
}

.burst12:before{
    transform:rotate(30deg);
    
}

.burst12:after{
    transform:rotate(60deg);
}

.burst12:after{

}

.egg{
    width:120px;
    height:180px;
    background-color:violet;
    border-radius:50% 50% 50% 50%/60% 60% 40% 40%;
   
}

.vInfinite{
    width:100px;
    height:200px;
    box-sizing:content-box;
    position:relative;
    display:none;
}

.vInfinite:before,.vInfinite:after{
    content:'';
    position:absolute;
    border:20px solid violet;
    width:60px;
    height:60px;
    box-sizing:content-box;
    border-radius:50px 50px 0 50px;
    transform:rotate(45deg)
}

.vInfinite:after{
    border-radius:0px 50px 50px 50px;
    top:110px;
}
.infinite{
    width:200px;
    height:100px;
    box-sizing:content-box;
    position:relative;
    display:none;
}

.infinite:before,.infinite:after{
    content:'';
    width:60px;
    height:60px;
    border-radius:50px 50px 0 50px;
    position:absolute;
    box-sizing:content-box;
    border:20px solid violet;
    transform:rotate(-45deg)
}

.infinite:after{
    border-radius:50px 50px 50px 0px;
    left:210px;
    transform:rotate(45deg);
}

.diamond{
    width:100px;
    height:100px;
    background-color:violet;
    transform:rotate(45deg)
}
.heart{
    width:100px;
    height:90px;
    position:relative;
    display:inline-block;
}

.heart:before{
    content:'';
    position:absolute;
    width:50px;
    height:80px;
    border-radius:25px 25px 0 0;
    background-color:violet;
    transform:rotate(-45deg);
    transform-origin:0 100%;
}

.heart:after{
    content:'';
    position:absolute;
    left:0px;
    width:50px;
    height:80px;
    border-radius:25px 25px 0 0;
    background-color:violet;
    transform:rotate(45deg);
    transform-origin:100% 100%;
}
.octagon{
    margin:20px;
    width:150px;
    height:50px;
    background-color:violet;
    position:relative;
    display:inline-block;
}

.octagon:before{
   content:'';
   position:absolute;
   top:-50px;
   left:0px;
   width:150px;
   height:0;
   border-bottom:50px solid violet;
   border-left:50px solid transparent;
   border-right:50px solid transparent;
}

.octagon:after{
    content:'';
    position:absolute;
    top:50px;
    left:0px;
    width:150px;
    height:0px;
    border-top:50px solid violet;
    border-left:50px solid transparent;
    border-right:50px solid transparent;
}

.hexagon{
    width:50px;
    height:100px;
    background-color:violet;
    position:relative;
    left:50px;
    display:inline-block;
}

.hexagon:before{
    content:'';
    position:absolute;
    border-top:50px solid transparent;
    border-bottom:50px solid transparent;
    border-right:25px solid violet;
    left:-25px;
}

.hexagon:after{
    content:'';
    position:absolute;
    border-top:50px solid transparent;
    border-bottom:50px solid transparent;
    border-left:25px solid violet;
    left:50px;
}

.pentagon{
    width:100px;
    height:0;
    position:relative;
    border-top:50px solid violet;
    border-left:25px solid transparent;
    border-right:25px solid transparent;
    display:inline-block;
    margin-left:120px;
}

.pentagon:before{
    content:'';
    height:0;
    width:0;
    position:absolute;
    top:-100px;
    left:-25px;
    border-bottom:50px solid violet;
    border-left:50px solid transparent;
    border-right:50px solid transparent;
}

.starSix{
    height:0;
    width:0;
    position:relative;
    left:80px;
    border-top:50px solid violet;
    border-left:25px solid transparent;
    border-right:25px solid transparent;
    display:inline-block;
}

.starSix:before{
    content:'';
    width:0;
    height:0;
    position:absolute;
    left:-25px;
    top:-65px;
    border-bottom:50px solid violet;
    border-left:25px solid transparent;
    border-right:25px solid transparent;
}

#app{
    padding:20px;
    overflow-y:scroll;
}
.starFive{
    margin:50px 0;
    height:0;
    width:0;
    border-bottom:50px solid violet;
    border-left:50px solid transparent;
    border-right:80px solid transparent;
    transform:rotate(45deg);
    display:inline-block;
    
}

.starFive:before{
    content:'';
    height:0;
    width:0;
    position:absolute;
    top:10px;
    left:-60px;
    border-top:50px solid violet;
    border-left:50px solid transparent;
    border-right:80px solid transparent;
    transform:rotate(90deg)
}

.starFive:after{
    content:'';
    height:0;
    width:0;
    position:absolute;
    top:-23px;
    left:-37px;
    border-top:40px solid violet;
    border-left:15px solid transparent;
    border-right:15px solid transparent;
    transform:rotate(135deg);
}
</style>
