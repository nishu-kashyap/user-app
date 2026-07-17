import { useState } from "react";


function NumberInput({ label, onNumberCaptured }) {

    const [value, setValue] = useState("");
    const [error, setError] = useState("");


    const validateNumber = (input) => {

        // Empty check
        if (!input) {
            return "Age is required";
        }


        // Only number or starting negative number
        const regex = /^-?\d+$/;


        if (!regex.test(input)) {
            return "Only numbers are allowed";
        }


        // Age validation
        if (Number(input) < 0) {
            return "Age cannot be negative";
        }


        if (Number(input) > 120) {
            return "Enter valid age";
        }


        return "";

    };


    const handleChange = (e) => {

        const input = e.target.value;

        setValue(input);


        const validationError = validateNumber(input);


        if (validationError) {

            setError(validationError);

            if (onNumberCaptured) {
                onNumberCaptured({
                    number: input,
                    isValid: false
                });
            }

        }
        else {

            setError("");

            if (onNumberCaptured) {
                onNumberCaptured({
                    number: input,
                    isValid: true
                });
            }

        }
    };


    return (

        <div>

            <label>{label}</label>

            <input
                type="text"
                value={value}
                onChange={handleChange}
            />


            {
                error &&
                <p style={{ color: "red" }}>
                    {error}
                </p>
            }

        </div>

    );

}


export default NumberInput;