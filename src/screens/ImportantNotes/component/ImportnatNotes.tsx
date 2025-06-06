import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type ImportantNotesCardProps = {
  tripId: string;
  chatId: string;
  note: string;
};

const ImportantNotesCard = ({
  tripId,
  chatId,
  note,
}: ImportantNotesCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        📌 Trip ID: <Text style={styles.idValue}>{tripId}</Text>
      </Text>
      <Text style={styles.subtitle}>
        💬 Chat ID: <Text style={styles.idValue}>{chatId}</Text>
      </Text>
      <Text style={styles.note}>{note}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0f2fe',
    padding: 18,
    borderRadius: 14,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: '#0284c7',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#0f172a',
    marginBottom: 2,
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1e293b',
    marginBottom: 8,
  },
  idValue: {
    fontFamily: 'Poppins-Regular',
    color: '#0369a1',
  },
  note: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#334155',
  },
});

export default ImportantNotesCard;
