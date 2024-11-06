const tax = require('@equisoft/tax-ca')

class TaxService {
    getFederalTax(income, per, province) {
        const annualIncome = this.convertToAnnual(income, per)
        return tax.getFederalTaxAmount(province, annualIncome)
    }

    getProvincialTax(income, per, province) {
        const annualIncome = this.convertToAnnual(income, per)
        return tax.getProvincialTaxAmount(province, annualIncome)
    }

    convertToAnnual(income, per) {
        switch(per) {
            case 'annually':
                return income
            case 'monthly':
                return income * 12
            case 'biweekly':
                return income * 26
            case 'weekly':
                return income * 52
            case 'daily':
                return income * 260 
            case 'hourly':
                return income * 2080
            default:
                throw new Error('Invalid period specified')
        }
    }
}

module.exports = new TaxService();