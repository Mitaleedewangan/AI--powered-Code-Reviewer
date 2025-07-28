AI Code Reviewer
An intelligent code review tool that uses Google’s Gemini API to analyze and review source code across multiple programming languages. Built with React.js on the frontend and Node.js/Express.js on the backend.



🧠 Features
🔍 Real-time code editing and syntax highlighting

🤖 AI-powered code review using Google Gemini 2.0

📚 Support for multiple programming languages (JavaScript, Java, Python, etc.)

📄 Markdown-rendered feedback with syntax-highlighted examples

✅ Clear breakdown of issues, fixes, and improvements

🛠️ Tech Stack
Frontend	Backend	AI Service
React.js	Node.js	Google Gemini API
Prism.js	Express.js	@google/generative-ai SDK
React Markdown	Axios	

🧑‍💻 How It Works
User types or pastes code into the editor.

Clicks the Review button.

Frontend sends the code to the backend via REST API.

Backend sends the code as a prompt to the Gemini model.

Gemini analyzes and returns feedback.

The frontend displays the review with syntax-highlighted markdown.
