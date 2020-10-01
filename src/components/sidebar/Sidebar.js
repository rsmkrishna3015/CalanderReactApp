import React,{useContext, useEffect} from 'react'
import AddEvent from '../model/AddEvent'
import Appcontext from '../../context/Appcontext'
import Selectmodel from '../model/Selectmodel';
import EditEvent from '../model/EditEvent';


const Sidebar = () => {
    const appContext = useContext(Appcontext);
    const {events, getEvents, selectEventMT} = appContext
    
    useEffect(() => {
        getEvents()
    },[events])

    return (
        <div className='col-lg-3'>
            <button data-toggle="modal" data-target="#add-event" className='btn btn-outline-info btn-block active'>
                Create Event            
            </button>

            <div className='mp-t-20'>
                {
                    events && events.length > 0 ?  
                        events.map((evt,index) => { 
                            return(<div className='external-event bg-primary' 
                                        key={evt.id+index}
                                        onClick={()=>selectEventMT(evt)}
                                        data-toggle="modal" 
                                        data-target="#select-model">
                                        {evt.title}
                                    </div>
                                   ) 
                        }):(<div className='external-event bg-danger'>
                                NO EVENTS
                            </div>)
                }
            </div>
            <AddEvent />
            <EditEvent />
            <Selectmodel />
        </div>
    )
}

export default Sidebar
