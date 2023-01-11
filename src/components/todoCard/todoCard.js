import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./todoCard.style"

const ToDoCard = ({data,isDone,deleteTodo}) => {

    return(
        <View style={data.isDone ? styles.containerB : styles.containerA}>
            <TouchableOpacity
            onPress={() => isDone(data.id)}
            onLongPress={() => deleteTodo(data.id)}
            >
            <Text style={data.isDone ? styles.textB : styles.textA}>{data.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToDoCard;