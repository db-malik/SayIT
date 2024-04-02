import requests, uuid, json
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()


def sample_text_translation(document: str, fromlanguage: str, tolanguages: list[str]):  


    # Add your key and endpoint
    key = os.getenv("AZURE_TRANSLATOR_KEY_1")
    endpoint = os.getenv("AZURE_TRANSLATOR_ENDPOINT")

    print("key", key)
    print("endpoint", endpoint)
    # location, also known as region.
    # required if you're using a multi-service or regional (not global) resource. It can be found in the Azure portal on the Keys and Endpoint page.
    location = os.getenv("AZURE_TRANSLATOR_LOCATION")

    path = '/translate'
    constructed_url = endpoint + path

    params = {
        'api-version': '3.0',
        'from': fromlanguage,
        'to': tolanguages
    }

    headers = {
        'Ocp-Apim-Subscription-Key': key,
        # location required if you're using a multi-service or regional (not global) resource.
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': str(uuid.uuid4())
    }

    # You can pass more than one object in body.
    body = [{
        'text': document
    }]

    request = requests.post(constructed_url, params=params, headers=headers, json=body)
    response = request.json()

    print(json.dumps(response, sort_keys=True, ensure_ascii=False, indent=4, separators=(',', ': ')))
    
    translated_text = response[0]['translations'][0]['text']
    target_language = response[0]['translations'][0]['to']

    return {"text": translated_text, "to": target_language}  