import RouterComponent from './Routes/Router';
import GlobalState from './Global/GlobalState';
import GlobalStyle from './Global/GlobalStyle';

function App() {
  return (
    <GlobalState>
      <GlobalStyle />

      <RouterComponent />
    </GlobalState>
  );
}

export default App;
