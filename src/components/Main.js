import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Calander from './calander/Calander'

const Main = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <Sidebar/>
                                <Calander />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
