const express = require('express'); //Import the express dependency
const port = 3333;                  //Save the port number where your server will be listening
const app = express();//Instantiate an express app, the main work horse of this server
app.set("view engine", "ejs");
var cnt=0;

app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('./public/pages/index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});
app.get('/About', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('./public/pages/about.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser                                                  //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});
app.get('/TPL', (req, res) => {        //get requests to the root ("/") will route here
      cnt++;
      res.render("TPL", {
      port: port,
      timesShown: cnt,
    });
                                                  //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});
// const router = express.Router();
// var err=0;

// router.get('/',function(req,res){
//   res.render("index", {
//       port: port,
//       err: 0,
//     });
// });

// router.post('/login',function(req,res){
//   const { uname, passwd } = req.body;

//   if (uname === "admin" && passwd === "admin") {
//     res.render("success", {
//       uname: uname,
//     });
//   } else {
//     err++;
//     res.render("login", {
//       uname: uname,
//       err: err,
//     });
//   }
// });


// //add the router
// app.use('/', router);


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

