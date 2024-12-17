import {Schema, model} from "mongoose";
import { categoryList } from "../../constants/constans.js";

const productSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        enum: categoryList,
        required: true,
        default: 'other',
      },
      description: {
        type: String,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  );
  export const productsModel = model('product', productSchema);
