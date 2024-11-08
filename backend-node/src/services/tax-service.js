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

    getEI(income, per, province) {
        const rate = province === 'QC'? tax.EI.PREMIUM_RATES.QC : tax.EI.PREMIUM_RATES.CA;
        const annualIncome = this.convertToAnnual(income, per);
        const insurableIncome = Math.min(annualIncome, tax.EI.MAX_INSURABLE_EARNINGS);
        return  insurableIncome * rate;
    }

    getCPP(income, per) {
        const annualIncome = this.convertToAnnual(income, per);

        const { MAX, MIN, AVG_MAX, SUP_MAX } = tax.CPP.CONTRIBUTIONS.PENSIONABLE_EARNINGS;
        const { BASE, ENHANCEMENT_STEP_1, ENHANCEMENT_STEP_2 } = tax.CPP.CONTRIBUTIONS.RATES;
    
        const pensionableEarnings = Math.max(0, Math.min(annualIncome - MIN, MAX - MIN));
    
        const baseContribution = pensionableEarnings * BASE;
    
        let enhancementRateStep1 = 0;
        for (const rateObj of ENHANCEMENT_STEP_1) {
            if (2024 >= rateObj.FROM && 2024 <= rateObj.TO) {
                enhancementRateStep1 = rateObj.RATE;
                break;
            }
        }
        const enhancementContributionStep1 = pensionableEarnings * enhancementRateStep1;
    
        const additionalPensionableEarnings = Math.max(0, Math.min(annualIncome, SUP_MAX) - AVG_MAX);
        const enhancementContributionStep2 = additionalPensionableEarnings * ENHANCEMENT_STEP_2;
    
        return baseContribution + enhancementContributionStep1 + enhancementContributionStep2;
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