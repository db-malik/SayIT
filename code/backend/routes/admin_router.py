# routes/user_routes.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from controllers.user_controller import get_users
from models.user_model import User

admin_router = APIRouter()

@admin_router.get("/users")
async def get_all_users_endpoint():
    try:
        users = get_users()
        return users
    except Exception as e:
        print(f"Validation error in get_all_users_endpoint: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
