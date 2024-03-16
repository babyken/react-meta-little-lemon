import { useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import {
    
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import Button from '../Button';

import './Booking.css'

const timeOpt = [
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

const BookingForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            date: "",
            time: "",
            noOfGuest: 1,
            occasion: "",
        },
        onSubmit: (values) => {
            //   submit('url', values)
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            date: Yup.date().required('Required'),
            time: Yup.string().required("Required"),
            noOfGuest: Yup.number()
                .min(1, "Between 1 to 10")
                .max(10, "Between 1 to 10"),
            occasion: Yup.string().optional(),
        }),
    });

    const validate = (key) => {
        return formik.touched[key] && formik.errors[key]
    }

    return (
        <form onSubmit={(e)=> {e.preventDefault(); formik.handleSubmit(e);}}>
            <VStack spacing={4}>
                <FormControl isInvalid={validate('name')}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        {...formik.getFieldProps("name")}
                    />
                    <FormErrorMessage className="error">{formik.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl
                    isInvalid={validate('email')}
                >
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        {...formik.getFieldProps("email")}
                    />
                    <FormErrorMessage className="error">{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={validate('date')}>
                    <FormLabel htmlFor="date">Date</FormLabel>
                    <Input
                        placeholder="Select Date"
                        id="date"
                        name="date"
                        type="date"
                        {...formik.getFieldProps("date")}
                    />
                    <FormErrorMessage className="error">{formik.errors.date}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={validate('time')}>
                    <FormLabel htmlFor="time">Time</FormLabel>
                    <Select
                        id="time"
                        name="time"
                        {...formik.getFieldProps("time")}
                    >
                        <option>Select a timeslot</option>
                        {timeOpt.map(({ value, text }) => (
                            <option value={value}>{text}</option>
                        ))}
                    </Select>
                    <FormErrorMessage className="error">{formik.errors.time}</FormErrorMessage>
                </FormControl>
                <FormControl
                    isInvalid={
                        validate('noOfGuest')
                    }
                >
                    <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                    <Input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        name="guests"
                    />
                    <FormErrorMessage className="error">
                        {formik.errors.noOfGuest}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={validate('occasion')}>
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select
                        id="occasion"
                        name="occasion"
                        {...formik.getFieldProps("occasion")}
                    >
                        <option>Select Occasion</option>
                        {[
                            { text: "Birthday", value: "birthday" },
                            { text: "Anniversary", value: "anniversary" },
                        ].map(({ value, text }) => (
                            <option value={value}>{text}</option>
                        ))}
                    </Select>
                    <FormErrorMessage className="error">
                        {formik.errors.occasion}
                    </FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                    {isLoading ? (
                        <FontAwesomeIcon
                            icon={faSpinner}
                            size="1x"
                            className="spinner"
                        />
                    ) : (
                        "Submit"
                    )}
                </Button>
            </VStack>
        </form>
    );
};

export default BookingForm;
