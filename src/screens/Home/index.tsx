/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import TripCard from './component/TripsCard';
import {ActiveTripsData, chatIds, meetSetupData, tripsData} from './constant';
import {useState} from 'react';
import ChatCard from './component/RecentChartCard';
import MeetSetupCard from './component/MeetSetupCard';
import ActiveTripCard from './component/ActiveTripCard';

const INITIAL_TRIP_COUNT = 5;
const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTrips = showAll
    ? tripsData
    : tripsData.slice(0, INITIAL_TRIP_COUNT);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.mainView}>
        <ScrollView>
          <View style={style.mainView}>
            <View style={{display: 'flex', gap: 5}}>
              <View>
                <Text style={style.welocmeText}>Welcome User</Text>
                <Text style={style.useIdText}>User Id:ABC 123</Text>
              </View>
              <View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <View>
                    <Text style={{fontSize: 20}}>Your Active Trips </Text>
                  </View>
                  <FlatList
                    data={ActiveTripsData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <ActiveTripCard
                        date={item.date}
                        time={item.time}
                        mode={item.mode}
                        transportNumber={item.transportNumber}
                        from={item.from}
                        to={item.to}
                        matchingUsersCount={item.matchingUsersCount}
                        chatRequestCount={item.chatRequestCount}
                      />
                    )}
                    scrollEnabled={false}
                    contentContainerStyle={{gap: 10, paddingBottom: 16}}
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text style={{fontSize: 20}}>Your Next Trips </Text>
                  </View>
                  <View>
                    <Button
                      mode="contained" // filled look
                      onPress={() => console.log('Add Pressed')}
                      icon="plus" // MaterialCommunity icon name
                      contentStyle={{flexDirection: 'row-reverse'}} // icon right side
                      labelStyle={{fontSize: 14, fontWeight: 'bold'}}
                      textColor="white"
                      style={{
                        borderRadius: 10,
                        backgroundColor: '#3b82f6', // nice blue
                        elevation: 2,
                      }}>
                      Add Trip
                    </Button>
                  </View>
                </View>
                <View>
                  <FlatList
                    data={visibleTrips}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TripCard
                        date={item.date}
                        time={item.time}
                        mode={item.mode}
                        transportNumber={item.transportNumber}
                        from={item.from}
                        to={item.to}
                      />
                    )}
                    scrollEnabled={false}
                    contentContainerStyle={{gap: 10, paddingBottom: 16}}
                  />
                  {!showAll && tripsData.length > INITIAL_TRIP_COUNT && (
                    <TouchableOpacity
                      style={{marginBottom: 20}}
                      onPress={() => setShowAll(true)}>
                      <Text style={style.showMoreText}>Show All Trips</Text>
                    </TouchableOpacity>
                  )}
                </View>

                <View style={{marginBottom: 40}}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text style={{fontSize: 20}}>Recent chats </Text>
                    </View>
                    <View>
                      <Button
                        mode="contained" // filled look
                        onPress={() => console.log('Add Pressed')}
                        icon="eye" // MaterialCommunity icon name
                        contentStyle={{flexDirection: 'row-reverse'}} // icon right side
                        labelStyle={{fontSize: 14, fontWeight: 'bold'}}
                        textColor="white"
                        style={{
                          borderRadius: 10,
                          backgroundColor: '#3b82f6', // nice blue
                          elevation: 2,
                        }}>
                        Show All
                      </Button>
                    </View>
                  </View>
                  <FlatList
                    data={chatIds}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <ChatCard userId={item.id} />}
                    scrollEnabled={true}
                    horizontal
                    contentContainerStyle={{gap: 10, paddingTop: 10}}
                  />
                </View>

                <View style={{marginBottom: 100}}>
                  <Text style={{fontSize: 20}}>Meet Setup </Text>
                  <FlatList
                    data={meetSetupData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <MeetSetupCard
                        meetId={item.meetId}
                        location={item.location}
                        time={item.time}
                      />
                    )}
                    contentContainerStyle={{gap: 20, paddingTop: 10}}
                    horizontal
                  />
                </View>
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
export default Home;
