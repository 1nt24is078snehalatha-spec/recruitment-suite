requireAuth();

async function loadUsers() {

    const users = await apiRequest("/users");

    const container = document.getElementById("usersList");

    users.forEach(user => {
        container.innerHTML += `
            <div class="card">
                <h4>${user.name}</h4>
                <p>${user.email}</p>
                <p>Role: ${user.role}</p>
            </div>
        `;
    });
}