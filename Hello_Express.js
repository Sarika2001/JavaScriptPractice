const express=require('express')
//Importing express js in application

const app=express()
//Initialising instance of app using express

const port=600;
//Defining port number

app.get('/',(req,res)=>
{
    //req is input res is output
    res.send("Hello Express")
})
//Configuring route of get method , path-"/"
//for page /getmsg this response will me given

app.listen(port)
//Listening to port 4000
//Internally node calls http.createServer