// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header }   from './components/Header'
import { Hero }     from './components/Hero'
import { Carrosel } from './components/Carrosel'
import { Servicos } from './components/Servicos'
import { About }    from './components/About'
import { Cursos }    from './components/Cursos'
import { ServiceDescription }    from './components/ServiceDescription'
import { CursosDescription }    from './components/CursosDescription'
import { Blog } from './components/blog'
import { Admin }          from './components/Admin'
import { PostsProvider }  from './contexts/PostsContext'

import './global.css'


export default function App() {
  return (
    <BrowserRouter>
      <PostsProvider>
        <Header />

        <Routes>
          {/* Rota da Home: exibe Hero + Carrossel */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Carrosel />
              </>
            }
          />

          {/* Rota de Serviços */}
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/servicos/:id" element={<ServiceDescription />} />
          <Route path="/cursos/:id" element={<CursosDescription />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </PostsProvider>
    </BrowserRouter>
  )
}