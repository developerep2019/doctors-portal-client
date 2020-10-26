import React from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: "100%"
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date : selectedDate })
        })
            .then(res => res.json())
            .then(appointments => setAppointments(appointments))
    }, [selectedDate])
    return (
        <div>
            <section>
                <div className="container-fluid row" style={containerStyle}>
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-5">
                        <Calendar onChange={handleDateChange} value={new Date()} />
                    </div>
                    <div className="col-md-5">
                        <AppointmentsByDate appointments={appointments} date={selectedDate}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;