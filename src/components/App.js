import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { fetchPost } from "../actions/posts";

import { Navbar, Home, Page404, Login } from "./";

const Signup = () => {
  return <h1>Signup</h1>;
};

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPost());
  }

  render() {
    const { posts } = this.props;
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
                return <Home {...props} posts={posts} />;
              }}
            />
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
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
  };
}

export default connect(mapStateToProps)(App);
