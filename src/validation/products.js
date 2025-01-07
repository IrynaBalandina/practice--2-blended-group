import Joi from "joi";
import { categoryList } from "../constants/constans.js";

export const createProductSchema = Joi.object({
name:Joi.string().required(),
price:Joi.number().required(),
category:Joi.string().valid(...categoryList).required(),
description:Joi.string(),
});

export const updateProductSchema = Joi.object({
    name:Joi.string(),
    price:Joi.number(),
    category:Joi.string().valid(...categoryList),
    description:Joi.string(),
    });
