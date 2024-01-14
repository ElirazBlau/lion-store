import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"

import React, { Suspense, lazy } from 'react'
import UserProvider from "./context/UserProvider"
import AdminLayout from "./components/layout/AdminLayout"
import NotFound from "./pages/NotFound"


const Admin = lazy(()=> import('./pages/Admin'))
const Home = lazy(()=> import('./pages/Home'))
const Login = lazy(()=> import('./pages/Login'))

function App() {
 

  return (
    <UserProvider>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
       <Route  element={<MainLayout/>}>
          {/* client */}
          <Route>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          {/* admin */}

         <Route>
          <Route path="admin" element={<AdminLayout/>} />
            <Route index element={<Admin />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </Suspense>
    </UserProvider>
  )
}

export default App