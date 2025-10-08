import { type FC } from 'react';
import { AppShell, Burger, createTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineProvider } from '@mantine/core';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

const App: FC = () => {
  const theme = createTheme({});
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>Logo</div>
      </AppShell.Header>
      <AppShell.Navbar>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        /></AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
    </MantineProvider>
  )
}

export default App
