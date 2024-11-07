import React from 'react'
import HomePage from "./routes/Homepage/Homepage"
import './index.scss'
import ListPage from "./routes/listPage/ListPage"
import Layout from "./routes/layout/Layout"
import SinglePage from "./routes/singlePage/SinglePage"

//test code

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Layout/>,
      children:[
        {
          path :"/",
          element:<HomePage/>
        },
        {
          path: "/list",
          element: <ListPage/>,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
        },
      ]
    ,
  },
])

  return (
  
    <RouterProvider router={router}/>
  )
}



export default App