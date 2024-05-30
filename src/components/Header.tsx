import React from 'react';
import { View, Text } from 'react-native';
import headerStyles from '../styles/headerStyles';

const Header: React.FC = () => {
  return (
    <View style={headerStyles.headerContainer}>
      <Text style={headerStyles.headerText}>Sensei</Text>
    </View>
  );
};

export default Header;