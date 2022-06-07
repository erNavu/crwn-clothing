import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/Homepage";
import {
  Routes,
  Route,
  useLocation,
  useParams,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/Header";
import Credentials from "./pages/credentials/Credentials.js";
import { setCurrentUser } from "./redux/user/userActions";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="shop" element={<Shop />} />
          <Route
            exact
            path="signin"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <Credentials />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
