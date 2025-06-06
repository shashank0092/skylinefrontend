import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ImportantNotesCard from './component/ImportnatNotes';
import {importantContactNotes} from './constants';

const Notes = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.mainView}>
        <ScrollView style={{display: 'flex', flex: 1}}>
          <View style={style.mainView}>
            <View
              style={{
                display: 'flex',
                gap: 5,
              }}>
              <View>
                <Text style={style.welocmeText}>Important Notes</Text>
                <Text style={style.useIdText}>
                  Important things you got while travling
                </Text>
                <FlatList
                  data={importantContactNotes}
                  keyExtractor={item => item.id}
                  scrollEnabled={true}
                  renderItem={({item}) => (
                    <ImportantNotesCard
                      chatId={item.chatId}
                      note={item.note}
                      tripId={item.tripId}
                      key={item.id}
                    />
                  )}
                  contentContainerStyle={{
                    gap: 20,
                    paddingTop: 10,
                    paddingBottom: 60,
                  }}
                />
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
    marginBottom: 20,
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
export default Notes;
