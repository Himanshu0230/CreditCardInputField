import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'

const CardInputField = () => {

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [textFields, setTextFields] = useState("")
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = () => {
        setData([...data, text1 + text2 + text3 + text4]);
    }

    const renderItems = ({ item, index }) => {
        return (
            <View style={styles.listContainerStyle}>
                <Text style={styles.cardNumber}>{item}</Text>
                <View style={styles.cardButtonContainerStyle}>
                    <TouchableOpacity onPress={() => {
                        let newArray = [...data];
                        newArray.splice(index, 1);
                        setData(newArray);
                    }}>
                        <Text style={styles.cardButtonStyle}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View>
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItems}
                    ListFooterComponent={
                        <View style={{height:50}} />
                    }
                    ListHeaderComponent={<View>
                        <View>
                            <Text style={styles.titleStyle}>Card Number</Text>
                        </View>
                        <View style={styles.inputBoxContainer}>
                            <View style={styles.inputBox}>
                                <TextInput
                                    style={styles.inputText}
                                    keyboardType="number-pad"
                                    maxLength={16}
                                    autoFocus={true}
                                    ref={firstInput}
                                    value={text1}
                                    onChangeText={(text) => {
                                        setText1(text)
                                        setTextFields(text)
                                        if (text.length > 4) {
                                            setTextFields(text)
                                            setText1(text.slice(0, 4))
                                            setText2(text.slice(4, 8))
                                            setText3(text.slice(8, 12))
                                            setText4(text.slice(12, 16))
                                            fourthInput.current.focus();
                                        }
                                        else if (text.length === 4) {
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
                                    value={text2}
                                    onChangeText={(text) => {
                                        setText2(text)
                                        setTextFields(textFields + text)
                                        if (text.length >= 4) {
                                            thirdInput.current.focus();
                                        } else if (!text) {
                                            firstInput.current.focus();
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
                                    value={text3}
                                    onChangeText={(text) => {
                                        setText3(text);
                                        setTextFields(textFields + text)
                                        if (text.length >= 4) {
                                            fourthInput.current.focus();
                                        } else if (!text) {
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
                                    ref={fourthInput}
                                    value={text4}
                                    onChangeText={(text) => {
                                        setText4(text);
                                        setTextFields(textFields + text)
                                        !text && thirdInput.current.focus();
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.buttonContainerStyle}>
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.buttonStyle}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}
                />
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
        fontSize: 16,
        color: 'black',
        padding: 0,
        paddingHorizontal: 18,
        paddingVertical: 10,
    },
    buttonContainerStyle: {
        borderColor: '#DB4700',
        backgroundColor: '#DB4700',
        borderWidth: 1,
        marginHorizontal: 30,
        marginVertical: 25,
        borderRadius: 20,
        padding: 10
    },
    buttonStyle: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
        fontSize: 22,
        color: 'white',
    },
    cardButtonContainerStyle: {
        borderColor: '#DB4700',
        backgroundColor: '#DB4700',
        borderWidth: 1,
        marginHorizontal: 16,
        padding: 5
    },
    cardButtonStyle: {
        alignSelf: 'center',
        fontSize: 15,
        color: 'white',
    },
    listContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    titleStyle: {
        alignSelf: 'center',
        fontSize: 20,
        marginVertical: 20
    },
    cardNumber: {
        fontSize: 16,
        marginHorizontal: 16,
    }
})