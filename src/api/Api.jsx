import axios from "axios"


const SER_URL="https://api.github.com/search/users?q"
const USER_URL = "https://api.github.com/users"

export const API = {
  getUser: async()=> axios.get(`${USER_URL}/ESHONQUL08012003`),
  getRepo: async()=> axios.get(`${USER_URL}/ESHONQUL08012003/repos`),
  getFollow: async()=> axios.get(`${USER_URL}/ESHONQUL08012003/following`),
  search: async()=> axios.get(`${SER_URL}`)
}

