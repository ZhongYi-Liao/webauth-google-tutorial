const express = require("express");
const path = require("path");
const app = express();
const authRoutes = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
app.set("view engine","ejs");

//======Middleware==========
//authen
app.use("/auth",authRoutes); 


//======services==========
//=======root=========
app.get("/",(req,res)=>{
    //res.sendFile(path.join(__dirname,"views/home.html"));
    res.render("home.ejs");
});

const PORT =3000; 

app.listen(PORT),()=>{
console.log("server is running at" +PORT);

}