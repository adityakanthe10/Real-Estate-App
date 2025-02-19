import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  console.log(request);
  // const url = new URL(request.url);
  // const query = url.search;
  const query = request.url.split("?")[1];
  // const res = await apiRequest("/posts?" + query);
  // return res.data;

  const postPromise = apiRequest("/posts?" + query);
  return {
    postResponse: postPromise,
  };
};
