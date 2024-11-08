const tax = require('@equisoft/tax-ca')

const income = 60000; // Example income
const province = 'ON'; // Example province, Ontario

const federalTax = tax.getFederalBaseTaxAmount(income)

const provincialTax = tax.getProvincialBaseTaxAmount(province, income)

function calculateCPPContribution(income) {
    const { MAX, MIN, AVG_MAX, SUP_MAX } = tax.CPP.CONTRIBUTIONS.PENSIONABLE_EARNINGS;
    const { BASE, ENHANCEMENT_STEP_1, ENHANCEMENT_STEP_2 } = tax.CPP.CONTRIBUTIONS.RATES;

    const pensionableEarnings = Math.max(0, Math.min(income - MIN, MAX - MIN));

    const baseContribution = pensionableEarnings * BASE;

    let enhancementRateStep1 = 0;
    for (const rateObj of ENHANCEMENT_STEP_1) {
        if (2024 >= rateObj.FROM && 2024 <= rateObj.TO) {
            enhancementRateStep1 = rateObj.RATE;
            break;
        }
    }
    const enhancementContributionStep1 = pensionableEarnings * enhancementRateStep1;

    const additionalPensionableEarnings = Math.max(0, Math.min(income, SUP_MAX) - AVG_MAX);
    const enhancementContributionStep2 = additionalPensionableEarnings * ENHANCEMENT_STEP_2;

    return baseContribution + enhancementContributionStep1 + enhancementContributionStep2;
}

const cppContribution = calculateCPPContribution(income);

console.log(`Federal Tax: `, federalTax);
console.log('Provincial Tax: ', provincialTax);
console.log(`Total CPP Contribution for 2024: $${cppContribution.toFixed(2)}`);
