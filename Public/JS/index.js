var socket = io();
  socket.on('connect',()=>{
    console.log("Connected to Server");

    // socket.emit("createMessage",{
    //     from:"Balkar",
    //     text:"hii",
    //     timeStamp:new Date().getTime()
    // })
  })

  socket.on("newMessage",(message)=>{
    console.log("newMessage",message);

  })
  socket.on('disconnect',()=>{
    console.log("disconnected to Server");
  })