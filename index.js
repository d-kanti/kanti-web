const express = require("express")
var app = express();
const pp = process.env.PORT;
//const pp = "3000";
const path = require("path");
const bp = require("body-parser");
app.use(bp.urlencoded({extended: true}));


app.use(express.static("pages"));


var projects = [
  {
    id : "/colorGame",
    name : 'color game project',
    path : "../pages/color game project/index.ejs"
  },
  {
    id: "/score",
    name : 'Score Keeper',
    path : "../pages/score/asd.ejs"
  },
  { id   : '/todo',
    name : 'To-do List',
    path : "../pages/ToList/index.ejs"
  },
  
]

var tod = ["eat food", "drink milk", "take bath"]



app.get("/",(req,res)=>res.render("home.ejs",{projects: projects}));


projects.forEach(function(x){
  app.get(x.id, (req,res)=>res.render(x.path,{tod : tod}));
});


app.post("/todo2/add" ,(req,res)=>{
  tod.push(req.item);
  res.redirect("/todo2");
});















app.listen(pp,()=>console.log("listening on port :"+pp));
