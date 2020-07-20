var pc;
var cols;
var sq = document.querySelectorAll(".square");
var hd = document.querySelector(".header");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var ta = document.querySelector(".ta");
var val = 6





function randcol(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var c = "rgb("+r+", "+g+", "+b+")";

  return c;
}

function rarr(no){
  a = [];
  for(var i= 0; i<no; i++){
    a.push(randcol());
  }
  return a;
}

function recol(ar){


  pc = ar[Math.floor(Math.random()*val)];
  document.querySelector("h1").textContent = pc.toUpperCase();

  for(var g =0; g<sq.length; g++){
    sq[g].style.backgroundColor = ar[g]
    //-------listener--------
  }
}

function allcol(c){
  for( var u =0; u<val; u++){
    sq[u].style.backgroundColor = c;
  }
  hd.style.backgroundColor = c;
}

function dispnone(l){
  for(var t = val;t<sq.length;t++){
    sq[t].style.backgroundColor = "#232323"
  }
}

//-------initialization=-----------
cols = rarr(val);
recol(cols);
      //-----------


//------------- adding listener-------------
for (var o = 0; o<sq.length; o++){
  sq[o].addEventListener("click",function(){
    if (this.style.backgroundColor === pc){
      allcol(pc);
      ta.textContent = "Correct";
      resetBtn.textContent = " PLAY AGAIN ?"
    }
    else{
      this.style.backgroundColor = "#232323"
      ta.textContent = "try again"
    }
  });
}
                //-----------

resetBtn.addEventListener("click",function(){
  cols = rarr(val);
  recol(cols);
  hd.style.backgroundColor = "steelblue";
  ta.textContent = "";
  this.textContent="NEW COLORS"
});

easyBtn.addEventListener("click",function(){
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  val = 3;
  recol(rarr(val));
  dispnone(val);
});

hardBtn.addEventListener("click",function(){
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  val = 6;
  recol(rarr(val));

});
