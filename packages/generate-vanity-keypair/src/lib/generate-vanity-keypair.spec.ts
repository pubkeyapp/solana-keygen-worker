import { expect } from 'vitest';
import { generateVanityKeypair } from './generate-vanity-keypair';

describe('generateVanityKeypair', () => {
  it('should generate a keypair with a public key matching the given regex', () => {
    const kp = generateVanityKeypair({
      startsWith: 'a',
      endsWith: 'b',
      caseSensitive: true,
      verbose: true,
    });
    expect(kp.publicKey.toBase58()).toMatch(/^a.*b$/);
  });
});
