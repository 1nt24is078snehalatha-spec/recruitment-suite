function requireAuth() {
    if (!localStorage.getItem("token")) {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}