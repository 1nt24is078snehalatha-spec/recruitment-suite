AI-Powered Recruitment Suite
A full-stack, production-ready recruitment ecosystem. This platform automates the bridge between talent and opportunity using a FastAPI backend, Machine Learning for candidate scoring, and a responsive Vanilla JS frontend.

🌐 Live Demo
Backend Docs: 
https://recruitment-suite-1.onrender.com/docs
Technical Architecture & Features
This project transitions from "beginner" to **Professional Backend Engineering** by incorporating:

### 1. Core Backend Infrastructure

* **FastAPI Framework:** High-performance asynchronous API development.
* **PostgreSQL:** Relational database for persistent storage of users, jobs, and applications.
* **SQLAlchemy ORM:** Used for database interactions with a clean, pythonic interface.
* **Alembic Migrations:** Version control for the database schema, ensuring smooth updates across environments.
* **Dockerization:** Fully containerized environment for consistent deployment.

### 2. Advanced Security & Auth

* **JWT Authentication:** Secure token-based authentication using `python-jose`.
* **Role-Based Access Control (RBAC):** Distinct permissions for 'Recruiters' (creating jobs, viewing all apps) and 'Candidates' (viewing jobs, applying).
* **Password Hashing:** Secure storage using `passlib` with Bcrypt.

### 3. Application Logic & ML Integration

* **Resume Processing:** Integration with `PyPDF2` for automated text extraction from PDF resumes.
* **Candidate Scoring:** Leverages `scikit-learn` to calculate candidate-job fit scores.
* **Environment-Based Config:** Strict separation of secrets and settings using `python-dotenv`.

---

##  API Endpoints

### Authentication & Profile

* `POST /register`: Create a new account.
* `POST /login`: Authenticate and receive a JWT access token.
* `GET /profile`: Retrieve current authenticated user details.

### Job Management

* `GET /jobs`: Browse all available job postings (with pagination/filtering).
* `POST /jobs`: Create a new job listing (**Restricted: Recruiters Only**).

### Application Workflow

* `POST /apply/{job_id}`: Submit an application and upload a resume.
* `GET /job/{job_id}/applications`: View all applicants for a specific role (**Restricted: Recruiters Only**).
* `PUT /applications/{app_id}/status`: Update a candidate's status (Pending/Interview/Hired) (**Restricted: Recruiters Only**).

---

## 💻 Tech Stack

| Category | Technology |
| --- | --- |
| **Language** | Python 3.10+ |
| **Framework** | FastAPI, Pydantic (v2) |
| **Database** | PostgreSQL, SQLAlchemy 2.0 |
| **Migrations** | Alembic |
| **Security** | JWT (python-jose), Passlib (bcrypt) |
| **ML/Parsing** | Scikit-learn, PyPDF2 |
| **Deployment** | Docker, Render |

---

## Getting Started (Local Development)

### Prerequisites

* Docker & Docker Compose
* Python 3.10+

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/recruitment-suite.git
cd recruitment-suite

```

2. **Set up Environment Variables:**
Create a `.env` file in the root directory:
```env
DATABASE_URL=postgresql://user:password@localhost/dbname
SECRET_KEY=your_super_secret_jwt_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

```

3. **Run via Docker:**
```bash
docker-compose up --build

```

4. **Access the API:**
Open `http://localhost:8000/docs` to view the Swagger UI.

---

## 📈 Engineering Highlights

* **Scalability:** Ready for horizontal scaling thanks to stateless JWT authentication and Dockerization.
* **Data Integrity:** Implemented Pydantic V2 for strict request validation and error handling.
* **Clean Code:** Follows the "Annotated" dependency injection pattern in FastAPI for cleaner, more testable code.

---

## 📜 License

[MIT License](https://www.google.com/search?q=LICENSE)

---

*Created by [G Snehalatha]*
