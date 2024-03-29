import { UiNotFound, UiThemeProvider } from '@pubkey-ui/core'
import { AppLayout, GrindKeypairFeature } from '@solana-keygen-worker/ui'
import { Navigate, useRoutes } from 'react-router-dom'

import '@pubkey-ui/core/index.esm.css'

import { grindKeypairService } from './workers/grind-keypair-service'

export function App() {
  return (
    <UiThemeProvider>
      <AppLayout links={[{ label: 'Grind Keypair', link: '/grind-keypair' }]}>
        {useRoutes([
          { path: '/', element: <Navigate replace to="/grind-keypair" /> },
          { path: '/grind-keypair', element: <GrindKeypairFeature grind={grindKeypairService.grindKeypair} /> },
          { path: '*', element: <UiNotFound /> },
        ])}
      </AppLayout>
    </UiThemeProvider>
  )
}
