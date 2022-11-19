const Brand = require("../Models/Brand.model");


exports.createBrandService = async (data) => {
    const result = await Brand.create(data);
    return result;
};