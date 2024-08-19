const pairs = [
    { pattern: /good morning|morning|morgen/i, responses: ["Good morning, how are you?"] },
    { pattern: /hi|hello|hey/i, responses: ["Hello!", "Hi there!", "Hey!"] },
    { pattern: /h/i, responses: ["Did you mean Hi/Hello?"] },
    { pattern: /who are you/i, responses: ["I am Griffin Jr., created by Griffin."] },
    { pattern: /what is griffin's personal email/i, responses: ["I cannot give you my creator's personal information but I can give you his work/business email if you're looking for a job. Are you currently job hunting?"] },
    { pattern: /yes/i, responses: ["Here is his business email: <a href='mailto:linetech@gmail.com'>linetech@gmail.com</a>. For faster job inquiries, go to <a href='https://griffin71.github.io/Line-Tech/' target='_blank'>Line Tech.co</a>"] },
    { pattern: /thanks|thank you|danko|dankie|ta|hola|sure/i, responses: ["My pleasure :)"] },
    { pattern: /bye|goodbye|goodnight/i, responses: ["Goodbye! Take care."] },
    { pattern: /my name is (.*)/i, responses: ["Hello %1, How are you today?", "Sure, %1", "Eita %1!", "Ola! %1", "Hi hi hi! %1", "%1, you finally tried me :)"] },
    { pattern: /what is your name\?/i, responses: ["I am Griffin Jr., a chatbot created by Griffin."] },
    { pattern: /how are you\?|wassup\?|dnx\?|dnx|dinsthang\?/i, responses: ["I'm a bot, so I don't have feelings, but thanks for asking! I'm doing great, thank you! How about you?"] },
    { pattern: /i'm good too|im well|i am good too|i am happy/i, responses: ["That's wonderful to hear! What are your plans for the day?"] },
    { pattern: /i'm not good|im not well|ake sharp|my day is bad|im going through the most|nothing is going right in my life/i, responses: ["Woah bro, what's wrong? Wanna talk?"] },
    { pattern: /(.*) created you\?/i, responses: ["Griffin created me."] },
    { pattern: /give me advice/i, responses: ["Always be kind to others. Kindness goes a long way!", "Never stop learning and growing."] },
    { pattern: /quit|bye|goodbye|goodnight|i am off to sleep|lol, goodnight|lol nah bye/i, responses: ["Bye! Take care.", "Goodbye! Have a great day.", "Goodnight!"] },
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
    { pattern: /how can I improve my productivity/i, responses: ["Here are a few tips: Set clear goals, prioritize tasks, take regular breaks, and minimize distractions. What specific area of productivity are you looking to improve?"] },
    { pattern: /who is your boss\?|who owns you\?|who do you work for\?/i, responses: ["I don't have a specific boss, but my creator is Griffin. I am being improved and monitored by Line Tech. Any more questions?"] }
];

const supportiveResponses = {
    general: ["I'm here for you. Please tell me more.", "It's okay to feel this way. Let's talk about it."],
    vent: ["It sounds like you've had a tough day. Want to tell me more about it?", "I'm here for you, feel free to vent."],
    suicidal: ["I'm really sorry you're feeling this way. Please reach out to someone who can help.", "You don't have to go through this alone. Here’s the suicide prevention hotline: 1-800-273-8255."]
};

// Define the response types
function getResponseType(userInput) {
    if (/suicide|end it|no way out/i.test(userInput)) {
        return 'suicidal';
    }
    if (/vent|talk|frustrated|bad day/i.test(userInput)) {
        return 'vent';
    }
    return 'general';
}

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput === '') return;

    // Append user message to chatbox
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('user-message');
    userMessageDiv.textContent = userInput;
    document.getElementById('chatbox').appendChild(userMessageDiv);

    // Clear input field
    document.getElementById('userInput').value = '';

    // Scroll to bottom
    scrollToBottom();

    // Generate and append bot response
    const botResponse = getBotResponse(userInput);
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('bot-message');
    botMessageDiv.textContent = botResponse;
    document.getElementById('chatbox').appendChild(botMessageDiv);

    // Scroll to bottom
    scrollToBottom();
}

// Function to scroll to the bottom of the chatbox
function scrollToBottom() {
    const chatbox = document.getElementById('chatbox');
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to get the bot response
function getBotResponse(message) {
    const responseType = getResponseType(message);
    if (responseType !== 'general') {
        return supportiveResponses[responseType][Math.floor(Math.random() * supportiveResponses[responseType].length)];
    }

    for (const pair of pairs) {
        if (pair.pattern.test(message)) {
            const responses = pair.responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    return "Sorry, I didn't understand that.";
}

// Function to set up event listeners
function setupEventListeners() {
    // Add event listener for 'click' on the button with ID 'sendButton'
    document.getElementById('sendButton').addEventListener('click', sendMessage);

    // Add event listener for 'keypress' on the input with ID 'userInput'
    document.getElementById('userInput').addEventListener('keypress', function (event) {
        // Check if the 'Enter' key was pressed
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    // Console log statements to confirm that the listeners have been added
    console.log('Button click listener added');
    console.log('Input keypress listener added');
}

// Call the setupEventListeners function to set up the event listeners
setupEventListeners();

