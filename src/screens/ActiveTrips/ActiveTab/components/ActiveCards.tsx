import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {activeUsersData} from '../constants';

type Props = {
  userId: string;
  interests: string[];
};

const ActiveUserCard = ({userId, interests}: Props) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('chat' as never, {userId} as never);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <View style={styles.row}>
        <Ionicons name="person-circle-outline" size={40} color="#2563eb" />
        <View style={{marginLeft: 12}}>
          <Text style={styles.userId}>User ID: {userId}</Text>
          <Text style={styles.interests}>
            Interests: {interests.join(', ')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveUserCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f9ff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userId: {
    fontSize: 16,
    fontFamily: 'Manrope-Bold',
    color: '#1e3a8a',
  },
  interests: {
    fontSize: 14,
    color: '#334155',
    fontFamily: 'Manrope-Regular',
    marginTop: 4,
  },
});
