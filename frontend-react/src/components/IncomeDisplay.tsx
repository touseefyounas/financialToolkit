

interface IncomeDisplayProps {
    income: number;
    taxes: {
        federalTax: number;
        provincialTax: number;
        eIDeduction: number;
    }
    cadence: string;
  }

const IncomeDisplay: React.FC<IncomeDisplayProps> = ({income, taxes, cadence}) => {

    const convertValue = (value: number): number => {
        switch(cadence) {
            case 'annually':
                return value
            case 'monthly':
                return value / 12
            case 'biweekly':
                return value / 26
            case 'weekly':
                return value / 52
            case 'daily':
                return value / 260 
            case 'hourly':
                return value / 2080
            default:
                return value
        }
    }


    return (
        <>
        <div className="font-mono text-primary border-b-2">
            <div className="flex justify-between mb-2 font-semibold">
                <p>Salary</p>
                <p>${convertValue(income).toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>Federal Tax Deduction</p>
                <p>-${convertValue(taxes.federalTax).toFixed(2)}</p>

            </div>
            <div className="flex justify-between mb-2">
                <p>Provincial Tax Deduction</p>
                <p>-${convertValue(taxes.provincialTax).toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>CPP Deduction</p>
                <p>-$1000</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>EI Deduction</p>
                <p>-${convertValue(taxes.eIDeduction).toFixed(2)}</p>
            </div>
        </div>
        <div className="font-mono text-primary border-b-2">
            <div className="flex justify-between mb-2">
                <p>Total Tax</p>
                <p>-${convertValue((taxes.federalTax + taxes.provincialTax + taxes.eIDeduction)).toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2  font-semibold">
                <p>Net Pay</p>
                <p>${convertValue((income - (taxes.federalTax + taxes.provincialTax + taxes.eIDeduction))).toFixed(2)}</p>
            </div>
        </div>
        <div className="font-mono text-primary">
            <div className="flex justify-between mb-2">
                <p>Tax Rate</p>
                <p>{(((income - (income - (taxes.federalTax + taxes.provincialTax + taxes.eIDeduction)))/income)*100).toFixed(1)}%</p>
            </div>
        </div>
        </>
    )
}

export default IncomeDisplay;