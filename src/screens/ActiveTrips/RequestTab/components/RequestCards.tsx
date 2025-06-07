import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  userId: string;
  interests: string[];
  rating: number;
  reported: boolean;
  onAccept?: () => void;
  onReject?: () => void;
};

const RequestUserCard = ({
  userId,
  interests,
  rating,
  reported,
  onAccept,
  onReject,
}: Props) => {
  return (
    <View style={[styles.card, reported && styles.reported]}>
      {/* Header Section */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={40} color="#3b82f6" />
        <View style={{marginLeft: 10}}>
          <Text style={styles.userId}>User ID: {userId}</Text>
          <Text style={styles.rating}>⭐ {rating.toFixed(1)} / 5</Text>
        </View>
      </View>

      {/* Interest Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Matching Interests:</Text>
        <Text style={styles.value}>{interests.join(', ')}</Text>
      </View>

      {/* Report Section */}
      {reported && (
        <View style={styles.reportSection}>
          <Ionicons name="warning" size={18} color="red" />
          <Text style={styles.reportText}>Reported User</Text>
        </View>
      )}

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.rejectBtn} onPress={onReject}>
          <Text style={styles.rejectText}>Reject</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.acceptBtn} onPress={onAccept}>
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RequestUserCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  reported: {
    borderColor: 'red',
    borderWidth: 1.5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userId: {
    fontSize: 16,
    fontFamily: 'Manrope-Bold',
    color: '#111',
  },
  rating: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Manrope-Regular',
  },
  section: {
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: '#444',
    fontFamily: 'Manrope-SemiBold',
  },
  value: {
    fontSize: 14,
    color: '#222',
    marginTop: 2,
    fontFamily: 'Manrope-Regular',
  },
  reportSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: '#ffe5e5',
    padding: 6,
    borderRadius: 8,
  },
  reportText: {
    color: 'red',
    marginLeft: 6,
    fontFamily: 'Manrope-Medium',
    fontSize: 13,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    gap: 10,
  },
  rejectBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f87171',
    borderRadius: 8,
  },
  acceptBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#4ade80',
    borderRadius: 8,
  },
  acceptText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
  },
  rejectText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
  },
});
