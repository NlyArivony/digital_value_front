import React from 'react';
import { ChakraProvider, Container, CSSReset } from '@chakra-ui/react';
import Dashboard from './components/Dashboard';
import { IdProvider } from './hooks/useIdContext';
import { DashboardProvider } from './hooks/useDashboardContext';

function App() {
  return (
    <ChakraProvider>
      <Container maxW='container.lg' >
        <IdProvider>
          <DashboardProvider>
            <CSSReset />
            <Dashboard />
          </DashboardProvider>
        </IdProvider>
      </Container>
    </ChakraProvider>
  );
}

export default App;
