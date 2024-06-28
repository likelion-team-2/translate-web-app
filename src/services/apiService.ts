import http from "../http-common";
import { LS_refreshToken } from "../constants/constant";
import { LS_accessToken } from "../constants/constant";
import { TRefreshTokenInput, TRefreshTokenOutput } from "../constants/types";

function isUnauthorizedError(error: any) {
    const {
        response: { status },
    } = error;
    return status === 401;
}

const refreshToken = (input: TRefreshTokenInput) => {
    return http.post<TRefreshTokenInput, TRefreshTokenOutput>(`/v1/api/auth/refreshToken`, refreshToken);
};

async function renewToken() {
    const refreshToken = localStorage.getItem(LS_refreshToken);

    if (!refreshToken)
        throw new Error('refresh token does not exist');

    const refreshPayload: TRefreshTokenInput = {
        refreshToken: refreshToken
    };

    const response = await ApiService.refreshToken(refreshPayload);
    const token = response.data.accessToken;
    const newRefreshToken = response.data.refreshToken;
    localStorage.setItem(LS_refreshToken, newRefreshToken)
    localStorage.setItem(LS_accessToken, token)

    return [token, newRefreshToken];
}

const ApiService
    = {
    renewToken,
    refreshToken,
    isUnauthorizedError,
};

export default ApiService;