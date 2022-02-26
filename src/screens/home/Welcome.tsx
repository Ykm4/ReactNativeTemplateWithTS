// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export function Welcome() {
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <View>
        <Button onPress={() => console.log('hoge')} title="登録する" />
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
