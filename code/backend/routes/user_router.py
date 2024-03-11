# routes/user_routes.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.db_config import get_db
from controllers.user_controller import get_all_users
from models.user_model import User

user_router = APIRouter()

@user_router.get("/users")
async def get_all_users_endpoint(db: Session = Depends(get_db)):
    try:
        users = get_all_users(db)
        return users
    except Exception as e:
        print(f"Validation error in get_all_users_endpoint: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
