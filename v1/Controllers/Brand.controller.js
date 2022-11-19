const { createBrandService } = require("../Services/Brand.service");


exports.createBrand = async (req, res, next) => {
    try {

        const result = await createBrandService(req.body);

        result.logger();


        res.status(200).json({
            status: "success",
            message: "Data Inserted Successfull.",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Data isn't Inserted",
            error: error.message
        })
    };
};