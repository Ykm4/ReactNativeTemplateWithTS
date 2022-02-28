import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTab } from './BottomTab';

export type AuthedStackParamList = {
  BottomTab: undefined;
};

export type AuthedStackScreenProps<K extends keyof AuthedStackParamList> = NativeStackScreenProps<
  AuthedStackParamList,
  K
>;

const { Navigator, Screen } = createNativeStackNavigator<AuthedStackParamList>();

export function AuthedStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="BottomTab" component={BottomTab} />
    </Navigator>
  );
}
