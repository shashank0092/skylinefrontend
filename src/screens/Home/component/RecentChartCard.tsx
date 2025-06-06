import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type ChatCardProps = {
  userId: string;
};

const ChatCard = ({userId}: ChatCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.userId}>User ID: {userId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
  },
  userId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
});

export default ChatCard;
