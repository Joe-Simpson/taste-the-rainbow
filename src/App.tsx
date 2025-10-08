import { type FC } from 'react';
import { createTheme } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { useState } from 'react';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { Login } from './components/Login';
import Home from './features/home';

const App: FC = () => {
  const theme = createTheme({
    primaryColor: 'blue',
    defaultRadius: 'md'
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {!isLoggedIn ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <Home />
      )}
    </MantineProvider>
  )
}

export default App
