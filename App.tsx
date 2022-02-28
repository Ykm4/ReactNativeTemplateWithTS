import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { UserContextProvider } from './src/contexts/UserContext';
import { RootStack } from './src/navigation/RootStack';

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}
