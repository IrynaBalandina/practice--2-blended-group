import { Router } from "express";
import {ctrlWrapper}  from "../utils/ctrlWrapper.js";
import { addProductController, deleteProductController, getAllProductsController, getProductsByIdController, patchProductController } from "../controllers/products.js";
import { createProductSchema } from "../validation/products.js";
import {validateBody} from "../middlewares/validateBody.js";
import { isValidationId } from "../middlewares/isValidId.js";

const productsRouter = Router();
productsRouter.get('/', ctrlWrapper(getAllProductsController));
productsRouter.get('/:productId', isValidationId, ctrlWrapper(getProductsByIdController));
productsRouter.post('/', validateBody(createProductSchema), ctrlWrapper(addProductController));
productsRouter.patch('/:productId',isValidationId, ctrlWrapper(patchProductController));
productsRouter.delete('/:productId', isValidationId, ctrlWrapper(deleteProductController));

export default productsRouter;
