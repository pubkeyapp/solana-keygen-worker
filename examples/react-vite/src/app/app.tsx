import { UiNotFound, UiThemeProvider } from '@pubkey-ui/core'
import { AppLayout, GrindKeypairFeature } from '@solana-keygen-worker/ui'

import '@pubkey-ui/core/index.esm.css'
import { Navigate, useRoutes } from 'react-router-dom'
import { grindKeypair } from './grind-geypair'

export function App() {
  return (
    <UiThemeProvider>
      <AppLayout links={[{ label: 'Grind Keypair', link: '/grind-keypair' }]}>
        {useRoutes([
          { path: '/', element: <Navigate replace to="/grind-keypair" /> },
          { path: '/grind-keypair', element: <GrindKeypairFeature grind={grindKeypair} /> },
          { path: '*', element: <UiNotFound /> },
        ])}
      </AppLayout>
    </UiThemeProvider>
  )
}
