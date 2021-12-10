import axios, { AxiosRequestConfig } from 'axios';
import { LooseObject } from './types';

const request = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
    headers: {
        'Content-Type': 'application/json',
    },
});

const normalizeRequest = (request: AxiosRequestConfig) => {
    if (!request) {
        return request;
    }

    if (Array.isArray(request)) {
        return request.reduce((acc, value) => {
            if (value instanceof Object) {
                acc.push(normalizeRequest(value,));
            } else {
                acc.push(value);
            }

            return acc;
        }, []);
    }

    return Object.entries(request).reduce((acc: LooseObject, [key, value]) => {
        const newKey = key
            .split('')
            .map((str) => (str === str.toUpperCase() ? `_${str.toLowerCase()}` : str))
            .join('');

        if (value instanceof Object) {
            acc[newKey] = normalizeRequest(value);
        } else {
            acc[newKey] = value;
        }

        return acc;
    }, {});
};

function requestMapper(requestToSend: AxiosRequestConfig) {
    const { data, params } = requestToSend;
    return {
        ...requestToSend,
        data: normalizeRequest(data),
        params: normalizeRequest(params),
    };
}

/**
 * Request interceptor for mapping the request to snake_case
 */
request.interceptors.request.use(requestMapper);

export default request;