import "./App.css";
import Header from "./components/Header";
import Body from "./pages/Body";
import { Provider } from "react-redux";
import appStore from "./utils/store";
function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
