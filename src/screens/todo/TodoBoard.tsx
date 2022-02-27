import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export function TodoBoard() {
  const navigation = useNavigation();
  const navigate = useCallback(() => {
    // TODO: 型修正
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    navigation.navigate('TodoForm');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>TODO</Text>
      <Button onPress={navigate} title="ToDo登録" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
