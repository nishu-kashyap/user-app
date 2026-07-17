import EmailInput from "./email.input";
import PasswordInput from "./pwd.input";
import NumberInput from "./number.input";
function CreateUser() {
    return (
        <div>
            <h2>Create User</h2>

            <EmailInput />
            <br />

            <PasswordInput />

            <br />

            <NumberInput />
        </div>
    );
}

export default CreateUser;