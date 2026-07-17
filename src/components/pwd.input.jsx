import { useState } from "react";

function PasswordInput({ successEvent }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{10,}$/;

        if (passwordRegex.test(value)) {
            setError("");

            if (successEvent) {
                successEvent(value);
            }
        } else {
            setError(
                "Password must be at least 10 characters with uppercase, lowercase, number and special character."
            );
        }
    };

    return (
        <div>
            <label>Password</label>
            <br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={handleChange}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default PasswordInput;