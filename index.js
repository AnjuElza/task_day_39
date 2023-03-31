import express from "express";
const app=express();
import fs from "fs";


const PORT=4000;


app.use(express.json());

//--------------------------------------------Task-1--------------------
app.get("/",function(request,response){
    const dateObject = new Date();
// current date
const date = (`0 ${dateObject.getDate()}`).slice(-2);
// current month
const month = (`0 ${dateObject.getMonth() + 1}`).slice(-2);
// current year
const year = dateObject.getFullYear();
// current hours
const hours = dateObject.getHours();
// current minutes
const minutes = dateObject.getMinutes();
// current seconds
const seconds = dateObject.getSeconds();
    let data=`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    console.log(data);
    fs.writeFile("current date-time.txt",data,(err)=>{
        console.log("writing completed");
    });
    response.send("hi world");
});
app.listen(PORT, ()=>console.log
('Server started🙂')
);

//-----------------------Task-2--------------
app.get("/task2",function(request,response){
function getFilesFromPath(path, extension) {
    let files = fs.readdirSync( path );
    return files.filter( file => file.match(new RegExp(`.*\.(${extension})$`, 'ig')));
}

console.log(getFilesFromPath("./Task_day_39", ".txt"));
});


