import { UPDATE_POST } from "./actionTypes";
import { APIUrls } from "../helpers/API_urls";

export function fetchPost() {
  return (dispatch) => {
    const url = APIUrls.fetchPost();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POST,
    posts: posts,
  };
}
