import { Router } from "express";
import getBattleCr from "../controllers/getBattle.js";
import postSchemaMd from "../middlewares/postSchemaMd.js";
import userValidationMd from "../middlewares/userValidationMd.js";

const router = Router();

router.get('/battle', postSchemaMd,userValidationMd,getBattleCr)

export default router;