import AllRoutesApp from "./routesAll";
import { ChakraProvider } from "@chakra-ui/react";
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

console.log(
  `%c
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
`,
  "background:white; color:blue;"
);

const App = () => {
  return (
    <div className="App">
      <ChakraProvider>
        <MainNavBar />
        <ScrollToTopButton />
        <AllRoutesApp />
        <Footer />
      </ChakraProvider>
    </div>
  );
};

export default App;
