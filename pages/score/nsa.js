var p1s = document.getElementById("p1s");
var p2s = document.getElementById("p2s");
var rb = document.getElementById("rb");
var ts = document.getElementById("ts");
var pb1 =document.getElementById("pb1");
var pb2= document.getElementById("pb2");
var tt= document.getElementById("tt");
var p1=0;
var p2=0;
var t=5;

function refresh(){
p1s.textContent = p1;
p2s.textContent = p2;
ts.textContent = t;
}
tt.addEventListener("change",function(){
  t = Number(this.value);
  refresh();
});
refresh();
pb1.addEventListener("click",function(){
  if(p1<t && p2<t){
    p1++;
    if (p1===t){
      p1s.style.color = "green";
    }
    refresh();
  }
});






pb2.addEventListener("click",function(){
  if(p2<t && p1<t){
    p2++;
    if(p2 === t){
      p2s.style.color = "green";

    }
    refresh();
  }







});

r.addEventListener("click",function(){
    p1 = 0;
    p2 = 0;
    refresh();
    p1s.style.color = "black";
    p2s.style.color = "black";







});
