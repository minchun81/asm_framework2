import request from "../../config/Api";

const loginApi = async ({ username, password }) => {
  const res = await request({
    path: "/api/login",
    method: "POST",
    data: {
      username: username,
      password: password,

    },
  });

  return res;
};

const homeAdmin = async () => {
  const res = await request({ path: "/admin" });

  return res;
};

export { loginApi, homeAdmin };
