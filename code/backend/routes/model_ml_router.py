# routes/model_ml_router.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.db_config import get_db
from controllers.user_controller import get_all_users
from models.user_model import User

from scripts.video_transcription.transcription_module import transcript_video


model_ml_router = APIRouter()

@model_ml_router.get("/")
async def get_all_users_endpoint(db: Session = Depends(get_db)):
    try:
        users = get_all_users(db)
        return users
    except Exception as e:
        print(f"Validation error in get_all_users_endpoint: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
      
      
@model_ml_router.get("/textsummarisation")
async def text_summarisation():
    try:
        print("script activated")
        result = transcript_video()
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
      
      
@model_ml_router.get("/audiotranscription")
async def audio_transcription():
    try:
      # add functions logic to transcribe audio

        result = "test audio transcription"
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
      
      
@model_ml_router.get("/videoTranscription")
async def audio_transcription():
    try:
      # add functions logic to transcribe video

        result = "test video transcription"
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))