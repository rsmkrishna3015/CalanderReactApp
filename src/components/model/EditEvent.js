import React, {useContext, useState, useEffect} from 'react'
import moment from 'moment';
import EventForm from './EventForm'
import Appcontext from '../../context/Appcontext';

const EditEvent = () => {
    const Appcontexts = useContext(Appcontext);

    const [eventTitle, setEventTitle] = useState('');
    const [checkBox, setCheckBox] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const {selectEvent,editEvent} = Appcontexts;

    useEffect(() => {
        console.log('Edit Form'+selectEvent);
        if(Object.keys(selectEvent).length > 0){
            setEventTitle(selectEvent.title)
            setCheckBox(selectEvent.allDay)
            let start = ''
            let end = ''
            console.log('Edit Form'+selectEvent.start);
            console.log('Edit Form'+selectEvent.end);
            console.log('Edit Form'+selectEvent.allDay);
            if(selectEvent.allDay){
                setShowTime(true)
                start = `${moment(new Date(selectEvent.start)).format()}`;
                end = `${moment(new Date(selectEvent.end)).format()}`;
            }else{
                setShowTime(false)
                start = `${moment(new Date(selectEvent.start)).format('YYYY-MM-DD')}`;
                end = `${moment(new Date(selectEvent.end)).format('YYYY-MM-DD')}`;
            }
            setStartDate(new Date(start))
            setEndDate(new Date(end))
        }
    },[selectEvent])

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
        const event = collectDetails(selectEvent.id);
        editEvent(event)
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
                eventId="Edit-event"
                title={"Edit-event"} 
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
                buttonName="Edit-event"/>
        </div>
    )
}

export default EditEvent
