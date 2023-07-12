export default function createHeaders() {
    const token = JSON.parse(localStorage.getItem("wallet"))?.token;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    
    return config
}