import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function TodoBoard() {
  return (
    <View style={styles.container}>
      <Text>TODO</Text>
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
