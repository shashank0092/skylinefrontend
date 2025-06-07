import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ActiveUserCard from './components/ActiveCards';
import {activeUsersData} from './constants';

const ActiveTab = () => {
  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <ScrollView style={{padding: 16}}>
          {activeUsersData.map((user, index) => (
            <ActiveUserCard
              key={index}
              userId={user.userId}
              interests={user.interests}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default ActiveTab;
