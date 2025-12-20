import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
   <View style={styles.root}>
     <Text>Hello Contributors!
     </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  root: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
});
