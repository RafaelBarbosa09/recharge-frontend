import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}