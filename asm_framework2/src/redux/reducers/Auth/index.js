import { Auth } from "../../types";

const stateInit = {
  profile: null,
  token: null,
  role: null,
};

const auth = (state = stateInit, action) => {
    switch (action?.type) {
        case Auth.AUTH_UPDATE:
            return {
                ...state,
                ...action?.payload,
            };
        case Auth.AUTH_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                role: action.payload.role,
            };
        default:
            return { ...state };
    }
};

export default auth;
