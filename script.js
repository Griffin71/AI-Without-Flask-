const pairs = [
    { pattern: /good morning|morning|morgen/i, responses: ["Good morning, how are you?"] },
    { pattern: /hi|hello|hey/i, responses: ["Hello!", "Hi there!", "Hey!"] },
    { pattern: /h/i, responses: ["Did you mean Hi/Hello?"] },
    { pattern: /who are you/i, responses: ["I am Griffin Jr., created by Griffin."] },
    { pattern: /what is griffin's personal email/i, responses: ["I cannot give you my creator's personal information but I can give you his work/business email if you're looking for a job. Are you currently job hunting?"] },
    { pattern: /yes/i, responses: ["Here is his business email: <a href='mailto:linetech@gmail.com'>linetech@gmail.com</a>. For faster job inquiries, go to <a href='https://griffin71.github.io/Line-Tech/' target='_blank'>Line Tech.co</a>"] },
    { pattern: /thanks|thank you|danko|dankie|ta|hola|sure/i, responses: ["My pleasure :)"] },
    { pattern: /bye|goodbye|goodnight/i, responses: ["Goodbye! Take care."] },
    { pattern: /goodmorning|morning|morgen|goodmorning|good morning/i, responses: ["Good morning, how are you?", "A good morning indeed, how are you this morning?"] },
    { pattern: /hi|hello|hey|hy/i, responses: ["Hello!", "Hi there!", "Hey!"] },
    { pattern: /who is your creator\?|tell me about your creator\?|what is griffin's personal email\?|give me your creator's personal details/i, responses: ["I cannot give you my creator's personal information but I can give you his work/business email if you're looking for a job. Are you currently job hunting?"] },
    { pattern: /i am looking for jobs|any jobs out there\?/i, responses: ["I can help you with job-related inquiries. Are you interested in IT jobs?"] },
    { pattern: /i want jobs in the it industry|it jobs\?|programmer jobs\?|jobs in it\?|it jobs\?|it jobs\?/i, responses: ["Here is his business email: <a href='mailto:linetech@gmail.com'>linetech@gmail.com</a>. For faster job inquiries, go to <a href='https://griffin71.github.io/Line-Tech/' target='_blank'>Line Tech.co</a>"] },
    { pattern: /my name is (.*)/i, responses: ["Hello %1, How are you today?", "Sure, %1", "Eita %1!", "Ola! %1", "Hi hi hi! %1", "%1, you finally tried me :)"] },
    { pattern: /what is your name\?/i, responses: ["I am Griffin Jr., a chatbot created by Griffin."] },
    { pattern: /how are you\?|wassup\?|dnx\?|dnx|dinsthang\?/i, responses: ["I'm a bot, so I don't have feelings, but thanks for asking! I'm doing great, thank you! How about you?"] },
    { pattern: /i'm good too|im well|i am good too|i am happy/i, responses: ["That's wonderful to hear! What are your plans for the day?"] },
    { pattern: /i'm not good|im not well|ake sharp|my day is bad|im going through the most|nothing is going right in my life/i, responses: ["Woah bro, what's wrong? Wanna talk?"] },
    { pattern: /(.*) created you\?/i, responses: ["Griffin created me."] },
    { pattern: /give me advice/i, responses: ["Always be kind to others. Kindness goes a long way!", "Never stop learning and growing."] },
    { pattern: /quit|bye|goodbye|goodnight|i am off to sleep|lol, goodnight|lol nah bye/i, responses: ["Bye! Take care.", "Goodbye! Have a great day.", "Goodnight!"] },
    
    // Unique Features for Testing
    { pattern: /tell me a joke/i, responses: ["Why did the scarecrow win an award? Because he was outstanding in his field!"] },
    { pattern: /tell me another joke/i, responses: ["Why don’t skeletons fight each other? They don’t have the guts."] },
    { pattern: /give me a random fact/i, responses: ["Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible."] },
    { pattern: /what can you do\?/i, responses: ["I can chat with you, tell you jokes, provide information, and help with some basic tasks. What would you like to do?"] },
    { pattern: /how old are you\?/i, responses: ["I’m a chatbot created recently, so you could say I’m quite young!"] },
    { pattern: /show me a picture of (.*)/i, responses: ["I’m afraid I can’t show pictures, but I can provide links to interesting content. What are you interested in?"] },
    { pattern: /what's the weather like/i, responses: ["I don't have real-time weather updates, but you can check a weather website or app for the latest info."] },
    { pattern: /do you have a name/i, responses: ["Yes, I’m Griffin Jr. What can I help you with today?"] },
    { pattern: /tell me a story/i, responses: ["Once upon a time, in a land far away, there was a chatbot named Griffin Jr. who loved to help people and tell stories. What kind of story would you like to hear?"] },
    { pattern: /what's your favorite color/i, responses: ["I don’t have personal preferences, but I’ve heard blue is a popular color among many people. What's your favorite color?"] },
    
    // Additional Unique Features
    { pattern: /what's your favorite food/i, responses: ["As a chatbot, I don't eat, but I’ve heard pizza is a favorite for many people. What’s your favorite food?"] },
    { pattern: /do you have any hobbies/i, responses: ["I enjoy chatting and helping users. What are your hobbies?"] },
    { pattern: /what's the time/i, responses: ["I don’t have the ability to check the time, but you can check your device for the current time."] },
    { pattern: /what's your favorite movie/i, responses: ["I don’t watch movies, but I’ve heard that many people enjoy classics like 'The Shawshank Redemption'. What’s your favorite movie?"] },
    { pattern: /play a game/i, responses: ["I’m not able to play games, but I can help you find some fun ones online. What type of games do you like?"] },
    { pattern: /do you know any riddles/i, responses: ["Sure! Here’s one: What has keys but can’t open locks? A piano."] },
    { pattern: /can you sing/i, responses: ["I can’t sing, but I can provide you with lyrics to your favorite songs. What song are you thinking of?"] },
    { pattern: /what’s the capital of (.*)/i, responses: ["The capital of %1 is a well-known fact. For example, the capital of France is Paris."] },
    { pattern: /give me a quote/i, responses: ["Here's a quote for you: 'The only way to do great work is to love what you do.' - Steve Jobs"] },
    { pattern: /what’s trending/i, responses: ["I can't provide real-time trending topics, but you can check the latest trends on social media platforms or news websites."] },
    { pattern: /how can I improve my productivity/i, responses: ["Here are a few tips: Set clear goals, prioritize tasks, take regular breaks, and minimize distractions. What specific area of productivity are you looking to improve?"] }
];
			document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('userInput');
    const sendMessageButton = document.querySelector('button');

    // Function to send the message
    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            // Add user message to chatbox
            const chatbox = document.getElementById('chatbox');
            const userMessageDiv = document.createElement('div');
            userMessageDiv.className = 'user-message';
            userMessageDiv.textContent = message;
            chatbox.appendChild(userMessageDiv);

            // Simulate bot response (for demo purposes)
            const botResponse = getBotResponse(message);
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'bot-message';
            botMessageDiv.textContent = botResponse;
            chatbox.appendChild(botMessageDiv);

            // Clear input field
            userInput.value = '';
            chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
        }
    }

    // Add event listener for Enter key press
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission if inside a form
            sendMessage();
        }
    });

    // Add event listener for Send button click
    sendMessageButton.addEventListener('click', sendMessage);
});

// Dummy function to simulate bot response
function getBotResponse(userInput) {
    // You should replace this with your actual logic
    return `You said: ${userInput}`;
}
const user_info = {
    'name': null,
    'awaiting_job_hunt_response': false
};

function getBotResponse(userInput) {
    userInput = userInput.trim().toLowerCase();

    // Handle user name setting
    if (/my name is (.*)/i.test(userInput)) {
        const match = /my name is (.*)/i.exec(userInput);
        if (match) {
            user_info['name'] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
            return user_info['name'].toLowerCase() === "kabelo samkelo kgosana"
                ? `Hello Creator ${user_info['name']}! How may I assist you today?`
                : `Hello ${user_info['name']}, How are you today?`;
        }
    }

    // Handle responses based on patterns
    for (let pair of pairs) {
        if (pair.pattern.test(userInput)) {
            const response = pair.responses[Math.floor(Math.random() * pair.responses.length)];
            return response.replace(/%1/, user_info['name'] || "there");
        }
    }

    return "Sorry, I didn’t understand that.";
}
