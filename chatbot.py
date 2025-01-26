from openai import OpenAI

client = OpenAI("enter your openai key here")

# Function to generate chatbot response using OpenAI GPT-3 or ChatGPT API
def generate_response(prompt):
    response =client.chat.completions.create(
        model="gpt-4o-mini",  
        messages=[{"role": "user", "content": prompt}]
    )
   
    return response.choices[0].message.content