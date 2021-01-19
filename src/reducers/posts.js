import { UPDATE_POST } from "../actions/actionTypes";

export const currPostState = [];

export default function posts(currState = currPostState, action) {
  switch (action.type) {
    case UPDATE_POST:
      return action.posts;
    default:
      return currState;
  }
}
