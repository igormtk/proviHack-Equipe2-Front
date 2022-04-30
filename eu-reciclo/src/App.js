import GlobalState from "./Global/GlobalState";
import GlobalStyle from "./Global/GlobalStyle";
import RouterComponent from "./Routes/Router";

function App() {
  return (
    <GlobalState>
      <GlobalStyle />

      <RouterComponent />
    </GlobalState>
  );
}

export default App;
