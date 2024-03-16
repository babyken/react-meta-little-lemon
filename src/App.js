import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Special from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import { ChakraProvider } from "@chakra-ui/react";
import { useReducer } from "react";

const updateTimes = (state, action) => {  
    switch (action.dayOfWeek) {
        case 5:
        case 6:
            return [
                {
                    value: "2100",
                    text: "21:00",
                },
                {
                    value: "2200",
                    text: "22:00",
                },
            ];
        default:
            return [
                {
                    value: "1700",
                    text: "17:00",
                },
                {
                    value: "1800",
                    text: "18:00",
                },
                {
                    value: "1900",
                    text: "19:00",
                },
                {
                    value: "2000",
                    text: "20:00",
                },
                {
                    value: "2100",
                    text: "21:00",
                },
                {
                    value: "2200",
                    text: "22:00",
                },
            ];
    }
};

const initializeTimes = [
    {
        value: "1700",
        text: "17:00",
    },
    {
        value: "1800",
        text: "18:00",
    },
];

function App() {
    const [availabileTimes, dispatch] = useReducer(
        updateTimes,
        initializeTimes
    );

    const handleDateChange = (dayOfWeek) => {
        dispatch({ type: "dateChange", dayOfWeek });
    };

    return (
        <ChakraProvider>
            <Router>
                <div className="App">
                    <Header />
                    <main className="main">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <Hero />
                                        <Special />
                                        <Testimonials />
                                        <About />
                                    </>
                                }
                            ></Route>
                            <Route
                                path="/reservation"
                                element={
                                    <Booking
                                        availabileTimes={availabileTimes}
                                        onDateChange={handleDateChange}
                                    />
                                }
                            ></Route>
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ChakraProvider>
    );
}

export default App;
