import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/contactState";
import AlertState from "./context/alert/alertState";
import Alerts from "./components/layouts/Alert";
const App = () => {
  return (
    <ContactState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Alerts />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </ContactState>
  );
};

export default App;
