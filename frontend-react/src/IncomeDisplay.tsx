
interface IncomeDisplayProps {
    income: number;
    taxes: {
        federalTax: Number;
        provincialTax: Number;
    }
  }

const IncomeDisplay: React.FC<IncomeDisplayProps> = ({income, taxes}) => {
    return (
        <>
        <div className="font-mono text-primary border-b-2">
            <div className="flex justify-between mb-2 font-semibold">
                <p>Salary</p>
                <p>${income}</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>Federal Tax Deduction</p>
                <p>-${taxes.federalTax.toFixed(2)}</p>

            </div>
            <div className="flex justify-between mb-2">
                <p>Provincial Tax Deduction</p>
                <p>-${taxes.provincialTax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>CPP Deduction</p>
                <p>-$1000</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>EI Deduction</p>
                <p>-$500</p>
            </div>
        </div>
        <div className="font-mono text-primary border-b-2">
            <div className="flex justify-between mb-2">
                <p>Total Tax</p>
                <p>-$16500</p>
            </div>
            <div className="flex justify-between mb-2  font-semibold">
                <p>Net Pay</p>
                <p>$33500</p>
            </div>
        </div>
        <div className="font-mono text-primary">
            <div className="flex justify-between mb-2">
                <p>Tax Rate</p>
                <p>33.0%</p>
            </div>
        </div>
        </>
    )
}

export default IncomeDisplay;