import { UiHeaderLink, UiNotFound, UiThemeProvider } from '@pubkey-ui/core'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'
import { AppLayout } from './app-layout'
import { GrindKeypair } from './grind-keypair/grind-keypair'

import '@pubkey-ui/core/index.esm.css'

export function App() {
  const links: UiHeaderLink[] = [
    // Add a link to the navbar
    { label: 'Grind Keypair', link: '/grind-keypair' },
  ]
  const routes: RouteObject[] = [
    // Add a route to the app
    { path: '/', element: <Navigate replace to="/grind-keypair" /> },
    { path: '/grind-keypair', element: <GrindKeypair /> },
    { path: '*', element: <UiNotFound /> },
  ]

  return (
    <UiThemeProvider>
      <AppLayout links={links}>{useRoutes(routes)}</AppLayout>
    </UiThemeProvider>
  )
}
