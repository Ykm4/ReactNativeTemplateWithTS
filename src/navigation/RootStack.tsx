import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome } from '../screens/home/Welcome';

const Stack = createNativeStackNavigator();
export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
