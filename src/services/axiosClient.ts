import axios from 'axios'

export const axiosDnd = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api/'
  //   withCredentials: false,
})
