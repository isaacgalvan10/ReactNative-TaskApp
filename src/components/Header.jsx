
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    headerProfileContainer: {
      borderRadius: 50,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      width: 60
    },
    headerProfile: {
      height: 60,
      width: 60
    },
    welcomeMessage: {
      paddingLeft: 20
    },
    greeting: {
      color: 'white',
      fontSize: 20,
      fontWeight: '700'
    },
    subMessage: {
      color: '#959cac',
      fontSize: 14,
      fontWeight: '300'
    }
  });

  return (
    <View style={styles.header}>
      <View style={styles.headerProfileContainer}>
        <Image
          style={styles.headerProfile}
          source={{ uri: 'https://randomuser.me/api/portraits/men/95.jpg' }}
        />
      </View>
      <View style={styles.welcomeMessage}>
        <Text style={styles.greeting}>Hi, James Doe</Text>
        <Text style={styles.subMessage}>Last time you completed 4 Tasks</Text>
      </View>
    </View>
  );
}
