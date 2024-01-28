import { Code, Group, Text } from '@mantine/core'
import { toastSuccess, UiCard, UiInfo, UiStack } from '@pubkey-ui/core'
import { VanityKeypairResult } from '@solana-keygen-worker/generate-vanity-keypair'

import { useEffect, useState } from 'react'
import { grindKeypairService } from '../workers/grind-keypair-service'
import { KeypairTable } from './keypair-table'
import { SearchForm } from './search-form'

export function GrindKeypair() {
  const [loading, setLoading] = useState(false)
  const [results, setResult] = useState<VanityKeypairResult[]>([])
  const [startsWith, setStartsWith] = useState('')
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    if (!startsWith.length) {
      return
    }
    setLoading(true)
    grindKeypairService
      .grindKeypair({ startsWith })
      .then((result) => {
        setResult([result, ...results])
        toastSuccess({
          title: 'New Keypair Found',
          message: `${result.publicKey} took ${result.duration}ms`,
        })
      })
      .finally(() => setLoading(false))
  }, [startsWith, trigger])

  return (
    <UiStack gap="xl" my="lg">
      <UiInfo
        title="About this tool"
        message={
          <UiStack>
            <Text>A vanity keypair is a keypair that starts or ends with a specific string.</Text>
            <Text>
              For example, if you wanted to find a keypair that starts with <Code>abc</Code>, you would enter{' '}
              <Code>abc</Code> in the search box and click <Code>Search</Code>.
            </Text>
            <Text>
              The tool will then grind until it finds a keypair that starts with <Code>abc</Code>.
            </Text>
            <Text>
              Lastly, the tool will display the public key, secret key, and the number of iterations it took to find
            </Text>
          </UiStack>
        }
      />
      <UiCard title="Grind keypair">
        <UiStack gap="xl" my="lg">
          <Group gap="xs">
            <SearchForm
              startsWith={startsWith}
              submit={(value) => {
                if (value === startsWith && results.length) {
                  setTrigger((prev) => !prev)
                } else {
                  setStartsWith(value)
                }
              }}
              loading={loading}
            />
          </Group>
          {results.length ? <KeypairTable results={results} /> : null}
        </UiStack>
      </UiCard>
    </UiStack>
  )
}
