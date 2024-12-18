import createHttpError from "http-errors";
import { addProduct, deleteProduct, getAllProducts, getProductById, patchProduct } from "../services/products.js";

export const getAllProductsController = async (req, res) => {
    const products = await getAllProducts();
    res.json({
      status: 200,
      message: 'Successfully found products!',
      data: products,
    });
  };

  export const getProductsByIdController = async (req, res) => {
    const { productId } = req.params;

    const product = await getProductById(productId);
    if (!product) throw createHttpError(404, 'Product not found');

    res.json({
      status: 200,
      message: `Successfully found product with id ${productId}!`,
      data: product,
    });
  };

  export const addProductController = async(req, res)=>{
    console.log(req.body);
const product =await addProduct(req.body);
res.status(201).json({
  status: 201,
  message: "Successfully created a product!",
  data: product,
});
  };

export const patchProductController = async(req, res, next)=>{
const { productId } = req.params;
  const result = await patchProduct(productId, req.params);

  if (!result) {
    next(createHttpError(404, 'Product not found'));
    return;
  }
  res.json({
    status: 200,
    message: `Successfully patched a product!`,
    data: result.data,
  });
};

export const deleteProductController = async(req, res, next)=>{
  const { productId } = req.params;
  const data = await deleteProduct({_id:productId});
  if(!data) {
    throw createHttpError(404, `Contact with id=${productId} not found`);
}

res.status(204).send();
};
