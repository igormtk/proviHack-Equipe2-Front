import RouterComponent from "./Routes/Router";
import GlobalState from "./Global/GlobalState";
import GlobalStyle from "./Global/GlobalStyle";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />

      <RouterComponent />
    </GlobalState>
  );
}

export default App;
