import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from './404';
import ReactPage from './routes/ReactPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/react",
    element: <ReactPage />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <main className='bg-slate-600 min-h-screen flex flex-col drop-shadow-lg'>
    <RouterProvider router={router} />
    <App />
    </main>

  </React.StrictMode>,
)
