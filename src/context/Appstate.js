import React,{useReducer} from 'react'
import Appcontext from './Appcontext'
import Appreducer from './Appreducer'
import {ADD_EVENT, EDIT_EVENT, DELETE_EVENT, GET_EVENT,SELECT_EVENT}  from './Eventtype'
import useLocalStore from './useLocalStore'

const Appstate = (props) => {
    const initialState = {
        title:"Add-Event",
        events: [],
        selectEvent:{}
    }

    const [state, dispatch] = useReducer(Appreducer, initialState)
    const [eventss, setNewEvents] = useLocalStore("newEvent")
    const [selectEventss, setSelectEvent] = useLocalStore("selectEvent") 

    const editEvent = event => {
        let newEvents = state.events.map(evt => {
            return (evt.id === event.id ? event : evt)
        })
        setNewEvents(newEvents)
        dispatch({
            type:EDIT_EVENT,
            payload:newEvents
        })
    }

    const deleteEvent = id => {
        const evt = state.events.filter(et => et.id !== id);
        setNewEvents(evt)
        setSelectEvent({})
        dispatch(({
            type:DELETE_EVENT,
            payload:id
        }))
    }

    const addEvent = event => {
        let allEvent = state.events ? [...state.events] : []
        allEvent.push(event)
        setNewEvents(allEvent)
        dispatch({
            type:ADD_EVENT,
            payload:allEvent
        })
    }

    const getEvents = () => {
        dispatch({
            type:GET_EVENT,
            payload:eventss
        })
    }

    const selectEventMT = (event) => {
        setSelectEvent(event)
        dispatch({
            type: SELECT_EVENT,
            payload: event
        })
    }

    return (<Appcontext.Provider
        value={{
            title:state.title,
            events:state.events,
            selectEvent:state.selectEvent,
            addEvent,
            getEvents,
            selectEventMT,
            deleteEvent,
            editEvent
        }}
    >
        {props.children}
    </Appcontext.Provider>)
}

export default Appstate;