import {
    all, // Đăng ký middleware với Type
    put, // Đẩy dữ liệu từ middleware qua Store
    takeLatest, // Đăng ký middleware với action type
    call // Gọi API hoặc các hàm khác
} from "redux-saga/effects";
import { Auth } from "../../types";
import { homeAdmin } from "../../../services/Auth";
import { loginApi } from "../../../services/Auth";

function* authWatch() {
    // Đăng ký các saga với action types
    yield all([
        takeLatest(Auth.USER_INFO, homeAdminDash),
        takeLatest(Auth.AUTH_LOGIN, loginSaga)
    ]);
}

function* homeAdminDash() {
    try {
        const res = yield call(homeAdmin);
        yield put({
            type: Auth.AUTH_UPDATE,
            profile: res
        });
    } catch (error) {
        console.error("Error fetching home admin data:", error);
    }
}

function* loginSaga(action) {
    try {
        const response = yield call(loginApi, action.payload);
        // Chỉ cập nhật profile mà không xử lý token và role
        if (response) {
            yield put({
                type: Auth.AUTH_UPDATE,
                profile: response
            });
            // Chuyển hướng dựa trên response có thể được thực hiện bên ngoài saga
        }
    } catch (error) {
        console.error("Login error:", error);
        // Thay vì alert, có thể dispatch một action để xử lý lỗi
        yield put({
            type: Auth.AUTH_LOGIN_FAILED,
            error: "Login failed. Please try again."
        });
    }
}

export default authWatch;
