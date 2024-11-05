


const Login = () => {
    return (
        <>
        <div>
            <div className=' w-full m-4'>
                <div className="w-2/6 mx-auto mt-20 bg-secondary rounded-xl">
                <form className='rounded-lg text-text  m-4 py-4 px-6 '>
                    <label><h1 className='pb-2 text-text text-xl font-medium'>Login to your Account</h1></label>

                    <div className='mb-5'>
                    <label className='block m-1 p-2 text-sm font-mediumtext-white' htmlFor='email'>Email</label>
                    <input  type="text" name="email" autoComplete="address-line1" required className="block w-full p-2.5 text-primary bg-background rounded-full"/>
                    </div>

                    <div className='mb-5'>
                    <label className='block m-1 p-2 text-sm font-medium text-primary dark:text-white' htmlFor='password'>Password</label>
                    <input type="password" name="password" autoComplete="address-line2" className="block w-full p-2.5 text-primary bg-background rounded-full"/>
                    </div>

                    <div className='mb-5'>
                    
                    <button type='submit' className="text-text bg-accent mr-4 px-4 py-2 rounded-full w-full hover:font-bold hover:bg-primary">Login</button>
              
                    </div>                   
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;