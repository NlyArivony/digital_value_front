import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;
