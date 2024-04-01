from moviepy.video.io.VideoFileClip import VideoFileClip
import tempfile
import os
import gc
import datetime
from docx import Document
import openai
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from email.mime.text import MIMEText
import textwrap
import yaml

openai.api_key = ''



def convert_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    data = []
    item = {}

    for line in lines:
        if line.strip() == '----':
            data.append(item)
            item = {}
        else:
            key, value = line.strip().split(': ', 1)
            item[key] = value

    # Append the last item
    if item:
        data.append(item)

    with open(file_path, 'w', encoding='utf-8') as file:
        yaml.dump(data, file, allow_unicode=True)
    return file_path


def transcribe_video(video_path):
    video = VideoFileClip(video_path)
    duration = video.duration
    segment_length = 180
    text = ""

    for start_time in range(0, int(duration), segment_length):
        end_time = min(start_time + segment_length, duration)
        temp_video_fd, temp_video_path = tempfile.mkstemp(suffix=".mp4")
        os.close(temp_video_fd)
        video.subclip(start_time, end_time).write_videofile(temp_video_path, codec='libx264')

        temp_video = VideoFileClip(temp_video_path)
        audio = temp_video.audio
        temp_audio_fd, temp_audio_path = tempfile.mkstemp(suffix=".wav")
        os.close(temp_audio_fd)
        try:
            audio.write_audiofile(temp_audio_path, codec='pcm_s16le')
            with open(temp_audio_path, "rb") as audio_file:
                response = openai.audio.transcriptions.create(
                    file=audio_file,
                    model="whisper-1",
                )
            text += response.text
        finally:
            temp_video.close()
            os.remove(temp_audio_path)
            gc.collect()
            os.remove(temp_video_path)

    return '''Veuillez me faire un bref résumé du procès-verbal de la réunion,
            dites-moi de quoi ils ont parlé et quelques points clés. Plusieurs membres étaient présents à cette réunion et, comme la réunion est relativement longue, 
            je vous l'enverrai en plusieurs parties. Voici le procès-verbal de la réunion :''' + text + '''Ce qui précède est l'enregistrement complet de la discussion de la réunion. Aidez-moi à résumer ce dont ils ont parlé?'''


def summarize_text_with_chatgpt(text):
    MAX_TOKENS = 128000
    summaries = []

    # Split the text into chunks that are less than MAX_TOKENS
    chunks = textwrap.wrap(text, MAX_TOKENS)

    for chunk in chunks:
        response = openai.chat.completions.create(
            model="gpt-4-0125-preview",
            messages=[
                {"role": "system", "content": "You are an assistant and next you are passed some snippets of the meeting. You need to summarize the meeting."},
                {"role": "user", "content": chunk}
            ],
            temperature=0.5,
            max_tokens=2000
        )
        summary = response.choices[0].message.content
        summaries.append(summary)

    return ' '.join(summaries)

def save_summary_as_word(summary, filename):
    doc = Document()
    doc.add_paragraph(summary)
    doc.save(filename)
    
def email(doc, address_emails):
    mail_server = "smtp.gmail.com"
    
    #Veuillez remplacer le nom d'utilisateur par votre propre adresse e-mail
    
    mail_username = "yezhanyz@gmail.com"
    
    #Veuillez remplacer le mot de passe par votre propre mot de passe
    
    mail_password = ""

    for address_email in address_emails:
        msg = MIMEMultipart()
        msg['From'] = mail_username
        msg['To'] = address_email
        msg['Subject'] = "Résumé de votre réunion - À consulter"

        body =  """J'espère que cette journée vous trouve en pleine forme. Je vous envoie le résumé de votre réunion pour votre référence et vos actions ultérieures. Veuillez trouver ci-joint le document.

        Je vous souhaite une journée agréable et productive.

        Merci de ne pas répondre à ce mail.
        
        Cordialement,

        L'équipe du projet SayIt
        
        """
        msg.attach(MIMEText(body, 'plain'))

        with open(doc, 'rb') as file:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(file.read())
            encoders.encode_base64(part)
            part.add_header('Content-Disposition', f'attachment; filename= {os.path.basename(doc)}')
            msg.attach(part)

        server = smtplib.SMTP(mail_server, 587)
        server.starttls()
        server.login(mail_username, mail_password)
        server.send_message(msg)
        server.quit()
        
def main(video_path, address_email):
    current_dir = os.getcwd()
    file_type='docx'
    if video_path.endswith('.mp4'):
        text = transcribe_video(video_path)
        summary = summarize_text_with_chatgpt(text) 
        text_dir = os.path.join(current_dir, file_type)
        if not os.path.exists(text_dir):
            os.makedirs(text_dir)
        timestamp = datetime.datetime.now().strftime('%Y%m%d%H%M%S')
        text_filename = os.path.basename(video_path).replace('.mp4', f'_{timestamp}.{file_type}')
        save_summary_as_word(summary, os.path.join(text_dir, text_filename))
        email(os.path.join(text_dir, text_filename), address_email)
    else:
        print("The provided file is not an mp4 file.")

#Il est préférable d'utiliser votre propre adresse e-mail ici. Bien sûr, cela ne me dérange pas si vous utilisez la mienne. XD        
if __name__ == "__main__":
    main('./video/video.mp4', ['zhan.ye@edu.ece.fr'])