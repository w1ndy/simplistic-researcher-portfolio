import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Link, Meta, MetaProvider, Title } from '@solidjs/meta'
import { Suspense } from 'solid-js'

import Nav from '~/components/Nav'
import InfoSidebar from '~/components/InfoSidebar'

import { PageTitle, PageDescription } from '~/config/info'

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
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Title>{PageTitle}</Title>
      <Meta
        name="description"
        content={PageDescription}
      />
      <Router
        root={(props) => (
          <>
            <div class="md:flex leading-6">
              <InfoSidebar class="flex-none" />
              <div class="px-10 md:px-0 md:ml-2 md:pr-10 md:h-screen flex-grow flex flex-col">
                <Nav class="flex-none" />
                <Suspense>{props.children}</Suspense>
              </div>
            </div>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  )
}
