


const IncomeDisplay = () => {
    return (
        <>
        <div className="font-mono text-primary border-b-2">
            <div className="flex justify-between mb-2 font-semibold">
                <p>Salary</p>
                <p>$50000</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>Federal Tax Deduction</p>
                <p>-$10000</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>Provincial Tax Deduction</p>
                <p>-$5000</p>
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
        <div className="font-mono text-primary">
            <div className="flex justify-between mb-2">
                <p>Total Tax</p>
                <p>-$16500</p>
            </div>
            <div className="flex justify-between mb-2  font-semibold">
                <p>Net Pay</p>
                <p>$33500</p>
            </div>
        </div>
        </>
    )
}

export default IncomeDisplay;