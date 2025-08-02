import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import type { ChatMessage } from '../types';

// Simple spinner component
const Spinner = () => (
    <div className="w-5 h-5 border-2 border-slate-500 border-t-white rounded-full animate-spin"></div>
);

const Chatbot: React.FC = () => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            // NOTE: The API key is sourced from `process.env.API_KEY`, which is assumed to be configured in the deployment environment.
            if (!process.env.API_KEY) {
                console.error("API_KEY environment variable not set.");
                setError("La configuración del chat no está disponible en este momento.");
                return;
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const chatSession = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: 'Eres B-MOLL, un artista de música urbana en ascenso. Eres cool, amigable y apasionado por tu música. Mantén tus respuestas concisas, en español y atractivas para tus fans. No menciones que eres una IA.',
                }
            });
            setChat(chatSession);
            setMessages([{ role: 'model', text: '¡Qué onda! Soy B-MOLL. Tírame cualquier pregunta que tengas sobre mi música o lo que sea. 🔥' }]);
        } catch (e: any) {
            console.error("Failed to initialize AI Chat:", e);
            setError("No se pudo iniciar el chat. Asegúrate de que la clave de API esté configurada.");
        }
    }, []);

    useEffect(() => {
        // Scroll to bottom of chat container when new messages are added
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading || !chat) return;

        const userMessage: ChatMessage = { role: 'user', text: userInput.trim() };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await chat.sendMessage({ message: userMessage.text });
            const modelMessage: ChatMessage = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (e: any) {
            console.error("Error sending message:", e);
            const errorMessage = 'Oops, algo salió mal. Intenta de nuevo más tarde.';
            setError(errorMessage);
            setMessages(prev => [...prev, {role: 'model', text: errorMessage}])
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-12 uppercase tracking-wider" style={{ fontFamily: "'Teko', sans-serif" }}>
                    Pregúntale a B-MOLL
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
                    <div className="hidden lg:block">
                        <img 
                            src="https://i.pinimg.com/736x/b1/7b/b9/b17bb949d8cc3670fb0c0585f282477a.jpg" 
                            alt="Logo de B-MOLL"
                            className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                        />
                    </div>
                    <div className="bg-slate-800 rounded-lg shadow-2xl shadow-indigo-500/10 flex flex-col" style={{height: '60vh'}}>
                        <div ref={chatContainerRef} className="flex-1 p-6 space-y-4 overflow-y-auto">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex items-end gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-indigo-500 flex-shrink-0 text-center font-bold leading-8 font-teko text-lg">B</div>}
                                    <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-600 rounded-br-none' : 'bg-slate-700 rounded-bl-none'}`}>
                                        <p className="text-white text-sm whitespace-pre-wrap">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex items-end gap-3 justify-start">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex-shrink-0 text-center font-bold leading-8 font-teko text-lg">B</div>
                                    <div className="max-w-xs md:max-w-md p-3 rounded-2xl bg-slate-700 rounded-bl-none">
                                        <div className="flex items-center gap-2">
                                            <Spinner />
                                            <span className="text-sm text-slate-400">Pensando...</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-4 border-t border-slate-700">
                            {error && !isLoading && (
                                <div className="text-center text-red-400 text-xs pb-2">{error}</div>
                            )}
                            <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                                <input
                                    type="text"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder={!chat || error ? "El chat no está disponible" : "Escribe tu mensaje..."}
                                    disabled={isLoading || !chat || !!error}
                                    className="flex-1 w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                                    aria-label="Chat input"
                                />
                                <button type="submit" disabled={isLoading || !userInput.trim() || !chat || !!error} className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900/50 disabled:cursor-not-allowed text-white font-bold p-3 rounded-full transition-colors duration-300 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chatbot;