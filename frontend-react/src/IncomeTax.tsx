import IncomeDisplay from "./IncomeDisplay";
import { useState, useEffect } from "react";

const IncomeTax = () => {

    const [ data, setData ] = useState({
        income:50000,
        per: 'annually',
        province: 'AB'
    });

    const [taxes, setTaxes] = useState({
        federalTax: 0,
        provincialTax:0,
        eIDeduction: 0,
    })

    const [cadence, setCadence ] = useState('annually');

    useEffect(()=>{
        console.log(data)
    }, [data])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
  
        setData((prevState)=>({
          ...prevState,
          [name]: value
        }))  
      }
      
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(data)
        try {
            const response = await fetch('http://localhost:8080/income-tax', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(data)
            })
            if (response.ok){
                const responseData = await response.json()
                console.log(responseData);
                setTaxes(responseData)
            }
        } catch(err){
            console.error('Error while fetching tax figures: ', err)
        }
    }

    return (
        <>
        <div className="w-10/12 mx-auto mt-10 rounded-3xl bg-white h-auto text-text shadow-lg">
            <div className="p-4 bg-secondary w-full rounded-t-3xl">
            <div className="mb-2">
            <h1 className="text-3xl font-semibold">Income tax calculator for Canada</h1>
            </div>
            <div className="mb-2">
                <h3 className="text-xl font-normal">Find out how much your salary is after tax</h3>
            </div>
            <div className='mb-2 mt-6'>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col xl:flex-row justify-center gap-6">
                    <div className="flex flex-wrap gap-3">
                    <div>
                        <label className="block text-sm p-1 pl-2" htmlFor='income'>Enter your income</label>
                        <input value={data.income} onChange={handleChange} type="number" name='income' required className="rounded-full h-10 px-3 text-primary font-medium min-w-[265px]" min='0'/>
                    </div>

                    <div>
                        <label className="block text-sm p-1 pl-2" htmlFor="per">Per</label>
                        <select value={data.per} onChange={handleChange} required name='per' className="rounded-full h-10 px-4 text-primary font-medium min-w-[265px]">
                        <option value="annually">Annually</option>
                        <option value="monthly">Monthly</option>
                        <option value="biweekly">Biweekly</option>
                        <option value="weekly">Weekly</option>
                        <option value="daily">Daily</option>
                        <option value="hourly">Hourly</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm p-1 pl-2" htmlFor="province">Where do you work?</label>
                        <select value={data.province} onChange={handleChange} required name='province' className="rounded-full h-10 text-primary px-4 font-medium">
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland and Labrador</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NU">Nunavut</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Prince Edward Island</option>
                        <option value="QC">Quebec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="YT">Yukon</option>
                        </select>
                    </div>
                    </div>

                    <div className="flex items-end mt-7">
                    <button type='submit' className="text-text bg-accent px-4 py-2 min-w-[200px] rounded-full h-10 hover:font-bold hover:bg-primary">Calculate</button>
                    </div>
                    </div>
                </form>
            </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
                <div className="flex items-center justify-center p-4 w-full gap-2 md:gap-12">
                    <h5 className="text-primary font-semibold">Salary Rate</h5>
                    <div>
                        <button onClick={()=> setCadence('annually')} className={`text-text ${cadence === 'annually'? 'bg-primary':'bg-accent'} px-4 py-2 min-w-[100px] rounded-full h-10 hover:font-bold hover:bg-primary mr-2 mb-2`}>Annual</button>
                        <button onClick={()=> setCadence('monthly')} className={`text-text ${cadence === 'monthly'? 'bg-primary':'bg-accent'} px-4 py-2 min-w-[100px] rounded-full h-10 hover:font-bold hover:bg-primary mr-2 mb-2`}>Monthly</button>
                        <button onClick={()=> setCadence('biweekly')} className={`text-text ${cadence === 'biweekly'? 'bg-primary':'bg-accent'} px-4 py-2 min-w-[100px] rounded-full h-10 hover:font-bold hover:bg-primary mr-2 mb-2`}>Biweekly</button>
                        <button onClick={()=> setCadence('weekly')} className={`text-text ${cadence === 'weekly'? 'bg-primary':'bg-accent'} px-4 py-2 min-w-[100px] rounded-full h-10 hover:font-bold hover:bg-primary mr-2 mb-2`}>Weekly</button>
                        <button onClick={()=> setCadence('daily')} className={`text-text ${cadence === 'daily'? 'bg-primary':'bg-accent'} px-4 py-2 min-w-[100px] rounded-full h-10 hover:font-bold hover:bg-primary mr-2 mb-2`}>Daily</button>
                        <button onClick={()=> setCadence('hourly')} className={`text-text ${cadence === 'hourly'? 'bg-primary':'bg-accent'} px-4 py-2 min-w-[100px] rounded-full h-10 hover:font-bold hover:bg-primary mr-2 mb-2`}>Hourly</button>
                    </div>
                </div>
                <div className="max-w-[640px] w-full px-10 lg:px-20 mb-4">
                    <IncomeDisplay income={data.income} taxes={taxes} cadence={cadence}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default IncomeTax;