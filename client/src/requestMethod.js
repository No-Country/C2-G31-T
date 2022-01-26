import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWI0YmY3ODg0NDc0M2QyYzA5MjMwZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzE1MzY3MywiZXhwIjoxNjQzNDEyODczfQ.xVuKdeJF4xEOWlyMGVjOq6_cIqbYO-i6z_JvYeM7GeA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
