


const IncomeTax = () => {
    return (
        <>
        <div className="w-10/12 mx-auto mt-10 rounded-3xl bg-white h-96 text-text shadow-lg">
            <div className="p-4 bg-secondary w-full rounded-t-3xl">
            <div className="mb-2">
            <h1 className="text-3xl font-semibold">Income tax calculator for Canada</h1>
            </div>
            <div className="mb-2">
                <h3 className="text-xl font-normal">Find out how much your salary is after tax</h3>
            </div>
            <div className='mb-2 mt-6'>
                <form>
                    <div className="flex gap-8">
                    <div>
                        <label className="block text-sm p-1 pl-2">Enter your income</label>
                        <input type="number" required className="rounded-full min-w-[200px] h-10 px-3 text-primary font-medium" min='0'/>
                    </div>

                    <div>
                        <label className="block text-sm p-1 pl-2" htmlFor="">Per</label>
                        <select required className="rounded-full min-w-[200px] h-10 px-4 text-primary font-medium">
                        <option value="annually">Annually</option>
                        <option value="monthly">Monthly</option>
                        <option value="biweekly">Biweekly</option>
                        <option value="weekly">Weekly</option>
                        <option value="daily">Daily</option>
                        <option value="hourly">Hourly</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm p-1 pl-2">Where do you work?</label>
                        <select required className="rounded-full min-w-[200px] h-10 text-primary px-4 font-medium">
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

                    <div className="mt-7">
                    <button type='submit' className="text-text bg-accent px-4 py-2 min-w-[200px] rounded-full h-10 hover:font-bold hover:bg-primary">Calculate</button>
                    </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </>
    )
}

export default IncomeTax;