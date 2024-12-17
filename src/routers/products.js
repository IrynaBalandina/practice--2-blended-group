import { Router } from "express";
import {ctrlWrapper}  from "../utils/ctrlWrapper.js";
import { addProductController, getAllProductsController, getProductsByIdController } from "../controllers/products.js";

const router = Router();
router.get('/', ctrlWrapper(getAllProductsController));
router.get('/:productId', ctrlWrapper(getProductsByIdController));
router.post('/', ctrlWrapper(addProductController));

export default router;
