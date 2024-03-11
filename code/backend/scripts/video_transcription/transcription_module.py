from moviepy.editor import VideoFileClip
from moviepy.audio.io.AudioFileClip import AudioFileClip
import speech_recognition as sr
import os
import datetime
from docx import Document
import openai
import os
import tempfile

openai.api_key = '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'
# openai.api_key = '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'

def transcribe_video(video_path):
    video = VideoFileClip(video_path)
    audio = video.audio
    temp_audio_fd, temp_audio_path = tempfile.mkstemp(suffix=".wav")
    os.close(temp_audio_fd)
    try:
        audio.write_audiofile(temp_audio_path, codec='pcm_s16le')
        r = sr.Recognizer()
        with sr.AudioFile(temp_audio_path) as source:
            audio_data = r.record(source)
            text = r.recognize_google(audio_data, language='fr-FR')
    finally:
        os.remove(temp_audio_path)
    return "S'il vous plaît, aidez-moi à résumer le paragraphe suivant: " + text

current_dir = os.path.dirname(os.path.abspath(__file__))
video_dir = os.path.join(current_dir,  'video')
video_files = [file for file in os.listdir(video_dir) if file.endswith('.mp4')]

def summarize_text_with_chatgpt(text):
    response = openai.Completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt=text,
        temperature=0.6,
        max_tokens=2000
    )
    summary = response.choices[0].text.strip()
    return summary

def save_summary_as_word(summary, filename):
    doc = Document()
    doc.add_paragraph(summary)
    doc.save(filename)

def transcript_video():
    file_type='docx'
    if len(video_files) > 0:
        video_path = os.path.join(video_dir, video_files[0])
        text = transcribe_video(video_path)
        summary = summarize_text_with_chatgpt(text) 
        text_dir = os.path.join(current_dir, file_type)
        if not os.path.exists(text_dir):
            os.makedirs(text_dir)
        timestamp = datetime.datetime.now().strftime('%Y%m%d%H%M%S')
        text_filename = os.path.basename(video_path).replace('.mp4', f'_{timestamp}.{file_type}')
        save_summary_as_word(summary, os.path.join(text_dir, text_filename))
        return text
    else:
        return("No mp4 files found in the current directory.")



