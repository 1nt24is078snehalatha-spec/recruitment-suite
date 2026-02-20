requireAuth();

async function loadJobs() {

    const jobs = await apiRequest("/jobs");

    const container = document.getElementById("jobsList");

    jobs.forEach(job => {
        container.innerHTML += `
            <div class="card">
                <h4>${job.title}</h4>
                <p>${job.description}</p>
                <p>Location: ${job.location}</p>
                <a href="apply.html?job_id=${job.id}">
                    <button>Apply</button>
                </a>
            </div>
        `;
    });
}