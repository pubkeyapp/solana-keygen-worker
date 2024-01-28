import { Button, TextInput } from '@mantine/core'
import { useState } from 'react'

export function SearchForm({
  loading,
  startsWith,
  submit,
}: {
  loading: boolean
  startsWith: string
  submit: (value: string) => void
}) {
  const [value, setValue] = useState(startsWith)
  return (
    <TextInput
      size="lg"
      readOnly={loading}
      style={{ flex: 1 }}
      label="Search for public key"
      placeholder="Search for public key starting with..."
      description="The longer the string, the longer it will take to find a match. 1-3 characters is recommended."
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={
        <Button
          disabled={value.length < 1 || value.length > 3}
          loading={loading}
          fullWidth
          onClick={() => submit(value)}
          mr={6}
        >
          Search
        </Button>
      }
      rightSectionWidth={120}
    />
  )
}
