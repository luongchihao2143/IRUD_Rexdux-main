import {ADD_NOTE, DELETE_NOTE, DETAILS_NOTE, UPDATE_NOTE } from '../constants';

const addNote = (noteData) => {
    console.log("Dong 4 actions",noteData);
    return{
        type: ADD_NOTE,
        payload: noteData
    }
}
    
const delNote = (noteData) => {
    return{
        type: DELETE_NOTE,
        payload: noteData
    }
}

const noteDetails = (noteData) =>{
    return{
        type: DETAILS_NOTE,
        payload: noteData
    }
}

const updateNote = (noteData) =>{
    return{
        type: UPDATE_NOTE,
        payload: noteData
    }
}

export default {
    addNote,
    delNote,
    noteDetails,
    updateNote
}
