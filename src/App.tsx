import AllRoutesApp from './routesAll';
import { ChakraProvider } from '@chakra-ui/react'
import MainNavBar from './components/MainNavBar';
import Footer from './components/Footer';

console.log(`%c
██╗  ██╗███████╗██╗     ██╗      ██████╗ 
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
██╗  ██╗██████╗ ██╗  ██╗    ██████╗ ██╗      ██████╗  ██████╗ 
██║  ██║██╔══██╗██║  ██║    ██╔══██╗██║     ██╔═══██╗██╔════╝ 
███████║██║  ██║███████║    ██████╔╝██║     ██║   ██║██║  ███╗
██╔══██║██║  ██║██╔══██║    ██╔══██╗██║     ██║   ██║██║   ██║
██║  ██║██████╔╝██║  ██║    ██████╔╝███████╗╚██████╔╝╚██████╔╝
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ 
`,'background:white; color:blue;');

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <MainNavBar />
        <AllRoutesApp />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
