import React from 'react';
import AppointmentShortList from '../../Appointment/AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments, date}) => {
    return (
        <div>
            <h2 className="text-brand text-center">Appointments : {appointments.length}</h2>
           {
               appointments.length ? <AppointmentShortList appointments={appointments}/>
            : 
            <div className="p-5">
                <h4 className="lead text-center">No Appointments For {date.toDateString()}</h4>
            </div> }
        </div>
    );
};

export default AppointmentsByDate;