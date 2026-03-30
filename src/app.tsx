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
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
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
            <div class="md:flex min-h-screen">
              <InfoSidebar class="flex-none" />
              <main class="flex-1 min-w-0 md:h-screen md:overflow-y-auto">
                <div class="max-w-6xl mx-auto px-8 md:px-16 py-6 md:py-10">
                  <Nav />
                  <Suspense>{props.children}</Suspense>
                </div>
              </main>
            </div>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  )
}
