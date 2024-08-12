import { Auth } from "../../types";
const HomeAdmin = () => {
    return {
      type: Auth.USER_INFO,
    };
  };
  
  const Login = (payload) => {
    return {
      type: Auth.AUTH_LOGIN,
      payload,
    };
  };
export  {HomeAdmin,Login};