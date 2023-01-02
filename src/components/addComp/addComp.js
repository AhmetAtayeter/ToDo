import React, { useState, useEffect } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from './addComp.style'

const AddComp = () => {

    const[input,setInput] = useState()
    const [isFocus,setIsFocus] = useState(false)
    
    function onChangeText(){
        console.log(input)
        setIsFocus(!isFocus)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder= "Yapılacak..."
                value={input}
                placeholderTextColor="#808080"
                onChangeText={onChangeText}
                // onBlur={setIsFocus(false)}
                style= {styles.input}>

            </TextInput>
            <TouchableOpacity
                style={isFocus ? styles.buttona : styles.buttonb} >
                <Text style={styles.btnText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddComp;