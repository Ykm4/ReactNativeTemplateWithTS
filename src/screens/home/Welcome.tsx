import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { UnAuthedStackScreenProps } from '../../navigation/UnAuthedStack';

export function Welcome({ navigation }: UnAuthedStackScreenProps<'Welcome'>) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      {/* <View>
        <Button onPress={() => navigation.navigate('Login')} title="登録する" />
      </View> */}
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
