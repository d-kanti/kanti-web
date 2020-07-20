
function wincol(v){
  for(i=0; i<dd.length;i++){
    dd[i].style.background = v;
  }
  hd.style.backgroundColor = v;
}

function randcol(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb("+r+", "+g+", "+b+")";
}

function rarr(num){
  a = []
  for(var i=0; i<num; i++){
    a.push(randcol());
  }
  return a;
}

function recol(){
  hd.style.background = "blue";
  var cc = rarr(dd.length);
  var c = randcol();
  cc[Math.floor(Math.random()*6)] = c;
  for(var p = 0; p < dd.length; pp++){
    dd[p].style.backgroundColor =cc[p];
  }
  return c;
}

var hcolnam = document.querySelector("#color");
var hd = document.querySelector(".header");
var dd = document.getElementsByClassName("square");


var pp = document.querySelector(".playAgain");
opop = pp.addEventListener("click",recol());

  var cols = rarr(dd.length);
  var opop = randcol();
  hcolnam.textContent = opop.toUpperCase() ;
  cols[Math.floor(Math.random()*6)] = opop;



  for(i=0; i<dd.length;i++){
    dd[i].style.backgroundColor = cols[i];
    dd[i].addEventListener("click",function(){
      console.log(opop + "  "+ this.style.backgroundColor);
      if(this.style.backgroundColor=== opop){
        wincol(opop);
      }
      else{
        this.style.background = "#232323";
      }
    });
  }














//col = reset();
