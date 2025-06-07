// src/components/HeaderLeft.tsx
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({onPress, title}: {onPress: () => void; title?: string}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.icon}>
        <Ionicons name="menu" size={26} color="#333" />
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'Inter_24pt-Bold',
  },
});

export default Header;
