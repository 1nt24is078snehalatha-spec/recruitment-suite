from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: str = "candidate"
class UserLogin(BaseModel):
    email: EmailStr
    password: str
class JobCreate(BaseModel):
    title: str
    description: str
    location: str
class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    role: str

    class Config:
     from_attributes = True

class JobResponse(BaseModel):
    id: int
    title: str
    description: str
    location: str
    recruiter_id: int

    class Config:
     from_attributes = True

class ApplicationResponse(BaseModel):
    id: int
    job_id: int
    candidate_id: int
    resume_path: str
    status: str

    class Config:
     from_attributes = True

