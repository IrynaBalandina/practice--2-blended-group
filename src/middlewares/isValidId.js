import { isValidObjectId } from "mongoose";
import createError from "http-errors";

export const isValidationId = (req, res, next)=> {
    const {productId} = req.params;
    if(!isValidObjectId(productId)) {
        throw createError(404, `${productId} not valid id`);
    }
    next();
};
