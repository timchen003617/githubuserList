import "whatwg-fetch";
import HttpError from "./HttpError";

export const fetchJson = (url, options = {}) => {
  const requestHeaders =
    options.headers ||
    new Headers({
      Accept: "application/vnd.github.v3+json",
    });

  return fetch(url, { ...options, headers: requestHeaders })
    .then((response) => {
      return response.text().then((text) => ({
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        body: text,
      }));
    })
    .then(({ status, statusText, headers, body }) => {
      try {
        json = JSON.parse(body);
      } catch (error) {
        // not json, no big dea
      }
      if (status < 200 || status >= 300) {
        return Promise.reject((json && json.message) || statusText);
      }
      return { status, headers, body, json };
    })
    .catch((e) => {
      let errMsg = e.message;
      if (typeof errMsg === "string") {
        return Promise.reject(errMsg);
      } else {
        return Promise.reject(
          new HttpError(json.errorMsg || errMsg, 500, json)
        );
      }
    });
};
