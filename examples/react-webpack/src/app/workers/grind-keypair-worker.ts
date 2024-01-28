import { BusWorker, ObjectCopyTransport, ServiceGetter } from 'web-worker-bus'
import { container } from './grind-keypair-worker-container'

/* eslint-disable-next-line no-restricted-globals */
const worker = self as unknown as Worker

function serviceGetter(serviceName: string | symbol): ServiceGetter {
  return container[serviceName as keyof typeof container] as unknown as ServiceGetter
}

BusWorker.connectToBus(new ObjectCopyTransport(worker), serviceGetter)
