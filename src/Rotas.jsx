import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Paginas/Login/Login'
import Interface from './Paginas/Interface/Interface'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Interface' element={<Interface />} />
            </Routes>
        </BrowserRouter>
    )
}