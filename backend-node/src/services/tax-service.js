const tax = require('@equisoft/tax-ca')

class TaxService {

     getFederalTax (income, per)  {
        switch(per) {
            case 'annualy':
                return tax.getFederalTaxAmount(income)
            case 'monthly':
                return tax.getFederalTaxAmount(income*12)
            case 'biweekly':
                return tax.getFederalTaxAmount(income*24)
            case 'weekly':
                return tax.getFederalTaxAmount(income*52)
            case 'daily':
                return tax.getFederalTaxAmount(income*260)
            case 'hourly':
                return tax.getFederalTaxAmount(income*260*8)
        }
    }

    getProvincialTax(income, per, province) {
        switch(per) {
            case 'annualy':
                return tax.getFederalTaxAmount(province, income)
            case 'monthly':
                return tax.getFederalTaxAmount(province, income*12)
            case 'biweekly':
                return tax.getFederalTaxAmount(province, income*24)
            case 'weekly':
                return tax.getFederalTaxAmount(province, income*52)
            case 'daily':
                return tax.getFederalTaxAmount(province, income*260)
            case 'hourly':
                return tax.getFederalTaxAmount(province, income*260*8)
        }
    }
}

module.exports = new TaxService();