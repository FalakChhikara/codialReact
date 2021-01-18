import posts from "./post";

const initialRootState = {
  posts: [],
};

export default function rootReducer(state = initialRootState, action) {
  return {
    posts: posts(state.posts, action),
  };
}
