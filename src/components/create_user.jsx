import EmailInput from "./email.input";
function CreateUser() {
    return (
        <div>
            <h2>Create User</h2>

            <EmailInput />
            <br />

            <div>
                <label>Password</label>
                <br />
                <input type="password" placeholder="Enter Password" />
            </div>

            <br />

            <div>
                <label>Age</label>
                <br />
                <input type="number" placeholder="Enter Age" />
            </div>
        </div>
    );
}

export default CreateUser;