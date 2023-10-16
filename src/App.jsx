import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './header';

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
      </div>
    </ChakraProvider>
  );
}

export default App;

