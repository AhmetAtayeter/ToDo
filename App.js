import React, { useState } from "react";
import { SafeAreaView, StyleSheet,View,Text } from "react-native";
import AddComp from "./src/components/addComp/addComp";

const App = () => {

  const [count,setCount] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Yapılacaklar</Text>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View style={styles.view2}></View>
      <View style={styles.view3}>
        <AddComp />
      </View>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112027'
  },
  view1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    backgroundColor: 'red'
  },
  view2: {
    flex:7,
    backgroundColor: 'pink'
  },
  view3:{
    flex:2
  },
  text:{
    color: '#FFA500',
    fontSize: 40,
    fontWeight: 'bold'
  }
})

export default App;