import EmailInput from "./email.input";
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