const tax = require('@equisoft/tax-ca')

const income = 60000; // Example income
const province = 'ON'; // Example province, Ontario

const federalTax = tax.getFederalBaseTaxAmount(income)

const provincialTax = tax.getProvincialBaseTaxAmount(province, income)


console.log(`Federal Tax: `, federalTax);
console.log('Provincial Tax: ', provincialTax);

console.log(tax);

