import http from "../http-common";
import { LS_refreshToken } from "../constants/constant";
import { LS_accessToken } from "../constants/constant";

function isUnauthorizedError(error: any) {
    const {
        response: { status },
    } = error;
    return status === 401;
}

const get = (refreshToken: any) => {
    return http.get<{ refreshToken: string, accessToken: string }>(`/refreshToken/${refreshToken}`);
};

async function renewToken() {
    const refreshToken = localStorage.getItem(LS_refreshToken);

    if (!refreshToken)
        throw new Error('refresh token does not exist');

    const refreshPayload = {
        refreshToken: refreshToken
    };

    const response = await get(refreshPayload);
    const token = response.data.accessToken;
    const newRefreshToken = response.data.refreshToken;
    localStorage.setItem(LS_refreshToken, newRefreshToken)
    localStorage.setItem(LS_accessToken, token)

    return [token, newRefreshToken];
}

const ApiService
    = {
    renewToken,
    get,
    isUnauthorizedError,
};

export default ApiService;