import axios from "axios";

const API_URL= "http://localhost:4000";

function createHeaders() {
    const token = JSON.parse(localStorage.getItem("wallet"))?.token;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };

    return config
}

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

