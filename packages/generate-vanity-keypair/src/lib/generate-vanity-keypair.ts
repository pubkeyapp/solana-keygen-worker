import { Keypair } from '@solana/web3.js'

export interface GenerateVanityKeypairOptions {
  caseSensitive?: boolean
  endsWith?: string
  startsWith?: string
  verbose?: boolean
}

export interface VanityKeypairResult {
  duration: number
  iterations: number
  publicKey: string
  regex: RegExp
  secretKey: number[]
}

export function generateVanityKeypair({
  startsWith,
  endsWith,
  caseSensitive,
  verbose,
}: GenerateVanityKeypairOptions): VanityKeypairResult {
  let keypair: Keypair
  let iterations = 0
  const start = Date.now()
  const regex = new RegExp(`^${startsWith || ''}.*${endsWith || ''}$`, caseSensitive ? '' : 'i')
  if (verbose) {
    console.log(`Searching for keypair with public key matching ${regex}`)
  }
  do {
    keypair = Keypair.generate()
    iterations++
    if (verbose && iterations % 1000 === 0) {
      console.log(`Iteration ${iterations}...`)
    }
  } while (!regex.test(keypair.publicKey.toBase58()))

  const end = Date.now()
  if (verbose) {
    console.log(
      `Found keypair with public key ${keypair.publicKey} after ${iterations} iterations in ${
        end - start
      }ms. Searching for ${regex}`,
    )
  }

  return {
    duration: end - start,
    iterations,
    publicKey: keypair.publicKey.toBase58(),
    regex,
    secretKey: Array.from(keypair.secretKey),
  }
}
