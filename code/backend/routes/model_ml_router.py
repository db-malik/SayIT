# routes/model_ml_router.py
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from openai import OpenAI

from database.db_config import get_database_connection
from controllers.user_controller import get_users
from models.user_model import User

from scripts.video_transcription.scription import transcribe_video
from scripts.video_transcription.scription import summarize_text_with_chatgpt
from scripts.video_transcription.scription import save_summary_as_word
from scripts.video_transcription.scription import email
from scripts.video_transcription.scription import convert_file  
from typing import List
from fastapi import UploadFile, File, Body
import datetime
import yaml
import shutil
import tempfile
from tempfile import NamedTemporaryFile

from samples.sample_extract_summary import sample_extractive_summarization
from samples.sample_text_translation import sample_text_translation
from samples.sample_get_supported_languges import get_supported_languages
from samples.sample_video_transcription import sample_video_transcription, video_to_audio, recognize_from_microphone, get_text
from dotenv import load_dotenv
import os
from samples.sample_text_translation import sample_text_translation


load_dotenv()

# Rest of the code...


model_ml_router = APIRouter()

# ----------------------------------------------------------
# route to summarize a text
@model_ml_router.post("/resume")
async def resume(yaml_file: UploadFile = File(...), address_email: List[str] = Body(...)):
    current_dir = os.getcwd()
    file_type='docx'
    _, ext = os.path.splitext(yaml_file.filename)
    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=ext)
    with open(temp_file.name, 'wb+') as out_file:
        shutil.copyfileobj(yaml_file.file, out_file)
    yaml_path = convert_file(temp_file.name)
    if not os.path.exists(yaml_path):
        return {"error": f"The file {yaml_path} does not exist."}
    if yaml_path.endswith('.yaml'):
        with open(yaml_path, 'r', encoding='utf-8') as file:
            content = yaml.safe_load(file)
            text_list = []
            for item in content:
                if 'Time' in item:
                    del item['Time']
                if 'Name' in item:
                    del item['Name']
                if 'Text' in item:
                    text_list.append(item['Text'])
            text = ' '.join(text_list)
        summary = summarize_text_with_chatgpt(text) 
        text_dir = os.path.join(current_dir, file_type)
        if not os.path.exists(text_dir):
            os.makedirs(text_dir)
        timestamp = datetime.datetime.now().strftime('%Y%m%d%H%M%S')
        text_filename = os.path.basename(yaml_path).replace('.yaml', f'_{timestamp}.{file_type}')
        save_summary_as_word(summary, os.path.join(text_dir, text_filename))
        text_path=os.path.join(text_dir, text_filename)
        email(text_path, address_email)
        return {"result": f"Summary saved as {text_filename} in {text_path},to {address_email}"}
    else:
        return ("The provided file is not a yaml file.")
# ----------------------------------------------------------


# ----------------------------------------------------------
# route to text summarisation
@model_ml_router.post("/text_summarisation")
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
# ----------------------------------------------------------


    
# ----------------------------------------------------------
# route to translate a text
@model_ml_router.post("/text_translation")
async def text_translation( 
    document: str = Query(..., description="The text to be translated"),
    fromlanguage: str = Query(..., description="The source language of the text"),
    tolanguages: list = Query(..., description="The target languages to translate the text to"),):
    try:
        
        print("document", document)
        print("fromlanguage", fromlanguage)
        print("tolanguages", tolanguages)
        
        # Call the summarization function with the array of sentences
        translated_text = sample_text_translation(document, fromlanguage, tolanguages)

        # Print the summary text for debugging
        # print(summary_text)

        return {"result": translated_text}
    except Exception as e:
        # If an error occurs, raise an HTTPException
        raise HTTPException(status_code=500, detail=str(e))
# ----------------------------------------------------------



# ----------------------------------------------------------
# route to transcribe a video
# @model_ml_router.post("/video_transcription")
# async def video_transcription(document: str, fromlanguage: str, tolanguages: List[str]):
#     # print(text)
#     try:
        
#         # Call the summarization function with the array of sentences
#         # summary_text = sample_text_translation(data)

#         # Print the summary text for debugging
#         # print(summary_text)

#         return {"result": "summary_text"}
#     except Exception as e:
#         # If an error occurs, raise an HTTPException
#         raise HTTPException(status_code=500, detail=str(e))
    
    
    
# ----------------------------------------------------------


# ----------------------------------------------------------
# route to chat with GPT-3.5 turbo
@model_ml_router.post("/chat")
async def chat_with_gpt_3_5_turbo(message: str):
    

    # client = OpenAI()
    # if you saved the key under a different environment variable name, you can do something like:
    client = OpenAI(
        api_key="",
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
# ----------------------------------------------------------

# ----------------------------------------------------------
@model_ml_router.get("/supported_languages")
async def supported_languages():
    try:
        return get_supported_languages()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    # ----------------------------------------------------------
    
    
# ----------------------------------------------------------
@model_ml_router.post("/video_transcription")
async def video_transcription():
    try:
        # Check if the uploaded file is an MP4 video
        # if video_file.filename.endswith('.mp4'):
        #     # Save the uploaded video to a temporary file
        #     with NamedTemporaryFile(delete=False, suffix='.mp4') as temp_file:
        #         shutil.copyfileobj(video_file.file, temp_file)

        #     # Call the video transcription function with the temporary file path
        #     video_to_audio(temp_file.name)

        #     # Remove the temporary file after processing
        #     os.remove(temp_file.name)
            
            
        #     transcription_result = recognize_from_microphone()
            text = get_text()
            return {"result": text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    # ----------------------------------------------------------