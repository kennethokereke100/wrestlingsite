'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography,
  TextField,
  Box,
  Avatar
} from '@mui/material';
import { ArrowBack, Send } from '@mui/icons-material';


interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function TextingPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome! How can I help you with your gigs today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now(),
        text: newMessage,
        isUser: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');

      // Auto-reply after 1 second
      setTimeout(() => {
        const promoterReply: Message = {
          id: Date.now() + 1,
          text: "How are you big man, we can pay you 100 an hour for a gig.",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, promoterReply]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* App Bar */}
      <AppBar 
        position="sticky" 
        elevation={0} 
        sx={{ 
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e0e0e0',
          top: 0,
          zIndex: 1000
        }}
      >
        <Toolbar sx={{ minHeight: '64px' }}>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="back"
            onClick={() => router.push('/call')}
            sx={{ 
              color: '#000000',
              mr: 2
            }}
          >
            <ArrowBack />
          </IconButton>
          
          <Avatar 
            src="/images/promoter.jpg"
            sx={{ 
              width: '40px', 
              height: '40px', 
              mr: 2,
              border: '2px solid #333333'
            }}
          />
          
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#000000',
              fontWeight: '600'
            }}
          >
            Chat with Promoter
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Chat Area */}
      <div 
        className="flex-1 overflow-y-auto px-4 py-2"
        style={{ 
          backgroundColor: '#f0f0f0',
          backgroundImage: 'radial-gradient(circle, #e0e0e0 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="w-full max-w-[600px] mx-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                display: 'flex',
                justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                marginBottom: '12px'
              }}
            >
              <div
                style={{
                  maxWidth: '70%',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  backgroundColor: message.isUser ? '#007bff' : '#e5e5ea',
                  color: message.isUser ? '#ffffff' : '#000000',
                  wordWrap: 'break-word',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                <Typography sx={{ 
                  fontSize: '16px',
                  lineHeight: 1.4
                }}>
                  {message.text}
                </Typography>
                <Typography sx={{ 
                  fontSize: '12px',
                  color: message.isUser ? 'rgba(255,255,255,0.7)' : '#666666',
                  marginTop: '4px',
                  textAlign: 'right'
                }}>
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </Typography>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Bar */}
      <div 
        className="w-full bg-white border-t border-gray-200 px-4 py-3"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <div className="w-full max-w-[600px] mx-auto flex items-center gap-3">
          <TextField
            fullWidth
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            variant="outlined"
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px',
                backgroundColor: '#f8f9fa',
                '& fieldset': {
                  borderColor: '#e0e0e0',
                },
                '&:hover fieldset': {
                  borderColor: '#007bff',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#007bff',
                },
              },
              '& .MuiInputBase-input': {
                fontSize: '16px',
                color: '#333333',
                '&::placeholder': {
                  color: '#666666',
                  opacity: 1,
                },
              },
            }}
          />
          <IconButton
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            sx={{
              backgroundColor: newMessage.trim() ? '#007bff' : '#e0e0e0',
              color: newMessage.trim() ? '#ffffff' : '#666666',
              width: '40px',
              height: '40px',
              '&:hover': {
                backgroundColor: newMessage.trim() ? '#0056cc' : '#e0e0e0',
              },
              '&:disabled': {
                backgroundColor: '#e0e0e0',
                color: '#666666',
              }
            }}
          >
            <Send />
          </IconButton>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind fixed input bar */}
      <div style={{ height: '80px' }} />
    </div>
  );
} 