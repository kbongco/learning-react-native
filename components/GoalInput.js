import React, { useState } from 'react';
import {TextInput, View, Button, StyleSheet } from 'react-native'


export default function GoalInput(props) {

  const [entered, setEntered] = useState("");


  const goalInputHandler = (enteredText) => {
    setEntered(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
    <TextInput
      placeholder="Overall Goal"
      style={styles.input}
      onChangeText={goalInputHandler}
      value={entered}
    />
    <Button title="ADD" onPress={props.onAddGoal.bind(this,entered)} />
  </View>

  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
})