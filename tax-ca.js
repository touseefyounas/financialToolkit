const tax = require('@equisoft/tax-ca')

const incomeTax = (income, provnice) => {

    console.log('Federal Tax:', tax.getFederalTaxAmount(provnice,income))

    console.log('Provnicial Tax:', tax.getProvincialTaxAmount(provnice, income))

    console.log('CPP deduction: ', tax.EI)

    console.log('EI: ', tax.EI)
}

incomeTax(65000,'ON');