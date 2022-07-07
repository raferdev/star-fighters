import { NextFunction } from "express";
import Joi from "joi";

function postSchemaMd(req:Request,res:Response,next:NextFunction) {
    const body = req.body;

    const bodySchema = Joi.object({
            firstUser: Joi.string().required(),
            secondUser: Joi.string().required()
    });

    const validation = bodySchema.validate(body,{ abortEarly: true });

    if (validation.error) {
        throw { type: 'schemaValidation', message: validation.error.details }
      }

    next();
}

export default postSchemaMd;