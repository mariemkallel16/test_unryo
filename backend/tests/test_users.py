from fastapi.testclient import TestClient

import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.main import app

client = TestClient(app)

def test_get_users():
    response = client.get("/users/")
    assert response.status_code == 200

def test_create_user():
    response = client.post("/users/", json={
        "name": "test",
        "email": "test@test.com"
    })
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "test"