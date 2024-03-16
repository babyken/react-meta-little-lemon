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

function App() {
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
                                element={<Booking />}
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
