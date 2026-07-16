import { useState } from "react";
import EmailInput from "./email.input";

function CreateUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");

    return (
        <div style={{ padding: "20px" }}>
            <h2>Create User</h2>


            <EmailInput
                successEvent={(value) => console.log("Valid Email:", value)}
            />
            <br />

            <div>
                <label>Password</label>
                <br />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <br />

            <div>
                <label>Age</label>
                <br />
                <input
                    type="number"
                    placeholder="Enter Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>

            <br />

            <button>Submit</button>
        </div>
    );
}

export default CreateUser;