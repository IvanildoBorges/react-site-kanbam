import axios from 'axios'

const backend: string = "https://api-site-kanban-deploy.onrender.com"; //  http://localhost:3333

export const api = axios.create({
  baseURL: backend
})