import {Request,Response} from 'express';
import battleRepo from '../repositories/battleRepo.js';

async function getRankingCr(req:Request,res:Response) {
    const rank = await battleRepo.ranking();
    res.send({fighters:rank})
}

export default getRankingCr;