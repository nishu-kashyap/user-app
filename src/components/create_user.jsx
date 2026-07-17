function CreateUser() {
    return (
        <div>
            <h2>Create User</h2>

            <div>
                <label>Email</label>
                <br />
                <input type="email" placeholder="Enter Email" />
            </div>

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