import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Welcome } from '../screens/home/Welcome';
import { Login } from '../screens/auth/Login';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export type UnAuthedStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

export type UnAuthedStackScreenProps<K extends keyof UnAuthedStackParamList> = NativeStackScreenProps<
  UnAuthedStackParamList,
  K
>;

const HeaderRight = () => {
  // ログイン画面のみに飛ぶよう強制したいので`Pick`型を使っている
  const navigation = useNavigation<NativeStackNavigationProp<Pick<UnAuthedStackParamList, 'Login'>>>();
  return <Button onPress={() => navigation.navigate('Login')} title="ログイン" />;
};

const { Navigator, Screen } = createNativeStackNavigator<UnAuthedStackParamList>();

export function UnAuthedStack() {
  return (
    <Navigator initialRouteName="Welcome">
      <Screen
        name="Welcome"
        component={Welcome}
        options={{ headerTitle: 'Welcome', headerRight: () => <HeaderRight /> }}
      />
      <Screen name="Login" component={Login} options={{ headerTitle: 'ログイン' }} />
    </Navigator>
  );
}
