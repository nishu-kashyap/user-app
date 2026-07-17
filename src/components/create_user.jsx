import { useState } from "react";
import EmailInput from "./email.input";
import PasswordInput from "./pwd.input";
import NumberInput from "./number.input";
function CreateUser() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        age: "",
        isEmailValid: false,
        isPasswordValid: false,
        isAgeValid: false
    });
    function handleEmailCaptured(data) {

        setUser((prev) => ({
            ...prev,
            email: data.email,
            isEmailValid: data.isValid
        }));

    }
    function handleNumberCaptured(data) {

        setUser((prev) => ({
            ...prev,
            age: data.number,
            isAgeValid: data.isValid
        }));

    }
    function handlePasswordCaptured(data) {

        setUser((prev) => ({
            ...prev,
            password: data.password,
            isPasswordValid: data.isValid
        }));


    }
    function handleSubmit() {

        if (
            user.isEmailValid &&
            user.isPasswordValid &&
            user.isAgeValid
        ) {
            console.log("Success");
        } else {
            console.log("Please fix the validation errors.");
        }

    }
    console.log(user);
    return (
        <div>
            <h2>Create User</h2>

            <EmailInput onEmailCaptured={handleEmailCaptured} />
            <br />

            <PasswordInput onPasswordCaptured={handlePasswordCaptured} />

            <br />

            <NumberInput label="Age"
                onNumberCaptured={handleNumberCaptured} />
            <br />

            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default CreateUser;