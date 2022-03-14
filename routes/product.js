import { Router } from "express";
import { Creat, List, Read, Remove, Update } from "../controllers/product";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();




 router.get('/products', checkAuth, List);

 router.get('/products/:id', checkAuth, Read);

 router.post('/products', checkAuth, Creat);

 router.delete('/products/:id', checkAuth, Remove);
 
 router.put('/products/:id', checkAuth, Update);

 export default router