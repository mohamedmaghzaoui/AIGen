

import google.generativeai as genai

genai.configure(api_key="REDACTED")
model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content("Generate a valid, properly formatted JSON without the ```json object with the following structure: A user profile containing the following fields: firstName (string), lastName (string), email (string, format: example@domain.com), dateOfBirth (string, format: yyyy-mm-dd), address (object with fields: street (string), city (string), postalCode (string), country (string)), phoneNumbers (array of objects with fields: type (string, e.g. 'home', 'work'), number (string), isPrimary (boolean)), and preferences (object with fields: notifications (boolean), theme (string, either 'light' or 'dark')). Ensure the JSON object is syntactically valid, with no extra commas, unquoted strings, or invalid data types, and can be directly parsed by Python's json.loads() function. Provide only the valid JSON object in your response")
print(response.text)