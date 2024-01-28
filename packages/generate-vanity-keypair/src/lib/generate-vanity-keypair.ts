import { Keypair } from '@solana/web3.js';

export function generateVanityKeypair({
  startsWith,
  endsWith,
  caseSensitive,
  verbose,
}: {
  startsWith?: string;
  endsWith?: string;
  caseSensitive?: boolean;
  verbose?: boolean;
}): Keypair {
  let keypair: Keypair;
  let iterations = 0;
  const start = Date.now();
  const regex = new RegExp(
    `^${startsWith || ''}.*${endsWith || ''}$`,
    caseSensitive ? '' : 'i'
  );
  if (verbose) {
    console.log(`Searching for keypair with public key matching ${regex}`);
  }
  do {
    keypair = Keypair.generate();
    iterations++;
    if (verbose && iterations % 1000 === 0) {
      console.log(`Iteration ${iterations}...`);
    }
  } while (!regex.test(keypair.publicKey.toBase58()));

  if (verbose) {
    const end = Date.now();
    console.log(
      `Found keypair with public key ${
        keypair.publicKey
      } after ${iterations} iterations in ${
        end - start
      }ms. Searching for ${regex}`
    );
  }
  return keypair;
}
