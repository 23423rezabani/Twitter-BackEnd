const errorMiddelware = (err,req,res,next)=>{
    const DefaultError = {
        statusCode:"404",
        success:"faild",
        massage:err 
    }
}


if(err?.name ==='ValidationError'){
    DefaultError.statusCode = 404;
    
    DefaultError.massage = Object.values(err,errors)
    .map((el)=>el.massage)
    .join("");
}

//duplicate error

if(err.code && err.code ===11000){
    DefaultError.statusCode = 404;

    DefaultError.massage = `${Object.values(
     err.KeyValue    
    )} fields ha a must be unique `

    
}

export default errorMiddelware;
