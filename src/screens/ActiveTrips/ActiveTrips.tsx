/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useRoute} from '@react-navigation/native';
import RequestTab from './RequestTab';
import ActiveTab from './ActiveTab';

const Tab = createMaterialTopTabNavigator();

const ActiveTripDetailsTabs = () => {
  const route = useRoute();
  const {transportNumber} = route.params as {transportNumber: string};

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 14, fontFamily: 'Manrope-Bold'},
          tabBarIndicatorStyle: {backgroundColor: '#3b82f6'},
          tabBarStyle: {backgroundColor: '#f4f4f4', elevation: 4},
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: '#666',
        }}>
        <Tab.Screen name="Active" component={ActiveTab} />
        <Tab.Screen name="Requests" component={RequestTab} />
      </Tab.Navigator>
    </View>
  );
};

export default ActiveTripDetailsTabs;

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Manrope-Bold',
    color: '#111',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tabText: {
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: '#333',
  },
});
