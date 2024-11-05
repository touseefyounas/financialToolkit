
const Register = () => {
    return (
        <>
        <div>
            <div className=' w-full m-4'>
                <div className="w-2/6 mx-auto mt-20 bg-secondary rounded-xl">
                <form className='rounded-lg text-text  m-4 py-4 px-6 '>
                    <label><h1 className='pb-2 text-text text-xl font-medium'>Register Your Account</h1></label>
                    
                    <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
                    <div className='mb-5 flex-1'>
                    <label className='block m-1 p-2 text-sm font-medium text-white' htmlFor='firstName'>First Name *</label>
                    <input type="text" name="firstName" required className="block w-full p-2.5 text-primary bg-background rounded-full" />
                    </div>
                    <div className='mb-5 flex-1'>
                    <label className='block m-1 p-2  text-sm font-medium text-white' htmlFor='lastName'>Last Name *</label>
                    <input className="block w-full p-2.5 text-primary bg-background rounded-full" type="text" name="lastName"/>
                    </div>
                    </div>

                    <div className='mb-5'>
                    <label className='block m-1 p-2 text-sm font-mediumtext-white' htmlFor='email'>Email *</label>
                    <input  type="text" name="email" autoComplete="address-line1" required className="block w-full p-2.5 text-primary bg-background rounded-full"/>
                    </div>

                    <div className='mb-5'>
                    <label className='block m-1 p-2 text-sm font-medium text-white' htmlFor='username'>Username</label>
                    <input type="text" name="username" autoComplete="address-line2" className="block w-full p-2.5 text-primary bg-background rounded-full"/>
                    </div>

                    <div className='mb-5'>
                    <label className='block m-1 p-2 text-sm font-medium text-primary dark:text-white' htmlFor='password'>Password</label>
                    <input type="password" name="password" autoComplete="address-line2" className="block w-full p-2.5 text-primary bg-background rounded-full"/>
                    </div>

                    <div className='mb-5'>
                    
                    <button type='submit' className="text-text bg-accent mr-4 px-4 py-2 mt-2 rounded-full w-full hover:font-bold hover:bg-primary">Register Now</button>
              
                    </div>                   
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register