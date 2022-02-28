import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { TodoBoard } from '../screens/todo/TodoBoard';

export type AuthedStackParamList = {
  TodoBoard: undefined;
};

export type AuthedStackScreenProps<K extends keyof AuthedStackParamList> = NativeStackScreenProps<
  AuthedStackParamList,
  K
>;

const { Navigator, Screen } = createNativeStackNavigator<AuthedStackParamList>();

export function AuthedStack() {
  return (
    <Navigator initialRouteName="TodoBoard" screenOptions={{ headerShown: false }}>
      <Screen name="TodoBoard" component={TodoBoard} />
    </Navigator>
  );
}
