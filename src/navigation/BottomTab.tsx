import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SettingsStack } from './SettingsStack';
import { TodoStack } from './TodoStack';

// TODO: 型をつける

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Navigator initialRouteName="Todo" screenOptions={{ headerShown: false }}>
      <Screen name="Todo" component={TodoStack} options={{ title: 'ホーム' }}></Screen>
      <Screen name="Settings" component={SettingsStack} options={{ title: '設定' }}></Screen>
    </Navigator>
  );
}
