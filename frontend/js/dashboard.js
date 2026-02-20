requireAuth();

async function loadDashboard() {

    const profile = await apiRequest("/profile");

    document.getElementById("username").innerText = profile.name;
    document.getElementById("useremail").innerText = profile.email;

    if (profile.role === "candidate") {
        loadMyApplications();
    }

    if (profile.role === "recruiter") {
        document.getElementById("recruiterSection").style.display = "block";
    }

    if (profile.role === "admin") {
        document.getElementById("adminLink").style.display = "block";
    }
}

async function loadMyApplications() {
    const apps = await apiRequest("/my-applications");

    const container = document.getElementById("appsContainer");

    apps.forEach(app => {
        container.innerHTML += `
            <div class="card">
                <h4>${app.job_title}</h4>
                <p>Status: ${app.status}</p>
                <p>AI Score: ${app.match_score}%</p>
            </div>
        `;
    });
}