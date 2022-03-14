import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllMovies from '../screens/AllMovies';
import MyMovies from '../screens/MyMovies';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'All movies') {
              iconName = focused ? 'movie' : 'movie-outline';
            } else if (route.name === 'My movies') {
              iconName = focused
                ? 'movie-open-star'
                : 'movie-open-star-outline';
            }

            return <IconM name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#749cd3',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="All movies" component={AllMovies} />
        <Tab.Screen name="My movies" component={MyMovies} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
