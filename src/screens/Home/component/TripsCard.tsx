import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TripCardProps = {
  date: string;
  time: string;
  mode: string;
  transportNumber: string;
  from: string;
  to: string;
};

const TripCard = ({
  date,
  time,
  mode,
  transportNumber,
  from,
  to,
}: TripCardProps) => {
  return (
    <Card style={styles.card} mode="elevated">
      <View style={styles.header}>
        <Ionicons
          name={mode === 'flight' ? 'airplane' : 'train'}
          size={24}
          color="#3b82f6"
        />
        <Text style={styles.modeText}>
          {mode === 'flight' ? 'Flight' : 'Train'} - {transportNumber}
        </Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{date}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>Departure Time:</Text>
        <Text style={styles.value}>{time}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>From:</Text>
        <Text style={styles.value}>{from}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.label}>To:</Text>
        <Text style={styles.value}>{to}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginVertical: 10,
    padding: 16,
    backgroundColor: '#f9f9f9',
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  modeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: '#64748b',
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0f172a',
  },
});

export default TripCard;
