# routes/main.py
from fastapi import APIRouter, HTTPException
import sys



home_router = APIRouter()

@home_router.get("/")
async def hello_world():
    return {"message": "Hellow World!"}
