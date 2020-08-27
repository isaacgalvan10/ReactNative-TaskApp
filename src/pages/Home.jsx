
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import StatusCards from '../components/StatusCards';
import Tasks from '../components/Tasks';

export default (props) => {
  const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: '#f7fafd'
    },
    top: {
      backgroundColor: '#221040'
    },
    container: {
      paddingTop: 36,
      paddingRight: 20,
      paddingLeft: 20
    },
    text: {
      color: 'white'
    },
    addTaskBtn: {
      backgroundColor: '#fff740',
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      position: 'absolute',
      bottom: 20,
      right: 20,
      shadowColor: '#1b1b1b',
      elevation: 3,
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: .1,
      shadowRadius: 6.68
    },
    plus: {
      fontSize: 26
    }
  });

  const handleAddTask = () => {
    props.setRoute('Create');
  }

  return (
    <View style={styles.home}>
      <StatusBar backgroundColor="#221040" barStyle="light-content" />
      <View style={styles.top}>
        <View style={styles.container}>
          <StatusCards
            currentTasks={props.currentTasks}
            activeTask={props.activeTask}
            currentRoute={props.currentRoute}
            setRoute={props.setRoute}
          />
        </View>
      </View>
      <Tasks
        setRoute={props.setRoute}
        currentTasks={props.currentTasks}
        setTasks={props.setTasks}
        activeTask={props.activeTask}
        setActiveTask={props.setActiveTask}
      />
      <TouchableOpacity
        style={styles.addTaskBtn}
        onPress={handleAddTask}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
