import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "21ead42227eb4cf3aeb7b54aae57fccc",
//   },
// });

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "21ead42227eb4cf3aeb7b54aae57fccc",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return (
      axiosInstance
        //config to configure http request, such as params, headers, URL,etc
        .get<FetchResponse<T>>(this.endpoint, config)
        .then((res) => res.data)
    );
  };

  get = (id: number | string) => {
    return (
      axiosInstance
        // There is no need for FetchResponse because we are fetching a single game
        .get<T>(this.endpoint + "/" + id)
        .then((res) => res.data)
    );
  };
}

export default APIClient;
