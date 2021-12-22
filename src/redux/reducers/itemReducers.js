import { ADD_NOTE, DELETE_NOTE, DETAILS_NOTE, UPDATE_NOTE } from "../constants"

const initialData = {
    notes: [
        { id: 1, user: 'Hao', task: 'Go to school' },
        { id: 2, user: 'Hao', task: 'Sleep' },
        { id: 3, user: 'Hung', task: 'Run' },
        { id: 4, user: 'Huy', task: 'Sleep' },
        { id: 5, user: 'Hao', task: 'Cook' },
    ],

    noteDetails:
    [
        {id: 0, user: '', task: ''}
    ]
}

 const itemReducers = (state = initialData, {type, payload})=>{
     
     switch (type) {
        case ADD_NOTE:
           
     
            
             return{
                 ...state,
                 notes: [...state.notes, payload]
            }
        
        case DELETE_NOTE:
           

            return{
                ...state,
                notes: payload
            }

        case DETAILS_NOTE:    
            return{
                ...state,
                noteDetails: payload
            }

        case UPDATE_NOTE:
            return{
                ...state,
                notes: payload,
            }    
       
        default:
            return state
     }
 }

 export default itemReducers;