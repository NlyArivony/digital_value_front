import React from 'react';
import { ChakraProvider, Container, CSSReset } from '@chakra-ui/react';
import Dashboard from './components/Dashboard';
import { DashboardProvider } from './hooks/useDashboardContext';
import { ExplorerProvider } from './hooks/useExplorerContext';

function App() {
  return (
    <ChakraProvider>
      <Container maxW='container.lg' >
        <ExplorerProvider>
          <DashboardProvider>
            <CSSReset />
            <Dashboard />
          </DashboardProvider>
        </ExplorerProvider>
      </Container>
    </ChakraProvider>
  );
}

export default App;
