const BASE_URL = "https://recruitment-suite-1.onrender.com/";

async function apiRequest(endpoint, method="GET", body=null, isForm=false) {

    const token = localStorage.getItem("token");

    const headers = {};

    if (token) {
        headers["Authorization"] = "Bearer " + token;
    }

    if (!isForm) {
        headers["Content-Type"] = "application/json";
    }

    const response = await fetch(BASE_URL + endpoint, {
        method: method,
        headers: headers,
        body: body ? (isForm ? body : JSON.stringify(body)) : null
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.detail || "Error");
        throw new Error("API Error");
    }

    return response.json();
}