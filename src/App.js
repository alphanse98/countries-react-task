import "./App.scss";
import Home from "./Home";
import { Provider } from "react-redux";
import { ReduxState } from "./component/Redux/ReduxStore";
import Details from "./component/Details/Details";
import Routes from'./routes/index';
import Header from "./component/header/Header";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes />
      {/* <Home/> */}
    </div>
  );
}

export default App;
