import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const afterOpenModal = () => {};
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title tex-brand"> {booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button className="btn btn-brand text-uppercase" onClick={openModal}>Book Appointment</button>
                    <AppointmentForm isModalOpen = {isModalOpen} closeModal={closeModal} appointmentOn={booking.subject} afterOpenModal={afterOpenModal} date={date}/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;