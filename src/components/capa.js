import axios from 'axios';

export const capa = axios.create({
  baseURL: 'googleapis.com/books/v1/volumes?q='
  }
)