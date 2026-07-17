import EmailInput from "./email.input";
import PasswordInput from "./pwd.input";
import NumberInput from "./number.input";
function CreateUser() {
    function handleEmailCaptured(data) {
        console.log(data);
    }
    return (
        <div>
            <h2>Create User</h2>

            <EmailInput onEmailCaptured={handleEmailCaptured} />
            <br />

            <PasswordInput />

            <br />

            <NumberInput />
        </div>
    );
}

export default CreateUser;