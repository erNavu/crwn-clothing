import "./App.css";
import React, { Component } from "react";
import HomePage from "./pages/homepage/Homepage";
import {
  Routes,
  Route,
  useLocation,
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/Header";
import Credentials from "./pages/credentials/Credentials.js";

import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      console.log(user);
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<Credentials />} />
        </Routes>
      </div>
    );
  }
}

export default App;
