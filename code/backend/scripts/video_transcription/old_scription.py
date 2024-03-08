from moviepy.editor import VideoFileClip
import speech_recognition as sr
import os
from pydub import AudioSegment
import soundfile as sf
import numpy as np
import datetime
from docx import Document

def transcribe_video(video_path):
    video=VideoFileClip(video_path)
    audio=video.audio
    timestamp=datetime.datetime.now().strftime('%Y%m%d%H%M%S')
    audio_filename=os.path.basename(video_path).replace('.mp4', f'_{timestamp}.wav')
    audio_path=os.path.join(current_dir, 'video_', audio_filename)
    audio.write_audiofile(audio_path)
    r=sr.Recognizer()
    with sr.AudioFile(audio_path) as source:
        audio_data=r.record(source)
        text = r.recognize_google(audio_data, language='fr-FR')
        return text
current_dir =os.path.dirname(os.path.abspath(__file__))
video_dir =os.path.join(current_dir, 'video')
video_files=[file for file in os.listdir(video_dir) if file.endswith('.mp4')]
def save_text_as_word(text, filename):
    doc=Document()
    doc.add_paragraph(text)
    doc.save(filename)    
def save_text_as_txt(text, filename):
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(text)
def main(file_type):
    if len(video_files) > 0:
        video_path=os.path.join(video_dir, video_files[0])
        text=transcribe_video(video_path)
        text_dir=os.path.join(current_dir, file_type)
        if not os.path.exists(text_dir):
            os.makedirs(text_dir)
        timestamp=datetime.datetime.now().strftime('%Y%m%d%H%M%S')
        text_filename=os.path.basename(video_path).replace('.mp4', f'_{timestamp}.{file_type}')
        if file_type == 'docx':
            save_text_as_word(text, os.path.join(text_dir, text_filename))
        elif file_type == 'txt':
            save_text_as_txt(text, os.path.join(text_dir, text_filename))
        else:
            print(f"Unsupported file type: {file_type}")
    else:
        print("No mp4 files found in the current directory.")


        
if __name__ == "__main__":
    main('docx')
    main('txt')