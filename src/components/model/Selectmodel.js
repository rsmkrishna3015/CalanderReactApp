import React, {useContext} from 'react'
import Appcontext from '../../context/Appcontext'


const Selectmodel = () => {

    const appContext = useContext(Appcontext);
    const {selectEvent, deleteEvent} = appContext

    return (
        <>
            <div className="modal" id="select-model" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
            <div className="modal-content" style={localStyle}>
                <div className="modal-header">
                <h5 className="modal-title">Select Action</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                    <div className="text-center">
                        <button type="button" 
                        className="btn btn-primary"
                        data-toggle="modal" 
                        data-target="#Edit-event" data-dismiss="modal">Edit Event</button>
                        <span>or</span>
                        <button type="button" 
                            className="btn btn-primary"
                            data-dismiss="modal"
                            onClick={() => deleteEvent(selectEvent.id)}>Delete Event</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>    
    )
}

const localStyle = {
    backgroundColor: '#7FDBFF',
    color:'#4682B4'
}

export default Selectmodel;