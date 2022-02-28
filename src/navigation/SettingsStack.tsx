import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { UserSetting } from '../screens/settings/UserSetting';

export type SettingsStackParamList = {
  UserSetting: undefined;
};

export type SettingStackScreenProps<K extends keyof SettingsStackParamList> = NativeStackScreenProps<
  SettingsStackParamList,
  K
>;

const { Navigator, Screen } = createNativeStackNavigator<SettingsStackParamList>();

export function SettingsStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="UserSetting">
      <Screen
        name="UserSetting"
        component={UserSetting}
        options={{
          headerTitle: 'Todoアプリ',
        }}
      />
    </Navigator>
  );
}
