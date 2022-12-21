import axios from "axios"



const USER_URL = "https://api.github.com/users"

export const API = {
  getUser: async()=> axios.get(`${USER_URL}/ESHONQUL08012003`),
  getRepo: async()=> axios.get(`${USER_URL}/ESHONQUL08012003/repos`),
  getFollow: async()=> axios.get(`${USER_URL}/ESHONQUL08012003/following`),

  getSearch: async (user_name) => {
    let data = await axios.get(
      `https://api.github.com/search/users?q=${user_name}`
    );
    return data;
  }
}

