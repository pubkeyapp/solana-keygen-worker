import { VanityKeypairResult } from '@solana-keygen-worker/generate-vanity-keypair'

const worker = new Worker(new URL('./grind-keypair-worker.ts', import.meta.url), { type: 'module' })

export function grindKeypair({ startsWith }: { startsWith: string }) {
  return new Promise<VanityKeypairResult>((resolve) => {
    const listener = (event: MessageEvent<VanityKeypairResult>) => {
      worker.removeEventListener('message', listener)
      resolve(event.data)
    }
    worker.addEventListener('message', listener)
    worker.postMessage({ type: 'message', startsWith })
  })
}
