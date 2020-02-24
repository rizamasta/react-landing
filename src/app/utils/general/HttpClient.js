import { UserSession } from 'app/utils';
const axios = require("axios").default;

axios.interceptors.request.use(function (config) {
    if (UserSession.data) {
        config.headers.Authorization = UserSession.data.token;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(error, 'response')
    return Promise.reject(error);
});

var opt = {
    headers: {
        'Content-Type': 'application/json',
    }
}

const decode = (obj) => {
    try {
        return new URLSearchParams(obj).toString();
    } catch (error) {
        return false;
    }
}

const config = (key) => {
    if (UserSession.data) {
        opt.headers.Authorization = 'Bearer ' + UserSession.data.token;
    }
    try {
        var res = "";
        switch (key) {
            case "url":
                res = process.env.REACT_APP_URL_API
                break;
            case "key":
                res = process.env.API_KEY
                break;
            default:
                res = "-";
                break;
        }
        return res;
    } catch (error) {
        console.error("Failed get URL environment", error);
        return "";
    }
}

/**
 * Axios with Method GET
 * @param uri is endpoint from URL
 * @param query is parameter query for get data 
 */
export async function RequestGet(uri, query) {
    if (query) {
        query = "?" + decode(query);
    }
    return await axios.get(config("url") + uri + (query || ''), opt);
}

/**
 * Axios with method POST
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestPost(uri, data) {
    if (data instanceof FormData) {
        opt.headers['Content-Type'] = 'multipart/form-data';
    }
    return await axios.post(config("url") + uri, data, opt);
}

/**
 * Axios with method PUT
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestPut(uri, data) {
    if (data instanceof FormData) {
        opt.headers['Content-Type'] = 'multipart/form-data';
    }
    return await axios.put(config("url") + uri, data, opt);
}

/**
 * Axios with method DELETE
 * @param uri is endpoint from URL
 * @param data is Object or Form Data
 */
export async function RequestDelete(uri) {
    return await axios.delete(config("url") + uri, opt);
}