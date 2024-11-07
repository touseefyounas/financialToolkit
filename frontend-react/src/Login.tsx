


const Login = () => {
    return (
        <>
        <div>
            <div className=' w-full m-4'>
                <div className="w-5/6 sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto mt-20 bg-secondary rounded-3xl">
                <form className='rounded-lg text-text  m-4 py-4 px-6 '>
                    <label><h1 className='pb-2 text-text text-xl font-medium'>Login to Your Account</h1></label>

                    <div className='mb-5'>
                    <label className='block m-1 p-2 text-sm font-mediumtext-white' htmlFor='email'>Email</label>
                    <input  type="text" name="email" required className="block w-full p-2.5 text-primary bg-background rounded-full"/>
                    </div>

                    <div className='mb-5'>
                    <label className='block m-1 p-2 text-sm font-medium text-primary dark:text-white' htmlFor='password'>Password</label>
                    <input type="password" name="password" className="block w-full p-2.5 text-primary bg-background rounded-full"/>
                    </div>

                    <div className='mb-5'>
                    
                    <button type='submit' className="text-text bg-accent mr-4 mt-2 px-4 py-2 rounded-full w-full hover:font-bold hover:bg-primary">Login</button>
              
                    </div>                   
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;