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
        <div
            style={{
                width: "450px",
                margin: "50px auto",
                padding: "25px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "25px"
                }}
            >
                Create User
            </h2>

            <div style={{ marginBottom: "20px" }}>
                <EmailInput onEmailCaptured={handleEmailCaptured} />
            </div>

            <div style={{ marginBottom: "20px" }}>
                <PasswordInput
                    onPasswordCaptured={handlePasswordCaptured}
                />
            </div>

            <div style={{ marginBottom: "25px" }}>
                <NumberInput
                    label="Age"
                    onNumberCaptured={handleNumberCaptured}
                />
            </div>

            <div style={{ textAlign: "center" }}>
                <button
                    onClick={handleSubmit}
                    style={{
                        padding: "10px 25px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default CreateUser;