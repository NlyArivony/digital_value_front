import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Dashboard from './components/Dashboard';
import { IdProvider } from './hooks/useIdContext';
import { DashboardProvider } from './hooks/useDashboardContext';

function App() {
  return (
    <ChakraProvider>
      <IdProvider>
        <DashboardProvider>
          <CSSReset />
          <Dashboard />
        </DashboardProvider>
      </IdProvider>

    </ChakraProvider>
  );
}

export default App;
