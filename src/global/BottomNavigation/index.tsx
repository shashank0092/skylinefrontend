/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../../screens/Home';
import Notes from '../../screens/ImportantNotes';
import Report from '../../screens/Report';
import Profile from '../../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type DashbaordBottomTabList = {
  Home: undefined;
  Notes: undefined;
  Report: undefined;
  Profile: undefined;
};

const BottomTab = createBottomTabNavigator<DashbaordBottomTabList>();

const DashboardBottomTab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          margin: 10,
          height: 70,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 4,
        },
        tabBarItemStyle: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter_18pt-SemiBold',
          fontSize: 10,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="home" size={28} />
            ) : (
              <Ionicons name="home-outline" size={28} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Notes"
        component={Notes}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="bookmark" size={28} />
            ) : (
              <Ionicons name="bookmark-outline" size={28} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Report"
        component={Report}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons size={28} name="flag" />
            ) : (
              <Ionicons size={28} name="flag-outline" />
            ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons size={28} name="person-circle" />
            ) : (
              <Ionicons size={28} name="person-circle-outline" />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default DashboardBottomTab;
