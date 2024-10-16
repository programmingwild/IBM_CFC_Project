import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; // Import the cors middleware

const app = express();
const port = 3000;

// **Important:** Replace with your actual OpenAI API key
const apiKey = 'YOUR_ACTUAL_OPENAI_API_KEsk-proj-x13PysK04r_bpIJ3kkWXIJo6_yxNhbHGp99R09ZhRjbDLKCs7g70D0H-yFBA5sb2kcPhxxjcQCT3BlbkFJmOK0DiO5wwsvBDGvEqXt6_5gH7GYjAoV920TjGs89zEWDBtFFEd0EMcdhtKJkB78e4URQNAPYA'; 

app.use(express.json());
app.use(cors()); // Enable CORS for all origins (be more restrictive in production)

app.post('/chatgpt', async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful AI assistant providing information about climate change.' },
          { role: 'user', content: userMessage }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const chatgptResponse = data.choices[0].message.content;

    res.json({ message: chatgptResponse }); 

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
