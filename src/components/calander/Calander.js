import React ,{useContext}from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Appcontext from '../../context/Appcontext'

const Calander = () => {
    const appContext = useContext(Appcontext);
    const {events, selectEventMT} = appContext

    const handleClick = (e) => {
        let sEvt = events.find(evt => (evt.id === parseInt(e.event.id)))
        selectEventMT(sEvt)
        e.el.setAttribute("data-toggle","modal")
        e.el.setAttribute("data-target","#select-model")
    }

    return (
        <div className='col-lg-9'>
        <FullCalendar plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin ]}
            initialView="dayGridMonth" 
            headerToolbar= {{left:'prev,next today', 
                    center:'title', 
                    right:'dayGridMonth, timeGridWeek, timeGridDay' }}
            events={events}
            eventClick={handleClick}  />
        </div> 
    )
}

export default Calander
