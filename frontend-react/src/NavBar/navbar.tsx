import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
        <div className='w-5/6 mx-auto h-20 bg-secondary m-2 rounded-full'>
            <div className="flex h-20 items-center justify-between">
                <h1 className="text-xl text-text mx-8">Financial ToolKit</h1>
                <div className="mx-4">
                    <Link to='register'>
                    <button className="text-text bg-accent mr-4 px-4 py-2 rounded-full min-w-[100px] hover:font-bold hover:bg-primary">Register</button>
                    </Link>
                    <Link to='login'>
                    <button className="text-text bg-primary mr-4 px-4 py-2 rounded-full min-w-[100px] hover:font-bold hover:bg-accent">Login</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;