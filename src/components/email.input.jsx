import { useState } from "react";

function EmailInput({ successEvent }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {
            setError("Email is required");
            return;
        }

        if (!emailRegex.test(value)) {
            setError("Invalid Email");
            return;
        }

        setError("");

        if (successEvent) {
            successEvent(value);
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