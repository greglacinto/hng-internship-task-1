import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import Contact from './routes/contact';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.css';
import '../src/styles/contactMeForm.css';


//add router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "contact/",
        element: <Contact />
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Home />);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)