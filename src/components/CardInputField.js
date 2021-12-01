import React, {useRef, useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const CardInputField = () => {

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [textFields, setTextFields] = useState("")
    // console.log(textFields[1])

    return (
        <View style={{alignItems: 'center', marginVertical: 100}}>
            <View>
                <Text>Card Number</Text>
            </View>
            <View style={styles.inputBoxContainer}>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.inputText}
                        keyboardType="number-pad"
                        maxLength={4}
                        ref={firstInput}
                        onChangeText={(text) => {
                            setTextFields(text)
                            if(text.length === 4) {
                                secondInput.current.focus();
                            }
                        }}
                    />
                </View>

                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.inputText}
                        keyboardType="number-pad"
                        maxLength={4}
                        ref={secondInput}
                        onChangeText={(text) => {
                            setTextFields(textFields+text)
                            console.log(text.length, "length")
                            // text.length > 0 && text.length === 4 ? thirdInput.current.focus() : firstInput.current.focus();
                            // text.length == 4 ? thirdInput.current.focus() : text.length == 0 ? firstInput.current.focus() : null;
                            if(text.length === 4) {
                                thirdInput.current.focus();
                            }
                        }}
                    />
                </View>

                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.inputText}
                        keyboardType="number-pad"
                        maxLength={4}
                        ref={thirdInput}
                        onChangeText={(text) => {
                            setTextFields(textFields+text)
                            // text ? fourthInput.current.focus() : secondInput.current.focus();
                            if(text.length === 4) {
                                fourthInput.current.focus();
                            }
                        }}
                    />
                </View>

                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.inputText}
                        keyboardType="number-pad"
                        maxLength={4}
                        ref={fourthInput}
                        onChangeText={(text) => {
                            setTextFields(textFields+text)
                            !text && thirdInput.current.focus();
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default CardInputField

const styles = StyleSheet.create({
    inputBoxContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputBox: {
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 0.5,
    },
    inputText: {
        fontSize: 25,
        color: 'black',
        padding: 0,
        paddingHorizontal: 18,
        paddingVertical: 10,

    }
})