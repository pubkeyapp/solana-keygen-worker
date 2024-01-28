/* eslint-disable no-restricted-globals */
import { generateVanityKeypair } from '@solana-keygen-worker/generate-vanity-keypair'

self.addEventListener(
  'message',
  async (e: MessageEvent<{ startsWith: string }>) => {
    self.postMessage(
      generateVanityKeypair({
        startsWith: e.data.startsWith,
        verbose: true,
      }),
    )
  },
  false,
)
