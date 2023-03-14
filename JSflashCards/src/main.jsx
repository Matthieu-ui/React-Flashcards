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
import NodePage from './routes/NodePage';
import MongoPage from './routes/MongoPage';
import TailwindPage from './routes/TailwindPage';
import AllCardsPage from './routes/AllCardsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/react",
    element: <ReactPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/node",
    element: <NodePage />,
    errorElement: <ErrorPage />,

  },

  {
    path: "/mongodb",
    element: <MongoPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/css",
    element: <TailwindPage />,
    errorElement: <ErrorPage />,

  },

  {
    path: "/knowitall",
    element: <AllCardsPage />,
    errorElement: <ErrorPage />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <main className='min-h-screen flex flex-col drop-shadow-lg'>
    <RouterProvider router={router} />
    <App />
    </main>

  </React.StrictMode>,
)
