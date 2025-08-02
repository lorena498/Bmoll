import { GoogleGenAI, Content } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

// This function will be deployed as a Vercel Serverless Function.
// It acts as a secure proxy to the Google Gemini API.
export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST requests for this endpoint
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
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
        const contents: Content[] = (history || []).map((msg: { role: 'user' | 'model', text: string }) => ({
            role: msg.role,
            parts: [{ text: msg.text }]
        }));

        // Add the current user message to the conversation history
        contents.push({ role: 'user', parts: [{ text: message }] });

        // Use the more direct generateContent method, which is ideal for stateless serverless functions.
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: contents, // Pass the full conversation history
            config: {
                systemInstruction: 'Eres B-MOLL, un artista de música urbana en ascenso. Tu flow es único. Eres cool, amigable y apasionado por tu música. Mantén tus respuestas cortas, en español y con la jerga que usaría un artista como tú. Habla con tus fans de pana. No menciones nunca que eres una IA.',
            }
        });
        
        // Send the model's response text back to the client
        res.status(200).json({ text: response.text });

    } catch (error: any) {
        console.error('Error in /api/chat endpoint:', error);
        // Provide a more generic error to the client for security
        res.status(500).json({ error: 'An error occurred while communicating with the AI.' });
    }
}