import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function TodoForm() {
  return (
    <View style={styles.container}>
      <Text>TODO登録</Text>
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
