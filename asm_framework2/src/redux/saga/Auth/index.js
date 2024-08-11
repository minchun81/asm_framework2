import {
    all, //đăng kí middleware với Type
    select, //lấy state trong store (useSelector)
    put, // đẩy dữ liệu từ middleware qua Store
    takeLatest, //đăng kí middleware void Type
    call
} from "redux-saga/effects";
import {Auth} from "../../types";
import {homeAdmin} from "../../../services/Auth";
import { loginApi } from "../../../services/Auth";
function* authWatch() {
    yield all([takeLatest(Auth.USER_INFO, homdeAdminDash)]);
    yield all([takeLatest(Auth.AUTH_LOGIN, loginSaga)]);
}

function* homdeAdminDash() {

    const res = yield homeAdmin();

    yield put({
        type: Auth.AUTH_UPDATE,
        profile: res,
    });

}

function* loginSaga(action) {
    try {
        const response = yield call(loginApi, action.payload);
        if (response && response.accessToken) {
            yield put({
                type: Auth.AUTH_UPDATE,
                payload: {
                    token: response.accessToken,
                    role: response.role
                },
            });
            if (response.role === 1) {
                // Admin role
                window.location.href = "/admin";
            } else if (response.role === 0) {
                // User role
                window.location.href = "/";
            } else {
                alert("Invalid role.");
            }
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please try again.");
    }
}

  
export default authWatch;