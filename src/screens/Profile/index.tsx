import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.mainView}>
        <ScrollView>
          <View style={style.mainView}>
            <View style={{display: 'flex', gap: 20}}>
              <View>
                <Text style={style.welocmeText}>User Details</Text>
              </View>
              <View>
                <TouchableOpacity style={style.submitButton}>
                  <Text style={style.submitButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  mainView: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    paddingInline: 20,
    paddingBlock: 5,
  },
  welocmeText: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 40,
  },
  useIdText: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 20,
  },
  showMoreText: {
    color: '#3b82f6',
    fontWeight: '600',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#1E90FF', // Sky blue
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    width: 100,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_18pt-SemiBold',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Profile;
