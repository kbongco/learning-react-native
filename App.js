import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";

export default function App() {
  const [entered, setEntered] = useState("");
  const [overallGoals, setOverallGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEntered(enteredText);
  };

  const addGoal = () => {
    setOverallGoals(currentGoal => [...currentGoal,entered]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Overall Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={entered}
        />
        <Button title="ADD" onPress={addGoal} />
      </View>
      <ScrollView>
        {overallGoals.map((goal) => <View key={goal} style={styles.listItem}><Text>{goal}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listItem: {
    padding: 10,
    marginVertical:10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth:1
  }
});
