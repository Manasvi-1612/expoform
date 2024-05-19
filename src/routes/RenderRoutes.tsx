import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const HOME = lazy(
  () => import('../pages/Home')
)


export default function RenderRoutes() {
  return (
    <Routes>
      {/* call back url */}
      
      <Route
        key={'HOME'}
        path="/"
        element={<HOME />}
      />
     
     
   
    </Routes>
  )
}
