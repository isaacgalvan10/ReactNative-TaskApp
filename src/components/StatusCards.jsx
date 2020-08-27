
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default (props) => {
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

  const totalCompleted = () => {
    let number = props.currentTasks.filter((item) => item.status == 'completed')

    number = number.length;
    return number
  };

  const totalInitiated = () => {
    let number = props.currentTasks.filter((item) => item.status == 'initiated')

    number = number.length;
    return number
  };

  const totalDeleted = () => {
    let number = props.currentTasks.filter((item) => item.status == 'deleted')

    number = number.length;
    return number
  };

  const handleCompletedPress = () => {
    props.setRoute('Completed');
  }

  const handleDeletedPress = () => {
    props.setRoute('Deleted');
  }

  return (
    <View style={styles.statusCards}>
      <View style={styles.column}>
        <TouchableOpacity
          style={styles.cardCompleted}
          onPress={handleCompletedPress}
        >
          <View>
            <Text style={styles.title}>Completed</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>{totalCompleted()}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <View style={styles.cardInProgress}>
          <View>
            <Text style={styles.title}>Initiated</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>{totalInitiated()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.column}>
        <TouchableOpacity
          style={styles.cardDeleted}
          onPress={handleDeletedPress}
        >
          <View>
            <Text style={styles.title}>Deleted</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>{totalDeleted()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
