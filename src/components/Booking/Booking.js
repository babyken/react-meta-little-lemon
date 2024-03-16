import BookingForm from "./BookingForm";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import BookingConfirm from "./BookingConfirm";

const Booking = ({ availabileTimes, onDateChange }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});
    const onSubmit = (formValues) => {
        setIsSubmitted(true);
        setBookingDetails(formValues);
    };

    return (
        <section className="booking">
            <h1>{!isSubmitted ? 'Book Now': 'Booking Confirmed'}</h1>
            <Box p={6} rounded="md" w="100%">
                {!isSubmitted ? (
                    <BookingForm
                        availabileTimes={availabileTimes}
                        onDateChange={onDateChange}
                        onSubmit={onSubmit}
                    />
                ) : (
                    <BookingConfirm {...bookingDetails} />
                )}
            </Box>
        </section>
    );
};

export default Booking;
