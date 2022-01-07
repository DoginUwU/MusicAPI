import axios, {
    AxiosInstance
} from "axios";

let api: AxiosInstance | null = null;

const _initialize = () => {
    api = axios.create({
      baseURL:
        "https://still-brushlands-24168.herokuapp.com/https://www.googleapis.com/youtube/v3/",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
      params: {
        key: "AIzaSyA3-mWNUp0F_YZb0dG3BMHQqP9VJfZbPtk",
      },
      withCredentials: true,
    });
};

if (!api) _initialize();

export default api;