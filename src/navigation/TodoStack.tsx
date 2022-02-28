import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { TodoBoard } from '../screens/todo/TodoBoard';

export type TodoStackParamList = {
  TodoBoard: undefined;
};

export type TodoStackScreenProps<K extends keyof TodoStackParamList> = NativeStackScreenProps<TodoStackParamList, K>;

const { Navigator, Screen } = createNativeStackNavigator<TodoStackParamList>();

export function TodoStack() {
  return (
    <Navigator initialRouteName="TodoBoard">
      <Screen
        name="TodoBoard"
        component={TodoBoard}
        options={{
          headerTitle: 'Todoアプリ',
        }}
      />
    </Navigator>
  );
}
