import ReactGA from "react-ga4";
import { ChakraProvider } from "@chakra-ui/react";
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";
import AllRoutesApp from "./routesAll";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useEffect } from "react";

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
  useEffect(() => {
    ReactGA.initialize("G-YMEQKDPG6J");
    ReactGA.send("pageview");
  }, []);

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
