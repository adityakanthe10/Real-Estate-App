import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  // console.log(request);
  const query = request.url.split("?")[1];
  const postPromise = apiRequest("/posts?" + query);
  return {
    postResponse: postPromise,
  };
};

export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profilePosts");
  const chatPromise = apiRequest("/chats");
  return {
    postResponse: postPromise,
    chatResponse: chatPromise,
  };
};
