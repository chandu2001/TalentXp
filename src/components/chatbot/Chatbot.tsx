'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Loader2, Send, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { getChatbotResponse } from '@/app/actions';

type Message = {
  role: 'user' | 'model';
  content: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleSuggestedAction = (text: string) => {
    setInput(text);
    handleSend(text);
  };

  const handleSend = async (messageText?: string) => {
    const currentInput = typeof messageText === 'string' ? messageText : input;
    if (currentInput.trim() === '' || isLoading) return;

    const userMessage: Message = { role: 'user', content: currentInput };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(msg => ({
        role: msg.role,
        content: [{ text: msg.content }],
      }));
      
      const response = await getChatbotResponse({
        history,
        message: currentInput,
      });

      const assistantMessage: Message = { role: 'model', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting chatbot response:', error);
      const errorMessage: Message = {
        role: 'model',
        content: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const suggestedActions = [
    "What services do you offer?",
    "Tell me about your company culture",
    "How can I apply for a job?",
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-24 right-4 sm:right-8 w-[calc(100%-2rem)] max-w-md z-50"
          >
            <Card className="h-[70vh] flex flex-col shadow-2xl border-primary/20 rounded-xl overflow-hidden">
                <header className="bg-primary/90 backdrop-blur-sm text-primary-foreground p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10 border-2 border-primary-foreground/50">
                            <AvatarFallback className="bg-transparent"><Bot size={24} /></AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-lg font-bold font-headline">TalentXp AI</h2>
                            <p className="text-xs text-primary-foreground/80">Your guide to our services</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground">
                        <X className="w-5 h-5" />
                    </Button>
                </header>
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-6 bg-secondary/30" ref={chatContainerRef}>
                <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                        <AvatarFallback><Bot size={18} /></AvatarFallback>
                    </Avatar>
                    <div className="bg-background border shadow-sm p-3 rounded-lg max-w-xs rounded-tl-none">
                        <p className="text-sm">Hello! I'm the TalentXp AI Assistant. How can I help you learn about our company today?</p>
                        <div className="mt-3 space-y-2">
                           {suggestedActions.map((action, i) => (
                             <Button key={i} variant="outline" size="sm" className="w-full justify-start h-auto py-2" onClick={() => handleSuggestedAction(action)}>
                               {action}
                             </Button>
                           ))}
                        </div>
                    </div>
                </div>
                {messages.map((msg, index) => (
                  <div key={index} className={`flex items-start space-x-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'model' && (
                      <Avatar className="w-8 h-8">
                          <AvatarFallback><Bot size={18} /></AvatarFallback>
                      </Avatar>
                    )}
                    <div className={`p-3 rounded-lg max-w-xs shadow-sm border text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-background text-foreground rounded-tl-none'}`}>
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                     {msg.role === 'user' && (
                      <Avatar className="w-8 h-8">
                          <AvatarFallback><User size={18} /></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                        <AvatarFallback><Bot size={18} /></AvatarFallback>
                    </Avatar>
                     <div className="bg-background border shadow-sm p-3 rounded-lg max-w-xs flex items-center rounded-tl-none">
                       <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                     </div>
                  </div>
                )}
              </CardContent>
              <div className="border-t bg-background p-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Ask a question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    disabled={isLoading}
                    className="pr-12 text-base"
                  />
                  <Button
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={() => handleSend()}
                    disabled={isLoading}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-4 right-4 sm:right-8 z-50"
      >
        <Button size="icon" className="rounded-full w-16 h-16 shadow-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Bot className="w-8 h-8" />}
        </Button>
      </motion.div>
    </>
  );
};

export default Chatbot;
