const express=require("express");
const path=require('path')

const app=express();
const publicPath=path.join(__dirname,"../Public");
const PORT=process.env.PORT || 3000;
// console.log(publicPath);
app.use(express.static(publicPath));

app.listen(PORT,()=>{
    console.log("Server is Listening at Port 3000");
});
