import axios from "axios";
const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        baseURL:
          "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd",
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { post };
