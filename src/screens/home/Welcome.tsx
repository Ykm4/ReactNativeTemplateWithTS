import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootStackScreenProps } from '../../navigation/RootStack';

export function Welcome({ navigation }: RootStackScreenProps<'Welcome'>) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <View>
        <Button onPress={() => navigation.navigate('Login')} title="登録する" />
      </View>
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
