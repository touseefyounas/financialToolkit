import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App'

const Router = () => {

    const appRouter = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path='/' element={<App />}>
                
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