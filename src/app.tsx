import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Link, Meta, MetaProvider, Title } from '@solidjs/meta'
import { Suspense } from 'solid-js'

import Nav from '~/components/Nav'
import InfoSidebar from '~/components/InfoSidebar'

import Info from '~/config/info'

import './app.css'

export default function App() {
  return (
    <MetaProvider>
      <Link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <Link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin=""
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Title>{Info.name}</Title>
      <Meta
        name="description"
        content={Info.description}
      />
      <Router
        root={(props) => (
          <>
            <div class="sm:flex leading-6">
              <InfoSidebar class="flex-none" />
              <div class="px-10 sm:px-0 sm:ml-2 sm:pr-10 sm:h-screen flex-grow flex flex-col">
                <Nav class="flex-none" />
                <Suspense>{props.children}</Suspense>
              </div>
              <div
                class="px-10 pb-10 text-gray-500 sm:hidden"
                innerHTML={Info.footnote}
              ></div>
            </div>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  )
}
