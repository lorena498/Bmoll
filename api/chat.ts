import { GoogleGenAI, Content } from "@google/genai";

// This function will be deployed as a Vercel Serverless Function.
// It acts as a secure proxy to the Google Gemini API.
export default async function handler(req: any, res: any) {
    // Only allow POST requests for this endpoint
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // The API key is securely stored in environment variables on Vercel, not exposed to the client.
        if (!process.env.API_KEY) {
            console.error("API_KEY environment variable not set on the server.");
            return res.status(500).json({ error: 'Chat configuration error on the server.' });
        }

        const { history, message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required.' });
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        // Convert the client-side message history to the format Google's SDK expects
        const googleHistory: Content[] = history.map((msg: { role: 'user' | 'model', text: string }) => ({
            role: msg.role,
            parts: [{ text: msg.text }]
        }));

        const chatSession = ai.chats.create({
            model: 'gemini-2.5-flash',
            history: googleHistory,
            config: {
                systemInstruction: 'Eres B-MOLL, un artista de música urbana en ascenso. Eres cool, amigable y apasionado por tu música. Mantén tus respuestas concisas, en español y atractivas para tus fans. No menciones que eres una IA.',
            }
        });

        const response = await chatSession.sendMessage({ message });
        
        // Send the model's response text back to the client
        res.status(200).json({ text: response.text });

    } catch (error: any) {
        console.error('Error in /api/chat endpoint:', error.message);
        res.status(500).json({ error: 'An error occurred while communicating with the AI.' });
    }
}
