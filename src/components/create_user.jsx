import { useState } from "react";
import EmailInput from "./email.input";
import PasswordInput from "./pwd.input";
import NumberInput from "./number.input";
function CreateUser() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        age: ""
    });
    function handleEmailCaptured(data) {

        setUser((prev) => ({
            ...prev,
            email: data.email
        }));

    }
    function handleNumberCaptured(data) {

        setUser((prev) => ({
            ...prev,
            age: data.number
        }));

    }
    function handlePasswordCaptured(data) {

        setUser((prev) => ({
            ...prev,
            password: data.password
        }));

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
        </div>
    );
}

export default CreateUser;