# routes/model_ml_router.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from openai import OpenAI

from database.db_config import get_database_connection
from controllers.user_controller import get_users
from models.user_model import User

from scripts.video_transcription.transcription_module import transcript_video
from samples.sample_extract_summary import sample_extractive_summarization
from dotenv import load_dotenv
import os

load_dotenv()

# Rest of the code...


model_ml_router = APIRouter()

# route to summarize a text
@model_ml_router.post("/textsummarisation")
async def text_summarisation(text: str):
    # print(text)
    try:
        data = [text]

        # print(data)
        print("****************************************************************")

        # Call the summarization function with the array of sentences
        summary_text = sample_extractive_summarization(data)

        # Print the summary text for debugging
        # print(summary_text)

        return {"result": summary_text}
    except Exception as e:
        # If an error occurs, raise an HTTPException
        raise HTTPException(status_code=500, detail=str(e))



# chat with GPT-3.5 turbo
@model_ml_router.post("/chat")
async def chat_with_gpt_3_5_turbo(message: str):
    

    # client = OpenAI()
    # if you saved the key under a different environment variable name, you can do something like:
    client = OpenAI(
        api_key="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",
    )
    
    try:
        # Call the chat function with the messages
        completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": message},
        ]
        )

        return {"result": completion}
    except Exception as e:
        # If an error occurs, raise an HTTPException
        raise HTTPException(status_code=500, detail=str(e))