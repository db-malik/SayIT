import requests, uuid, json
from dotenv import load_dotenv
import os
from moviepy.editor import *
from datetime import datetime 
import azure.cognitiveservices.speech as speechsdk
import time
import wave



# Load environment variables from .env file
load_dotenv()


def video_to_audio(temporary_video_file):  

    # Replace "path/to/your/video.mp4" with the path to your video file
    video_file = "data/test_files/test_video.mp4"

    # Get the current date and time
    current_datetime = datetime.now().strftime("%Y%m%d_%H%M%S")

    # Construct the output file name with the current date and time
    output_file = f"data/extracted_audio/audio_{current_datetime}.wav"

    # Load the video clip
    video = VideoFileClip(temporary_video_file)

    # Extract the audio from the video
    audio = video.audio

    # Set the desired audio parameters
    audio_params = {
        "codec": "pcm_s16le",
        "fps": 16000,      # Set the desired sampling rate: 16000 Hz
        "nchannels": 1,    # Mono audio
        "bitrate": "16k"   # Set the desired bitrate
    }

    # Write the audio to a file with specified parameters
    audio.write_audiofile(output_file, fps=audio_params["fps"], nbytes=2, codec=audio_params["codec"], bitrate=audio_params["bitrate"])
    


def sample_video_transcription(temporary_audio_file):  

        # Set up the Azure Speech configuration

        speech_key =  os.getenv("AZURE_SPEECH_key_1")
        service_region =  os.getenv("AZURE_SPEECH_LOCATION")
        speech_config = speechsdk.SpeechConfig(subscription=speech_key, region=service_region)

        # Set the audio file path
        audio_file = "data/extracted_audio/audio_20240403_022042.wav"

        # Set up the audio configuration
        audio_config = speechsdk.audio.AudioConfig(filename=audio_file)
        
        # Create a speech recognizer object

        speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)

        # Create an empty list to store the transcription results
        transcriptions = []

        # Define an event handler for continuous recognition
        def continuous_recognition_handler(evt):
            if evt.result.reason == speechsdk.ResultReason.RecognizedSpeech:
                transcriptions.append(evt.result.text)

        # Start continuous recognition
        speech_recognizer.recognized.connect(continuous_recognition_handler)
        speech_recognizer.start_continuous_recognition()
        
        # Wait for the recognition to complete
        timeout_seconds = 200  # Set a timeout value (in seconds) based on your audio file length
        timeout_expiration = time.time() + timeout_seconds

        while time.time() < timeout_expiration:
            time.sleep(1)  # Adjust the sleep duration as needed

        # Stop continuous recognition
        speech_recognizer.stop_continuous_recognition()

        # Combine transcriptions into a single string

        transcription = ' '.join(transcriptions)
        
        print(transcription)
        # Get the current date and time
        current_datetime = datetime.now().strftime("%Y%m%d_%H%M%S")
        # Write the transcription to a file
        output_file = f"data/extracted_transcription/transcription_{current_datetime}.txt"

        with open(output_file, "w") as file:
            file.write(transcription)

        print("Transcription saved to: " + output_file)
        
        
def recognize_from_microphone():
    # This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
    # Assurez-vous de définir les variables d'environnement SPEECH_KEY et SPEECH_REGION
    speech_key = "f9030ea668e54a14af7100de6934fdd5"
    speech_region = "eastus"
    
    print('speech_key=', speech_key)
    print('speech_region=' , speech_region)

    # Vérifiez si les variables d'environnement sont définies
    if not speech_key or not speech_region:
        print("Error: Please set the SPEECH_KEY and SPEECH_REGION environment variables.")
        return
    
    
    speech_config = speechsdk.SpeechConfig(subscription=speech_key, region=speech_region)
    speech_config.speech_recognition_language="fr-FR"
    print("recognition")
    
    audio_file = "data/extracted_audio/audio_20240403_022042.wav"
    check_audio_file(audio_file)
    
    audio_config = speechsdk.audio.AudioConfig(filename=audio_file)
    

    # # audio_config = speechsdk.audio.AudioConfig(use_default_microphone=True)
    speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)

    # print("Speak into your microphone.")
    speech_recognition_result = speech_recognizer.recognize_once_async().get()

    if speech_recognition_result.reason == speechsdk.ResultReason.RecognizedSpeech:
        print("Recognized: {}".format(speech_recognition_result.text))
    elif speech_recognition_result.reason == speechsdk.ResultReason.NoMatch:
        print("No speech could be recognized: {}".format(speech_recognition_result.no_match_details))
    elif speech_recognition_result.reason == speechsdk.ResultReason.Canceled:
        cancellation_details = speech_recognition_result.cancellation_details
        print("Speech Recognition canceled: {}".format(cancellation_details.reason))
        if cancellation_details.reason == speechsdk.CancellationReason.Error:
            print("Error details: {}".format(cancellation_details.error_details))
            print("Did you set the speech resource key and region values?")

    
    
    
    
def check_audio_file(audio_file):
    # Check if the file exists
    if not os.path.exists(audio_file):
        print(f"Error: File '{audio_file}' not found.")
        return False

    # Check if the file is a WAV file
    if not audio_file.lower().endswith('.wav'):
        print(f"Error: File '{audio_file}' is not a WAV file.")
        return False

    # Check if the WAV file is valid
    try:
        with wave.open(audio_file, 'rb') as wav_file:
            # Read and validate the WAV file
            # You can perform additional checks here if needed
            pass
    except wave.Error as e:
        print(f"Error: Failed to open WAV file '{audio_file}': {e}")
        return False

    # If all checks passed, the file is correctly loaded
    print(f"Success: File '{audio_file}' is correctly loaded.")
    return True




def get_text():
    text = "Bonjour et Bienvenue dans cette formation Power bi. Je m'appelle Aymeric Duval et je suis formateur Power bi chez data 100 test. Dans cette formation, nous allons découvrir Power bi et l'ensemble de ces fonctionnalités principales. Tout d'abord, pourquoi cette formation ? Power bi est un outil extrêmement prisé sur le marché aujourd'hui et est considéré comme un des leaders des outils bi. Selon Gartner, c'est un ensemble d'outils et de services qui permettent aux entreprises de prendre de meilleures décisions grâce à des outils notamment d'intégration de données, de transformation, d'analyse de données et de reporting. Énormément d'entreprises utilisent aujourd'hui Power bi, il est donc extrêmement important que tous les utilisateurs sachent l'utiliser correctement. Fait, Power bi est un outil extrêmement user friendly, c'est à dire qu'il est très facile à utiliser par l'utilisateur, même les plus métiers. Néanmoins, cette facilité amène souvent une mauvaise utilisation et une mauvaise mise en place d'un projet. Power bi peut avoir de lourdes conséquences sur le moyen voire long terme. Le but de cette formation, c'est de prendre pleine connaissance de toutes les fonctionnalités proposées par Power bi et de savoir appliquer les bonnes pratiques également, il est important de comprendre que Power bi n'est pas un outil seulement de data VIS comme beaucoup de personnes le pensent, mais bien un outil de bi complet, c'est à dire qu'avec Power bi. On est capable de pouvoir aller chercher des données, les transformer, les intégrer dans un modèle de données, la création de rapports percutants et dynamiques, la mise en place de dashboard, la publication sur le service de tout notre travail, la mise en place de la sécurité. Et bien évidemment, nous aborderons tous ces points en suivant toutes les bonnes pratiques à absolument mettre en place. Car un projet qui ne suit pas les bonnes pratiques peut amener des problèmes, notamment en termes de performance et en terme de restitution de données. Au cours de cette formation, je vais vous accompagner tout au long des chapitres. Le format de ce programme sera le suivant, une vidéo d'introduction pour expliquer chacun des chapitres, une vidéo de mise en pratique. Bien comprendre les concepts énoncés précédemment, une partie exercice à réaliser de votre côté à votre rythme et enfin une partie conclusion pour résumer les différents points qui ont été abordés ensemble. Cependant, pas de panique, vous ne serez pas livré à vous même tout au long de la formation, vous serez en mesure d'interagir avec nos experts chez data 100 test, posez vos questions sur le forum et également des master class viendront accompagner ces différentes vidéos. En terminant cette formation, vous serez en mesure de pouvoir mettre en place tout un projet Power bi de A à Z, de l'intégration de données à la restitution et tout cela en suivant les bonnes pratiques. Maintenant que cette première vidéo d'introduction est terminée, retrouvons nous dans la prochaine pour découvrir ce qu'est la Business Intelligence et comment Power bi s'intègre dans un tel projet. Bon courage pour cette formation "
    return text