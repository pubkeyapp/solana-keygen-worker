import { Code, Group, Table } from '@mantine/core'
import { UiCopy } from '@pubkey-ui/core'
import { VanityKeypairResult } from '@solana-keygen-worker/generate-vanity-keypair'

export function KeypairTable({ results }: { results: VanityKeypairResult[] }) {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Public Key</Table.Th>
          <Table.Th>Regex</Table.Th>
          <Table.Th style={{ textAlign: 'right' }}>Iterations</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {results.map((result) => (
          <Table.Tr key={result.publicKey}>
            <Table.Td>
              <Group gap="xs" align="center">
                <UiCopy text={result.publicKey} tooltip="Copy Public Key" />
                <UiCopy text={`[${result.secretKey?.join(',')}]`} tooltip="Copy Secret Key" />
                <Code>{result.publicKey}</Code>
              </Group>
            </Table.Td>
            <Table.Td>
              <Code>{`${result.regex}`}</Code>
            </Table.Td>
            <Table.Td style={{ textAlign: 'right' }}>
              {result.iterations} iterations took {result.duration}ms
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  )
}
