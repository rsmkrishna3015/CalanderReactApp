import React from 'react'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css";

const EventForm = (props) => {
    const {
        eventId,
        title,
        closeModal,
        eventName,
        inputChange,
        checkbox,
        onCheckboxChange,
        showtime,
        startDate,
        endDate,
        onInputChange,
        eventType,
        buttonName} =  props
    return (
        <div>
            <div className="modal"  id={eventId} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
            <div className="modal-content" style={localStyle}>
                <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                    X
                </button>
                </div>
                <div className="modal-body p-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="eventNameId">Event Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="eventNameId" 
                        name="eventNameId"
                        placeholder="event name" 
                        value = {eventName}
                        onChange={inputChange}/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" 
                        className="form-check-input" 
                        style={localCheckBoxStyle}
                        id="checkboxId" 
                        name="checkboxId" 
                        value={checkbox}
                        checked={checkbox}
                        onChange={onCheckboxChange}/>
                        <label htmlFor="checkboxId" style={localCheckLableStyle}>All day event?(optional)</label>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3">
                            <label className='control-label'>Start</label>
                            </div>
                            <div className="col-md-9">

                            {
                                !showtime ?  <DatePicker 
                                showTimeSelect
                                dateFormat="Pp"
                                timeIntervals={30}
                                timeFormat="p"
                                selected={startDate}
                                onChange={onInputChange('startDate')}/>
                                 :<DatePicker 
                                    selected={startDate}
                                    onChange={onInputChange('startDate')}
                                    dateFormat="Pp"/>
                            }

                            </div>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3">
                                <label className='control-label'>End</label>
                            </div>
                            <div className="col-md-9">
                            {
                                !showtime ?  <DatePicker 
                                showTimeSelect
                                dateFormat="Pp"
                                timeIntervals={30}
                                timeFormat="p"
                                selected={endDate}
                                onChange={onInputChange('endDate')}/>
                                 :<DatePicker 
                                    selected={endDate}
                                    onChange={onInputChange('endDate')}
                                    dateFormat="Pp"/>
                            }
                            </div>
                        </div>
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                <button type="button" 
                className="btn btn-primary"
                onClick={eventType}
                disabled={!eventName || !startDate || !endDate}
                data-dismiss="modal"
                >{buttonName}</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

const localStyle = {
    backgroundColor: '#7FDBFF',
    color:'#4682B4'
}

const localCheckBoxStyle = {
    marginLeft: '0.75rem'
}

const localCheckLableStyle = {
    marginLeft: '30px'
}
export default EventForm
