document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");

    // Display user message
    const userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = "You: " + userInput;
    chatBox.appendChild(userMessage);

    // Send POST request to Flask server
    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: userInput
        })
    })
    .then(response => response.json())
    .then(data => {
        // Display chatbot response
        const botMessage = document.createElement("p");
        botMessage.classList.add("bot-message");
        botMessage.textContent = "Bot: " + data.response;
        chatBox.appendChild(botMessage);

        // Clear input
        document.getElementById("user-input").value = "";
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
