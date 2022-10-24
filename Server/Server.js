const express=require("express");
const path=require('path')
const http=require('http');
const { Server } = require("socket.io");

const app=express();
const server=http.createServer(app);
const publicPath=path.join(__dirname,"../Public");
const PORT=process.env.PORT || 3000;
// console.log(publicPath);
app.use(express.static(publicPath));

const io=new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.emit("newMessage",{
        from:"Admin",
        text:"Welcome to Club",
        timeStamp:new Date().getTime()

    })
    socket.broadcast.emit("newMessage",{
        from:"Admin",
        text:"New User Joined",
        timeStamp:new Date().getTime()
    })

    socket.on("createMessage",(message)=>{
        console.log(message);
        io.emit("newMessage",{
            from:message.from,
            text:message.text,
            timeStamp:new Date().getTime()
        })
    })
    // socket.emit("newMessage",{
    //     from:"server",
    //     text:"replied hii"
    // })
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

server.listen(PORT,()=>{
    console.log("Server is Listening at Port 3000");
});
