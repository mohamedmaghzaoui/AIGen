# views.py
from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import render
import openai
from django.conf import settings
import json
from django.views.decorators.csrf import csrf_exempt

from openai import OpenAI
client = OpenAI(api_key=settings.OPENAI_API_KEY)
# Home view
def home(request):
    return JsonResponse({"message": "Welcome to the Data Generator API!"})

# JSON data generation view
@csrf_exempt
def generate_json_data(request):
    if request.method == "POST":
        try:
            # Parse the JSON body of the request
            data = json.loads(request.body)
            
            # Extract the 'prompt' field
            prompt = data.get("prompt")
            
            if not prompt:
                return HttpResponseBadRequest("No prompt provided")

            response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {
            "role": "user",
            "content": prompt
        }
    ]
)

            # Extract the generated text from the OpenAI response
            generated_text = response.choices[0].message.content

            # Assuming the generated response is valid JSON, return it as a JSON response
            try:
                generated_data = json.loads(generated_text)
                return JsonResponse(generated_data)
            except json.JSONDecodeError:
                return HttpResponseBadRequest("Generated text is not valid JSON")

        except json.JSONDecodeError:
            return HttpResponseBadRequest("Invalid JSON format")
    else:
        return HttpResponseBadRequest("Invalid request method")
