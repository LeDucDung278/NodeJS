import { Router } from "express";
import { Creat, List } from "../controllers/user";
import { checkAuth } from "../middlewares/checkAuth"

const router = Router();

router.get('/users', checkAuth, List);
router.post('/user', checkAuth, Creat);

export default router