
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function StatusCards() {
  const styles = StyleSheet.create({
    statusCards: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    column: {
      flex: 1,
      padding: 5,
      height: 150
    },
    cardCompleted: {
      flex: 1,
      backgroundColor: '#7418ff',
      borderRadius: 10,
      padding: 10
    },
    cardInProgress: {
      flex: 1,
      backgroundColor: '#6730bf',
      borderRadius: 10,
      padding: 10
    },
    cardDeleted: {
      flex: 1,
      backgroundColor: '#452080',
      borderRadius: 10,
      padding: 10
    },
    title: {
      color: 'white',
      alignSelf: 'center'
    },
    numberContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    number: {
      color: 'white',
      fontSize: 40,
      fontWeight: '100'
    }
  });

  return (
    <View style={styles.statusCards}>
      <View style={styles.column}>
        <View style={styles.cardCompleted}>
          <View>
            <Text style={styles.title}>Completed</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>100</Text>
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.cardInProgress}>
          <View>
            <Text style={styles.title}>Initiated</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>100</Text>
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.cardDeleted}>
          <View>
            <Text style={styles.title}>Deleted</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>100</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
