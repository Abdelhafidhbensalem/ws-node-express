const time=(req,res,next)=>{
    const date="monday"

    if(date=="monday"){
        res.send("we are closed monday")
    }
    else{
        next()
    }
}


module.exports=time