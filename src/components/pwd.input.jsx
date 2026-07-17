import { useState } from "react";


function PasswordInput({ onPasswordCaptured }) {

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const validatePassword = (value) => {

        if (value.length < 10) {
            return "Password must contain minimum 10 characters";
        }

        if (!/[A-Z]/.test(value)) {
            return "Password must contain one uppercase letter";
        }

        if (!/[a-z]/.test(value)) {
            return "Password must contain one lowercase letter";
        }

        if (!/[0-9]/.test(value)) {
            return "Password must contain one number";
        }

        if (!/[!@#$%^&*]/.test(value)) {
            return "Password must contain one special character";
        }


        return "";
    }



    const handleChange = (e) => {

        const value = e.target.value;

        setPassword(value);


        const validationError = validatePassword(value);


        if (validationError) {

            setError(validationError);

            if (onPasswordCaptured) {
                onPasswordCaptured({
                    password: value,
                    isValid: false
                });
            }

        }
        else {

            setError("");

            if (onPasswordCaptured) {
                onPasswordCaptured({
                    password: value,
                    isValid: true
                });
            }

        }

    }



    return (

        <div>

            <label>Password</label>

            <input
                type="password"
                value={password}
                onChange={handleChange}
            />


            {
                error &&
                <p style={{ color: "red" }}>
                    {error}
                </p>
            }

        </div>

    )

}


export default PasswordInput;