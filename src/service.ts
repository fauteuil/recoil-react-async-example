import axios from "axios";
import { UserApiData } from "./types";
import { userApiUrl } from "./configuration";

export async function getUsers(userId?: string) {
  try {
    const response = await axios.get<UserApiData>(userApiUrl);
    return response.data || [];
  } catch (error) {
    throw new Error(
      `Error in 'axiosGetJsonData(${userApiUrl})': ${error.message}`
    );
  }
}
