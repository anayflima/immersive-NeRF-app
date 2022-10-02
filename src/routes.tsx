import React from 'react';
import { Button, Image, Platform, Text } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
// import { InvestmentTips } from './pages/investmentTips

const Stack = createStackNavigator();

import { Upload } from './pages/upload';

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="upload"
          options={{
            headerStyle: {
              shadowOffset: {
                height: 0,
                width: 0,
              },
              backgroundColor: '#F2F2F2',
              borderBottomWidth: 0,
            },
            headerTitle: () => <Image style={{width: 110, height: 50}} source={require('./assets/logo.png')}/>,
          }} component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}