import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import { UnAuthedStackScreenProps } from '../../navigation/UnAuthedStack';

export function Login({ navigation }: UnAuthedStackScreenProps<'Login'>) {
  const { login } = useUserContext();
  const handleLogin = useCallback(() => {
    login('user', 'password');
  }, [login]);

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View>
        <Button onPress={handleLogin} title="ログイン" />
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
