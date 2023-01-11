import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet,View,Text, FlatList } from "react-native";
import AddComp from "./src/components/addComp/addComp";
import ToDoCard from "./src/components/todoCard/todoCard";

const App = () => {

  const [count,setCount] = useState(0)
  const [todoList, setTodoList] = useState([])
  const [text, setText] = useState('');

  const addToDo = () => {

    setTodoList([...todoList,{
      id: Date.now() + Math.random(),
      name: text,
      isDone: false
    }]);

    setText('')
    setCount(count + 1)
  }

  const renderTodo = ({item}) => (
    <ToDoCard data={item} isDone={isDone} deleteTodo={deleteTodo} />
  );

  const isDone= id => {
    const newTodoList = todoList.map(todo => {
      if (todo.id === id) {
        if (todo.isDone == false) {
          setCount( count - 1)
        }else setCount( count + 1)
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
    console.log(newTodoList)
    setCount(newTodoList.length)
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Yapılacaklar</Text>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View style={styles.view2}>
        <FlatList
          data={todoList}
          renderItem= {renderTodo}
        ></FlatList>
      </View>
      <View style={styles.view3}>
        <AddComp text={text} setText={setText} addToDo={addToDo} />
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
    marginHorizontal: 10
  },
  view2: {
    flex:7
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