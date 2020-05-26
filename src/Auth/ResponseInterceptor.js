import axios from "axios";

let installedResponseInterceptor = null;

export function addResponseInterceptor(refresh) {
    installedResponseInterceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => errorResponseInterceptor(error, refresh)
    );
}

export function removeResponseInterceptor() {
    axios.interceptors.response.eject(installedResponseInterceptor);
    installedResponseInterceptor = null;
}

async function errorResponseInterceptor(error, refresh) {
    const origRequest = error.config;
    const origResponse = error.response;

    if (origResponse.status === 401 && origResponse.data.error === "Token has expired" && !origRequest._retry) {
        const access_token = await refresh();

        origRequest._retry = true;
        origRequest.headers["Authorization"] = `Bearer ${access_token}`;

        return await axios(origRequest);
    }

    return error;
}
