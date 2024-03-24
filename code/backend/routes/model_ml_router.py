# routes/model_ml_router.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.db_config import get_database_connection
from controllers.user_controller import get_users
from models.user_model import User

from scripts.video_transcription.transcription_module import transcript_video
from samples.sample_extract_summary import sample_extractive_summarization


model_ml_router = APIRouter()

@model_ml_router.post("/textsummarisation")
async def text_summarisation(text: str):
    try:
        data = [text]

        print(data)
        print("****************************************************************")

        # Call the summarization function with the array of sentences
        summary_text = sample_extractive_summarization(data)

        # Print the summary text for debugging
        print(summary_text)

        return {"result": summary_text}
    except Exception as e:
        # If an error occurs, raise an HTTPException
        raise HTTPException(status_code=500, detail=str(e))

