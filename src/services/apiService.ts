import http from "../http-common";
import { LS_REFRESH_TOKEN } from "../constants/constant";
import { LS_ACCESS_TOKEN } from "../constants/constant";

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
    const refreshToken = localStorage.getItem(LS_REFRESH_TOKEN);

    if (!refreshToken)
        throw new Error('refresh token does not exist');

    const refreshPayload = {
        refreshToken: refreshToken
    };

    const response = await get(refreshPayload);
    const token = response.data.accessToken;
    const newRefreshToken = response.data.refreshToken;
    localStorage.setItem(LS_REFRESH_TOKEN, newRefreshToken)
    localStorage.setItem(LS_ACCESS_TOKEN, token)

    return [token, newRefreshToken];
}

const ApiService
    = {
    renewToken,
    get,
    isUnauthorizedError,
};

export default ApiService;