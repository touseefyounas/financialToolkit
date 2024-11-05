import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App'
import Register from './Register';

const Router = () => {

    const appRouter = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path='/' element={<App />}>
                <Route path='register' element={<Register/>}/>
            </Route>
        </>
    ))
    return (
        <>
        <RouterProvider router={appRouter}/>
        </>
    )
}

export default Router;