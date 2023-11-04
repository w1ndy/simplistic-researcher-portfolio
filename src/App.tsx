import { lazy } from 'solid-js'
import { Routes, Route, Navigate } from '@solidjs/router'

import { InfoSidebar } from './InfoSidebar'
import { Nav } from './Nav'

const About = lazy(() => import('./pages/About'))
const Publications = lazy(() => import('./pages/Publications'))
const Students = lazy(() => import('./pages/Students'))
const Vita = lazy(() => import('./pages/Vita'))

function App() {
  return (
    <div class="flex">
      <InfoSidebar class="flex-none" />
      <div class="ml-2 h-screen flex-grow flex flex-col">
        <Nav class="flex-none" />
        <Routes>
          <Route
            path="/"
            element={<Navigate href="/about" />}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/publications"
            component={Publications}
          />
          <Route
            path="/students"
            component={Students}
          />
          <Route
            path="/vita"
            component={Vita}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
