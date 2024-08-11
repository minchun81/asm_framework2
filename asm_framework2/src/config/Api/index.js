import axios from "axios";
import { Cookies } from "react-cookie";

export const BASE_URL = "http://localhost:3001";

const request = async ({
  method = "GET",
  path = "",
  data = {},
  headers = {},
}) => {
  try {
    const cookie = new Cookies();
    const token = cookie.get("token");

    const res = await axios({
      method: method,
      baseURL: BASE_URL,
      url: path,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
      },
    });

    return res.data;
  } catch (err) {
    console.log(err);
    alert(err?.response?.data?.message);
    return null;
  }
};

export default request;
