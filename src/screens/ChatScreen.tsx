import React from 'react';
import { View, StyleSheet } from 'react-native';
import Chat from '../components/Chat';
import Header from '../components/Header';

const ChatScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* Replace with your actual backend URL */}
      <Chat backendUrl="http://your-backend-url.com/api/chat" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;