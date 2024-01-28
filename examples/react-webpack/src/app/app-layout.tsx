import { ActionIcon, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { UiContainer, UiHeader, UiHeaderLink, UiLayout } from '@pubkey-ui/core'
import { IconBrandGithub, IconBrandX } from '@tabler/icons-react'
import { ReactNode } from 'react'

export function AppLayout({ children, links }: { children: ReactNode; links: UiHeaderLink[] }) {
  const [opened, { toggle }] = useDisclosure(false)
  const icons: { href: string; icon: ReactNode }[] = [
    { href: 'https://github.com/pubkeyapp/solana-keygen-worker', icon: <IconBrandGithub /> },
    { href: 'https://x.com/pubkeyapp', icon: <IconBrandX /> },
  ]
  return (
    <UiLayout
      header={
        <UiHeader
          opened={opened}
          toggle={toggle}
          links={links}
          profile={
            <Group>
              {icons.map(({ href, icon }) => (
                <ActionIcon key={href} variant="light" size="lg" component="a" href={href} target="_blank">
                  {icon}
                </ActionIcon>
              ))}
            </Group>
          }
        />
      }
    >
      <UiContainer>{children}</UiContainer>
    </UiLayout>
  )
}
