import { MainThreadBus, ObjectCopyTransport } from 'web-worker-bus'

const worker = new Worker(new URL('./grind-keypair-worker', import.meta.url))
const transport = new ObjectCopyTransport(worker)

MainThreadBus.instance.registerBusWorkers([transport])
export const grindKeypairWorkerFactory = MainThreadBus.instance.createFactoryService(transport)
