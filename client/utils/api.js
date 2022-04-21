import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://gallery-rn.herokuapp.com/api/v1/posts",
});

module.exports = { baseUrl };
