import { GrindKeypairWorkerImpl } from './grind-keypair-worker-impl'

export const KEYPAIR_WORKER = 'KEYPAIR_WORKER'

export const container = {
  [KEYPAIR_WORKER]: new GrindKeypairWorkerImpl(),
}
