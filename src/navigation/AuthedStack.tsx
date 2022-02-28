import React, { useCallback } from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTab } from './BottomTab';
import { TodoForm } from '../screens/todo/TodoForm';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export type AuthedStackParamList = {
  BottomTab: undefined;
  TodoForm: undefined;
};

export type AuthedStackScreenProps<K extends keyof AuthedStackParamList> = NativeStackScreenProps<
  AuthedStackParamList,
  K
>;

const { Navigator, Screen } = createNativeStackNavigator<AuthedStackParamList>();

const CloseButton: React.FC = () => {
  const navigation = useNavigation();
  const onClose = useCallback(() => navigation.goBack(), [navigation]);

  return <Button title="close" onPress={onClose} />;
};

export function AuthedStack() {
  return (
    <Navigator initialRouteName="BottomTab" screenOptions={{ headerShown: false }}>
      <Screen name="BottomTab" component={BottomTab} />
      <Screen
        name="TodoForm"
        component={TodoForm}
        options={{
          headerShown: true,
          presentation: 'modal',
          headerRight: () => <CloseButton />,
          headerTransparent: true,
        }}
      />
    </Navigator>
  );
}

/**
 * Todo登録画面をTodoStack内ではなく、AuthedStack内に配置している理由は下部タブバーを批評にするためです。(BottomTab内のスタックだとタブバーが表示されてしまう)
 * BottomTabの外側に置くことで、タブバーを表示しないようにすることができます。
 * Hiding tab bar in specific screens: https://reactnavigation.org/docs/hiding-tabbar-in-screens/
 */
