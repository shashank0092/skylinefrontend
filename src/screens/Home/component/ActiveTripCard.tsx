import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type ActiveTripCardProps = {
  date: string;
  time: string;
  mode: string;
  transportNumber: string;
  from: string;
  to: string;
  matchingUsersCount: number; // Number of users on this trip matching interest
  chatRequestCount: number; // Number of chat requests on this trip
};

const ActiveTripCard = ({
  date,
  time,
  mode,
  transportNumber,
  from,
  to,
  matchingUsersCount,
  chatRequestCount,
}: ActiveTripCardProps) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ActiveTripDetails', {transportNumber});
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.8}>
      <View>
        <View style={styles.header}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>

        <View style={styles.route}>
          <Text style={styles.fromTo}>
            {from} → {to}
          </Text>
          <Text style={styles.mode}>
            {mode} {transportNumber}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>
            👥 {matchingUsersCount} matching interest user
            {matchingUsersCount !== 1 ? 's' : ''}
          </Text>
          <Text style={styles.infoText}>
            💬 {chatRequestCount} chat request
            {chatRequestCount !== 1 ? 's' : ''}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#dbeafe', // Light blue for active
    borderRadius: 12,
    padding: 15,
    marginVertical: 5,
    elevation: 4,
    shadowColor: '#3b82f6',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#1e40af', // Dark blue
  },
  time: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 14,
    color: '#2563eb', // Medium blue
  },
  route: {
    marginTop: 8,
  },
  fromTo: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#1e3a8a', // Blue dark
  },
  mode: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#3b82f6',
    marginTop: 4,
  },
  infoRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#1e40af',
  },
});

export default ActiveTripCard;
