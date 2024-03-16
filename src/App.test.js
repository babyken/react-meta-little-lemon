import {
    fireEvent,
    render,
    screen,
    waitFor
} from "@testing-library/react";
import App from "./App";

test("booking time default values", async () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole("link", { name: "Reservations" })[0]);

    await waitFor(() => {
        const timeSelects = screen.getAllByTestId("time-opt");
        expect(timeSelects[0].value).toBe("1700");
        expect(timeSelects[1].value).toBe("1800");
        expect(timeSelects[2]).toBeFalsy();
    });
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});



// test("booking time change with date update", async () => {
//     render(<App />);
//     fireEvent.click(screen.getAllByRole("link", { name: "Reservations" })[0]);
//     await waitFor( async() => {
//         const datePicker = screen.getByTestId("date-input");

//         fireEvent.change(datePicker, { target: { value: "2024-03-17" } });
//         const timeSelects = screen.getAllByTestId("time-opt");
//         expect(timeSelects[0].value).toBe("2100");
//     });
// });

// test('Renders the BookingForm heading', () => {
//     render(<Booking availabileTimes={[{text:'17:00', value: '1700'}]} onDateChange={()=>{}}/>);
//     const headingElement = screen.getByText("Book Now");
//     expect(headingElement).toBeInTheDocument();
// })
