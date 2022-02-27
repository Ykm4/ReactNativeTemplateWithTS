import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useUserContext } from '../contexts/UserContext';
import { AuthedStack } from './AuthedStack';
import { UnAuthedStack } from './UnAuthedStack';

export type RootStackParamList = {
  Authed: undefined;
  UnAuthed: undefined;
};

export type RootStackScreenProps<K extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, K>;

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  // userContextのプロパティが一つでも更新されると再レンダーされる
  const userContext = useUserContext();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {userContext.isLoggedIn ? (
        <Screen name="Authed" component={AuthedStack} />
      ) : (
        <Screen name="UnAuthed" component={UnAuthedStack} />
      )}
    </Navigator>
  );
}
