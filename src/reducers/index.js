import posts from "./post";
import auth from "./auth";

import { currAuthState } from "./auth";
import { currPostState } from "./post";

const initialRootState = {
  posts: currPostState,
  auth: currAuthState,
};

export default function rootReducer(state = initialRootState, action) {
  return {
    posts: posts(state.posts, action),
    auth: auth(state.auth, action),
  };
}
