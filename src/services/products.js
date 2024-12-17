import { productsModel } from "../db/models/products.js";

export const getAllProducts = () => {
    return productsModel.find();
  };

  export const getProductById = (productId) =>{
    return productsModel.findById(productId);
  };

  export const addProduct = (body) =>{
    return productsModel.create(body);
  };
