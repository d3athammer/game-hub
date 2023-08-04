import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "21ead42227eb4cf3aeb7b54aae57fccc",
//   },
// });


const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "21ead42227eb4cf3aeb7b54aae57fccc",
  },
});


class APIClient<T>{
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>{
    return axiosInstance
    //config to configure http request, such as params, headers, URL,etc
    .get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data);
  }
}

export default APIClient;
