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

  export const patchProduct = async(productId, payload, options={})=>{
    const {upsert = false} = options;
    const result = await productsModel.findOneAndUpdate(
      {_id:productId},
      payload,
      {
        new:true,
        upsert,
        includeResultMetadata: true,

    }
    );
    if(!result || !result.value) return null;
const isNew = Boolean(result.lastErrorObject.upserted);
return {
    isNew,
    data: result.value,
};
  };

  export const deleteProduct = async(productId)=>{
    const product = await productsModel.findOneAndDelete(productId);
    return product;
  };
