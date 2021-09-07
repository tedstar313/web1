function littlestars() {
  for (var i = 0; i<20; i++){
  document.getElementsByClassName("littlestarsgroup").write("<div class='littlestars' id='littlestar'+i'>");
  
   }
}

function btnwider(){
 document.getElementById("bigbang").classList.add("fadeout");
 document.getElementById("btn").style.width = "100%";
 document.getElementById("btn").style.height = "100%";
 setTimeout(()=>{
 document.getElementById("space").classList.add("fadein");}
 ,2000);
 
 setTimeout(()=>document.getElementById("bar").style.display = "block"
 ,1000);
 setTimeout(()=>document.getElementById("stargroupid").style.display = "block"
 ,1000);

 setTimeout(()=>document.getElementById("bar").style.height = "680px"
 ,3000);
}

function star1() {
 var star1= document.getElementById("star1");
 star1.classList.remove("effectback1"); 
 star1.classList.add("effect");
 setTimeout(() => {
    star1.style.top="50%";
    star1.style.left="50%";
    star1.classList.add("starwide");
 }, 1000);
}
function star2() {
var star2= document.getElementById("star2"); 
 star2.classList.remove("effectback2"); 
 star2.classList.add("effect");
 setTimeout(() => {
    star2.style.top="50%";
    star2.style.left="50%";
    star2.classList.add("starwide");
 }, 1000);
}

function star3() {
    var star3= document.getElementById("star3");
    star3.classList.remove("effectback3");  
    star3.classList.add("effect");
    setTimeout(() => {
        star3.style.top="50%";
        star3.style.left="50%";
        star3.classList.add("starwide");
    }, 1000);
   }
function star4() {
    var star4= document.getElementById("star4");
    star4.classList.remove("effectback4");  
    star4.classList.add("effect");
    setTimeout(() => {
        star4.style.top="50%";
        star4.style.left="50%";
        star4.classList.add("starwide");
    }, 1000);
   }
function back() {
    var star1= document.getElementById("star1"); 
    var star2= document.getElementById("star2"); 
    var star3= document.getElementById("star3"); 
    var star4= document.getElementById("star4"); 
    star1.classList.remove("starwide");
    star2.classList.remove("starwide");
    star3.classList.remove("starwide");
    star4.classList.remove("starwide");
    
    if(star1.style.top=="50%"){
      setTimeout(()=>{
        star1.classList.add("effectback1");
        star1.style.left="25%";
        star1.style.top="25%";
        },1000);
      }
    else if(star2.style.top=="50%"){
      setTimeout(()=>{ 
        star2.classList.add("effectback2");
        star2.style.left="25%";
        star2.style.top="75%";
      },1000);
    }
    else if(star3.style.top=="50%"){
      setTimeout(()=>{ 
        star3.classList.add("effectback3");
        star3.style.left="75%";
        star3.style.top="25%";
      },1000);
    }
    else if(star4.style.top=="50%"){
      setTimeout(()=>{   
        star4.classList.add("effectback4");
        star4.style.left="75%";
        star4.style.top="75%";
      },1000);
    }
}