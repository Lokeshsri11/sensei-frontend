import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MessageProps {
  text: string;
  isUser: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isUser }) => {
  return (
    <View style={[styles.container, isUser ? styles.userMessage : styles.aiMessage]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    alignSelf: 'center',  // Center align the messages
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  text: {
    fontSize: 16,
  },
});

export default Message;