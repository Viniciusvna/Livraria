import axios from 'axios';
//Centro de dados para todos os endpoints
export const HTTP = axios.create({
  baseURL: 'http://localhost:8080/api',
  auth: {
    username: "admin",
    password: "quero10"
  }
  }
)
