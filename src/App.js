import "./App.css";
import { Provider } from "react-redux";
import store from "./store"
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Provider store={store}>
      
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/cart" element ={<Cart/>} />
        </Routes>

      </Provider>
      
    </Router>
    // <Router>

    //   <Provider store={{store}}>
    //     <Routes>
    //       <Route path="/" element = {<Home />}/>
    //       <Route path="/cart" element = {<Cart />}/>
    //     </Routes>
      
    //   </Provider>
      
    // </Router>
  );
}

export default App;
