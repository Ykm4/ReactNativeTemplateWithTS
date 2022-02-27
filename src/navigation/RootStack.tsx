import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Welcome } from '../screens/home/Welcome';
import { Login } from '../screens/auth/Login';
import { TodoBoard } from '../screens/todo/TodoBoard';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  TodoBoard: undefined;
};

/**
 * 画面が受け取るProps(navigation, route)のための型定義
 */
export type RootStackScreenProps<K extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, K>;

const HeaderRight = () => {
  // ログイン画面のみに飛ぶよう強制したいので`Pick`型を使っている
  const navigation = useNavigation<NativeStackNavigationProp<Pick<RootStackParamList, 'Login'>>>();
  return <Button onPress={() => navigation.navigate('Login')} title="ログイン" />;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();
export function RootStack() {
  return (
    <Navigator initialRouteName="Welcome" screenOptions={{ headerRight: () => <HeaderRight /> }}>
      {/* WelcomeにオプションとしてheaderRight: () => <HeaderRight />を付与する */}
      <Screen name="Welcome" component={Welcome} options={{ headerTitle: 'Welcome' }} />
      <Screen name="Login" component={Login} options={{ headerTitle: 'ログイン', headerRight: undefined }} />
      <Screen name="TodoBoard" component={TodoBoard} options={{ headerTitle: 'TODO', headerRight: undefined }} />
    </Navigator>
  );
}
