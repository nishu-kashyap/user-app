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
        <div
            style={{
                marginBottom: "15px",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <label
                style={{
                    marginBottom: "6px",
                    fontWeight: "bold"
                }}
            >
                Email
            </label>

            <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email"
                style={{
                    padding: "8px",
                    fontSize: "14px",
                    border: "1px solid #ccc",
                    borderRadius: "4px"
                }}
            />

            {error && (
                <p
                    style={{
                        color: "red",
                        marginTop: "5px",
                        marginBottom: "0",
                        fontSize: "14px"
                    }}
                >
                    {error}
                </p>
            )}
        </div>
    );
}

export default EmailInput;