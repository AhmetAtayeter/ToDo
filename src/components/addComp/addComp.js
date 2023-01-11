import React, { useState, useEffect } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from './addComp.style'

const AddComp = ({text, setText, addToDo}) => {

    const [input, setInput] = useState()
    const [isFocus, setIsFocus] = useState(false)

    function handleChange(input) {
        if (input == "") {
            setIsFocus(false)
        } else {
            setIsFocus(true)
            setText(input)
        }
    }
    
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Yapılacak..."
                value={text}
                placeholderTextColor="#808080"
                onChangeText={(input) => handleChange(input)}
                // onBlur={setIsFocus(false)}
                style={styles.input}>

            </TextInput>
            <TouchableOpacity
                style={isFocus ? styles.buttona : styles.buttonb} 
                onPress={addToDo}>
                <Text style={styles.btnText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddComp;