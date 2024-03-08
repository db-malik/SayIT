from flask import Flask, jsonify
import subprocess
import time
import os
from scripts.video_transcription.transcription_module import main


app = Flask(__name__)


# Add error handling
@app.errorhandler(Exception)
def handle_error(e):
    return jsonify(error=str(e)), 500


@app.route("/textsummarisation")
def text_summarisation():
    try:
        main()
        return jsonify(message="Text summarization successful!")
    except Exception as e:
        return jsonify(error=str(e)), 500


@app.route("/")
def hello_world():
    return jsonify(message=" World World!")


if __name__ == "__main__":
    print("Starting server...")
    app.run(host="0.0.0.0", port=5000, debug=True)
