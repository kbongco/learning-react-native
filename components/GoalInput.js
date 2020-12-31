import React, { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal } from "react-native";

export default function GoalInput(props) {
  const [entered, setEntered] = useState("");

  const goalInputHandler = (enteredText) => {
    setEntered(enteredText);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Overall Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={entered}
        />
        <Button title="ADD" onPress={props.onAddGoal.bind(this, entered)} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom:10
  },
});
