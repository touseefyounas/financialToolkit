const taxService = require('../services/tax-service');

const getTax = (req, res) => {
    try {
        console.log('Received request body:', req.body);  
        const { income, per, province } = req.body;
        
        const numericIncome = Number(income);
        
        console.log('Processing request with:', { income: numericIncome, per, province });  // Debug log
        
        const federal = taxService.getFederalTax(numericIncome, per, province);
        const provincial = taxService.getProvincialTax(numericIncome, per, province);
        
        console.log('Calculated taxes:', { federal, provincial });  // Debug log
        
        res.status(200).json({
            federalTax: federal, 
            provincialTax: provincial
        });
    } catch (err) {
        console.error('Error in getTax:', err);  // Debug log
        res.status(400).json({message: err.message})
    }
}

module.exports = { getTax }