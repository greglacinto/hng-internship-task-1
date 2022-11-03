import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom';
import './index.css';


//add router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Home />);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)