// component/MeetSetupCard.tsx
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type MeetSetupCardProps = {
  meetId: string;
  location: string;
  time: string;
};

const MeetSetupCard = ({meetId, location, time}: MeetSetupCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Meet Setup</Text>
      <Text style={styles.detail}>
        <Text style={styles.label}>Meet ID: </Text>
        {meetId}
      </Text>
      <Text style={styles.detail}>
        <Text style={styles.label}>Location: </Text>
        {location}
      </Text>
      <Text style={styles.detail}>
        <Text style={styles.label}>Time: </Text>
        {time}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0f2fe',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#0369a1',
  },
  detail: {
    fontSize: 16,
    marginBottom: 4,
    color: '#075985',
  },
  label: {
    fontWeight: '600',
  },
});

export default MeetSetupCard;
