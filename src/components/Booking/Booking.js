import BookingForm from "./BookingForm";
import { Box } from "@chakra-ui/react";
const Booking = () => {
    return (
        <section className="booking">
            <Box p={6} rounded="md" w="100%">
                <BookingForm />
            </Box>
        </section>
    );
};

export default Booking;
