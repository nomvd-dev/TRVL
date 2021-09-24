import NavBar from "./components/NavBar";
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/trvl' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
