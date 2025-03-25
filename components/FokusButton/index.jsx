import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { Pressable } from "react-native";

export const FokusButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Começar</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    
    button: {
      backgroundColor: "#B872FF",
      padding: 8,
      borderRadius: 32,
    },
    buttonText: {
      color: "#021123",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
