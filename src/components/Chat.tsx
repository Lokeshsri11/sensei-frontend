import React, { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';
import Message from './Message';
import chatStyles from '../styles/chatStyles';

interface ChatProps {
  backendUrl: string;
}

interface ChatMessage {
  text: string;
  isUser: boolean;
}

const Chat: React.FC<ChatProps> = ({ backendUrl }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { text: input, isUser: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');

    try {
      const response = await axios.post(
        backendUrl, 
        { message: input },
        {
          headers: {
            // Add any headers required by your backend
            'Authorization': 'Bearer YOUR_AUTH_TOKEN',  // Example auth token
            'Content-Type': 'application/json',
          },
          // Optionally include withCredentials if your backend uses cookies
          // withCredentials: true,
        }
      );
      
      const aiMessage: ChatMessage = { text: response.data.reply, isUser: false };
      setMessages(prevMessages => [...prevMessages, userMessage, aiMessage]);
    } catch (error) {
      // Log detailed error information
      console.error(`Error sending message: ${error.response ? error.response.status : error.message}`);
      console.error(error?.response?.data);
    }
  };

  return (
    <View style={chatStyles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message text={item.text} isUser={item.isUser} />}
        keyExtractor={(item, index) => index.toString()}
        style={chatStyles.messageList}
      />
      <View style={chatStyles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={chatStyles.input}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default Chat;