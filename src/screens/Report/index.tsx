/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ReportForm from './Form/Report/ReportForm';

const Reports = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.mainView}>
        <ScrollView>
          <View style={style.mainView}>
            <View style={{display: 'flex', gap: 20}}>
              <View>
                <Text style={style.welocmeText}>Faced any issue</Text>
                <Text style={style.useIdText}>
                  Open an issue we are with you
                </Text>
              </View>
              <View>
                <ReportForm />
              </View>
            </View>
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
});
export default Reports;
