const taxService = require('../services/tax-service');

const getTax = (req, res) => {
    try {  
        const { income, per, province } = req.body;
        
        const numericIncome = Number(income);
        
        const federal = taxService.getFederalTax(numericIncome, per, province);
        const provincial = taxService.getProvincialTax(numericIncome, per, province);
        const EI = taxService.getEI(income, per, province);
        
        res.status(200).json({
            federalTax: federal, 
            provincialTax: provincial,
            eIDeduction:  EI
        });
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

module.exports = { getTax }