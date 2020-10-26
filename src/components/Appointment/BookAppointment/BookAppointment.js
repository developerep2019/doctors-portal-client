import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({ date }) => {
    const bookingData = [
        {
            _id: '20684160-1709-11eb-9168-931778d09dbc',
            id: '1',
            subject: "Teeth Orthodontics",
            visitingHour: '8:00 AM - 9:00 AM',
        },
        {
            _id: '20684161-1709-11eb-9168-931778d09dbc',
            id: '1',
            subject: "Cosmetic Dentistry",
            visitingHour: '8:00 AM - 9:00 AM',
        },
        {
            _id: '20684162-1709-11eb-9168-931778d09dbc',
            id: '1',
            subject: "Teeth Cleaning",
            visitingHour: '8:00 AM - 9:00 AM',
        },
        {
            _id: '20684163-1709-11eb-9168-931778d09dbc',
            id: '1',
            subject: "Cavity Protection",
            visitingHour: '8:00 AM - 9:00 AM',
        },
        {
            _id: '20684164-1709-11eb-9168-931778d09dbc',
            id: '1',
            subject: "Implement Golden Teeth",
            visitingHour: '8:00 AM - 9:00 AM',
        },
        {
            _id: '20684165-1709-11eb-9168-931778d09dbc',
            id: '1',
            subject: "Teeth Feeling",
            visitingHour: '8:00 AM - 9:00 AM',
        }
    ]
    return (
        <section>
            <h2 className="text-center text-brand">Available Appointments on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard key={booking._id} booking={booking} date={date} />)
                }
            </div>
        </section>
    );
};

export default BookAppointment;