import request from "../config/Api";

// Hàm để lấy danh sách người dùng
const users = async () => {
    const res = await request({
        method: "GET",
        path: "/users"
    });
    return res;
};

// Hàm để thêm người dùng mới
const addUser = async ({ username, email, password, role, status }) => {
    const data = {
        username: username,
        email: email,
        password: password,
        role: role,
        status: status
    };

    const res = await request({
        method: "POST",
        path: "/users",
        data: data,
    });
    return res;
};

export { users, addUser };
