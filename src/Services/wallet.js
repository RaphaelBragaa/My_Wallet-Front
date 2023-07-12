import axios from "axios";
import createHeaders from "../utils/hooks/createHeaders";

const { REACT_APP_API_BASE_URL: API_URL } = process.env;

function signIn(body) {
    const promise = axios.post(`${API_URL}/login`, body);

    return promise;
}

function signUp(body) {
    const promise = axios.post(`${API_URL}/signup`, body);

    return promise;
}

function insertCash(body) {
    const config = createHeaders();
    const promise = axios.post(`${API_URL}/cash`, body, config);

    return promise;
}

function listCash() {
    const config = createHeaders();
    const promise = axios.get(`${API_URL}/cash`, config);

    return promise;
}

export {
    signIn,
    signUp,
    insertCash,
    listCash
};

