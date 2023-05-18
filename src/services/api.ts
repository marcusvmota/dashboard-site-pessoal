import axios from "axios"

const api = axios.create({
  baseURL: `https://json-server-xk2d.onrender.com`,
})

export default api
