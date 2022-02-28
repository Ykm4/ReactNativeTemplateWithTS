import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import { AuthedStackScreenProps } from '../../navigation/AuthedStack';

export function TodoBoard({ navigation }: AuthedStackScreenProps<'TodoBoard'>) {
  const { logout } = useUserContext();
  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <View style={styles.container}>
      <Text>TODO</Text>
      <View>
        <Button onPress={handleLogout} title="ログアウト" />
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
