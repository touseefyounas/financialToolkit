const taxService = require('../services/tax-service');


const getTax = (req, res) => {

  try {const { income, per, province } = req.body;

    const federal = taxService.getFederalTax(income, per);
    const provincial = taxService.getProvincialTax(income, per, province);

    res.status(200).json({federalTax: federal, provincialTax: provincial})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

module.exports = { getTax }