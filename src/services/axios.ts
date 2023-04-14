import axios from 'axios'

const backend: string = "https://api-site-kanban.onrender.com";
//const backend: string = "http://localhost:3333";

export const api = axios.create({
  baseURL: backend
})