import { useState } from "react";

function EmailInput({ successEvent }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(value)) {
            setError("");

            if (successEvent) {
                successEvent(value);
            }
        } else {
            setError("Invalid email format");
        }
    };

    return (
        <div>
            <label>Email</label>
            <br />

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleChange}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default EmailInput;