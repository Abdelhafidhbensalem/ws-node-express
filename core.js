const fs=require("fs")
const os=require("os")
const {x,users}=require("./data")
//console.log(users)
/*
console.log("starting ....")

fs.readFile("test.tx", "utf8", (err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data);
    }
})

console.log("finishing ....")

console.log(__filename);

console.log(os.freemem(),os.arch())*/

function hello(){
    return "hello "
}

console.log(hello())