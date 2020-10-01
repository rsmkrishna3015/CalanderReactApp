import React, {useContext, useState} from 'react'
import moment from 'moment';
import EventForm from './EventForm'
import Appcontext from '../../context/Appcontext';

const AddEvent = () => {
    const Appcontexts = useContext(Appcontext);

    const [eventTitle, setEventTitle] = useState('');
    const [checkBox, setCheckBox] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const {title, events, addEvent} = Appcontexts;

    const closeModal = () => {
        reset()
    }

    const inputChange = (e) => {
        setEventTitle(e.target.value)
    }

    const onCheckboxChange = (e) => {
        if(e.target.checked === true){
            setCheckBox(true)
            setShowTime(true)
        }else{
            setCheckBox(false)
            setShowTime(false)
        }
        
    }

    const onInputChange = (propertyName) => (event) => {
        if(propertyName === 'startDate'){
            setStartDate(event)
        }else{
            setEndDate(event)
        }
    }

    const createEvent = () => {
        var ind = (events ? events.length : 0);
        const event = collectDetails(parseInt(ind + 1));
        addEvent(event)
        reset()
    }

    const collectDetails = id => {
        let start = '';
        let end = '';
        
        if(!checkBox){
            start = `${moment(startDate).format()}`
            end = `${moment(endDate).format()}`
        }else{
            start = `${moment(startDate).format('YYYY-MM-DD')}`
            end = `${moment(endDate).format('YYYY-MM-DD')}`
        }

        const event = {
            id,
            title:eventTitle,
            allDay:checkBox,
            start,
            end
        }

        return event;
    }

    const reset = () => {
        setEventTitle('');
        setCheckBox(false);
        setShowTime(false);
        setStartDate(new Date());
        setEndDate(new Date());
    }

    return (
        <div>
            <EventForm 
                eventId="add-event"
                title={title} 
                closeModal={closeModal}
                eventName={eventTitle}
                inputChange={inputChange}
                checkbox={checkBox}
                onCheckboxChange={onCheckboxChange}
                showtime={showTime}
                startDate={startDate}
                endDate={endDate}
                onInputChange={onInputChange}
                eventType={createEvent}
                buttonName="Add-Event"/>
        </div>
    )
}

export default AddEvent
