import axios from "axios"
import {
  HERRINGTONBROTHERS_ONLINE_USERNAME,
  HERRINGTONBROTHERS_ONLINE_PASSWORD
} from "react-native-dotenv"
const herringtonBrothersOnline = axios.create({
  baseURL: "https://herringtonbrothers.com",
  auth: {
    username: HERRINGTONBROTHERS_ONLINE_USERNAME,
    password: HERRINGTONBROTHERS_ONLINE_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
