import { ADD_COMMENT, CREATE_POST, UPDATE_POST } from "../actions/actionTypes";

export const currPostState = [];

export default function posts(currState = currPostState, action) {
  switch (action.type) {
    case UPDATE_POST:
      return action.posts;
    case CREATE_POST:
      return [action.post, ...currState];
    case ADD_COMMENT:
      const newPosts = currState.map((post) => {
        if (post._id === action.postId) {
          return {
            ...post,
            comments: [action.comment, ...post.comments],
          };
        }
        return post;
      });
      return newPosts;
    default:
      return currState;
  }
}
