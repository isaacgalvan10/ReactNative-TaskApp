import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';
import Create from './src/pages/Create';
import Edit from './src/pages/Edit';
import Completed from './src/pages/Completed';
import Deleted from './src/pages/Deleted';


export default function App() {
  const [currentRoute, setRoute] = useState('Home');
  const [currentTasks, setTasks] = useState([
    {}
  ]);
  const [activeTask, setActiveTask] = useState('');

  const showPages = () => {
    switch (currentRoute) {
      case 'Home':
        return (<Home
          currentRoute={currentRoute}
          setRoute={setRoute}
          currentTasks={currentTasks}
          setTasks={setTasks}
          activeTask={activeTask}
          setActiveTask={setActiveTask}
        />)
        break;
      case 'Create':
        return (<Create
          currentRoute={currentRoute}
          setRoute={setRoute}
          currentTasks={currentTasks}
          setTasks={setTasks}
        />)
        break;
      case 'Edit':
        return (<Edit
          currentRoute={currentRoute}
          setRoute={setRoute}
          currentTasks={currentTasks}
          setTasks={setTasks}
          activeTask={activeTask}
        />)
        break;
      case 'Completed':
        return (<Completed
          currentRoute={currentRoute}
          setRoute={setRoute}
          currentTasks={currentTasks}
          activeTask={activeTask}
          setActiveTask={setActiveTask}
        />)
        break;
      case 'Deleted':
        return (<Deleted
          currentRoute={currentRoute}
          setRoute={setRoute}
          currentTasks={currentTasks}
          activeTask={activeTask}
          setActiveTask={setActiveTask}
        />)
        break;

      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      {showPages()}
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
