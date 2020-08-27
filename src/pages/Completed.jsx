
import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';


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
    menuContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingTop: 10,
      paddingBottom: 10
    },
    backBtn: {
      color: 'white',
      padding: 10
    },
    sectionTitle: {
      fontSize: 30,
      color: '#646da1',
      fontWeight: '700',
      marginBottom: 20
    },
    tasks: {
      flex: 1,
      paddingTop: 20
    },
    sectionTitle: {
      fontSize: 30,
      color: '#646da1',
      fontWeight: '700',
      marginBottom: 20
    },
    taskContainer: {
      paddingLeft: 20,
      paddingRight: 20
    },
    task: {
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 20,
      marginBottom: 10,
      shadowColor: '#1b1b1b',
      elevation: 3,
      shadowOffset: {
        width: 0,
        height: 5
      },
      shadowOpacity: .2,
      shadowRadius: 6.68
    },
    taskTitle: {
      fontSize: 18,
      color: '#7c8bc0',
      fontWeight: '700'
    }
  });

  const handleBackBtn = () => {
    props.setRoute('Home');
  }

  const handleTaskPress = (id) => {
    props.setActiveTask(id);
    props.setRoute('Edit');
  }

  const showTasks = () => {
    return props.currentTasks.map((task) => {
      if (task.status === 'completed') {
        return (
          <TouchableOpacity
            style={styles.task}
            key={task.id}
            onPress={handleTaskPress.bind(null, task.id)}
          >
            <Text style={styles.taskTitle}>{task.title}</Text>
          </TouchableOpacity>)
      }
    })
  }

  return (
    <View style={styles.home}>
      <StatusBar backgroundColor="#221040" barStyle="light-content" />
      <View style={styles.top}>
        <View style={styles.container}>
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={handleBackBtn}>
              <Text style={styles.backBtn}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.tasks}>
        <View style={styles.taskContainer}>
          <Text style={styles.sectionTitle}>Completed Tasks</Text>
          <ScrollView>
            {showTasks()}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
