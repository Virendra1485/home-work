import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_PAI_URL, // Replace with your backend API base URLnv,

});

console.log(process.env.REACT_APP_PAI_URL, "00000000000000000000000");
