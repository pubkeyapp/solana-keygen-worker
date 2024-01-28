import { ReturnType } from 'web-worker-bus'
import { KEYPAIR_WORKER } from './grind-keypair-worker-container'
import { grindKeypairWorkerFactory } from './grind-keypair-worker-factory'
import { GrindKeypairWorkerImpl } from './grind-keypair-worker-impl'

export const grindKeypairService = grindKeypairWorkerFactory<GrindKeypairWorkerImpl>(KEYPAIR_WORKER, ReturnType.promise)
