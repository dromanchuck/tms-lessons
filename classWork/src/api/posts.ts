export const fetchPosts = (searchText: string, offset: number) => {
  return fetch(
    `https://studapi.teachmeskills.by/blog/posts/?limit=5&search=${searchText}&offset=${offset}`
  ).then((response) => {
    return response.json();
  });
};

export const fetchPostsAsync = async (searchText: string, offset: number) => {
  const response = await fetch(
    `https://studapi.teachmeskills.by/blog/posts/?limit=5&search=${searchText}&offset=${offset}`
  );

  const json = await response.json();

  return json;
};

// async function init() {
//   const values = await fetchPostsAsync();
// }
