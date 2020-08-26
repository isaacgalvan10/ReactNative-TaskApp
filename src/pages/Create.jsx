
import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';


export default function Create() {
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
    formContainer: {

    },
    sectionTitle: {
      fontSize: 30,
      color: '#646da1',
      fontWeight: '700',
      marginBottom: 20
    },
    label: {
      fontWeight: '700',
      marginBottom: 10
    },
    textInput: {
      backgroundColor: 'white',
      fontSize: 18,
      padding: 10,
      marginBottom: 10,
      borderColor: '#d1d1d1',
      borderWidth: 1,
      borderRadius: 5
    },
    textArea: {
      backgroundColor: 'white',
      fontSize: 18,
      padding: 10,
      marginBottom: 10,
      borderColor: '#d1d1d1',
      borderWidth: 1,
      borderRadius: 5,
      height: 300
    },
    saveBtn: {
      backgroundColor: '#0a70ff',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center'
    },
    saveBtnTxt: {
      color: 'white',
      fontSize: 18
    }
  });

  return (
    <View style={styles.home}>
      <StatusBar backgroundColor="#221040" barStyle="light-content" />
      <View style={styles.top}>
        <View style={styles.container}>
          <View style={styles.menuContainer}>
            <Text style={styles.backBtn}>Back</Text>
          </View>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Create Task</Text>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter title"
          // onChangeText={(text) => this.setState({ text })}
          // value={this.state.text}
          />
          <TextInput
            style={styles.textArea}
            placeholder="Enter task"
            multiline={true}
            numberOfLines={5}
          // onChangeText={(text) => this.setState({ text })}
          // value={this.state.text}
          />
          <View style={styles.saveBtn}>
            <Text style={styles.saveBtnTxt}>Save</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
