import { FETCH_POSTS } from "../constants";

export const fetchPost = (token, category) => ({
    type: FETCH_POSTS,
    token,
    category
});