import React, { useState, useEffect } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from './addComp.style'

const AddComp = () => {

    const [isFocus,setIsFocus] = useState(false)
    
    function onChangeText(){
        setIsFocus(!isFocus)
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder= "Yapılacak..."
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