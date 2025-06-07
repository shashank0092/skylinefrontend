import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Chip} from 'react-native-paper';

const Profile = () => {
  const interests = ['Business', 'Networking', 'Technology', 'Travel'];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainView}>
        <ScrollView>
          <View style={styles.mainView}>
            <Text style={styles.welocmeText}>Your Profile</Text>
          </View>
          <View style={styles.mainView}>
            {/* Avatar and Name Section */}
            <View style={styles.header}>
              <View style={styles.avatarContainer}>
                <Ionicons name="person-circle" size={80} color="#3b82f6" />
              </View>

              <View style={{marginLeft: 15}}>
                <Text style={styles.userName}>Shashank Shukla</Text>
                <Text style={styles.userId}>User ID: AFX78239</Text>
              </View>
            </View>

            {/* Details Card */}
            <View style={styles.card}>
              <Text style={styles.cardHeading}>Personal Details</Text>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Gender:</Text>
                <Text style={styles.value}>Male</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Aadhaar Number:</Text>
                <Text style={styles.value}>XXXX-XXXX-1234</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>shashank@email.com</Text>
              </View>
            </View>

            {/* Interest Card with Chips */}
            <View style={[styles.card, {marginTop: 20}]}>
              <Text style={styles.cardHeading}>Interests</Text>
              <View style={styles.chipContainer}>
                {interests.map((interest, index) => (
                  <Chip
                    key={index}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: '#e0f2ff',
                        borderColor: '#3b82f6',
                        borderWidth: 1,
                      },
                    ]}
                    textStyle={{
                      fontFamily: 'Manrope-SemiBold',
                      color: '#3b82f6',
                    }}
                    mode="outlined">
                    {interest}
                  </Chip>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingInline: 20,
    paddingBlock: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  userName: {
    fontFamily: 'Manrope-Bold',
    fontSize: 22,
    color: '#111',
  },
  userId: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
  },
  cardHeading: {
    fontSize: 18,
    fontFamily: 'Manrope-Bold',
    marginBottom: 15,
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontFamily: 'Manrope-Regular',
    fontSize: 15,
    color: '#666',
  },
  value: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: '#222',
  },
  avatarContainer: {
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    height: 36,
    borderRadius: 20,
  },
  welocmeText: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 40,
  },
  useIdText: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 20,
  },
});

export default Profile;
