from fastapi import FastAPI
from .database import Base, engine
from .routers import users

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="Unryo API")

# Routers
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)

# Create tables
Base.metadata.create_all(bind=engine)