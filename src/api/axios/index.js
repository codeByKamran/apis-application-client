import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api-archive-backend.adaptable.app/api/v1"
      : "http://localhost:3500/api/v1",
});

export default instance;
