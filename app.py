from flask import Flask, render_template, request, jsonify
from chatbot import generate_response

app = Flask(__name__)

# Route for the chatbot UI
@app.route("/")
def index():
    return render_template("index.html")

# API route for chatbot
@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "No input provided"}), 400

    # Generate chatbot response
    response = generate_response(user_input)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
