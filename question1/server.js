var express=require("express")
var bodyParser=require("body-parser")

var bookArr=[];
var id=1;
var app= express();

app.use(bodyParser.json())

app.post("/addBook",(req,res)=>{
    console.log(req.body);
    bookArr.push({
        id,
        ...req.body
    });
    id++;
    res.send({msg:"received"});
})

app.get("/books",(req,res)=>{
    res.send(bookArr)
})

app.listen("8000",()=>{
    console.log(8000);
})