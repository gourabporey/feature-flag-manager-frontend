const post = async (url: string, content: object) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(content),
  });
};

const get = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default { get, post };
