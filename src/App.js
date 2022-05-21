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

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state.currentUser)
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
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
