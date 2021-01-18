import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";

import { fetchPost } from "../actions/posts";
import PostsList from "./PostsList";
import Navbar from "./Navbar";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPost());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <Navbar />
        <PostsList posts={posts} />
      </div>
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
