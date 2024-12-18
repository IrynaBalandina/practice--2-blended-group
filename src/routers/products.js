import { Router } from "express";
import {ctrlWrapper}  from "../utils/ctrlWrapper.js";
import { addProductController, deleteProductController, getAllProductsController, getProductsByIdController, patchProductController } from "../controllers/products.js";

const router = Router();
router.get('/', ctrlWrapper(getAllProductsController));
router.get('/:productId', ctrlWrapper(getProductsByIdController));
router.post('/', ctrlWrapper(addProductController));
router.patch('/:productId', ctrlWrapper(patchProductController));
router.delete('/:productId', ctrlWrapper(deleteProductController));

export default router;
