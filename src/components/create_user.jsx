import EmailInput from "./email.input";
import PasswordInput from "./pwd.input";
import NumberInput from "./number.input";
function CreateUser() {
    function handleEmailCaptured(data) {
        console.log(data);
    }
    function handleNumberCaptured(data) {
        console.log(data);
    }
    function handlePasswordCaptured(data) {
        console.log(data);
    }
    return (
        <div>
            <h2>Create User</h2>

            <EmailInput onEmailCaptured={handleEmailCaptured} />
            <br />

            <PasswordInput onPasswordCaptured={handlePasswordCaptured} />

            <br />

            <NumberInput label="Age"
                onNumberCaptured={handleNumberCaptured} />
        </div>
    );
}

export default CreateUser;