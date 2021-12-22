import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Modal,
    Alert,
    Dimensions,
    TextInput,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import Ionicon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import color from '../constants/color'
import Card from '../components/Card'
import actions from '../redux/actions'

const { width, height } = Dimensions.get('window');

const Home = () => {
    const notes = useSelector(state => state.notes);
    console.log("Dong 25", notes.noteDetails[0].user);

    const [addModalVisible, setAddModalVisible] = useState(false)
    const [id, setId] = useState('');
    const [user, setUser] = useState('');
    const [task, setTask] = useState('');



    const onUpdateNote = (id) => {
        const updateNote = notes.notes.map(item => item.id === id ? {
            ...item,
            user,
            task,
        } : item)
        dispatch(actions.updateNote(updateNote));
        console.log("Dong 42", updateNote);
    }


    const [updateModalVisible, setUpdateModalVisible] = useState(false);


    const dispatch = useDispatch()

    const clearInput = () => {
        setId('');
        setTask('');
        setUser('');
        setAddModalVisible(false)
        setUpdateModalVisible(false)
    }

    const addNoteToList = () => {
        const note = {
            id,
            user,
            task
        }

        dispatch(actions.addNote(note));

        clearInput();

    }

    const openUpdateModal = (item) => {
        const getNoteDetails = notes.notes.filter(index => index.id === item.id);
        console.log("Dong 70", getNoteDetails);
        dispatch(actions.noteDetails(getNoteDetails));
        setUpdateModalVisible(true)
    }




    const onDeleteNote = (id) => {
        const notedeleteindex = notes.notes.filter(item => item.id !== id);
        dispatch(actions.delNote(notedeleteindex));
        clearInput();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <TouchableOpacity onPress={() => { }}>
                    <Ionicon name='arrow-back' color={color.primary} size={30} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Neque Porro</Text>
                <Text style={styles.headerRightTitle}>Expicabo</Text>
            </View>

            <View style={styles.body} >
                <TouchableOpacity onPress={() => setAddModalVisible(true)} >
                    <View style={styles.btnAdd} >
                        <Entypo name="plus" size={25} color={color.primary} />
                        <Text style={styles.textBtnAdd}>Ad veniam</Text>
                    </View>
                </TouchableOpacity>

                {/* ADD MODAL */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={addModalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!addModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.headerTitle}>ADD MODAL</Text>

                            <TextInput
                                style={styles.edt}
                                placeholder='ID...'
                                onChangeText={setId}
                                keyboardType='numeric'
                            />

                            <TextInput
                                style={styles.edt}
                                placeholder='user...'

                                onChangeText={setUser}
                            />

                            <TextInput
                                style={styles.edt}
                                placeholder='Task...'
                                onChangeText={setTask}
                            />

                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose, { marginVertical: 10 }]}
                                onPress={addNoteToList}
                            >
                                <Text style={styles.textStyle}>Add note</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={clearInput}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

                {/* UPDATE MODAL */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={updateModalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!addModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.headerTitle}>UPDATE MODAL </Text>


                            <TextInput
                                style={styles.edt}
                                placeholder='user...'
                                value={user}
                                onChangeText={setUser}
                            />

                            <TextInput
                                style={styles.edt}
                                placeholder='Task...'
                                value={task}
                                onChangeText={setTask}
                            />

                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => onUpdateNote(notes.noteDetails[0].id)}
                            >
                                <Text style={styles.textStyle}>Update note</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => onDeleteNote(notes.noteDetails[0].id)}
                            >
                                <Text style={styles.textStyle}>Delete</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={clearInput}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

                <View >
                    <FlatList
                        data={notes.notes}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => openUpdateModal(item)} style={styles.cardItems}>
                                    <Card
                                        task={item.task}
                                        user={item.user}
                                        id={item.id}
                                    />
                                </TouchableOpacity>
                            )

                        }}
                    />
                </View>
            </View>



        </View>


    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        width: '100%',
        height: 140,
        paddingTop: 25,
        paddingHorizontal: 20,
    },


    headerTitle: {
        color: color.primary,
        fontSize: 35,
        fontWeight: 'bold'
    },

    headerRightTitle: {
        fontSize: 25,
        alignSelf: 'flex-end',
        fontWeight: 'bold'
    },

    body: {
        flex: 1,
    },

    btnAdd: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 40,

    },

    textBtnAdd: {
        color: color.secondary,
        fontSize: 18
    },

    cardItems: {
        marginTop: 10,
        marginLeft: 10
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        marginTop: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
