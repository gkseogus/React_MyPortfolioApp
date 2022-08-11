import AllRoutesApp from './allRoutes';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <AllRoutesApp/>
      </ChakraProvider>
    </div>
  );
}

export default App;
