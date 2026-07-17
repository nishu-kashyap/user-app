import { useState } from "react";


function EmailInput({ onEmailCaptured }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {
            setError("Email is required");

            if (onEmailCaptured) {
                onEmailCaptured({
                    email: value,
                    isValid: false
                });
            }

            return;
        }

        if (!emailRegex.test(value)) {
            setError("Invalid Email");

            if (onEmailCaptured) {
                onEmailCaptured({
                    email: value,
                    isValid: false
                });
            }

            return;
        }
        setError("");

        if (onEmailCaptured) {
            onEmailCaptured({
                email: value,
                isValid: true
            });
        }
    };

    return (
        <div>
            <label>Email</label>
            <br />

            <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email"
            />

            {error && (
                <p style={{ color: "red" }}>
                    {error}
                </p>
            )}
        </div>
    );
}

export default EmailInput;