import AllRoutesApp from './AllRoutes';
import { ChakraProvider } from '@chakra-ui/react'
import MainNavBar from './components/MainNavBar';

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <MainNavBar />
        <AllRoutesApp />
      </ChakraProvider>
    </div>
  );
}

export default App;
