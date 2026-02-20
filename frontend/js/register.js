async function register() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    await apiRequest("/register", "POST", {
        name,
        email,
        password,
        role
    });

    alert("Registered successfully");
    window.location.href = "login.html";
}