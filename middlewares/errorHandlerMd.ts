import { Request,Response,NextFunction } from "express";

function errorHandlerMd(error:Error,req:Request,res:Response,next:NextFunction) {
   console.log(error);
    return res.send(error);
}

export default errorHandlerMd;