import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/contactState";
import AlertState from "./context/alert/alertState";
import Alerts from "./components/layouts/Alert";
import AuthState from "./context/auth/authState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <BrowserRouter>
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route eaxct path="/login" component={Login} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </BrowserRouter>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
