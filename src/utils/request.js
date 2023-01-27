import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd",
  timeout: 20000,
});
//get的参数必须是params
const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
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

export { post, get };
