import { Link } from "react-router-dom"


const Register = () => {
    return (
        <>
        <div className=''>
            <div className=' w-full m-4'>
                <div className="w-2/6 mx-auto mt-20 bg-secondary rounded-xl">
                <form className='rounded-lg text-text  m-4 py-4 px-6 '>
                    <label><h1 className='pb-2 text-text font-medium'>Register</h1></label>
                    
                    <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
                    <div className='mb-5 flex-1'>
                    <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='firstName'>First Name *</label>
                    <input type="text" name="firstName" required className="block w-full p-2.5 text-sm bg-background rounded-full border border-gray-300" />
                    </div>
                    <div className='mb-5 flex-1'>
                    <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='lastName'>Last Name *</label>
                    <input className="block w-full p-2.5 text-sm bg-background rounded-full border border-gray-300" type="text" name="lastName"/>
                    </div>
                    </div>

                    <div className='mb-5'>
                    <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='email'>Email *</label>
                    <input  type="text" name="email" autoComplete="address-line1" required className="block w-full p-2.5 text-sm bg-background rounded-full border border-gray-300"/>
                    </div>

                    <div className='mb-5'>
                    <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='username'>Username</label>
                    <input type="text" name="username" autoComplete="address-line2" className="block w-full  p-2.5 text-sm bg-background rounded-full border border-gray-300"/>
                    </div>

                    <div className='mb-5'>
                    <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='password'>Password</label>
                    <input type="password" name="password" autoComplete="address-line2" className="block w-full  p-2.5 text-sm bg-background rounded-full border border-gray-300"/>
                    </div>

                    <div className='mb-5'>
                    
                    <button type='submit' className="text-text bg-accent mr-4 px-4 py-2 rounded-full min-w-[100px] hover:font-bold hover:bg-primary">Register</button>
              
                    </div>                   
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register