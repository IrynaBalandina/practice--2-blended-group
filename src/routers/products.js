import { Router } from "express";
import {ctrlWrapper}  from "../utils/ctrlWrapper.js";
import { addProductController, deleteProductController, getAllProductsController, getProductsByIdController, patchProductController } from "../controllers/products.js";
import { createProductSchema } from "../validation/products.js";
import {validateBody} from "../middlewares/validateBody.js";
import { isValidationId } from "../middlewares/isValidId.js";

const router = Router();
router.get('/', ctrlWrapper(getAllProductsController));
router.get('/:productId', isValidationId, ctrlWrapper(getProductsByIdController));
router.post('/', validateBody(createProductSchema), ctrlWrapper(addProductController));
router.patch('/:productId',isValidationId, ctrlWrapper(patchProductController));
router.delete('/:productId', isValidationId, ctrlWrapper(deleteProductController));

export default router;
