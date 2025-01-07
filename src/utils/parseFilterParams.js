import { categoryList } from "../constants/constans.js";

const parseCategory = (category) => {
    const isString = typeof category === 'string';
    if (!isString) return;
    const isCategory = (category) => categoryList.includes(category);

    if (isCategory(category)) return category;
  };

  const parseNumber = (number) => {
    const isString = typeof number === 'string';
    if (!isString) return;

    const parsedNumber = parseFloat(number);
    if (Number.isNaN(parsedNumber)) {
      return;
    }

    return parsedNumber;
  };

export const parseFilterParams = (query) => {
    const { category, minPrice, maxPrice } = query;

    const parsedCategory = parseCategory(category);
    const parsedMaxPrice = parseNumber(maxPrice) ;
    const parsedMinPrice = parseNumber(minPrice);


    return {
        category: parsedCategory,
        maxPrice: parsedMaxPrice,
        minPrice: parsedMinPrice,

      };

  };
