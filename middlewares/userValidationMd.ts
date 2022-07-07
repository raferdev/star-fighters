import { Request,Response,NextFunction } from "express";
import githubServices from "../services/githubSv.js";

interface Ibody {
    firstUser:string,
    secondUser:string
}

async function userValidationMd(req:Request,res:Response,next:NextFunction) {
    const body:Ibody = req.body;

    const userData1 = await githubServices.userData(body.firstUser);
    const userData2 = await githubServices.userData(body.secondUser);

    const battleData = {
        userData1,
        userData2
    }
    
    res.locals.battleData = battleData;

    next();
}

export default userValidationMd;