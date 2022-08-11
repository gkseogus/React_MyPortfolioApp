import AllRoutesApp from './allRoutes';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router basename={'process.env.PUBLIC_URL'}>
        <ChakraProvider>
          <AllRoutesApp/>
        </ChakraProvider>
      </Router>
    </div>
  );
}

export default App;
