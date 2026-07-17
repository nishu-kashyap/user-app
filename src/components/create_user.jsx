import EmailInput from "./email.input";
import PasswordInput from "./pwd.input";
function CreateUser() {
    return (
        <div>
            <h2>Create User</h2>

            <EmailInput />
            <br />

            <PasswordInput />

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