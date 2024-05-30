import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
  headerContainer: {
    height: 90,
    backgroundColor: '#4A90E2',  // Blue background
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  headerText: {
    color: '#FFFFFF',  // White text color
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default headerStyles;