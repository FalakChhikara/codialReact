import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import jwt_decode from "jwt-decode";

import { fetchPost } from "../actions/posts";

import { Navbar, Home, Page404, Login, Signup } from "./";
import { authenticateUser } from "../actions/auth";

const Settings = () => {
  return <div>Setting</div>;
};

const PrivateRoute = (PrivateRouteProps) => {
  const { isLoggedIn, path, component: Component } = PrivateRouteProps;
  // console.log("****isogin**** ", isLoggedIn);
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPost());
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const user = jwt_decode(token);
        // console.log("***user*** ", user);
        this.props.dispatch(
          authenticateUser({
            email: user.email,
            _id: user._id,
            name: user.name,
          })
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    const { posts, auth } = this.props;
    // console.log("***Auth***", auth);
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}

          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul> */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                // use some logic
                return <Home {...props} posts={posts} />;
              }}
            />
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute
              exact
              path="/settings"
              component={Settings}
              isLoggedIn={auth.isLogin}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  posts: Proptypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);
