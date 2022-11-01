import ReactGA from "react-ga4";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import AllRoutesApp from "./routesAll";
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
  useEffect(() => {
    ReactGA.initialize("G-YMEQKDPG6J");
    ReactGA.send("pageview");
  }, []);

  return (
    <div className="App">
      <RecoilRoot>
        <ChakraProvider>
          <ScrollToTopButton />
          <AllRoutesApp />
          <Footer />
        </ChakraProvider>
      </RecoilRoot>
    </div>
  );
};

export default App;
