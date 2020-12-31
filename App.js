import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [overallGoals, setOverallGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEntered(enteredText);
  };

  const addGoal = (title) => {
    setOverallGoals((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: title },
    ]);
  };

  const removeGoalHandler = goalId => {
    setOverallGoals(currentGoal => {
      return currentGoal.filter((goal) => goal.id !== goalId);
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={overallGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
        />
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
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
