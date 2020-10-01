import {ADD_EVENT, EDIT_EVENT, DELETE_EVENT, GET_EVENT,SELECT_EVENT}  from './Eventtype'

const Appreducer = (state, action) => {
    switch(action.type){
        case EDIT_EVENT :
            return {
                ...state,
                events: action.payload
            }
        case DELETE_EVENT :
            return{
                ...state,
                events : action.payload,
                selectEvent:{}
            }
        case ADD_EVENT :
            return {
                ...state,
                events: action.payload
            }
        case GET_EVENT :
            return {
                ...state,
                events: action.payload
            }
        case SELECT_EVENT :
            return {
                ...state,
                selectEvent: action.payload
            }
        default :
            return state
    }
}

export default Appreducer