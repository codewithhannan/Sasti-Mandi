const axios = require("axios");
const queryString = require("query-string");

// export const baseURL = "http://localhost:3000";
// const baseURL = "http://localhost:5000";
export const uploadURL = "https://quasr.s3.amazonaws.com/";
const baseURL = "http://quasr-env.eba-eskkqstt.ap-northeast-1.elasticbeanstalk.com";

export const postRequest = async (url, body = {}, headers = {}, token) => {
  let xform = queryString.stringify(body);
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
  };

  let returnValue;

  await axios
    .post(baseURL + url, xform, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const postRequestForm = async (url, token, body = {}, headers = {}) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  };

  let returnValue;

  await axios
    // baseURL +
    .post(baseURL + url, body, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const postWithParams = async (url, token, params = {}, headers = {}) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
    params: {
      ...params,
    },
  };

  let returnValue;

  await axios
    .post(baseURL + url, {}, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const getRequest = async (url, token, params = {}, headers = {}) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
    params: {
      ...params,
    },
  };

  let returnValue;

  await axios
    .get(baseURL + url, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const putRequestForm = async (url, token, body = {}, headers = {}) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  };
  console.log("config", config);
  let returnValue;

  await axios
    .put(baseURL + url, body, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};

export const putRequest = async (
  url,
  token,
  body,
  params = {},
  headers = {}
) => {
  let xform = queryString.stringify(body);
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
    params: {
      ...params,
    },
  };

  let returnValue;

  await axios
    .put(baseURL + url, xform, config)
    .then((result) => {
      returnValue = { result: result, error: null };
    })
    .catch((err) => {
      returnValue = { result: null, error: err };
    });
  return returnValue;
};
