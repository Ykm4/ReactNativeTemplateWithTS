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

/**
 * Tabナビゲータに画面（TodoBoardやUserSetting）を直接設定してもよいですが、 タブ内で画面遷移させたい場合、Stackナビゲータを設定する必要があります。
 * 今回のアプリではタブ内で画面遷移しないため必要ありませんが、一般的な実装方法としてStackナビゲータを設定します
 */
