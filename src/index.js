import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Register from './pages/register'
import Login from './pages/login'
import UploadFileToDropbox from './uploadtocloud/uploadfileform';
import FileList from './uploadtocloud/list';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';


const router = createBrowserRouter([
  {


    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path:"upload",
        element:<UploadFileToDropbox/>
      },
      {
        path: "lists",
        element:<FileList/>
      }
    ],
  },
]);
const root = document.getElementById('root');

const render = () => {
  ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
     

  );
};

render();