import axios from "axios"


const USER_URL = "https://api.github.com/users/"

export const API = {
  getUser: async()=> axios.get(`${USER_URL}ESHONQUL08012003`)
}
