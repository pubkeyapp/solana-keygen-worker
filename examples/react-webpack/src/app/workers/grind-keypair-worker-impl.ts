import { generateVanityKeypair, VanityKeypairResult } from '@solana-keygen-worker/generate-vanity-keypair'

export type SimpleKeypair = { publicKey: string; secretKey: number[] }
export type KeypairResult = {
  attempts: number
  duration: number
  keypair: SimpleKeypair
}

export class GrindKeypairWorkerImpl {
  grindKeypair({ startsWith }: { startsWith: string }): Promise<VanityKeypairResult> {
    return new Promise((resolve) => {
      return resolve(generateVanityKeypair({ startsWith, verbose: true }))
    })
  }
}
