import { Router } from "express";
import getRankingCr from "../controllers/getRankingCr.js";
import postBattleCr from "../controllers/postBattleCr.js";
import postSchemaMd from "../middlewares/postSchemaMd.js";
import userValidationMd from "../middlewares/userValidationMd.js";

const router = Router();

router.post('/battle', postSchemaMd,userValidationMd,postBattleCr);
router.get('/ranking',getRankingCr)

export default router;