from openai import OpenAI 
import os

## Set the API key and model name
MODEL="gpt-4"
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY", "sk-proj-TodQrA4d3zZf2Ay4baEPT3BlbkFJ2rZY0uPBZJqYZjc6L9Zl"))
completion = client.chat.completions.create(
  model=MODEL,
  messages=[
    {"role": "system", "content": "You are a helpful assistant. Help me with my math homework!"}, # <-- This is the system message that provides context to the model
    {"role": "user", "content": "Hello! Could you solve 2+2?"}  # <-- This is the user message for which the model will generate a response
  ]
)
output_variable = "Assistant: " + completion.choices[0].message.content
print(""+completion.choices[0].message.content)