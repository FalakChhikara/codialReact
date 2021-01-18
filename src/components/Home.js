import React, { Component } from "react";
import { PostsList } from "./";

class Home extends Component {
  render() {
    const { posts } = this.props;
    return <PostsList posts={posts} />;
  }
}

export default Home;
