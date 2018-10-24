import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import Home from '../screens/home';
import Detail from '../screens/detail';
import * as theme from '../utils/Theme';
import { images } from '../../assets';

// MARK: - StackNavigator

export default homeNavigator = createStackNavigator({
  Home,
  Detail
  },
  {
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.purple
      },
      headerTintColor: theme.colors.white,
      headerBackTitle: 'Back',
    },
  });

