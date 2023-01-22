import axios from "axios";

export const getPosts = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export const getUsers = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
};

export const pictures = "https://picsum.photos/1500/1500.jpg";
