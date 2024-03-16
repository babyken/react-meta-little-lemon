

const BookingConfirm = ({name, email, bookingDate, bookingTime, noOfGuest, occasion}) => {
    return (
        <div className="confirmation">
            <p><span>Name: </span>{name}</p>
            <p><span>Email: </span>{email}</p>
            <p><span>Booking date & time: </span>{bookingDate} {bookingTime}</p>
            <p><span>No. of Guests: </span>{noOfGuest}</p>
            {occasion.length > 0 && <p><span>Occasion: </span>{occasion}</p>}
        </div>
    )
}

export default BookingConfirm;