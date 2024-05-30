import { StyleSheet } from 'react-native';

const chatStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',  // Light background
  },
  messageList: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',  // White background for the input area
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: '#FFFFFF',  // White background for the input field
    fontSize: 16,
  },
});

export default chatStyles;