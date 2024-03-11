# controllers/user_controller.py
from typing import List

from sqlalchemy.orm import Session

from models.user_model import User
from database.models import UserModel

def get_all_users(db: Session) -> List[User]:
    users = db.query(UserModel).all()
    return [User.from_orm(user) for user in users]
