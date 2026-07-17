import { useState } from "react";

function NumberInput({ label, onNumberCaptured }) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const validateNumber = (input) => {
        if (!input) {
            return "Age is required";
        }

        const regex = /^-?\d+$/;

        if (!regex.test(input)) {
            return "Only numbers are allowed";
        }

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
        } else {
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
        <div style={{ marginBottom: "20px" }}>
            <label
                style={{
                    display: "block",
                    marginBottom: "6px",
                    fontWeight: "bold"
                }}
            >
                {label}
            </label>

            <input
                type="text"
                value={value}
                onChange={handleChange}
                style={{
                    width: "100%",
                    padding: "8px",
                    boxSizing: "border-box"
                }}
            />

            <div
                style={{
                    minHeight: "22px",
                    marginTop: "5px"
                }}
            >
                {error && (
                    <span
                        style={{
                            color: "red",
                            fontSize: "14px"
                        }}
                    >
                        {error}
                    </span>
                )}
            </div>
        </div>
    );
}

export default NumberInput;