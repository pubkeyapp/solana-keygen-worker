import { generateVanityKeypair, VanityKeypairResult } from '@solana-keygen-worker/generate-vanity-keypair'

export class GrindKeypairWorkerImpl {
  grindKeypair({ startsWith }: { startsWith: string }): Promise<VanityKeypairResult> {
    return new Promise((resolve) => {
      return resolve(generateVanityKeypair({ startsWith, verbose: true }))
    })
  }
}
