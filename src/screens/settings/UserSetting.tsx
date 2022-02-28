import React, { useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useUserContext } from '../../contexts/UserContext';

export function UserSetting() {
  const { logout } = useUserContext();
  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <View style={styles.container}>
      <Text>User Setting</Text>
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
