# -*- coding: utf-8 -*-

# This simple app performs a GET request to retrieve a list of languages
# supported by Microsoft Translator.

# This sample runs on Python 2.7.x and Python 3.x.
# You may need to install requests and uuid.
# Run: pip install requests uuid
from dotenv import load_dotenv
import os, requests, uuid, json
load_dotenv()

def get_supported_languages():


    endpoint_var_name = "AZURE_TRANSLATOR_ENDPOINT"
    endpoint = os.getenv(endpoint_var_name)   
    if not endpoint:
        raise Exception('Please set/export the environment variable: {}'.format(endpoint_var_name))

    # If you encounter any issues with the base_url or path, make sure
    # that you are using the latest endpoint: https://docs.microsoft.com/azure/cognitive-services/translator/reference/v3-0-languages
    path = '/languages?api-version=3.0'
    constructed_url = endpoint + path

    headers = {
        'Content-type': 'application/json',
        'X-ClientTraceId': str(uuid.uuid4())
    }

    request = requests.get(constructed_url, headers=headers)
    response = request.json()

    languages_list = [{"code": code, "name": lang["name"]} for code, lang in response["translation"].items()]

    return languages_list